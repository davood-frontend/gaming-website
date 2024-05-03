import React from 'react';
import ConsolesPage from '@/components/consoles/ConsolesPage';
import Box from '@mui/material/Box';
import BackGround from '@/components/general/Background';
import bg from '@/assets/consolesBG.jpg'
export const metadata = {
    title: 'کنسول ها'
}
const page = () => {

    return (
        <Box sx={{ paddingTop: { xs: 5, md: 22 }, position: 'relative' }}>
            <BackGround img={bg} />
            <ConsolesPage scrollLocation={0} />
        </Box>
    );
};

export default page;