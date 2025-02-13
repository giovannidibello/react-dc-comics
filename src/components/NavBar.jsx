// NavBar.jsx

export default function NavBar(props) {

    const menuLinks = props.links;

    return (

        <nav>
            <ul>
                {menuLinks.map((menuLink) => (
                    <li key={menuLink.id}><a href={menuLink.href}>{menuLink.name}</a></li>
                ))}
            </ul>
        </nav>


    );
}