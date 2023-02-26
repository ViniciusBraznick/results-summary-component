import React, { useEffect, useState } from 'react'
import { Container, Score } from './styles'

export default function Result() {
  const [counter, setCounter] = useState(0);

  function increment(i, limit){
    if(i > limit) return;
    setTimeout(function(){
      setCounter(i)
      increment(i+1, limit);
    },9)
  }

  useEffect(() => {
    increment(0,76);
  }, [])


  return (
    <Container>
      <h1>Your Result</h1>
      <Score>
        <h2>{counter}</h2>
        <small>of 100</small>
      </Score>
      <span>Great</span>
      <p>You scored higher than 65% of the people who haven taken these test</p>
    </Container>
  )
}
