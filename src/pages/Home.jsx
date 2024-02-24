import Card from '../components/Card'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

function Home() {

  // Add more card data objects as needed
  return (
    <div className="flex flex-col h-screen ">
      <Navbar />
      <div className='flex-grow grid  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-8 p-8 w-full '>

      </div>
      <Footer />
    </div>
  )
}
export default Home
