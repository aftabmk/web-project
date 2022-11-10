import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <>
            <div style={{'display':'flex','justifyContent':'center','alignItems':'center'}}>
            <Link to = '/' >Count down Timer</Link>
            <Link to = '/mobileView' >Mobile View</Link>
            <Link to = '/automation' >Home Automation</Link>
            </div>
        </>
     );
}
 
export default Navbar;