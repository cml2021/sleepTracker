import React from 'react';
import Button from '../ui-components/Button';

function Home() {

    return (
        <div className='container'>
            <div className='title'>
                <h1>Sleep Diary</h1>
            </div>
            <Button buttonText={"Add log"} buttonPath={'/new-entry/date'}/>
        </div>
    )
};

export default Home;