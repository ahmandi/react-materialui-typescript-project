import { createTheme } from '@mui/material';
import { blue, green } from '@mui/material/colors';

export const DarkTheme = createTheme({
	palette: {
		primary: {
			main: blue[700],
			dark: blue[800],
			light: blue[500],
			contrastText: '#ffffffff',
		},
		secondary: {
			main: green[500],
			dark: green[400],
			light: green[300],
			contrastText: '#000',
		},
		background: {
			default: '#303134',
			paper: '#202124',
		},
	},
});
