import React from "react";
import images from "./images/12B6B378-1533-426B-9457-5A554C2345CC_1_105_c.jpeg";
import pin from "./images/Screen Shot 2022-02-11 at 1.57.19 PM.png";

const Content = (props) => {
  console.log("this is content props", props.data);
  let relevantData = props.data;
  let list = props.data.map((data) => data.imageUrl);
  console.log("this is list", list);
  return (
    <div className="content--main">
      {relevantData.map((data) => {
        return (
          //add parent div
          <div className="content--div">
            <img src={images} className="content--image" />
            <div className="content--info">
              <div className="content--location">
                <div className="content--innerlocation">
                  <img src={pin} className="redpin" />
                  <span>{data.location}</span>
                </div>
                <div className="content--link">
                  <a href={data.googleMapsUrl} className="content--url">
                    View in Google Maps
                  </a>
                </div>
              </div>
              <h1>{data.title}</h1>
              <span>{data.startDate}</span>
              <p>{data.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Content;
