# Laravel + React Portfolio Starter

This starter portfolio is tailored for Md. Shakeeb Qamar and combines engineering experience with web development.

## Frontend setup

```bash
cd frontend
npm install
npm run dev
```

Open the local Vite URL in your browser.

## Laravel backend setup

Create a new Laravel project first:

```bash
composer create-project laravel/laravel portfolio-backend
cd portfolio-backend
```

Then copy these files into the Laravel project:

- `backend/routes/api.php` -> `routes/api.php`
- `backend/app/Http/Controllers/ContactController.php` -> `app/Http/Controllers/ContactController.php`
- `backend/database/migrations/2026_01_01_000000_create_contact_messages_table.php` -> `database/migrations/2026_01_01_000000_create_contact_messages_table.php`

Configure `.env` database settings, then run:

```bash
php artisan migrate
php artisan serve
```

The React contact form sends data to:

```text
http://localhost:8000/api/contact
```

## What to edit

In `frontend/src/main.jsx`, update:

- LinkedIn link
- GitHub link
- project links
- resume file path
- project descriptions if needed

Put your CV PDF into the frontend `public` folder as `resume.pdf`.
