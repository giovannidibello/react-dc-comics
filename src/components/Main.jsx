import ProductsList from "./cards/ProductsList.jsx";

// Main.jsx
export default function Main() {
    return (
        <main>

            <div className="container">
                <section className="content">
                    <ProductsList />
                </section>
            </div>

            <section className="blue-strip">
                <div className="container">
                    <div className="icon">
                        <a href="#"><img src="./img/buy-comics-digital-comics.png" alt="Digital Comics" /> <span>Digital Comics</span></a>
                    </div>
                    <div className="icon">
                        <a href="#"><img src="./img/buy-comics-merchandise.png" alt="DC Merchandise" /> <span>DC Merchandise</span></a>
                    </div>
                    <div className="icon">
                        <a href="#"><img src="./img/buy-comics-subscriptions.png" alt="Subscription" /> <span>Subscription</span></a>
                    </div>
                    <div className="icon">
                        <a href="#"><img src="./img/buy-comics-shop-locator.png" alt="Comic Shop Locator" /> <span>Comic Shop Locator</span></a>
                    </div>
                    <div className="icon">
                        <a href="#"><img src="./img/buy-dc-power-visa.svg" alt="DC Power Visa" /> <span>DC Power Visa</span> </a>
                    </div>
                </div>
            </section>


        </main>
    );
}