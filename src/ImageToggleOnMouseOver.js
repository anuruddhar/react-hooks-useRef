import React, { useRef } from "react";

const ImageToggleOnMouseOver = ({ primaryImage, secondaryImage }) => {
    const imageRef = useRef(null);
    return (
        <div>
            <img
                src={primaryImage}
                onMouseOver={() => { imageRef.current.src = primaryImage }}
                onMouseOut={() => { imageRef.current.src = secondaryImage }}
                ref={imageRef}
                alt="" />
        </div>
    );
}

export default ImageToggleOnMouseOver;