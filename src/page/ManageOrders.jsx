import { Avatar, Box, Button } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../layout/navbar/navbar'
import Footer from '../layout/footer/Footer'
import { Link } from 'react-router-dom'
import { getProfile } from '../redux/profile/profileThunk'
import { openChangePassword } from '../redux/common/commonSlice'
import ChangePassword from '../component/ChangePassword'
import { getOrder, getOrderByUserId } from '../redux/order/orderThunk'

const ManageOrders = () => {
  const dispatch = useDispatch()
  const error = useSelector((state) => state.profile.error)
  const orders = useSelector((state) => state.order.orders)

  useEffect(() => {
    dispatch(getOrder())
  }, [])

  return (
    <>
      <div className="">
        <Navbar />
      </div>
      <ChangePassword />
      <Box
        style={{
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
                      <h6 class="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-black">
                        {order.dateOrder} | {order.status}
                      </h6>
                      <p class="block font-sans text-sm antialiased font-normal leading-normal text-black">
                        {order.totalPrice} VND
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </nav>
          </div>
        </Box>
      </Box>

      <Footer />
    </>
  )
}

export default ManageOrders
