import {
	Avatar,
	Divider,
	Drawer,
	Icon,
	List,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	useMediaQuery,
	useTheme,
} from '@mui/material';
import { Box } from '@mui/system';
import { ReactNode } from 'react';

interface IDrawerProps {
	children: ReactNode;
}

export const MenuLateral = ({ children }: IDrawerProps) => {
	const theme = useTheme();
	const smDown = useMediaQuery(theme.breakpoints.down('sm'));

	return (
		<>
			<Drawer variant={smDown ? 'temporary' : 'permanent'}>
				<Box
					width={theme.spacing(28)}
					height="100%"
					display="flex"
					flexDirection="column"
				>
					<Box
						width="100%"
						height={theme.spacing(20)}
						display="flex"
						alignItems="center"
						justifyContent="center"
					>
						<Avatar
							sx={{ height: theme.spacing(12), width: theme.spacing(12) }}
							src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg"
						/>
					</Box>
					<Divider />
					<Box flex={1}>
						<List component="nav">
							<ListItemButton>
								<ListItemIcon>
									<Icon>home</Icon>
								</ListItemIcon>
								<ListItemText primary="Home page" />
							</ListItemButton>
						</List>
					</Box>
				</Box>
			</Drawer>

			<Box height="100vh" marginLeft={smDown ? 0 : theme.spacing(28)}>
				{children}
			</Box>
		</>
	);
};
