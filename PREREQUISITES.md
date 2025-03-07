# Prerequisites

To run this project, you need to have the following installed:

- **Node.js** (Version: >=18.x)
- **PostgreSQL**
- **NPM**
- **Docker compose**

## Setting Up PostgreSQL with Docker

The project includes a `docker-compose.yml` file that sets up a PostgreSQL container. To start it, run:

```bash
docker-compose up -d
```

This will start a PostgreSQL instance with the following configuration:
- Database name: saas-starter-kit
- Username: admin
- Password: admin
- Port: 5432

## Installing Node.js Dependencies

After ensuring Node.js (>=18.x) and NPM are installed, run:

```bash
npm install
```

This will install all the required dependencies for the project. 