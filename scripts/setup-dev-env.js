#!/usr/bin/env node

/**
 * Development Environment Setup Script
 *
 * This script helps set up a development environment by:
 * 1. Creating a .env.development file from .env.example
 * 2. Providing instructions for setting up a Neon database branch
 *
 * Usage: node scripts/setup-dev-env.js [feature-name]
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Get feature name from command line arguments
const featureName = process.argv[2] || 'dev';

// Paths
const rootDir = path.resolve(__dirname, '..');
const envExamplePath = path.join(rootDir, '.env.example');
const envDevPath = path.join(rootDir, '.env.development');

// Check if .env.example exists
if (!fs.existsSync(envExamplePath)) {
  console.error('Error: .env.example file not found');
  process.exit(1);
}

// Create .env.development from .env.example if it doesn't exist
if (!fs.existsSync(envDevPath)) {
  console.log('Creating .env.development file from .env.example...');
  fs.copyFileSync(envExamplePath, envDevPath);
  console.log('✅ Created .env.development file');
} else {
  console.log('⚠️ .env.development file already exists, skipping creation');
}

// Print instructions for setting up Neon database branch
console.log('\n=== Neon Database Branch Setup Instructions ===');
console.log(`1. Log in to your Neon dashboard: https://console.neon.tech`);
console.log(`2. Select your project`);
console.log(`3. Go to the "Branches" tab`);
console.log(`4. Click "Create Branch"`);
console.log(`5. Name it: "${featureName}"`);
console.log(`6. Copy the connection string`);
console.log(
  `7. Update your .env.development file with the new connection string:`
);
console.log(`   DATABASE_URL=your-neon-connection-string\n`);

// Check if Docker is installed
let dockerInstalled = false;
try {
  execSync('docker --version', { stdio: 'ignore' });
  dockerInstalled = true;
} catch {
  // Docker is not installed
}

// Print instructions for local development with Docker
if (dockerInstalled) {
  console.log('=== Local Development with Docker ===');
  console.log('Alternatively, you can use Docker for local development:');
  console.log('1. Run: docker-compose up -d');
  console.log('2. Update your .env.development file with:');
  console.log(
    '   DATABASE_URL=postgresql://admin:admin@localhost:5432/saas-starter-kit\n'
  );
} else {
  console.log(
    '⚠️ Docker not detected. For local database setup, please install Docker and Docker Compose.\n'
  );
}

// Print next steps
console.log('=== Next Steps ===');
console.log('1. Install dependencies: npm install');
console.log('2. Run database migrations: npx prisma db push');
console.log('3. Start the development server: npm run dev');
console.log('\nHappy coding! 🚀');
