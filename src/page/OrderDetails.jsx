import React, { useEffect } from 'react'
import Navbar from '../layout/navbar/navbar'
import Footer from '../layout/footer/Footer'
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js'
import { useDispatch, useSelector } from 'react-redux'
import { getOrderById } from '../redux/order/orderThunk'
import { useParams } from 'react-router-dom'

const OrderDetails = () => {
  const dispatch = useDispatch()
  const { id } = useParams()

  const order = useSelector((state) => state.order.order)

  useEffect(() => {
    dispatch(getOrderById(id))
  }, [])

  return (
    <>
      <div className="">
        <Navbar />
      </div>
      <body>
        <div class="h-screen bg-gray-100 pt-20">
          <h1 class="mb-10 text-center text-2xl font-bold">Order Details</h1>
          <div class="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
            <div class="rounded-lg md:w-2/3">
              {order?.orderDetails?.map((item) => {
                return (
                  <div class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                    <img
                      src={item?.product?.images[0].url}
                      alt="product-image"
                      class="w-full rounded-lg sm:w-40"
                    />
                    <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                      <div class="mt-5 sm:mt-0">
                        <h2 class="text-lg font-bold text-gray-900">
                          {item?.product?.name}
                        </h2>
                      </div>
                      <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                        <div class="flex items-center border-gray-100">
                          <p class="text-sm">Quantity: {item.quantity} </p>
                        </div>
                        <div class="flex items-center space-x-4">
                          <p class="text-sm">{item.price} VND</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
            <div class="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
              <div class="mb-2 flex justify-between">
                <p class="text-gray-700">Subtotal</p>
                <p class="text-gray-700">{order.totalPrice} VND</p>
              </div>
              <div class="flex justify-between">
                <p class="text-gray-700">Shipping</p>
                <p class="text-gray-700">40000 VND</p>
              </div>
              <hr class="my-4" />
              <div class="flex justify-between">
                <p class="text-lg font-bold">Total</p>
                <div class="">
                  <p class="mb-1 text-lg font-bold">{order.totalPrice} VND</p>
                  <p class="text-sm text-gray-700">including VAT</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
      <Footer />
    </>
  )
}

export default OrderDetails
