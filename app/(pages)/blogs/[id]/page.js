import React from 'react';
import Box from '@mui/material/Box';
import BackGround from '@/components/general/Background';
import Intro from '@/components/blog/Intro';
import Comments from '@/components/blog/Comments';
import SuggestedBlogs from '@/components/blog/SuggestedBlogs';
import { fetchBlog } from '@/app/services/requests';
export const metadata = {
    title: 'وبلاگ ها'
}
const Blog = async ({ params }) => {
    const { id } = params
    const data = await fetchBlog(id)
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