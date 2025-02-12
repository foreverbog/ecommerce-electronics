const Loading = () => {
  return (
    <div className="flex justify-center items-center gap-4 h-1/2">
      <span className="loading loading-spinner loading-lg bg-primary"></span>
      <p className="text-2xl font-title animate-pulse">Loading Your Product!</p>
    </div>
  );
};

export default Loading;
