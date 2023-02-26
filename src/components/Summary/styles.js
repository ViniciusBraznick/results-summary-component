import styled, { keyframes } from 'styled-components';

const slide = keyframes`
  from {
    transform: translateX(-50px);
    opacity: 0;
  }

  to{
    transform: translateX(0);
    opacity: 1;
  }
`

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding: 24px;
  background-color: #FFF;

  h3{
    font-size: 18px;
    color: #303B59;
  }

  ul{
    width: 100%;
    overflow: hidden;
    opacity: 0;
    animation: ${slide} 500ms 500ms forwards;
  }

  button{
    width: 100%; height: 56px;
    font-weight: 800;
    border-radius: 56px;
    color: #FFF;
    background-color: #303B59;

    &:hover{
      background: linear-gradient(0deg, #332DE9 0%, #6642FE 100%);
    }
  }
`;

export const SummaryIem = styled.li`
  width: 100%; height: 56px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-radius: 12px;
  background-color: ${({ background }) => background };

  & + & {
    margin-top: 18px;
  }

  .title{
    display: flex;
    align-items: center;
    gap: 4px;

    span{
      color: ${({ color }) => color };
    }
  }

  .score{
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 4px;
    color: #8B9499;

    strong{
      color: #303B59;
    }
  }
`
