
const Footer = () => {
  const now = new Date();
    return (
      <>     
          <footer className="flex items-center justify-between flex-wrap p-6 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
            <span>By George Bernard</span>
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">Today is {now.getDate()}/{now.getMonth()+1}/{now.getFullYear()}</span>
          </footer>
      </>
    );
  }
  
  export default Footer;