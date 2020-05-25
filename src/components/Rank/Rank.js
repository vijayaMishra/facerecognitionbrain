import React from 'react';

const Rank = ({name, entries}) => {
    return (
        <div>
            {/* <div className='white f3'>
                {'Vijaya, your current Rank is...'}
            </div>
            <div className='white f1'>
                {'#5'}
            </div> */}
            {`${name} , your current rank is...`}
                <div className='white f1 '>
                    {entries}
                </div>
        </div>
    );
}

export default Rank;