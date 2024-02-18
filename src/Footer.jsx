import React from "react";

let currentDate = new Date();
let currentYear = currentDate.getFullYear();


const footerFunction =() => {
return <div className = "footer">
<footer>
<p className = "p"><span>Copyright &#169;</span> {currentYear}</p>    
</footer>
</div>
}

export default footerFunction