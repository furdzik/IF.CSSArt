import styled, { css } from 'styled-components';

const commonStyles = css`
  position: absolute;
  bottom: 0;
`;

const Wrapper = styled.div`
  width: 440px;
  height: 300px;
  background: #eee;
`;

const CatWrapper = styled.div`
  bottom: 0;
  height: 258px;
  left: 55px;
  position: absolute;
  width: 308px;
  overflow: hidden;
`;

const HeadTop = styled.div`
  ${commonStyles};
  background: none repeat scroll 0 0 #353829;
  border-radius: 145px 145px 0 0 / 116px 116px 0 0;
  bottom: 133px;
  height: 116px;
  left: 10px;
  width: 288px;
  z-index: 2;
`;

const HeadBottom = styled.div`
  ${commonStyles};
  background: none repeat scroll 0 0 #4E5145;
  border-radius: 0 0 145px 145px / 0 0 62px 62px;
  bottom: 71px;
  height: 62px;
  width: 308px;
  z-index: 3;
`;

export {
  Wrapper,
  CatWrapper,
  HeadTop,
  HeadBottom
};
