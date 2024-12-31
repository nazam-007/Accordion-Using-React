import { useState } from "react";
import accordionData from "./data";
import "./style.css";

function Accordion() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setenableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(getcurrentId) {
    // console.log(getcurrentId)
    setSelected(getcurrentId === selected ? null : getcurrentId);
  }

  function handleMultiSelection(getcurrentId) {
    // console.log(getcurrentId)
    // setenableMultiSelection();
    let cpyMultiple = [...multiple];
    const findindexofcurrentId = cpyMultiple.indexOf(getcurrentId);
    if (findindexofcurrentId === -1) {
      cpyMultiple.push(getcurrentId);
    } else {
      cpyMultiple.splice(findindexofcurrentId, 1);
    }
    setMultiple(cpyMultiple);
  }

  //

  return (
    <div className="wrapper" id={`accordion-${accordionData.id}`}>
      <button
        onClick={() => setenableMultiSelection(!enableMultiSelection)}
        className={enableMultiSelection ? "enabled" : "disabled"}
      >
        {enableMultiSelection
          ? "Disable Multi Selection"
          : "Enable Multi Selection"}
      </button>
      <div className="accordion">
        {accordionData || accordionData.length > 0 ? (
          accordionData.map((accordionItem) => (
            <div className="item">
              <div
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(accordionItem.id)
                    : () => handleSingleSelection(accordionItem.id)
                }
                className="title"
              >
                <h2>{accordionItem.title}</h2>
              </div>

              <span>+</span>
              {/* {selected === accordionItem.id ||
              multiple.indexOf(accordionItem.id) !== -1 ? (
                <div className="content">{accordionItem.content}</div>
              ) : null} */}
              {enableMultiSelection
                ? multiple.indexOf(accordionItem.id) !== -1 && (
                    <div className="content">{accordionItem.content}</div>
                  )
                : selected === accordionItem.id && (
                    <div className="content">{accordionItem.content}</div>
                  )}
            </div>
          ))
        ) : (
          <div>No data Available</div>
        )}
      </div>
    </div>
  );
}

export default Accordion;
