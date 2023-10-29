import React from "react";
import { CredWrapper } from "../../globalStyles";
import Input from "./FormInputs";

function FormInputs()
{
  return <CredWrapper>
    <Input InputTitle = "Login ID" placeholder = "Enter Login ID"/>
    <Input InputTitle = "Password" placeholder = "Enter Password "/>
  </CredWrapper>
}

export default FormInputs