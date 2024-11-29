import '@queo/core/src/styles/main.scss';
import DefaultTheme from 'vitepress/theme';
import { h } from 'vue';

export default {
	extends: DefaultTheme,
	Layout: () => {
		return h(DefaultTheme.Layout);
	},
};
