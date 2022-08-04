import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Navbar } from "react-bootstrap";

export const NavBarModify = styled(Navbar)`
  background-color: #403F3F;
`;

export const Logo = styled.img`
  width: 40px;
  height: 40px;
  margin-left: 10px;
  margin-right: 5px;
`;

export const TextLogo = styled(Navbar.Brand)`
  color: #FFF !important;
`;

export const ImgButtom = styled.img`
  width: 20px;
  height: 20px;
`;

export const ButtonLink =  styled.button`
       color: #fff;
      background-color: #4E4D4D;
      padding: 10px;
      border-radius: 4px;
      cursor: pointer;
      width: 20%;
      text-align: center;
      transition: 0.3s;
      margin-left: 5px;
      &:hover{
        color: #4E4D4D;
        background-color: #a7a6a6;
      }
`;

export const FormModify = styled.form`
  background-color: #4E4D4D;
  padding-left: 10px;
  padding-right: 10px;
  border: none;
  border-radius: 12px;
  input {
      padding: 10px;
      border: none;
      border-radius: 4px;
      text-align: center;
      width: 60%;
      background-color: #4E4D4D;
      color: #b0aeae;
      transition: 0.3s;
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
      width: 7em;
      margin: 0;
      border: none;
    }
    button {
      color: #fff;
      background-color: #4E4D4D;
      padding: 10px;
      border-radius: 4px;
      cursor: pointer;
      width: 15%;
    }
`;