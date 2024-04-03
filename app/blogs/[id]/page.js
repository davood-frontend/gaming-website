import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import bg from '@/assets/blogs/codBlackOps.png'
import BackGround from '@/components/general/Background';
import Intro from '@/components/blog/Intro';
import Comments from '@/components/blog/Comments';
import SuggestedBlogs from '@/components/blog/SuggestedBlogs';
const Blog = async ({ params }) => {
    const { id } = params
    const fetchData = async () => {
        const res = await fetch(`http://localhost:3000/api/blogs/${id}`)
        const data = await res.json()
        return data
    }
    const data = await fetchData()
    console.log(data);
    return (
        <Box sx={{ px: { xs: '4%', sm: '5%', lg: '10%' } }}>
            <BackGround img={data.img} />
            <Intro data={data} />
            <Comments />
            <SuggestedBlogs id={id}/>
        </Box>
    );
};

export default Blog;