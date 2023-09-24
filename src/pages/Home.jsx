import Card from "../components/Card"
import Navbar from "../components/Navbar"
function Home() {
  const cardDataArray = [
    {
      title: "Counter",
      description: "A beautiful Counter App.",
      image: "/counter.jpeg",
      tags: ['counter' ],
    },
    {
      title: "Password Generator",
      description: "A great password generator.",
      image: "/passwordgen.jpeg",
      tags: ['encryption', 'generator','copy' ],
    },
    // Add more card data objects as needed
  ]
  return (
    <div>
      <Navbar />
      <h1 className='text-3xl font-bold underline'>Hello world!</h1>
      <div className='flex flex-wrap '>
        {cardDataArray.map((cardData, index) => (
          <Card 
            key={index}
            title={cardData.title}
            description={cardData.description}
            image={cardData.image}
            tags={cardData.tags}
          />
        ))}
      </div>
    </div>
  )
}
export default Home
