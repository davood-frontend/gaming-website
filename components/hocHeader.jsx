'use client'
import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
const hocHeader = (Desktop, Mobile) => {
    const theme = useTheme()
    const largerThanMd = useMediaQuery(theme.breakpoints.up('md')) //false by default
    const initialOpen = largerThanMd ? true : false;
    const [header, setHeader] = useState(initialOpen)

    console.log(largerThanMd);
    if (initialOpen) {
        return <Desktop />
    }
    else if (!initialOpen) {
        return <Mobile />
    }
};

export default hocHeader;