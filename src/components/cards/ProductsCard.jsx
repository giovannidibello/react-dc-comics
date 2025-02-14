// ProductsCard.jsx

export default function ProductsCard(props) {

    return (

        <div className="prod-card">
            <img src={props.productSrc} alt={props.productTitle} />
            <h3>{props.productTitle}</h3>
        </div>

    );
}