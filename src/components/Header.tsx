import { AppBar, Toolbar, Typography, Box, IconButton, Button } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { WriteButton } from './WriteButton';

const Header = () => {

    return (
        <AppBar position="static" color="default" elevation={1}>
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                <img
                    src={'/img/urbio-logo.svg'}
                    srcSet={`/img/urbio-logo.svg 2x`}
                    alt={'URBIO LED'}
                    style={{ objectFit: 'cover', width: '100px' }}
                />

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <WriteButton />
                    <IconButton size="large" color="inherit">
                        <AccountCircleIcon />
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
