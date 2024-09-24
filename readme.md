# Firebase Functions REST API

This project is a simple REST API built using Firebase Functions and Node.js. It allows you to handle HTTP requests locally using the Firebase Emulator.

## Prerequisites

Before setting up and running this project, ensure you have the following installed:

- [Node.js](https://nodejs.org/en/) (v12 or later)
- [npm](https://www.npmjs.com/)
- [Firebase CLI](https://firebase.google.com/docs/cli) (v9.0.0 or later)

## Setup Instructions

1. **Install Firebase CLI**

    If you haven't already installed the Firebase CLI, you can install it globally using npm:

    ```bash
    npm install -g firebase-tools
    ```

2. **Create a Firebase project in the cloud console**

    It's easier to create a project in the [cloud console](https://console.firebase.google.com/) because then you will know its unique ID, and it will also populate to the CLI once you login.

3. **Log in to Firebase using the CLI**

    ```bash
    firebase login
    ```
    You can then view projects that you have already by running:
    ```bash
    firebase projects:list
    ```

4. **Initialize Firebase Functions**

    Navigate to the root directory of your project, or create a new folder for your project:

    ```bash
    mkdir my-firebase-api
    cd my-firebase-api
    ```

    Initialize Firebase functions in your project:

    ```bash
    firebase init functions
    ```
    This will run the firebase init wizard and ask you for a bunch of options. Select Use an existing project and then choose the project you created in the admin console. If you select Create new project, then you will need to provide a unique ID.

5. **Modify the `index.js` File for REST API**

    Go to the `functions/index.js` file. Firebase Functions uses Express.js to handle HTTP requests, so you can set up a basic REST API.

    Install Express in the `functions` directory:

    ```bash
    cd functions
    npm install express
    ```
    Then, modify index.js to use Express and define your REST endpoints.

    ```javascript
    const functions = require('firebase-functions');
    const express = require('express');
    const app = express();

    // Define a simple GET endpoint
    app.get('/hello', (req, res) => {
        res.send('Hello from Firebase Functions!');
    });

    // Define a POST endpoint
    app.post('/data', (req, res) => {
        const data = req.body;
        res.send(`Received data: ${JSON.stringify(data)}`);
    });

    // Export the app as an HTTP function
    exports.api = functions.https.onRequest(app);
    ```
6. **Run Firebase Functions Locally**

    To test your function locally, use Firebase’s emulators:
    ```bash
    firebase emulators:start
    ```

    This will start the Firebase local emulator and expose your HTTP endpoints locally. You should see something like this in the output:

    ```bash
    ✔ functions: localhost:5001/{YOUR_PROJECT_ID}/us-central1/api
    ```
    Here, us-central1 is the default region if you have not selected a region in the firebase project console.

7. **Test the API using Curl or whatever**

Curl (GET):
```bash
curl http://localhost:5001/{YOUR_PROJECT_ID}/us-central1/api/hello
```
Curl (POST):
```bash
curl -X POST http://localhost:5001/{YOUR_PROJECT_ID}/us-central1/api/data -d '{"key":"value"}' -H "Content-Type: application/json"
```
