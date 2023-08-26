/* Now let's wrap our app.js with our sidebar component. then 
   everything else inside of our sidebar is going to be the 
   children of the sidebar.
*/
import '@/styles/globals.css'
import Sidebar from '@/components/Sidebar'

export default function App({ Component, pageProps }) {
  return (
    <Sidebar>
      <Component {...pageProps} />
    </Sidebar>
  ) 
}













































































































































































































































