import styled from 'styled-components';

export const FeedbackList = styled.ul`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
`;

export const TotalValue = styled.div`
  text-align: center;
  font-weight: 700;
  & > p > span {
    font-weight: 400;
  }
`;
