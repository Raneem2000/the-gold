import React from 'react'
import { useEffect } from 'react';
import axios from 'axios';

function Items() {
    useEffect(() => {
        axios.get('http://5.182.17.33:6060/api/Item/categories/all',{
            headers:{
                Accept: 'application/json',
                Authorization: 'Bearer ' ,
            },
        })
        .then(data => console.log(data));
    },[])
  return (
    <>

    </>
  )
}

export default Items