import React from 'react';
import Grid from '@mui/material/Unstable_Grid2'
import { Box } from '@mui/material';
import Game from './Game';
const Games = ({ data }) => {
    return (
        <Box sx={{ px: { xs: '5px', md: '5%', display: 'flex', justifyContent: 'center' }}}>
            <Grid container width={1} spacing={{ xs: 2, sm: 1, md: 3 }}>
                {data.map((item, index) => <Game data={item} key={index} id={index}/>)}
            </Grid>
        </Box>
    );
};

export default Games;