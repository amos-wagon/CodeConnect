import { useEffect, useRef, useState } from 'react'
import * as echarts from 'echarts'
import '@shoelace-style/shoelace/dist/components/radio/radio.js'
import '@shoelace-style/shoelace/dist/components/radio-group/radio-group.js'
import '@shoelace-style/shoelace/dist/components/details/details.js'
import '@shoelace-style/shoelace/dist/components/dialog/dialog.js'

function ExampleOneContent() {
  return (
    <section className="example1-before-after" aria-label="Bad and good language component examples">
      <h1 className="example1-title">Bad vs good UI language</h1>
      <p className="example1-feedback">The same components are shown side by side with poor copy and improved copy.</p>

      <div className="example1-demo-grid">
        <eds-card className="example1-demo-card">
          <h2 className="example1-section-title">Buttons</h2>
          <div className="example1-compare-columns">
            <div className="example1-preview">
              <p className="example1-demo-label bad">Bad language</p>
              <eds-button variant="primary">The dashboard should be created</eds-button>
            </div>
            <div className="example1-preview">
              <p className="example1-demo-label good">Good language</p>
              <eds-button variant="primary">Create dashboard</eds-button>
            </div>
          </div>
        </eds-card>

        <eds-card className="example1-demo-card">
          <h2 className="example1-section-title">Tabs</h2>
          <div className="example1-compare-columns">
            <div className="example1-preview">
              <p className="example1-demo-label bad">Bad language</p>
              <eds-tab-group>
                <eds-tab slot="nav">Documents list</eds-tab>
                <eds-tab slot="nav">View Images</eds-tab>
                <eds-tab slot="nav">Download options</eds-tab>
              </eds-tab-group>
            </div>
            <div className="example1-preview">
              <p className="example1-demo-label good">Good language</p>
              <eds-tab-group>
                <eds-tab slot="nav">Documents</eds-tab>
                <eds-tab slot="nav">Images</eds-tab>
                <eds-tab slot="nav">Downloads</eds-tab>
              </eds-tab-group>
            </div>
          </div>
        </eds-card>

        <eds-card className="example1-demo-card">
          <h2 className="example1-section-title">Inputs</h2>
          <div className="example1-compare-columns">
            <div className="example1-preview">
              <p className="example1-demo-label bad">Bad language</p>
              <eds-input
                label="Enter the serial number on your device below:"
                help-text="Please include punctuation."
              ></eds-input>
            </div>
            <div className="example1-preview">
              <p className="example1-demo-label good">Good language</p>
              <eds-input
                label="Device serial number"
                help-text="Find this on the device label."
              ></eds-input>
            </div>
          </div>
        </eds-card>

        <eds-card className="example1-demo-card">
          <h2 className="example1-section-title">Checkbox</h2>
          <div className="example1-compare-columns">
            <div className="example1-preview">
              <p className="example1-demo-label bad">Bad language</p>
              <eds-checkbox>Do not disable message alerts</eds-checkbox>
            </div>
            <div className="example1-preview">
              <p className="example1-demo-label good">Good language</p>
              <eds-checkbox>Enable message alerts</eds-checkbox>
            </div>
          </div>
        </eds-card>

        <eds-card className="example1-demo-card">
          <h2 className="example1-section-title">Radio buttons</h2>
          <div className="example1-compare-columns">
            <div className="example1-preview">
              <p className="example1-demo-label bad">Bad language</p>
              <sl-radio-group label="Mode">
                <sl-radio value="bad-1">highest quality mode</sl-radio>
                <sl-radio value="bad-2">Balanced performance mode.</sl-radio>
                <sl-radio value="bad-3">fast</sl-radio>
              </sl-radio-group>
            </div>
            <div className="example1-preview">
              <p className="example1-demo-label good">Good language</p>
              <sl-radio-group label="Mode">
                <sl-radio value="good-1">High quality</sl-radio>
                <sl-radio value="good-2">Balanced</sl-radio>
                <sl-radio value="good-3">Fast</sl-radio>
              </sl-radio-group>
            </div>
          </div>
        </eds-card>

        <eds-card className="example1-demo-card">
          <h2 className="example1-section-title">Switch</h2>
          <div className="example1-compare-columns">
            <div className="example1-preview">
              <p className="example1-demo-label bad">Bad language</p>
              <eds-switch>Enabled</eds-switch>
            </div>
            <div className="example1-preview">
              <p className="example1-demo-label good">Good language</p>
              <eds-switch>Send weekly report</eds-switch>
            </div>
          </div>
        </eds-card>

        <eds-card className="example1-demo-card">
          <h2 className="example1-section-title">Table headers</h2>
          <div className="example1-compare-columns">
            <div className="example1-preview">
              <p className="example1-demo-label bad">Bad language</p>
              <table className="example1-mini-table">
                <thead>
                  <tr>
                    <th>Created at date and time</th>
                    <th>How many items are there</th>
                    <th>Total costs</th>
                  </tr>
                </thead>
              </table>
            </div>
            <div className="example1-preview">
              <p className="example1-demo-label good">Good language</p>
              <table className="example1-mini-table">
                <thead>
                  <tr>
                    <th>Created date</th>
                    <th>Item count</th>
                    <th>Total cost</th>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </eds-card>
      </div>
    </section>
  )
}

