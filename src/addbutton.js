import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';


export default function IconButtons(props) {
function handlClick(e) {
  console.log('handleClick')
  props.setProductList((prevState) => {
    return [...prevState, props.product]
      })
}


  return (
      <IconButton aria-label=""
      onClick={handlClick}
      id="demo-customized-plus">
        <AddCircleIcon />
      </IconButton>
  );
}