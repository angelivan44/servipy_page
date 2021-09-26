import styled from "@emotion/styled";

import { useHistory } from "react-router";
import Card from "../components/Card";
import DescriptionArea from "../components/Description";
import TabFormato from "./TabFormato";
import { useState } from "react";
import ItemList from "./ItemList";

export default function Formato({documentsPath,setDocumentsPath, paths}) {
  const history = useHistory();
  const [itemFormat, setItemFormat] = useState("contrato");


  return (

        <StyleTab>
          <h1>RECURSOS</h1>
          <a href="https://hazel-server-electron.vercel.app/download" target="_blank"><ItemList type="software" text="Servipy Last Version"></ItemList></a>
          <ItemList type="excel" text="Excel database model" ></ItemList>
          <ItemList type="autodesk" text="Dxf model"></ItemList>
          <ItemList type="csv" text="Csv model"></ItemList>
          <ItemList type="word" text="Word model"></ItemList>
        </StyleTab>

  );
}

const StyleTab = styled.div`
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  height:100%;
`;
