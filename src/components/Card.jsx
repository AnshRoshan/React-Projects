function Card({ title, description, image, tags }) {
  return (
      <div class='max-w-sm overflow-hidden shadow-lg bg-slate-400 mr-10 w-1/4 rounded-xl '>
        <img class='w-[90%] m-[5%] rounded-2xl' src={`${image}`} alt='Sunset in the mountains' />
        <div class='px-6 py-4'>
          <div class='font-bold text-xl mb-2'>{title}</div>
          <p class='text-gray-700 text-base'>{description}</p>
        </div>
        <div class='px-6 pt-4 pb-2'>
          {tags.map((tag, index) => (
            <span
              key={index}
              className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
  )
}
export default Card
