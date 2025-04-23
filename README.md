# My Diagram Editor

A React-based diagram editor built with Konva, Zustand, and Tailwind CSS. This library allows to create and manipulate diagrams in a React application.

## Features

- Create and edit diagrams using Konva for canvas rendering.
- State management with Zustand for efficient updates.
- Styled with Tailwind CSS for a modern look.

## Prerequisites

Before using this library, ensure you have the following installed:

- **Node.js**: Version 20.18.2 (this project was developed and tested with this specific version).
  - To check your Node.js version: `node -v`
  - To install Node.js 20.18.2, use a version manager like `nvm`:
    ```bash
    nvm install 20.18.2
    nvm use 20.18.2
    ```

## Development

npm install
npm run dev

## Build`

npm run build
This command outputs the production bundle into the dist/ directory:
index.es.js – ESM bundle
index.cjs.js – CommonJS bundle
index.css – styles
\*.map – source maps

## Using as a Git Submodule

- Add the submodule from your main project root: `git submodule add https://github.com/mikefedorko/my-diagram-editor.git libs/diagram-editor`
- Build the diagram editor:
  `cd libs/diagram-editor`
  `npm install`
  `npm run build`
  `cd ../../`
- Link the module locally, in your main project’s package.json, add: `"dependencies": { "@mikefedorko/my-diagram-editor": "file:libs/diagram-editor"}` Then run: `npm install`
- Import and use in your app: `import DiagramEditor from '@mikefedorko/my-diagram-editor';`
