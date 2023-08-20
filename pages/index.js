import { Inter } from 'next/font/google'
//import Header from '@/components/Header'
import Header from "@/components/Header"
import Cards from '@/components/Cards'
import Chart from '@/components/Chart'
import RecentOrders from '@/components/RecentOrders'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <main className='bg-gray-100 min-h-screen'>
        <Header />
        <Cards />
        <div className='p-4 grid md:grid-cols-3 grid-cols-1 gap-4'>
          <Chart />
          <RecentOrders />
        </div>
      </main>
  )
}
