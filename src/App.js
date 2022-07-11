import {Routes,Route} from 'react-router-dom'
import Main from "./pages/Main"
import Services from "./pages/Services"
import Header from "./components/header/Header"
import Footer from './components/footer/Footer'
import "./index.css"


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/Services" element={<Services/>}/>
      </Routes>
       <Footer/>
    </div>
  );
}
export default App;
