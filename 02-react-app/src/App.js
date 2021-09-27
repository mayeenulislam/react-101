import React from 'react';
import Header from './components/Header'
import Article from './components/Article'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'

function App() {
  return (
    <React.Fragment>
      <Header />
      <Article />
      <Article />
      <Sidebar />
      <Footer />
    </React.Fragment>
  );
}

export default App;
