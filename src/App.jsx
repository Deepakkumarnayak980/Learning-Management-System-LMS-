
import './App.css'
//import store from '../Redux/Slices/store.js';

import Footer from './components/Footer'

import Layout from './Layout/HomeLayout'


function App() {


  return (
    <>
     {/*<Routers>*/}
       { /* <Router path="/" element={<Home />}></Router> */}
     {/*</Routers>*/}
     <Footer />

     <Layout />

    </>
  )
}

export default App
