import { useState, useEffect } from "react";

function Accordion() {
  const [click, setClick] = useState(0);
  const [multi, setMulti] = useState(false);
  const [multid, setMultid] = useState([]);

  useEffect(() => {
    // // Log the current state after it has been updated
    // console.log('click:', click)
    // console.log('multid:', multid)
    // console.log('multi:', multi)
  }, [click, multid, multi]);

  const handleClick = (id) => {
    setClick(click === id ? 0 : id);
    if (multi) {
      setMultid((prevMultid) => {
        if (prevMultid.includes(id)) {
          // Remove the ID if it's already in the array
          return prevMultid.filter((itemId) => itemId !== id);
        } else {
          // Add the ID if it's not in the array
          return [...prevMultid, id];
        }
      });
    }
  };
  const handleSwitch = () => {
    if (!multi) {
      setMultid([click]);
      setClick(0);
    } else {
      let lastid = multid.pop();
      setMultid([]);
      setClick(lastid);
    }
    setMulti(!multi);
  };

  return (
    <div className=" h-screen bg-gradient-to-r from-sky-400 to-green-300 ">
      <div className="flex flex-col items-center justify-center gap-4 p-8 text-lg">
        <div
          className="rounded-full bg-yellow-500 p-4"
          onClick={() => handleSwitch()}
        >
          {multi ? "Disable " : "Enable "}
          Multi Selection
        </div>
        {data && data.length > 0 ? (
          <div className="w-[40rem]">
            {data.map((items) => (
              <div
                key={items.id}
                className="mt-2 rounded bg-amber-600 p-1 px-4  "
                onClick={() => handleClick(items.id)}
              >
                <div className="flex justify-between gap-4">
                  <span>{items.question} </span>
                  <span className="text-right">+</span>
                </div>
                <div
                  className={`${(click === items.id && !multi) || multid.includes(items.id) ? "block" : "hidden"}`}
                >
                  {items.answer}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="">No Output</div>
        )}
      </div>
    </div>
  );
}

const data = [
  {
    id: "1",
    question: "What are accordion components?",
    answer:
      "Accordion components are user interface elements used for organizing and presenting content in a collapsible manner. They typically consist of a header, content, and an expand/collapse action.",
  },
  {
    id: "2",
    question: "What are they used for?",
    answer:
      "They are commonly employed in various contexts, including FAQs, product descriptions, navigation menus, settings panels, and data tables, to save screen space and provide a structured and user-friendly interface for presenting information or options.",
  },
  {
    id: "3",
    question: "Accordion as a musical instrument",
    answer:
      "The accordion is a musical instrument with a keyboard and bellows. It produces sound by air passing over reeds when the player expands or compresses the bellows, used in various music genres.",
  },
  {
    id: "4",
    question: "Can I create an accordion component with a different framework?",
    answer:
      "Yes of course, it is very possible to create an accordion component with another framework.",
  },
];

export default Accordion;
