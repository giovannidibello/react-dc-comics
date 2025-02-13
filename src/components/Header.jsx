// Header.jsx

// array di link
const menuLinks = [
    { id: 1, name: "Characters", href: "#" },
    { id: 2, name: "Comics", href: "#" },
    { id: 3, name: "Movies", href: "#" },
    { id: 4, name: "TV", href: "#" },
    { id: 5, name: "Games", href: "#" },
    { id: 6, name: "Collectibles", href: "#" },
    { id: 7, name: "Videos", href: "#" },
    { id: 8, name: "Fans", href: "#" },
    { id: 9, name: "News", href: "#" },
    { id: 10, name: "Shop", href: "#" }
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
                            <li key={menuLink.id}><a href={menuLink.href}>{menuLink.name}</a></li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header >

    );
}