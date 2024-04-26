import React, { useEffect, useState } from 'react'
import Navbar from '../layout/navbar/navbar'
import Footer from '../layout/footer/Footer'
import { Box, Button } from '@mui/material'
import { useParams } from 'react-router-dom'
import { deleteProduct, getDetailsProduct } from '../redux/product/productThunk'
import { useDispatch, useSelector } from 'react-redux'
import { createOrder } from '../redux/order/orderThunk'
import { useNavigate } from 'react-router-dom'

const DetailsProduct = () => {
  const { id } = useParams()

  const dispatch = useDispatch()
  const navigate = useNavigate()
  // const navigate =
  // const navigate = useNavigate
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    dispatch(getDetailsProduct(id))
  }, [])
  const product = useSelector((state) => state.product.product)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const loading = useSelector((state) => state.product.loading)
  const role = useSelector((state) => state.auth.role)
  const handleQuantity = (e) => {
    const newQuantity = parseInt(e.target.value)
    console.log(newQuantity)
    setQuantity(newQuantity)
  }

  useEffect(() => {
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
          quantity: quantity,
          productId: product.id,
        }),
      )
    } catch {}
  }

  const handleDeleteProduct = (event, reason) => {
    try {
      dispatch(deleteProduct(product.id))
        .unwrap()
        .then((res) => {
          navigate('/')
        })
      // navigate('')
    } catch {}
  }
  return (
    <>
      <Navbar />
      <div className="flex flex-row px-20 py-20 ">
        <div className="relative w-1/3">
          <button
            onClick={prevImage}
            type="button"
            class="absolute top-0 -left-3 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev
          >
            <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
              <span class="sr-only">Previous</span>
            </span>
          </button>

          <div className="">
            <img
              className="w-full h-full"
              src={images[currentImageIndex]?.url}
              alt=""
            />
          </div>

          <button
            onClick={nextImage}
            type="button"
            class="absolute top-0 -right-3 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-next
          >
            <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span class="sr-only">Next</span>
            </span>
          </button>
        </div>
        <div className="w-2/3 flex flex-col justify-center gap-4 pl-10">
          <h1 className="font-extrabold text-3xl">{product?.name}</h1>
          <p>{product?.description}</p>
          <h2 className="font-bold text-xl">{product?.price}</h2>

          {role === 'User' ? (
            <>
              {' '}
              <Box className="flex py-4 space-x-4">
                <Box className="relative">
                  <Box className="text-center  left-0 pt-2 right-0 absolute block text-xs uppercase text-gray-400 tracking-wide font-semibold">
                    <h2 >Choose quantity:</h2>
                  </Box>
                </Box>

                <div data-mdb-input-init class="form-outline">
                  <input
                    type="number"
                    value={quantity}
                    onChange={handleQuantity}
                    id="typeNumber"
                    class="form-control w-[10%] ml-28 mt-2"
                  />
                <div className='w-full block mt-20'>

                <button
                  className="bg-[#00B4FF] w-[50%] py-4 rounded-lg shadow-xl"
                  onClick={handleCreateOrder}
                  >
                  Add to Cart
                </button>
                  </div>
                </div>
              </Box>
            </>
          ) : (
            <>
              {' '}
              <Box className="flex py-4 space-x-4">
                <a
                  href={`/updateProduct/${product.id}`}
                  className="lg:inline-block lg:mt-0 font-semibold bg-blue-500 hover:bg-blue-600 text-white mr-4 px-6 py-4 rounded-xl"
                >
                  Update Product
                </a>
                <button
                  onClick={handleDeleteProduct}
                  type="button"
                  className="h-14 px-6 py-2 font-semibold rounded-xl bg-red-500 hover:bg-red-600 text-white"
                >
                  Delete Product
                </button>
              </Box>
            </>
          )}
        </div>
      </div>
      {/* <Box>
        {!loading && (
          <>
            <body className="antialiased">
              <Box className="py-6 h-screen">
                <Box className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></Box>

                <Box className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 pt-20">
                  <Box className="flex flex-col md:flex-row items-center mt-4">
                    <Box className="relative w-[40%] h-56 overflow-hidden rounded-lg md:h-96">
                      {images.length > 0 && (
                        <div className="w-full object-fill">
                          <img
                            // id="main-image"
                            className="w-full h-96 object-cover"
                            src={images[currentImageIndex]?.url}
                            width="500"
                            alt=""
                          />
                        </div>
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
                            <span className="text-indigo-400 mr-1 mt-1">
                              VND
                            </span>
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
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
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
      </Box> */}
      <Footer />
    </>
  )
}

export default DetailsProduct
