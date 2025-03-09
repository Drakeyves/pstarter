# Neon Database Setup Guide

This guide provides step-by-step instructions for setting up and connecting to a Neon database for the SaaS Starter Kit project.

## What is Neon?

Neon is a serverless PostgreSQL database service that separates storage and compute to offer autoscaling, branching, and bottomless storage. It's ideal for our development workflow as it allows us to create isolated database branches for different features.

## Creating a Neon Account

1. Go to [https://neon.tech](https://neon.tech) and sign up for an account
2. Verify your email address
3. Log in to your Neon dashboard

## Creating a Project

1. From the Neon dashboard, click "New Project"
2. Enter a name for your project (e.g., "saas-starter-kit")
3. Select a region closest to your location
4. Click "Create Project"

## Creating Database Branches

Neon allows you to create branches of your database, which is perfect for our development workflow.

### Creating the Main Branch

1. After creating a project, you'll have a default "main" branch
2. This branch will be used for production

### Creating a Development Branch

1. From your project dashboard, go to the "Branches" tab
2. Click "Create Branch"
3. Name it "dev"
4. Select "main" as the parent branch
5. Click "Create"

### Creating Feature Branches

For each feature you work on, you can create a separate database branch:

1. From your project dashboard, go to the "Branches" tab
2. Click "Create Branch"
3. Name it according to your feature (e.g., "feature-user-profiles")
4. Select "dev" as the parent branch
5. Click "Create"

## Getting Connection Strings

To connect to your Neon database, you'll need the connection string:

1. From your project dashboard, select the branch you want to connect to
2. Click on the "Connection Details" tab
3. Under "Connection String", click "Copy" to copy the full connection string
4. The connection string will look like: `postgresql://user:password@hostname:port/database`

## Setting Up Environment Variables

1. Open your `.env.development` file
2. Set the `DATABASE_URL` variable to your Neon connection string:

```
DATABASE_URL=postgresql://user:password@hostname:port/database
```

Replace `user`, `password`, `hostname`, `port`, and `database` with your actual Neon connection details.

## Initializing Your Database

After connecting to your Neon database, you need to initialize it with your schema:

```bash
npx prisma db push
```

This will create all the necessary tables based on your Prisma schema.

## Seeding Your Database (Optional)

If you want to populate your database with initial data:

```bash
npx prisma db seed
```

## Troubleshooting Connection Issues

### IP Allowlist

By default, Neon allows connections from any IP address. If you're having connection issues:

1. Go to your project settings
2. Check if IP restrictions are enabled
3. If enabled, add your IP address to the allowlist

### Connection Pooling

For production environments, you might want to enable connection pooling:

1. From your project dashboard, go to the "Settings" tab
2. Enable "Connection Pooling"
3. Use the connection pooling URL for your production environment

### SSL Issues

Neon requires SSL for connections. If you're having SSL-related issues:

1. Make sure your connection string includes the SSL parameters
2. For local development, you might need to set `sslmode=require` in your connection string

## Database Management

### Using the Neon SQL Editor

Neon provides a web-based SQL editor for running queries:

1. From your project dashboard, select the branch you want to work with
2. Click on the "SQL Editor" tab
3. Write and execute your SQL queries directly in the browser

### Monitoring Database Usage

You can monitor your database usage from the Neon dashboard:

1. From your project dashboard, go to the "Metrics" tab
2. View CPU, memory, and storage usage
3. Set up alerts for usage thresholds (available on paid plans)

## Best Practices

1. **Use branches for isolation**: Create a new branch for each feature to avoid conflicts
2. **Limit sensitive operations**: Be cautious with schema migrations on shared branches
3. **Regular backups**: Although Neon provides point-in-time recovery, consider additional backups for critical data
4. **Monitor connection limits**: Be aware of the connection limits on your Neon plan
5. **Use connection pooling**: For production environments, use connection pooling to manage connections efficiently
