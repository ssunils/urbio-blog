import { AppBar, Toolbar, Typography, Box, IconButton, Button } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Edit, EditAttributesOutlined, EditNote } from '@mui/icons-material';

const Header = () => {
    return (
        <AppBar position="static" color="default" elevation={1}>
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                <Typography variant="h6" component="div" sx={{ fontWeight: 600 }}>
                    MyBlog
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Button
                        variant="outlined"
                        color='secondary'
                        startIcon={<EditNote  />}
                        sx={{ textTransform: 'none' }}
                    >
                        Write 
                    </Button>
                    <IconButton size="large" color="inherit">
                        <AccountCircleIcon />
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
