import { useState, useRef, useEffect } from "react";
import Loader from "./components/loader/Loader";
function App() {
  const [accordian, setAccordian] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const contentRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true)
    }, 2000);
  }, [])

  return (
    // <div>
    <>
    {isLoading ?  <div className={`main w-[70%] m-auto my-5 p-4 border-2 border-black border-solid`}>
      <div onClick={() => setAccordian(!accordian)} className="flex items-center justify-between">
        <h3 className="mb-2 cursor-pointer my-3">Accordian</h3>
        <span>{!accordian ? "+" : "-"}</span>
      </div>
      <div ref={contentRef}
        className={`transition-all duration-300 ease-in-out overflow-hidden`}
        style={{ maxHeight: accordian ? `${contentRef.current.scrollHeight}px` : "0px" }}>
        <div className="text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. At aut saepe fugit dolorum! Recusandae vitae magnam quibusdam amet, harum, officia, iusto doloremque nesciunt debitis eum inventore quas facere pariatur aut. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto quibusdam fuga at similique aliquam aut modi voluptatum voluptatibus, dicta dolorum quo laboriosam assumenda ullam facere reprehenderit quidem ab nulla esse?
        </div>
      </div>
    </div> : <Loader/>}
   
    </>
    // </div>
  );
}

export default App;