import React from "react";
import CommentField from "../../ui-components/CommentField";
import Button from "../../ui-components/Button";

function EntryComments({comments, setComments, payload}) {

    const placeholder = "How did you sleep? (optional)";

    const submitEntry = (e) => {
        e.preventDefault();
        console.log("Submit button clicked!")
    }

    // const saveEntry = async (e) => {
    //     e.preventDefault();
    //     const [date, bedtime, sleeptime, sleepdelay, awakenings, awakeningsDuration, waketime, uptime, qualityRating, comments] = payload;
    //     const data = {date, bedtime, sleeptime, sleepdelay, awakenings, awakeningsDuration, waketime, uptime, qualityRating, comments};
    //     const response = await fetch("/create", {
    //         method: "POST",
    //         body: JSON.stringify(data),
    //         headers: {
    //             "Content-type": "application/json"
    //         }
    //     })
    //     console.log(response);
    // }

    return (
        <div>
            <h2>Comments</h2>
            <CommentField placeholder={placeholder} comments={comments} setComments={setComments}/>
            <Button buttonText={"Submit"} isSubmit={true} onSubmit={submitEntry}/>
        </div>
    )
};

export default EntryComments;