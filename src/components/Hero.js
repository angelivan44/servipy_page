import { useState } from 'react'
import {Carousel} from 'react-bootstrap'
import logo from '../assets/tower.jpg'
import logo2 from '../assets/tower2.jpg'
import logo3 from '../assets/tower3.jpg'
import newLogo from '../assets/logo.svg'
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io'
import styled from '@emotion/styled'

function Hero() {
  const [iter, setIter] = useState(1)
  const changeBg = (acum)=>{
      if(acum =="up"){
        if(iter==3){
          setIter(1)
        }else {
          setIter(iter+1)
        }
      }else{
        if(iter==1){
          setIter(3)
        }else{
          setIter(iter-1)
        }
      }
    }
  
  return (
    <DivStyle count={iter}>
    <IoIosArrowBack onClick={()=>changeBg("up")} fill="#fff"></IoIosArrowBack>
    <img src={newLogo}></img>
    <IoIosArrowForward onClick={()=>changeBg("down")} fill="#fff"></IoIosArrowForward>
    </DivStyle>
    
    
  );
}

const setBg = {
  1:logo,
  2:logo2,
  3:logo3
}

const DivStyle = styled.div`
  background-image: url(${props => (setBg[props.count])});
  width:100vw;
  height:100vh;
  background-size: 100% 100%;
`
export default Hero;