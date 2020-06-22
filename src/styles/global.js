import { createGlobalStyle } from 'styled-components';
import Colors from '../utils/constants/Colors';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: ${Colors.primaryColor};
    background: ${Colors.primaryColor};
    background: linear-gradient(90deg, rgba(222,75,75,1) 0%, rgba(222,75,75,1) 35%, rgba(255,255,255,1) 35%);
    -webkit-font-smoothing: antialiased;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    box-sizing: border-box;
    padding-top: 50px;
    padding-left: 20px;
    padding-right: 20px;

    @media only screen and (max-width: 768px) {
      background: linear-gradient(180deg, rgba(222,75,75,1) 0%, rgba(222,75,75,1) 31%, rgba(255,255,255,1) 31%);
      background-repeat: no-repeat;
      padding-top: 40px;
      padding-top: 40px;
    }
    @media only screen and (min-width: 1250px) {
    background: linear-gradient(90deg, rgba(222,75,75,1) 0%, rgba(222,75,75,1) 40%, rgba(255,255,255,1) 40%);
    }

  }

  a {
    text-decoration: none;
  }

  .rccs {
    margin: 0;

    @media only screen and (max-width: 768px) {
      margin: 0 auto;
    }
  }

  .rccs__card {
    width: 364px;
    height: 233px;
    -webkit-box-shadow: 0px 23px 16px -20px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 23px 16px -20px rgba(0,0,0,0.75);
    box-shadow: 0px 23px 16px -20px rgba(0,0,0,0.75);

    @media only screen and (max-width: 768px) {
      width: 280px;
      height: 172px;
    }
  }
  

  .MuiSelect-icon {
    color: ${Colors.primaryColor} !important;
  }

  .MuiSelect-select:focus {
    background:white !important;
  }
`;
