import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import React from 'react';
import Grid from '@mui/material/Unstable_Grid2'
const SetComment = ({ commentHandler, data, ratingHandler, submitForm, values }) => {
    return (
        <Box>
            <form onSubmit={submitForm}>
                <Typography variant='h6' sx={{ mb: 1 }} color='secondary'>
                    {data && data.comments == null ? `ثبت اولین دیدگاه برای  "${data.title}"` : `ثبت دیدگاه برای  "${data.title}"`}
                </Typography>
                <Box>
                    <Typography sx={{ mb: 1 }}>
                        عنوان دیدگاه
                    </Typography>
                    <TextField required value={values.title} name='title' onChange={commentHandler} fullWidth variant='standard' InputProps={{ disableUnderline: true }} sx={{ backgroundColor: '#192531', borderRadius: 1, px: 1, py: 1 }} />
                </Box>
                <Box sx={{ my: 2 }}>
                    <Typography>امتیاز شما</Typography>
                    <Rating value={values.rating} sx={{ '& .MuiRating-iconFilled': { color: '#af7ce2' } }} onChange={(event, newValue) => { ratingHandler(newValue) }} />
                </Box>
                <Box>
                    <Typography sx={{ mb: 1 }}>
                        دیدگاه شما
                    </Typography>
                    <TextField required value={values.comment} name='comment' onChange={commentHandler} rows={4} multiline fullWidth variant='standard' InputProps={{ disableUnderline: true }} sx={{ backgroundColor: '#192531', borderRadius: 1, px: 1, py: 1 }} />
                </Box>
                <Grid container columnSpacing={2} sx={{ my: 3 }}>
                    <Grid xs={12} sm={6}>
                        <Typography sx={{ mb: 1 }}>
                            نام
                        </Typography>
                        <TextField required value={values.writer} name='writer' onChange={commentHandler} fullWidth variant='standard' InputProps={{ disableUnderline: true }} sx={{ backgroundColor: '#192531', borderRadius: 1, px: 1, py: 1 }} />
                    </Grid>
                    <Grid xs={12} sm={6}>
                        <Typography sx={{ mb: 1, mt: { xs: 1, sm: 0 } }}>
                            ایمیل
                        </Typography>
                        <TextField required value={values.email} name='email' type='email' onChange={commentHandler} fullWidth variant='standard' InputProps={{ disableUnderline: true }} sx={{ backgroundColor: '#192531', borderRadius: 1, px: 1, py: 1 }} />
                    </Grid>
                </Grid>
                <Box>
                    <FormControlLabel control={<Checkbox color='secondary' />} label='ذخیره نام، ایمیل و وبسایت من در مرورگر برای زمانی که دوباره دیدگاهی مینویسم' />
                </Box>
                <Box sx={{ mt: 2 }}>
                    <Button color='secondary' type='submit' variant='contained' sx={{ boxShadow: '0 0 10px rgba(254, 231, 21, 0.3)' }}>
                        ثبت
                    </Button>
                </Box>
            </form>
        </Box>

    );
};

export default SetComment;