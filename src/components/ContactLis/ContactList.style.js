import styled from 'styled-components';

export const List = styled.ul`
  margin-top: 30px;
  color: var(--secondaryTextColor);
  font-weight: 500;
  font-size: 18px;
`;

export const Item = styled.li `
  display: flex;
  justify-content: space-between;
`;



export const Button = styled.button `
  max-width: 20%;
  height: auto; 
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  `;