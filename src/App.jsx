import './App.css'
import { useEffect, useRef, useState } from 'react'
import '@shoelace-style/shoelace/dist/components/divider/divider.js'
import '@shoelace-style/shoelace/dist/components/icon-button/icon-button.js'
import ApplicationOnePage from './ApplicationOnePage.jsx'
import ApplicationTwoPage from './ApplicationTwoPage.jsx'
import ApplicationThreePage from './ApplicationThreePage.jsx'
import ExamplesContent from './ExamplesContent.jsx'

const VALID_PAGES = new Set(['example1', 'example2', 'example3', 'example4', 'example5', 'application1', 'application2', 'application3'])

const SIDE_NAV_ITEMS = [
  { page: 'example1', label: 'Example 1', icon: 'dashboard' },
  { page: 'example2', label: 'Example 2', icon: 'tune' },
  { page: 'example3', label: 'Example 3', icon: 'auto_awesome' },
  { page: 'example4', label: 'Example 4', icon: 'grid_view' },
  { page: 'example5', label: 'Example 5', icon: 'insights' },
]

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
  const themeClassName = isDarkTheme ? 'eds-dark sl-theme-dark' : 'sl-theme-light'

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
    application1: 'Application 1',
    application2: 'Application 2',
    application3: 'Application 3',
  }[activePage] ?? 'Example 1'

  if (activePage === 'application1') {
    return (
      <ApplicationOnePage
        theme={theme}
        themeClassName={themeClassName}
        mainContentRef={mainContentRef}
        sideNavItems={SIDE_NAV_ITEMS}
        activePage={activePage}
        onNavigate={navigateToPage}
      />
    )
  }

  if (activePage === 'application2') {
    return (
      <ApplicationTwoPage
        theme={theme}
        themeClassName={themeClassName}
        mainContentRef={mainContentRef}
        sideNavItems={SIDE_NAV_ITEMS}
        activePage={activePage}
        onNavigate={navigateToPage}
      />
    )
  }

  if (activePage === 'application3') {
    return (
      <ApplicationThreePage
        theme={theme}
        themeClassName={themeClassName}
        mainContentRef={mainContentRef}
        sideNavItems={SIDE_NAV_ITEMS}
        activePage={activePage}
        onNavigate={navigateToPage}
      />
    )
  }

  return (
    <div
      className={`App eds-base ${themeClassName}`}
      theme={theme}
    >
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <eds-shell-template className={`app-shell-template ${themeClassName}`} theme={theme}>
        <eds-sidenav slot="sidenav" role="navigation" aria-label="EDS Skill" header-text="EDS Skill" mode="expanded" logo="aspentech">
          {SIDE_NAV_ITEMS.map(({ page, label, icon }) => (
            <eds-sidenav-item
              key={page}
              type="node"
              label={label}
              icon={icon}
              href={`#${page}`}
              active={activePage === page}
              onClick={(event) => {
                event.preventDefault()
                navigateToPage(page)
              }}
            ></eds-sidenav-item>
          ))}
          <sl-divider></sl-divider>
          <eds-sidenav-item type="heading" label="Apps"></eds-sidenav-item>
          <eds-sidenav-item
            type="node"
            label="Application 1"
            icon="apps"
            href="#application1"
            active={activePage === 'application1'}
            onClick={(event) => {
              event.preventDefault()
              navigateToPage('application1')
            }}
          ></eds-sidenav-item>
          <eds-sidenav-item
            type="node"
            label="Application 2"
            icon="apps"
            href="#application2"
            active={activePage === 'application2'}
            onClick={(event) => {
              event.preventDefault()
              navigateToPage('application2')
            }}
          ></eds-sidenav-item>

        </eds-sidenav>
        <eds-appbar slot="appbar" role="banner" className={themeClassName} theme={theme}>
          <eds-page-info slot="page-info" heading={activePageTitle} className={themeClassName} theme={theme}> </eds-page-info>
          <sl-icon-button
            slot="right"
            library="material"
            name={isDarkTheme ? 'dark_mode' : 'light_mode'}
            label={isDarkTheme ? 'Dark Mode' : 'Light Mode'}
            onClick={toggleTheme}
          ></sl-icon-button>
        </eds-appbar>
        <main
          id="main-content"
          ref={mainContentRef}
          tabIndex={-1}
          className={`content-area ${themeClassName} ${activePage}`}
          aria-label="Example content"
        >
          <ExamplesContent activePage={activePage} />
        </main>
      </eds-shell-template>
    </div>
  )
}

export default App