import { useEffect, useRef, useState } from 'react'
import '@shoelace-style/shoelace/dist/components/menu-item/menu-item.js'

const generalItems = [
  {
    id: 'general-access',
    heading: 'Access',
    description: 'Manage role-based access and default permissions.'
  },
  {
    id: 'general-branding',
    heading: 'Branding',
    description: 'Configure logos, labels, and shared presentation settings.'
  },
  {
    id: 'general-regions',
    heading: 'Regions',
    description: 'Set regional defaults for units, locale, and language.'
  }
]

const licenseManagerItems = [
  {
    id: 'license-pool',
    heading: 'License pool',
    description: 'Track allocation and availability across active users.'
  },
  {
    id: 'license-usage',
    heading: 'Usage policy',
    description: 'Define assignment rules and license checkout behavior.'
  },
  {
    id: 'license-audit',
    heading: 'Audit log',
    description: 'Review recent license changes and administrator actions.'
  }
]

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

const leftPanelPages = [
  {
    id: 'general',
    label: 'General',
    groups: [
      {
        label: 'Configuration',
        items: generalItems
      }
    ]
  },
  {
    id: 'license-manager',
    label: 'License manager',
    groups: [
      {
        label: 'Licensing',
        items: licenseManagerItems
      }
    ]
  },
  {
    id: 'connections',
    label: 'Connections',
    groups: [
      {
        label: 'AspenTech',
        items: aspenTechIntegrations
      },
      {
        label: 'Partners',
        items: partnerIntegrations
      }
    ]
  }
]

function ApplicationOnePage({ theme, themeClassName, mainContentRef, sideNavItems, activePage, onNavigate }) {
  const modalSidenavRef = useRef(null)
  const applicationLayoutRef = useRef(null)
  const rightPanelRef = useRef(null)
  const leftTabGroupRef = useRef(null)
  const [activeLeftPageId, setActiveLeftPageId] = useState('connections')
  const activeLeftPage = leftPanelPages.find((page) => page.id === activeLeftPageId) ?? leftPanelPages[0]

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

  useEffect(() => {
    const tabGroup = leftTabGroupRef.current

    if (!tabGroup) {
      return
    }

    const tabs = tabGroup.querySelectorAll('eds-tab[slot="nav"]')

    tabs.forEach((tab) => {
      const isActive = tab.getAttribute('data-nav-id') === activeLeftPageId

      if (isActive) {
        tab.setAttribute('active', '')
        return
      }

      tab.removeAttribute('active')
    })
  }, [activeLeftPageId])

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

  const closeRightPanel = () => {
    const layout = applicationLayoutRef.current

    if (!layout) {
      return
    }

    layout.removeAttribute('open-right')
  }

  return (
    <div className={`App eds-base ${themeClassName}`} theme={theme}>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <eds-shell-template className={`app-shell-template application1 ${themeClassName}`} theme={theme}>
          <eds-appbar slot="appbar" show-menu-button is-application role="banner" className={themeClassName} theme={theme}>
            <eds-icon-button
              slot="menu-button"
              src="/assets/icons/material/outlined/menu.svg"
              label="Menu"
              onClick={openModalSidenav}
            ></eds-icon-button>
          <eds-icon src="/assets/icons/material/outlined/precision_manufacturing.svg" slot="icon"></eds-icon>
          <eds-breadcrumb slot="breadcrumb">
            <eds-breadcrumb-item>Breadcrumb</eds-breadcrumb-item>
            <eds-breadcrumb-item>Breadcrumb</eds-breadcrumb-item>
          </eds-breadcrumb>
          <eds-page-info slot="page-info" heading="Application Heading" className={themeClassName} theme={theme}>
            <sl-menu-item slot="heading-menu-items" onClick={() => {}}>Option 1</sl-menu-item>
            <sl-menu-item slot="heading-menu-items" onClick={() => {}}>Option 2</sl-menu-item>
            <eds-badge variant="success" slot="badge">New</eds-badge>
          </eds-page-info>
            <eds-tab-group activation="manual" slot="center">
              <eds-tab slot="nav">Design</eds-tab>
              <eds-tab slot="nav">Case Studies</eds-tab>
              <eds-tab slot="nav">Settings</eds-tab>
            </eds-tab-group>
          <eds-button slot="right">Share</eds-button>
          <eds-icon-button slot="right" library="material" name="more_horiz" label="More"></eds-icon-button>
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
          <eds-divider></eds-divider>
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
          className={`content-area ${themeClassName} application1`}
          aria-label="Application content"
        >
        <eds-application-layout ref={applicationLayoutRef} open-left>
            <div slot="left-panel" className="application1-left-panel">
              <eds-panel-layout heading="Navigation">
                <eds-tab-group ref={leftTabGroupRef} placement="end" aria-label="Settings sections">
                  {leftPanelPages.map((page) => (
                    <eds-tab
                      key={page.id}
                      slot="nav"
                      data-nav-id={page.id}
                      onClick={() => setActiveLeftPageId(page.id)}
                    >
                      {page.label}
                    </eds-tab>
                  ))}
                </eds-tab-group>
              </eds-panel-layout>
            </div>
            <section className="example3-integrations" aria-label="Integrations">
              <eds-page-header heading={activeLeftPage.label}>
                <eds-icon-button
                  slot="icon"
                  library="material"
                  name="view_sidebar"
                  label="Toggle navigation panel"
                  onClick={toggleLeftPanel}
                ></eds-icon-button>
                <eds-button slot="controls" variant="default">Add</eds-button>
              </eds-page-header>
              <div className="page-content example3-content">
                {activeLeftPage.groups.map((group) => (
                  <section key={group.label} aria-label={group.label}>
                    <p className="example3-section-label">{group.label}</p>
                    <div className="example3-card-grid">
                      {group.items.map(({ id, heading, description }) => (
                        <eds-selectable-card
                          key={id}
                          control="switch"
                          heading={heading}
                          class="example3-card"
                        >
                          <p className="example3-card-description">{description}</p>
                        </eds-selectable-card>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            </section>
            <div slot="right-panel" className="application1-right-panel">
              <eds-panel-layout ref={rightPanelRef} heading="Details" closable close-label="Close details">
              </eds-panel-layout>
            </div>
        </eds-application-layout>
        </main>
      </eds-shell-template>
    </div>
  )
}

export default ApplicationOnePage
