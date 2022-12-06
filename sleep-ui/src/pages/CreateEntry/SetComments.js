import React from "react";
import CommentField from "../../ui-components/CommentField";
import Button from "../../ui-components/Button";
import {useNavigate} from "react-router-dom";

function SetComments({comments, setComments, payload}) {

    const navigate = useNavigate();

    const placeholder = "How did you sleep? (optional)";

    const saveEntry = async (e) => {
        e.preventDefault();
        const [date, timeIntoBed, sleeptime, sleepDelay, numberAwakenings, durationAwakenings, timeFinalAwakening, timeOutOfBed, qualityRating, comments] = payload;
        const data = {
            date: date,
            timeIntoBed: timeIntoBed,
            timeSleepAttempted: sleeptime,
            sleepDelay: sleepDelay,
            numberAwakenings: numberAwakenings,
            durationAwakenings: durationAwakenings,
            timeFinalAwakening: timeFinalAwakening,
            timeOutOfBed: timeOutOfBed,
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
        <div className="container">
            <div className="title">
                <h2>Comments</h2>
            </div>
            <CommentField placeholder={placeholder} comments={comments} setComments={setComments}/>
            <Button buttonText={"Submit"} isSubmit={true} onSubmit={saveEntry}/>
        </div>
    )
};

export default SetComments;