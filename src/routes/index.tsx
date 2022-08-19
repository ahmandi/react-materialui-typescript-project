import { Navigate, Route, Routes } from 'react-router-dom';

export const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/first-page" element={<p>First Page</p>} />
			<Route path="*" element={<Navigate to="/first-page" />} />
		</Routes>
	);
};
