
import StateTab from './StateTab';
import Title from './Title';

const StateHeader = () => {
    return (
        <div className='flex flex-col items-center justify-center gap-4 '>
            <Title />
            <StateTab />
        </div>
    );
};

export default StateHeader;