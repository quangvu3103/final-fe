import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
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
  CircularProgress,
} from '@mui/material'
import {
  closeResetPassword,
  openLogin,
  openRegister,
} from '../redux/common/commonThunk'
import { resetPassword } from '../redux/auth/authThunk'

const ForgotPassword = () => {
  const dispatch = useDispatch()

  const isOpenResetPassword = useSelector((state) => state.common.resetPassword)
  const [email, setEmail] = useState('')
  const message = useSelector((state) => state.auth.message)
  const loading = useSelector((state) => state.auth.loading)

  const handleChangeEmail = (event) => {
    setEmail(event.target.value)
  }

  const handleCloseResetPassword = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    dispatch(closeResetPassword())
  }
  const handleOpenLogin = (event, reason) => {
    dispatch(closeResetPassword())
    dispatch(openLogin())
  }
  const handleResetPassword = (event, reason) => {
    dispatch(resetPassword({ email: email }))
  }

  const handleOpenRegister = (event, reason) => {
    dispatch(closeResetPassword())
    dispatch(openRegister())
  }

  return (
    <>
      <Dialog
        open={isOpenResetPassword}
        onClose={handleCloseResetPassword}
        fullWidth
      >
        <DialogTitle>
          <div className="font-semibold text-4xl tracking-tight text-teal-500 flex justify-center ">
            Reset Password
          </div>
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            value={email}
            onChange={handleChangeEmail}
            fullWidth
            variant="standard"
          />
        </DialogContent>
        {message !== '' && <p>{message}</p>}

        <DialogActions>
          <Button>
            <div className="font-semibold tracking-tight text-teal-500 p-2">
              Cancel
            </div>
          </Button>{' '}
          {loading ? (
            <>
              {' '}
              <CircularProgress />
            </>
          ) : (
            <>
              {' '}
              <Button onClick={handleResetPassword}>
                <div className="font-semibold tracking-tight text-teal-500 p-2">
                  Reset Password
                </div>
              </Button>
            </>
          )}
        </DialogActions>
        <Box>
          <List sx={{ display: 'grid' }}>
            <Button variant="outlined" onClick={handleOpenRegister}>
              <div className="font-semibold text-xl tracking-tight text-teal-500 p-2">
                Register
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

export default ForgotPassword
