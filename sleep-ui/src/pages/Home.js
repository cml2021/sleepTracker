import React from 'react';
import Button from '../ui-components/Button';

function Home() {

    return (
        <div>
            <Button buttonText={"Add log"} buttonPath={'/new-entry/date'}/>
        </div>
    )
};

export default Home;