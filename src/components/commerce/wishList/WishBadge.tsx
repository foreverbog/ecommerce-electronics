"use client";

import { useWishList } from "@/app/context/WishListContext";

const WishBadge = () => {
  const { wishProducts } = useWishList();

  return wishProducts && wishProducts?.length > 0 ? (
    <div className="badge badge-xs badge-accent absolute top-2 -right-2">
      {wishProducts.length}
    </div>
  ) : null;
};
export default WishBadge;
