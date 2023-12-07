import React, { useEffect, useState } from 'react'
import Navbar from '../layout/navbar/navbar'
import Footer from '../layout/footer/Footer'
import {
  Autocomplete,
  Box,
  Button,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  TextField,
} from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCategory } from '../redux/category/categoryThunk'

const UpdateProduct = () => {
  const dispatch = useDispatch()
  const [product, setProduct] = useState({
    name: '',
    quantity: '',
    price: '',
    description: '',
    categoryId: '',
  })

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
  const handleCreateProduct = (value) => {
    alert(
      product.name +
        product.quantity +
        product.price +
        product.description +
        product.categoryId,
    )
  }
  const [imagesUpload, setImagesUpload] = useState([])
  useEffect(() => {
    dispatch(getAllCategory())
  }, [])
  const categories = useSelector((state) => state.category.data)

  const handleUploadImage = (event) => {
    const file = event.target.files[0]

    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const dataURL = e.target.result
        setImagesUpload([...imagesUpload, dataURL])
      }

      reader.readAsDataURL(file)
    }
  }
  const handleRemoveImage = (index) => {
    setImagesUpload((prevImagesUpload) =>
      prevImagesUpload.filter((_, i) => i !== index),
    )
  }

  return (
    <>
      <Navbar />
      <Box justifyContent={'center'} display={'flex'}>
        <form class="w-full max-w-lg">
          <Box class="flex flex-wrap -mx-3 mb-6">
            <Box class="w-full md:w-1/1 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
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
          <Box>
            <ImageList sx={{ width: 500 }} cols={3} variant="quilted">
              {imagesUpload.map((item, index) => (
                <>
                  <ImageListItem
                    key={index}
                    cols={item.cols || 1}
                    rows={item.rows || 1}
                  >
                    <img src={item} loading="lazy" />
                    <ImageListItemBar
                      actionIcon={
                        <Button
                          sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                          aria-label={`info about ${item.title}`}
                          onClick={() => handleRemoveImage(index)}
                        >
                          X
                        </Button>
                      }
                    />
                  </ImageListItem>
                </>
              ))}
            </ImageList>
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
                Categories
              </label>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={categories}
                getOptionLabel={(option) => option.name}
                sx={{ width: 300 }}
                onChange={(event, selectedOption) => {
                  if (selectedOption) {
                    handleCategoryChange(selectedOption)
                  }
                }}
                renderInput={(params) => (
                  <TextField {...params} label="Category" />
                )}
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
          <Button onClick={handleCreateProduct}>Update Product</Button>
        </form>
      </Box>
      <Footer />
    </>
  )
}

export default UpdateProduct