import React from "react";
import Button from "../ui-components/Button";

function Home() {

    return (
        <div>
            <h1>How did you sleep?</h1>
            <Button buttonText={"New sleep log"} buttonPath={"/entry-date"}/>
        </div>
    )
}

export default Home;