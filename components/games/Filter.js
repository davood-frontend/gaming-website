import React, { useState } from 'react';
import { Box, Accordion, AccordionSummary, AccordionDetails, IconButton, Button, useMediaQuery } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FilterRow from './FilterRow';
import { rowData } from '@/constants/filterData';
import FilterSlider from './FilterSlider';
import { useTheme } from '@mui/material'

const Filter = () => {
    const { category, companies, gameStyles, platforms, priceSorting } = rowData
    const theme = useTheme()
    const smallerThanMd = useMediaQuery(theme.breakpoints.down('md'))
    const [selectedData, setSelectedData] = useState({
        category: '',
        company: '',
        gameStyle: '',
        platform: '',
        priceSorting: '',
        priceSorting: '',
    })
    const checkOption = (data) => {
        setSelectedData({ ...selectedData, [data.name]: data.value })
    }
    return (
        <Box sx={{ paddingTop: { xs: 5, md: 22 }, width: 1, paddingX: { xs: '10px', md: '10%' }, mb: 8 }}>
            <Accordion sx={{ '&.MuiPaper-root': { borderRadius: 2.3 }, background: 'rgba(0, 0, 0, 0.5)' }}>
                <AccordionSummary expandIcon={<IconButton color='secondary'> <ExpandMoreIcon /> </IconButton>} id='test'>
                    فیلتر ها
                </AccordionSummary>
                <AccordionDetails>
                    <FilterRow data={category} selectedData={selectedData.category} checkOption={checkOption} />
                    <FilterRow data={gameStyles} selectedData={selectedData.gameStyle} checkOption={checkOption} />
                    <FilterRow data={platforms} selectedData={selectedData.platform} checkOption={checkOption} />
                    <FilterRow data={companies} selectedData={selectedData.company} checkOption={checkOption} />
                    <FilterSlider />
                    <FilterRow data={priceSorting} selectedData={selectedData.priceSorting} checkOption={checkOption} />
                    <Box>
                        <Button color='secondary' variant='contained' sx={{ color: 'black', px: 3.5, boxShadow: '0 0 10px rgba(254, 231, 21, 0.3)' }} size={smallerThanMd ? 'small' : 'medium'} onClick={() => console.log(selectedData)}>فیلتر</Button>
                    </Box>
                </AccordionDetails>

            </Accordion>
        </Box>
    );
};

export default Filter;