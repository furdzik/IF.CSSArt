import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 0 calc(${(props) => props.theme.layout.sidePadding} / 2);
`;

export {
  Wrapper
};
