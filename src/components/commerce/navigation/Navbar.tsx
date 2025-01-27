import Link from "next/link";

import { FaShoppingCart } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";

const Navbar = () => {
  return (
    <>
      <nav className="bg-primary text-primary-foreground flex justify-between items-center p-4">
        <Link href="/shop">
          <TbBrandNextjs className="size-6" />
        </Link>

        <FaShoppingCart className="size-6" />
      </nav>
    </>
  );
};
export default Navbar;
