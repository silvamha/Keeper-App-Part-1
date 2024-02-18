import React from "react";
import headerFunction from "./Header";
import footerFunction from "./Footer";

const App = () => {
    return <div>
{headerFunction()} {Note()} {footerFunction()}
    </div>
}

const Note = () => {
    return <div className = "note">
        <h1 className = "h1">This is the note title</h1>
        <p className = "p" >This is the note content</p>
    </div>
}

export default App

