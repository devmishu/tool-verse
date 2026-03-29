import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"

const navList = ['Products', 'Features', 'Pricing', 'Testimonials', 'FAQ'];


function App() {
  return (
    <>
      <Header navList={navList} />
      <Footer navList={navList} />
    </>
  )
}

export default App
