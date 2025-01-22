export default function Home() {
  return (
    <div className="">
      <h1 className="h-24 font-title text-4xl">eCommerce</h1>
      <div className="flex  gap-4">
        <button className="btn  bg-primary text-primary-foreground font-content hover:bg-primary-lighter">
          Color 1
        </button>
        <button className="btn bg-secondary text-secondary-foreground font-content hover:bg-secondary-lighter hover:border-secondary">
          Color 2
        </button>
        <button className="btn bg-accent text-accent-foreground font-content hover:bg-accent-lighter">
          Color 2
        </button>

        <button className="btn bg-delete text-delete-foreground font-content hover:bg-delete-lighter">
          Color 2
        </button>
      </div>
    </div>
  );
}
