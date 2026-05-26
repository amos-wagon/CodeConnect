// Import Shoelace web components
import '@shoelace-style/shoelace/dist/components/avatar/avatar.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/card/card.js';
import '@shoelace-style/shoelace/dist/components/input/input.js';
import '@shoelace-style/shoelace/dist/components/select/select.js';
import '@shoelace-style/shoelace/dist/components/option/option.js';

const DesignSystemExample = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h2>Aspentech Design System Examples</h2>
      
      {/* Using Web Components */}
      <div style={{ marginBottom: '30px' }}>
        <h3>User Profile Example</h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
          <sl-avatar 
            label="Jane Doe" 
            image="https://picsum.photos/200/200?random=1"
          />
          <span>Jane Doe</span>
          <sl-icon library="material" name="person" />
        </div>
        
        <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
          <sl-button variant="primary">
            <sl-icon library="material" name="home" slot="prefix" />
            Primary Button
          </sl-button>
          <sl-button variant="default">
            <sl-icon library="material" name="settings" slot="prefix" />
            Default Button
          </sl-button>
          <sl-button variant="secondary">
            <sl-icon library="material" name="person_add" slot="prefix" />
            New Agent
          </sl-button>
        </div>
      </div>

      {/* Card Example */}
      <div style={{ marginBottom: '30px' }}>
        <h3>Card Component</h3>
        <sl-card className="card-overview" style={{ maxWidth: '400px' }}>
          <img
            slot="image"
            src="https://picsum.photos/300/200?random=2"
            alt="A scenic landscape with mountains and nature."
          />
          <strong>Example Card</strong>
          <br />
          This demonstrates using Shoelace web components directly in React.
          
          <div slot="footer" style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <sl-input 
              placeholder="Enter your name"
              style={{ flex: '1' }}
            />
            <sl-icon library="material" name="search" />
          </div>
        </sl-card>
      </div>

      {/* Aspentech Slider Example */}
      <div style={{ marginBottom: '30px' }}>
        <h3>Slider Component</h3>
        <div style={{ maxWidth: '400px' }}>
          <eds-slider
            label="Agent range"
            min="0"
            max="100"
            dual
            start-value="25"
            end-value="75"
            display-value
          />
        </div>
      </div>

      {/* Input and Dropdown Example */}
      <div style={{ marginBottom: '30px' }}>
        <h3>Form Controls</h3>
        <div style={{ maxWidth: '400px', display: 'grid', gap: '12px' }}>
          <sl-input label="Agent name" placeholder="Enter agent name" />
          <sl-input label="Start date" type="date" />
          <sl-input label="Search" type="search" placeholder="Search agents" />
          <sl-select label="Agent status" placeholder="Select a status">
            <sl-icon slot="expand-icon" library="system" name="chevron-down" />
            <sl-option value="active">Active</sl-option>
            <sl-option value="paused">Paused</sl-option>
            <sl-option value="archived">Archived</sl-option>
          </sl-select>
        </div>
      </div>

      {/* Icon Examples & Debugging */}
      <div>
        <h3>Material Design Icons</h3>
        <div style={{ display: 'flex', gap: '15px', fontSize: '24px', alignItems: 'center' }}>
          <sl-icon library="material" name="home" />
          <sl-icon library="material" name="person" />
          <sl-icon library="material" name="settings" />
          <sl-icon library="material" name="search" />
          <sl-icon library="material" name="favorite" />
          <sl-icon library="material" name="notifications" />
        </div>
        
        {/* Test with direct SVG paths */}
        <h4>Direct SVG Test</h4>
        <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
          <img 
            src="/assets/icons/material/outlined/home.svg" 
            alt="Home" 
            style={{ width: '24px', height: '24px' }}
          />
          <img 
            src="/assets/icons/material/outlined/person.svg" 
            alt="Person" 
            style={{ width: '24px', height: '24px' }}
          />
        </div>
        
        <p style={{ marginTop: '15px', color: '#666' }}>
          All icons use the Material Design library with proper Aspentech theming.
          Check browser console for icon loading debug info.
        </p>
      </div>
    </div>
  );
};

export default DesignSystemExample;