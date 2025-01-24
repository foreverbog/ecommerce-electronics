const Search = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const search = (await searchParams).search;

  console.log(search);

  return <div>{search}</div>;
};
export default Search;
