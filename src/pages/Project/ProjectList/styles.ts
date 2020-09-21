import styled from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';
import theme from 'styles/theme';

export const Container = styled(PerfectScrollbar)`
  display: flex;
  padding: 20px 50px;
  flex-direction: column;
  height: 100%;
  background-color: ${theme.palette.lightWhiteColor.main};

  > div {
    display: flex;
    justify-content: flex-end;
  }
  > ul {
    display: flex;
    margin-top: 20px;
    list-style: none;
    flex-wrap: wrap;
    justify-content: center;
    > li {
      display: flex;
      width: 300px;
      margin: 20px;
      min-height: 200px;
      overflow: hidden;
      > div {
        display: flex;
        min-height: 100%;
        min-width: 100%;
        justify-content: center;
        > button {
          display: flex;
          min-height: 100%;
          min-width: 100%;
          align-items: center;
          > div {
            width: 100%;
            > h2 {
              overflow: hidden;
              text-overflow: ellipsis;
              width: 100%;
            }
          }
        }
      }
    }
  }
`;

// > li {
//   margin-top: 10px;
//   display: flex;
//   flex-grow: 1;
//   max-width: 300px;
//   min-height: 200px;
//   > div {
//     width: 100%;
//     height: 100%;
//     display: flex;
//     justify-content: center;
//     > button {
//       display: flex;
//       height: 100%;

//       width: 100%;
//       align-items: center;
//     }
//   }
// }
// > li + li {
//   margin-left: 20px;
// }
