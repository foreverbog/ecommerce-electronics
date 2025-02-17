export default function ShopLayout({
  children,
  productModal,
}: Readonly<{
  children: React.ReactNode;
  productModal: React.ReactNode;
}>) {
  return (
    <>
      {productModal}
      {children}
    </>
  );
}
