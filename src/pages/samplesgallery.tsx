import Header from '@/components/Header'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import dataJson from "../data.json"
import { Data } from "./resultpage"


const samplesgallery = () => {
    const data: Data = dataJson
    const router = useRouter();

    const handleRedirect = (depictedClass: string) => {
        router.push({
            pathname: '/resultpage',
            query: { class: depictedClass }
        })
    }
    return (
        <div className='flex flex-col bg-[#0c0d0c]' style={{ "width": "100vw", "backgroundSize": "cover", "backgroundPosition": 'center 30%', "backgroundRepeat": "no-repeat", "backgroundImage": `url("./bg-without.webp")` }}>
            {/* Head and Meta Tags Setting the Title */}
            <Head>
                <title>Signopedia | Samples Gallery</title>
            </Head>
            {/* Header Component */}
            <Header />
            {/* Body Section */}
            <div className='py-10 px-6 md:py-0 md:px-16 flex flex-col'>
                <section className="z-20 flex flex-col md:py-12 md:px-12 item-center justify-center">
                    {/* Title */}
                    <h1 className="max-w-2xl mb-2 md:mb-6 md:text-4xl text-xl font-extrabold tracking-tight leading-none xl:text-6xl">Samples Gallery </h1>
                    {/* Gallery Grid Section */}
                    <div className='flex place-self-center justify-between' >
                        <section>
                            <div className="relative items-center w-full py-2 md:py-6 px-18">
                                <div className="grid w-full grid-cols-1 md:gap-12 gap-4 mx-auto lg:grid-cols-3">
                                    {/* Gallery Items */}
                                    {
                                        Object.values(data).map((value, index) => {
                                            return (
                                                <Image key={index} width={400} height={400} className="w-full h-full transition-all duration-300 rounded-lg cursor-pointer border-collapse" src={value?.link ? "/images/" + value?.link : "/bg.webp"} alt="image description" onClick={() => handleRedirect((index + 1).toString())} />
                                            )
                                        })
                                    }

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