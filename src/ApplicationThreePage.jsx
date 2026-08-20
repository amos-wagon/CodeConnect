import { useState } from 'react'
import '@shoelace-style/shoelace/dist/components/input/input.js'
import '@shoelace-style/shoelace/dist/components/button/button.js'

function ApplicationThreePage({ theme, themeClassName, mainContentRef }) {
  const [formData, setFormData] = useState({
    name: '',
    dateOfBirth: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSave = () => {
    console.log('Form data saved:', formData)
    // Add save logic here
  }

  return (
    <div className={`App eds-base ${themeClassName}`} theme={theme}>
      <main
        id="main-content"
        ref={mainContentRef}
        tabIndex={-1}
        className={`content-area ${themeClassName} application3`}
        aria-label="Application content"
      >
        <div className="form-container" style={styles.formContainer}>
          <div className="form-fields" style={styles.formFields}>
            <div className="form-field" style={styles.formField}>
              <label htmlFor="name" style={styles.label}>
                Name
              </label>
              <sl-input
                id="name"
                name="name"
                value={formData.name}
                onInput={handleChange}
                placeholder="Enter your name"
                style={styles.input}
              ></sl-input>
            </div>

            <div className="form-field" style={styles.formField}>
              <label htmlFor="dateOfBirth" style={styles.label}>
                Date of birth
              </label>
              <sl-input
                id="dateOfBirth"
                name="dateOfBirth"
                type="date"
                value={formData.dateOfBirth}
                onInput={handleChange}
                style={styles.input}
              ></sl-input>
            </div>
          </div>

          <div className="form-actions" style={styles.formActions}>
            <sl-button
              variant="primary"
              onClick={handleSave}
            >
              Save
            </sl-button>
          </div>
        </div>
      </main>
    </div>
  )
}

const styles = {
  formContainer: {
    paddingInline: 'var(--sl-spacing-x-large)',
    paddingBlock: 'var(--sl-spacing-large)',
    maxWidth: '40rem',
  },
  formFields: {
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--sl-spacing-medium)',
    marginBottom: 'var(--sl-spacing-x-large)',
  },
  formField: {
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--sl-spacing-3x-small)',
  },
  label: {
    fontSize: 'var(--sl-font-size-medium)',
    fontFamily: 'var(--sl-font-sans)',
    color: 'var(--eds-text-default)',
    fontWeight: '500',
  },
  input: {
    maxWidth: '30rem',
  },
  formActions: {
    display: 'flex',
    gap: 'var(--sl-spacing-medium)',
  },
}

export default ApplicationThreePage
