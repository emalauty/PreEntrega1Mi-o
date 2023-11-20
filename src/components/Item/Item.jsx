import { Link } from "react-router-dom";


export default function Item({id, name, img, price, stock}) {
  return (
    <article className="itemcard">
        <header className="itemheader">
            <h2>{name}</h2>
        </header>
        <picture>
            <img src={img} alt={name} className="itemimg"/>
        </picture>
        <section>
            <p className="pinfo">Precio ${price}</p>
            <p className="pinfo">Stock {stock}</p>
        </section>
        <footer className="itemfooter">
            <Link to={`/item/${id}`} className="option">
                Ver detalle
            </Link>
        </footer>
    </article>
  )
}
