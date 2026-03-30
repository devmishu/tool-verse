
const StateTab = () => {
    return (
        <div role="tablist" className="tabs tabs-box bg-transparent border border-gray-200 rounded-full overflow-hidden w-fit space-x-3">
            <a role="tab" className="tab rounded-full w-24 tab-active bg-primary text-white">Products</a>
            <a role="tab" className="tab rounded-full w-24 ">Cart()</a>
        </div>
    );
};

export default StateTab;