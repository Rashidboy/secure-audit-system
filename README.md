Markdown
# 🛡️ GuardianLog — Enterprise Audit & Security Logging System

Choose your language / Tilni tanlang / Выберите язык:
* [English](#-english)
* [O'zbekcha](#-ozbekcha)
* [Русский](#-русский)

---

## 🇬🇧 English

A lightweight, production-ready **Audit Logging System** designed to track user activities and system events in real-time. Built using a modern full-stack decoupled architecture with high-availability considerations like containerized microservices and automated database reconnect strategies.

### 🚀 Key Features & What You Will Learn
* **Resilient DB Connection:** The FastAPI backend implements a smart polling mechanism to ensure the app doesn't crash if PostgreSQL takes a few seconds to start inside Docker.
* **RESTful Audit API:** Clean `GET` and `POST` endpoints with robust model validation using Pydantic.
* **Database Optimization:** Real-time logging utilizing PostgreSQL relational integrity and automated schema migration.
* **Containerization:** Clean, modular multi-stage `docker-compose` setup.

### 🛠️ Tech Stack
* **Backend:** Python 3.10, FastAPI, Uvicorn, Psycopg2, Pydantic
* **Frontend:** React.js, Custom Responsive UI
* **Database:** PostgreSQL 15 (Alpine Linux optimized)
* **DevOps:** Docker, Docker Compose

### 🏁 Quick Start
```bash
git clone [https://github.com/Rashidboy/secure-audit-system.git](https://github.com/Rashidboy/secure-audit-system.git)
cd secure-audit-system
sudo docker compose up --build
Frontend UI: http://localhost:3000

Swagger API Docs: http://localhost:8000/docs

🇺🇿 O'zbekcha
Foydalanuvchi harakatlari va tizim hodisalarini real vaqt rejimida kuzatish uchun mo'ljallangan, ishlab chiqarishga tayyor, ixcham Audit jurnali tizimi. Loyiha konteynerlashtirilgan mikroxizmatlar va ma'lumotlar bazasiga avtomatik qayta ulanish strategiyalari kabi yuqori barqarorlik mexanizmlariga ega zamonaviy full-stack arxitekturada qurilgan.

🚀 Asosiy imkoniyatlar va nimalarni o'rganasiz?
Bardoshli DB ulanishi: Docker ichida PostgreSQL ishga tushishi uchun bir necha soniya vaqt ketganda backend o'chib ketmasligi uchun FastAPI-da aqlli qayta ulanish logikasi muhandislik qilingan.

RESTful Audit API: Pydantic yordamida qat'iy ma'lumotlar validatsiyasiga ega toza GET va POST endpoindlari.

Ma'lumotlar bazasini optimallashtirish: PostgreSQL relatsion yaxlitligi va konteyner ishga tushganda avtomatik jadval migratsiyasi.

Konteynerizatsiya: Yagona buyruq orqali loyihani ko'taruvchi toza va modulli docker-compose konfiguratsiyasi.

🛠️ Texnologiyalar tarkibi
Backend: Python 3.10, FastAPI, Uvicorn, Psycopg2, Pydantic

Frontend: React.js, Maxsus responsiv UI qobiq

Database: PostgreSQL 15 (Alpine Linux)

DevOps: Docker, Docker Compose

🏁 Tezkor ishga tushirish
Bash
git clone [https://github.com/Rashidboy/secure-audit-system.git](https://github.com/Rashidboy/secure-audit-system.git)
cd secure-audit-system
sudo docker compose up --build
Frontend interfeysi: http://localhost:3000

Swagger API hujjatlari: http://localhost:8000/docs

🇷🇺 Русский
Легковесная и готовая к работе в продакшене Система аудита и логирования, разработанная для отслеживания действий пользователей и системных событий в режиме реального времени. Построена на базе современной раздельной архитектуры full-stack с учетом требований высокой доступности, таких как контейнеризированные микросервисы и автоматическое восстановление соединения с базой данных.

🚀 Ключевые особенности и чему вы научитесь
Отказоустойчивое подключение к БД: Бекенд на FastAPI реализует интеллектуальный механизм повторных попыток подключения, что предотвращает падение приложения, если PostgreSQL в Docker требуется несколько секунд для полной инициализации.

RESTful Audit API: Чистые эндпоинты GET и POST с надежной валидацией моделей при помощи Pydantic.

Оптимизация базы данных: Логирование в реальном времени с использованием реляционной целостности PostgreSQL и автоматической миграцией схем при запуске.

Контейнеризация: Чистая, модульная многоэтапная сборка через docker-compose.

🛠️ Технологический стек
Backend: Python 3.10, FastAPI, Uvicorn, Psycopg2, Pydantic

Frontend: React.js, кастомный адаптивный интерфейс

Database: PostgreSQL 15 (оптимизировано под Alpine)

DevOps: Docker, Docker Compose

🏁 Быстрый запуск
Bash
git clone [https://github.com/Rashidboy/secure-audit-system.git](https://github.com/Rashidboy/secure-audit-system.git)
cd secure-audit-system
sudo docker compose up --build
Frontend UI: http://localhost:3000

Документация Swagger API: http://localhost:8000/docs

Developed with 💻 and passion by Rashid Mirtazaqulov. Feel free to star 🌟 the repo if this project helped you!