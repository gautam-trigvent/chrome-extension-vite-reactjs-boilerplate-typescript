console.log("Content script.ts");

const newDiv = document.createElement('div');
newDiv.id = 'chrome-extension-vite-reactjs-boilerplate-typescript';
newDiv.style.height = '200px';
newDiv.style.width = '200px';
newDiv.style.position = 'absolute';
newDiv.style.top = '100px';
newDiv.style.right = '50px';
newDiv.style.zIndex = '99999999';

document.body.appendChild(newDiv);

import React from 'react'
import ReactDOM from 'react-dom/client'
import ContentScriptApp from './ContentScriptApp'

const rootElement = document.getElementById('chrome-extension-vite-reactjs-boilerplate-typescript');
if (rootElement) {
    ReactDOM.createRoot(rootElement!).render(
        <React.StrictMode>
            <ContentScriptApp />
        </React.StrictMode>,
    )
} else {
    console.error('Element with ID "chrome-extension-vite-reactjs-boilerplate-typescript" not found.');
}