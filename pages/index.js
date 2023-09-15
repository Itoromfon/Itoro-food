import { Inter } from 'next/font/google';
import HeroSection from '@/components/HeroSection';
import Main from '@/components/Main';
import Restaurant from '@/components/Restaurant';
import NewItem from '@/components/NewItem';
import MenuList from '@/components/MenuList';
import Launch from '@/components/Launch';
import Gallery from '@/components/Gallery';
import Chef from '@/components/Chef';
import Reservation from '@/components/Reservation';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='mb-44'>
        <HeroSection />
        <Main />
        <Restaurant />
        <NewItem />
        <MenuList />
        <Launch />
        <Gallery />
        <Chef />
        <Reservation />
    </div>
  )
}

























// //import Header from '@/components/Header'
// import Header from "@/components/Header"
// import Cards from '@/components/Cards'
// import Chart from '@/components/Chart'
// import RecentOrders from '@/components/RecentOrders'

// const inter = Inter({ subsets: ['latin'] })

// export default function Home() {
//   return (
//       <main 
//         className='
//           bg-gray-100 
//           min-h-screen
//           '
//         >
//         <Header />
//         <Cards />
//         <div 
//           className='
//             md:p-4 
//             p-10
//             py-5
//             grid 
//             md:grid-cols-3 
//             grid-cols-1 
//             gap-4
//             '
//           >
//           <Chart />
//           <RecentOrders />
//         </div>
//       </main>
//   )
// }
