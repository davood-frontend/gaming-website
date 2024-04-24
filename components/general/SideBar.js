'use client'
import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import { Context } from '@/context/mainContext';
import Link from 'next/link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { data } from '@/constants/sideBarData'

const SideBar = () => {
    const { sideBar, toggleSideBar } = useContext(Context)
    return (
        <Drawer open={sideBar} onClose={toggleSideBar} PaperProps={{ sx: { backgroundColor: '#192531', backgroundImage: 'none' } }}>
            <Box sx={{ mt: 3, width: 200, height: 1 }} >
                <Box sx={{ px: 2 }}>
                    <Typography variant='h6' color='secondary' textAlign='center'>
                        فروشگاه گیمینگ
                    </Typography>
                </Box>
                <Divider variant='middle' color="#131d27" sx={{ my: 1, height: '1px', border: 'none', borderRadius: '1px' }} />
                <Box>
                    <List>
                        {data.map((item, index) => (
                            <Link href={`/${item.link}`} style={{ color: 'white' }} onClick={toggleSideBar}>
                                <ListItem disablePadding>
                                    <ListItemButton color='secondary.main'>
                                        <ListItemIcon>
                                            {item.icon}
                                        </ListItemIcon>
                                        <ListItemText primary={item.text} />
                                    </ListItemButton>
                                </ListItem>
                            </Link>
                        ))}
                    </List>
                </Box>
            </Box>
        </Drawer>
    );
};

export default SideBar;