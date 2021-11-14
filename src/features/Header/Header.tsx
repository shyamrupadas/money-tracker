import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { logout } from '../../store/authSlice';
import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import { ExitToApp } from '@mui/icons-material';

export const Header: React.FC = () => {
  const { isAuth, currentUser } = useAppSelector(state => state.authSlice);
  const dispatch = useAppDispatch();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
        >
          Money Tracker
        </Typography>
        {isAuth &&
        <>
          <Button color="inherit">
            {currentUser.userName}
          </Button>
          <IconButton
            size="large"
            color="inherit"
            onClick={() => dispatch(logout())}
          >
            <ExitToApp />
          </IconButton>
        </>
        }
      </Toolbar>
    </AppBar>
  );
};