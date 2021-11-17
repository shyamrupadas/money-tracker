import React from 'react';
import { loginUser, registrationUser } from '../../store/authSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Avatar, Box, Button, Container, CssBaseline, Grid, Link, TextField, Typography } from '@mui/material';

export const SignUpPage = () => {
  const { error } = useAppSelector(state => state.authSlice);
  const dispatch = useAppDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // @ts-ignore
    dispatch(registrationUser({ user: data.get('user'), password: data.get('password') }))
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
            Регистрация
          </Typography>
          {error &&
          <>
            <Typography>Ошибка регистрации</Typography>
            <Typography>{error}</Typography>
          </>
          }
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="user"
                  label="Имя пользователя"
                  name="user"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Пароль"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Создать аккаунт
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item xs>
                <Link href="#"
                      onClick={() => dispatch(loginUser({ user: 'test', password: 'test' }))} variant="body2">
                  {"Войти в тестовом режиме"}
                </Link>
              </Grid>
              <Grid item>
                <Link href="/login" variant="body2">
                  Войти в свой аккаунт
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
  );
};
