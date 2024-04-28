import React from 'react';
import { Box, Accordion, AccordionSummary, AccordionDetails, IconButton, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FilterContainer = ({ children }) => {
    return (
        <Box sx={{ width: 1, paddingX: { xs: '10px', md: '10%' }, mb: { xs: 5, sm: 8 } }}>
            <Accordion sx={{ '&.MuiPaper-root': { borderRadius: 2.3 }, background: 'rgba(0, 0, 0, 0.5)' }}>
                <AccordionSummary expandIcon={<IconButton color='secondary'> <ExpandMoreIcon /> </IconButton>} id='accordion'>
                    <Typography >
                        فیلتر ها
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {children}
                </AccordionDetails>

            </Accordion>
        </Box>

    );
};

export default FilterContainer;