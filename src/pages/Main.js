import styled from "@emotion/styled";
import { useHistory } from "react-router";
import HeaderArea from "../components/HeaderArea";
import ItemList from "../components/ItemList";
import Plano from "../components/Plano";
import Dashboard from "../components/Dashboard";
import logo from '../assets/logo 3.svg'
import { useEffect, useState } from "react";
import Formato from "../components/Formato";

export default function Main({loginUser, setLoginUser}) {
  const history = useHistory();
  const [view , setView] = useState("dashboard")
  const [userData, setUserData] = useState({
    displayName:"",
    email:"",
    photoURL:"",
  })

  const [documentsPath, setDocumentsPath] = useState(
    { contratoPath: "" ,
      reciboPath:"",
      valorizacionPath:"",
      autorizacionPath:"",
  });

  const [paths, setPaths] = useState(
    {urlExcel:"", 
    urlDxf:"",
    urlCsv:"", 
    urlDir:""})


  const viewElement = {
    dashboard : <Dashboard name={userData.displayName} src={userData.photoURL} email={userData.email} setUserData={setUserData}/>,
    plano: <Plano paths={paths} setPaths={setPaths} documentsPath={documentsPath} setDocumentsPath={setDocumentsPath}/>,
    formato:<Formato paths={paths} setPaths={setPaths} documentsPath={documentsPath} setDocumentsPath={setDocumentsPath}/>
  }



  return (
    <StyleDiv>
      <aside>
        <HeaderArea name="SERVIPY" src={logo} ></HeaderArea>
        <div>
          <ItemList selected={view==="dashboard"} text="Inicio" type="about" onClick={()=>{setView("dashboard")}}></ItemList>
          <ItemList selected={view==="plano"}  text="Tutorial" type="guide" onClick={()=>{setView("plano")}}></ItemList>
          <ItemList selected={view==="formato"}  text="Descargas" type="downloadcloud" onClick={()=>{setView("formato")}}></ItemList>

        </div>
      </aside>
      <StyleMain>
       {viewElement[view]}
      </StyleMain>
    </StyleDiv>
  );
}

const StyleDiv = styled.div`
  display: flex;7
  border: 1px solid #e5e5e5;
  & aside {
    width: 15em;
    border: 1px solid #e5e5e5;
  }
`;
const StyleMain = styled.main`
  width:100%;
  display:flex;
  flex-direction:column;
  align-items:center;
  
`;
const StyleLogout = styled.div`
  display: flex;
  flex-direction:column;
  height:300px;
  justify-content:flex-end;
`;
