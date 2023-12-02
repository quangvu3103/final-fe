import React, { useState } from 'react'
import Navbar from '../layout/navbar/navbar'
import imageProduct from '../img/anhnen3r.jpg'
import Footer from '../layout/footer/Footer'
import { Link } from 'react-router-dom'

const Product = () => {
  const products = [
    {
      id: 1,
      name: 'a',
      price: 200,
      imageSrc:
        'https://www.teenaagnel.com/wp-content/uploads/2019/12/food-photography-in-dubai.jpg',
    },
    {
      id: 2,
      name: 'a',
      price: 200,
      imageSrc:
        'https://www.teenaagnel.com/wp-content/uploads/2019/12/food-photography-in-dubai.jpg',
    },
    {
      id: 3,
      name: 'a',
      price: 200,
      imageSrc:
        'https://www.teenaagnel.com/wp-content/uploads/2019/12/food-photography-in-dubai.jpg',
    },
    {
      id: 4,
      name: 'a',
      price: 200,
      imageSrc:
        'https://www.teenaagnel.com/wp-content/uploads/2019/12/food-photography-in-dubai.jpg',
    },
    {
      id: 5,
      name: 'a',
      price: 200,
      imageSrc:
        'https://www.teenaagnel.com/wp-content/uploads/2019/12/food-photography-in-dubai.jpg',
    },
    {
      id: 6,
      name: 'a',
      price: 200,
      imageSrc:
        'https://www.teenaagnel.com/wp-content/uploads/2019/12/food-photography-in-dubai.jpg',
    },
    {
      id: 7,
      name: 'a',
      price: 200,
      imageSrc:
        'https://www.teenaagnel.com/wp-content/uploads/2019/12/food-photography-in-dubai.jpg',
    },
  ]
  return (
    <>
      <div className="">
        <Navbar />
      </div>
      <div className="flex flex-col">
        <div className="flex justify-center items-center flex-col py-10 ">
          {/* <h1 className="font-bold text-2xl">All Product</h1>
          <h2>Home Page/All Products </h2> */}
          <div className="relative w-full">
            <img
              src={imageProduct}
              alt=""
              className="w-full h-96 object-cover"
            />
            <div className="absolute top-0 left-0 right-0 bottom-0  flex justify-center items-center">
              <span className="text-black text-xl">
                <h1 className="font-bold text-3xl flex justify-center items-center">
                  All Product
                </h1>
                <h2>
                  <Link
                    to="/Home"
                    className="text-current hover:text-teal-500 transition duration-300 ease-in-out "
                  >
                    Home
                  </Link>{' '}
                  /
                  <Link
                    to="/all-products"
                    className="text-current hover:text-teal-500 transition duration-300 ease-in-out"
                  >
                    All Products
                  </Link>
                </h2>
              </span>
            </div>
          </div>
        </div>
        {/* Thêm flex container bao gồm sidebar và content */}
        <div className="flex flex-row min-h-screen">
          {/* Sidebar bộ lọc sản phẩm */}
          <div className="w-1/4 bg-white p-4">
            <div className="mb-4 ">
              <div className="rounded-md border border-black p-5 mb-5 ">
                <h1 className="font-bold text-xl mb-2">Category</h1>
                <h2 className="">Cat Food</h2>
                <h3>Dog Food</h3>
              </div>

              {/* Ví dụ: */}
              <div className="mb-4 rounded-md border border-black p-5">
                <h1 className="font-bold mb-1">Filter products</h1>
                {/* Thêm danh mục lọc tại đây */}
              </div>
              {/* Thêm các thành phần lọc khác tại đây */}
            </div>
          </div>
          {/* Nội dung chính */}
          <div className="w-3/4 p-10  ">
            <h1 className="mb-5 font-bold text-2xl   ">Product</h1>
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {products.map((product) => (
                <a key={product.id} className="group">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                    <img
                      src={product.imageSrc}
                      alt={product.name}
                      className="h-full w-full object-cover object-center group-hover:opacity-75"
                    />
                  </div>
                  <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                  <p className="mt-1 text-lg font-medium text-gray-900">
                    {product.price}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Product
