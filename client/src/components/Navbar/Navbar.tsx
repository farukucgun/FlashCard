import React from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

/**
 * 
 * @TODO: I can put a search functionality
 */

const Navbar = (props: {onAddCard: React.MouseEventHandler<HTMLElement>}) => {

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Flash Cards
                </Typography>
                <Button color="inherit" onClick={props.onAddCard}>Create New Flash Card</Button>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;