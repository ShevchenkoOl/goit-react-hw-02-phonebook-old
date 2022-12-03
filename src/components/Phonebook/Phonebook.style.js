import styled from 'styled-components';

export const Container = styled.div`
max-width: 40%;

margin-right: auto;
margin-left: auto;
padding-bottom: 10px;
align-items: center;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
border-radius: 0.5rem;
`;

export const Title = styled.h2`
margin: 0;
padding-top: 15px;
padding-bottom: 15px;
text-align: center;
color: #000;
font-weight: bold;
font-size: 16px;
`;
export const H3 = styled.h3`
color: #000;
font-weight: bold;
font-size: 14px;
`;

export const List = styled.ul`
width: 100%;

padding: 0;
list-style: none;
display: flex;
gap: 25px;
display: flex;
justify-content: center;
`;

export const StatisticsList = styled.ul`
list-style: none;
display: flex;
flex-direction: column;
gap: 10px;
`;

export const Form = styled.form.attrs({ autocomplete: 'off' })`
  display: inline-flex;
  align-items: flex-end;
  gap: 12px;
  margin-top: 20px;
  margin-bottom: 16px;
  padding: 8px;
  border: 1px solid #2a2a2a;
  border-radius: 4px;
`;

export const Field = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Input = styled.input.attrs({ type: 'text' })`
  padding: 4px;
  font: inherit;
`;

export const Button = styled.button.attrs({ type: 'submit' })`
  padding: 4px 8px;
  cursor: pointer;
`;