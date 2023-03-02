import React from 'react'
// import { ReactComponent as Logo } from "../assests/SvgIcons/Logo.svg"

const ListItem = (item: String, isSelected: boolean = false) => {
    if (isSelected)
        return (
            <li>
                <a href={`/${item.toLowerCase().replace(" ", "")}`} className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">{item}</a>
            </li>
        )
    else {
        return (
            <li>
                <a href={`/${item.toLowerCase().replace(" ", "")}`} className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">{item}</a>
            </li>
        )
    }
}

const Header = () => {
    return (
        <nav className="z-20 border-gray-200 px-16 sm:px-24 py-4 rounded h-32 flex justify-center ">
            <div className="container flex flex-wrap items-end  mx-auto">
                <div className='h-12 flex'>
                    <a href="/" className="flex items-center justify-center">
                        <svg width="42" height="32" viewBox="0 0 42 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21 30.4167C15.9167 30.4167 11.0416 28.3973 7.44711 24.8029C3.85267 21.2084 1.83333 16.3333 1.83333 11.25C4.35033 11.25 6.84269 11.7458 9.16809 12.709C11.4935 13.6722 13.6064 15.084 15.3862 16.8638C17.166 18.6436 18.5778 20.7565 19.541 23.0819C20.5042 25.4073 21 27.8997 21 30.4167ZM21 30.4167C26.0833 30.4167 30.9584 28.3973 34.5529 24.8029C38.1473 21.2084 40.1667 16.3333 40.1667 11.25C35.0833 11.25 30.2082 13.2693 26.6138 16.8638C23.0193 20.4582 21 25.3334 21 30.4167ZM26.7308 16.0417C26.864 13.3746 26.4211 10.7101 25.4322 8.22956C24.4432 5.74901 22.9316 3.51061 21 1.66667C19.0684 3.51061 17.5568 5.74901 16.5678 8.22956C15.5789 10.7101 15.136 13.3746 15.2692 16.0417" stroke="#FFFCFC" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </a>
                    <a href='/' className="self-center text-xl pl-4 font-semibold whitespace-nowrap dark:text-white">Signopedia</a>

                    <div className="items-center justify-between mt-1 pl-16 hidden w-full md:flex md:w-auto" id="navbar-cta">
                        <ul className="flex flex-col px-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:border-gray-700">
                            {ListItem("Samples Gallery")}
                            {ListItem("About Us")}
                        </ul>
                    </div>
                    <div className="flex">
                        <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>
                </div>

            </div>
        </nav>
    )
}

export default Header