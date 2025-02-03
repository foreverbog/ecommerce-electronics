const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="spinner-border animate-spin inline-block w-12 h-12 border-4 rounded-full border-blue-600 border-t-transparent"></div>
      <span className="ml-4 text-xl font-semibold">Loading products...</span>
    </div>
  );
};

export default Loading;
