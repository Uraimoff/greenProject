import React from "react";
import "./AddedStyle.css"

function Added() {
  const data = [
    {
      name: "Lorem Ipsum Dolor",
      country:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, dolore.",
    },
    {
      name: "Lorem Ipsum Dolor",
      country:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, dolore.",
    },
    {
      name: "Lorem Ipsum Dolor",
      country:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, dolore.",
    },
    {
      name: "Lorem Ipsum Dolor",
      country:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, dolore.",
    },
    {
      name: "Lorem Ipsum Dolor",
      country:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, dolore.",
    },
    {
      name: "Lorem Ipsum Dolor",
      country:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, dolore.",
    },
    {
      name: "Lorem Ipsum Dolor",
      country:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, dolore.",
    },
    {
      name: "Lorem Ipsum Dolor",
      country:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, dolore.",
    },
    {
      name: "Lorem Ipsum Dolor",
      country:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, dolore.",
    },
  ];
//   const Asdas=()=>{

//   }
  return (
    <>
      <div className="AddedWr">
        <h2 className="globalWrapper BgTxt">Recently Added</h2>
        <div className="addCl globalWrapper">
          {data.map((value) => (
            <div className="add">
              <div className="name">
                {/* {value.name.Asdas()} <span></span> */}
                {value.name}
              </div>
              <div className="country">{value.country}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Added;
