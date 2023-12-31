import Card from '../components/Card'
import Navbar from '../components/Navbar'

function Home() {
  const cardDataArray = [
    {
      title: 'Counter',
      description: 'A beautiful Counter App.',
      image: '/counter.jpeg',
      tags: ['counter'],
      link: '/counter',
    },
    {
      title: 'Password Generator',
      description: 'A great password generator.',
      image: '/passwordgen.jpeg',
      tags: ['encryption', 'generator', 'copy'],
      link: '/passgen',
    },
    {
      title: 'Currency Converter',
      description: 'A Currency Converter App. ',
      image: '/currency.jpeg',
      tags: ['currency', 'json', 'api', 'fetch'],
      link: '/currency',
    },
    {
      title: 'Accordion',
      description: 'A Currency Converter App. ',
      image: '/currency.jpeg',
      tags: ['accordion'],
      link: '/accordion',
    },
    // Add more card data objects as needed
  ]
  return (
    <div>
      <div className=" bg-slate-700 mb-4">
        <p className="text-4xl text-center py-4 md:text-6xl font-extrabold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.fuchsia.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))] bg-[length:200%_auto] animate-gradient">
          React Projects
        </p>
      </div>
      <div className="flex flex-wrap justify-evenly gap-y-8 p-4 ">
        {cardDataArray.map((cardData, index) => (
          <Card
            key={index}
            title={cardData.title}
            description={cardData.description}
            image={cardData.image}
            tags={cardData.tags}
            link={cardData.link}
          />
        ))}
      </div>
    </div>
  )
}
export default Home
