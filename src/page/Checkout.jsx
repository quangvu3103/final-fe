import React, { useEffect } from 'react'
import Navbar from '../layout/navbar/navbar'
import Footer from '../layout/footer/Footer'
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js'
import { useDispatch, useSelector } from 'react-redux'
import {
  createOrderPaypal,
  getCart,
  onApprove,
  checkoutOrder,
} from '../redux/order/orderThunk'
import { openNotification } from '../redux/common/commonSlice'
import { updateProduct } from '../redux/product/productThunk'

const Checkout = () => {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.order.cart)

  useEffect(() => {
    dispatch(getCart())
  }, [])
  const handleCreateOrder = async () => {
    // Await the promise returned by the dispatch function
    const orderID = await dispatch(
      createOrderPaypal(cart?.orderDetails[0].price),
    ).unwrap()
    // Assuming createOrderPaypal action correctly returns an order ID

    return orderID
  }

  const handleOnApprove = async (data) => {
    try {
      // Dispatch the onApprove action and wait for the result
      const response = await dispatch(onApprove(data)).unwrap()

      const transactionId = response.data.id
      const id = cart.id

      const response2 = await dispatch(
        checkoutOrder({ transactionId: transactionId, orderId: id }),
      ).unwrap()
      dispatch(
        openNotification('Payment Success. Thank you for buying the product'),
      )
    } catch (error) {
      // Handle errors here (e.g., display an error notification)
      console.error('Error processing payment:', error)
      dispatch(openNotification('Payment failed. Please try again.'))
    }
  }

  return (
    <>
      <div className="">
        <Navbar />
      </div>
      <body>
        <div class="h-screen bg-gray-100 pt-20">
          <h1 class="mb-10 text-center text-2xl font-bold">Checkout Page</h1>
          <div class="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
            <div class="rounded-lg md:w-2/3">
              {cart?.orderDetails?.map((item) => {
                return (
                  <div class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                    <img
                      src={item?.product.images[0].url}
                      alt="product-image"
                      class="w-full rounded-lg sm:w-40"
                    />
                    <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                      <div class="mt-5 sm:mt-0">
                        <h2 class="text-lg font-bold text-gray-900">
                          {item?.product.name}
                        </h2>
                      </div>
                      <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                        <div class="flex items-center border-gray-100">
                          <span class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50">
                            {' '}
                            -{' '}
                          </span>
                          <input
                            class="h-8 w-8 border bg-white text-center text-xs outline-none"
                            type="number"
                            value={item.quantity}
                            min="1"
                          />
                          <span class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50">
                            {' '}
                            +{' '}
                          </span>
                        </div>
                        <div class="flex items-center space-x-4">
                          <p class="text-sm">{item.price} VND</p>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
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
                <p class="text-gray-700">{cart.totalPrice} VND</p>
              </div>
              <div class="flex justify-between">
                <p class="text-gray-700">Shipping</p>
                <p class="text-gray-700">40.099 VND</p>
              </div>
              <hr class="my-4" />
              <div class="flex justify-between">
                <p class="text-lg font-bold">Total</p>
                <div class="">
                  <p class="mb-1 text-lg font-bold">{cart.totalPrice} VND</p>
                </div>{' '}
              </div>
              <PayPalScriptProvider
                options={{
                  clientId:
                    'AZvy5-tt7lDrhX2S-KhvTIjndWbuJ6ElR6LOPVJWhmM3kWcPbZEhXSyIWlJRjF1gH89ugN2XUkASksZK',
                }}
              >
                <PayPalButtons
                  createOrder={handleCreateOrder}
                  onApprove={handleOnApprove}
                />
              </PayPalScriptProvider>
            </div>
          </div>
        </div>
      </body>
      <Footer />
    </>
  )
}

export default Checkout
