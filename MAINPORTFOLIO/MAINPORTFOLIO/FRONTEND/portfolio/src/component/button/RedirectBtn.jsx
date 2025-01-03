import React,{useContext,useState} from 'react';
import { useNavigate} from 'react-router-dom';
import styled from 'styled-components';
import { screen } from '../../context/screen';

const RedirectBtn= (props) => {
   const {sm}=useContext(screen)
   const StyledWrapper = styled.div`
  .scene {
   width: ${sm?"5em":"10em"};
   justify-content: center;
   align-items: center;
  }

  .cube {
   color: #ccc;
   cursor: pointer;
   font-family: 'Roboto', sans-serif;
   transition: all 0.85s cubic-bezier(.17,.67,.14,.93);
   transform-style: preserve-3d;
   transform-origin: 100% 50%;
   width:${sm?"6em":"10em"};
   height:${sm?"3em":"4em"};
  }

  .cube:hover {
   transform: rotateX(-90deg);
  }

  .side {
   box-sizing: border-box;
   position: absolute;
   display: inline-block;
   height:${sm?"3em":"4em"};
   width:${sm?"6em":"10em"};
   text-align: center;
   text-transform: uppercase;
   padding-top:${sm?"1em":"1.5em"};
   font-weight: bold;
  }

  .top {
   background: wheat;
   color: #222229;
   transform: rotateX(90deg) translate3d(0, 0, 2em);
   box-shadow: inset 0 0 0 5px #fff;
  }

  .front {
   background: #222229;
   color: #fff;
   box-shadow: inset 0 0 0 5px #fff;
   transform: translate3d(0, 0, 2em);
  }`;

    const naviGate=useNavigate()
  return (
    <StyledWrapper className='sm:text-md text-xs  '>
      <div className="scene" onClick={()=>{
      naviGate(props.path)
      }}>
        <div className="cube">
          <span className="side top ">{props.semiTitle}</span>
          <span className="side front">{props.title}</span>
        </div>
      </div>
    </StyledWrapper>
  );

}



export default RedirectBtn;
