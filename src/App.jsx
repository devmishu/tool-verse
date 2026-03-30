import { use, useState } from "react";
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Main from "./components/Main/Main";
import Hero from '../src/components/Header/Hero/Hero'
import { ToastContainer } from "react-toastify";
const navList = ['Products', 'Features', 'Pricing', 'Testimonials', 'FAQ'];

const fetchItem = async () => {
  const res = await fetch('/itemData.json')
  return res.json();
}
const itemDataPromise = fetchItem();


function App() {
  const itemData = use(itemDataPromise);
  
  const [activeTab, setActiveTab] = useState("Products");
  const [carts, setCarts] = useState([]);

  return (
    <>
      <Header navList={navList} carts={carts} />
      <Hero/>
      <Main
        itemData={itemData}
        setActiveTab={setActiveTab}
        activeTab={activeTab}
        setCarts={setCarts}
        carts={carts}

      />
      <Footer navList={navList} />

      <ToastContainer />
    </>
  )
}

export default App
