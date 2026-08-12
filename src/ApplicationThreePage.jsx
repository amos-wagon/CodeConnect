import { useEffect, useRef, useState } from 'react'
import '@shoelace-style/shoelace/dist/components/badge/badge.js'
import '@shoelace-style/shoelace/dist/components/breadcrumb/breadcrumb.js'
import '@shoelace-style/shoelace/dist/components/breadcrumb-item/breadcrumb-item.js'
import '@shoelace-style/shoelace/dist/components/button/button.js'
import '@shoelace-style/shoelace/dist/components/divider/divider.js'
import '@shoelace-style/shoelace/dist/components/icon/icon.js'
import '@shoelace-style/shoelace/dist/components/icon-button/icon-button.js'
import '@shoelace-style/shoelace/dist/components/input/input.js'
import '@shoelace-style/shoelace/dist/components/tab/tab.js'
import '@shoelace-style/shoelace/dist/components/tab-group/tab-group.js'
import '@shoelace-style/shoelace/dist/components/tab-panel/tab-panel.js'
import '@shoelace-style/shoelace/dist/components/radio-group/radio-group.js'
import '@shoelace-style/shoelace/dist/components/radio-button/radio-button.js'
import '@shoelace-style/shoelace/dist/components/tree/tree.js'
import '@shoelace-style/shoelace/dist/components/tree-item/tree-item.js'
import { AgGridReact } from 'ag-grid-react'
import { ModuleRegistry, AllCommunityModule } from 'ag-grid-community'
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-quartz.css'

ModuleRegistry.registerModules([AllCommunityModule])

const rootCases = [
  'Base case',
  'Crude cost - $2',
  'Crude cost - $1.5',
  'Crude cost - $1',
  'Crude cost - $.5',
  'Crude cost - $0',
]

const cokerRateCases = [
  'Coker Rate = 26 MBD',
  'Coker Rate = 27 MBD',
  'Coker Rate = 28 MBD',
  'Coker Rate = 29 MBD',
  'Coker Rate = 30 MBD',
  'Coker Rate = 31 MBD',
]

const rowData = [
  { type: 'Crude',    min: 0.00, max: 100.00, solution: 11.77,  cost: 0.0772,  priority: '--', disabled: '--', marginal: '--', solutionPenalty: '--', period: 'Default' },
  { type: 'Crude',    min: 0.00, max: 100.00, solution: 12.12,  cost: 0.1344,  priority: '--', disabled: '--', marginal: '--', solutionPenalty: '--', period: 'Default' },
  { type: 'Crude',    min: 0.00, max: 100.00, solution: 4.00,   cost: 0.1297,  priority: '--', disabled: '--', marginal: '--', solutionPenalty: '--', period: 'Default' },
  { type: 'Crude',    min: 0.00, max: 100.00, solution: 0.00,   cost: 2.3433,  priority: '--', disabled: '--', marginal: '--', solutionPenalty: '--', period: 'Default' },
  { type: 'Crude',    min: 0.00, max: 100.00, solution: 72.11,  cost: 1.3002,  priority: '--', disabled: '--', marginal: '--', solutionPenalty: '--', period: 'Default' },
  { type: 'Crude',    min: 0.00, max: 100.00, solution: 9.32,   cost: 0.0002,  priority: '--', disabled: '--', marginal: '--', solutionPenalty: '--', period: 'Default' },
  { type: 'Crude',    min: 0.00, max: 100.00, solution: 10.10,  cost: 0.1345,  priority: '--', disabled: '--', marginal: '--', solutionPenalty: '--', period: 'Default' },
  { type: 'Crude',    min: 0.00, max: 100.00, solution: 11.77,  cost: 0.5462,  priority: '--', disabled: '--', marginal: '--', solutionPenalty: '--', period: 'Default' },
  { type: 'Crude',    min: 0.00, max: 100.00, solution: 1.450,  cost: 1.450,   priority: '--', disabled: '--', marginal: '--', solutionPenalty: '--', period: 'Default' },
  { type: 'Crude',    min: 0.00, max: 100.00, solution: 11.77,  cost: 11.77,   priority: '--', disabled: '--', marginal: '--', solutionPenalty: '--', period: 'Default' },
  { type: 'Standard', min: 0.00, max: 100.00, solution: 12.12, cost: 12.12,   priority: '--', disabled: '--', marginal: '--', solutionPenalty: '--', period: 'Default' },
  { type: 'Standard', min: 0.00, max: 100.00, solution: 4.00,  cost: 4.00,    priority: '--', disabled: '--', marginal: '--', solutionPenalty: '--', period: 'Default' },
  { type: 'Standard', min: 0.00, max: 100.00, solution: 0.00,  cost: 0.00,    priority: '--', disabled: '--', marginal: '--', solutionPenalty: '--', period: 'Default' },
  { type: 'Standard', min: 0.00, max: 100.00, solution: 72.11, cost: 0.0772,  priority: '--', disabled: '--', marginal: '--', solutionPenalty: '--', period: 'Default' },
  { type: 'Standard', min: 0.00, max: 100.00, solution: 9.32,  cost: 0.1344,  priority: '--', disabled: '--', marginal: '--', solutionPenalty: '--', period: 'Default' },
  { type: 'Standard', min: 0.00, max: 100.00, solution: 10.10, cost: 0.1297,  priority: '--', disabled: '--', marginal: '--', solutionPenalty: '--', period: 'Default' },
  { type: 'Standard', min: 0.00, max: 100.00, solution: 11.77, cost: 2.3433,  priority: '--', disabled: '--', marginal: '--', solutionPenalty: '--', period: 'Default' },
  { type: 'Standard', min: 0.00, max: 100.00, solution: 1.450, cost: 1.3002,  priority: '--', disabled: '--', marginal: '--', solutionPenalty: '--', period: 'Default' },
  { type: 'Standard', min: 0.00, max: 100.00, solution: 11.77, cost: 0.0002,  priority: '--', disabled: '--', marginal: '--', solutionPenalty: '--', period: 'Default' },
]

