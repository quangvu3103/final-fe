import { Snackbar } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeNotification } from '../redux/common/commonSlice'

const Notifi = () => {
  const vertical = 'top'
  const dispatch = useDispatch()
  const horizontal = 'center'
  const isOpenNotifi = useSelector((state) => state.common.notifi.open)
  const message = useSelector((state) => state.common.notifi.message)
  const handleClose = () => {dispatch(closeNotification())}

  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={isOpenNotifi}
        autoHideDuration={2000}
        onClose={handleClose}
        message={message}
        key={vertical + horizontal}
      />
    </div>
  )
}

export default Notifi
