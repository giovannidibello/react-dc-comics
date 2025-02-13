// Header.jsx


export default function Header(props) {

    const menuLinks = props.links;

    return (

        <header>
            <div className="container">
                <div className="logo">
                    <img src="./img/dc-logo.png" alt="DC Logo" />
                </div>
                <nav>
                    <ul>
                        {menuLinks.map((menuLink) => (
                            <li key={menuLink.id}><a href={menuLink.href}>{menuLink.name}</a></li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header >

    );
}