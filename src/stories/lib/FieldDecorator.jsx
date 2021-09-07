import React from 'react';
import { FieldWrap } from '../../index';

const styles = {
  padding: '8px',
};

const FieldDecorator = (storyFn) => (
  <div style={styles}>
    <FieldWrap size="full">
      <FieldWrap size="full_fluid">{storyFn()}</FieldWrap>
    </FieldWrap>
  </div>
);

export default FieldDecorator;
