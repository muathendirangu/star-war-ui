import { theme, extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const customTheme = {
	...theme,
	colors: {
		...theme.colors,
		primary: {
			50: '#ffe6e7',
			100: '#f9bbbd',
			200: '#ef8f95',
			300: '#e8636f',
			400: '#e1384d',
			500: '#c82039',
			600: '#9c1830',
			700: '#701025',
			800: '#440711',
			900: '#1c0002'
		}
	}
};

const breakpoints = createBreakpoints({
	sm: '30em',
	md: '48em',
	lg: '62em',
	xl: '80em'
});

const overrides = {
	...customTheme,
	breakpoints
};

const starwarsTheme = extendTheme(overrides);

export default starwarsTheme;
