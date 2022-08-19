import { Button } from '@mui/material';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useAppThemeContext } from '../shared/contexts';

export const AppRoutes = () => {
	const { toggleTheme } = useAppThemeContext();

	return (
		<Routes>
			<Route
				path="/first-page"
				element={
					<Button variant="contained" color="primary" onClick={toggleTheme}>
						Teste
					</Button>
				}
			/>
			<Route path="*" element={<Navigate to="/first-page" />} />
		</Routes>
	);
};
