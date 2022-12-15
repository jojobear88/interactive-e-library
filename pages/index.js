import styles from '../styles/Home.module.css';
import data from '../data/books.json';
import Books from '../components/Books';
import SearchBooks from '../components/SearchBooks';
import React, { useState } from 'react';

const Home = () => {
  const [searchString, setSearchString] = useState();

  const handleChange = (event) => {
    setSearchString(event.target.value);
  };

  return (
    <>     
      <div className='container mx-auto'>
        <SearchBooks handleChange={handleChange}></SearchBooks>
        <Books data={data} searchString={searchString}/>
      </div>
    </>
  );
}

export default Home;