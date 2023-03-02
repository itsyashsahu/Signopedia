import Header from '@/components/Header'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'

const ResultPage = () => {
    return (
        <div className='h-screen flex flex-col' style={{ "height": "100vh", "width": "100vw", "backgroundSize": "cover", "backgroundPosition": 'center 30%', "backgroundRepeat": "no-repeat", "backgroundImage": `url("./bg-without.webp")` }}>
            {/* Head and Meta Tags Setting the Title */}
            <Head>
                <title>Signopedia | Results</title>
            </Head>
            {/* Header Component */}
            <Header />
            {/* Body Section */}
            <section className=" flex-grow h-96">
                {/* Hero Section */}
                <div className="grid max-w-screen-xl px-4 pt-6 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 h-full">
                    {/* Results Section */}
                    <div className="mr-auto place-self-center lg:col-span-7">
                        <p className="max-w-2xl  text-white mb-2 md:text-lg lg:text-xl">Traffic sign is identified as - </p>
                        <h1 className="max-w-2xl mb-6 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">Wild Animal Crossing</h1>
                        <p className="max-w-2xl mb-6 text-white lg:mb-8 md:text-lg lg:text-xl">Be aware the wild animals can cross any time  </p>
                        {/* Upload Next Image Button */}
                        <a href="#" className="inline-flex items-center justify-center px-5 py-3 bg-white text-base font-medium text-center text-gray-900 border border-gray-300 rounded-xl hover:bg-gray-100 focus:ring-4 focus:ring-gray-100">
                            Upload Next Image
                        </a>
                    </div>
                    {/* Image Corresponding to the traffic sign */}
                    <div className="drop-shadow-2xl lg:mt-0 lg:col-span-5 lg:flex ">
                        <Image width={500} height={500} className="h-full max-w-lg mr-5 transition-all duration-300 rounded-lg cursor-pointer border-collapse" src="/bg.webp" alt="image description" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ResultPage