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
          <a href="https://github.com/angelivan44/Servidumbre/releases/download/v0.7.0/servipy.Setup.0.7.0.exe" target="_blank"><ItemList type="software" text="Servipy Last Version"></ItemList></a>
          <a href="https://github.com/angelivan44/Servidumbre/releases/download/v0.1.0/Database.Model.xlsx" target="_blank"><ItemList type="excel" text="Excel database model" ></ItemList></a>
          <a href="https://github.com/angelivan44/Servidumbre/releases/download/v0.1.0/Modelo.dxf.dxf" target="_blank"><ItemList type="autodesk" text="Dxf model"></ItemList></a>
          <a href="https://github.com//angelivan44/Servidumbre/releases/download/v0.1.0/Areas.zip" target="_blank"><ItemList type="csv" text="Csv model"></ItemList></a>
          <a href="https://github.com/angelivan44/Servidumbre/releases/download/v0.1.0/Contrato_Model.docx" target="_blank"><ItemList type="word" text="Word model"></ItemList></a>
        </StyleTab>

  );
}

const StyleTab = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  height:100%;
`;
