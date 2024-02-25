import { amazon, brandlogo, flipkart, shoe } from "../assets";
const NikeLanding = () => {

  return (
    <div className="font-poppins bg-white">
      <nav className="flex h-[72px]  items-center justify-between p-1 px-[8.33%]">
        <div className="logo">
          <img src={brandlogo} alt="Logo Of Nike" />
        </div>
        <ul className="flex items-center space-x-4">
          <li>
            <a href="#" className="text-lg font-semibold hover:text-gray-700">
              Menu
            </a>
          </li>
          <li>
            <a href="#" className="text-lg font-semibold hover:text-gray-700">
              Location
            </a>
          </li>
          <li>
            <a href="#" className="text-lg font-semibold hover:text-gray-700">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-lg font-semibold hover:text-gray-700">
              Contact
            </a>
          </li>
        </ul>
        <div className="login">
          <button className=" text-white bg-[#D01C28] px-4 py-2 text-lg font-semibold">
            Login
          </button>
        </div>
      </nav>
      <div className="hero h-[calc(100vh-72px)] px-[10.9%] py-[80px]">
        <div className=" flex items-center">
          <div className="w-1/2">
            <h1 className="font-extrabold text-[108px] leading-[102px]">YOUR FEET DESERVE THE BEST</h1>
            <div className="flex flex-col gap-8">
              <p className="font-semibold text-[16px] text-[#5A5959] h-[91px] w-[404px] ">YOUR FEET DESERVE THE BEST AND WE&apos;RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE&apos;RE HERE TO HELP YOU WITH OUR SHOES.</p>
              <div className="flex space-x-[90px]">
                <button className=" text-white bg-[#D01C28] px-4 py-2 text-lg font-semibold">
                  Shop Now
                </button>
                <button className=" border-2 border-black px-4 py-2 text-lg font-semibold">
                  Category
                </button>
              </div>
              <div className="space-y-4">
                <p className=" text-[#5A5959]">Also avaliable on </p>
                <div className="flex space-x-[40px]">
                  <img src={flipkart} alt="flippkart" />
                  <img src={amazon} alt="amazon" />
                </div>
              </div>
            </div>
          </div>
          <img className="h-[530px] " src={shoe} alt="shoe Image" />
        </div>
      </div>
    </div>
  );
};
export default NikeLanding;
