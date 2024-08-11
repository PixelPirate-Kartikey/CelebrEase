# Celebrease

**Celebrease** is a personal dream maker service designed to help users make their dreams come true. This project includes a React frontend and an Express backend, deployed on Vercel and Render, respectively.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

Celebrease is a web application that provides users with an easy-to-use platform to reach out and make reservations or inquiries. The project consists of:

- **Frontend**: Built with React, deployed on Vercel.
- **Backend**: Powered by Express.js, deployed on Render.

## Features

- **Hero Section**: An engaging introduction to Celebrease.
- **Contact Form**: Allows users to send messages and inquiries.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## Installation

To run this project locally, follow these steps:

### Frontend

1. Clone the repository:

   ```bash
   git clone https://github.com/PixelPirate-Kartikey/Celebrease/frontend.git
2. Navigate to the project directory:
   ```bash
   cd celebrease/frontend
3. Install dependencies:
   ```bash
   npm install
4. Create a .env file in the root directory with the following variables:
   ```bash
   FRONTEND_URL=http://localhost:4000
5. Start the development server:
   ```bash
   npm start

### Backend

1. Clone the repository:
   ```bash
   git clone https://github.com/PixelPirate-Kartikey/Celebrease/backend.git
2. Navigate to the project directory:
   ```bash
   cd celebrease/backend
3. Install dependencies:
   ```bash
   npm install
4. Create a .env file in the root directory with the following variables:
   ```bash
   PORT=4000
   ```bash
    MONGO_URI=your_mongodb_connection_string
5. Start the server:
   ```bash
   npm start


## Usage

- **Frontend**: Visit `http://localhost:3000` in your browser to view the application. The React frontend will serve the application locally.

- **Backend**: The API will be available at `http://localhost:4000/api/v1`. You can test the API endpoints using tools like Postman or cURL.

### Environment Variables

#### Frontend

Make sure to set the environment variable `FRONTEND_URL` in the `.env` file for connecting to the backend. Example:
FRONTEND_URL=http://localhost:4000


#### Backend

Create a `.env` file in the root directory of the backend project with the following environment variables:
PORT=4000
MONGO_URI=your_mongodb_connection_string


Replace `your_mongodb_connection_string` with your actual MongoDB connection string.

## Deployment

### Frontend

1. Push changes to the `main` branch on GitHub.
2. Vercel will automatically detect changes and deploy the latest version of your frontend application.

### Backend

1. Push changes to the `main` branch on GitHub.
2. Render will automatically detect changes and deploy the latest version of your backend API.

## Contributing

We welcome contributions to this project. To contribute:

1. Fork the repository on GitHub.
2. Clone your forked repository to your local machine.
3. Create a new branch for your changes (`git checkout -b feature-branch`).
4. Make your changes and commit them (`git commit -am 'Add new feature'`).
5. Push your changes to the branch (`git push origin feature-branch`).
6. Open a Pull Request to merge your changes into the `main` branch.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

