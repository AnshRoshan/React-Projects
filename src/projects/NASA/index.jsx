import { useEffect, useState } from "react";
import Footer from "./Footer";
import Main from "./Main";
import Sidebar from "./Sidebar";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

function Nasa() {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    document.title = "Nasa Space Image";
    setLoading(true);
    async function fetchAPIData() {
      const apiKey = import.meta.env.VITE_NASA_API_KEY;
      const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
      try {
        const res = await fetch(url);
        const apiData = await res.json();
        // localStorage.setItem(localKey, JSON.stringify(apiData))
        setData(apiData);
        console.log(data);
      } catch (err) {
        console.log(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchAPIData();
  }, []);

  const handleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="relative flex min-h-screen bg-[#030615] text-white">
      {loading && (
        <div className="flex h-full w-full items-center justify-center">
          <AiOutlineLoading3Quarters className="animate-spin" />
        </div>
      )}
      {data && <Main data={data} />}
      {showModal && <Sidebar data={data} handleModal={handleModal} />}
      {data && <Footer data={data} handleModal={handleModal} />}
    </div>
  );
}
export default Nasa;
