const { Link } = require("react-router-dom");
const Navbar = () => {
    return (
        <nav id='nav-wrap'>
            <a className='mobile-btn' href='#nav-wrap' title='Show navigation'>Show navigation</a>
            <a className='mobile-btn' href='#' title='Hide navigation'>Hide navigation</a>
            <ul id='nav' className='nav'>
                <li className='current'>
                    <a className='smoothscroll'>
                        <Link to="/">
                            Home
                        </Link>
                    </a>
                </li>
                <Link to="/login" style={{ padding: "10px" }}>
                    Logout
                </Link>
            </ul>
        </nav>
    );
};
export default Navbar;