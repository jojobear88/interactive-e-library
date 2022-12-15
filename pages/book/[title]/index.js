import { useRouter } from 'next/router'
import data from '../../../data/books.json';

const Book = () => {
  const router = useRouter();
  const { title } = router.query;
  const bookData = data.filter((book) => book.title == title)[0];

  return (bookData ?
    <div className="grid grid-cols-4 gap-4 mx-auto m-4 flex flex-col items-center bg-white border rounded-lg shadow-md md:flex-row md:max-w-4xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <div className="col-span-1 flex flex-col items-center m-3">
        <img className="m-2 object-cover w-full rounded-lg h-100 md:h-auto md:w-48 md:rounded-none md:rounded-lg" src={bookData.img} alt=""/>
        <a className="w-100 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" href={bookData.url} >View more</a>
    </div>
    <div className="col-span-3 flex flex-col justify-between p-4 leading-normal">
        <div className="flex items-center justify-content-center">
        <h5 className="mb-2 mr-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{bookData.title}</h5>
        <span className="mr-2 font-normal text-gray-700 dark:text-gray-400">- {bookData.date}</span>
        <span className="font-normal text-gray-700 dark:text-gray-400">- {bookData.rating}</span>
        <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
        </div>
        <span className="mb-3 font-normal text-gray-700 dark:text-gray-400"><span className="font-bold">Author:</span> {bookData.author}</span>
        <span className="mb-3 font-normal text-gray-700 dark:text-gray-400"><span className="font-bold">Genre:</span> {bookData.genre}</span>
        <span className="mb-3 font-normal text-gray-700 dark:text-gray-400">{bookData.places}</span>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{bookData.overview}</p>
    </div>
    </div>
  : <></>)
}

export default Book