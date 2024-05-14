import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
const loading = () => {
    return (
        <Box sx={{ height: '100vh', alignItems: 'center ', display: 'flex', justifyContent: 'center' }}>
            <Typography color='white' variant='h5' fontWeight={300}>
                ... LOADING
            </Typography>
        </Box>
    );
};

export default loading;