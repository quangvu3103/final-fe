import React from 'react'
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
} from '@mui/material'
import {
  closeResetPassword,
  openLogin,
  openRegister,
} from '../redux/common/commonThunk'

const ForgotPassword = () => {
  const dispatch = useDispatch()

  const resetPassword = useSelector((state) => state.common.resetPassword)

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

  const handleOpenRegister = (event, reason) => {
    dispatch(closeResetPassword())
    dispatch(openRegister())
  }

  return (
    <>
      <Dialog open={resetPassword} onClose={handleCloseResetPassword} fullWidth>
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
            fullWidth
            variant="standard"
          />
        </DialogContent>

        <DialogActions>
          <Button>
            <div className="font-semibold tracking-tight text-teal-500 p-2">
              Cancel
            </div>
          </Button>
          <Button>
            <div className="font-semibold tracking-tight text-teal-500 p-2">
              Reset Password
            </div>
          </Button>
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
