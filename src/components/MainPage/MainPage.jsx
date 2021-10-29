import React from 'react';
// import { useIntl } from 'react-intl';

import Container from '../Container';
import Header from '../Header';
import Footer from '../Footer';

import Cat from '../cssArt/Cat';

import {
  List,
  ListItem,
  ElementWrapper
} from './MainPage.styles';
// import messages from './MainPage.messages';

const MainPage = () => {
  // const intl = useIntl();
  console.log('Main Page');
  return (
    <React.Fragment>
      <Header />
      <Container>
        <List>
          <ListItem>
            <ElementWrapper>
              <Cat />
            </ElementWrapper>
          </ListItem>
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
        </List>
      </Container>
      <Footer />
    </React.Fragment>
  );
};

export default MainPage;
