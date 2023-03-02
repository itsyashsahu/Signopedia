import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
// import { ReactComponent as Logo } from "../assests/SvgIcons/Logo.svg"


const Header = () => {
    const ListItem = (item: String) => {
        const location = useRouter().pathname

        if ("/" + item.toLocaleLowerCase().replace(" ", "") == location)
            return (
                <li>
                    <Link href={`/${item.toLowerCase().replace(" ", "")}`} className="whitespace-nowrap block py-2 px-1 md:mx-3  md:py-0 text-white border-b md:hover:text-white">{item}</Link>

                    {/* <Link href={`/${item.toLowerCase().replace(" ", "")}`} className="whitespace-nowrap py-2 pl-3 pr-4 flex-nowrap flex text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">{item}</Link> */}
                </li>
            )
        else {
            return (
                <li>
                    <Link href={`/${item.toLowerCase().replace(" ", "")}`} className="whitespace-nowrap block py-2 px-1 md:px-3 md:p-0 text-gray-300 md:hover:text-white">{item}</Link>
                </li>
            )
        }
    }
    return (
        <nav className="z-20 sticky border-gray-200 px-6 md:px-24 py-4 rounded md:h-32 h-16 flex justify-center ">
            <div className="container flex flex-wrap items-end  mx-auto">
                <div className='h-12 flex'>
                    <Link href="/" className="flex items-center justify-center">
                        <svg className="h-6 w-6 md:h-10 md:w-10" viewBox="0 0 42 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21 30.4167C15.9167 30.4167 11.0416 28.3973 7.44711 24.8029C3.85267 21.2084 1.83333 16.3333 1.83333 11.25C4.35033 11.25 6.84269 11.7458 9.16809 12.709C11.4935 13.6722 13.6064 15.084 15.3862 16.8638C17.166 18.6436 18.5778 20.7565 19.541 23.0819C20.5042 25.4073 21 27.8997 21 30.4167ZM21 30.4167C26.0833 30.4167 30.9584 28.3973 34.5529 24.8029C38.1473 21.2084 40.1667 16.3333 40.1667 11.25C35.0833 11.25 30.2082 13.2693 26.6138 16.8638C23.0193 20.4582 21 25.3334 21 30.4167ZM26.7308 16.0417C26.864 13.3746 26.4211 10.7101 25.4322 8.22956C24.4432 5.74901 22.9316 3.51061 21 1.66667C19.0684 3.51061 17.5568 5.74901 16.5678 8.22956C15.5789 10.7101 15.136 13.3746 15.2692 16.0417" stroke="#FFFCFC" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>
                    <Link href='/' className="self-center md:text-xl text-md pl-2 md:pl-4 font-semibold whitespace-nowrap dark:text-white">Signopedia</Link>

                    <div className="items-center justify-between md:mt-1 mt-2 pl-6 md:pl-16 w-full md:flex md:w-auto">
                        <ul className="flex px-1 md:px-4 rounded-lg space-x-0 md:space-x-8 md:mt-0 text-xs md:text-sm md:font-medium md:border-0 dark:border-gray-700">
                            {ListItem("Samples Gallery")}
                            {ListItem("About Us")}
                        </ul>
                    </div>
                </div>

            </div>
        </nav>
    )
}

export default Header