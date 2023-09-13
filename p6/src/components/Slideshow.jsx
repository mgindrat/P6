import React from 'react';
import { useState } from 'react';
import ArrowRight from './../assets/right.svg'
import ArrowLeft from './../assets/left.svg'


function Slideshow({Slider}) {

    const [Index, setIndex] = useState(0)

    const nextSlide = () => {
        setIndex(Index + 1)
        if(Index === Slider.length - 1)
            setIndex(0)
    }

    const prevSlide = () => {
        setIndex(Index - 1)
        if(Index === 0)
            setIndex(Slider.length - 1)
    }

    return (
        <section style={{backgroundImage : `url(${Slider[Index]})`}} className='carousel'>
            {Slider.length > 1 && 
                <>
                    <img 
                        className='carousel_arrow carousel_arrow_right' 
                        src={ArrowRight} 
                        alt="next slider" 
                        onClick={nextSlide}
                    />
                    <img 
                        className='carousel_arrow carousel_arrow_left' 
                        src={ArrowLeft} 
                        alt="previous slider" 
                        onClick={prevSlide}
                    />
                    <p className='slideCount'>{Index + 1} / {Slider.length}</p>
                </>
            } 
        </section>
    )
}




export default Slideshow;