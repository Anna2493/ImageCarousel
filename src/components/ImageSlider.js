import React, { useState } from 'react'
import { SliderData } from './SliderData'
import "./imageSlider.css"
import {FaArrowCircleRight, FaArrowCircleLeft} from 'react-icons/fa'


const ImageSlider = ({slides}) => {

    const [current, setCurrent] = useState(0) //sets current as 0
    const length = slides.length //the length is 4 = [0, 1, 2, 3]

    const nextSlide = () => {
        //function to change to next image
        //setCurrent(current === length - 1 ? 0 : current + 1)
        
        //current starts at 0
        //IF    (current = 3) 
        //THEN  set current to 0
        //ELSE  add 1 to current 
        if (current === length - 1) {
            setCurrent(0)
        }
        else {
            setCurrent(current + 1)
        }
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)

        // if (current === 0) {
        //     length = length - 1
        // }
        // else {
        //     setCurrent(current - 1)
        // }
    }

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null
    }

  return (
      <section className='slider'>
          <FaArrowCircleLeft className='left-arrow' onClick={prevSlide}/>
          <FaArrowCircleRight className='right-arrow' onClick={nextSlide}/>
        {SliderData.map((slide, index) => {
            return (
                <div className={index === current ? 'slide active' : 'slide'} key={index}>
                    {index === current && (<img src={slide.img} alt="image" className='img' />)}
                    
                </div>
                
            )
        })}
      </section>
  )
}

export default ImageSlider
