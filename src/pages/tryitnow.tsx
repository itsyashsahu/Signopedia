import Header from '@/components/Header'
import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useState, ChangeEvent } from 'react'

const TryItNow = () => {
    const [img, setImg] = useState<File | null>(null);
    const handleSubmit = (e: any) => {
        e.preventDefault();
        const formData = new FormData();
        // formData.append('image', img);
        fetch('https://example.com/api/uploadImage', {
            method: 'POST',
            body: formData,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error(error))
    }

    useEffect(() => {
        if (img !== null) {
            // console.log("🚀 ~ TryItNow ~ img:", img)
            const formData = new FormData();
            formData.append('image', img);
            // console.log("🚀 ~ useEffect ~ formData:", formData)
            fetch('http://localhost:3000/api/model', {
                method: 'POST',
                body: formData,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
                .then(response => response.json())
                .then(data => console.log(data))
                .catch(error => console.error(error))

        }
    }, [img])

    return (
        <div className=' flex flex-col md:h-screen' style={{ "width": "100vw", "backgroundSize": "cover", "backgroundPosition": 'center 30%', "backgroundRepeat": "no-repeat", "backgroundImage": `url("./bg-without.webp")` }}>
            {/* Head and Meta Tags Setting the Title */}
            <Head>
                <title>Signopedia | Results</title>
            </Head>
            <Header />
            <section className=" md:flex-grow md:h-96 ">
                <div className="grid max-w-screen-xl place-self-center px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 h-full">
                    {/* <div className='place-self-center flex flex-col w-screen h-full'> */}

                    <div className=" px-3 py-5 md:p-0 lg:mt-0 lg:col-span-5 items-center justify-center flex h-96 w-full place-self-center">
                        <div className="flex items-center justify-center w-full  opacity-40">
                            <label className="flex flex-col bg-[#646964] items-center justify-center w-full h-96 border-2 border-gray-300 border-dashed rounded-[30px] cursor-pointer bg-gray-5 ">
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <svg aria-hidden="true" className="w-14 h-14 mb-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                    <p className="mb-2 text-sm text-white"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                    <p className="text-xs text-white ">PNG, JPG, JPEG</p>
                                </div>
                                <form onSubmit={handleSubmit}>
                                    <input id="dropzone-file" type="file" className="hidden" onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                        // console.log(e.target.value);
                                        const file = e.target.files?.[0];
                                        if (file) {
                                            // setSelectedFile(file);
                                            // setImg((e.target as HTMLInputElement).files?.[0]);
                                            setImg(file)
                                        }
                                    }} />
                                </form>
                            </label>
                        </div>
                    </div>

                    <div className=" py-10 text-left w-full md:w-fit px-3 md:p-0 ml-auto sm:text-right flex md:justify-between flex-col lg:col-span-7 h-96 place-self-center">
                        <div className=''>
                            <h1 className="max-w-2xl md:mb-28 mb-16 text-4xl font-extrabold tracking-tight md:text-5xl xl:text-6xl">Identify traffic<br /> sign instantly</h1>
                            <p className="max-w-2xl md:mb-6 mb-2 text-white lg:mb-8 md:text-lg lg:text-xl font-bold ">See our sample gallery</p>
                        </div>
                        <div className="flex items-center md:pl-16  justify-between h-16 py-3text-base font-medium text-center text-gray-900  rounded-xl">
                            <div className='h-16 w-16'>
                                <Image width={50} height={50} className="w-16 h-16 rounded-xl" src="/bg.webp" alt="Default avatar" />
                            </div>
                            <div className='h-16 w-16'>
                                <Image width={50} height={50} className="w-16 h-16 rounded-xl" src="/bg.webp" alt="Default avatar" />
                            </div>
                            <div className='h-16 w-16'>
                                <Image width={50} height={50} className="w-16 h-16 rounded-xl" src="/bg.webp" alt="Default avatar" />
                            </div>
                            <a href='/samplesgallery' className='h-16 w-16 bg-[#646964] rounded-xl flex justify-center items-center font-bold text-white text-lg'>
                                100+
                                {/* <Image width=50} height={50} className="w-16 h-16 rounded" src="/bg.webp" alt="Default avatar" /> */}
                            </a>

                        </div>
                    </div>
                    {/* </div> */}
                </div>
            </section>
        </div>
    )
}

export default TryItNow