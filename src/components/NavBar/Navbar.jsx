import { hola } from "./navbar.module.css";
import { contenedor } from "./navbar.module.css";
import { nombreTienda } from "./navbar.module.css";
import { contenedor1 } from "./navbar.module.css";
import { contenedor2 } from "./navbar.module.css";
import { categorias } from "./navbar.module.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";

export default function NavBar({count}) {
  return (
    <>
      <header>
        <nav className={contenedor}>
          <div className={contenedor1}>
          <Link to={"/"}>
            <h3 className={nombreTienda}>GlamStyle</h3>
          </Link>
          </div>
          <div className={categorias}>
          <ul>
            <li>
                <NavLink to={"/category/celular"}>Celulares</NavLink>
            </li>
            <li>
                <NavLink to={"/category/tablet"}>Tablets</NavLink>
            </li>
            <li>
                <NavLink to={"/category/notebook"}>Notebooks</NavLink>
            </li>
          </ul>
          </div>
          <CartWidget count={count} />
        </nav>
      </header>
    </>
  );
}