import Footer from "./Footer";
import Header from "./Header";

const Layout = ({children}) => {
    return (
      <>     
          <Header></Header>
          <main>{children}</main>
          <Footer></Footer>
      </>
    );
  }
  
  export default Layout;