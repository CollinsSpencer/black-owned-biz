import React, { useState } from 'react';
import { saveBusiness } from '../helpers/db';

export const AddBizForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [facebook, setFacebook] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const business = {
      name,
      description,
      address,
      city,
      state,
      facebook,
      category,
    };
    saveBusiness(business);
  };

  return (
    <div>
      <h2>Add a listing</h2>
      <h4>These could be business locations or services.</h4>

      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            placeholder='Name'
            name='name'
            type='text'
            onChange={(e) => setName(e.target.value)}
            value={name}
          ></input>
        </label>

        <label>
          Description:
          <input
            placeholder='Description'
            name='description'
            type='text'
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          ></input>
        </label>

        <label>
          Address:
          <input
            placeholder='Address (or Food Truck)'
            name='address'
            type='text'
            onChange={(e) => setAddress(e.target.value)}
            value={address}
          ></input>
        </label>

        <label>
          City:
          <input
            placeholder='City'
            name='city'
            type='text'
            onChange={(e) => setCity(e.target.value)}
            value={city}
          ></input>
        </label>

        <label>
          State:
          <input
            placeholder='State'
            name='state'
            type='text'
            onChange={(e) => setState(e.target.value)}
            value={state}
          ></input>
        </label>

        <label>
          Facebook URL:
          <input
            placeholder='Facebook URL'
            name='facebook'
            type='text'
            onChange={(e) => setFacebook(e.target.value)}
            value={facebook}
          ></input>
        </label>

        <label>
          Category:
          <input
            placeholder='Category'
            name='category'
            type='text'
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          ></input>
        </label>

        <button type='submit'>Send</button>
      </form>
    </div>
  );
};
