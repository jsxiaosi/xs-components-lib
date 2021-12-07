import type { App } from 'vue'
import IButton from './src/index.vue'
// import type { SFCWithInstall } from "../types";

type SFCWithInstall<T> = T | { install(app: App): void } // vue 安装

IButton.install = (app: App) => {
	app.component(IButton.name, IButton)
}

const InMeAccordionItem: SFCWithInstall<typeof IButton> = IButton // 增加类型
export default InMeAccordionItem
