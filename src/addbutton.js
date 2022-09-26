import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import {add, store} from './storeproduct';


export default function IconButtons(props) {
function handlClick(e) {
  console.log('handleClick')
  // store.dispatch(add(props.product))

  props.setProductList((prevState) => {
    if (prevState.includes(props.product)) {
      return prevState
    }

    else {
      const list = [...prevState, props.product]
      localStorage.setItem('productList', JSON.stringify(list))

      return list
    }
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