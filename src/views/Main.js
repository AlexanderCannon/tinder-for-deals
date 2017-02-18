import React from "react";
import Offer from "./Offer.js";

const Main = props => (
  <div
    style={{
      flexDirection: "row",
      backgroundColor: "#fcfcff",
      height: props.height,
      overflowY: "auto",
      width: "props.width = 85vw",
      justifyContent: "center"
    }}
  >
    <div>
      {props.deals &&
        props.deals.map((item, i) => (
          <Offer
            {...item}
            like={() => props.like(item)}
            remove={() => props.remove(item)}
            key={i}
          />
        ))}
    </div>
    {props.children}
  </div>
);
export default Main;
