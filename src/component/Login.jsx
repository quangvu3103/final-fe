import React from 'react'
import {
  Button,
  Dialog,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
} from '@material-tailwind/react'
import { useDispatch, useSelector } from 'react-redux'
import { closeLogin, openRegister } from '../redux/common/commonThunk'

export function Login() {
  const dispatch = useDispatch()

  const login = useSelector((state) => state.common.login)

  const handleCloseLogin = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    dispatch(closeLogin())
  }

  const handleOpenRegister = (event, reason) => {
    dispatch(closeLogin())
    dispatch(openRegister())
  }

  return (
    <>
      <Dialog
        size="xs"
        open={login}
        handler={handleCloseLogin}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem]">
          <CardBody className="flex flex-col gap-4">
            <Typography
              variant="h4"
              className="text-blue-gray-900 text-2xl font-semibold"
            >
              Sign In
            </Typography>
            <Typography
              className="mb-2 text-base font-normal text-gray-700"
              variant="paragraph"
            >
              Enter your email and password to Sign In.
            </Typography>
            <Typography className="block text-gray-700 text-sm font-bold mb-2">
              Your Email
            </Typography>
            <Input size="lg" className="mb-4" />
            <Typography
              className="block text-gray-700 text-sm font-bold mb-2"
              variant="h6"
            >
              Your Password
            </Typography>
            <Input label="Password" size="lg" className="mb-4" />
            <div className="flex items-center">
              <Checkbox
                label="Remember Me"
                className="text-sm "
              />
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Typography
              variant="small"
              className="mt-4 flex justify-center text-sm"
            >
              Don&apos;t have an account?
              <Typography
                onClick={handleOpenRegister}
                as="a"
                href="#signup"
                variant="small"
                color="blue-gray"
                className="ml-1 font-bold"
              >
                Sign up
              </Typography>
            </Typography>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  )
}
