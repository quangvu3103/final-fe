import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  closeLogin,
  openRegister,
  openResetPassword,
} from '../redux/common/commonSlice'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Box,
  List,
  FormHelperText,
  LinearProgress,
} from '@mui/material'
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google'
import { login } from '../redux/auth/authThunk'
import { useState } from 'react'

export function Login() {
  const dispatch = useDispatch()
  const [account, setAccount] = useState({
    email: '',
    password: '',
  })

  // const handleSuccessLogin = (response) => {
  //   const token = response.credential
  //   const { isValid, error } = decodeTokenAndCheckExpiration(token)

  //   if (isValid) {
  //     localStorage.setItem('tokenGoogle', token)

  //     dispatch(
  //       loginByGoogleAccountAction({
  //         token: token,
  //       }),
  //     )
  //   } else {
  //     dispatch(showSnackbar(error))
  //   }
  // }

  // const handleErrorLogin = (error) => {
  //   dispatch(showSnackbar(error))
  // }

  const isOpenLogin = useSelector((state) => state.common.login)
  const error = useSelector((state) => state.auth.error)

  const handleCloseLogin = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    dispatch(closeLogin())
  }

  const handleOpenRegister = (event, reason) => {
    dispatch(closeLogin())
    dispatch(openRegister())
  }
  const handleOpenResetPassword = (event, reason) => {
    dispatch(closeLogin())
    dispatch(openResetPassword())
  }
  const handleLogin = (event, reason) => {
    try {
      dispatch(login({ email: account.email, password: account.password }))
    } catch {}
  }

  const handleEmail = (e) => {
    setAccount((preV) => {
      return { ...preV, email: e.target.value }
    })
  }

  const handlePassword = (e) => {
    setAccount((preV) => {
      return { ...preV, password: e.target.value }
    })
  }

  return (
    <>
      <Dialog open={isOpenLogin} onClose={handleCloseLogin} fullWidth>
        <DialogTitle>
          <div className="font-semibold text-4  xl tracking-tight text-teal-500 flex justify-center ">
            Login
          </div>
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            value={account.email}
            onChange={handleEmail}
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            value={account.password}
            onChange={handlePassword}
            label="Password"
            type="password"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseLogin}>
            <div className="font-semibold tracking-tight text-teal-500 p-2">
              Cancel
            </div>
          </Button>
          <Button
            className="font-semibold text-xl tracking-tight text-teal-500 p-2"
            onClick={handleLogin}
          >
            <div className="font-semibold tracking-tight text-teal-500 p-2">
              Login
            </div>
          </Button>
        </DialogActions>
        {error.message !== '' && <p>{error.message}</p>}
        <Box>
          <List sx={{ display: 'grid' }}>
            <div style={{ marginBottom: '10px', width: '100%' }}>
              <GoogleOAuthProvider clientId="639903958485-8igklr57gr0mtk7n21ioc0vtis98srdu.apps.googleusercontent.com">
                <GoogleLogin
                  // onSuccess={handleSuccessLogin}
                  // onError={handleErrorLogin}
                  // style={{ marginTop: '100px' }}

                  className=""
                  cookiePolicy={'single_host_origin'}
                  isSignedIn={true}
                />
              </GoogleOAuthProvider>
            </div>
            <Button variant="outlined" onClick={handleOpenResetPassword}>
              <div className="font-semibold text-xl tracking-tight text-teal-500 p-2">
                Forgot Password
              </div>
            </Button>

            <Button variant="outlined" onClick={handleOpenRegister}>
              <div className="font-semibold text-xl tracking-tight text-teal-500 p-2">
                Register
              </div>
            </Button>
          </List>
        </Box>
      </Dialog>
    </>
  )
}
