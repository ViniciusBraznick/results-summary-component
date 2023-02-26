import React from 'react'
import { Container, SummaryIem } from './styles'

import { SummaryData } from './data'

export default function Summary() {
  return (
    <Container>
      <h3>Summary</h3>

        <ul>
          {SummaryData.map((item, index) => {
            return(
              <SummaryIem key={index} color={item.color.main} background={item.color.background}>
                <div className='title'>
                  <img src={item.image} alt={item.name}/>
                  <span>{item.name}</span>
                </div>

                <div className='score'>
                  <strong>{item.score}</strong> / <span>100</span>
                </div>
              </SummaryIem>
            )
          })}
        </ul>
      <button type='button'>Continue</button>
    </Container>
  )
}
