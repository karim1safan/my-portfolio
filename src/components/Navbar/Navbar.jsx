import { useState } from "react";

import "./navbar.css";
import { navData } from "./navData";

function Navbar() {
  const [active, setActive] = useState("#");

  return (
    <nav>
      {navData.map(({ id, icon, ref }) => {
        const Icon = icon;
        return (
          <a
            key={id}
            href={ref}
            className={active === ref ? "active" : ""}
            onClick={() => setActive(ref)}
            data-tooltip={ref.slice(1).toUpperCase()}
          >
            <Icon />
          </a>
        );
      })}
    </nav>
  );
}

export default Navbar;
