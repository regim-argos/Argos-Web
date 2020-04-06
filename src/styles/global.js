import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { darken } from 'polished';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700&display=swap');
  .regim-options{
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ccc7;
    width: 100%;
    padding-bottom: 5px;
    >:first-child{
        margin-right: 10px;
    }
    >span {
        font-size: 20px;
    }
  }
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    background: #F2F7E2;
    -webkit-font-smoothing: antialiased;
  }
  body, input, button, textarea {
    font-family: Helvetica, sans-serif;
    color: #170C3A;
  }
  #root {
    height: 100vh;
    margin: 0 auto;
    display: flex;
    justify-content: center;
  }
  button {
    cursor: pointer;
  }
  :root {
    --regim-primary: #53A687;
    --regim-primary-light: #C1D96C;
    --regim-primary-lighter: #DEF294;
    --regim-secondary-dark: #D99066;
    --regim-secondary: #F2B885;
    --primary-normal-color: #365DF0;
    --primary-dark-color: #2F55CC;
    --primary-darker-color: #244AA8;
    --primary-light-color: #9AAEF7;
    --primary-lighter-color: #B9C6FA;
    --primary-lightest-color: #CAD6FC;
    --primary-mostLightest-color: #E1E7FD;
    --gray-normal-color: #9e9e9e;
    --gray-dark-color: #757575;
    --gray-darker-color: #424242;
    --gray-light-color: #bdbdbd;
    --gray-lighter-color: #e0e0e0;
    --gray-lightest-color: #eeeeee;
    --gray-mostLightest-color: #f5f5f5;
    --success-normal-color: #12DB89;
    --success-dark-color: #10B26C;
    --success-darker-color: #0E995D;
    --success-light-color: #88EDC4;
    --success-lighter-color: #B7F7D8;
    --success-lightest-color: #B7F7D8;
    --success-mostLightest-color: #E7FBF3;
    --danger-normal-color: #F95E5A;
    --danger-dark-color: #CC4C4C;
    --danger-darker-color: #A53F3F;
    --danger-light-color: #FCAEAC;
    --danger-lighter-color: #FCC6C5;
    --danger-lightest-color: #FCD7D6;
    --danger-mostLightest-color: #FEEFEE;
    --warning-normal-color: #FFBB43;
    --warning-dark-color: #D89C3A;
    --warning-darker-color: #996C2B;
    --warning-light-color: #FFDDA1;
    --warning-lighter-color: ${darken(0.03, '#FFDDA1')};
    --warning-lightest-color: #FFDDA1;
    --warning-mostLightest-color: #FFF8EC;
    --regim-box: 0 0px 20px rgba(3, 27, 78, 0.1);
  }
`;
