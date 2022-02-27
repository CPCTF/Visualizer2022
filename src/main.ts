import './style.css'
import { RunVisualizer } from './Visualizer'
import App from './App.svelte'

const app = new App({
  target: document.body
})

window.addEventListener('load', () => {
  RunVisualizer()
})

export default app