function ExampleTwoContent() {
  const weeklyTrendChartRef = useRef(null)
  const sitePerformanceChartRef = useRef(null)

  useEffect(() => {
    if (!weeklyTrendChartRef.current || !sitePerformanceChartRef.current) {
      return
    }

    const rootStyles = getComputedStyle(document.documentElement)
    const interactiveDefault = rootStyles.getPropertyValue('--eds-interactive-default').trim() || '#0f62fe'
    const interactiveHover = rootStyles.getPropertyValue('--eds-interactive-hover').trim() || '#0353e9'
    const textLink = rootStyles.getPropertyValue('--eds-text-link').trim() || '#0f62fe'
    const textDefault = rootStyles.getPropertyValue('--eds-text-default').trim() || '#161616'
    const textSecondary = rootStyles.getPropertyValue('--eds-text-secondary').trim() || '#525252'
    const borderDefault = rootStyles.getPropertyValue('--eds-border-default').trim() || '#d0d0d0'
    const fontSans = rootStyles.getPropertyValue('--sl-font-sans').trim() || 'sans-serif'

    const weeklyTrendChart = echarts.init(weeklyTrendChartRef.current)
    const sitePerformanceChart = echarts.init(sitePerformanceChartRef.current)

    const edsChartOptions = {
      color: [interactiveDefault, interactiveHover, textLink],
      textStyle: {
        fontFamily: fontSans,
        color: textSecondary
      },
      grid: { containLabel: true, top: 16, bottom: 16, left: 12, right: 12 }
    }

    weeklyTrendChart.setOption({
      ...edsChartOptions,
      tooltip: { trigger: 'axis' },
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisLabel: { color: textSecondary }
      },
      yAxis: {
        type: 'value',
        axisLabel: { color: textSecondary },
        splitLine: { lineStyle: { color: borderDefault } }
      },
      series: [
        {
          name: 'Output',
          type: 'bar',
          data: [420, 530, 560, 510, 640, 700, 760],
          barMaxWidth: 28,
          itemStyle: { borderRadius: [6, 6, 0, 0] }
        }
      ]
    })

    sitePerformanceChart.setOption({
      ...edsChartOptions,
      tooltip: { trigger: 'item' },
      legend: {
        bottom: 0,
        left: 'center',
        textStyle: {
          fontFamily: fontSans,
          color: textDefault,
        }
      },
      radar: {
        center: ['50%', '46%'],
        radius: '58%',
        indicator: [
          { name: 'Site A', max: 100 },
          { name: 'Site B', max: 100 },
          { name: 'Site C', max: 100 },
          { name: 'Site D', max: 100 },
          { name: 'Site E', max: 100 },
        ],
        axisName: {
          color: textSecondary,
          fontFamily: fontSans,
        },
        splitLine: {
          lineStyle: { color: borderDefault },
        },
        splitArea: {
          areaStyle: {
            color: ['transparent', 'transparent'],
          },
        },
        axisLine: {
          lineStyle: { color: borderDefault },
        },
      },
      series: [
        {
          name: 'Site performance',
          type: 'radar',
          lineStyle: { color: interactiveDefault, width: 2 },
          itemStyle: { color: interactiveDefault },
          areaStyle: { color: interactiveDefault, opacity: 0.18 },
          data: [{ value: [82, 68, 91, 74, 86], name: 'Site performance' }],
        }
      ]
    })

    const onResize = () => {
      weeklyTrendChart.resize()
      sitePerformanceChart.resize()
    }

    const resizeObserver = new ResizeObserver(() => {
      onResize()
    })

    resizeObserver.observe(weeklyTrendChartRef.current)
    resizeObserver.observe(sitePerformanceChartRef.current)

    requestAnimationFrame(() => {
      onResize()
    })

    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('resize', onResize)
      resizeObserver.disconnect()
      weeklyTrendChart.dispose()
      sitePerformanceChart.dispose()
    }
  }, [])

  return (
    <section className="example2-dashboard" aria-label="Operations dashboard">
      <header className="example2-header">
        <h1 className="example1-title">Operations dashboard</h1>
        <p className="example1-feedback">Monitor core KPIs, trend movement, and recent site performance.</p>
      </header>

      <div className="example2-kpi-grid">
        <eds-card className="example2-kpi-card">
          <p className="example2-kpi-label">Total output</p>
          <p className="example2-kpi-value">12,480 bbl</p>
          <p className="example2-kpi-delta positive">+4.2% vs last week</p>
        </eds-card>
        <eds-card className="example2-kpi-card">
          <p className="example2-kpi-label">Efficiency</p>
          <p className="example2-kpi-value">91.6%</p>
          <p className="example2-kpi-delta positive">+1.1 pts vs target</p>
        </eds-card>
        <eds-card className="example2-kpi-card">
          <p className="example2-kpi-label">Downtime</p>
          <p className="example2-kpi-value">3.8 hrs</p>
          <p className="example2-kpi-delta negative">+0.6 hrs this week</p>
        </eds-card>
        <eds-card className="example2-kpi-card">
          <p className="example2-kpi-label">Energy use</p>
          <p className="example2-kpi-value">7.4 MWh</p>
          <p className="example2-kpi-delta positive">-3.5% vs baseline</p>
        </eds-card>
      </div>

      <div className="example2-chart-grid">
        <eds-card className="example2-chart-card">
          <h2 className="example2-section-heading">Weekly output trend</h2>
          <div ref={weeklyTrendChartRef} className="example2-echart" aria-label="Weekly output trend chart"></div>
        </eds-card>

        <eds-card className="example2-chart-card">
          <h2 className="example2-section-heading">Site performance</h2>
          <div ref={sitePerformanceChartRef} className="example2-echart" aria-label="Site performance radar chart"></div>
        </eds-card>
      </div>

      <eds-card className="example2-table-card">
        <h2 className="example2-section-heading">Asset summary</h2>
        <table className="example2-table">
          <thead>
            <tr>
              <th>Asset</th>
              <th>Status</th>
              <th>Output</th>
              <th>Efficiency</th>
              <th>Downtime</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Compressor 01</td>
              <td>Online</td>
              <td>2,130 bbl</td>
              <td>93.1%</td>
              <td>0.4 hrs</td>
            </tr>
            <tr>
              <td>Turbine 03</td>
              <td>Online</td>
              <td>1,980 bbl</td>
              <td>89.7%</td>
              <td>1.2 hrs</td>
            </tr>
            <tr>
              <td>Separator 06</td>
              <td>Maintenance</td>
              <td>1,420 bbl</td>
              <td>87.2%</td>
              <td>2.2 hrs</td>
            </tr>
            <tr>
              <td>Pump 11</td>
              <td>Online</td>
              <td>2,560 bbl</td>
              <td>95.4%</td>
              <td>0.0 hrs</td>
            </tr>
          </tbody>
        </table>
      </eds-card>
    </section>
  )
}

