import React, { useState } from 'react';
import {
  Box,
  Button,
  CircularProgress,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@material-ui/core';

import { categories } from '../helpers/constants';
import { categoryToDisplayName } from '../helpers/utils';
import { Page } from '../components';
import { useBulkUpdateCategory } from '../helpers/db';

const Admin = () => {
  const [oldCategoryKey, setOldCategoryKey] = useState('');
  const [newCategoryKey, setNewCategoryKey] = useState();
  const { bulkUpdateCategory, loading } = useBulkUpdateCategory();

  const handleSubmit = () => {
    const newCategory = categoryToDisplayName(newCategoryKey);
    bulkUpdateCategory(oldCategoryKey, newCategoryKey, newCategory);
    setOldCategoryKey('');
    setNewCategoryKey('');
  };

  return (
    <Page title="Admin">
      <Grid container justify="center">
        <Grid item xs={12} sm={6} md={4}>
          <Grid container spacing={3} direction="column" alignItems="stretch">
            <Grid item>
              <Typography variant="h6">Update Category Key</Typography>
            </Grid>
            <Grid item>
              <TextField
                fullWidth
                helperText="Should be all lowercase with no spaces"
                label="Old Category Key"
                onChange={(event) => setOldCategoryKey(event.target.value)}
                value={oldCategoryKey}
                variant="outlined"
              />
            </Grid>
            <Grid item>
              <InputLabel id="new-category-select">New Category</InputLabel>
              <Select
                fullWidth
                id="new-category-select"
                label="New Category"
                labelId="new-category-select"
                onChange={(event) => setNewCategoryKey(event.target.value)}
                value={newCategoryKey}
                variant="outlined"
              >
                {categories &&
                  Object.values(categories).map((cat) => (
                    <MenuItem value={cat.key} key={cat.key}>
                      {cat.name}
                    </MenuItem>
                  ))}
              </Select>
            </Grid>
            <Grid item>
              <Button color="primary" disabled={loading} onClick={handleSubmit} variant="contained">
                {loading && (
                  <Box display="flex" mr={2}>
                    <CircularProgress size="1.5rem" />
                  </Box>
                )}
                Update
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Page>
  );
};

export default Admin;
