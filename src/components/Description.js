import styled from "@emotion/styled";
import color from "../app/color";
import { useState } from "react";
import images from "../app/images";
import ReactPlayer from 'react-player/lazy'


export default function DescriptionArea({ name, email, type, paths, documentsPath}) {
  const {urlExcel,urlDxf, urlCsv ,urlDir} = paths;
  const {contratoPath, reciboPath, valorizacionPath, autorizacionPath } = documentsPath;

  return (
    <StyleDiv > 
      <ReactPlayer url='https://www.youtube.com/watch?v=v57SMMc1oOA' />
    </StyleDiv>
  );
}


const StyleDiv = styled.div`
  width: 100%;
  box-sizing:border-box;
  border:1px solid #E5E5E5;
  background-color: ${props => (props.selected ? color.blue_selected : "#fff" )};


`
