import React from 'react';
import PropTypes from 'prop-types';

import {
  Wrapper,
  CatWrapper,
  HeadTop,
  HeadBottom
} from './Cat.styles.js';

const Cat = (props) => (
  <Wrapper className={props.className}>
    <CatWrapper>
      <HeadTop />
      <HeadBottom />
    </CatWrapper>
  </Wrapper>
);

Cat.propTypes = {
  className: PropTypes.string
};

Cat.defaultProps = {
  className: ''
};

export default Cat;
