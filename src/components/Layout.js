import React from "react";
// import Helmet from 'react-helmet'
// import { StaticQuery, graphql } from "gatsby"

import { enquireScreen } from "enquire-js";

import Footer from "./layout/Footer/Footer";
import Header from "./layout/Header/Header";
import Sidebar from "./layout/Sidebar/Sidebar";
import BackToTop from "./layout/BackToTop/BackToTop";
 
import Slider from "./slider/Slider";

import "typeface-roboto";
import "typeface-oswald";

import "../style.scss";

class Layout extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    const children = this.props.children;
    const full = this.props.full;
    const titulo = this.props.titulo;
   

    return (
      <div>
         <Header titulo={titulo}  />


 {full ? (
         <React.Fragment>
         {children}
         </React.Fragment>
      ) : (
          <section class="section">
    <div class="container">
  <div className="columns is-variable bd-klmn-columns is-6">
  <div className="column is-3">
        <Sidebar/>
  </div>
        <div className="column is-9">
        {children}
        </div>
        </div> 
         </div>
        </section> 
      )}


  
   
 


 
        
        
 


        <Footer />

        <BackToTop />
      </div>
    )
  }
}

export default Layout;
