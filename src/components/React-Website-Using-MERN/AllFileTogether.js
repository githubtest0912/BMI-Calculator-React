import React from 'react';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';

import Home from './Home';
import Navbar from './Navbar';
import Services from './Services';

 
const AllFileTogether = () => {
    return (
        <div>
            <Navbar />
            <Home />
            <About />
            <Services />
            <Contact />
            <Footer />
          
        </div>
    );
}
 

 
export default AllFileTogether;