import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Main from "./components/Main/Main";

const navList = ['Products', 'Features', 'Pricing', 'Testimonials', 'FAQ'];


function App() {
  return (
    <>
      <Header navList={navList} />
      <Main />
      <Footer navList={navList} />
    </>
  )
}

export default App
