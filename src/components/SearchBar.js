import React from 'react'

export default function SearchBar() {
    return (
      <>
      <input
        placeholder='Search...'
        type='text'
        className='search-bar'
            />
            <style jsx="true">{`
                .search-bar {
                    width: fit-content;
                    height: 30px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    padding: 5px;
                    padding-left: 10px;
                    font-size: 14px;
                    font-family: inherit;
                }

                .search-bar:focus{
                    outline: none;
                }
            `}</style>
      </>
  )
}
