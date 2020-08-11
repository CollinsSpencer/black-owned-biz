import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';

export default { title: 'Material-UI/Displays/Fonts' };

const useStyles = makeStyles(() => ({
  demoFont: {
    fontFamily: 'Heatwood',
    lineHeight: 2,
  },
}));

export const Headwood = () => {
  const classes = useStyles();
  return (
    <Box textAlign="center">
      <Typography className={classes.demoFont} variant="h3">
        Heatwood
      </Typography>

      <Typography variant="h6">Uppercase and Lowercase</Typography>
      <Typography className={classes.demoFont}>
        Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx
        Yy Zz
      </Typography>

      <Typography variant="h6">Number</Typography>
      <Typography className={classes.demoFont}>
        0 1 2 3 4 5 6 7 8 9 0
      </Typography>

      <Typography variant="h6">Punctuation</Typography>
      <Typography className={classes.demoFont}>
        . , / ? : ; &ldquo;&rdquo; &lsquo;&rsquo; [ ] {'{}'} \ | ` ~ ! @ # $ % ^
        & * ( ) _ - + =
      </Typography>
    </Box>
  );
};
