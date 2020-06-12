import React, { useState } from 'react';
import { saveBusiness } from '../helpers/db';

export const AddBizForm = () => {
  const [address, setAddress] = useState('');
  const [category, setCategory] = useState('');
  const [city, setCity] = useState('');
  const [description, setDescription] = useState('');
  const [email, setEmail] = useState('');
  const [facebook, setFacebook] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [state, setState] = useState('');
  const [website, setWebsite] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const business = {
      address,
      category,
      city,
      description,
      email,
      facebook,
      name,
      phone,
      state,
      website,
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
          Phone:
          <input
            placeholder='Phone'
            name='phone'
            type='text'
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
          ></input>
        </label>

        <label>
          Email:
          <input
            placeholder='Email'
            name='email'
            type='text'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
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
          Website URL:
          <input
            placeholder='Website URL'
            name='website'
            type='text'
            onChange={(e) => setWebsite(e.target.value)}
            value={website}
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
