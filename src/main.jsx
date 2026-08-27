import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { setBasePath } from '@shoelace-style/shoelace'
import { registerIconLibrary } from '@shoelace-style/shoelace/dist/utilities/icon-library.js'

// Aspentech Design System imports
import '@aspentech/pf-ui-core/main.css';
import '@aspentech/pf-ui-compound/components/eds-appbar';
import '@aspentech/pf-ui-compound/components/eds-application-layout';
import '@aspentech/pf-ui-compound/components/eds-page-info';
import '@aspentech/pf-ui-compound/components/eds-page-header';
import '@aspentech/pf-ui-compound/components/eds-panel-layout';
import '@aspentech/pf-ui-compound/components/eds-shell-template';
import '@aspentech/pf-ui-compound/components/eds-sidenav';
import '@aspentech/pf-ui-compound/components/eds-sidenav-item';
import '@aspentech/pf-ui-compound/components/eds-recents-table';
import '@aspentech/pf-ui-compound/components/eds-toast';
import '@shoelace-style/shoelace/dist/components/avatar/avatar.js';
import '@shoelace-style/shoelace/dist/components/breadcrumb/breadcrumb.js';
import '@shoelace-style/shoelace/dist/components/breadcrumb-item/breadcrumb-item.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/card/card.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';
import '@shoelace-style/shoelace/dist/components/icon-button/icon-button.js';
import '@shoelace-style/shoelace/dist/components/input/input.js';
import '@shoelace-style/shoelace/dist/components/tab/tab.js';
import '@shoelace-style/shoelace/dist/components/tab-group/tab-group.js';
import '@shoelace-style/shoelace/dist/components/tree/tree.js';
import '@shoelace-style/shoelace/dist/components/tree-item/tree-item.js';

const iconRegExp = /^(.*?)(_(round|sharp|filled))?$/

setBasePath('/assets/shoelace')

registerIconLibrary('material', {
  resolver: name => {
    const match = iconRegExp.exec(name)
    if (!match) return ''
    const iconName = match[1]
    const variant = match[3] || 'outlined'
    return `/assets/icons/material/${variant}/${iconName}.svg`
  },
  mutator: svg => svg.setAttribute('fill', 'currentColor'),
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)