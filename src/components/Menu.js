import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Menu() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Example App 2</h1>
      <ul className="menu">
        <li>
          <a href="#/" onClick={() => navigate(-1)}>
            Geri
          </a>
        </li>
        <li>
          <Link to="/">Anasayfa</Link>
        </li>
        <li>
          <Link to="users">Kullanıcılar</Link>{" "}
        </li>
        <li>
          <Link to="contact">İletişim</Link>{" "}
        </li>
      </ul>
    </div>
  );
}

export default Menu;
