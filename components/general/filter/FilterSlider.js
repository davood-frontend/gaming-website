'use client'
import React from 'react';
import { Box, Slider, Typography } from '@mui/material'
import styles from '@/styles/games/Main.module.css'
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const numberFormatter = (num) => {
    num = parseInt(num)
    let formatted = num.toLocaleString('en-US', { style: 'decimal', maximumFractionDigits: 3 })
    return formatted
}
const FilterSlider = ({ sliderValue, setSliderValue, page }) => {
    const theme = useTheme()
    const smallerThanSm = useMediaQuery(theme.breakpoints.down('sm'))
    const limits = page == 'games' ? { min: 0, max: 2000000, step: 50000 } : { min: 0, max: 20000000, step: 1000000 }
    const handleChange = (event, newValue) => {
        setSliderValue(newValue)
    }
    const min = numberFormatter(sliderValue[0])
    const max = numberFormatter(sliderValue[1])
    return (
        <Box className={styles.topFadeBorder} sx={{ px: 2 }}>
            <Slider color='secondary' min={limits.min} max={limits.max} size={smallerThanSm ? 'small' : 'medium'} step={limits.step} valueLabelDisplay='auto' value={sliderValue} onChange={handleChange} />
            <Box sx={{ display: 'flex' }}>
                <Typography sx={{ typography: { xs: 'caption', sm: 'body1' } }}>قیمت : از {min == 0 ? `رایگان` : `${min} تومان`} تا {max == 0 ? 'رایگان' : `${max} تومان`}</Typography>
            </Box>
        </Box>
    );
};

export default FilterSlider;