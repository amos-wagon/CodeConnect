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
                gap: 'var(--sl-spacing-medium)',const
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
        <sl-card>
          <div style={{ padding: 'var(--sl-spacing-medium-plus)' }}></div>
        </sl-card>
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
            active={activePage === 'example1'}
            onClick={() => setActivePage('example1')}
          ></aspentech-sidenav-item>
          <aspentech-sidenav-item
            type="node-button"
            label="Example 2"
            active={activePage === 'example2'}
            onClick={() => setActivePage('example2')}
          ></aspentech-sidenav-item>
          <aspentech-sidenav-item
            type="node-button"
            label="Example 3"
            active={activePage === 'example3'}
            onClick={() => setActivePage('example3')}
          ></aspentech-sidenav-item>
          <aspentech-sidenav-item
            type="node-button"
            label="Example 4"
            active={activePage === 'example4'}
            onClick={() => setActivePage('example4')}
          ></aspentech-sidenav-item>
          <aspentech-sidenav-item
            type="node-button"
            label="Example 5"
            active={activePage === 'example5'}
            onClick={() => setActivePage('example5')}
          ></aspentech-sidenav-item>
        </aspentech-sidenav>
        <aspentech-appbar slot="appbar" className={themeClassName}>
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