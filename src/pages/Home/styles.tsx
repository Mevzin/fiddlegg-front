import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  h1 {
    color: #fff;
  }
  form {
    width: 500px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 30px;
    input {
      padding: 10px;
      border: none;
      border-radius: 4px;
      text-align: center;
      width: 60%;
      background-color: #4E4D4D;
      color: #b0aeae;
      transition: 0.3s;
      box-shadow: 0px 1px #000000;
      &:focus{
        color: #FFFFFF;
      }
    }
    select {
      color: #fff;
      text-align: center;
      align-items: center;
      background-color: #4E4D4D;
      padding: 10px;
      border-radius: 4px;
      width: 18%;
      margin: 0;
      border: none;
    }
    button {
      color: #fff;
      background-color: #4E4D4D;
      padding: 10px;
      border-radius: 4px;
      cursor: pointer;
      width: 20%;
    }
      
  }
  @media(max-width: 414px){
      form{
        width: 350px;
      }
      h1{
        font-size: 20px;
      }
    }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 700px;
  img {
    height: 83.49px;
  }
  span {
    font-size: 48px;
    color: #ffffff;
  }
  @media(max-width: 414px){
      width: 400px;
      span{
        font-size: 30px;
      }
    }
`;

export const Img = styled.img`
  margin-top: 10px;
  width: 100px;
  height: 100px;
  @media(max-width: 414px){
      width: 360px;
      height: 230px;
    }
`;

export const ContainerInner = styled.div`
  background-color: #403F3F;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 30px;
  padding-bottom: 30px;
  border-radius: 12px;
`;

export const ButtonLink =  styled.button`
  &:hover{
        color: #4E4D4D;
        background-color: #fff;
      }
`;