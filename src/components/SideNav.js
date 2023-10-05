"use client"
import { Drawer, ListItemButton, ListItemText, Typography, Toolbar, List, ListItem, Box } from "@mui/material";
import Link from 'next/link'


export default function SideNav() {

    const drawerWidth = '250px'
    
    return (
        <div>
            <Box>    
                <Drawer 
                    variant='persistent'
                    anchor='left' 
                    open={true}
                    sx={{
                        '& .MuiDrawer-paper': {
                        boxSixing: 'border-box',
                        width:    drawerWidth,
                        }
                    }}
                >
                    <Toolbar>
                        <Typography variant="h6">
                            Navbar
                        </Typography>
                    </Toolbar>
                    <List>
                        <Link href="/" passHref legacyBehavior>
                            <ListItemButton component="a">
                                <ListItemText primary="Home" />
                            </ListItemButton>
                        </Link>
                        <Link href="/todo" passHref legacyBehavior>
                            <ListItemButton component="a">
                                <ListItemText primary="Todo" />
                            </ListItemButton>
                        </Link>
                        <Link href="/datagrid" passHref legacyBehavior>
                            <ListItemButton component="a">
                                <ListItemText primary="Datagrid" />
                            </ListItemButton>
                        </Link>
                    </List>
                </Drawer>
            </Box>
        </div>
    )
}

