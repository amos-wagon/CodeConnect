import './App.css'
import { useEffect, useRef, useState } from 'react'
import '@shoelace-style/shoelace/dist/components/icon-button/icon-button.js'
import ExamplesContent from './ExamplesContent.jsx'

const VALID_PAGES = new Set(['example1', 'example2', 'example3', 'example4', 'example5'])

const getPageFromHash = () => {
  if (typeof window === 'undefined') {
    return 'example1'
  }

  const pageFromHash = window.location.hash.replace('#', '')
  return VALID_PAGES.has(pageFromHash) ? pageFromHash : 'example1'
}

function App() {
  const [activePage, setActivePage] = useState(getPageFromHash)
  const [theme, setTheme] = useState('light')
  const mainContentRef = useRef(null)
  const hasInitializedFocus = useRef(false)

  const isDarkTheme = theme === 'dark'
  const themeClassName = isDarkTheme ? 'aspentech-dark sl-theme-dark' : 'sl-theme-light'

  const toggleTheme = () => {
    setTheme(currentTheme => (currentTheme === 'dark' ? 'light' : 'dark'))
  }

  const navigateToPage = (page) => {
    if (!VALID_PAGES.has(page)) {
      return
    }

    if (window.location.hash !== `#${page}`) {
      window.location.hash = page
    }

    setActivePage(page)
  }

  useEffect(() => {
    const syncPageWithHash = () => {
      setActivePage(getPageFromHash())
    }

    window.addEventListener('hashchange', syncPageWithHash)

    if (!window.location.hash) {
      window.history.replaceState(null, '', `#${activePage}`)
    }

    return () => {
      window.removeEventListener('hashchange', syncPageWithHash)
    }
  }, [])

  useEffect(() => {
    if (!hasInitializedFocus.current) {
      hasInitializedFocus.current = true
      return
    }

    mainContentRef.current?.focus()
  }, [activePage])

  const activePageTitle = {
    example1: 'Example 1',
    example2: 'Example 2',
    example3: 'Example 3',
    example4: 'Example 4',
    example5: 'Example 5',
  }[activePage] ?? 'Example 1'

  return (
    <div
      className={`App aspentech-base ${themeClassName}`}
      theme={theme}
    >
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <aspentech-shell-template className={`app-shell-template ${themeClassName}`} theme={theme}>
        <aspentech-sidenav slot="sidenav" role="navigation" aria-label="EDS Skill" header-text="EDS Skill" mode="expanded" logo="aspentech" className={themeClassName} theme={theme}>
          <aspentech-sidenav-item
            type="node"
            label="Example 1"
            icon="dashboard"
            href="#example1"
            active={activePage === 'example1'}
            onClick={(event) => {
              event.preventDefault()
              navigateToPage('example1')
            }}
          ></aspentech-sidenav-item>
          <aspentech-sidenav-item
            type="node"
            label="Example 2"
            icon="tune"
            href="#example2"
            active={activePage === 'example2'}
            onClick={(event) => {
              event.preventDefault()
              navigateToPage('example2')
            }}
          ></aspentech-sidenav-item>
          <aspentech-sidenav-item
            type="node"
            label="Example 3"
            icon="auto_awesome"
            href="#example3"
            active={activePage === 'example3'}
            onClick={(event) => {
              event.preventDefault()
              navigateToPage('example3')
            }}
          ></aspentech-sidenav-item>
          <aspentech-sidenav-item
            type="node"
            label="Example 4"
            icon="grid_view"
            href="#example4"
            active={activePage === 'example4'}
            onClick={(event) => {
              event.preventDefault()
              navigateToPage('example4')
            }}
          ></aspentech-sidenav-item>
          <aspentech-sidenav-item
            type="node"
            label="Example 5"
            icon="insights"
            href="#example5"
            active={activePage === 'example5'}
            onClick={(event) => {
              event.preventDefault()
              navigateToPage('example5')
            }}
          ></aspentech-sidenav-item>
        </aspentech-sidenav>
        <aspentech-appbar slot="appbar" role="banner" className={themeClassName} theme={theme}>
          <aspentech-page-info slot="page-info" heading={activePageTitle} className={themeClassName} theme={theme}> </aspentech-page-info>
          <sl-icon-button
            slot="right"
            library="material"
            name={isDarkTheme ? 'dark_mode' : 'light_mode'}
            label={isDarkTheme ? 'Dark Mode' : 'Light Mode'}
            onClick={toggleTheme}
          ></sl-icon-button>
        </aspentech-appbar>
        <main
          id="main-content"
          ref={mainContentRef}
          tabIndex={-1}
          className={`content-area ${themeClassName} ${activePage}`}
          aria-label="Example content"
        >
          <ExamplesContent activePage={activePage} />
        </main>
      </aspentech-shell-template>
    </div>
  )
}

export default App