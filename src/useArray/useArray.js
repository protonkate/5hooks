import { useState } from 'react'

export default function useArray(data) {
  const [array, setArray] = useState(data);

 function push(element) {
  const changedA = array;
     
  setArray([...changedA, element]);
 }

 function update(index, value) {

  const changedA = array;
  changedA.splice(index, 1, value);
  //console.log(changedA);
  setArray([...changedA]);

 }

 function remove(index) {
  const changedA = array;
  changedA.splice(index, 1);
  setArray([...changedA]);
 }

 function filter(fu) {
  const changedA = array;
  let newar = changedA.filter(fu);
  console.log(newar);
  setArray([...newar]);
 }


  return {array, push, update, remove, filter};
}
