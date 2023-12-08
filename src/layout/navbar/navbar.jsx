import { MdAccountBox } from 'react-icons/md'
import { BsCartFill } from 'react-icons/bs'
import myImage from '../../img/logonav1.png'
import { FaSearch } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { openLogin } from '../../redux/common/commonSlice'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const dispatch = useDispatch()
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
  const role = useSelector((state) => state.auth.role)

  const handleOpenLogin = () => {
    dispatch(openLogin())
  }

  const handleOpenLogout = () => {
    localStorage.removeItem('token')
    window.location.href = '/'
  }

  return (
    <nav className="flex items-center justify-between flex-wrap bg-blue-200 p-6">
      <div className="text-white mr-6 pl-10 flex items-center justify-center">
        <img className="h-12 w-12" src={myImage} alt="Myimage" />
        <span className="font-semibold text-xl tracking-tight text-teal-500 p-2">
          MELON PET SHOP
        </span>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      <div className="w-full block lg:flex lg:items-center lg:w-auto pr-10">
        <div className="text-sm flex ">
          <div className="flex items-center border-2 border-teal-500 rounded-lg ">
            <input
              className="appearance-none bg-transparent border-none w-full text-gray-700 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Search..."
              aria-label="Search"
            />
            <button
              className="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-white text-sm py-1 px-2 rounded"
              type="button"
            >
              <FaSearch />
            </button>
          </div>
        </div>
      </div>

      {role === 'User' ? (
        <>
          <div className="w-full block lg:flex lg:items-center lg:w-auto pr-10">
            <div className="text-sm flex ">
              <a
                href="/"
                className="block text-lg mt-4 lg:inline-block lg:mt-0 text-teal-500 hover:text-white mr-4"
              >
                Home
              </a>
              <a
                href="/Product"
                className="block text-lg mt-4 lg:inline-block lg:mt-0 text-teal-500 hover:text-white mr-4"
              >
                Product
              </a>
              <a
                href="About"
                className="block text-lg mt-4 lg:inline-block lg:mt-0 text-teal-500 hover:text-white mr-4"
              >
                About Us
              </a>
              <a
                href="#responsive-header"
                className="block text-lg mt-4 lg:inline-block lg:mt-0 text-teal-500 hover:text-white mr-4"
              >
                Contact
              </a>

              <div className="flex text-lg  lg:mt-0 text-teal-500 ">
                <BsCartFill size={25} />
                <Link to={`/cart`} style={{ textDecoration: 'none' }}>
                  Cart
                </Link>
              </div>

              <div className="flex  text-lg  lg:mt-0 text-teal-500 ">
                <MdAccountBox size={30} />
                {isLoggedIn ? (
                  <>
                    <Link to={`/profile`} style={{ textDecoration: 'none' }}>
                      <button className="block text-lg mt-4 lg:inline-block lg:mt-0 text-teal-500 hover:text-white mr-4 ml-2">
                        Profiles
                      </button>
                    </Link>
                    <button
                      onClick={handleOpenLogout}
                      className="block text-lg mt-4 lg:inline-block lg:mt-0 text-teal-500 hover:text-white mr-4 ml-2"
                    >
                      Log Out
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={handleOpenLogin}
                      className="block text-lg mt-4 lg:inline-block lg:mt-0 text-teal-500 hover:text-white mr-4 ml-2"
                    >
                      Login
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="w-full block lg:flex lg:items-center lg:w-auto pr-10">
            <div className="text-sm flex ">
              <a
                href="/"
                className="block text-lg mt-4 lg:inline-block lg:mt-0 text-teal-500 hover:text-white mr-4"
              >
                Home
              </a>
              <a
                href="/manageCategory"
                className="block text-lg mt-4 lg:inline-block lg:mt-0 text-teal-500 hover:text-white mr-4"
              >
                Manage Category
              </a>

              <a
                href="/createProduct"
                className="block text-lg mt-4 lg:inline-block lg:mt-0 text-teal-500 hover:text-white mr-4"
              >
                Create Product
              </a>
              <a
                href="/manageOrders"
                className="block text-lg mt-4 lg:inline-block lg:mt-0 text-teal-500 hover:text-white mr-4"
              >
                Manage Orders
              </a>

              <div className="flex  text-lg  lg:mt-0 text-teal-500 ">
                <MdAccountBox size={30} />
                {isLoggedIn ? (
                  <>
                    <Link to={`/profile`} style={{ textDecoration: 'none' }}>
                      <button className="block text-lg mt-4 lg:inline-block lg:mt-0 text-teal-500 hover:text-white mr-4 ml-2">
                        Profiles
                      </button>
                    </Link>
                    <button
                      onClick={handleOpenLogout}
                      className="block text-lg mt-4 lg:inline-block lg:mt-0 text-teal-500 hover:text-white mr-4 ml-2"
                    >
                      Log Out
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={handleOpenLogin}
                      className="block text-lg mt-4 lg:inline-block lg:mt-0 text-teal-500 hover:text-white mr-4 ml-2"
                    >
                      Login
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  )
}
export default Navbar
