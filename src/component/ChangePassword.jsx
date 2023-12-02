import { closeChangePassword } from '../redux/common/commonSlice'
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
import { changePassword } from '../redux/auth/authThunk'

const ChangePassword = () => {
  const dispatch = useDispatch()
  const [account, setAccount] = useState({
    password: '',
    newPassword: '',
  })

  const isOpenChangePassword = useSelector(
    (state) => state.common.changePassword,
  )
  const message = useSelector((state) => state.auth.message)
  const error = useSelector((state) => state.auth.error)

  const loading = useSelector((state) => state.auth.loading)

  const handleChangePassword = (event) => {
    setAccount((preV) => {
      return { ...preV, password: event.target.value }
    })
  }
  const handleChangeNewPassword = (event) => {
    setAccount((preV) => {
      return { ...preV, newPassword: event.target.value }
    })
  }

  const onChangePassword = (event) => {
    dispatch(changePassword(account))
  }

  const handleCloseChangePassword = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    dispatch(closeChangePassword())
  }

  return (
    <>
      <Dialog
        open={isOpenChangePassword}
        onClose={handleCloseChangePassword}
        fullWidth
      >
        <DialogTitle>
          <div className="font-semibold text-4  xl tracking-tight text-teal-500 flex justify-center ">
            Change Password
          </div>
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            value={account.password}
            onChange={handleChangePassword}
            label="Old Password"
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
            value={account.newPassword}
            onChange={handleChangeNewPassword}
            label="New Password"
            type="password"
            fullWidth
            variant="standard"
          />{' '}
          {message !== '' && <p>{message}</p>}
          {error.message !== '' && <p>{error.message}</p>}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseChangePassword}>
            <div className="font-semibold tracking-tight text-teal-500 p-2">
              Cancel
            </div>
          </Button>
          <Button
            className="font-semibold text-xl tracking-tight text-teal-500 p-2"
            onClick={onChangePassword}
          >
            <div className="font-semibold tracking-tight text-teal-500 p-2">
              Change Password
            </div>
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default ChangePassword
