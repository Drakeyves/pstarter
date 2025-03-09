# Development Workflow

This document outlines the development workflow for the SaaS Starter Kit project. It provides a step-by-step guide for setting up a local development environment, implementing new features, testing, and deploying to production.

## Branch Strategy

We follow a simplified Git Flow approach:

- `main` - Production branch, always deployable
- `dev` - Development branch, used for integration testing
- `feature/*` - Feature branches for new development
- `bugfix/*` - Bug fix branches
- `hotfix/*` - Hot fix branches for urgent production fixes

## Local Development Setup

### 1. Clone the repository

```bash
git clone https://github.com/Drakeyves/pstarter.git
cd pstarter
```

### 2. Create a development branch

```bash
git checkout -b dev
git push -u origin dev
```

### 3. Set up environment variables

Create a `.env.development` file for local development:

```bash
cp .env.example .env.development
```

Edit the `.env.development` file to use a local database or a development database on Neon.

### 4. Set up local database

Option 1: Use Docker (recommended for local development)
```bash
docker-compose up -d
```

Option 2: Use a development database on Neon
- Create a new database branch in your Neon dashboard
- Update the `DATABASE_URL` in your `.env.development` file

### 5. Install dependencies

```bash
npm install
```

### 6. Run database migrations

```bash
npx prisma db push
```

### 7. Start the development server

```bash
npm run dev
```

## Feature Development Process

1. Create a feature branch from `dev`
   ```bash
   git checkout dev
   git pull
   git checkout -b feature/your-feature-name
   ```

2. Implement your feature with regular commits

3. Test your feature locally
   ```bash
   npm run test
   npm run test:e2e
   ```

4. Push your feature branch
   ```bash
   git push -u origin feature/your-feature-name
   ```

5. Create a Pull Request to merge into `dev`

6. After review and approval, merge into `dev`

7. Test on the development environment

8. When ready for production, create a PR from `dev` to `main`

## Testing

Before merging to `dev` or `main`, ensure:

1. All unit tests pass: `npm run test`
2. E2E tests pass: `npm run test:e2e`
3. Type checking passes: `npm run check-types`
4. Linting passes: `npm run check-lint`

## Database Management

### Using Neon Database Branches

Neon allows you to create database branches for development:

1. Log in to your Neon dashboard
2. Select your project
3. Go to the "Branches" tab
4. Click "Create Branch"
5. Name it according to your feature (e.g., "feature-user-profiles")
6. Copy the connection string
7. Update your `.env.development` file with the new connection string

This allows you to have isolated database environments for each feature.

## Deployment

### Development Deployment

The `dev` branch is automatically deployed to a development environment on Vercel.

### Production Deployment

The `main` branch is automatically deployed to production on Vercel.

## Troubleshooting

### Database Connection Issues

If you encounter database connection issues:

1. Check your `.env.development` file for correct database credentials
2. Ensure your IP is whitelisted in Neon if using a remote database
3. Check if Docker is running if using a local database

### Vercel Deployment Issues

If you encounter deployment issues on Vercel:

1. Check the build logs in the Vercel dashboard
2. Ensure all environment variables are correctly set in the Vercel project settings
3. Verify that the build command is correctly set to `npm run build` 