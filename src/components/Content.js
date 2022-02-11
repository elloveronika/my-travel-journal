import React from "react";

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
            <img src={data.imageUrl} />
            <div className="content--info">
              <div className="content--location">
                <div className="content--innerlocation">
                  <span className="redpin"></span>
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
