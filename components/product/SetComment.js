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
                    <Typography sx={{ mb: 1 }} variant='subtitle1'>
                        عنوان دیدگاه
                    </Typography>
                    <TextField autoComplete='off' required value={values.title} name='title' onChange={commentHandler} fullWidth variant='standard' InputProps={{ disableUnderline: true }} sx={{ backgroundColor: '#192531', borderRadius: 1, px: 1, py: 1 }} />
                </Box>
                <Box sx={{ my: 3 }}>
                    <Typography variant='subtitle1' mb={{ xs: 1, md: 0 }}>امتیاز شما</Typography>
                    <Rating value={values.rating} sx={{ '& .MuiRating-iconFilled': { color: '#af7ce2' } }} onChange={(event, newValue) => { ratingHandler(newValue) }} />
                </Box>
                <Box>
                    <Typography sx={{ mb: 1 }} variant='subtitle1'>
                        دیدگاه شما
                    </Typography>
                    <TextField autoComplete='off' required value={values.comment} name='comment' onChange={commentHandler} rows={4} multiline fullWidth variant='standard' InputProps={{ disableUnderline: true }} sx={{ backgroundColor: '#192531', borderRadius: 1, px: 1, py: 1 }} />
                </Box>
                <Grid container columnSpacing={2} sx={{ my: 3 }}>
                    <Grid xs={12} sm={6} sx={{ mb: { xs: 2, sm: 0 } }}>
                        <Typography sx={{ mb: 1 }} variant='subtitle1'>
                            نام
                        </Typography>
                        <TextField autoComplete='off' required value={values.writer} name='writer' onChange={commentHandler} fullWidth variant='standard' InputProps={{ disableUnderline: true }} sx={{ backgroundColor: '#192531', borderRadius: 1, px: 1, py: 1 }} />
                    </Grid>
                    <Grid xs={12} sm={6} sx={{ mb: { xs: 2, sm: 0 } }}>
                        <Typography sx={{ mb: 1, mt: { xs: 1, sm: 0 } }} variant='subtitle1'>
                            ایمیل
                        </Typography>
                        <TextField autoComplete='off' required value={values.email} name='email' type='email' onChange={commentHandler} fullWidth variant='standard' InputProps={{ disableUnderline: true }} sx={{ backgroundColor: '#192531', borderRadius: 1, px: 1, py: 1 }} />
                    </Grid>
                </Grid>
                <Box>
                    <FormControlLabel control={<Checkbox color='secondary' />} label={<Typography variant='subtitle1'>ذخیره نام، ایمیل و وبسایت من در مرورگر برای زمانی که دوباره دیدگاهی مینویسم</Typography>} />
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