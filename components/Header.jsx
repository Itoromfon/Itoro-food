import React from "react";
import Link from "next/link";

const Header = () => {
    return ( 
        <div>
            <nav>
                <ul className="flex justify-between p-5">
                    <li>
                        <Link href="#">Dashboard</Link>
                    </li>
                    <li>
                        <Link href="#">Welcome back, Itoro</Link>
                    </li>
                </ul>
            </nav>
        </div>
     );
}
 
export default Header;
