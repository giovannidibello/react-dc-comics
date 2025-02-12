// Header.jsx
export default function Header() {
    return (

        <header>
            <div className="container">
                <div className="logo">
                    <img src="./img/dc-logo.png" alt="DC Logo" />
                </div>
                <nav>
                    <ul>
                        <li><a href="#">Characters</a></li>
                        <li><a href="#">Comics</a></li>
                        <li><a href="#">Movies</a></li>
                        <li><a href="#">TV</a></li>
                        <li><a href="#">Games</a></li>
                        <li><a href="#">Collectibles</a></li>
                        <li><a href="#">Videos</a></li>
                        <li><a href="#">Fans</a></li>
                        <li><a href="#">News</a></li>
                        <li><a href="#">Shop</a></li>
                    </ul>
                </nav>
            </div>
        </header >

    );
}