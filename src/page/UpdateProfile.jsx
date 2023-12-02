import { Avatar, Box, TextField } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import Navbar from '../layout/navbar/navbar'
import Footer from '../layout/footer/Footer'

const UpdateProfile = () => {
  const dispatch = useDispatch()

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
                    src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg"
                    className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                  />
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
                value="Jenna Stones"
              />

              <Box className="text-center mt-12">
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Address"
                  variant="outlined"
                  value="Jenna Stones"
                />
              </Box>
              <Box className="text-center mt-12">
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Phone"
                  variant="outlined"
                  value="0985959912"
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
                  label="Multiline"
                  multiline
                  rows={4}
                  defaultValue="An artist of considerable range, Jenna the name taken by
                  Melbourne-raised, Brooklyn-based Nick Murphy writes,
                  performs and records all of his own music, giving it a warm,
                  intimate feel with a solid groove structure. An artist of
                  considerable range."
                  variant="standard"
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  )
}

export default UpdateProfile
