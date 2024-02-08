import React, { useState } from 'react';
import { Box, Slider, Typography } from '@mui/material'
import styles from '@/styles/games/Main.module.css'
const numberFormatter = (num) => {
    num = parseInt(num)
    let formatted = num.toLocaleString('en-US', { style: 'decimal', maximumFractionDigits: 3 })
    return formatted
}
const FilterSlider = () => {
    const [value, setValue] = useState([0, 500000])
    const handleChange = (event, newValue) => {
        setValue(newValue)
    }
    const min = numberFormatter(value[0])
    const max = numberFormatter(value[1])
    return (
        <Box className={styles.topFadeBorder} sx={{ px: 2 }}>
            <Slider color='secondary' min={0} max={500000} step={20000} valueLabelDisplay='auto' value={value} onChange={handleChange} />
            <Box sx={{ display: 'flex' }}>
                <Typography sx={{ mx: 0.5 }}>قیمت : از </Typography>
                <Typography sx={{ mx: 0.5 }}>{min == 0 ? ' رایگان تا ' : min + ' هزار تومان تا '}</Typography>
                <Typography sx={{ mx: 0.5 }}>{max == 0 ? 'رایگان' : max + ' هزار تومان '}</Typography>
            </Box>
        </Box>
    );
};

export default FilterSlider;