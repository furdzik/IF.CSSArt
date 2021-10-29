import styled from 'styled-components';

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: -calc(${(props) => props.theme.layout.sidePadding} / 2);
`;

const ListItem = styled.li`
  position: relative;
  display: block;
  width: calc(25% - ${(props) => props.theme.layout.sidePadding});
  height: 30rem;
  border-radius: 1rem;
  background: ${(props) => props.theme.color.blue};
  border: 5px solid ${(props) => props.theme.color.blue};
  margin: calc(${(props) => props.theme.layout.sidePadding} / 2);
  overflow: hidden;
  // kolorki?
`;

const ElementWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 1rem;
  overflow: hidden;

`;

export {
  List,
  ListItem,
  ElementWrapper
};
