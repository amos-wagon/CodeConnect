import { useEffect, useRef, useState } from 'react'
import '@shoelace-style/shoelace/dist/components/badge/badge.js'
import '@shoelace-style/shoelace/dist/components/breadcrumb/breadcrumb.js'
import '@shoelace-style/shoelace/dist/components/breadcrumb-item/breadcrumb-item.js'
import '@shoelace-style/shoelace/dist/components/button/button.js'
import '@shoelace-style/shoelace/dist/components/divider/divider.js'
import '@shoelace-style/shoelace/dist/components/icon/icon.js'
import '@shoelace-style/shoelace/dist/components/icon-button/icon-button.js'
import '@shoelace-style/shoelace/dist/components/tab/tab.js'
import '@shoelace-style/shoelace/dist/components/tab-group/tab-group.js'

const defaultCards = [
  {
    id: 'summary',
    title: 'Summary',
    description: 'Use this area for application-level status and key details.',
    detailTitle: 'Summary details',
    detailBody: 'This panel can show selected summary metrics, ownership, and next actions.'
  },
  {
    id: 'recent-activity',
    title: 'Recent activity',
    description: 'Show recent events, updates, or workflow highlights here.',
    detailTitle: 'Recent activity details',
    detailBody: 'This panel can show timestamped events, user actions, and contextual links.'
  }
]

function ApplicationTwoPage({ theme, themeClassName, mainContentRef, sideNavItems, activePage, onNavigate }) {
  const modalSidenavRef = useRef(null)
  const applicationLayoutRef = useRef(null)
  const rightPanelRef = useRef(null)
  const [selectedCardId, setSelectedCardId] = useState(null)

  useEffect(() => {
    modalSidenavRef.current?.hide?.()
  }, [])

  useEffect(() => {
    const rightPanel = rightPanelRef.current

    if (!rightPanel) {
      return
    }

    rightPanel.addEventListener('eds-close', closeRightPanel)

    return () => {
      rightPanel.removeEventListener('eds-close', closeRightPanel)
    }
  }, [])

  const openModalSidenav = () => {
    const sidenav = modalSidenavRef.current

    if (!sidenav || typeof sidenav.show !== 'function') {
      return
    }

    sidenav.show().then(() => sidenav.focus?.())
  }

  const navigateFromModal = (event, page) => {
    event.preventDefault()
    onNavigate(page)
    modalSidenavRef.current?.hide?.()
  }

  const toggleLeftPanel = () => {
    const layout = applicationLayoutRef.current

    if (!layout) {
      return
    }

    if (layout.hasAttribute('open-left')) {
      layout.removeAttribute('open-left')
      return
    }

    layout.setAttribute('open-left', '')
  }

  const openRightPanelForCard = (cardId) => {
    const layout = applicationLayoutRef.current

    if (!layout) {
      return
    }

    setSelectedCardId(cardId)
    layout.setAttribute('open-right', '')
  }

  const closeRightPanel = () => {
    const layout = applicationLayoutRef.current

    if (!layout) {
      return
    }

    layout.removeAttribute('open-right')
  }

  const selectedCard = defaultCards.find(card => card.id === selectedCardId) ?? defaultCards[0]

  return (
    <div className={`App eds-base ${themeClassName}`} theme={theme}>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <eds-shell-template className={`app-shell-template application2 ${themeClassName}`} theme={theme}>
        <eds-appbar slot="appbar" show-menu-button is-application role="banner" className={themeClassName} theme={theme}>
          <sl-icon-button
            slot="menu-button"
            library="material"
            name="menu"
            label="Menu"
            onClick={openModalSidenav}
          ></sl-icon-button>
          <sl-icon library="material" name="apps" slot="icon"></sl-icon>
          <sl-breadcrumb slot="breadcrumb">
            <span slot="separator">/</span>
            <sl-breadcrumb-item>Breadcrumb</sl-breadcrumb-item>
            <sl-breadcrumb-item>Application 2</sl-breadcrumb-item>
          </sl-breadcrumb>
          <eds-page-info slot="page-info" heading="Application 2" className={themeClassName} theme={theme}></eds-page-info>
            <sl-tab-group activation="manual" slot="center">
              <sl-tab slot="nav">Design</sl-tab>
              <sl-tab slot="nav">Case Studies</sl-tab>
              <sl-tab slot="nav">Settings</sl-tab>
            </sl-tab-group>
          <sl-button slot="right">Share</sl-button>
        </eds-appbar>
        <eds-sidenav
          ref={modalSidenavRef}
          role="navigation"
          aria-label="EDS Skill"
          header-text="EDS Skill"
          mode="modal"
          logo="aspentech"
        >
          {sideNavItems.map(({ page, label, icon }) => (
            <eds-sidenav-item
              key={page}
              type="node"
              label={label}
              icon={icon}
              href={`#${page}`}
              active={activePage === page}
              onClick={(event) => navigateFromModal(event, page)}
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
            onClick={(event) => navigateFromModal(event, 'application1')}
          ></eds-sidenav-item>
          <eds-sidenav-item
            type="node"
            label="Application 2"
            icon="apps"
            href="#application2"
            active={activePage === 'application2'}
            onClick={(event) => navigateFromModal(event, 'application2')}
          ></eds-sidenav-item>
        </eds-sidenav>
        <main
          id="main-content"
          ref={mainContentRef}
          tabIndex={-1}
          className={`content-area ${themeClassName} application2`}
          aria-label="Application content"
        >
          <eds-application-layout ref={applicationLayoutRef} open-left>
            <div slot="left-panel" className="application2-left-panel">
              <eds-panel-layout heading="Navigation">
                <p className="application2-panel-copy">Default left panel content.</p>
              </eds-panel-layout>
            </div>
            <section className="application2-default-page" aria-label="Application 2 content">
              <eds-page-header heading="Overview" className="application2-page-header">
                <sl-icon-button
                  slot="icon"
                  library="material"
                  name="view_sidebar"
                  label="View sidebar"
                  onClick={toggleLeftPanel}
                ></sl-icon-button>
                <sl-badge slot="badge" variant="success">Default</sl-badge>
                <sl-button slot="controls" variant="default">Open</sl-button>
              </eds-page-header>
              <div className="page-content application2-page-content">
                <section className="application2-content-grid" aria-label="Default sections">
                  {defaultCards.map((card) => (
                    <eds-button-card
                      key={card.id}
                      heading={card.title}
                      onClick={() => openRightPanelForCard(card.id)}
                    >
                      {card.description}
                    </eds-button-card>
                  ))}
                </section>
              </div>
            </section>
            <div slot="right-panel" className="application2-right-panel">
              <eds-panel-layout
                ref={rightPanelRef}
                heading={selectedCard.detailTitle}
                closable
                close-label="Close details"
              >
                <p className="application2-panel-copy">{selectedCard.detailBody}</p>
              </eds-panel-layout>
            </div>
          </eds-application-layout>
        </main>
      </eds-shell-template>
    </div>
  )
}

export default ApplicationTwoPage
