import React from 'react';
import Box from '@mui/material/Box';
import ContactWays from '@/components/contact/ContactWays';
import bg from '@/assets/contact/contactBg.jpg'
import BackGround from '@/components/general/Background';
import Form from '@/components/contact/Form';
export const metadata = {
    title: 'ارتباط با ما'
}
const page = () => {
    return (
        <Box sx={{ position: 'relative', px: { xs: '10px', sm: '20px', md: '10%' } }}>
            <BackGround img={bg} />
            <ContactWays />
            <Form />
        </Box>
    );
};

export default page;