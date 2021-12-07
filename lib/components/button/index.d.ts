import type { App } from 'vue'
import IButton from './src/index.vue'
declare type SFCWithInstall<T> =
	| T
	| {
			install(app: App): void
	  }
declare const InMeAccordionItem: SFCWithInstall<typeof IButton>
export default InMeAccordionItem
