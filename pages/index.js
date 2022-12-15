import styles from '../styles/Home.module.css';
import data from '../data/books.json';
import Books from '../components/Books';

const Home = () => {
  return (
    <>     
      <div className='container mx-auto'>
        <Books data={data} />
      </div>
    </>
  );
}

export default Home;