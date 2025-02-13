// Header.jsx

// array di link
const menuLinks = [
    { name: "Characters", href: "#" },
    { name: "Comics", href: "#" },
    { name: "Movies", href: "#" },
    { name: "TV", href: "#" },
    { name: "Games", href: "#" },
    { name: "Collectibles", href: "#" },
    { name: "Videos", href: "#" },
    { name: "Fans", href: "#" },
    { name: "News", href: "#" },
    { name: "Shop", href: "#" }
];

export default function Header() {
    return (

        <header>
            <div className="container">
                <div className="logo">
                    <img src="./img/dc-logo.png" alt="DC Logo" />
                </div>
                <nav>
                    <ul>
                        {menuLinks.map((menuLink) => (
                            <li><a href={menuLink.href}>{menuLink.name}</a></li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header >

    );
}