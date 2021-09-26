import styled from "@emotion/styled";
import { useHistory } from "react-router"
import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";

import { NotionRenderer } from "react-notion";
import { useEffect, useState } from "react";




export default function Dashboard({ name, src, email, setUserData }) {
  const [bock, setBock] = useState({})
  useEffect(() => {
    async function getStaticProps() {
    const data  = await fetch(
    "https://notion-api.splitbee.io/v1/page/2e721f85d3f9425c9641d5e71a7b4fda"
  ).then(res => res.json());
      setBock(data)
  };
    getStaticProps()
  },[]
  )
  console.log(bock)
  return (
  
      <StyleDiv>
        <NotionRenderer blockMap={bock}  fullPage={true}/>
      </StyleDiv>

  );
}

const StyleDiv = styled.div`
width:100%;
padding:3em 3em;
`