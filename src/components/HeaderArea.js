import styled from "@emotion/styled";
import color from "../app/color";
export default function HeaderArea({src, name, email}) {
 
  return (
    <StyleDiv > 
     <img src={src}/>
    </StyleDiv>
  );
}


const StyleDiv = styled.div`
  display:flex;
  flex-direction:column;
  align-items: center;
  width: 15rem;
  height: 172px;
  box-sizing: border-box;
  padding: 16px 40px;
  border-bottom:1px solid #E5E5E5;
  background-color: ${props => (props.selected ? color.blue_selected : "#fff" )};
  
  & img {
    width:10em;
    height:10em;
    border-radius: 50%;
    margin-bottom:24px ;
  }
  & h2 {
    font-size:20px;
    font-weight: 500;
    line-height:30px;
    margin:0;
    width:100%;
  }

  & p {
    font-size: 14px;
    font-weight: 400;
    color:${color.gris_text};
    width:100%;
  }

`
