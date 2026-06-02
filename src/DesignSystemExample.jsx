// Import Shoelace web components
import '@shoelace-style/shoelace/dist/components/avatar/avatar.js';
import '@shoelace-style/shoelace/dist/components/card/card.js';

const DesignSystemExample = () => {
  return (
    <div style={{ display: 'grid', gap: 'var(--sl-spacing-x-large)' }}>
      <sl-card className="card-overview">
        <img
          slot="image"
          src="https://picsum.photos/300/200?random=2"
          alt="A scenic landscape with mountains and nature."
        />
        <strong>Example Card</strong>
        <br />
        This demonstrates using Shoelace web components directly in React.
      </sl-card>

      <sl-avatar
        label="Jane Doe"
        image="https://picsum.photos/200/200?random=1"
      />

      <eds-slider
        label="Agent range"
        min="0"
        max="100"
        dual
        start-value="25"
        end-value="75"
        display-value
        style={{ width: '100%', maxWidth: '30rem' }}
      />
    </div>
  );
};

export default DesignSystemExample;