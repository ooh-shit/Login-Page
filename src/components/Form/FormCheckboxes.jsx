import React from "react";
import { CheckDiv,CheckWrapper } from "../../globalStyles";

function CheckBoxes()
{
  return <CheckWrapper>
  <CheckDiv>
    <input type="checkbox"/>
    <label>Remember Me</label>
  </CheckDiv>
  <a href="#">Change Password?</a>
  <CheckDiv>
    <input type="checkbox"/>
    <label>Agree to</label>
    <a href="#"> Terms and conditions</a>
  </CheckDiv>
  </CheckWrapper>
}

export default CheckBoxes