# Node Mongo Express Boilerplate
A Node.js, MongoDB, and Express boilerplate project using TypeScript. This boilerplate sets up a basic application structure with essential packages and configurations to help you get started quickly.

## Features
- **Core Dependencies**:
  - `express` (v4.21.1): A minimal and flexible Node.js web application framework.
  - `mongoose` (v8.7.3): A MongoDB object modeling tool for Node.js.
  - `dotenv` (v16.4.5): Loads environment variables from a `.env` file into `process.env`.
  - `cookie-parser` (v1.4.7): Parse Cookie header and populate `req.cookies`.
  - `cors` (v2.8.5): Middleware for enabling Cross-Origin Resource Sharing.

- **Development Dependencies**:
  - `typescript` (v5.6.3): A superset of JavaScript that compiles to clean JavaScript output.
  - `eslint` (v9.13.0): A tool for identifying and reporting on patterns in JavaScript.
  - `@typescript-eslint/eslint-plugin` (v8.11.0) & `@typescript-eslint/parser` (v8.11.0): ESLint rules and parser for TypeScript.
  - `husky` (v9.1.6): Git hooks made easy.
  - `lint-staged` (v15.2.10): Run linters on pre-committed files.
  - `npm-run-all` (v4.1.5): Run multiple npm scripts in parallel or sequentially.
  - `prettier` (v3.3.3): An opinionated code formatter.
  - `ts-node-dev` (v2.0.0): A development tool that helps run TypeScript applications.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/itzJunaedRayhan/backend-node-express-mongoose-typescript-boilerplate.git
   cd backend-node-express-mongoose-typescript-boilerplate
   ```

2. Install dependencies using Yarn:
   ```bash
   yarn install
   ```

3. Create a `.env` file in the root directory and add your environment variables. Here’s an example:
   ```env
   PORT=5000
   MONGODB_URI= DATABASE_URL = mongodb+srv://USER_NAME:PASSWORD@cluster0.458y6.mongodb.net/DATABASE_NAME?retryWrites=true&w=majority&appName=Cluster0
   ```

## Usage

To start the application, use the following command:

```bash
yarn start
```

This command will run the server using `ts-node-dev`, which watches for file changes and automatically restarts the server.

## Scripts

Here are some helpful scripts you can run:

- **Start the server**: 
  ```bash
  yarn start
  ```
- **Check for linting errors**: 
  ```bash
  yarn lint:check
  ```
- **Fix linting errors**: 
  ```bash
  yarn lint:fix
  ```
- **Check formatting with Prettier**: 
  ```bash
  yarn prettier:check
  ```
- **Fix formatting issues**: 
  ```bash
  yarn prettier:fix
  ```

- **Run lint and prettier checks on staged files**:
  This is automatically triggered on pre-commit using Husky:
  ```bash
  yarn lint-prettier
  ```

### Linting and Formatting

To ensure your code is well-structured, you can use `lint-staged` in combination with `husky`. This will run your linting and formatting checks on staged files before committing.