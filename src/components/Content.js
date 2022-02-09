import React from "react";

const Content = (props) => {
  console.log("this is content props", props);
  let list = props.data.map((data) => data.title);
  console.log(list);
  return (
    <div>
      <h1>this is content</h1>
    </div>
  );
};

export default Content;
