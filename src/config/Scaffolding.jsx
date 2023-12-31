function Scaffolding() {
  return (
    <div className="flex h-screen">
      <div className="bg-neutral-800 p-3 space-y-2 overflow-y-scroll ">
        {[...Array(40)].map((_, i) => (
          <div className="h-12 w-12 bg-white/30 flex items-center justify-center rounded-full">
            {i}
          </div>
        ))}
      </div>
      <div className="bg-neutral-700  w-60 flex flex-col">
        <div className="shadow-md p-3">Server </div>
        <div className="flex-1 p-3">channel</div>
        <div className="shadow-md p-3">setting</div>
      </div>
      <div className="bg-neutral-600 p-3 flex-1">Main</div>
    </div>
  )
}

export default Scaffolding
