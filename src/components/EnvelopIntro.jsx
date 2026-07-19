import React from 'react'
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import top from "./../images/envelop/top-side-envelop.webp";
import side from "./../images/envelop/side-envelop.webp";
import stamp from "./../images/envelop/stamp.webp";
import envelopDetailing from "./../images/envelop/envelop-detailing.webp"

export default function EnvelopeIntro() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-hidden">

        <div className="relative w-full h-[900px] cursor-pointer flex justify-center"
                onClick={() => setOpen(true)}>
            
            {/*Top Part*/}
            <img src={top} className={`absolute z-20 min-w-5xl max-w-5xl aspect-5/3
                top-0 transition-all delay-600 duration-1000 ease-in-out object-contain
                ${open ? "translate-y-[-150vh] opacity-0" : "-translate-y-30"}`}/>

            {/* Stamp Button */}
            <button onClick={() => setOpen(true)}
                className="absolute z-40 left-1/2 top-[320px] -translate-x-1/2">

                <img src={stamp} className={`w-40 h-40 transition-all duration-700 ease-in-out
                    ${open ? "scale-125 opacity-0" : "scale-100 opacity-100"}`}/>
            </button>

            {/* Bottom Part */}
            <img src={side} className={`absolute scale-y-[-1] z-10 min-w-5xl max-w-5xl aspect-5/3
                bottom-0 transition-all delay-600 duration-1000 ease-in-out object-contain
                ${open ? "translate-y-[150vh] opacity-0" : "translate-y-0"} `}/>

            {/* left Part */}
            <img src={side} className={`absolute -rotate-90 min-w-5xl max-w-5xl aspect-5/3
                bottom-0 transition-all delay-600 duration-1000 ease-in-out object-contain
                ${open ? "translate-x-[-150vh] opacity-0" : "-translate-y-53 -translate-x-60"} `}/>

            {/* right Part */}
            <img src={side} className={`absolute rotate-90 min-w-5xl max-w-5xl aspect-5/3
                bottom-0 transition-all delay-600 duration-1000 ease-in-out object-contain
                ${open ? "translate-x-[150vh] opacity-0" : "-translate-y-53 translate-x-60"} `}/>

            {/*Name*/}
            <div className={`flex flex-col justify-center items-center gap-4
                absolute z-40 left-1/2 top-[500px] -translate-x-1/2 transition-all 
                duration-700 ease-in-out font-amiri text-xl text-primary-foreground
                ${open ? "opacity-0" : "opacity-100"}`}>
                    <span className='text-4xl'>
                        هناء & حمزة
                    </span>
                    <img src={envelopDetailing} className='w-[188px]' />
            </div>

        </div>
</div>
  );
}