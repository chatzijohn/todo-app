import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

const topBar = (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="relative">
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-aria-label="open drawer"
                    edge="start"
                    sx={{ mr: 2, display: { sm:'none' } }}
                    // onClick={handleDrawerToggle}
                >
                    <MenuIcon/>
                </IconButton>
                <Typography variant="h6" noWrap component="div">
                    Todo App
                </Typography>
            </Toolbar>
        </AppBar>
    </Box>
)

export default function SideNav() {
    return (
        <>
            {topBar}
        </>
    )
}