const aspenTechIntegrations = [
  { id: 'hysys1', heading: 'HYSYS 1', description: 'Aspen HYSYS is a process simulation tool used to model and optimize oil, gas, and refining plants.' },
  { id: 'acce', heading: 'ACCE', description: 'Estimates project costs, equipment, and economics.' },
  { id: 'acce2', heading: 'ACCE', description: 'Estimates project costs, equipment, and economics.' },
  { id: 'fidelis', heading: 'Fidelis', description: 'Predicts asset availability and quantifies financial risks using reliability modeling.' },
  { id: 'edr', heading: 'EDR', description: 'Provides rigorous thermal and mechanical design for heat exchangers.' },
  { id: 'aspen-properties', heading: 'Aspen Properties', description: 'Predicts physical and thermodynamic properties of chemical mixtures and fluids.' },
  { id: 'optiplant', heading: 'OptiPlant', description: 'Optimizes 3D plant layouts and piping routes for early-stage engineering.' },
  { id: 'abe', heading: 'ABE', description: 'Manages data flow between conceptual design and detailed engineering.' },
]

const partnerIntegrations = [
  { id: 'ibm-maximo', heading: 'IBM Maximo', description: 'Enterprise asset management (EAM) software with IBM Maximo.' },
  { id: 'scheduler', heading: 'Scheduler', description: 'Manages project timelines, resource allocation, and task sequencing.' },
  { id: 'mybi', heading: 'MyBI', description: 'Manages project timelines, resource allocation, and task sequencing.' },
]

function ExampleThreeContent() {
  return <section aria-label="Example 3"></section>
}

function ExampleFourContent() {
  return <section aria-label="Example 4"></section>
}

function ExampleFiveContent() {
  return <section aria-label="Example 5"></section>
}

function ExamplesContent({ activePage }) {
  if (activePage === 'example1') {
    return <ExampleOneContent />
  }

  if (activePage === 'example2') {
    return <ExampleTwoContent />
  }

  if (activePage === 'example3') {
    return <ExampleThreeContent />
  }

  if (activePage === 'example4') {
    return <ExampleFourContent />
  }

  if (activePage === 'example5') {
    return <ExampleFiveContent />
  }

  return <div style={{ padding: 'var(--sl-spacing-medium-plus)' }}></div>
}

export default ExamplesContent
