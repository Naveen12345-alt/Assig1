import React from 'react'
import SliderComp from './slider'
import NewsComp from './newsComp'

function App() {
  return (
    <div>
      <SliderComp />
      <NewsComp />
    </div>
  )
}
// previously not working because react components needs to be in camelcase
export default App
