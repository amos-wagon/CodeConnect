import { useEffect, useRef, useState } from 'react'
import * as echarts from 'echarts'
import { AgGridReact } from 'ag-grid-react'
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community'
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-quartz.css'
import '@aspentech/pf-ui-core/integrations/eds-aggrid.css'
import '@shoelace-style/shoelace/dist/components/card/card.js'
import '@shoelace-style/shoelace/dist/components/icon/icon.js'
import '@shoelace-style/shoelace/dist/components/icon-button/icon-button.js'
import '@shoelace-style/shoelace/dist/components/tooltip/tooltip.js'
import '@shoelace-style/shoelace/dist/components/button/button.js'
import '@shoelace-style/shoelace/dist/components/badge/badge.js'
import '@shoelace-style/shoelace/dist/components/input/input.js'
import '@shoelace-style/shoelace/dist/components/checkbox/checkbox.js'
import '@shoelace-style/shoelace/dist/components/radio/radio.js'
import '@shoelace-style/shoelace/dist/components/radio-group/radio-group.js'
import '@shoelace-style/shoelace/dist/components/select/select.js'
import '@shoelace-style/shoelace/dist/components/option/option.js'
import '@shoelace-style/shoelace/dist/components/switch/switch.js'
import '@shoelace-style/shoelace/dist/components/details/details.js'
import '@shoelace-style/shoelace/dist/components/breadcrumb/breadcrumb.js'
import '@shoelace-style/shoelace/dist/components/breadcrumb-item/breadcrumb-item.js'
import '@shoelace-style/shoelace/dist/components/alert/alert.js'
import '@shoelace-style/shoelace/dist/components/dialog/dialog.js'
import '@shoelace-style/shoelace/dist/components/tab-group/tab-group.js'
import '@shoelace-style/shoelace/dist/components/tab/tab.js'

ModuleRegistry.registerModules([AllCommunityModule])

function ExampleOneContent() {
  return (
    <section className="example1-before-after" aria-label="Bad and good language component examples">
      <p className="example1-feedback">The same components are shown side by side with poor copy and improved copy.</p>

      <div className="example1-demo-grid">
        <sl-card className="example1-demo-card">
          <h2 className="example1-section-title">Buttons</h2>
          <div className="example1-compare-columns">
            <div className="example1-preview">
              <p className="example1-demo-label bad">Bad language</p>
              <sl-button variant="primary">The dashboard should be created</sl-button>
            </div>
            <div className="example1-preview">
              <p className="example1-demo-label good">Good language</p>
              <sl-button variant="primary">Create dashboard</sl-button>
            </div>
          </div>
        </sl-card>

        <sl-card className="example1-demo-card">
          <h2 className="example1-section-title">Tabs</h2>
          <div className="example1-compare-columns">
            <div className="example1-preview">
              <p className="example1-demo-label bad">Bad language</p>
              <sl-tab-group>
                <sl-tab slot="nav">Documents list</sl-tab>
                <sl-tab slot="nav">View Images</sl-tab>
                <sl-tab slot="nav">Download options</sl-tab>
              </sl-tab-group>
            </div>
            <div className="example1-preview">
              <p className="example1-demo-label good">Good language</p>
              <sl-tab-group>
                <sl-tab slot="nav">Documents</sl-tab>
                <sl-tab slot="nav">Images</sl-tab>
                <sl-tab slot="nav">Downloads</sl-tab>
              </sl-tab-group>
            </div>
          </div>
        </sl-card>

        <sl-card className="example1-demo-card">
          <h2 className="example1-section-title">Inputs</h2>
          <div className="example1-compare-columns">
            <div className="example1-preview">
              <p className="example1-demo-label bad">Bad language</p>
              <sl-input
                label="Enter the serial number on your device below:"
                help-text="Please include punctuation."
              ></sl-input>
            </div>
            <div className="example1-preview">
              <p className="example1-demo-label good">Good language</p>
              <sl-input
                label="Device serial number"
                help-text="Find this on the device label."
              ></sl-input>
            </div>
          </div>
        </sl-card>

        <sl-card className="example1-demo-card">
          <h2 className="example1-section-title">Checkbox</h2>
          <div className="example1-compare-columns">
            <div className="example1-preview">
              <p className="example1-demo-label bad">Bad language</p>
              <sl-checkbox>Do not disable message alerts</sl-checkbox>
            </div>
            <div className="example1-preview">
              <p className="example1-demo-label good">Good language</p>
              <sl-checkbox>Enable message alerts</sl-checkbox>
            </div>
          </div>
        </sl-card>

        <sl-card className="example1-demo-card">
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
        </sl-card>

        <sl-card className="example1-demo-card">
          <h2 className="example1-section-title">Switch</h2>
          <div className="example1-compare-columns">
            <div className="example1-preview">
              <p className="example1-demo-label bad">Bad language</p>
              <sl-switch>Enabled</sl-switch>
            </div>
            <div className="example1-preview">
              <p className="example1-demo-label good">Good language</p>
              <sl-switch>Send weekly report</sl-switch>
            </div>
          </div>
        </sl-card>

        <sl-card className="example1-demo-card">
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
        </sl-card>
      </div>
    </section>
  )
}

