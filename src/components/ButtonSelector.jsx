import './ButtonSelector.css'
import {useState} from 'react'

function ButtonSelector() {
  const [active, setActive] = useState("12 months");
  return (
    <div className="segment">
      {["7 days", "30 days", "12 months"].map((item) => (
        <button
          key={item}
          className={`segmentButton ${active === item ? "active" : ""}`}
          onClick={() => setActive(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
export default ButtonSelector;
