import { Avatar, Box, Button } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../layout/navbar/navbar'
import Footer from '../layout/footer/Footer'
import { Link } from 'react-router-dom'
import { getProfile } from '../redux/profile/profileThunk'
import { openChangePassword } from '../redux/common/commonSlice'
import ChangePassword from '../component/ChangePassword'
import { getOrderByUserId } from '../redux/order/orderThunk'

const Profile = () => {
  const dispatch = useDispatch()
  const profile = useSelector((state) => state.profile.profile)
  const error = useSelector((state) => state.profile.error)
  const orders = useSelector((state) => state.order.orders)

  useEffect(() => {
    dispatch(getProfile())
    dispatch(getOrderByUserId())
  }, [])
  const handleOpenChangePassword = (e) => {
    dispatch(openChangePassword())
  }
  const backgroundImageUrl =
    'https://d1kpy9knucxk0h.cloudfront.net/wp2882348.jpg'

  return (
    <>
      <div className="">
        <Navbar />
      </div>
      <ChangePassword />
      <Box
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'full',
          minHeight: '100vh',
          minWith: '100w',
        }}
      >
        <Box className="w-full lg:w-12/12 px-4 mx-auto  flex">
          {' '}
          <div className="relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-2xl rounded-lg mt-20 text-white ">
            <nav className="flex min-w-[240px] flex-col gap-1 p-2 font-sans text-base font-normal text-blue-gray-700">
              {orders.map((order) => (
                <Link
                  to={`/orderDetails/${order.id}`}
                  style={{ textDecoration: 'none' }}
                >
                  <div
                    role="button"
                    className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                  >
                    <div className="grid mr-4 place-items-center">
                      <img
                        alt="candice"
                        src="https://docs.material-tailwind.com/img/face-1.jpg"
                        className="relative inline-block h-12 w-12 !rounded-full  object-cover object-center"
                      />
                    </div>
                    <div>
                      <h6 class="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                        {order.dateOrder} | {order.status}
                      </h6>
                      <p class="block font-sans text-sm antialiased font-normal leading-normal text-teal-200">
                        {order.totalPrice} VND
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </nav>
          </div>
          <Box className="relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-2xl rounded-lg mt-20  text-white">
            <Box className="px-6 pt-24 ">
              <Box className="flex flex-wrap justify-center">
                <Box className="w-full px-4 flex justify-center">
                  <Box className="relative">
                    <Avatar
                      sx={{ width: 200, height: 200 }}
                      alt="Remy Sharp"
                      src={profile.url}
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
                      <span className="text-sm text-blueGray-400">
                        Comments
                      </span>
                    </Box>
                  </Box>
                </Box>

                <Link to={`/updateProfile`} style={{ textDecoration: 'none' }}>
                  <Button
                    style={{
                      color: 'white',

                      //   backgroundColor: '#A0E9FF',
                    }}
                  >
                    <strong> Update Profile</strong>
                  </Button>
                </Link>
                <Button
                  onClick={handleOpenChangePassword}
                  style={{
                    color: 'white',
                    // backgroundColor: '#A0E9FF',
                  }}
                >
                  <strong> Change Password</strong>
                </Button>
              </Box>
              <Box className="text-center mt-12">
                <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                  {profile.fullName}
                </h3>
                <Box className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                  <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                  {profile.address}
                </Box>
                <Box className="mb-2 text-blueGray-600 mt-10">
                  <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                  {profile.phoneNumber}
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
                      {profile.description}
                    </p>
                    <a
                      href="javascript:void(0);"
                      className="font-normal text-teal-200"
                    >
                      Show more
                    </a>
                  </Box>
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
