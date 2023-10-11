import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import React from "react";
import { useHomeContext } from "./home-context";

const Home = () => {
  const { pageData } = useHomeContext();
  // console.log(pageData);
  return (
    <>
      <Header title={pageData.header.title} content={pageData.header.content} />
    
        <h1>
          Welcome to Gamify, your satisfaction is our sole and greatest
          achievement
        </h1>
     
      <Footer
        next={pageData.footer.next}
        prev={pageData.footer.prev}
        both={false}
      />
    </>
  );
};

export default Home;
