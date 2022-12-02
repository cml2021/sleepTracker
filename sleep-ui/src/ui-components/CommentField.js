import React from "react";

function CommentField({placeholder, setComments}) {

    const onAddComments = (e) => {
        setComments(e.target.value)
    }

    return (
        <textarea 
            className="comment-field" 
            placeholder={placeholder} 
            onChange={onAddComments}
            />
    )
};

export default CommentField;