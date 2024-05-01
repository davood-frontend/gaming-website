'use client'
import React from 'react';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import { useScrollTrigger, Fade } from '@mui/material';
function ScrollTop(props) {
    const { children } = props;

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 200,
    });


    return (
        <Fade in={trigger}>
            {children}
        </Fade>
    );
}

const scrollToTop = () => {
    window.scrollTo(0, 0)
}
const BackToTop = (props) => {
    return (
        <ScrollTop {...props}>
            <Fab color='secondary' aria-label='back to top' sx={{ position: 'fixed', m: 2.5, bottom: { xs: 0, md: undefined }, top: { xs: undefined, md: 0 }, right: 0 }} size='small' onClick={scrollToTop}>
                <KeyboardArrowUpRoundedIcon />
            </Fab>
        </ScrollTop>
    );
};

export default BackToTop;