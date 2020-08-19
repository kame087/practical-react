import React from "react";

const Body = (props) => {
  // you can first map out the items and just display in the return body
  const fam = props.family;
  // const famMembers = fam.map((member) => <li>{member}</li>);
  return (
    <div>
      <p>Let's get started and make some components!</p>
      <h2>Passing Data:</h2>
      <h3>Here's the Family below:</h3>
      {/* Or you can map them out within the return body like below: */}
      <ul>
        {fam.map((member) => (
          <li>{member}</li>
        ))}
      </ul>
      {/* <ul>{famMembers}</ul> */}

      <h3>Passing Functions </h3>
      <div>
        Here are the values passed:{" "}
        {props.nums.map((num) => (
          <p>{num}</p>
        ))}
      </div>
      <p>
        The total of the values passed to my function is:{" "}
        {props.lambdaFunc(props.nums[0], props.nums[1])}
      </p>
    </div>
  );
};

export default Body;
