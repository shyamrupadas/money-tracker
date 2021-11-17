import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { loginUser } from '../../store/authSlice';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Avatar, Box, Button, Container, CssBaseline, Grid, Link, TextField, Typography } from '@mui/material';

export const LoginPage = () => {
  const { error } = useAppSelector(state => state.authSlice);
  const dispatch = useAppDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // @ts-ignore
    dispatch(loginUser({ user: data.get('user'), password: data.get('password') }));
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Вход
        </Typography>
        {error &&
        <>
          <Typography>Ошибка входа</Typography>
          <Typography>{error}</Typography>
        </>
        }
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            defaultValue="test"
            required
            fullWidth
            id="user"
            label="Имя пользователя"
            name="user"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            defaultValue="test"
            required
            fullWidth
            name="password"
            label="Пароль"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Войти
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#"
                    onClick={() => dispatch(loginUser({ user: 'test', password: 'test' }))} variant="body2">
                {"Войти в тестовом режиме"}
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signup" variant="body2">
                {"Создать аккаунт"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};
