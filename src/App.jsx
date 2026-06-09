import './App.css'
import { Suspense, lazy, useState } from 'react'
import '@shoelace-style/shoelace/dist/components/card/card.js'
import '@shoelace-style/shoelace/dist/components/icon/icon.js'
import '@shoelace-style/shoelace/dist/components/button/button.js'
import '@shoelace-style/shoelace/dist/components/icon-button/icon-button.js'

const DesignSystemExample = lazy(() => import('./DesignSystemExample.jsx'))

function App() {
  const [activePage, setActivePage] = useState('example1')
  const [theme, setTheme] = useState('light')

  const isDarkTheme = theme === 'dark'
  const themeClassName = isDarkTheme ? 'aspentech-dark sl-theme-dark' : 'sl-theme-light'

  const toggleTheme = () => {
    setTheme(currentTheme => (currentTheme === 'dark' ? 'light' : 'dark'))
  }

  const activePageTitle = {
    example1: 'Example 1',
    example2: 'Example 2',
    example3: 'Example 3',
    example4: 'Example 4',
    example5: 'Example 5',
  }[activePage] ?? 'Example 1'

  const renderPageContent = () => {
    if (activePage === 'example5') {
      return (
        <Suspense fallback={<sl-card><div style={{ padding: 'var(--sl-spacing-medium-plus)' }}>Loading example...</div></sl-card>}>
          <DesignSystemExample />
        </Suspense>
      )
    }

    return (
      <div style={{ padding: 'var(--sl-spacing-medium-plus)' }}></div>
    )
  }

  return (
    <div
      className={`App aspentech-base ${themeClassName}`}
      theme={theme}
    >
      <aspentech-shell-template className={`app-shell-template ${themeClassName}`} theme={theme}>
        <aspentech-sidenav slot="sidenav" header-text="Examples" mode="expanded" logo="aspentech" className={themeClassName} theme={theme}>
          <aspentech-sidenav-item
            type="node"
            label="Example 1"
            icon="dashboard"
            href="#"
            active={activePage === 'example1'}
            onClick={(event) => {
              event.preventDefault()
              setActivePage('example1')
            }}
          ></aspentech-sidenav-item>
          <aspentech-sidenav-item
            type="node"
            label="Example 2"
            icon="tune"
            href="#"
            active={activePage === 'example2'}
            onClick={(event) => {
              event.preventDefault()
              setActivePage('example2')
            }}
          ></aspentech-sidenav-item>
          <aspentech-sidenav-item
            type="node"
            label="Example 3"
            icon="auto_awesome"
            href="#"
            active={activePage === 'example3'}
            onClick={(event) => {
              event.preventDefault()
              setActivePage('example3')
            }}
          ></aspentech-sidenav-item>
          <aspentech-sidenav-item
            type="node"
            label="Example 4"
            icon="grid_view"
            href="#"
            active={activePage === 'example4'}
            onClick={(event) => {
              event.preventDefault()
              setActivePage('example4')
            }}
          ></aspentech-sidenav-item>
          <aspentech-sidenav-item
            type="node"
            label="Example 5"
            icon="insights"
            href="#"
            active={activePage === 'example5'}
            onClick={(event) => {
              event.preventDefault()
              setActivePage('example5')
            }}
          ></aspentech-sidenav-item>
        </aspentech-sidenav>
        <aspentech-appbar slot="appbar" className={themeClassName} theme={theme}>
          <aspentech-page-info slot="page-info" heading={activePageTitle} className={themeClassName} theme={theme}> </aspentech-page-info>
          <sl-icon-button
            slot="right"
            library="material"
            name={isDarkTheme ? 'dark_mode' : 'light_mode'}
            label={isDarkTheme ? 'Dark Mode' : 'Light Mode'}
            onClick={toggleTheme}
          ></sl-icon-button>
        </aspentech-appbar>
        <main className={`content-area ${themeClassName} ${activePage}`}>{renderPageContent()}</main>
      </aspentech-shell-template>
    </div>
  )
}

export default App