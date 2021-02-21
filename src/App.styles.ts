import styled, { createGlobalStyle } from 'styled-components';
import BGImage from './images/nattu-adnan.jpg'

export const GlobalStyle = createGlobalStyle`
  html{
    height: 100%;
  }

  body{
    background-image: url(${BGImage});
    background-size: cover;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
  }

  *{
    box-sizing: border-box;
    font-family: 'Catamaran', sans-serif;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  > p {
    color: #fff;
  }

  .score{
    color: #fff;
    font-size: 2rem;
    margin: 0;
  }

  h1 {
    font-family: Fascinate Inline, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    background-image: linear-gradient(180deg, #fff, #87f1ff);
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    filter: drop-shadow(2px 2px #0085a3);
    font-size: 70px;
    font-weight: 400;
    text-align: center;
    margin: 20px;
  }

  .start, .next, .difficultySelect{
    transition: all 0.3s ease;
    cursor: pointer;
    background: linear-gradient(180deg, #fff, #ffcc91);
    border: 2px solid #d38558;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
    :hover{
      color: #fff;
      text-shadow: 2px 0 0 #000, -2px 0 0 #000, 0 2px 0 #000, 0 -2px 0 #000, 1px 1px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000;
    }
  }

  .startContainer{
    display: flex;
    flex-direction: column;
  }

  .start {
    max-width: 200px;
  }

  .selectText{
    color: #fff;
    font-size: 1rem;
    margin: 0 0 0 5px;
  }

  .difficultySelect{
    margin-top: 0;
    position: relative;
  }

  .loaderAnimation {
    width: 100px;
  }
`;

export const DropDownContainer = styled.div`
  width: 10.5em;
  margin: 0 auto;
`;
export const DropDownHeader = styled.div`
  transition: all 0.3s ease;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(180deg, #fff, #ffcc91);
  border: 2px solid #d38558;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  height: 40px;
  margin: 20px 0;
  padding: 0 40px;
  font-size: 13.3333px;
  margin-top: 0;
  user-select: none;
  :hover{
    color: #fff;
    text-shadow: 2px 0 0 #000, -2px 0 0 #000, 0 2px 0 #000, 0 -2px 0 #000, 1px 1px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000;
  }
`;
export const DropDownListContainer = styled.div`
  
`;
export const DropDownList = styled.ul`
  cursor: pointer;
  padding: 0;
  margin: 0;
  padding-left: 0em;
  background: linear-gradient(180deg, #fff, #ffcc91);
  border: 2px solid #d38558;
  box-sizing: border-box;
  border-radius: 10px;
  font-size: 13.3333px;
  font-weight: 500;
  user-select: none;
  &:first-child {
    padding-top: 0.2em;
  }
`;
export const ListItem = styled.li`
  transition: all 0.3s ease;
  list-style: none;
  text-align: center; 
  padding-bottom: 0.6em;
  border-bottom: 1px solid rgba(0,0,0,0.25);
  :hover{
    color: #fff;
    text-shadow: 2px 0 0 #000, -2px 0 0 #000, 0 2px 0 #000, 0 -2px 0 #000, 1px 1px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000;
  }
`;