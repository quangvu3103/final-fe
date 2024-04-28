import { createAsyncThunk } from '@reduxjs/toolkit'
import http from '../../service/axios_http'
import axios from 'axios'
import { openNotification } from '../common/commonSlice'

export const createOrder = createAsyncThunk(
  'order/createOrder',
  async (data, thunkApi) => {
    try {
      const response = await http.post('/order', data)
      thunkApi.dispatch(openNotification('Add to cart success'))

      return response
    } catch (error) {
      return thunkApi.rejectWithValue(error)
    }
  },
)

export const getRevenueByMonth = createAsyncThunk(
  'order/search',
  async (_, { rejectWithValue }) => {
    try {
      const reponse = await http.get(`/order/revenue-by-month`)
      return reponse
    } catch (error) {
      return rejectWithValue(error)
    }
  },
)

export const getTotalCountByMonth = createAsyncThunk(
  'order/getTotalCountByMonth',
  async (_, { rejectWithValue }) => {
    try {
      const reponse = await http.get(`/order/revenue-count-by-month`)
      return reponse
    } catch (error) {
      return rejectWithValue(error)
    }
  },
)

export const getOrder = createAsyncThunk(
  'order/getOrder',
  async (data, { rejectWithValue }) => {
    try {
      const response = await http.get('/order')
      return response
    } catch (error) {
      return rejectWithValue(error)
    }
  },
)

export const getOrderByUserId = createAsyncThunk(
  'order/getOrderByUserId',
  async (data, { rejectWithValue }) => {
    try {
      const response = await http.get('/order/by-user')
      return response
    } catch (error) {
      return rejectWithValue(error)
    }
  },
)

export const deleteOrderDetails = createAsyncThunk(
  'order/deleteOrderDetails',
  async (data, { rejectWithValue }) => {
    try {
      const response = await http.delete(`/OrderDetail/${data}`)
      return response
    } catch (error) {
      return rejectWithValue(error)
    }
  },
)

export const updateOrderDetails = createAsyncThunk(
  'order/updateOrderDetails',
  async (data, { rejectWithValue }) => {
    const { id, newQuantity } = data

    try {
      const response = await http.put(`/OrderDetail?id=${id}`, data)
      return response
    } catch (error) {
      return rejectWithValue(error)
    }
  },
)

export const updateOrder = createAsyncThunk(
  'order/updateOrder',
  async (data, { rejectWithValue }) => {
    try {
      const response = await http.patch('/order', data)

      return response
    } catch (error) {
      return rejectWithValue(error)
    }
  },
)

export const checkoutOrder = createAsyncThunk(
  'order/checkoutOrder',
  async (data, { rejectWithValue }) => {
    try {
      const response = await http.patch('/order/checkoutOrder', data)

      return response
    } catch (error) {
      return rejectWithValue(error)
    }
  },
)

export const getOrderById = createAsyncThunk(
  'order/getOrderById',
  async (data, { rejectWithValue }) => {
    try {
      const response = await http.get(`/order/order/${data}`, data)
      return response
    } catch (error) {
      return rejectWithValue(error)
    }
  },
)

export const getCart = createAsyncThunk(
  'order/getCart',
  async (data, { rejectWithValue }) => {
    try {
      const response = await http.get('/order/get-card')
      return response
    } catch (error) {
      return rejectWithValue(error)
    }
  },
)

const generateAccessToken = async () => {
  const auth = btoa(
    `AZvy5-tt7lDrhX2S-KhvTIjndWbuJ6ElR6LOPVJWhmM3kWcPbZEhXSyIWlJRjF1gH89ugN2XUkASksZK:EI8WiRawX3A6IcIGfPkmTP_-v8xDjAVjt7KIqYCxqDNMnqFJg_v9RmqvLFJlyFGlfL4wh2VqG5d1nBoX`,
  )

  try {
    const response = await axios.post(
      `https://api-m.sandbox.paypal.com/v1/oauth2/token`,
      'grant_type=client_credentials',
      {
        headers: {
          Authorization: `Basic ${auth}`,
        },
      },
    )

    const data = response.data
    return data.access_token
  } catch (error) {}
}

export const createOrderPaypal = createAsyncThunk(
  'order/createOrderOnPaypal',
  async (data, { rejectWithValue }) => {
    try {
      const accessToken = await generateAccessToken()
      const priceToPay = data / 23000
      const roundedPrice = Math.round(priceToPay)

      const response = await axios.post(
        `https://api-m.sandbox.paypal.com/v2/checkout/orders`,
        {
          intent: 'CAPTURE',
          purchase_units: [
            {
              items: [
                {
                  name: 'T-Shirt',
                  description: 'Green XL',
                  quantity: '1',
                  unit_amount: {
                    currency_code: 'USD',
                    value: roundedPrice,
                  },
                },
              ],
              amount: {
                currency_code: 'USD',
                value: roundedPrice,
                breakdown: {
                  item_total: {
                    currency_code: 'USD',
                    value: roundedPrice,
                  },
                },
              },
            },
          ],
          application_context: {
            return_url: 'https://example.com/return',
            cancel_url: 'https://example.com/cancel',
          },
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
          },
        },
      )
      console.log(response.data.id)
      return response.data.id
    } catch (error) {
      return rejectWithValue(error)
    }
  },
)
export const onApprove = createAsyncThunk(
  'order/onApprove',
  async (data, { rejectWithValue }) => {
    const accessToken = await generateAccessToken()

    try {
      const response = await axios.post(
        `https://api-m.sandbox.paypal.com/v2/checkout/orders/${data.orderID}/capture`,
        {
          orderID: data.orderID,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
          },
        },
      )
      return response
    } catch (error) {
      return rejectWithValue(error)
    }
  },
)
