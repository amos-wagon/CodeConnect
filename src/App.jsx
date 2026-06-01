import './App.css'
import { useState } from 'react'
import DesignSystemExample from './DesignSystemExample.jsx'
import '@shoelace-style/shoelace/dist/components/card/card.js'
import '@shoelace-style/shoelace/dist/components/icon/icon.js'
import '@shoelace-style/shoelace/dist/components/input/input.js'
import '@shoelace-style/shoelace/dist/components/select/select.js'
import '@shoelace-style/shoelace/dist/components/option/option.js'
import '@shoelace-style/shoelace/dist/components/textarea/textarea.js'
import '@shoelace-style/shoelace/dist/components/switch/switch.js'
import '@shoelace-style/shoelace/dist/components/button/button.js'
import '@shoelace-style/shoelace/dist/components/icon-button/icon-button.js'
import '@shoelace-style/shoelace/dist/components/divider/divider.js'
import '@shoelace-style/shoelace/dist/components/radio/radio.js'
import '@shoelace-style/shoelace/dist/components/radio-group/radio-group.js'
import '@shoelace-style/shoelace/dist/components/checkbox/checkbox.js'

function App() {
  const [activePage, setActivePage] = useState('example1')
  const [theme, setTheme] = useState('light')

  const fieldMaxWidthStyle = {
    width: '100%',
    maxWidth: '30rem',
  }

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

  const aspenTechIntegrations = [
    {
      name: 'HYSYS',
      vendor: 'AspenTech',
      description:
        'Aspen HYSYS is a process simulation tool used to model and optimize oil, gas, and refining plants.',
      selected: true,
    },
    {
      name: 'ACCE',
      vendor: 'AspenTech',
      description: 'Estimates project costs, equipment, and economics.',
      selected: true,
    },
    {
      name: 'Fidelis',
      vendor: 'AspenTech',
      description:
        'Predicts asset availability and quantifies financial risks using reliability modeling.',
      selected: true,
    },
    {
      name: 'EDR',
      vendor: 'AspenTech',
      description: 'Provides rigorous thermal and mechanical design for heat exchangers.',
      selected: true,
    },
    {
      name: 'Aspen Properties',
      vendor: 'AspenTech',
      description:
        'Predicts physical and thermodynamic properties of chemical mixtures and fluids.',
      selected: true,
    },
    {
      name: 'OptiPlant',
      vendor: 'AspenTech',
      description: 'Optimizes 3D plant layouts and piping routes for early-stage engineering.',
      selected: false,
    },
    {
      name: 'Digital Twin',
      vendor: 'AspenTech',
      description: 'Run and optimize assets using real-time data and simulation models.',
      selected: false,
    },
    {
      name: 'ABE',
      vendor: 'AspenTech',
      description: 'Manages data flow between conceptual design and detailed engineering.',
      selected: false,
    },
  ]

  const partnerIntegrations = [
    {
      name: 'IBM Maximo',
      vendor: 'IBM Inc.',
      description: 'Enterprise asset management (EAM) software with IBM Maximo.',
      selected: false,
    },
    {
      name: 'Scheduler',
      vendor: 'EngSolutions Inc.',
      description: 'Manages project timelines, resource allocation, and task sequencing.',
      selected: false,
    },
  ]

  const renderIntegrationCard = (integration) => {
    return (
      <aspentech-selectable-card
        key={integration.name}
        heading={integration.name}
        control="switch"
        selected={integration.selected}
      >
        {integration.description}
      </aspentech-selectable-card>
    )
  }

  const renderPageContent = () => {
    if (activePage === 'example1') {
      return <DesignSystemExample />
    }

    if (activePage === 'example2') {
      return (
        <sl-card>
          <div
            style={{
              display: 'grid',
              gap: 'var(--sl-spacing-x-large)',
              padding: 'var(--sl-spacing-medium-plus)',
            }}
          >
            <section
              style={{
                display: 'grid',
                gap: 'var(--sl-spacing-medium)',
              }}
            >
              <h3
                style={{
                  margin: 0,
                  color: 'var(--eds-text-default)',
                  fontFamily: 'var(--sl-font-sans)',
                  fontSize: 'var(--sl-font-size-large)',
                }}
              >
                Heading A
              </h3>

              <sl-input label="Label" style={fieldMaxWidthStyle}></sl-input>

              <sl-radio-group label="Label" name="example2-options" value="option1">
                <sl-radio value="option1">Option 1</sl-radio>
                <sl-radio value="option2">Option 2</sl-radio>
                <sl-radio value="option3">Option 3</sl-radio>
              </sl-radio-group>

              <div
                role="group"
                aria-label="Label"
                style={{
                  display: 'grid',
                  gap: 'var(--sl-spacing-2x-small)',
                }}
              >
                <span
                  style={{
                    color: 'var(--eds-text-default)',
                    fontFamily: 'var(--sl-font-sans)',
                    fontSize: 'var(--sl-font-size-small)',
                    fontWeight: 600,
                  }}
                >
                  Label
                </span>
                <sl-checkbox>Label</sl-checkbox>
                <sl-checkbox>Label</sl-checkbox>
                <sl-checkbox>Label</sl-checkbox>
              </div>
            </section>

            <section
              style={{
                display: 'grid',
                gap: 'var(--sl-spacing-medium)',
              }}
            >
              <h3
                style={{
                  margin: 0,
                  color: 'var(--eds-text-default)',
                  fontFamily: 'var(--sl-font-sans)',
                  fontSize: 'var(--sl-font-size-large)',
                }}
              >
                Heading B
              </h3>

              <sl-select label="Label" placeholder="Select" style={fieldMaxWidthStyle}>
                <sl-option value="option1">Option 1</sl-option>
                <sl-option value="option2">Option 2</sl-option>
                <sl-option value="option3">Option 3</sl-option>
              </sl-select>

              <sl-input label="Label" style={fieldMaxWidthStyle}></sl-input>
            </section>
          </div>
        </sl-card>
      )
    }

    if (activePage === 'example3') {
      return (
        <div className="example3-layout">
          <aspentech-page-header heading="Integrations">
              <sl-breadcrumb slot="breadcrumb">
                <span slot="separator">/</span>
                <sl-breadcrumb-item>Breadcrumb</sl-breadcrumb-item>
                <sl-breadcrumb-item>Heading</sl-breadcrumb-item>
              </sl-breadcrumb>
            <sl-button slot="controls">Add</sl-button>
          </aspentech-page-header>

          <section className="example3-section" aria-labelledby="example3-aspen-section-title">
            <p id="example3-aspen-section-title" className="example3-section-label">AspenTech</p>
            <div className="example3-card-grid">{aspenTechIntegrations.map(renderIntegrationCard)}</div>
          </section>

          <section className="example3-section" aria-labelledby="example3-partners-section-title">
            <p id="example3-partners-section-title" className="example3-section-label">Partners</p>
            <div className="example3-card-grid">{partnerIntegrations.map(renderIntegrationCard)}</div>
          </section>
        </div>
      )
    }

    if (activePage === 'example4') {
      return (
        <sl-card>
          <div style={{ padding: 'var(--sl-spacing-medium-plus)' }}></div>
        </sl-card>
      )
    }

    return (
      <sl-card>
        <div style={{ padding: 'var(--sl-spacing-medium-plus)' }}></div>
      </sl-card>
    )
  }

  return (
    <div
      className={`App aspentech-base ${themeClassName}`}
      theme={theme}
    >
      <aspentech-shell-template className="app-shell-template">
        <aspentech-sidenav slot="sidenav" header-text="Examples" mode="expanded" logo="aspentech">
          <aspentech-sidenav-item
            type="node-button"
            label="Example 1"
            icon="dashboard"
            active={activePage === 'example1'}
            onClick={() => setActivePage('example1')}
          ></aspentech-sidenav-item>
          <aspentech-sidenav-item
            type="node-button"
            label="Example 2"
            icon="tune"
            active={activePage === 'example2'}
            onClick={() => setActivePage('example2')}
          ></aspentech-sidenav-item>
          <aspentech-sidenav-item
            type="node-button"
            label="Example 3"
            icon="integration_instructions"
            active={activePage === 'example3'}
            onClick={() => setActivePage('example3')}
          ></aspentech-sidenav-item>
          <aspentech-sidenav-item
            type="node-button"
            label="Example 4"
            icon="grid_view"
            active={activePage === 'example4'}
            onClick={() => setActivePage('example4')}
          ></aspentech-sidenav-item>
          <aspentech-sidenav-item
            type="node-button"
            label="Example 5"
            icon="insights"
            active={activePage === 'example5'}
            onClick={() => setActivePage('example5')}
          ></aspentech-sidenav-item>
        </aspentech-sidenav>
        <aspentech-appbar slot="appbar">
            <aspentech-page-info slot="page-info" heading={activePageTitle} className={themeClassName}> </aspentech-page-info>
          <sl-icon-button
            slot="right"
            library="material"
            name={isDarkTheme ? 'dark_mode' : 'light_mode'}
            label={isDarkTheme ? 'Dark Mode' : 'Light Mode'}
            onClick={toggleTheme}
          ></sl-icon-button>
        </aspentech-appbar>
        <main className={`content-area ${themeClassName}`}>{renderPageContent()}</main>
      </aspentech-shell-template>
    </div>
  )
}

export default App