const LinkCellRenderer = ({ value }) => (
  <a
    href="#"
    className="application3-grid-link"
    onClick={(e) => e.preventDefault()}
  >
    {Number(value).toFixed(2)}
  </a>
)

const columnDefs = [
  { headerName: 'Type', field: 'type', width: 100 },
  {
    headerName: 'Min\nKBBLS/Day',
    field: 'min',
    width: 110,
    wrapHeaderText: true,
    autoHeaderHeight: true,
    cellRenderer: LinkCellRenderer,
  },
  {
    headerName: 'Max\nKBBLS/Day',
    field: 'max',
    width: 110,
    wrapHeaderText: true,
    autoHeaderHeight: true,
    cellRenderer: LinkCellRenderer,
  },
  {
    headerName: 'Solution\nKBBLS/Day',
    field: 'solution',
    width: 120,
    wrapHeaderText: true,
    autoHeaderHeight: true,
    valueFormatter: ({ value }) => Number(value).toFixed(2),
  },
  {
    headerName: 'Cost\n$/BBL',
    field: 'cost',
    width: 100,
    wrapHeaderText: true,
    autoHeaderHeight: true,
    valueFormatter: ({ value }) => Number(value).toFixed(4),
  },
  { headerName: 'Priority', field: 'priority', width: 90 },
  { headerName: 'Disabled', field: 'disabled', width: 90 },
  { headerName: 'Marginal', field: 'marginal', width: 100 },
  { headerName: 'Solution penalty', field: 'solutionPenalty', width: 140 },
  { headerName: 'Period', field: 'period', width: 100 },
]

