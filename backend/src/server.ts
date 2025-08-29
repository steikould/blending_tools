import express, { Express, Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

// Load environment variables
dotenv.config();

const app: Express = express();
const PORT = process.env.BACKEND_API_PORT || 8000;

// --- Middleware ---
app.use(cors({ origin: process.env.CORS_ORIGIN })); // Allow requests from our frontend
app.use(helmet()); // Set various security headers
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(morgan('dev')); // Log HTTP requests in dev environment

// --- API Routes ---
// Health check route
app.get('/', (req: Request, res: Response) => {
  res.status(200).json({ message: 'Fuel Blending Backend API is running!' });
});

// --- API Routes ---
import apiRoutes from './routes/index';
app.use('/api/v1', apiRoutes);

// --- Error Handling ---
// 404 Not Found handler
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({ error: 'Not Found', message: `The requested URL ${req.originalUrl} was not found on this server.` });
});

// Global error handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error', message: err.message });
});


// --- Server Activation ---
const server = app.listen(PORT, () => {
  console.log(`Backend server is running on http://localhost:${PORT}`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM signal received: closing HTTP server');
  server.close(() => {
    console.log('HTTP server closed');
  });
});

export default app;
