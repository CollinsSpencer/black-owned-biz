import React, { useState } from 'react';
import {
  TextField,
  Button,
  Grid,
  Typography,
  Select,
  MenuItem,
} from '@material-ui/core';
import { bulkUpdateCategory } from '../helpers/db';
import { categories } from '../helpers/constants';

export const Admin = () => {
  const [oldCategoryKey, setOldCategoryKey] = useState('');
  const [newCategoryKey, setNewCategoryKey] = useState(
    Object.values(categories)[0].key
  );

  const handleSubmit = () => {
    const newCategory = Object.values(categories).find(
      (cat) => cat.key === newCategoryKey
    ).name;
    bulkUpdateCategory(oldCategoryKey, newCategoryKey, newCategory);
    setOldCategoryKey('');
    setNewCategoryKey('');
  };

  return (
    <Grid container justify='center'>
      <Grid item xs={12} sm={6} md={4}>
        <Grid container spacing={3} direction='column' alignItems='stretch'>
          <Grid item>
            <Typography variant='h6'>Update Category Key</Typography>
          </Grid>
          <Grid item>
            <TextField
              fullWidth
              helperText='Should be all lowercase with no spaces'
              label='Old Category Key'
              onChange={(event) => setOldCategoryKey(event.target.value)}
              value={oldCategoryKey}
              variant='outlined'
            />
          </Grid>
          <Grid item>
            <Select
              fullWidth
              label='New Category'
              onChange={(event) => setNewCategoryKey(event.target.value)}
              value={newCategoryKey}
              variant='outlined'
            >
              {categories &&
                Object.values(categories).map((cat) => (
                  <MenuItem value={cat.key}>{cat.name}</MenuItem>
                ))}
            </Select>
          </Grid>
          <Grid item>
            <Button onClick={handleSubmit} variant='contained' color='primary'>
              Update
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
