
import { Footer, Blog, WhatGPT3, Header } from './containers'
import { Cta, Brand, Navbar } from './components'
import './App.css'
import './index.css'

function App() {
  return (
    <main className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Cta />
      <Blog />
      <Footer />
    </main>
  );
}

export default App;
