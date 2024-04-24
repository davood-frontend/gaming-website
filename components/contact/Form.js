'use client'
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import SnackBar from '../general/SnackBar';
const Form = () => {
    const [currentComment, setCurrentComment] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })
    const [snackBar, setSnackBar] = useState({
        open: false,
        message: '',
        severity: '',
    })

    const changeHandler = (e) => {
        setCurrentComment({ ...currentComment, [e.target.name]: e.target.value })
    }
    const submitHandler = (e) => {
        e.preventDefault()
        setCurrentComment({
            name: '',
            email: '',
            subject: '',
            message: ''
        })
        setSnackBar({ open: true, message: 'پیام شما با موفقیت ارسال شد', severity: 'success' })
    }
    return (
        <Box sx={{ my: { xs: 10, md: 16 }, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Box textAlign='center'>
                <Typography variant='h5' fontWeight={600} color='warning.main' mb={1}>ارسال پیام</Typography>
                <Typography color='white' variant='subtitle2' fontWeight={200}>ارسال پیشنهادات و انتقادات</Typography>
            </Box>

            <Box width={{ xs: 4 / 4, sm: 2 / 3 }}>
                <SnackBar snackBar={snackBar} setSnackBar={setSnackBar} />
                <form onSubmit={submitHandler}>
                    <Box mt={2} sx={{ width: 1 }}>
                        <Typography sx={{ mb: 1 }} color='white'>
                            نام شما (الزامی)
                        </Typography>
                        <TextField required name='name' onChange={changeHandler} value={currentComment.name} size='small' fullWidth variant='standard' InputProps={{ disableUnderline: true }} sx={{ backgroundColor: '#192531', borderRadius: 1, px: 1, py: 1 }} />
                    </Box>
                    <Box mt={2} sx={{ width: 1 }}>
                        <Typography sx={{ mb: 1 }} color='white'>
                            ایمیل شما (الزامی)
                        </Typography>
                        <TextField required type='email' dir='ltr' name='email' onChange={changeHandler} value={currentComment.email} size='small' fullWidth variant='standard' InputProps={{ disableUnderline: true }} sx={{ backgroundColor: '#192531', borderRadius: 1, px: 1, py: 1 }} />
                    </Box>
                    <Box mt={2} sx={{ width: 1 }}>
                        <Typography sx={{ mb: 1 }} color='white'>
                            موضوع
                        </Typography>
                        <TextField required size='small' name='subject' onChange={changeHandler} value={currentComment.subject} fullWidth variant='standard' InputProps={{ disableUnderline: true }} sx={{ backgroundColor: '#192531', borderRadius: 1, px: 1, py: 1 }} />
                    </Box>
                    <Box mt={2} sx={{ width: 1 }}>
                        <Typography sx={{ mb: 1 }} color='white'>
                            پیام شما
                        </Typography>
                        <TextField required rows={8} multiline name='message' onChange={changeHandler} value={currentComment.message} fullWidth variant='standard' InputProps={{ disableUnderline: true }} sx={{ backgroundColor: '#192531', borderRadius: 1, px: 1, py: 1 }} />
                    </Box>
                    <Button type='submit' variant='contained' fullWidth color='warning' sx={{ boxShadow: '0 0 10px rgba(254, 231, 21, 0.5)', mt: 5 }}>
                        <Typography variant='body1' fontWeight={900}>
                            ارسال
                        </Typography>
                    </Button>
                </form>
            </Box>

        </Box>
    );
};

export default Form;