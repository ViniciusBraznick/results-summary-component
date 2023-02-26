import styled from 'styled-components';

export const Wrapper = styled.main`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Container = styled.section`
  width: 100%;
  max-width: 740px;
  min-width: 320px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: auto;
  overflow: hidden;
  box-shadow:0px 2px 10px rgba(209, 209, 209, 0.40);
  background-color: #FFF;

  @media (min-width: 500px) {
    width: 90%;
    border-radius: 36px;
  }
`;
