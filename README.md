# Fuel Blending Analytics Platform

This repository contains the complete codebase for the Fuel Blending Analytics Platform, an enterprise-grade, web-based solution for real-time operational monitoring, AI-powered optimization, and predictive analytics for midstream petroleum operations.

## Overview

The platform is built on a modern, cloud-native architecture using a microservices pattern. It is designed for deployment on Google Cloud Platform (GCP) and leverages services like Cloud Run, BigQuery, and Pub/Sub to deliver a scalable, resilient, and intelligent solution.

### Key Features
- **Role-Based Dashboards**: Tailored views for Operators, Operations Managers, and Optimization Managers.
- **Real-time Monitoring**: Live tracking of KPIs such as Swell Volume, Blend Ratios, RVP, and Sulfur levels.
- **AI/ML Integration**: Advanced models for threshold monitoring, outlier detection, and intelligent recommendations.
- **Advanced Analytics**: C3.ai-style interactive visualizations, including time-series charts, heat maps, and Sankey diagrams.
- **GCP Native**: Optimized for performance, scalability, and security on Google Cloud Platform.

## Project Structure

The repository is organized into the following key directories:
- `/frontend`: React/TypeScript single-page application.
- `/backend`: Node.js/Express RESTful API for core business logic.
- `/ml-services`: Python/FastAPI services for machine learning models.
- `/infrastructure`: Terraform and GCP deployment configurations.
- `/data`: BigQuery schemas, sample data, and migrations.
- `/docs`: Project documentation.

## Technology Stack

The platform is built with a modern, enterprise-grade technology stack:

- **Frontend**: React 18, TypeScript, Tailwind CSS, Recharts
- **Backend**: Node.js 20, Express, TypeScript, PostgreSQL
- **ML Services**: Python 3.11, FastAPI, Scikit-learn, Pandas
- **Containerization**: Docker, Docker Compose

---

## Getting Started

There are two primary ways to run this project:
1.  **Full Stack Demonstration (Recommended)**: Run all services (frontend, backend, ML) locally using Docker. This shows the complete microservices architecture in action.
2.  **Frontend-Only Static Demo**: Run just the React application. This is ideal for quickly viewing the UI without needing Docker or backend services.

### Prerequisites
- Docker and Docker Compose
- Node.js (v18 or later) for the frontend-only mode

---

### 1. Running the Full Application (Local Docker)

This is the recommended way to experience the entire platform.

**Step 1: Set up environment variables**

Create a `.env` file in the root directory by copying the example file:
```bash
cp .env.example .env
```
Review the `.env` file and fill in any necessary values (the defaults are mostly fine for local development).

**Step 2: Build and run the services**

From the root directory, run the following command:
```bash
docker-compose up --build
```
This will build the images for the frontend, backend, and ML services and start them.

**Step 3: Access the services**
- **Frontend Application**: [http://localhost:3000](http://localhost:3000)
- **Backend API**: [http://localhost:8000](http://localhost:8000)
- **ML Services API**: [http://localhost:8001](http://localhost:8001)

---

### 2. Running the Static Frontend Demo

If you only want to view the UI components, you can run the React app directly.

**Step 1: Navigate to the frontend directory**
```bash
cd frontend
```

**Step 2: Install dependencies**
```bash
npm install
```

**Step 3: Start the development server**
```bash
npm start
```
This will open the application in your browser at [http://localhost:3000](http://localhost:3000).

---

## Deployment

This project has two deployment targets based on your needs.

### Full Application (Cloud Deployment)
The `backend` and `ml-services` are designed to be deployed as containerized applications on cloud platforms like Google Cloud Run, AWS Fargate, or Azure Container Apps. The `docker-compose.yml` file serves as a reference for how these services interact.

### Static Frontend (GitHub Pages)

The frontend is a static site and can be easily deployed to services like GitHub Pages, Vercel, or Netlify.

**To deploy to GitHub Pages:**

1.  **Build the static files:**
    ```bash
    cd frontend
    npm run build
    ```
    This will create a `build` directory with the optimized, static assets.

2.  **Deploy the `build` directory:**
    You can use a package like `gh-pages` to automate pushing the `build` directory to a `gh-pages` branch, or you can manually configure your GitHub repository to serve from the `build` directory in your main branch.
