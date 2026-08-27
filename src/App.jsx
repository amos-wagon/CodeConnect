import './App.css'
import { useEffect, useRef, useState } from 'react'
import * as echarts from 'echarts'
import ApplicationA from './ApplicationA.jsx'

const PAGES = [
  { id: 'overview', label: 'Overview', icon: 'dashboard_filled' },
  { id: 'example1', label: 'Example 1', icon: 'edit_note_filled' },
  { id: 'example2', label: 'Example 2', icon: 'analytics_filled' },
  { id: 'example3', label: 'Example 3', icon: 'hub_filled' },
  { id: 'example4', label: 'Example 4', icon: 'table_view_filled' },
  { id: 'example5', label: 'Example 5', icon: 'account_tree_filled' },
]
const APP_PAGE = { id: 'application-a', label: 'Application A' }

const getPage = () => {
  const requestedPage = window.location.hash.slice(1)
  return [...PAGES, APP_PAGE].some(page => page.id === requestedPage) ? requestedPage : 'overview'
}

function ExampleOnePage() {
  const handleSubmit = (event) => {
    event.preventDefault()
    const toast = document.createElement('eds-toast')
    toast.text = 'Form saved successfully.'
    document.body.append(toast)
  }

  return (
    <div className="example1-page-content">
      <form className="example1-form" onSubmit={handleSubmit}>
        <sl-input label="Name"></sl-input>
        <sl-input label="Email"></sl-input>
        <sl-input label="Description"></sl-input>
        <sl-button type="submit" variant="primary">Save</sl-button>
      </form>
    </div>
  )
}

function ExampleThreePage() {
  return null
}

const KPI_DATA = [
  { label: 'Active users', value: '1,284', change: '+12.4%' },
  { label: 'Open requests', value: '48', change: '-8.1%' },
  { label: 'Completed runs', value: '3,692', change: '+18.7%' },
  { label: 'Success rate', value: '96.8%', change: '+2.3%' },
]

const RECENTS_DATA = [
  { name: 'North region sync', type: 'Process', modifiedBy: { name: 'A. Walker' }, modifiedOn: 'Today, 09:42' },
  { name: 'Capacity review', type: 'Review', modifiedBy: { name: 'M. Chen' }, modifiedOn: 'Today, 08:17' },
  { name: 'Usage report', type: 'Report', modifiedBy: { name: 'R. Patel' }, modifiedOn: 'Yesterday' },
  { name: 'Quarterly forecast', type: 'Forecast', modifiedBy: { name: 'J. Rivera' }, modifiedOn: 'Yesterday' },
]

function RecentActivity() {
  const recentsTableRef = useRef(null)

  useEffect(() => {
    const recentsTable = recentsTableRef.current
    if (!recentsTable) return undefined

    let frameId
    customElements.whenDefined('eds-recents-table').then(() => {
      recentsTable.tableData = RECENTS_DATA
      frameId = requestAnimationFrame(() => {
        const style = document.createElement('style')
        style.textContent = 'th:last-child, td:last-child { display: none; }'
        recentsTable.shadowRoot?.append(style)
      })
    })

    return () => cancelAnimationFrame(frameId)
  }, [])

  return <eds-recents-table ref={recentsTableRef} header-text="Recent activity" show-avatar></eds-recents-table>
}

function Chart({ type, title, ariaLabel }) {
  const chartRef = useRef(null)

  useEffect(() => {
    if (!chartRef.current) return undefined

    let chart
    let animationFrame

    const renderChart = () => {
      if (!chartRef.current?.clientWidth || !chartRef.current?.clientHeight) {
        animationFrame = requestAnimationFrame(renderChart)
        return
      }

      chart = echarts.init(chartRef.current)
      const styles = getComputedStyle(document.documentElement)
      const textColor = styles.getPropertyValue('--eds-text-secondary').trim()

      chart.setOption(type === 'line' ? {
        animation: false,
        aria: { enabled: true },
        tooltip: { trigger: 'axis' },
        grid: { top: 16, right: 16, bottom: 28, left: 42 },
        xAxis: { type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], axisLabel: { color: textColor } },
        yAxis: { type: 'value', axisLabel: { color: textColor } },
        series: [{ type: 'line', data: [182, 215, 198, 246, 231, 268, 284], smooth: true, symbol: 'circle', symbolSize: 7 }],
      } : {
        animation: false,
        aria: { enabled: true },
        tooltip: { trigger: 'item' },
        grid: { top: 16, right: 16, bottom: 28, left: 42 },
        xAxis: { type: 'category', data: ['North', 'South', 'East', 'West'], axisLabel: { color: textColor } },
        yAxis: { type: 'value', axisLabel: { color: textColor } },
        series: [{ type: 'bar', data: [86, 72, 64, 58], barMaxWidth: 36 }],
      })
    }

    renderChart()

    const resizeChart = () => chart?.resize()
    window.addEventListener('resize', resizeChart)
    return () => {
      cancelAnimationFrame(animationFrame)
      window.removeEventListener('resize', resizeChart)
      chart?.dispose()
    }
  }, [type])

  return (
    <sl-card class="dashboard-card chart-card">
      <h2>{title}</h2>
      <div ref={chartRef} className="chart" role="img" aria-label={ariaLabel}></div>
    </sl-card>
  )
}

