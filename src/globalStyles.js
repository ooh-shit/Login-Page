import styled from "styled-components";

export const MainWrapper = styled.div`
  width: 100vw;
  height:100vh;
  display: grid;
  align-items: center;
  grid-template-columns: 35% 50%;
  gap:10%;
`
export const IllWrapper = styled.div`

  margin-left : 10%;

  >img {
    width:100%;
  }
`
export const FormWrapper = styled.div`
  height:90%;
  display: flex;
  flex-direction:column;
  gap:10px;
  align-items: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  justify-content: center;
`
export const FormDiv = styled.div`
  height:80%;
  width:80%;
  display: flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;

`
export const CredWrapper =  styled.div`
  height:30%;
  width:80%;
  display: flex;
  flex-direction:column;
  gap:5px;
`

export const SingleInputDiv = styled.div`
  height:10vh;
  width:100%;
  display :flex;
  gap:5px;
  flex-direction:column;

  >input
  {
    height:40%;
    border-radius : 5px;
    padding:15px;
    border : 1px solid grey;
  }

  >input:focus
  {
    outline:non
  }

  >label
  {
    font-size : 1.2rem;
  }
`
export const CheckWrapper =  styled.div`
  height:10%;
  width:80%;
  display :grid;
  grid-template-columns:1fr 1fr;
  grid-template-rows:1fr 1fr;

  >a
  {
    color:orange;
    margin-left:45%;
  }
`
export const CheckDiv = styled.div`
  height:3vh;
  width:90%;
  display:flex;
  gap:5px;


  >input
  {
    height:100%;
    border-radius : 5px;
    padding:15px;
    border : 1px solid grey;
  }

  >label
  {
    font-size : 1rem;
    color: #A7ADB2;
  }
  >a
  {
    color:orange;
  }
`
export const SubmitDiv = styled.div`
  height:15vh;
  width:80%;
  margin-top:10px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  gap:5px;

  >button
  {
    background-color : #1575A7;
    width:80%;
    height:5vh;
    font-size:1.15rem;
    color:white;
    border:none;
    border-radius:5px;
  }
  >div
  {
    display:flex;
    margin-top:10px;
  }
  >div h1 , a
  {
    font-size:1rem;
  }
  >div a
  {
    color:orange;
  }
`