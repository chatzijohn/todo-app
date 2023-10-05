"use client"
import { Drawer, Box, ListItemButton, ListItemText, Typography, Toolbar, List, ListItem } from "@mui/material";
import { useRouter } from 'next/router'


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
                                    <ListItemText primary="Home"/>
                                </ListItemButton>
                            </ListItem>
                            <ListItem>
                                <ListItemButton >                
                                    <ListItemText primary="Datagrid"/>
                                </ListItemButton>
                            </ListItem>
                        </List>       
                    </Box>
                </Drawer>
            </Box>
    )
}