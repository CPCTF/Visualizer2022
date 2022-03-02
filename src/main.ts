import './app.css'
import './style.css'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//  @ts-ignore
import App from './window/App.svelte'

const app = new App({
  target: document.body
})

export default app
