'use client'
import Box from '@mui/material/Box';
import React, { useEffect, useState } from 'react';
import ReadComments from './ReadComments';
import SetComment from './SetComment';
import Divider from '@mui/material/Divider';
import SnackBar from '../general/SnackBar';
const Comments = ({ data }) => {
    const [snackBar, setSnackBar] = useState({
        open: false,
        message: '',
        severity: '',
    })
    const [comments, setComments] = useState([])
    const [newComment, setNewComment] = useState({
        title: '',
        rating: 0,
        comment: '',
        writer: '',
        email: '',
    })
    useEffect(() => {
        if (data) {
            if (data.comments != null) {
                setComments(data.comments)
            }
        }
    }, [data])
    const commentHandler = (data) => {
        setNewComment({ ...newComment, [data.target.name]: data.target.value })
    }
    const ratingHandler = (data) => {
        setNewComment({ ...newComment, rating: data })
    }
    const submitForm = (e) => {
        e.preventDefault()
        if (newComment.rating == 0) {
            setSnackBar({ open: true, message: 'امتیاز دهی برای ثبت دیدگاه الزامی است', severity: 'error' })
        } else {
            setSnackBar({ open: true, message: 'نظر شما با موفقیت ثبت شد', severity: 'success' })
            setComments([...comments, newComment])
        }
    }
    return (
        <Box sx={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)', borderRadius: 3, p: { xs: 1, sm: 3 }, my: 4, color: '#dfdfdf' }}>
            <SnackBar snackBar={snackBar} setSnackBar={setSnackBar} />
            <SetComment data={data} commentHandler={commentHandler} ratingHandler={ratingHandler} submitForm={submitForm} />
            <Divider sx={{ mt: 5, borderBottomWidth: 2 }}></Divider>
            <ReadComments data={comments} />
        </Box>

    );
};

export default Comments; 