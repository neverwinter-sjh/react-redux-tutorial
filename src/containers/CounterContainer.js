import React from 'react';
import { connect } from 'react-redux';
import Counter from 'src/components/Counter';
import { increase, decrease } from 'src/modules/counter';

const CounterContainer = ({ number, increase, decrease }) => {
  return <Counter number={number} onIncrease={increase} onDecrease={decrease} />;
};

export default connect(
  state => ({
    number: state.counter.number
  }),
  {
    increase,
    decrease
  }
)(CounterContainer);
