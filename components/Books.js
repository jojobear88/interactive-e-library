import { useEffect, useState } from "react";
import Book from "./Book";

const Books = (data) => {
   
  const [bookData, setBookData] = useState(data.data)
    useEffect(() => {
      let searchString = data.searchString;
      if (data.searchString !== null && data.searchString !== undefined) 
      setBookData( data.data.filter((book) => book.title.includes(searchString) || book.author.includes(searchString)));
      else setBookData(data.data);
    },[data])

    return (
      <>     
          {bookData.map((book, index) => 
            <Book key={index} props={book}></Book>
          )}
      </>
    );
  }
  
  export default Books;