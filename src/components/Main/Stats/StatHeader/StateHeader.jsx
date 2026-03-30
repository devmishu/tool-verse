
import StateTab from './StateTab';
import Title from './Title';

const StateHeader = ({ activeTab, setActiveTab,carts }) => {
    return (
        <div className='flex flex-col items-center justify-center gap-4 '>
            <Title />
            <StateTab activeTab={activeTab} setActiveTab={setActiveTab} carts={carts} />
        </div>
    );
};

export default StateHeader;