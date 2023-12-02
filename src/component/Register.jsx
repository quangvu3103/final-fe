import React, { useState } from 'react'
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
  Alert,
} from '@mui/material'
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google'
import { useDispatch, useSelector } from 'react-redux'
import {
  closeRegister,
  openLogin,
  openResetPassword,
} from '../redux/common/commonThunk'
import { register } from '../redux/auth/authThunk'

export function Register() {
  const dispatch = useDispatch()

  const [account, setAccount] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    fullName: '',
    address: '',
    phone: '',
  })
  const isOpenRegister = useSelector((state) => state.common.register)

  const handleCloseRegister = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    dispatch(closeRegister())
  }

  const handleOpenLogin = (event, reason) => {
    dispatch(closeRegister())
    dispatch(openLogin())
  }

  const handleOpenResetPassword = (event, reason) => {
    dispatch(closeRegister())
    dispatch(openResetPassword())
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

  const handleConfirmPassword = (e) => {
    setAccount((preV) => {
      return { ...preV, confirmPassword: e.target.value }
    })
  }

  const handleAddress = (e) => {
    setAccount((preV) => {
      return { ...preV, address: e.target.value }
    })
  }

  const handlePhone = (e) => {
    setAccount((preV) => {
      return { ...preV, phone: e.target.value }
    })
  }

  const handleFullName = (e) => {
    setAccount((preV) => {
      return { ...preV, fullName: e.target.value }
    })
  }

  const handleRegister = (event, reason) => {
    if (account.confirmPassword !== account.password) {
      alert('Password and Confirm Password not match')
    } else if (
      account.email === '' ||
      account.password === '' ||
      account.confirmPassword === '' ||
      account.confirmPassword === '' ||
      account.fullName === '' ||
      account.address === '' ||
      account.phone === ''
    ) {
      alert('Please insert full filled')
    } else {
      dispatch(
        register({
          email: account.email,
          password: account.password,
          fullName: account.fullName,
          address: account.address,
          phoneNumber: account.phone,
        }),
      )
    }
  }

  return (
    <>
      <Dialog open={isOpenRegister} onClose={handleCloseRegister} fullWidth>
        <DialogTitle>
          <div className="font-semibold text-4xl tracking-tight text-teal-500 flex justify-center ">
            Register
          </div>
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            value={account.email}
            onChange={handleEmail}
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
            label="Full Name"
            value={account.fullName}
            onChange={handleFullName}
            type="name"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="address"
            label="Address"
            value={account.address}
            onChange={handleAddress}
            type="name"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Password"
            onChange={handlePassword}
            type="password"
            value={account.password}
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="password"
            label="Confirm Password"
            onChange={handleConfirmPassword}
            value={account.confirmPassword}
            type="password"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Phone"
            onChange={handlePhone}
            value={account.phone}
            type="phone"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseRegister}>
            <div className="font-semibold tracking-tight text-teal-500 p-2">
              Cancel
            </div>
          </Button>
          <Button onClick={handleRegister}>
            <div className="font-semibold tracking-tight text-teal-500 p-2">
              Register
            </div>
          </Button>
        </DialogActions>
        <Box>
          <List sx={{ display: 'grid' }}>
            <div style={{ marginBottom: '10px', width: '100%' }}>
              <GoogleOAuthProvider
                clientId={
                  '639903958485-8igklr57gr0mtk7n21ioc0vtis98srdu.apps.googleusercontent.com'
                }
              >
                <GoogleLogin
                  // onSuccess={handleSuccessLogin}
                  // onError={handleErrorLogin}
                  style={{ marginTop: '100px' }}
                  cookiePolicy={'single_host_origin'}
                  isSignedIn={true}
                />
              </GoogleOAuthProvider>
            </div>
            <Button variant="outlined" onClick={handleOpenResetPassword}>
              <div className="font-semibold text-xl tracking-tight text-teal-500 ">
                Forgot Password
              </div>
            </Button>

            <Button variant="outlined" onClick={handleOpenLogin}>
              <div className="font-semibold text-xl tracking-tight text-teal-500 p-2">
                Login
              </div>
            </Button>
          </List>
        </Box>
      </Dialog>
    </>
  )
}
