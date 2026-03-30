import { use, useState } from "react";
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Main from "./components/Main/Main";

const navList = ['Products', 'Features', 'Pricing', 'Testimonials', 'FAQ'];

const fetchItem = async () => {
  const res = await fetch('/itemData.json')
  return res.json();
}
const itemDataPromise = fetchItem();


function App() {
  const itemData = use(itemDataPromise);
  const [activeTab, setActiveTab] = useState("Products");

  return (
    <div className="space-y-60">
      <Header navList={navList} />
      <Main
        itemData={itemData}
        setActiveTab={setActiveTab}
        activeTab={activeTab}
      />
      <Footer navList={navList} />
    </div>
  )
}

export default App
