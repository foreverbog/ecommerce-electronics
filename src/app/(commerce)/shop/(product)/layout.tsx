export default function ProductLayout({
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
