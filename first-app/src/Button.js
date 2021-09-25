
import { useState } from "react";

function Button(prop) {
    return (
        <button className="addbtn">{prop.name}</button>
    );
}

export default Button;
