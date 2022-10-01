import { useState } from 'react';
import { Navigate } from 'react-router-dom';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import { useSignInEmailPassword } from '@nhost/react';

import { FullSizeCenteredFlexBox } from '@/components/styled';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signInEmailPassword, isSuccess } = useSignInEmailPassword();

  const handleOnSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    signInEmailPassword(email, password);
  };

  if (isSuccess) {
    return <Navigate to="/page-1" replace={true} />;
  }

  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <FullSizeCenteredFlexBox flexDirection="column">
          <TextField
            id="username"
            label="Username"
            variant="standard"
            margin="normal"
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            id="password"
            label="Password"
            variant="standard"
            type="password"
            margin="normal"
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" variant="contained">
            Login
          </Button>
        </FullSizeCenteredFlexBox>
      </form>
    </>
  );
}

export default Login;
