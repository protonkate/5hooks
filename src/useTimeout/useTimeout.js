import React, { useCallback, useEffect, useRef } from 'react'

export default function useTimeout(callback, delay) {
   //console.log(delay);
   const callbackRef = useRef(callback);
   const timeoutRef = useRef();

   console.log(timeoutRef.current);
   //console.log(callbackRef.current);

   //console.log(timeoutRef.current);

   //setTimeout(() => callbackRef.current(), delay);
   
   useEffect(() => { 
    callbackRef.current = callback;
   }, [callback]); 

   const set = useCallback(() => {
      timeoutRef.current = setTimeout(() => callbackRef.current(), delay);
   }, [delay]);

   const clear = useCallback(() => {
    timeoutRef.current && clearTimeout(timeoutRef.current);
   // clearTimeout(callbackRef.current);
   
    console.log('this is clear');
   }, [delay]);

   useEffect(() => {
    set(); 
    return clear;
   }, [delay, set, clear]); 
 
   const reset = useCallback(() => {
    clear();
    set();
   }, [clear, set]);

   return {reset, clear}
  
}
