import React from 'react' ;
import Delivery from './pages/Delivery';
import Navbar from './components/Navbar' ;
import { ThemeProvider } from '@material-ui/core/styles' ;
import theme from './theme' ;
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";






function App() {

  return (
    <ThemeProvider theme={theme}> 
      <Router>
        <Navbar />
       <Routes>
         <Route path='/' element={<Delivery/>} />
       </Routes>
     </Router>
    </ ThemeProvider > 
    
    
  );
}

export default App;
