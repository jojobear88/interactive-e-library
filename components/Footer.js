
const Footer = () => {
  const now = new Date();
  console.log(now);
    return (
      <>     
          <footer class="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
            <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">{now.getDate()}/{now.getMonth()+1}/{now.getFullYear()}</span>
            </footer>
      </>
    );
  }
  
  export default Footer;