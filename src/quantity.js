import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BasicTextFields(props) {

  function handleChange (e) {
    props.setProduct((prevState) => {
      return {...prevState, quantity: e.currentTarget.value}
    } )
  }

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="filled-basic" label="How many?" variant="filled" 
      onChange={handleChange}/>
      
    </Box>
  );
}