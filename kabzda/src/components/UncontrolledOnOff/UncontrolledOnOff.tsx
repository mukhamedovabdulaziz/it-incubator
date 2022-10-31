import React, {useState} from 'react';

type PropsType = {
  // on: boolean;
}

export const UncontrolledOnOff = (props: PropsType) => {

  let [on, setOn] = useState(false);

  const onStyle = {
    width: "30px",
    height: "20px",
    border: "1px solid black",
    display: "inline-block",
    padding: "2px",
    backgroundColor: on ? "green" : "white"
  }
  const offStyle = {
    width: "30px",
    height: "20px",
    border: "1px solid black",
    display: "inline-block",
    padding: "2px",
    marginLeft: "5px",
    backgroundColor: on ? "white" : "red"
  }
  const indicatorStyle = {
    width: "15px",
    height: "15px",
    borderRadius: "10px",
    border: "1px solid black",
    display: "inline-block",
    marginLeft: "10px",
    backgroundColor: on ? "green" : "red"
  }

  return (
    <div>
      <div style={onStyle} onClick={() => setOn(true)}>On</div>
      <div style={offStyle} onClick={() => setOn(false)}>Off</div>
      <div style={indicatorStyle}></div>
    </div>
  );
};

