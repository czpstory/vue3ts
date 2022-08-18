import registerElement from './register-element'
import registerIcon from './register-icon'
import { App } from 'vue'
export default function (app: App): void {
  registerElement(app)
  registerIcon(app)
}
