import React, { useState, useEffect } from "react";
import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
const optionList = [
  {
    value: "red",
    id: 1,
  },
  {
    value: "blue",
    id: 1,
  },
  {
    value: "green",
    id: 1,
  },
  {
    value: "yellow",
    id: 1,
  },
];

export default function App() {
  const backgroundColor = useSelector((state) => state.bgColor);
  const list = useSelector((state) => state.data);
  const [state, setState] = useState();
  const dispatch = useDispatch();

  const changeColorState = (event) => {
    localStorage.setItem("color", event.target.value);
    dispatch({ type: event.target.value });
  };
  useEffect(() => {
    console.log("ansari", list);
  }, [list]);
  useEffect(() => {
    const color = localStorage.getItem("color");
    if (backgroundColor) setState(backgroundColor);
    else setState(color);
  }, [backgroundColor]);
  return (
    <div className="App" style={{ backgroundColor: state }}>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <h6>selected color: {backgroundColor}</h6>
      <select value={state} onChange={changeColorState}>
        {optionList.map((x) => {
          return <option key={x.id}>{x.value}</option>;
        })}
      </select>
      <h6>HEllo</h6>

      <button onClick={() => dispatch({ type: "list" })}> Show title </button>
      {list &&
        list.map((item) => (
          <>
            <span>{item.title}</span>
          </>
        ))}
    </div>
  );
}
