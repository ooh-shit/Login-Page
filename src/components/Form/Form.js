import React from "react";
import { FormDiv, FormWrapper} from "../../globalStyles";
import FormInputs from "./FormInputDiv";
import CheckBoxes from "./FormCheckboxes";
import SubmitSec from "./Submit";

function Form()
{
  return <FormWrapper>
      <FormDiv>
        <h1>Login</h1>
        <FormInputs/>
        <CheckBoxes/>
        <SubmitSec/>
      </FormDiv>
    </FormWrapper>

}

export default Form