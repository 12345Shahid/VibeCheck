# VibeCheck

VibeCheck is a modern, real-time social sentiment dashboard built on the MERN stack. It leverages AI-driven sentiment analysis to categorize user interactions into "Vibes," providing a unique way to visualize the emotional pulse of a community.

## Features

- **Real-Time Feed**: Powered by Socket.io, posts appear instantly across all connected clients.
- **Sentiment Analysis**: Automatic categorization of posts into Happy, Productive, or Chaotic states using advanced NLP.
- **Vibe Filtering**: Users can filter their experience based on the community's emotional current.
- **Microservices Architecture**: Clean separation between the Node.js/Express backend and the Vite-powered React frontend.

## Tech Stack

- **Frontend**: React, Vite, Axios, Socket.io-client
- **Backend**: Node.js, Express, MongoDB/Mongoose, Socket.io, Sentiment
- **Deployment**: Ready for containerization or cloud hosting.

## Getting Started

### Prerequisites

- Node.js (v18+)
- MongoDB (running locally or via Atlas)

### Installation

1. Clone the repository.
2. Install dependencies:
   ```bash
   # Server
   cd server && npm install
   # Client
   cd client && npm install
   ```
3. Start the application:
   ```bash
   # Server
   cd server && npm start
   ```

## Author

Shahid Hasan
