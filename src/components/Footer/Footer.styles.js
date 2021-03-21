import styled from 'styled-components';

const Wrapper = styled.footer`
  padding: calc(${(props) => props.theme.layout.sidePadding} / 2) 0;
  text-align: center;
`;

export {
  Wrapper
};
