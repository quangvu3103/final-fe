import React, { useEffect, useState } from 'react'
import Navbar from '../layout/navbar/navbar'
import Footer from '../layout/footer/Footer'
import { Box, Button } from '@mui/material'
import { useParams } from 'react-router-dom'
import { deleteProduct, getDetailsProduct } from '../redux/product/productThunk'
import { useDispatch, useSelector } from 'react-redux'
import { createOrder } from '../redux/order/orderThunk'

const DetailsProduct = () => {
  const { id } = useParams()

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getDetailsProduct(id))
  }, [])
  const product = useSelector((state) => state.product.product)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const loading = useSelector((state) => state.product.loading)
  const role = useSelector((state) => state.auth.role)

  useEffect(() => {
    console.log('Product:', product)
    if (product?.images) {
      setImages(product.images)
    }
  }, [product])

  const [images, setImages] = useState([])
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length,
    )
  }

  const handleCreateOrder = (event, reason) => {
    try {
      dispatch(
        createOrder({
          totalPrice: product.price,
          quantity: 1,
          productId: product.id,
        }),
      )
    } catch {}
  }

  const handleDeleteProduct = (event, reason) => {
    try {
      dispatch(deleteProduct(product.id))
    } catch {}
  }
  return (
    <>
      <Navbar />
      <Box>
        {!loading && (
          <>
            <body className="antialiased">
              <Box className="py-6">
                <Box className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></Box>

                <Box className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
                  <Box className="flex flex-col md:flex-row items-center mt-4">
                    <Box className="relative h-56 overflow-hidden rounded-lg md:h-96">
                      {images.length > 0 && (
                        <img
                          id="main-image"
                          src={images[currentImageIndex]?.url}
                          width="500"
                          alt=""
                        />
                      )}
                      <Box className="absolute top-0 right-0 bottom-0 left-0 flex items-center justify-between ">
                        <Button variant="contained" onClick={prevImage}>
                          Back
                        </Button>
                        <Button variant="contained" onClick={nextImage}>
                          Next
                        </Button>
                      </Box>
                    </Box>
                    <Box className="md:flex-1 px-4">
                      <h2 className="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">
                        {product.name}
                      </h2>
                      <p className="text-gray-500 text-sm">
                        By{' '}
                        <a href="#" className="text-indigo-600 hover:underline">
                          ABC Company
                        </a>
                      </p>

                      <Box className="flex items-center space-x-4 my-4">
                        <Box>
                          <Box className="rounded-lg bg-gray-100 flex py-2 px-3">
                           
                            <span className="font-bold text-indigo-600 text-3xl">
                              {product.price}
                            </span>
                            <span className="text-indigo-400 mr-1 mt-1">VND</span>
                          </Box>
                        </Box>
                        <Box className="flex-1">
                          <p className="text-green-500 text-xl font-semibold">
                            Save 12%
                          </p>
                          <p className="text-gray-400 text-sm">
                            Inclusive of all Taxes.
                          </p>
                        </Box>
                      </Box>

                      <p className="text-gray-500">{product.description}</p>
                      {role === 'User' ? (
                        <>
                          {' '}
                          <Box className="flex py-4 space-x-4">
                            <Box className="relative">
                              <Box className="text-center left-0 pt-2 right-0 absolute block text-xs uppercase text-gray-400 tracking-wide font-semibold">
                                Qty
                              </Box>
                              <select className="cursor-pointer appearance-none rounded-xl border border-gray-200 pl-4 pr-8 h-14 flex items-end pb-1">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                              </select>

                              <svg
                                className="w-5 h-5 text-gray-400 absolute right-0 bottom-0 mb-2 mr-2"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                                />
                              </svg>
                            </Box>

                            <button
                              onClick={handleCreateOrder}
                              type="button"
                              className="h-14 px-6 py-2 font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white"
                            >
                              Add to Cart
                            </button>
                          </Box>
                        </>
                      ) : (
                        <>
                          {' '}
                          <Box className="flex py-4 space-x-4">
                            <a
                              href={'/updateProduct/' + product.id}
                              className="block text-lg mt-4 lg:inline-block lg:mt-0 text-teal-500 hover:text-white mr-4"
                            >
                              Update Product
                            </a>
                            <button
                              onClick={handleDeleteProduct}
                              type="button"
                              className="h-14 px-6 py-2 font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white"
                            >
                              Delete Product
                            </button>
                          </Box>
                        </>
                      )}
                    </Box>
                  </Box>
                </Box>
              </Box>
            </body>
          </>
        )}
      </Box>
      <Footer />
    </>
  )
}

export default DetailsProduct
