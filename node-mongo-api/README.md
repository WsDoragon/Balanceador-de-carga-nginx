# Node.js MongoDB API

This project is a simple Node.js API that uses MongoDB as the database. It is designed to be run on different ports for load balancing using Nginx.

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [License](#license)

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd node-mongo-api
   ```

2. Install the dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory and add your MongoDB connection details:
   ```
   DB_USER=your_db_user
   DB_PASS=your_db_password
   DB_HOST=your_db_host
   DB_NAME=your_db_name
   DB_PORT=your_db_port
   PORT=your_app_port
   ```

## Configuration

Make sure to configure your MongoDB connection details in the `.env` file. The application uses Mongoose to connect to the database.

## Usage

To start the application, run:
```
npm start
```

The server will start on the port specified in the `.env` file.

## API Endpoints

- `GET /`: Returns a welcome message.
- Additional endpoints will be defined in the `src/routes/index.js` file.

## License

This project is licensed under the MIT License.