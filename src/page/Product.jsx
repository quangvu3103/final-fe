import Navbar from '../layout/navbar/navbar'
import Footer from '../layout/footer/Footer'
import { Link } from 'react-router-dom'
import { Fragment, useEffect, useState } from 'react'
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { MinusIcon, PlusIcon } from '@heroicons/react/20/solid'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCategory } from '../redux/category/categoryThunk'
import { getProductByCategoryId } from '../redux/product/productThunk'
import LogosDisplay from '../layout/logo/Logo'

const filters = [
  {
    id: 'category',
    name: 'Price',
    options: [
      {
        value: 'new-arrivals',
        label: '200000 VND - 300000 VND',
        checked: false,
      },
      { value: 'sale', label: '300000 VND - 400000 VND', checked: false },
      { value: 'travel', label: '400000 VND - 500000 VND', checked: true },
      {
        value: 'organization',
        label: '500000 VND - 600000 VND',
        checked: false,
      },
    ],
  },
]

export default function Product() {
  const dispatch = useDispatch()
  const category = useSelector((state) => state.category.data)
  const [categoryId, setCategoryId] = useState(category.id)
  const products = useSelector((state) => state.product.data)
  // const [minPrice, setMinpr]
  const [selectedOption, setSelectedOption] = useState(null);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 10000000 });
  const handlePriceRangeChange = (event, optionValue) => {
    const { value } = event.target;
    const [min, max] = value.split(" VND - ");
    const maxNumber = parseInt(max.replace(" VND", "").trim());


    if (selectedOption === optionValue) {
        setSelectedOption(null);
        setPriceRange({ min: 0, max: 10000000 });
    } else {
        setSelectedOption(optionValue); 
        setPriceRange({
            min: parseInt(min), 
            max: maxNumber 
        });
    }
};

console.log(priceRange)
  useEffect(() => {
    dispatch(getAllCategory())
      .unwrap()
      .then((res) => {
        setCategoryId(res?.[0]?.id)
      })
  }, [])

  useEffect(() => {
    if (categoryId) {
      dispatch(getProductByCategoryId({ id: categoryId, minPrice: priceRange.min, maxPrice: priceRange.max }))
    }
  }, [categoryId, priceRange])

  const handleChangeCategory = (id) => {
    setCategoryId(id)
  }

  return (
    <div className="bg-white h-full">
      <Navbar />
      <div>
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
              <form className="hidden lg:block">
                <h3 className="sr-only">Categories</h3>
                <ul
                  role="list"
                  className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900"
                >
                  {category.map((category) => (
                    <li key={category.name}>
                      <a onClick={() => handleChangeCategory(category.id)}>
                        {category.name}
                      </a>
                    </li>
                  ))}
                </ul>

                {filters.map((section) => (
                  <Disclosure
                    as="div"
                    key={section.id}
                    className="border-b border-gray-200 py-6"
                  >
                    {({ open }) => (
                      <>
                        <h3 className="-my-3 flow-root">
                          <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                            <span className="font-medium text-gray-900">
                              {section.name}
                            </span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <MinusIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              ) : (
                                <PlusIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className="pt-6">
                          <div className="space-y-4">
                              {section.options.map((option, optionIdx) => (
                                <div
                                  key={option.value}
                                  className="flex items-center"

                                >
                                  <input
                                    id={`filter-${section.id}-${optionIdx}`}
                                    name={`${section.id}[]`}
                                    defaultValue={option.value}
                                    type="checkbox"
                                    defaultChecked={option.checked}
                                    value={option.label}
                                    onChange={(event) => handlePriceRangeChange(event, option.value)}
                                    checked={selectedOption === option.value}
                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                  />
                                  <label
                                    htmlFor={`filter-${section.id}-${optionIdx}`}
                                    className="ml-3 text-sm text-gray-600"
                                  >
                                    {option.label}
                                  </label>
                                </div>
                              ))}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </form>

              <div className="lg:col-span-3">
                <h1 className="mb-5 font-bold text-2xl   ">Product</h1>
                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                  {products.map((product) => (
                    <Link
                      to={`/detailsProduct/${product.id}`}
                      style={{ textDecoration: 'none' }}
                    >
                      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                        <img
                          src={product.images[0].url}
                          alt={product.name}
                          className="h-40 w-full object-cover object-center group-hover:opacity-75"
                        />
                      </div>
                      <h3 className="mt-4 text-sm text-gray-700">
                        {product.name}
                      </h3>
                      <p className="mt-1 text-lg font-medium text-gray-900">
                        {product.price}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
      <LogosDisplay />
      <Footer />
    </div>
  )
}
