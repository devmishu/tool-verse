
import StateTab from './StateTab';
import Title from './Title';

const StateHeader = ({ activeTab, setActiveTab }) => {
    return (
        <div className='flex flex-col items-center justify-center gap-4 '>
            <Title />
            <StateTab activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
    );
};

export default StateHeader;