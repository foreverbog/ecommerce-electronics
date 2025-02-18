"use client";

import { useCart } from "@/app/context/CartContext";

const CartBadge = () => {
  const { products } = useCart();

  return products && products?.length > 0 ? (
    <div className="badge badge-xs badge-accent absolute top-2 -right-2">
      {products.length}
    </div>
  ) : null;
};
export default CartBadge;
