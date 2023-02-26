import { createGlobalStyle } from 'styled-components';

import HankenGroteskMedium from '../fonts/static/HankenGrotesk-Medium.ttf';
import HankenGroteskBold from '../fonts/static/HankenGrotesk-Bold.ttf';
import HankenGroteskExtraBold from '../fonts/static/HankenGrotesk-ExtraBold.ttf';


export default createGlobalStyle`
  @font-face {
    font-family: 'HankenGrotesk';
    font-weight: 400;
    font-style: 'normal';
    font-display: 'swap';
    src: url('${ HankenGroteskMedium }');
  }

  @font-face {
    font-family: 'HankenGrotesk';
    font-weight: 700;
    font-style: 'normal';
    font-display: 'swap';
    src: url('${ HankenGroteskBold }');
  }

  @font-face {
    font-family: 'HankenGrotesk';
    font-weight: 800;
    font-style: 'normal';
    font-display: 'swap';
    src: url('${ HankenGroteskExtraBold }');
  }


  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    color: #FFF;
    font-family: 'HankenGrotesk', Arial, Helvetica, sans-serif;
  }

  ul{
    list-style: none;
  }

  button{
    border: 0;
    background-color: transparent;
    cursor: pointer;
  }
`;
