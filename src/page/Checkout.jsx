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
import { sendFeedback } from '../redux/auth/authThunk'

const Checkout = () => {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.order.cart)

  useEffect(() => {
    dispatch(getCart())
  }, [])
  const handleCreateOrder = async () => {
    // Await the promise returned by the dispatch function
    const orderID = await dispatch(createOrderPaypal(cart?.totalPrice)).unwrap()
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
      console.error('Error processing payment:', error)
      dispatch(openNotification('Payment failed. Please try again.'))
    }
  }

  return (
    <>
      <Navbar />
      <div className="flex flex-col h-screen">
        <div className="flex-grow">
          <body>
            <div class="h-screen bg-gray-100 pt-20">
              <h1 class="mb-10 text-center text-2xl font-bold">
                Checkout Page
              </h1>
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
                              <span class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50">
                                Quantity: {item.quantity}
                              </span>
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
                      <p class="mb-1 text-lg font-bold">
                        {cart.totalPrice} VND
                      </p>
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
        </div>
        {/* <Footer /> */}
      </div>
    </>
  )
}

export default Checkout
