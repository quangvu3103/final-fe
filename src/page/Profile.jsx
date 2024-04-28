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
    'https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2023/1/16/meo-viet-nam-3-16738793213361484673220.jpg'

  console.log(orders)
  return (
    <>
    <div className=''>

      <Navbar />
      <ChangePassword />
      <div className="flex flex-row container mx-auto bg-gray-50 ">
        <div className="w-1/4 px-8 py-5 flex flex-col transform transition-opacity  duration-300 ease-in-out opacity-0 scale-50 animate-fadeScaleIn  ">
          <div className="pt-14 pb-5">
            <img
              className="w-56 h-56 rounded-full"
              src={profile.url}
              alt=""
              />
          </div>
          <div className="">
            <h1 className="font-medium text-2xl mb-4">Nguyen Quang Vu</h1>
            <p className="font-bold text-xl mb-4">University of Greenwich</p>
            <div className=' flex flex-row gap-4  '>
            <Link to={`/updateProfile`} style={{ textDecoration: 'none' }}>
              <button
              className=" bg-blue-400 text-white px-4 py-2 rounded-lg hover:bg-blue-500 text-base font-semibold"
              
              >
                Update Profile
              </button>
            </Link>
            
              <button
               onClick={()=>{handleOpenChangePassword()}}
               className=" bg-blue-400 text-white px-4 py-2 rounded-lg hover:bg-blue-500 w-1/2 text-base font-semibold"
               >
                 Change Password
              </button>
                </div>
          </div>
    

         
        </div>

        <div className="w-3/4 pt-6  transform transition-opacity duration-300 ease-in-out opacity-0 scale-50 animate-fadeScaleIn mb-20">
          <div className="flex flex-col py-4  px-2">
            <div className="relative">
              <div className="rounded-3xl text-center overflow-hidden w-full  sm:w-full mx-auto">
                <img
                  className=" object-cover h-80  w-full "
                  src="https://vuanem.com/blog/wp-content/uploads/2023/02/dat-ten-cho-cho-meo-hay-1125x750.jpg"
                  alt="everest"
                  />
              </div>
              <div className="flex flex-col items-center justify-center gap-8 absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2  ">
                <h1 className=" text-6xl font-bold text-white">Profile</h1>
                <button className="px-6 py-3 rounded-3xl bg-red-500 hover:bg-red-800">
                  Featured Collection
                </button>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="w-2/3">
              <div className="shadow-[0_0px_40px_0px_rgba(0,0,0,0.2)] rounded-2xl">
                <div className="flex min-w-[240px] flex-col gap-1 p-2 font-sans text-base font-normal bg-white overflow-auto scroll-smooth max-h-96 rounded-xl scrollbar-thin  scrollbar-thumb-gray-500">
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
                            src={profile.url}
                            className="relative inline-block h-12 w-12 !rounded-full  object-cover object-center"
                          />
                        </div>
                        <div>
                          <h6 class="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                            {order.dateOrder} | {order.status}
                          </h6>
                          <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-700">
                            {order.totalPrice} VND
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="w-1/3 flex flex-col  px-6">
              <h2 className="font-bold text-sm text-gray-500 pb-2">
                Biography
              </h2>
              <p className="text-base text-gray-400 pb-4">
              {profile.description}
              </p>
              <h2 className="font-bold text-sm text-gray-500">Website</h2>
              <a href=""></a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
</div>
    </>
  )
}

export default Profile

{
  /* <ChangePassword />
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
                    color: 'blue',
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
                  University of Greenwich
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
      </Box> */
}
