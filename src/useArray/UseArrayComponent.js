import React from 'react';
import useArray from './useArray';

export default function UseArrayComponent() {
   const {array, push, update, remove, filter} = useArray([1, 2, 3, 4]);

  return (
   <>
     <div>{array.join(", ")}</div>
     <button onClick={() => {push(7)}}>Add 7</button>
     <button onClick={() => {update(1, 9)}}>Change second element to 9.</button>
     <button onClick={() => {remove(1)}}>Remove second element.</button>
     <button onClick={() => {filter(el => el < 4)}}>Keep numbers less than 4.</button>
   </>
  )
}
 