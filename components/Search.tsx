import React, { useState } from 'react'

function Search({ userInput }: any) {
    const [searchInput, setSearchInput] = useState<string>("");
    const [selectInput, setSelectInput] = useState<string>("contract");
    return (
        <div className='mt-5 z-10 flex gap-2 items-center justify-center'>
            <input
                id="search"
                name='search'
                type="text"
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder={'Search by '+ selectInput + ' reference'} 
                className='z-10 bg-white p-3 border-[1px] rounded-full px-5 w-[36%] shadow-lg outline-red-300'
            />
            <select  onChange={(e) => setSelectInput(e.target.value)} className="z-10 p-3 rounded-full shadow-lg outline-red-300 border-0 cursor-pointer drop-shadow-md bg-red-100 w-[180px] duration-300 hover:bg-white focus:bg-white">
                <option value="contract">Contract</option>
                <option value="bill">Bill number</option>
                <option value="tango">Tango Reference</option>
            </select>
            { searchInput? 
            (<button
                onClick={() => userInput(selectInput + '/' + searchInput)}
                className="bg-red-600 rounded-full p-3 shadow-md z-10  cursor-pointer hover:scale-105 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-white">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
                </svg>
            </button>) : null }

        </div>
    )
}

export default Search