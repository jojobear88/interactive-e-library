import React, { useRef } from 'react';

const SearchBooks = (props) => {
    
    const inputRef = useRef();

    return (
      <>
      <div className='grid mx-auto'>
        
          <input type="search" name="q" 
            className="mb-3 mx-auto h-10 text-sm dark:text-white bg-white dark:bg-gray-900 border rounded-md px-3 focus:outline-none focus:bg-white focus:text-gray-900" 
            placeholder="Search..." autoComplete="off"
            onChange={props.handleChange}
            ref={inputRef}
          />
          </div>
      </>
    );
  }
  
  export default SearchBooks;