function OverviewPage() {
  return (
    <div className="overview-dashboard">
      <section className="kpi-grid" aria-label="Key performance indicators">
        {KPI_DATA.map(({ label, value, change }) => (
          <sl-card key={label} class="dashboard-card kpi-card">
            <p className="kpi-label">{label}</p>
            <p className="kpi-value">{value}</p>
            <p className="kpi-change">{change}</p>
          </sl-card>
        ))}
      </section>
      <section className="chart-grid" aria-label="Charts">
        <Chart type="line" title="Weekly activity" ariaLabel="Line chart showing weekly activity from Monday through Sunday" />
        <Chart type="bar" title="Regional completion" ariaLabel="Bar chart showing completion by region" />
      </section>
      <section aria-label="Recent activity">
        <RecentActivity />
      </section>
    </div>
  )
}

function App() {
  const [activePage, setActivePage] = useState(getPage)
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(() => window.matchMedia('(max-width: 64rem)').matches)
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const syncPage = () => setActivePage(getPage())
    window.addEventListener('hashchange', syncPage)
    if (!window.location.hash) window.history.replaceState(null, '', '#overview')
    return () => window.removeEventListener('hashchange', syncPage)
  }, [])

  const isDarkTheme = theme === 'dark'
  const themeClassName = isDarkTheme ? 'eds-dark sl-theme-dark' : 'sl-theme-light'
  const activePageLabel = [...PAGES, APP_PAGE].find(page => page.id === activePage)?.label ?? 'CodeConnect'

  const navigateTo = (pageId) => {
    window.location.hash = pageId
  }

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 64rem)')
    const syncSidebarMode = () => setIsSidebarCollapsed(mediaQuery.matches)
    mediaQuery.addEventListener('change', syncSidebarMode)
    return () => mediaQuery.removeEventListener('change', syncSidebarMode)
  }, [])

  if (activePage === APP_PAGE.id) return <ApplicationA theme={theme} />

  return (
    <div className={`app eds-base ${themeClassName}`}>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <eds-shell-template class="portal-shell" theme={theme}>
        <eds-sidenav slot="sidenav" header-text="CodeConnect" mode={isSidebarCollapsed ? 'collapsed' : 'expanded'} logo="aspentech" aria-label="Portal navigation">
          {PAGES.map(item => (
            <eds-sidenav-item
              key={item.id}
              type="node"
              label={item.label}
              icon={item.icon}
              href={`#${item.id}`}
              active={activePage === item.id}
              onClick={(event) => {
                event.preventDefault()
                navigateTo(item.id)
              }}
            ></eds-sidenav-item>
          ))}
          <sl-divider></sl-divider>
          <eds-sidenav-item type="heading" label="Apps"></eds-sidenav-item>
          <eds-sidenav-item
            type="node"
            label="Application A"
            icon="apps_filled"
            href={`#${APP_PAGE.id}`}
            onClick={(event) => {
              event.preventDefault()
              navigateTo(APP_PAGE.id)
            }}
          ></eds-sidenav-item>
        </eds-sidenav>
        <eds-appbar slot="appbar" role="banner" theme={theme}>
          <eds-page-info slot="page-info" heading={activePageLabel}></eds-page-info>
          <sl-icon-button
            key={theme}
            slot="right"
            library="material"
            name={isDarkTheme ? 'light_mode' : 'dark_mode'}
            label={isDarkTheme ? 'Switch to light mode' : 'Switch to dark mode'}
            onClick={() => setTheme(currentTheme => currentTheme === 'dark' ? 'light' : 'dark')}
          ></sl-icon-button>
            <sl-avatar slot="right" label="User avatar" initials="AW"></sl-avatar>
        </eds-appbar>
        <main id="main-content" className="app-content">
          {activePage === 'overview' && <OverviewPage />}
          {activePage === 'example1' && <ExampleOnePage />}
          {activePage === 'example3' && <ExampleThreePage />}
        </main>
      </eds-shell-template>
    </div>
  )
}

export default App