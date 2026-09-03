# GenAI Job Prep

This project contains a Node.js/Express backend and React + Vite frontend.

## Local setup

### Backend

1. Copy `.env.example` to `.env` in the `Backend` directory.
2. Fill in the required values for MongoDB, JWT, and Gemini.
3. Install dependencies:
   ```bash
   cd Backend
   npm install
   npm run dev
   ```

### Frontend

1. Copy `.env.example` to `.env` in the `Frontend` directory.
2. Install dependencies:
   ```bash
   cd Frontend
   npm install
   npm run dev
   ```

## Production deployment

- Backend: set `NODE_ENV=production`, `PORT`, `MONGO_URI`, `JWT_SECRET`, `GOOGLE_GENAI_API_KEY`, and `CORS_ORIGIN`.
- Frontend: set `VITE_API_URL` to your deployed backend URL.
- Run the backend with:
  ```bash
  cd Backend
  npm install
  npm start
  ```
- Run the frontend build with:
  ```bash
  cd Frontend
  npm install
  npm run build
  ```

## Health check

The backend exposes `/health` for environment checks.