function ExampleTwoContent() {
  const weeklyTrendChartRef = useRef(null)
  const sitePerformanceChartRef = useRef(null)
  const productionMixChartRef = useRef(null)
  const throughputScatterChartRef = useRef(null)
  const efficiencyGaugeChartRef = useRef(null)
  const conversionFunnelChartRef = useRef(null)

  useEffect(() => {
    const refs = [
      weeklyTrendChartRef,
      sitePerformanceChartRef,
      productionMixChartRef,
      throughputScatterChartRef,
      efficiencyGaugeChartRef,
      conversionFunnelChartRef
    ]

    if (refs.some(ref => !ref.current)) {
      return
    }

    const rootStyles = getComputedStyle(document.documentElement)
    const interactiveDefault = rootStyles.getPropertyValue('--eds-interactive-default').trim()
    const interactiveHover = rootStyles.getPropertyValue('--eds-interactive-hover').trim()
    const textLink = rootStyles.getPropertyValue('--eds-text-link').trim()
    const fontSans = rootStyles.getPropertyValue('--sl-font-sans').trim() || 'sans-serif'

    const weeklyTrendChart = echarts.init(weeklyTrendChartRef.current)
    const sitePerformanceChart = echarts.init(sitePerformanceChartRef.current)
    const productionMixChart = echarts.init(productionMixChartRef.current)
    const throughputScatterChart = echarts.init(throughputScatterChartRef.current)
    const efficiencyGaugeChart = echarts.init(efficiencyGaugeChartRef.current)
    const conversionFunnelChart = echarts.init(conversionFunnelChartRef.current)
    const charts = [
      weeklyTrendChart,
      sitePerformanceChart,
      productionMixChart,
      throughputScatterChart,
      efficiencyGaugeChart,
      conversionFunnelChart
    ]

    const edsChartOptions = {
      color: [interactiveDefault, interactiveHover, textLink],
      textStyle: {
        fontFamily: fontSans
      }
    }

    weeklyTrendChart.setOption({
      ...edsChartOptions,
      tooltip: { trigger: 'axis' },
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: 'Output',
          type: 'bar',
          data: [420, 530, 560, 510, 640, 700, 760]
        }
      ]
    })

    sitePerformanceChart.setOption({
      ...edsChartOptions,
      tooltip: { trigger: 'item' },
      legend: {
        bottom: 0,
        left: 'center'
      },
      radar: {
        indicator: [
          { name: 'Site A', max: 100 },
          { name: 'Site B', max: 100 },
          { name: 'Site C', max: 100 },
          { name: 'Site D', max: 100 },
          { name: 'Site E', max: 100 }
        ]
      },
      series: [
        {
          name: 'Site performance',
          type: 'radar',
          data: [{ value: [82, 68, 91, 74, 86], name: 'Site performance' }]
        }
      ]
    })

    productionMixChart.setOption({
      ...edsChartOptions,
      tooltip: { trigger: 'axis' },
      xAxis: {
        type: 'category',
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: 'Production',
          type: 'line',
          areaStyle: {},
          data: [180, 220, 205, 260, 290, 315]
        }
      ]
    })

    throughputScatterChart.setOption({
      ...edsChartOptions,
      tooltip: { trigger: 'item' },
      xAxis: { type: 'value' },
      yAxis: { type: 'value' },
      series: [
        {
          name: 'Throughput',
          type: 'scatter',
          data: [[12, 42], [18, 55], [25, 62], [31, 71], [39, 78], [46, 86]]
        }
      ]
    })

    efficiencyGaugeChart.setOption({
      ...edsChartOptions,
      series: [
        {
          name: 'Efficiency',
          type: 'gauge',
          min: 0,
          max: 100,
          data: [{ value: 88, name: 'Efficiency' }]
        }
      ]
    })

    conversionFunnelChart.setOption({
      ...edsChartOptions,
      tooltip: { trigger: 'item' },
      series: [
        {
          name: 'Work orders',
          type: 'funnel',
          data: [
            { value: 100, name: 'Created' },
            { value: 76, name: 'Assigned' },
            { value: 54, name: 'In progress' },
            { value: 38, name: 'Completed' }
          ]
        }
      ]
    })

    const onResize = () => {
      charts.forEach(chart => chart.resize())
    }

    const resizeObserver = new ResizeObserver(() => {
      onResize()
    })

    refs.forEach(ref => resizeObserver.observe(ref.current))

    requestAnimationFrame(() => {
      onResize()
    })

    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('resize', onResize)
      resizeObserver.disconnect()
      charts.forEach(chart => chart.dispose())
    }
  }, [])

  return (
    <section className="example2-dashboard" aria-label="Operations dashboard">
      <header className="example2-header">
        <p className="example1-feedback">Monitor core KPIs, trend movement, and recent site performance.</p>
      </header>

      <div className="example2-kpi-grid">
        <sl-card className="example2-kpi-card">
          <p className="example2-kpi-label">Total output</p>
          <p className="example2-kpi-value">12,480 bbl</p>
          <p className="example2-kpi-delta positive">+4.2% vs last week</p>
        </sl-card>
        <sl-card className="example2-kpi-card">
          <p className="example2-kpi-label">Efficiency</p>
          <p className="example2-kpi-value">91.6%</p>
          <p className="example2-kpi-delta positive">+1.1 pts vs target</p>
        </sl-card>
        <sl-card className="example2-kpi-card">
          <p className="example2-kpi-label">Downtime</p>
          <p className="example2-kpi-value">3.8 hrs</p>
          <p className="example2-kpi-delta negative">+0.6 hrs this week</p>
        </sl-card>
        <sl-card className="example2-kpi-card">
          <p className="example2-kpi-label">Energy use</p>
          <p className="example2-kpi-value">7.4 MWh</p>
          <p className="example2-kpi-delta positive">-3.5% vs baseline</p>
        </sl-card>
      </div>

      <div className="example2-chart-grid">
        <sl-card className="example2-chart-card">
          <h2 className="example2-section-heading">Weekly output trend</h2>
          <div ref={weeklyTrendChartRef} className="example2-echart" aria-label="Weekly output trend chart"></div>
        </sl-card>

        <sl-card className="example2-chart-card">
          <h2 className="example2-section-heading">Site performance</h2>
          <div ref={sitePerformanceChartRef} className="example2-echart" aria-label="Site performance radar chart"></div>
        </sl-card>

        <sl-card className="example2-chart-card">
          <h2 className="example2-section-heading">Production trend</h2>
          <div ref={productionMixChartRef} className="example2-echart" aria-label="Production trend area chart"></div>
        </sl-card>

        <sl-card className="example2-chart-card">
          <h2 className="example2-section-heading">Throughput correlation</h2>
          <div ref={throughputScatterChartRef} className="example2-echart" aria-label="Throughput correlation scatter chart"></div>
        </sl-card>

        <sl-card className="example2-chart-card">
          <h2 className="example2-section-heading">Efficiency score</h2>
          <div ref={efficiencyGaugeChartRef} className="example2-echart" aria-label="Efficiency gauge chart"></div>
        </sl-card>

        <sl-card className="example2-chart-card">
          <h2 className="example2-section-heading">Work order progression</h2>
          <div ref={conversionFunnelChartRef} className="example2-echart" aria-label="Work order progression funnel chart"></div>
        </sl-card>
      </div>

      <sl-card className="example2-table-card">
        <h2 className="example2-section-heading">Asset summary</h2>
        <div className="example2-grid-wrapper ag-theme-quartz eds-aggrid-theme">
          <AgGridReact
            theme="legacy"
            columnDefs={dashboardAssetColumnDefs}
            rowData={dashboardAssetRows}
            defaultColDef={dashboardAssetDefaultColDef}
          />
        </div>
      </sl-card>
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

const assets = [
  { name: 'Compressor 01', id: 'CMP-001', type: 'Compressor' },
  { name: 'Bearing 01', id: 'BRG-001', type: 'Bearing' },
  { name: 'Pump 01', id: 'PMP-001', type: 'Pump' },
]

const assetColumnDefs = [
  { field: 'name', headerName: 'Name', flex: 1, minWidth: 180 },
  { field: 'id', headerName: 'ID', flex: 1, minWidth: 140 },
  { field: 'type', headerName: 'Type', flex: 1, minWidth: 160 },
]

const assetDefaultColDef = {
  sortable: true,
  resizable: true,
  filter: true,
}

const dashboardAssetColumnDefs = [
  { field: 'asset', headerName: 'Asset', flex: 1, minWidth: 180 },
  { field: 'status', headerName: 'Status', flex: 1, minWidth: 140 },
  { field: 'output', headerName: 'Output', flex: 1, minWidth: 140 },
  { field: 'efficiency', headerName: 'Efficiency', flex: 1, minWidth: 140 },
  { field: 'downtime', headerName: 'Downtime', flex: 1, minWidth: 140 },
]

const dashboardAssetRows = [
  { asset: 'Compressor 01', status: 'Online', output: '2,130 bbl', efficiency: '93.1%', downtime: '0.4 hrs' },
  { asset: 'Turbine 03', status: 'Online', output: '1,980 bbl', efficiency: '89.7%', downtime: '1.2 hrs' },
  { asset: 'Separator 06', status: 'Maintenance', output: '1,420 bbl', efficiency: '87.2%', downtime: '2.2 hrs' },
  { asset: 'Pump 11', status: 'Online', output: '2,560 bbl', efficiency: '95.4%', downtime: '0.0 hrs' },
]

const dashboardAssetDefaultColDef = {
  sortable: true,
  resizable: true,
  filter: true,
  editable: true,
}

function ExampleThreeContent() {
  const [searchValue, setSearchValue] = useState('')
  const [isSearchVisible, setIsSearchVisible] = useState(false)
  const [isSearchMounted, setIsSearchMounted] = useState(false)
  const [gridApi, setGridApi] = useState(null)
  const searchInputRef = useRef(null)

  useEffect(() => {
    if (isSearchVisible) {
      window.requestAnimationFrame(() => searchInputRef.current?.focus())
    }
  }, [isSearchVisible])

  useEffect(() => {
    const searchInput = searchInputRef.current
    const handleSearchInput = (event) => {
      const input = event.composedPath()[0]
      setSearchValue(input.value)
    }

    searchInput?.addEventListener('input', handleSearchInput)

    return () => {
      searchInput?.removeEventListener('input', handleSearchInput)
    }
  }, [isSearchVisible])

  useEffect(() => {
    gridApi?.setGridOption('quickFilterText', searchValue)
  }, [gridApi, searchValue])

  return (
    <section className="example3-assets" aria-label="Assets">
      <eds-alert variant="danger">
        Assets information is not connected to a server.
      </eds-alert>
      <div className="example3-table-toolbar">
        <div className="example3-table-filters">
          <span className="example3-item-count">{assets.length} assets</span>
        </div>
        <div className="example3-table-actions">
          {isSearchMounted ? (
            <sl-input
              ref={searchInputRef}
              class={`example3-search-input${isSearchVisible ? ' is-visible' : ''}`}
              size="medium"
              placeholder="Search..."
              value={searchValue}
              onBlur={() => setIsSearchVisible(false)}
              onTransitionEnd={(event) => {
                if (!isSearchVisible && event.propertyName === 'width') {
                  setIsSearchMounted(false)
                }
              }}
              aria-label="Search assets"
            ></sl-input>
          ) : (
            <sl-tooltip content="Search assets">
              <sl-icon-button
                library="material"
                name="search"
                label="Search assets"
                onClick={() => {
                  setIsSearchMounted(true)
                  window.requestAnimationFrame(() => setIsSearchVisible(true))
                }}
              ></sl-icon-button>
            </sl-tooltip>
          )}
          <sl-button variant="primary">Add asset</sl-button>
          <sl-tooltip content="More asset actions">
            <sl-icon-button
              library="material"
              name="more_vert"
              label="More asset actions"
            ></sl-icon-button>
          </sl-tooltip>
        </div>
      </div>
      <div className="example3-grid-wrapper ag-theme-quartz eds-aggrid-theme">
        <AgGridReact
          theme="legacy"
          columnDefs={assetColumnDefs}
          rowData={assets}
          defaultColDef={assetDefaultColDef}
          onGridReady={(event) => setGridApi(event.api)}
        />
      </div>
    </section>
  )
}

function ExampleFourContent() {
  const chart1Ref = useRef(null)
  const chart2Ref = useRef(null)
  const chart3Ref = useRef(null)
  const chart4Ref = useRef(null)
  const chart5Ref = useRef(null)
  const chart6Ref = useRef(null)
  const chart7Ref = useRef(null)
  const chart8Ref = useRef(null)
  const chart9Ref = useRef(null)
  const [fullScreenChart, setFullScreenChart] = useState(null)

  const toggleChartFullScreen = (chartIndex) => {
    setFullScreenChart(currentChart => currentChart === chartIndex ? null : chartIndex)
  }

  useEffect(() => {
    if (fullScreenChart === null) {
      return undefined
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setFullScreenChart(null)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [fullScreenChart])

  useEffect(() => {
    const refs = [chart1Ref, chart2Ref, chart3Ref, chart4Ref, chart5Ref, chart6Ref, chart7Ref, chart8Ref, chart9Ref]
    
    if (refs.some(ref => !ref.current)) {
      return
    }

    const rootStyles = getComputedStyle(document.documentElement)
    const interactiveDefault = rootStyles.getPropertyValue('--eds-interactive-default').trim()
    const interactiveHover = rootStyles.getPropertyValue('--eds-interactive-hover').trim()
    const textLink = rootStyles.getPropertyValue('--eds-text-link').trim()
    const fontSans = rootStyles.getPropertyValue('--sl-font-sans').trim()

    const charts = refs.map(ref => echarts.init(ref.current))

    const baseChartOptions = {
      color: [interactiveDefault, interactiveHover, textLink],
      textStyle: {
        fontFamily: fontSans
      }
    }

    // Chart 1: Line chart
    charts[0].setOption({
      ...baseChartOptions,
      tooltip: { trigger: 'axis' },
      xAxis: {
        type: 'category',
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: 'Revenue',
          type: 'line',
          data: [320, 332, 301, 334, 390, 430]
        }
      ]
    })

    // Chart 2: Bar chart
    charts[1].setOption({
      ...baseChartOptions,
      tooltip: { trigger: 'axis' },
      xAxis: {
        type: 'category',
        data: ['A', 'B', 'C', 'D', 'E', 'F']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: 'Sales',
          type: 'bar',
          data: [120, 200, 150, 80, 220, 180]
        }
      ]
    })

    // Chart 3: Pie chart
    charts[2].setOption({
      ...baseChartOptions,
      tooltip: { trigger: 'item' },
      legend: {
        bottom: 0,
        left: 'center'
      },
      series: [
        {
          name: 'Distribution',
          type: 'pie',
          radius: ['35%', '60%'],
          data: [
            { value: 335, name: 'Category A' },
            { value: 310, name: 'Category B' },
            { value: 234, name: 'Category C' },
            { value: 135, name: 'Category D' }
          ]
        }
      ]
    })

    // Chart 4: Area chart
    charts[3].setOption({
      ...baseChartOptions,
      tooltip: { trigger: 'axis' },
      xAxis: {
        type: 'category',
        data: ['Week 1', 'Week 2', 'Week 3', 'Week 4']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: 'Production',
          type: 'line',
          data: [240, 290, 340, 380],
          areaStyle: {}
        }
      ]
    })

    // Chart 5: Stacked bar chart
    charts[4].setOption({
      ...baseChartOptions,
      tooltip: { trigger: 'axis' },
      xAxis: {
        type: 'category',
        data: ['Q1', 'Q2', 'Q3', 'Q4']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: 'Product A',
          type: 'bar',
          data: [320, 332, 301, 334],
          stack: 'total'
        },
        {
          name: 'Product B',
          type: 'bar',
          data: [120, 132, 101, 134],
          stack: 'total'
        }
      ]
    })

    // Chart 6: Scatter chart
    charts[5].setOption({
      ...baseChartOptions,
      tooltip: { trigger: 'item' },
      xAxis: {
        type: 'value'
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: 'Data points',
          type: 'scatter',
          data: [[10, 20], [20, 50], [30, 80], [40, 45], [50, 70], [60, 35]]
        }
      ]
    })

    // Chart 7: Gauge chart
    charts[6].setOption({
      ...baseChartOptions,
      series: [
        {
          name: 'Performance',
          type: 'gauge',
          min: 0,
          max: 100,
          data: [{ value: 75, name: 'Efficiency' }]
        }
      ]
    })

    // Chart 8: Multi-line chart
    charts[7].setOption({
      ...baseChartOptions,
      tooltip: { trigger: 'axis' },
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: 'Metric A',
          type: 'line',
          data: [100, 120, 150, 130, 160]
        },
        {
          name: 'Metric B',
          type: 'line',
          data: [80, 100, 120, 140, 150]
        }
      ]
    })

    // Chart 9: Funnel chart
    charts[8].setOption({
      ...baseChartOptions,
      tooltip: { trigger: 'item' },
      legend: {
        bottom: 0,
        left: 'center'
      },
      series: [
        {
          name: 'Funnel',
          type: 'funnel',
          left: '10%',
          top: 50,
          bottom: 60,
          width: '80%',
          min: 0,
          max: 100,
          minSize: '50%',
          maxSize: '100%',
          sort: 'descending',
          gap: 2,
          data: [
            { value: 100, name: 'Visitors' },
            { value: 80, name: 'Signups' },
            { value: 55, name: 'Conversions' },
            { value: 30, name: 'Purchases' }
          ]
        }
      ]
    })

    const onResize = () => {
      charts.forEach(chart => chart.resize())
    }

    const resizeObserver = new ResizeObserver(() => {
      onResize()
    })

    refs.forEach(ref => {
      if (ref.current) {
        resizeObserver.observe(ref.current)
      }
    })

    requestAnimationFrame(() => {
      onResize()
    })

    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('resize', onResize)
      resizeObserver.disconnect()
      charts.forEach(chart => chart.dispose())
    }
  }, [])

  return (
    <section className="example4-dashboard" aria-label="Chart examples">
      <div className="example4-chart-grid">
        <sl-card class={`example2-chart-card${fullScreenChart === 0 ? ' is-fullscreen' : ''}`}>
          <div className="example4-chart-header">
            <h2 className="example2-section-heading">Line chart</h2>
            <sl-tooltip content={fullScreenChart === 0 ? 'Close full screen' : 'View full screen'}>
              <sl-icon-button library="material" name={fullScreenChart === 0 ? 'close' : 'fullscreen'} label={fullScreenChart === 0 ? 'Close line chart full screen' : 'View line chart full screen'} onClick={() => toggleChartFullScreen(0)}></sl-icon-button>
            </sl-tooltip>
          </div>
          <div ref={chart1Ref} className="example2-echart" aria-label="Line chart"></div>
        </sl-card>

        <sl-card class={`example2-chart-card${fullScreenChart === 1 ? ' is-fullscreen' : ''}`}>
          <div className="example4-chart-header">
            <h2 className="example2-section-heading">Bar chart</h2>
            <sl-tooltip content={fullScreenChart === 1 ? 'Close full screen' : 'View full screen'}>
              <sl-icon-button library="material" name={fullScreenChart === 1 ? 'close' : 'fullscreen'} label={fullScreenChart === 1 ? 'Close bar chart full screen' : 'View bar chart full screen'} onClick={() => toggleChartFullScreen(1)}></sl-icon-button>
            </sl-tooltip>
          </div>
          <div ref={chart2Ref} className="example2-echart" aria-label="Bar chart"></div>
        </sl-card>

        <sl-card class={`example2-chart-card${fullScreenChart === 2 ? ' is-fullscreen' : ''}`}>
          <div className="example4-chart-header">
            <h2 className="example2-section-heading">Pie chart</h2>
            <sl-tooltip content={fullScreenChart === 2 ? 'Close full screen' : 'View full screen'}>
              <sl-icon-button library="material" name={fullScreenChart === 2 ? 'close' : 'fullscreen'} label={fullScreenChart === 2 ? 'Close pie chart full screen' : 'View pie chart full screen'} onClick={() => toggleChartFullScreen(2)}></sl-icon-button>
            </sl-tooltip>
          </div>
          <div ref={chart3Ref} className="example2-echart" aria-label="Pie chart"></div>
        </sl-card>

        <sl-card class={`example2-chart-card${fullScreenChart === 3 ? ' is-fullscreen' : ''}`}>
          <div className="example4-chart-header">
            <h2 className="example2-section-heading">Area chart</h2>
            <sl-tooltip content={fullScreenChart === 3 ? 'Close full screen' : 'View full screen'}>
              <sl-icon-button library="material" name={fullScreenChart === 3 ? 'close' : 'fullscreen'} label={fullScreenChart === 3 ? 'Close area chart full screen' : 'View area chart full screen'} onClick={() => toggleChartFullScreen(3)}></sl-icon-button>
            </sl-tooltip>
          </div>
          <div ref={chart4Ref} className="example2-echart" aria-label="Area chart"></div>
        </sl-card>

        <sl-card class={`example2-chart-card${fullScreenChart === 4 ? ' is-fullscreen' : ''}`}>
          <div className="example4-chart-header">
            <h2 className="example2-section-heading">Stacked bars</h2>
            <sl-tooltip content={fullScreenChart === 4 ? 'Close full screen' : 'View full screen'}>
              <sl-icon-button library="material" name={fullScreenChart === 4 ? 'close' : 'fullscreen'} label={fullScreenChart === 4 ? 'Close stacked bars full screen' : 'View stacked bars full screen'} onClick={() => toggleChartFullScreen(4)}></sl-icon-button>
            </sl-tooltip>
          </div>
          <div ref={chart5Ref} className="example2-echart" aria-label="Stacked bar chart"></div>
        </sl-card>

        <sl-card class={`example2-chart-card${fullScreenChart === 5 ? ' is-fullscreen' : ''}`}>
          <div className="example4-chart-header">
            <h2 className="example2-section-heading">Scatter plot</h2>
            <sl-tooltip content={fullScreenChart === 5 ? 'Close full screen' : 'View full screen'}>
              <sl-icon-button library="material" name={fullScreenChart === 5 ? 'close' : 'fullscreen'} label={fullScreenChart === 5 ? 'Close scatter plot full screen' : 'View scatter plot full screen'} onClick={() => toggleChartFullScreen(5)}></sl-icon-button>
            </sl-tooltip>
          </div>
          <div ref={chart6Ref} className="example2-echart" aria-label="Scatter plot chart"></div>
        </sl-card>

        <sl-card class={`example2-chart-card${fullScreenChart === 6 ? ' is-fullscreen' : ''}`}>
          <div className="example4-chart-header">
            <h2 className="example2-section-heading">Gauge</h2>
            <sl-tooltip content={fullScreenChart === 6 ? 'Close full screen' : 'View full screen'}>
              <sl-icon-button library="material" name={fullScreenChart === 6 ? 'close' : 'fullscreen'} label={fullScreenChart === 6 ? 'Close gauge full screen' : 'View gauge full screen'} onClick={() => toggleChartFullScreen(6)}></sl-icon-button>
            </sl-tooltip>
          </div>
          <div ref={chart7Ref} className="example2-echart" aria-label="Gauge chart"></div>
        </sl-card>

        <sl-card class={`example2-chart-card${fullScreenChart === 7 ? ' is-fullscreen' : ''}`}>
          <div className="example4-chart-header">
            <h2 className="example2-section-heading">Multi-line trends</h2>
            <sl-tooltip content={fullScreenChart === 7 ? 'Close full screen' : 'View full screen'}>
              <sl-icon-button library="material" name={fullScreenChart === 7 ? 'close' : 'fullscreen'} label={fullScreenChart === 7 ? 'Close multi-line trends full screen' : 'View multi-line trends full screen'} onClick={() => toggleChartFullScreen(7)}></sl-icon-button>
            </sl-tooltip>
          </div>
          <div ref={chart8Ref} className="example2-echart" aria-label="Multi-line chart"></div>
        </sl-card>

        <sl-card class={`example2-chart-card${fullScreenChart === 8 ? ' is-fullscreen' : ''}`}>
          <div className="example4-chart-header">
            <h2 className="example2-section-heading">Funnel</h2>
            <sl-tooltip content={fullScreenChart === 8 ? 'Close full screen' : 'View full screen'}>
              <sl-icon-button library="material" name={fullScreenChart === 8 ? 'close' : 'fullscreen'} label={fullScreenChart === 8 ? 'Close funnel full screen' : 'View funnel full screen'} onClick={() => toggleChartFullScreen(8)}></sl-icon-button>
            </sl-tooltip>
          </div>
          <div ref={chart9Ref} className="example2-echart" aria-label="Funnel chart"></div>
        </sl-card>
      </div>
    </section>
  )
}

function ExampleFiveContent() {
  return (
    <section className="example5-form-layout" aria-label="Example 5">
    </section>
  )
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
