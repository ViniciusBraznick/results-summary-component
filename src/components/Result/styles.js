import styled from 'styled-components';

export const Container = styled.aside`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding: 24px;
  border-bottom-left-radius: 36px;
  border-bottom-right-radius: 36px;
  background: linear-gradient(0deg, #332DE9 0%, #6642FE 100%);

  @media (min-width: 500px) {
    border-radius: 36px;
  }

  h1{
    font-size: 18px;
    color: #CFC9FF;
  }

  span{
    font-size: 32px;
    font-weight: 600;
  }

  p{
    width: 225px;
    display: block;
    text-align: center;
    color: #C3BDFF;
  }
`;


export const Score = styled.div`
  width: 200px; height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 50%;
  color: #C3BDFF;
  background: linear-gradient(0deg, #332DE9 0%, #6642FE 100%);

  h2{
    font-size: 82px;
    font-weight: 800;
    color: #FFF;
  }

  small{
    font-size: 16px;
    font-weight: 700;
    color: #857BF9;
  }
`
