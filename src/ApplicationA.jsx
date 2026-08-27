import { useEffect, useRef, useState } from 'react'

const PORTAL_PAGES = [
  { id: 'overview', label: 'Overview', icon: 'dashboard_filled' },
  { id: 'example1', label: 'Example 1', icon: 'edit_note_filled' },
  { id: 'example2', label: 'Example 2', icon: 'analytics_filled' },
  { id: 'example3', label: 'Example 3', icon: 'hub_filled' },
  { id: 'example4', label: 'Example 4', icon: 'table_view_filled' },
  { id: 'example5', label: 'Example 5', icon: 'account_tree_filled' },
]

const APPLICATION_TABS = [
  { id: 'overview', label: 'Overview' },
  { id: 'activity', label: 'Activity' },
  { id: 'settings', label: 'Settings' },
]

const APPLICATION_SECTIONS = [
  { id: 'summary', label: 'Summary' },
  { id: 'workflows', label: 'Workflows' },
  { id: 'reports', label: 'Reports' },
]

function ApplicationA({ theme }) {
  const appbarRef = useRef(null)
  const sidenavRef = useRef(null)
  const layoutRef = useRef(null)
  const treeRef = useRef(null)
  const [activeTab, setActiveTab] = useState(APPLICATION_TABS[0].id)
  const [activeSection, setActiveSection] = useState(APPLICATION_SECTIONS[0].id)

  const openNavigation = () => sidenavRef.current?.show()

  useEffect(() => {
    sidenavRef.current?.hide()
  }, [])

  useEffect(() => {
    const appbar = appbarRef.current
    appbar?.addEventListener('eds-click-menu', openNavigation)
    return () => appbar?.removeEventListener('eds-click-menu', openNavigation)
  }, [])

  useEffect(() => {
    const tree = treeRef.current
    const handleSelectionChange = (event) => {
      const selectedItem = event.detail.selection[0]
      if (selectedItem) setActiveSection(selectedItem.value)
    }
    tree?.addEventListener('sl-selection-change', handleSelectionChange)
    tree?.querySelector('sl-tree-item')?.click()
    return () => tree?.removeEventListener('sl-selection-change', handleSelectionChange)
  }, [])

  const activeSectionData = APPLICATION_SECTIONS.find(section => section.id === activeSection)
  const toggleLeftPanel = () => layoutRef.current?.toggleAttribute('open-left')
  const navigateFromModal = (event, pageId) => {
    event.preventDefault()
    window.location.hash = pageId
    sidenavRef.current?.hide()
  }

  return (
    <div className={`app eds-base ${theme === 'dark' ? 'eds-dark sl-theme-dark' : 'sl-theme-light'}`}>
      <a className="skip-link" href="#application-a-content">Skip to main content</a>
      <eds-shell-template class="application-shell" theme={theme}>
        <eds-appbar
          ref={appbarRef}
          slot="appbar"
          role="banner"
          theme={theme}
          show-menu-button
          is-application
        >
          <sl-icon slot="icon" library="material" name="apps_filled" label="Application A"></sl-icon>
          <sl-breadcrumb slot="breadcrumb" aria-label="Application breadcrumb">
            <span slot="separator">/</span>
            <sl-breadcrumb-item href="#overview">CodeConnect</sl-breadcrumb-item>
            <sl-breadcrumb-item>Application A</sl-breadcrumb-item>
          </sl-breadcrumb>
          <eds-page-info slot="page-info" heading="Application A"></eds-page-info>
          <sl-tab-group slot="center" class="application-tabs" aria-label="Application sections">
            {APPLICATION_TABS.map(tab => (
              <sl-tab
                key={tab.id}
                slot="nav"
                panel={tab.id}
                active={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </sl-tab>
            ))}
          </sl-tab-group>
          <sl-icon-button
            slot="right"
            library="material"
            name={theme === 'dark' ? 'light_mode' : 'dark_mode'}
            label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          ></sl-icon-button>
          <sl-avatar slot="right" label="User avatar" initials="AW"></sl-avatar>
        </eds-appbar>
        <eds-sidenav ref={sidenavRef} slot="sidenav" mode="modal" header-text="CodeConnect" logo="aspentech" aria-label="Application navigation">
          {PORTAL_PAGES.map(page => (
            <eds-sidenav-item
              key={page.id}
              type="node"
              label={page.label}
              icon={page.icon}
              href={`#${page.id}`}
              onClick={(event) => navigateFromModal(event, page.id)}
            ></eds-sidenav-item>
          ))}
          <sl-divider></sl-divider>
          <eds-sidenav-item type="heading" label="Apps"></eds-sidenav-item>
          <eds-sidenav-item
            type="node"
            label="Application A"
            icon="apps_filled"
            href="#application-a"
            onClick={(event) => navigateFromModal(event, 'application-a')}
          ></eds-sidenav-item>
        </eds-sidenav>
        <main id="application-a-content" className="application-main">
          <eds-application-layout ref={layoutRef} class="application-layout" open-left>
            <eds-panel-layout slot="left-panel" class="application-left-panel" heading="Application sections">
              <sl-tree ref={treeRef} selection="single" aria-label="Application sections">
                {APPLICATION_SECTIONS.map(section => (
                  <sl-tree-item
                    key={section.id}
                    value={section.id}
                    onClick={() => setActiveSection(section.id)}
                  >
                    {section.label}
                  </sl-tree-item>
                ))}
              </sl-tree>
            </eds-panel-layout>
            <div className="application-main-content">
              <eds-page-header heading={activeSectionData.label}>
                <sl-icon-button
                  slot="icon"
                  library="material"
                  name="view_sidebar"
                  label="Toggle application sections"
                  onClick={toggleLeftPanel}
                ></sl-icon-button>
              </eds-page-header>
            </div>
          </eds-application-layout>
        </main>
      </eds-shell-template>
    </div>
  )
}

export default ApplicationA
