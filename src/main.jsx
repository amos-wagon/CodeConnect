import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Aspentech Design System imports
import '@aspentech/pf-ui-core/main.css';

import { setBasePath } from "@shoelace-style/shoelace";
import { registerIconLibrary } from "@shoelace-style/shoelace/dist/utilities/icon-library.js";

// Register only the Aspentech components used by this app to keep bundles smaller.
import "@aspentech/pf-ui-compound/components/eds-appbar";
import "@aspentech/pf-ui-compound/components/eds-page-header";
import "@aspentech/pf-ui-compound/components/eds-page-info";
import "@aspentech/pf-ui-compound/components/eds-application-layout";
import "@aspentech/pf-ui-compound/components/eds-panel-layout";
import "@aspentech/pf-ui-compound/components/eds-button-card";
import "@aspentech/pf-ui-compound/components/eds-combobox";
import "@aspentech/pf-ui-compound/components/eds-selectable-card";
import "@aspentech/pf-ui-compound/components/eds-shell-template";
import "@aspentech/pf-ui-compound/components/eds-sidenav";
import "@aspentech/pf-ui-compound/components/eds-sidenav-item";
import "@aspentech/pf-ui-compound/components/eds-slider";
import "@aspentech/pf-ui-compound/components/eds-toast";

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