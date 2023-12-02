import { Avatar, Box, Button } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import Navbar from '../layout/navbar/navbar'
import Footer from '../layout/footer/Footer'
import { Link } from 'react-router-dom'

const Profile = () => {
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
              <Box className="w-full px-4 text-center mt-20">
                <Box className="flex justify-center py-4 lg:pt-4 pt-8">
                  <Box className="mr-4 p-3 text-center">
                    <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                      22
                    </span>
                    <span className="text-sm text-blueGray-400">Friends</span>
                  </Box>
                  <Box className="mr-4 p-3 text-center">
                    <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                      10
                    </span>
                    <span className="text-sm text-blueGray-400">Photos</span>
                  </Box>
                  <Box className="lg:mr-4 p-3 text-center">
                    <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                      89
                    </span>
                    <span className="text-sm text-blueGray-400">Comments</span>
                  </Box>
                </Box>
              </Box>
              <Link to={`/updateProfile`} style={{ textDecoration: 'none' }}>
                <Button>Update Profile</Button>
              </Link>
            </Box>
            <Box className="text-center mt-12">
              <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                Jenna Stones
              </h3>
              <Box className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                Los Angeles, California
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
                <Box className="w-full lg:w-9/12 px-4">
                  <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                    An artist of considerable range, Jenna the name taken by
                    Melbourne-raised, Brooklyn-based Nick Murphy writes,
                    performs and records all of his own music, giving it a warm,
                    intimate feel with a solid groove structure. An artist of
                    considerable range.
                  </p>
                  <a
                    href="javascript:void(0);"
                    className="font-normal text-pink-500"
                  >
                    Show more
                  </a>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  )
}

export default Profile
