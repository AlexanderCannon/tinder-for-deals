import React from "react";
import Action from "./Action.js";
import Cross from "./Cross.js";
import Heart from "./Heart.js";

const Offer = props => (
  <div
    style={{
      flexDirection: "column",
      backgroundColor: "white",
      borderRadius: 2,
      marginTop: 5,
      boxShadow: "0 0 8px",
      borderBottom: 40,
      width: "100%"
    }}
  >
    <img
      src={props.offerImage}
      style={{
        width: 450,
        borderTopLeftRadius: 2,
        borderTopRightRadius: 2
      }}
    />
    <div
      style={{
        flexDirection: "column",
        padding: 10
      }}
    >
      <div
        style={{
          fontFamily: "Helvetica",
          fontSize: 26
        }}
      >
        {props.what}
      </div>
      <div
        style={{
          fontFamily: "Helvetica",
          fontSize: 20
        }}
      >
        {`${props.howMuch}`}
      </div>
      <div>
        {`https://www.google.com/maps/place/${props.lat},${props.lon}`}
      </div>
    </div>
    <div
      style={{
        flexDirection: "row",
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10
      }}
    >
      <Action
        styleHover={{
          backgroundColor: "red"
        }}
        onClick={props.remove}
        style={{
          flexDirection: "row",
          padding: 10,
          backgroundColor: "navajowhite",
          borderRadius: 100
        }}
      >
        <Cross />
      </Action>
      <Action
        isActive={props.liked}
        styleActive={{
          backgroundColor: "red"
        }}
        onClick={props.like}
        style={{
          flexDirection: "row",
          padding: 10,
          backgroundColor: "navajowhite",
          borderRadius: 100,
          marginLeft: 10
        }}
      >
        <Heart />
      </Action>
    </div>
    {props.children}
  </div>
);
export default Offer;
