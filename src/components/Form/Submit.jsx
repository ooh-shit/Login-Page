import React from "react";
import { SubmitDiv } from "../../globalStyles";

function SubmitSec()
{
  return <SubmitDiv>
    <button type="submit">Login</button>
    <div>
      <h1>Don't have an account?</h1>
      <a href = "#">Register Here</a>
    </div>
  </SubmitDiv>
}

export default SubmitSec