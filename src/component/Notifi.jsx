import { Snackbar } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

const Notifi = () => {
  const vertical = 'top'
  const horizontal = 'center'
  const isOpenNotifi = useSelector((state) => state.common.notifi.open)
  const message = useSelector((state) => state.common.notifi.message)

  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={isOpenNotifi}
        autoHideDuration={6000}
        // onClose={handleClose}
        message={message}
        key={vertical + horizontal}
      />
    </div>
  )
}

export default Notifi
