// Header.jsx
import NavBar from "./NavBar";

export default function Header(props) {

    const { links } = props;

    return (

        <header>
            <div className="container">
                <div className="logo">
                    <img src="./img/dc-logo.png" alt="DC Logo" />
                </div>
                <NavBar links={links} />
            </div>
        </header >

    );
}