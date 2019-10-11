import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../state/actionCreators';

export function SmurfForm({ form, changeInput, giveSmurf }) {
  
  const onValueChange = event => {
    changeInput(event.target);
  };

  const onFormSubmit = event => {
    event.preventDefault();
    giveSmurf();
  };

  return (
    <form className='component' onSubmit={onFormSubmit}>
      <label>Name
        <input
          name='name'
          value={form.name}
          onChange={onValueChange}
          placeholder='enter name'
        />
      </label><br />

      <label>Height
        <input
          name='height'
          value={form.height}
          onChange={onValueChange}
          placeholder='enter height'
        />
      </label><br />

      <label>Age
        <input
          name='age'
          value={form.age}
          onChange={onValueChange}
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
)(SmurfForm);