function ApplicationThreePage({ theme, themeClassName, mainContentRef, sideNavItems, activePage, onNavigate }) {
  const modalSidenavRef = useRef(null)
  const applicationLayoutRef = useRef(null)
  const [selectedCase, setSelectedCase] = useState('Coker Rate = 26 MBD')

  useEffect(() => {
    modalSidenavRef.current?.hide?.()
  }, [])

  const openModalSidenav = () => {
    const sidenav = modalSidenavRef.current
    if (!sidenav || typeof sidenav.show !== 'function') return
    sidenav.show().then(() => sidenav.focus?.())
  }

  const navigateFromModal = (event, page) => {
    event.preventDefault()
    onNavigate(page)
    modalSidenavRef.current?.hide?.()
  }

  const toggleLeftPanel = () => {
    const layout = applicationLayoutRef.current
    if (!layout) return
    if (layout.hasAttribute('open-left')) {
      layout.removeAttribute('open-left')
    } else {
      layout.setAttribute('open-left', '')
    }
  }

  return (
    <div className={`App eds-base ${themeClassName}`} theme={theme}>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <eds-shell-template className={`app-shell-template application3 ${themeClassName}`} theme={theme}>
        <eds-appbar slot="appbar" show-menu-button is-application role="banner" className={themeClassName} theme={theme}>
          <sl-icon-button
            slot="menu-button"
            library="material"
            name="menu"
            label="Menu"
            onClick={openModalSidenav}
          ></sl-icon-button>
          <div slot="icon" className="application3-app-icon" aria-hidden="true">
            <sl-icon library="material" name="hub"></sl-icon>
          </div>
          <sl-breadcrumb slot="breadcrumb">
            <span slot="separator">/</span>
          </sl-breadcrumb>
          <eds-page-info slot="page-info" heading="Planning Model 1" className={themeClassName} theme={theme}>
            <sl-badge variant="success" slot="badge">Active</sl-badge>
          </eds-page-info>
          <sl-tab-group activation="manual" slot="center" className="application3-appbar-tabs">
            <sl-tab slot="nav" active>Planning</sl-tab>
            <sl-tab slot="nav">Analytics</sl-tab>
            <sl-tab slot="nav">Model</sl-tab>
            <sl-tab slot="nav">Config</sl-tab>
          </sl-tab-group>
          <sl-icon-button slot="right" library="material" name="more_horiz" label="More options"></sl-icon-button>
        </eds-appbar>

        <eds-sidenav
          ref={modalSidenavRef}
          role="navigation"
          aria-label="Planning Model"
          header-text="Planning Model"
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
          <eds-sidenav-item
            type="node"
            label="Application 3"
            icon="apps"
            href="#application3"
            active={activePage === 'application3'}
            onClick={(event) => navigateFromModal(event, 'application3')}
          ></eds-sidenav-item>
        </eds-sidenav>

        <main
          id="main-content"
          ref={mainContentRef}
          tabIndex={-1}
          className={`content-area ${themeClassName} application3`}
          aria-label="Application content"
        >
          <eds-application-layout ref={applicationLayoutRef} open-left>
            <div slot="left-panel" className="application3-left-panel">
              <eds-panel-layout heading="Cases">
                <sl-icon-button
                  slot="header-actions"
                  library="material"
                  name="add"
                  label="Add case"
                ></sl-icon-button>
                <div className="application3-panel-body">
                  <sl-input placeholder="Search" clearable>
                    <sl-icon slot="prefix" library="material" name="search"></sl-icon>
                  </sl-input>
                  <sl-tree className="application3-case-tree" aria-label="Cases">
                    {rootCases.map((name) => (
                      <sl-tree-item
                        key={name}
                        selected={selectedCase === name}
                        onClick={() => setSelectedCase(name)}
                      >
                        {name}
                      </sl-tree-item>
                    ))}
                    <sl-tree-item expanded>
                      Coker Rate = 25 MBD
                      {cokerRateCases.map((name) => (
                        <sl-tree-item
                          key={name}
                          selected={selectedCase === name}
                          onClick={() => setSelectedCase(name)}
                        >
                          {name}
                        </sl-tree-item>
                      ))}
                    </sl-tree-item>
                  </sl-tree>
                </div>
              </eds-panel-layout>
            </div>

            <section className="application3-main-section" aria-label="Case details">
              <eds-page-header heading={selectedCase} className="application3-page-header">
                <sl-icon-button
                  slot="icon"
                  library="material"
                  name="view_sidebar"
                  label="View sidebar"
                  onClick={toggleLeftPanel}
                ></sl-icon-button>
                <sl-breadcrumb slot="breadcrumb">
                  <sl-breadcrumb-item>Cases</sl-breadcrumb-item>
                </sl-breadcrumb>
                <sl-button slot="controls" variant="default">Compare</sl-button>
                <sl-button slot="controls" variant="success">
                  Run
                  <sl-icon slot="suffix" library="material" name="play_arrow_filled"></sl-icon>
                </sl-button>
                <sl-icon-button
                  slot="controls"
                  library="material"
                  name="more_horiz"
                  label="More options"
                ></sl-icon-button>
              </eds-page-header>

              <div className="application3-content">
                <sl-tab-group
                  activation="manual"
                  className="application3-content-tabs"
                  aria-label="Case data sections"
                >
                  <sl-tab slot="nav" panel="purchases" active>Purchases</sl-tab>
                  <sl-tab slot="nav" panel="sales">Sales</sl-tab>
                  <sl-tab slot="nav" panel="limits">Limits</sl-tab>
                  <sl-tab slot="nav" panel="flowsheet">Flowsheet</sl-tab>
                  <sl-tab slot="nav" panel="economic-summary">Economic summary</sl-tab>

                  <sl-tab-panel name="purchases" className="application3-tab-panel">
                    <div className="application3-purchases-controls">
                      <sl-radio-group value="table" size="small" aria-label="View format">
                        <sl-radio-button value="table">Table</sl-radio-button>
                        <sl-radio-button value="list">List</sl-radio-button>
                        <sl-radio-button value="grid">Grid</sl-radio-button>
                        <sl-radio-button value="map">Map</sl-radio-button>
                      </sl-radio-group>
                    </div>
                    <div
                      className="application3-grid-wrapper ag-theme-quartz"
                      role="region"
                      aria-label="Purchases data"
                    >
                      <AgGridReact
                        rowData={rowData}
                        columnDefs={columnDefs}
                        domLayout="autoHeight"
                        suppressCellFocus={false}
                      />
                    </div>
                  </sl-tab-panel>

                  <sl-tab-panel name="sales" className="application3-tab-panel">
                    <p className="application3-empty-panel">Sales data not available.</p>
                  </sl-tab-panel>
                  <sl-tab-panel name="limits" className="application3-tab-panel">
                    <p className="application3-empty-panel">Limits data not available.</p>
                  </sl-tab-panel>
                  <sl-tab-panel name="flowsheet" className="application3-tab-panel">
                    <p className="application3-empty-panel">Flowsheet data not available.</p>
                  </sl-tab-panel>
                  <sl-tab-panel name="economic-summary" className="application3-tab-panel">
                    <p className="application3-empty-panel">Economic summary data not available.</p>
                  </sl-tab-panel>
                </sl-tab-group>
              </div>
            </section>
          </eds-application-layout>
        </main>
      </eds-shell-template>
    </div>
  )
}

export default ApplicationThreePage
