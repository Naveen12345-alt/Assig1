import React, {useState} from 'react'
import {Typography, Slider} from '@material-ui/core'
import SliderVal from './sliderVal'

function SliderComp() {
  // const valuetext = 'hi'
  // const marks = 37
  const defaultVal = [20, 10, 30]
  const [sliderVal1, setSliderVal1] = useState(defaultVal[0])
  const [sliderVal2, setSliderVal2] = useState(defaultVal[1])
  const [sliderVal3, setSliderVal3] = useState(defaultVal[2])
  return (
    <React.Fragment>
      <Typography id="discrete-slider-custom" gutterBottom>
        Custom marks
      </Typography>
      <SliderVal val={sliderVal1} />
      <Slider
        onChange={(e, val) => setSliderVal1(val)}
        defaultValue={defaultVal[0]}
        // getAriaValueText=
        aria-labelledby="discrete-slider-custom"
        step={10}
        valueLabelDisplay="auto"
        // marks={marks}
      />
      <SliderVal val={sliderVal2} />
      <Slider
        onChange={(e, val) => setSliderVal2(val)}
        defaultValue={defaultVal[1]}
        // getAriaValueText=
        aria-labelledby="discrete-slider-custom"
        step={10}
        valueLabelDisplay="auto"
        // marks={marks}
      />
      <SliderVal val={sliderVal3} />
      <Slider
        onChange={(e, val) => setSliderVal3(val)}
        defaultValue={defaultVal[2]}
        // getAriaValueText=
        aria-labelledby="discrete-slider-custom"
        step={10}
        valueLabelDisplay="auto"
        // marks={marks}
      />
    </React.Fragment>
  )
}

export default SliderComp
