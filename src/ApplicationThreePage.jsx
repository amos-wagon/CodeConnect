function ApplicationThreePage({ theme, themeClassName, mainContentRef }) {
  return (
    <div className={`App eds-base ${themeClassName}`} theme={theme}>
      <main
        id="main-content"
        ref={mainContentRef}
        tabIndex={-1}
        className={`content-area ${themeClassName} application3`}
        aria-label="Application content"
      >
      </main>
    </div>
  )
}

export default ApplicationThreePage
