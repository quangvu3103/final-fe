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
import { closeRegister } from '../redux/common/commonThunk'

export function Register() {
  const dispatch = useDispatch()

  const register = useSelector((state) => state.common.register)

  const handleCloseLogin = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    dispatch(closeRegister())
  }

  return (
    <>
      <Dialog
        size="xs"
        open={register}
        className="bg-transparent shadow-none"
        onCLose={handleCloseLogin}
      >
        <Card className="mx-auto w-full max-w-[24rem]">
          <CardBody className="flex flex-col gap-4">
            <Typography variant="h4" color="blue-gray">
              Register
            </Typography>
            <Typography
              className="mb-3 font-normal"
              variant="paragraph"
              color="gray"
            >
              Enter your email and password to Sign up.
            </Typography>
            <Typography className="-mb-2" variant="h6">
              Your Email
            </Typography>
            <Input size="lg" />
            <Typography className="-mb-2" variant="h6">
              Your Password
            </Typography>
            <Input size="lg" />

            <Typography className="-mb-2" variant="h6">
              Enter the password
            </Typography>
            <Input size="lg" />
            
          </CardBody>
          <CardFooter className="pt-0">
           
            <Typography variant="small" className="mt-4 flex justify-center">
              <Typography
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
