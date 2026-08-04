import { useEffect, useRef } from 'react'
import '@shoelace-style/shoelace/dist/components/badge/badge.js'
import '@shoelace-style/shoelace/dist/components/breadcrumb/breadcrumb.js'
import '@shoelace-style/shoelace/dist/components/breadcrumb-item/breadcrumb-item.js'
import '@shoelace-style/shoelace/dist/components/button/button.js'
import '@shoelace-style/shoelace/dist/components/divider/divider.js'
import '@shoelace-style/shoelace/dist/components/icon/icon.js'
import '@shoelace-style/shoelace/dist/components/icon-button/icon-button.js'
import '@shoelace-style/shoelace/dist/components/menu-item/menu-item.js'
import '@shoelace-style/shoelace/dist/components/tab/tab.js'
import '@shoelace-style/shoelace/dist/components/tab-group/tab-group.js'
import '@shoelace-style/shoelace/dist/components/tab-panel/tab-panel.js'

const aspenTechIntegrations = [
  {
    id: 'hysys-1',
    heading: 'HYSYS 1',
    description: 'Aspen HYSYS is a process simulation tool used to model and optimize oil, gas, and refining plants.'
  },
  {
    id: 'acce-1',
    heading: 'ACCE',
    description: 'Estimates project costs, equipment, and economics.'
  },
  {
    id: 'acce-2',
    heading: 'ACCE',
    description: 'Estimates project costs, equipment, and economics.'
  },
  {
    id: 'fidelis',
    heading: 'Fidelis',
    description: 'Predicts asset availability and quantifies financial risks using reliability modeling.'
  },
  {
    id: 'edr',
    heading: 'EDR',
    description: 'Provides rigorous thermal and mechanical design for heat exchangers.'
  },
  {
    id: 'aspen-properties',
    heading: 'Aspen Properties',
    description: 'Predicts physical and thermodynamic properties of chemical mixtures and fluids.'
  },
  {
    id: 'optiplant',
    heading: 'OptiPlant',
    description: 'Optimizes 3D plant layouts and piping routes for early-stage engineering.'
  },
  {
    id: 'abe',
    heading: 'ABE',
    description: 'Manages data flow between conceptual design and detailed engineering.'
  },
]

const partnerIntegrations = [
  {
    id: 'ibm-maximo',
    heading: 'IBM Maximo',
    description: 'Enterprise asset management (EAM) software with IBM Maximo.'
  },
  {
    id: 'scheduler',
    heading: 'Scheduler',
    description: 'Manages project timelines, resource allocation, and task sequencing.'
  },
  {
    id: 'mybi',
    heading: 'MyBI',
    description: 'Manages project timelines, resource allocation, and task sequencing.'
  },
]

function ApplicationOnePage({ theme, themeClassName, mainContentRef, sideNavItems, activePage, onNavigate }) {
  const modalSidenavRef = useRef(null)
  const applicationLayoutRef = useRef(null)

  useEffect(() => {
    modalSidenavRef.current?.hide?.()
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

  return (
    <div className={`App eds-base ${themeClassName}`} theme={theme}>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <eds-shell-template className={`app-shell-template application1 ${themeClassName}`} theme={theme}>
          <eds-appbar slot="appbar" show-menu-button is-application role="banner" className={themeClassName} theme={theme}>
            <sl-icon-button
              slot="menu-button"
              library="material"
              name="menu"
              label="Menu"
              onClick={openModalSidenav}
            ></sl-icon-button>
          <sl-icon library="material" name="precision_manufacturing" slot="icon"></sl-icon>
          <sl-breadcrumb slot="breadcrumb">
            <span slot="separator">/</span>
            <sl-breadcrumb-item>Breadcrumb</sl-breadcrumb-item>
            <sl-breadcrumb-item>Application Heading</sl-breadcrumb-item>
          </sl-breadcrumb>
          <eds-page-info slot="page-info" heading="Application Heading" className={themeClassName} theme={theme}>
            <sl-menu-item slot="heading-menu-items" onClick={() => {}}>Option 1</sl-menu-item>
            <sl-menu-item slot="heading-menu-items" onClick={() => {}}>Option 2</sl-menu-item>
            <sl-badge variant="success" slot="badge">New</sl-badge>
          </eds-page-info>
          <sl-tab-group activation="manual" slot="center">
            <sl-tab slot="nav" active>Design</sl-tab>
            <sl-tab slot="nav">Case Studies</sl-tab>
            <sl-tab slot="nav" disabled>Settings</sl-tab>
          </sl-tab-group>
          <sl-button slot="right">Share</sl-button>
          <sl-icon-button slot="right" library="material" name="more_horiz" label="More"></sl-icon-button>
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
        </eds-sidenav>
        <main
          id="main-content"
          ref={mainContentRef}
          tabIndex={-1}
          className={`content-area ${themeClassName} application1`}
          aria-label="Application content"
        >
        <eds-application-layout ref={applicationLayoutRef} open-left open-right>
            <div slot="left-panel">
              <sl-tab-group placement="end" activation="manual" aria-label="Settings sections">
                <sl-tab slot="nav" panel="general">General</sl-tab>
                <sl-tab slot="nav" panel="license-manager">License manager</sl-tab>
                <sl-tab slot="nav" panel="connections" active>Connections</sl-tab>
                <sl-tab-panel name="general"></sl-tab-panel>
                <sl-tab-panel name="license-manager"></sl-tab-panel>
                <sl-tab-panel name="connections"></sl-tab-panel>
              </sl-tab-group>
            </div>
            <section className="example3-integrations" aria-label="Integrations">
              <eds-page-header heading="Integrations" className="example3-page-header">
                <sl-icon-button slot="icon" library="material" name="view_sidebar" label="View sidebar" onClick={toggleLeftPanel}></sl-icon-button>
                <sl-breadcrumb slot="breadcrumb">
                  <sl-breadcrumb-item>Home</sl-breadcrumb-item>
                </sl-breadcrumb>
                <sl-badge slot="badge" variant="success">Active</sl-badge>
                <sl-button slot="controls" variant="default">Add</sl-button>
              </eds-page-header>

              <div className="page-content example3-content">
                <p className="example3-section-label">AspenTech</p>
                <div className="example3-card-grid">
                  {aspenTechIntegrations.map(({ id, heading, description }) => (
                    <eds-selectable-card
                      key={id}
                      control="switch"
                      heading={heading}
                      className="example3-card"
                    >
                      <p className="example3-card-description">{description}</p>
                    </eds-selectable-card>
                  ))}
                </div>

                <p className="example3-section-label">Partners</p>
                <div className="example3-card-grid">
                  {partnerIntegrations.map(({ id, heading, description }) => (
                    <eds-selectable-card
                      key={id}
                      control="switch"
                      heading={heading}
                      className="example3-card"
                    >
                      <p className="example3-card-description">{description}</p>
                    </eds-selectable-card>
                  ))}
                </div>
              </div>
            </section>
            <div slot="right-panel" className="centered-text">Right Panel Content</div>
        </eds-application-layout>
        </main>
      </eds-shell-template>
    </div>
  )
}

export default ApplicationOnePage
