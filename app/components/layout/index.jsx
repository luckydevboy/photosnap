import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
