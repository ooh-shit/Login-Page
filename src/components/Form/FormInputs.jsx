import React from "react";
import { FormInput, SingleInputDiv } from "../../globalStyles";

function Input(props)
{
  return <SingleInputDiv>
    <label>{props.InputTitle}</label>
    <input type="text" placeholder= {props.placeholder}/>
  </SingleInputDiv>
}

export default Input