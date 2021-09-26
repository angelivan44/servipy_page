import styled from "@emotion/styled";
import logo from "../assets/logo 3.svg"

import { useHistory } from "react-router";

import CardForm from "./CardForm";

export default function Dashboard({name, src,email, setUserData }) {
  const history = useHistory();

  return (
    <>
      <StyleDiv>
        <StyleImg src={logo}/>
        <h2>SERVIPY</h2>
        <p>servipy es un programa para la elaboracion de planos de gestion de servidumbre, estos planos son parte de los expedientes de imposicion de servidumbre.</p>
      </StyleDiv>
    </>
  );
}

const StyleImg = styled.img`
  width:213px;
  height:213px;
  border-radius:50%;
`
const StyleDiv = styled.div`
width:100%;
padding:3em 3em;
display:flex;
flex-direction:column;
align-items:center;
`