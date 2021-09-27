import styled from "@emotion/styled";
import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";

import { useEffect, useState } from "react";
import { NotionRenderer } from "react-notion";

export default function Plano({ paths, setPaths, documentsPath, setDocumentsPath }) {
  const [bock, setBock] = useState({})

  useEffect(() => {
    async function getStaticProps() {
    const data  = await fetch(
    "https://notion-api.splitbee.io/v1/page/c0dfce2f575a4a01b25026ea32591803"
  ).then(res => res.json());
      setBock(data)
  };
    getStaticProps()
  },[]
  )
  return (
      <StyleTab>
          <NotionRenderer blockMap={bock}  fullPage={true}/>
      </StyleTab>
  );
}

const StyleTab = styled.div`
  display: flex;
  flex-direction:column;
  align-items: center;  
  justify-content: center;
`;
