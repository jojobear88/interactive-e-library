import Book from "./Book";

const Books = (data) => {
    // console.log(data.data);
    return (
      <>     
          {data.data.map((book) => 
            <Book props={book}></Book>
          )}
      </>
    );
  }
  
  export default Books;