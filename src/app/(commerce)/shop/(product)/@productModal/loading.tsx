import { Modal } from "../../../../../components/commerce/singleProduct/Modal";

const Loading = () => {
  return (
    <Modal>
      <div className="flex justify-center items-center gap-4 h-dvh">
        <span className="loading loading-spinner loading-lg bg-primary"></span>
        <p className="text-2xl font-title animate-pulse">
          Loading Your Product!
        </p>
      </div>
    </Modal>
  );
};
export default Loading;
