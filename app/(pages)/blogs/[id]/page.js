import React from 'react';
import Box from '@mui/material/Box';
import BackGround from '@/components/general/Background';
import Intro from '@/components/blog/Intro';
import Comments from '@/components/blog/Comments';
import SuggestedBlogs from '@/components/blog/SuggestedBlogs';
export const metadata = {
    title: 'وبلاگ ها'
}
const fetchData = async (id) => {
    const res = await fetch(`http://localhost:3000/api/blogs/${id}`)
    const data = await res.json()
    return data
}
const Blog = async ({ params }) => {
    const { id } = params
    const data = await fetchData(id)
    return (
        <Box sx={{ px: { xs: '4%', sm: '5%', lg: '10%' } }}>
            <BackGround img={data.img} />
            <Intro data={data} />
            <Comments />
            <SuggestedBlogs id={id} />
        </Box>
    );
};

export default Blog;