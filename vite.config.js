import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { cpSync, existsSync, mkdirSync } from 'fs'

// Custom plugin to copy Shoelace and Material Design Icons assets
function copyAssetsPlugin() {
  return {
    name: 'copy-assets',
    buildStart() {
      try {
        // Paths
        const shoelaceAssetsPath = resolve(__dirname, 'node_modules/@shoelace-style/shoelace/dist/assets')
        const shoelaceDestPath = resolve(__dirname, 'public/assets/shoelace')
        
        const materialIconsPath = resolve(__dirname, 'node_modules/@material-design-icons/svg')
        const materialDestPath = resolve(__dirname, 'public/assets/icons/material')

        // Create directories if they don't exist
        if (!existsSync('public/assets')) {
          mkdirSync('public/assets', { recursive: true })
        }

        // Copy Shoelace assets
        if (existsSync(shoelaceAssetsPath)) {
          if (!existsSync(shoelaceDestPath)) {
            mkdirSync(shoelaceDestPath, { recursive: true })
          }
          cpSync(shoelaceAssetsPath, shoelaceDestPath, { recursive: true })
          console.log('✓ Copied Shoelace assets')
        }

        // Copy Material Design Icons
        if (existsSync(materialIconsPath)) {
          if (!existsSync(materialDestPath)) {
            mkdirSync(materialDestPath, { recursive: true })
          }
          cpSync(materialIconsPath, materialDestPath, { recursive: true })
          console.log('✓ Copied Material Design Icons')
        }
      } catch (error) {
        console.warn('Asset copying failed:', error.message)
      }
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), copyAssetsPlugin()],
})