# Node.js Hello World Tutorial

A minimal Node.js tutorial project demonstrating HTTP server fundamentals with a single endpoint that returns "Hello world".

## Overview

This project serves as an educational introduction to Node.js server-side development, implementing a simple HTTP server with one endpoint (`/hello`) that responds with "Hello world" to GET requests. The implementation prioritizes clarity and simplicity, making it ideal for developers new to Node.js.

## Features

- Single HTTP endpoint: `GET /hello` returns "Hello world"
- Localhost-only binding for security (127.0.0.1)
- Configurable port via environment variable
- Graceful error handling (404, 405 responses)
- Clean shutdown on termination signals
- Cross-platform compatible (Windows, macOS, Linux)
- Built with Express.js framework for industry-standard patterns

## Prerequisites

- Node.js 14.x, 16.x, 18.x, or 20.x LTS
- npm (included with Node.js installation)

## Installation

**Clone the repository:**
```bash
git clone <repository-url>
cd nodejs-hello-world-tutorial
```

**Install dependencies:**
```bash
npm install
```

This will install Express.js and its dependencies.

## Usage

**Start the server:**
```bash
npm start
```

Or directly with Node.js:
```bash
node server.js
```

**With custom port:**
```bash
PORT=8080 npm start
```

Or on Windows:
```cmd
set PORT=8080 && node server.js
```

**Expected output:**
```
Server running at http://127.0.0.1:3000/
Try: curl http://127.0.0.1:3000/hello
```

## Testing

### Using curl

**Test successful response:**
```bash
curl http://127.0.0.1:3000/hello
```

Expected output: `Hello world`

**Test 404 error:**
```bash
curl http://127.0.0.1:3000/invalid
```

Expected output: `404 Not Found`

**Test 405 error (wrong HTTP method):**
```bash
curl -X POST http://127.0.0.1:3000/hello
```

Expected output: `Cannot POST /hello` (Express.js default for unsupported methods)

### Using a Web Browser

Navigate to `http://127.0.0.1:3000/hello` in your web browser. You should see the text "Hello world" displayed.

## API Reference

### GET /hello

Returns a plain text "Hello world" response.

**Request:**
```
GET /hello HTTP/1.1
Host: 127.0.0.1:3000
```

**Response:**
```
HTTP/1.1 200 OK
Content-Type: text/plain; charset=utf-8

Hello world
```

**Status Codes:**
- `200 OK` - Successful response
- `405 Method Not Allowed` - Request method is not GET
- `404 Not Found` - Requested path does not exist

## Environment Variables

| Variable | Description | Default | Example |
|----------|-------------|---------|---------|
| `PORT` | Port number for HTTP server | `3000` | `PORT=8080 node server.js` |

**Setting Environment Variables:**

**Unix/Linux/macOS:**
```bash
export PORT=8080
node server.js
```

**Windows Command Prompt:**
```cmd
set PORT=8080
node server.js
```

**Windows PowerShell:**
```powershell
$env:PORT=8080
node server.js
```

## Architecture

### Project Structure

```
nodejs-hello-world-tutorial/
├── server.js           # Main HTTP server implementation
├── package.json        # Project manifest and dependencies
├── package-lock.json   # Dependency lock file
├── .gitignore         # Git exclusion patterns
├── .env.example       # Environment variable documentation
├── README.md          # This file
└── node_modules/      # Installed dependencies (not in git)
```

### Implementation Details

**Server Binding:**
- The server binds exclusively to `127.0.0.1` (localhost) for security
- This prevents accidental exposure to external networks during development

**Port Configuration:**
- Default port is 3000
- Can be overridden via `PORT` environment variable
- Useful for avoiding port conflicts

**Error Handling:**
- 404 responses for undefined routes
- 405 responses for unsupported HTTP methods (handled by Express.js)
- Graceful shutdown on SIGINT (Ctrl+C) and SIGTERM signals
- Port conflict detection (EADDRINUSE)

**Response Format:**
- Content-Type: `text/plain`
- Status Code: 200 for success
- Body: "Hello world"

## Troubleshooting

### Port Already in Use

**Error:** `Error: Port 3000 is already in use`

**Solution:** Either stop the process using port 3000, or start the server on a different port:
```bash
PORT=8080 npm start
```

### Cannot Find Module 'express'

**Error:** `Cannot find module 'express'`

**Solution:** Install dependencies:
```bash
npm install
```

### Node.js Version Issues

**Error:** Engine compatibility warnings

**Solution:** Ensure you have Node.js 14.x or higher:
```bash
node --version
```

If your version is older, download and install a newer version from [nodejs.org](https://nodejs.org/).

## Learning Path

This tutorial demonstrates:

1. **HTTP Server Basics:** Creating and starting an HTTP server
2. **Routing:** Defining endpoints and handling specific paths
3. **Request/Response Cycle:** Processing requests and sending responses
4. **Error Handling:** Returning appropriate HTTP status codes
5. **Configuration:** Using environment variables
6. **Graceful Shutdown:** Handling termination signals properly

## Next Steps

After mastering this basic server, consider exploring:

- Adding more endpoints (POST, PUT, DELETE)
- Request body parsing (JSON payloads)
- Query parameter handling
- Middleware for logging and authentication
- Database integration (MongoDB, PostgreSQL)
- Template engines for HTML rendering
- REST API design patterns
- Testing with Jest or Mocha

## License

MIT License - see LICENSE file for details

## Contributing

This is a tutorial project for educational purposes. Feel free to fork and modify for your own learning!

## Author & Acknowledgments

**Purpose:** Educational tutorial project for learning Node.js HTTP server fundamentals.

**Intended Audience:** Beginner developers new to Node.js server-side development.

**Learning Objectives:**
- Understand HTTP request/response cycle
- Learn Node.js server creation and port binding
- Practice proper error handling and status codes
- Experience graceful shutdown patterns

For questions, improvements, or feedback about this tutorial, please open an issue in the repository.