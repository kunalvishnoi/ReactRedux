import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux";
const HooksDemo = () => {
  const cake = useSelector(state => state.numOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Hooks Cake - {cake}</h1>
      <button onClick={() => dispatch(buyCake())}>Buy Now</button>
    </div>
  );
};

export default HooksDemo;
