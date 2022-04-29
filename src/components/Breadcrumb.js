import { Link } from "react-router-dom";

export default function Breadcrumb({ title, product }) {
  return (
    <nav className="breadcrumb" aria-label="breadcrumbs">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {product && (
          <li>
            <Link to="/products">{product}</Link>
          </li>
        )}
        <li>
          <Link className="is-active" to="/products">
            {title}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
