import React from 'react';
import bg from '@/assets/blogsBG.jpg'
import BackGround from '@/components/general/Background';
import Box from '@mui/material/Box'
import Cards from '@/components/blogs/Cards';
export const metadata = {
    title: 'وبلاگ ها'
}
const page = () => {
    return (
        <Box sx={{ px: { xs: '1%', md: '5%', lg: '10%' } }}>
            <BackGround img={bg} />
            <Cards />
        </Box>
    );
};

export default page;