import Header from '@/components/Header'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'

const samplesgallery = () => {
    return (
        <div className='flex flex-col bg-[#0c0d0c]' style={{ "width": "100vw", "backgroundSize": "cover", "backgroundPosition": 'center 30%', "backgroundRepeat": "no-repeat", "backgroundImage": `url("./bg-without.webp")` }}>
            {/* Head and Meta Tags Setting the Title */}
            <Head>
                <title>Signopedia | Samples Gallery</title>
            </Head>
            {/* Header Component */}
            <Header />
            {/* Body Section */}
            <div className='px-16 flex flex-col'>
                <section className="z-20 flex flex-col py-12 px-12 item-center justify-center">
                    {/* Title */}
                    <h1 className="max-w-2xl mb-6 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">Samples Gallery </h1>
                    {/* Gallery Grid Section */}
                    <div className='flex place-self-center justify-between' >
                        <section>
                            <div className="relative items-center w-full py-6 px-18">
                                <div className="grid w-full grid-cols-1 gap-12 mx-auto lg:grid-cols-3">
                                    {/* Gallery Items */}
                                    <Image width={400} height={400} className="w-full h-full transition-all duration-300 rounded-lg cursor-pointer border-collapse" src="/bg.webp" alt="image description" />
                                    <Image width={400} height={400} className="w-full h-full transition-all duration-300 rounded-lg cursor-pointer border-collapse" src="/bg.webp" alt="image description" />
                                    <Image width={400} height={400} className="w-full h-full transition-all duration-300 rounded-lg cursor-pointer border-collapse" src="/bg.webp" alt="image description" />
                                    <Image width={400} height={400} className="w-full h-full transition-all duration-300 rounded-lg cursor-pointer border-collapse" src="/bg.webp" alt="image description" />
                                    <Image width={400} height={400} className="w-full h-full transition-all duration-300 rounded-lg cursor-pointer border-collapse" src="/bg.webp" alt="image description" />
                                </div>
                            </div>
                        </section>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default samplesgallery