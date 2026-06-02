import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Aspentech Design System imports
import '@aspentech/pf-ui-core/main.css';

import { setBasePath } from "@shoelace-style/shoelace";
import { registerIconLibrary } from "@shoelace-style/shoelace/dist/utilities/icon-library.js";

// Register only the Aspentech components used by this app to keep bundles smaller.
import "@aspentech/pf-ui-core/components/eds-slider";
import "@aspentech/pf-ui-compound/components/aspentech-appbar";
import "@aspentech/pf-ui-compound/components/aspentech-page-header";
import "@aspentech/pf-ui-compound/components/aspentech-page-info";
import "@aspentech/pf-ui-compound/components/aspentech-selectable-card";
import "@aspentech/pf-ui-compound/components/aspentech-shell-template";
import "@aspentech/pf-ui-compound/components/aspentech-sidenav";
import "@aspentech/pf-ui-compound/components/aspentech-sidenav-item";

// Icon Registry Setup
const iconRegExp = /^(.*?)(_(round|sharp|filled))?$/;

setBasePath('/assets/shoelace');

registerIconLibrary('material', {
  resolver: name => {
    const match = iconRegExp.exec(name);
    if (!match) return '';
    const iconName = match[1];
    const variant = match[3] || 'outlined';
    const iconUrl = `/assets/icons/material/${variant}/${iconName}.svg`;
    console.log(`Loading icon: ${name} -> ${iconUrl}`);
    return iconUrl;
  },
  mutator: svg => svg.setAttribute('fill', 'currentColor'),
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)