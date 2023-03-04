import './reset.css'
import Header from './Components/Header'
import Home from './Pages/Home'
import Footer from './Components/Footer'
import PessoaUsuaria from './Pages/PessoaUsuaria'
import Profissional from './Pages/Profissional'

function App() {


  return (
    <>
   <Header />
   <Home/>
   <PessoaUsuaria/>
   <Profissional/>
    <Footer/>
   </>
  )
}

export default App
