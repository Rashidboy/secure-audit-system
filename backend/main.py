from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import os
import psycopg2
from psycopg2.extras import RealDictCursor

app = FastAPI(title="Fido-Biznes Secure Audit API")

# React frontend 3000-portdan so'rov yubora olishi uchun CORS-ni yoqamiz
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Real loyihada aniq URL yoziladi
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

DATABASE_URL = os.getenv("DATABASE_URL")

def get_db_connection():
    try:
        conn = psycopg2.connect(DATABASE_URL, cursor_factory=RealDictCursor)
        return conn
    except Exception as e:
        print("PostgreSQL-ga ulanishda xatolik:", e)
        raise HTTPException(status_code=500, detail="Ma'lumotlar bazasiga ulanib bo'lmadi")

# Tizim ishga tushganda audit jadvalini avtomatik yaratish
@app.on_event("startup")
def startup_event():
    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute("""
        CREATE TABLE IF NOT EXISTS audit_logs (
            id SERIAL PRIMARY KEY,
            action VARCHAR(255) NOT NULL,
            user_role VARCHAR(50) NOT NULL,
            timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
    """)
    conn.commit()
    cur.close()
    conn.close()
    print("Audit jadvali tayyor!")

class AuditLogCreate(BaseModel):
    action: str
    user_role: str

@app.get("/api/logs")
def get_logs():
    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute("SELECT * FROM audit_logs ORDER BY timestamp DESC;")
    logs = cur.fetchall()
    cur.close()
    conn.close()
    return logs

@app.post("/api/logs", status_code=201)
def create_log(log: AuditLogCreate):
    if not log.action.strip():
        raise HTTPException(status_code=400, detail="Amal turi bo'sh bo'lishi mumkin emas")
        
    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute(
        "INSERT INTO audit_logs (action, user_role) VALUES (%s, %s) RETURNING *;",
        (log.action, log.user_role)
    )
    new_log = cur.fetchone()
    conn.commit()
    cur.close()
    conn.close()
    return new_log