import React from 'react';
import { Box, Accordion, AccordionSummary, AccordionDetails, IconButton } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FilterContainer = ({ children }) => {
    return (
        <Box sx={{ paddingTop: { xs: 5, md: 22 }, width: 1, paddingX: { xs: '10px', md: '10%' }, mb: 8 }}>
            <Accordion sx={{ '&.MuiPaper-root': { borderRadius: 2.3 }, background: 'rgba(0, 0, 0, 0.5)' }}>
                <AccordionSummary expandIcon={<IconButton color='secondary'> <ExpandMoreIcon /> </IconButton>} id='accordion'>
                    فیلتر ها
                </AccordionSummary>
                <AccordionDetails>
                    {children}
                </AccordionDetails>

            </Accordion>
        </Box>

    );
};

export default FilterContainer;