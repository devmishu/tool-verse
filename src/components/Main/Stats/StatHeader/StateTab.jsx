const StateTab = ({ activeTab, setActiveTab }) => {
    return (
        <div
            role="tablist"
            className="tabs tabs-box bg-transparent border border-gray-200 rounded-full overflow-hidden w-fit space-x-3"
        >
            {/* Products */}
            <a
                onClick={() => setActiveTab("Products")}
                role="tab"
                className={`tab rounded-full w-24
          ${activeTab === "Products" ? "tab-active bg-primary text-white" : ""}
        `}
            >
                Products
            </a>

            {/* Cart */}
            <a
                onClick={() => setActiveTab("Cart")}
                role="tab"
                className={`tab rounded-full w-24 
          ${activeTab === "Cart" ? "tab-active bg-primary text-white" : ""}
        `}
            >
                Cart()
            </a>
        </div>
    );
};

export default StateTab;