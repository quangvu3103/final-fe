import React, { useEffect, useState } from 'react'
import Navbar from '../layout/navbar/navbar'
import Footer from '../layout/footer/Footer'
import { Box, Button, TextField } from '@mui/material'
import { useDispatch } from 'react-redux'
import { getAllCategory } from '../redux/category/categoryThunk'
import { useParams } from 'react-router-dom'
import { getDetailsProduct, updateProduct } from '../redux/product/productThunk'

const UpdateProduct = () => {
  const dispatch = useDispatch()
  const { id } = useParams()

  const [product, setProduct] = useState({
    name: '',
    quantity: 0,
    price: 0,
    description: '',
  })

  useEffect(() => {
    dispatch(getDetailsProduct(id))
      .unwrap()
      .then((res) => {
        setProduct({
          name: res.name,
          quantity: res.quantity,
          price: res.price,
          description: res.description,
        })
      })
  }, [])

  const handleCategoryChange = (value) => {
    console.log(value.id)
    setProduct((preV) => {
      return { ...preV, categoryId: value.id }
    })
  }
  const handleNameChange = (e) => {
    setProduct((preV) => {
      return { ...preV, name: e.target.value }
    })
  }
  const handleQuantityChange = (e) => {
    setProduct((preV) => {
      return { ...preV, quantity: e.target.value }
    })
  }
  const handlePriceChange = (e) => {
    setProduct((preV) => {
      return { ...preV, price: e.target.value }
    })
  }
  const handleDescriptionChange = (e) => {
    setProduct((preV) => {
      return { ...preV, description: e.target.value }
    })
  }
  const handleUpdateProduct = async (value) => {
    alert(product.name + product.quantity + product.price + product.description)
    product.quantity = parseInt(product.quantity)
    product.price = parseInt(product.price)
    await dispatch(updateProduct({ id: id, product: product })).unwrap()
  }
  useEffect(() => {
    dispatch(getAllCategory())
  }, [])

  return (
    <>
      <Navbar />
      <div className='pb-48'>
        <Box justifyContent={'center'} display={'flex'}>
          <form class="w-full max-w-lg">
            <Box class="flex flex-wrap -mx-3 mb-6">
              <Box class="w-full md:w-1/1 px-3 pt-4 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 "
                  for="grid-first-name"
                >
                  Name Product
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="Jane"
                  value={product.name}
                  onChange={handleNameChange}
                />
              </Box>
            </Box>

            <Box class="flex flex-wrap -mx-3 mb-6">
              <Box class="w-full px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-password"
                >
                  Quantity
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-password"
                  type="quantity"
                  value={product.quantity}
                  onChange={handleQuantityChange}
                />
              </Box>
              <Box class="w-full px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-password"
                >
                  Price
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-password"
                  type="price"
                  value={product.price}
                  onChange={handlePriceChange}
                />
              </Box>

              <Box class="w-full px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-password"
                >
                  Description
                </label>
                <TextField
                  fullWidth
                  id="standard-multiline-static"
                  label="Description"
                  multiline
                  rows={4}
                  variant="outlined"
                  value={product.description}
                  onChange={handleDescriptionChange}
                />
              </Box>
            </Box>
            <Button onClick={handleUpdateProduct}>Update Product</Button>
          </form>
        </Box>
      </div>
      <Footer />
    </>
  )
}

export default UpdateProduct
