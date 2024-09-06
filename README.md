# PWA Text Editor - JATE (Just Another Text Editor)

## Description

JATE (Just Another Text Editor) is a Progressive Web Application (PWA) that functions as a basic text editor with offline capabilities. This application allows users to create and store text notes directly in the browser, with support for data persistence through IndexedDB. It can be installed as a standalone app and used offline, making it ideal for taking notes and editing text without internet access.

## Table of Contents

[Installation]()
[Usage]()
[Demo]()
[Technologies]()
[License]()
[Contributing]()
[Questions]()

## Installation
### Locally
To run the application locally, follow these steps:

1. Clone the repository:
```bash
git clone https://github.com/surpritam/pwa-text-editor.git
```
2. Navigate into the project directory:
```bash
cd jate-text-editor
```
3. Install dependencies:
```bash
npm install
```
4. Build the client:
Build the frontend by running:
```bash
npm run build
```
5. Start the development server:
Start both the frontend and backend servers for development:
```bash
npm run start:dev
```
6. Access the application:
Open your browser and navigate to http://localhost:8080 to view the application.

7. Deployment
The application is hosted on Render: https://pwa-text-editor-sczc.onrender.com .

## Usage

Once the application is running, you can:

1. Type or edit text within the editor.
2. The content is automatically saved to IndexedDB and localStorage for offline access.
3. When the application is used offline, previously saved data will be loaded, allowing you to edit without an internet connection.
4. You can install the application as a PWA by clicking the "Install" button or using your browser's PWA installation feature.

## Demo

## Technologies

- Node.js: Backend server for handling routes and serving static assets.
- Express: Middleware for routing and serving static files.
- Webpack: Module bundler for handling JavaScript, CSS, and HTML files.
- Workbox: For service worker generation and caching strategies.
- IndexedDB: Database for client-side data persistence.
- CodeMirror: A versatile text editor for the web with syntax highlighting.
- PWA: Progressive Web App setup for offline access and installation.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.

## Contributing
Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## Questions
If you have any questions, feel free to contact me:
GitHub: [Pritam Sur](https://github.com/surpritam)
