import React from "react";
import ImageToggleOnMouseOver from "../src/ImageToggleOnMouseOver"

const ImageChangeOnMouseOver = () => {
    return (
        <div>
            <ImageToggleOnMouseOver
                primaryImage="/static/Speakers/Speaker-187.jpg"
                secondaryImage="/static/Speakers/bw/Speaker-187.jpg"
                alt="" />
            &nbsp;&nbsp;&nbsp;
            <ImageToggleOnMouseOver
                primaryImage="/static/Speakers/Speaker-1124.jpg"
                secondaryImage="/static/Speakers/bw/Speaker-1124.jpg"
                alt="" />
        </div>
    );

};

export default ImageChangeOnMouseOver;