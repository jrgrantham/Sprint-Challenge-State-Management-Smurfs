import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../state/actionCreators';

export function Form({ formValues, changeInput }) {
  const onValueChange = event => {
    changeInput(event.target);
  };

  const onFormSubmit = event => {
    event.preventDefault();
    alert(`submitting`);
  };

  return (
    <form className='component' onSubmit={onFormSubmit}>
      <label>Name
        <input
          name='name'
          placeholder='enter name'
        />
      </label><br />

      <label>Height
        <input
          name='height'
          placeholder='enter height'
        />
      </label><br />

      <label>Age
        <input
          name='age'
          placeholder='enter age'
        />
      </label><br />

      <input type='submit' />
    </form>
  );
}

export default connect(
  state => state,
  actionCreators,
)(Form);
