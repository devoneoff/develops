// import * as React from 'react';
// import { Routes, Route } from "react-router-dom";
// import FullCase from "./components/FullCase/FullCase";
// import './App.css';
// import Navbar from './components/Navbar/Navbar';
// import Person from './components/Person/Person';
// import About from './components/About/About';
// import Skills from './components/Skills/Skills';
// import Case from './components/Case/Case';
// import Dimploms from './components/Dimploms/Dimploms';
// import Contact from "./components/Contact/Contact";
// import Footer from "./components/Footer/Footer";

// const App = () => {
//     return (
//         <>
//             <Navbar />
//             <div className="container">
//                 <Person />
//                 <About />
//                 <Skills />
//                 <Case />
//                 <Dimploms />
//                 <Contact />
//             </div>
//             <Footer />
//             <Routes>
//                 <Route path="/" element={<Home />} />
//                 <Route path="fullcase" element={<FullCase />} />
//             </Routes>
//         </>
//     );
// };
// export default App;














import * as React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import FullCase from "./components/FullCase/FullCase";

const App = () => {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="fullcase" element={<FullCase />} />
            </Routes>
        </div>
    );
};
export default App;