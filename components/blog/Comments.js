'use client'
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2'
import CommentIcon from '@mui/icons-material/Comment';
import SnackBar from '../general/SnackBar';
const Comments = () => {

    const [snackBar, setSnackBar] = useState({
        open: false,
        message: '',
        severity: '',
    })
    const [comment, setComment] = useState({
        name: '',
        email: '',
        comment: ''
    })
    const commentHandler = (e) => {
        setComment({ ...comment, [e.target.name]: e.target.value })
    }
    const commentSubmit = (e) => {
        e.preventDefault()
        setSnackBar({
            open: true,
            message: 'نظر شما ثبت و پس از برسی منتشر خواهد شد',
            severity: 'success',

        })
        setComment({
            name: '', email: '', comment: ''
        })
    }
    return (
        <Box sx={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)', borderRadius: 3, px: { xs: 1, sm: 2, lg: 3 }, py: 3, mt: 15, mb: 10, color: '#dfdfdf' }}>
            <SnackBar setSnackBar={setSnackBar} snackBar={snackBar} />
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <CommentIcon sx={{ mx: 1 }} color='secondary' />
                <Typography color='secondary'>
                    دیدگاه ها
                </Typography>
            </Box>
            <form onSubmit={commentSubmit}>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Grid container width={1} spacing={1.5} alignItems='center'>
                        <Grid xs={12} smAfter={5}>
                            <TextField autoComplete='off' value={comment.name} onChange={commentHandler} required name='name' placeholder='نام' fullWidth variant='standard' InputProps={{ disableUnderline: true }} sx={{ backgroundColor: '#192531', borderRadius: 1, px: 2, py: 1 }} />
                        </Grid>
                        <Grid xs={12} smAfter={5}>
                            <TextField autoComplete='off' value={comment.email} onChange={commentHandler} required type='email' name='email' placeholder='ایمیل' fullWidth variant='standard' InputProps={{ disableUnderline: true }} sx={{ backgroundColor: '#192531', borderRadius: 1, px: 2, py: 1 }} />

                        </Grid>
                        <Grid xs={12} smAfter={2} order={{ xs: 4, smAfter: 3 }}>
                            <Button type='submit' color='secondary' variant='contained' size='large' fullWidth sx={{ boxShadow: '0 0 10px rgba(254, 231, 21, 0.3)', whiteSpace: 'nowrap' }}>انتشار دیدگاه</Button>
                        </Grid>
                        <Grid xs={12} order={{ xs: 3, smAfter: 4 }}>
                            <TextField autoComplete='off' value={comment.comment} onChange={commentHandler} required name='comment' placeholder='دیدگاه شما' rows={4} multiline fullWidth variant='standard' InputProps={{ disableUnderline: true }} sx={{ backgroundColor: '#192531', borderRadius: 1, px: 2, py: 1 }} />
                        </Grid>
                    </Grid>
                </Box>
            </form>
        </Box>

    );
};

export default Comments;