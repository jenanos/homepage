import Image from 'next/image'
import React from 'react'
import ProfileImg from '../public/pb-jao-sh.png'

function About() {
    return (
        <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
                <div className='col-span-2 ml-3'>
                    <p className='uppercase text-xl tracking-widest text-[#fc9543]'>
                        Om meg
                    </p>
                    <h1>
                        Hvem er jeg?
                    </h1>
                    <p>
                        Jens er jurist og teknolog og jobber som seniorrådgivar ved Nasjonalt ressurssenter for deling av data. Han har erfaring som programvareutviklar og har skrive ein publikasjon om innsyn i automatiserte avgjerder etter personvernforordninga. Jens er har ein mastergrad i rettsvitskap frå Universitet i Oslo og ein bachelorgrad i programmering og systemarkitektur frå Universitet i Oslo. Jens har særleg kompetanse på områda der juss møter teknologi, slik som personvern, maskinlæring, IT-sikkerhet og skytjenester.
                    </p>
                </div>
                <div className='m-3'>
                    <div className='max-w-xs mx-auto'>

                        <Image
                            src={ProfileImg}
                            alt='profilbilde av Jens Osberg'
                            className='rounded-xl'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;