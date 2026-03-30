const StateTab = ({ activeTab, setActiveTab, carts }) => {
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

            {/* carts */}
            <a
                onClick={() => setActiveTab("cart")}
                role="tab"
                className={`tab rounded-full w-24 
          ${activeTab === "cart" ? "tab-active bg-primary text-white" : ""}
        `}
            >
                cart({carts.length})
            </a>
        </div>
    );
};

export default StateTab;