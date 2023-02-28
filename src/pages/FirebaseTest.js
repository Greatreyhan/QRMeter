import { useEffect } from 'react';
import React from 'react'
import database from '../firebaseinit';

function FirebaseTest() {

    useEffect(()=>{
    let onDataChange = database.ref('/Amount').on('value', (snapshot)=>{
            console.log(snapshot.val());
          });
    
    },[])

    
  return (
    <div>FirebaseTest</div>
  )
}

export default FirebaseTest