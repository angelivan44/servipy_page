import styled from "@emotion/styled";
import color from "../app/color";

import { useHistory } from "react-router";
import HeaderArea from "../components/HeaderArea";
import ItemList from "../components/ItemList";
import TabItem from "../components/TabItem";
import Card from "../components/Card";
import DescriptionArea from "../components/Description";
import { useState } from "react";

export default function Plano({paths, setPaths, documentsPath, setDocumentsPath }) {
  const [itemSelect, setItemSelect] = useState("excel");
  const history = useHistory();

  return (
      <StyleTab>
          <h1>TUTORIAL</h1>
          <DescriptionArea type="plano" paths={paths}  documentsPath={documentsPath}></DescriptionArea>
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
