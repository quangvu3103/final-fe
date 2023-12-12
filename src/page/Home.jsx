import React, { useEffect, useState } from 'react'
import Navbar from '../layout/navbar/navbar'
import Carousel from '../component/carorsel/Carousel'
import Footer from '../layout/footer/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCategory } from '../redux/category/categoryThunk'
import { getProductByCategoryId } from '../redux/product/productThunk'
import LogosDisplay from '../layout/logo/Logo'
import { Login } from '../component/Login'
import { Register } from '../component/Register'
import ForgotPassword from '../component/ForgotPassword'
import { Link } from 'react-router-dom'

const Home = () => {
  const dispatch = useDispatch()
  const category = useSelector((state) => state.category.data)
  const [categoryId, setCategoryId] = useState(category.id)
  const product = useSelector((state) => state.product.data)
  useEffect(() => {
    dispatch(getAllCategory())
      .unwrap()
      .then((res) => {
        setCategoryId(res?.[0]?.id)
      })
  }, [])

  useEffect(() => {
    if (categoryId) {
      dispatch(getProductByCategoryId({ id: categoryId }))
    }
  }, [categoryId])

  let slides = [
    'https://th.bing.com/th/id/R.cdbf670e6e80160075f9721309501ad6?rik=TFN4ujldlAkJkg&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fqkwoEmB.jpg&ehk=7T%2fZXliq65V6Ms0ifZ0%2bE0qf2bhmtXvGzwBOCwXPJtM%3d&risl=&pid=ImgRaw&r=0',
    'https://images7.alphacoders.com/743/thumb-1920-743261.jpg',
    'https://wallpapercave.com/wp/wp2432536.jpg',
    'https://getwallpapers.com/wallpaper/full/1/d/5/984384-gorgerous-cat-and-dog-wallpaper-1920x1080.jpg',
  ]

  const handleChangeCategory = (id) => {
    setCategoryId(id)
  }

  return (
    <>
      <Navbar />
      {/* <Login />
      <Register />
      <ForgotPassword /> */}
      <div className=" ">
        <div className="w-[100%] m-auto  ">
          <Carousel slides={slides} />
        </div>
        <div className="m-10">
          <div className="flex flex-row">
            {category?.map((item) => (
              <button
                key={item?.id}
                onClick={() => handleChangeCategory(item.id)}
                className="m-2 bg-white border border-blue-500 hover:bg-blue-500 hover:text-white text-blue-500 font-bold py-2 px-4 rounded-full"
              >
                {item.name}
              </button>
            ))}
          </div>
          <div className="flex m-10">
            <div className="relative ml-20 w-60 h-96 mr-20 border border-blue-200 flex flex-col justify-center items-center rounded hover:scale-110">
              <img
                className=""
                src={product?.[0]?.images?.[0]?.url}
                alt=""
              />
              <h3 class="mt-4 text-sm text-gray-700">{product?.[0]?.name}</h3>
              <p class="mt-1 text-lg font-medium text-gray-900">{product?.[0]?.price}</p>
            </div>
            <div class="grid grid-cols-4 gap-4 ">
              {product?.map((item) => {
                return (
                  <Link
                    to={`/detailsProduct/${item.id}`}
                    style={{ textDecoration: 'none' }}
                  >
                    <div
                      className=" w-48 h-56 border border-blue-200 flex flex-col justify-center items-center rounded hover:scale-105"
                      key={item?.id}
                    >
                      <img
                        className="h-[60%] w-[60%] hover:scale-105 "
                        src={item?.images?.[0]?.url}
                        alt={item?.name}
                      />
                      <p class="mt-4 text-sm text-gray-700">{item.name}</p>
                      <p class="mt-1 text-lg font-medium text-gray-900">
                        {item.price} VND
                      </p>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>

        <LogosDisplay />
        <Footer />
      </div>
    </>
  )
}

export default Home
