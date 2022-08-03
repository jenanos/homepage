import React from 'react'

export const Main = () => {
    return (
        <div className='w-full h-screen text-center'>
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                <div>

                    <p className='uppercase text-sm tracking-widest text-gray-600'>
                        Jobber med juss og teknologi
                    </p>
                    <h1 className='py-4 text-gray-700'>
                        Hei, jeg er <span className='text-[#fc9543]'>
                            Jens
                        </span>
                    </h1>
                    <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto'>
                        Jeg er jurist og teknolog og jobber som seniorrådgiver i Digitaliseringsdirektoratet.
                    </p>
                </div>
            </div>
        </div>
    )
}
