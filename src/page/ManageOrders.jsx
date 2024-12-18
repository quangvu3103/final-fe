import { Box } from '@mui/material'
import { LineChart } from '@mui/x-charts'
import { BarChart } from '@mui/x-charts/BarChart'
import { PieChart } from '@mui/x-charts/PieChart'
import { Table } from 'antd'
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js'
import moment from 'moment'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import ChangePassword from '../component/ChangePassword'
import Footer from '../layout/footer/Footer'
import Navbar from '../layout/navbar/navbar'
import {
  getOrder,
  getRevenueByMonth,
  getTotalCountByMonth,
} from '../redux/order/orderThunk'
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => 1000),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
}

const ManageOrders = () => {
  const dispatch = useDispatch()
  const orders = useSelector((state) => state.order.orders)
  const revenueByMonth = useSelector((state) => state.order.revenueByMonth)
  const countByMonth = useSelector((state) => state.order.countByMonth)
  const columns = [
    {
      title: 'Name',
      dataIndex: 'user',
      key: 'name',
      width: '30%',
      render: (user, record) => (
        <Link
          to={`/orderDetails/${record.id}`}
          style={{ textDecoration: 'none' }}
        >
          {user.profile.fullName}
        </Link>
      ),
    },
    {
      title: 'Address',
      dataIndex: 'user',
      key: 'address',
      render: (user) => user.profile.address,
    },
    {
      title: 'Email',
      dataIndex: 'user',
      key: 'email',
      render: (user) => user.email,
    },
    {
      title: 'Avatar',
      dataIndex: 'user',
      key: 'avatar',
      render: (user) => (
        <img
          className=" rounded-full"
          src={
            user?.profile?.url
              ? user?.profile?.url
              : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_tcOvQEEIe_84hTCiDVVoZ89tV2RA6Fa0lF7kCWH5lg&s'
          }
          alt="Avatar"
          style={{ width: 50, height: 50 }}
        />
      ),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => {
        let color = ''
        if (status === 'DONE') {
          color = 'green'
        } else if (status === 'PENDING') {
          color = 'orange'
        } else {
          color = 'red'
        }
        return (
          <span className=" text-base font-semibold " style={{ color }}>
            {status}
          </span>
        )
      },
    },
    {
      title: 'Date',
      dataIndex: 'dateOrder',
      key: 'date',
      render: (date) => moment(date).format('DD/MM/YYYY HH:mm:ss'),
    },
  ]



  const statusCounts = orders.reduce((acc, order) => {
    const { status } = order
    acc[status] = (acc[status] || 0) + 1
    return acc
  }, {})
  const pieChartData = Object.keys(statusCounts).map((status) => ({
    id: status,
    label: status,
    value: statusCounts[status],
  }))
  useEffect(() => {
    dispatch(getOrder())
    dispatch(getRevenueByMonth())
    dispatch(getTotalCountByMonth())
  }, [])
  const monthlyOrders = {}
  orders.forEach((order) => {
    const month = new Date(order.dateOrder).getMonth() + 1 
    if (monthlyOrders[month]) {
      monthlyOrders[month]++
    } else {
      monthlyOrders[month] = 1
    }
  })
  const barChartData = [{ data: Object.values(monthlyOrders) }]

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  const xAxisData = [{ data: months, scaleType: 'band' }]
  const sortByMonth = (data) => {
    const dataCopy = [...data]
    return dataCopy.sort((a, b) => a.month - b.month)
  }

  const prepareChartData = (data) => {
    const sortedData = sortByMonth(data)
    const xAxis = sortedData.map((item) => item.month)
    const seriesData = sortedData.map((item) => item.revenue)

    return {
      xAxis: [{ data: xAxis }],
      series: [{ data: seriesData }],
    }
  }
  const chartData2 = prepareChartData(revenueByMonth)

  const series = [
    {
      data: countByMonth.map((item) => item.orderCount),
      stack: 'A',
    },
  ]

  const xAxis = [
    {
      data: countByMonth.map((item) => `Q${item.quarter}`),
      scaleType: 'band',
    },
  ]
  return (
    <>
      <div className="">
        <Navbar />
      </div>
      <ChangePassword />
      <Box
        style={{
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'full',
          minHeight: '100vh',
          minWith: '100w',
        }}
      >
        {' '}
        <div className=" grid grid-cols-2 place-items-center gap-6 py-10">
          <div className="w-full h-full shadow-2xl">
            <div className="my-4">
              <h1 className=" text-center font-semibold">
                Number of orders purchased in each month
              </h1>
            </div>
            <BarChart
              series={barChartData}
              height={290}
              xAxis={xAxisData}
              margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
            />
          </div>
          <div className=" h-full w-full shadow-2xl">
            <div className="my-4">
              <h1 className=" text-center font-semibold">
                Number of paid and unpaid items
              </h1>
            </div>
            <PieChart
              series={[
                {
                  data: pieChartData,
                },
              ]}
              width={600}
              height={200}
            />
          </div>
          <div className=" h-full w-full shadow-2xl ">
            <LineChart
              xAxis={chartData2.xAxis}
              series={chartData2.series}
              // width={600}
              // height={400}
            />
          </div>
          <div className=" h-full w-full shadow-2xl">
          <div className="my-4">
              <h1 className=" text-center font-semibold">
                Number of paid and unpaid items
              </h1>
            </div>
            <BarChart series={series} xAxis={xAxis} width={600} height={350} />
          </div>
        </div>
        <div className=" container mx-auto border border-b px-2 py-2 rounded-2xl my-5">
          <Table columns={columns} dataSource={orders} />
        </div>
      </Box>

      <Footer />
    </>
  )
}

export default ManageOrders
