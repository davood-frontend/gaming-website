import React from 'react';
import { Snackbar, Alert } from '@mui/material';
const SnackBar = ({ snackBar, setSnackBar }) => {
    return (
        <Snackbar open={snackBar.open} autoHideDuration={4000} onClose={() => setSnackBar({ open: false })}>
            <Alert severity={snackBar.severity} variant='filled' sx={{ width: 1 }}>
                {snackBar.message}
            </Alert>
        </Snackbar>
    );
};

export default SnackBar;