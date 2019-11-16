import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux";
import { buyIcecream } from "../redux";
const HooksDemo = () => {
  const cake = useSelector(state => state.cake.numOfCakes);
  const dispatch = useDispatch();
  const icecream = useSelector(state => state.icecream.numOfIceCream);
  return (
    <div>
      <h1>Hooks Cake - {cake}</h1>
      <button onClick={() => dispatch(buyCake())}>Buy Now</button>
      <h1>Hooks IceCream - {icecream}</h1>
      <button onClick={() => dispatch(buyIcecream())}>Buy Now</button>
    </div>
  );
};

export default HooksDemo;
