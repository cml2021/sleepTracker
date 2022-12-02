import React from "react";
import CommentField from "../../ui-components/CommentField";
import Button from "../../ui-components/Button";
import {useNavigate} from "react-router-dom";

function EntryComments({comments, setComments, payload}) {

    const navigate = useNavigate();

    const placeholder = "How did you sleep? (optional)";

    const saveEntry = async (e) => {
        e.preventDefault();
        const [date, bedtime, sleeptime, sleepdelay, awakenings, awakeningsDuration, waketime, uptime, qualityRating, comments] = payload;
        const data = {
            date: date,
            timeIntoBed: bedtime,
            timeSleepAttempted: sleeptime,
            numberAwakenings: awakenings,
            durationAwakenings: awakeningsDuration,
            timeFinalAwakening: waketime,
            timeUp: uptime,
            qualityRating: qualityRating,
            comments: comments
        };
        const response = await fetch("/create", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json"
            }
        })
        navigate("/");
    }

    return (
        <div>
            <h2>Comments</h2>
            <CommentField placeholder={placeholder} comments={comments} setComments={setComments}/>
            <Button buttonText={"Submit"} isSubmit={true} onSubmit={saveEntry}/>
        </div>
    )
};

export default EntryComments;