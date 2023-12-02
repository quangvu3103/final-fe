import { Avatar, Box, Button, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../layout/navbar/navbar'
import Footer from '../layout/footer/Footer'
import {
  getProfile,
  updateAvatar,
  updateProfile,
} from '../redux/profile/profileThunk'

const UpdateProfile = () => {
  const dispatch = useDispatch()

  const error = useSelector((state) => state.profile.error)

  const [profile, setProfile] = useState({
    fullName: '',
    phoneNumber: '',
    address: '',
    description: '',
    phone: '',
    url: '',
  })

  const handleUpdateProfile = () => {
    dispatch(updateProfile(profile))
  }

  useEffect(() => {
    dispatch(getProfile())
      .unwrap()
      .then((res) => {
        setProfile({
          fullName: res.fullName,
          phoneNumber: res.phoneNumber,
          address: res.address,
          description: res.description,
          phone: res.phone,
          url: res.url,
        })
      })
  }, [])

  const handleDescription = (e) => {
    setProfile((preV) => {
      return { ...preV, description: e.target.value }
    })
  }

  const handleAddress = (e) => {
    setProfile((preV) => {
      return { ...preV, address: e.target.value }
    })
  }

  const handlePhone = (e) => {
    setProfile((preV) => {
      return { ...preV, phone: e.target.value }
    })
  }

  const handleFullName = (e) => {
    setProfile((preV) => {
      return { ...preV, fullName: e.target.value }
    })
  }

  const handleUploadAvatar = (event) => {
    const file = event.target.files[0]
    const data = new FormData()
    data.append('file', file)

    if (file) {
      dispatch(updateAvatar(data))
        .unwrap()
        .then((res) => {
          setProfile({
            ...profile,
            url: res,
          })
        })
    }
  }

  useEffect(() => {
    if (profile.url) {
      dispatch(updateProfile(profile))
    }
  }, [profile.url])

  return (
    <>
      <div className="">
        <Navbar />
      </div>
      <Box className="w-full lg:w-4/12 px-4 mx-auto">
        <Box className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
          <Box className="px-6">
            <Box className="flex flex-wrap justify-center">
              <Box className="w-full px-4 flex justify-center">
                <Box className="relative">
                  <Avatar
                    sx={{ width: 200, height: 200 }}
                    alt="Remy Sharp"
                    src={profile.url}
                    className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                  />
                  <Box>
                    <label
                      htmlFor="customFile"
                      style={{
                        cursor: 'pointer',
                        backgroundColor: '#1976d2',
                        color: 'white',
                        padding: '6px 16px',
                        borderRadius: '4px',
                      }}
                    >
                      +++++++\\+++
                    </label>
                    <input
                      type="file"
                      className="form-control"
                      id="customFile"
                      style={{ display: 'none' }}
                      onChange={handleUploadAvatar}
                      name="video"
                    />
                  </Box>
                </Box>
              </Box>
              <Box className="w-full px-4 text-center mt-20"></Box>
            </Box>
            <Box className="text-center mt-12">
              <TextField
                fullWidth
                id="outlined-basic"
                label="Full Name"
                variant="outlined"
                value={profile.fullName}
                onChange={handleFullName}
              />

              <Box className="text-center mt-12">
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Address"
                  variant="outlined"
                  value={profile.address}
                  onChange={handleAddress}
                />
              </Box>
              <Box className="text-center mt-12">
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Phone"
                  variant="outlined"
                  value={profile.phoneNumber}
                  onChange={handlePhone}
                />
              </Box>
              <Box className="mb-2 text-blueGray-600 mt-10">
                <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                Solution Manager - Creative Tim Officer
              </Box>
              <Box className="mb-2 text-blueGray-600">
                <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                University of Computer Science
              </Box>
            </Box>
            <Box className="mt-10 py-10 border-t border-blueGray-200 text-center">
              <Box className="flex flex-wrap justify-center">
                <TextField
                  fullWidth
                  id="standard-multiline-static"
                  label="Description"
                  multiline
                  rows={4}
                  defaultValue={profile.description}
                  onChange={handleDescription}
                  variant="standard"
                />
              </Box>
            </Box>
            <Button variant="contained" onClick={handleUpdateProfile}>
              Update Profile
            </Button>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  )
}

export default UpdateProfile
