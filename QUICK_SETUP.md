# Quick Setup Guide

This guide provides a quick reference for setting up the development environment for the SaaS Starter Kit project.

## Prerequisites

- Node.js (v18 or higher)
- npm (v8 or higher)
- Git
- Docker (optional, for local database)

## Setup Steps

### 1. Clone the Repository

```bash
git clone https://github.com/Drakeyves/pstarter.git
cd pstarter
```

### 2. Set Up Environment Variables

```bash
cp .env.example .env.development
```

Edit `.env.development` with your specific configuration:

- Set `DATABASE_URL` to your Neon database URL
- Configure SMTP settings for email functionality
- Set authentication secrets and provider credentials

### 3. Install Dependencies

```bash
npm install
```

### 4. Set Up Database

#### Option A: Use Neon Database (Recommended)

1. Create an account on [Neon](https://neon.tech/)
2. Create a new project
3. Create a new branch for development
4. Copy the connection string to your `.env.development` file

#### Option B: Use Local Docker Database

```bash
docker-compose up -d
```

### 5. Run Database Migrations

```bash
npx prisma db push
```

### 6. Start Development Server

```bash
npm run dev
```

The application will be available at http://localhost:4002

## Common Commands

- Run tests: `npm run test`
- Run E2E tests: `npm run test:e2e`
- Check types: `npm run check-types`
- Check linting: `npm run check-lint`
- Format code: `npm run format`

## Branching Strategy

- Always create feature branches from `dev`
- Format: `feature/your-feature-name`
- Create pull requests to merge back into `dev`

## Getting Help

If you encounter any issues during setup, refer to the full [DEVELOPMENT.md](./DEVELOPMENT.md) document or reach out to the team lead.
