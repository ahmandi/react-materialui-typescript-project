import {
	createContext,
	ReactNode,
	useCallback,
	useContext,
	useState,
} from 'react';

interface IDrawerContextData {
	isDrawerOpen: boolean;
	toggleDrawerOpen: () => void;
}

interface IDrawerChildren {
	children: ReactNode;
}

const DrawerContext = createContext({} as IDrawerContextData);

export const useAppDrawerContext = () => {
	return useContext(DrawerContext);
};

export const AppDrawerProvider = ({ children }: IDrawerChildren) => {
	const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

	const toggleDrawerOpen = useCallback(() => {
		setIsDrawerOpen((oldDrawerOpen) => !oldDrawerOpen);
	}, []);

	return (
		<DrawerContext.Provider value={{ isDrawerOpen, toggleDrawerOpen }}>
			{children}
		</DrawerContext.Provider>
	);
};
