# exsense

This project is designed to help you manage your expenses efficiently using GraphQL.

This project uses a package.json file at root and the commands here help u start the backend server from a frontend dist folder. If you want to run everything locally, see the setup-local section below.

## Tech Stack
- 🌟 MERN (MongoDB, Express.js, React.js, Node.js)
- 🚀 Apollo GraphQL
- 🔒 Authentication with Passport.js and MongoDB session store
- 👾 Cron jobs for scheduled tasks and automation

## Features
- User authentication and session management
- Expense tracking and management
- GraphQL API for efficient data querying
- Scheduled tasks using cron jobs

## Setup

### Prerequisites
- Node.js
- npm (Node Package Manager)
- MongoDB

### .env File Configuration
Create a `.env` file in the root directory and add the following environment variables:

```js
MONGO_URI=mongodb+srv:<username>:<password>@<cluster-url>/<dbname>?retryWrites=true&w=majority
SESSION_SECRET=<your-session-secret>
PORT=4000
```

### Build the App
To build the app, run the following command:
```bash
npm run build
```

### Start the Server
To start the server, run the following command:
```bash
npm start
```
### Usage
Once the app is running, you can access it in your web browser at http://localhost:3000. You can register a new account, log in, and start managing your expenses.

## Setup Locally
If you want to run everything locally, you can follow these steps:
```bash
cd frontend
npm install
npm run dev
cd ..
npm install
npm run dev
```
Do change the server url to local host when running the server locally.

## Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes. Make sure to follow the code style and include tests for any new features or bug fixes.