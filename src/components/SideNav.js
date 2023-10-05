// "use client"
import { Drawer, Box, ListItemButton, ListItemText, Typography, Toolbar, List, ListItem } from "@mui/material";
import { Link } from 'next/link'


export default function SideNav() {

    const drawerWidth = '250px'
    
    return (
            <Box>    
                <Drawer 
                    variant='persistent'
                    anchor='left' 
                    open="true"
                    sx={{
                        '& .MuiDrawer-paper': {
                        boxSixing: 'border-box',
                        width:    drawerWidth,
                        }
                    }}
                >
                    <Box
                        textAlign="center"
                    >
                        <Toolbar>
                            <Typography variant="h6">
                                Navbar
                            </Typography>
                        </Toolbar>
                        <List>
                            <ListItem>
                                <ListItemButton >                
                                    <Link href="/">
                                        <ListItemText primary="Home"/>
                                    </Link>
                                </ListItemButton>
                            </ListItem>
                            <ListItem>
                                <ListItemButton >                
                                    <Link href="/todo">
                                        <ListItemText primary="Todo"/>
                                    </Link>
                                </ListItemButton>
                            </ListItem>
                            <ListItem>
                                <ListItemButton >                
                                <Link href="/datagrid">
                                        <ListItemText primary="Datagrid"/>
                                    </Link>
                                </ListItemButton>
                            </ListItem>
                        </List>       
                    </Box>
                </Drawer>
            </Box>
    )
}