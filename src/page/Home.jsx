import React, { useEffect, useState } from 'react'
import Navbar from '../layout/navbar/navbar'
import Carousel from '../component/carorsel/Carousel';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory } from '../redux/category/categoryThunk';
import { getProductByCategoryId } from '../redux/product/productThunk';

const Home = () => {
  const dispatch = useDispatch();
  const category = useSelector((state)=> state.category.data);  
  const [categoryId, setCategoryId] = useState(category.id);
  const product = useSelector((state) => state.product.data);

  useEffect(()=>{   
    dispatch(getAllCategory()).unwrap()
    .then((res)=>{
      setCategoryId(res?.[0]?.id)
    })
  },[])

  useEffect(()=>{
    if(categoryId){
      dispatch(getProductByCategoryId({id: categoryId}))
    }
  },[categoryId])


  let slides = [
    "https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg",
    "https://wallpapercave.com/wp/wp3386769.jpg",
    "https://wallpaperaccess.com/full/809523.jpg",
    "https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg",
  ];




  const handleChangeCategory = (id) =>{
      setCategoryId(id)
  }


  return (
    <>
      <Navbar />
      <div className=''>
        <div className="w-[100%] m-auto ">
          <Carousel slides={slides} />
        </div>
        <div className='m-10'>
          <div className='flex flex-row'>
            {category?.map((item)=>(
              <button 
              key={item?.id}
              onClick={()=>handleChangeCategory(item.id)}
              className='m-2 bg-white border border-blue-500 hover:bg-blue-500 hover:text-white text-blue-500 font-bold py-2 px-4 rounded-full'
              >
                {item.name}
              </button>

            ))}
           
          </div>
          <div className='flex m-10'>
            <div className='relative ml-20 w-60 h-96 mr-20 border border-blue-200 flex flex-col justify-center items-center rounded hover:scale-110'>
              <img
                className=''
                src='https://cdn-img-v2.webbnc.net/uploadv2/web/12/12107/product/2019/10/17/04/14/1571285687_thuc-an-meo-catsrang-400g-nhap-khau-han-quoc.jpg'
                alt=''
              />
              <h3 class="mt-4 text-sm text-gray-700">Machined Mechanical Pencil</h3>
              <p class="mt-1 text-lg font-medium text-gray-900">$35</p>
            </div>
            <div class="grid grid-cols-4 gap-4 ">
              {product?.map((item) => {
                return (
                  <div
                    className=' w-48 h-56 border border-blue-200 flex flex-col justify-center items-center rounded hover:scale-105'
                    key={item?.id}
                  >
                    <img
                      className='h-[60%] w-[60%] hover:scale-105 '
                      src={item?.images?.[0]?.url}
                      alt={item?.name}
                    />
                    <h3 class="mt-4 text-sm text-gray-700">{item.name}</h3>
                    <p class="mt-1 text-lg font-medium text-gray-900">${item.price}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <div>
          <h1>cla</h1>
        </div>
      </div>
    </>

  )
}

export default Home