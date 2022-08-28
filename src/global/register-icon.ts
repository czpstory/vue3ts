import { App } from 'vue'
import {
  Calendar,
  Edit,
  User,
  Iphone,
  Setting,
  Fold,
  Expand,
  Delete
} from '@element-plus/icons-vue'

const Icons = [Edit, Calendar, User, Iphone, Setting, Fold, Expand, Delete]

export default function (app: App): void {
  for (const icon of Icons) {
    app.component(icon.name, icon)
  }
}
