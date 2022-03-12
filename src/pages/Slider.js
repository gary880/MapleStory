import React from "react";
import { motion} from "framer-motion";
import { useEffect, useState, useRef } from "react";
import SliderImg from "./SliderImg";
import './Slider.css'



const Slider = () => {

    const [width, setWidth] = useState(0);
    const carousel = useRef();
    useEffect(()=>{
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth )
    },[])

    return (
        <div className="css-Slider">
            <motion.div ref={carousel} className="carousel">
                <motion.div drag="x"
                    dragConstraints={{ right: 0 , left : -width}}
                    className="inner-carousel">
                    {SliderImg.map(image => {
                        return (
                            <motion.div className="slider-item" key={image}>
                                <img src={image} alt="" />
                            </motion.div>
                        );
                    })}

                </motion.div>
            </motion.div>
        </div>
    )
}

export default Slider;