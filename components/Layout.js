import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({children}) => {
    return (
      <>     
          <Head>
            <title>NextJS Project</title>
            </Head>    
          <Header></Header>
          <main>{children}</main>
          <Footer></Footer>
      </>
    );
  }
  
  export default Layout;