"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

import { IoIosClose } from "react-icons/io";

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    dialogRef.current?.showModal();
  }, []);

  const closeModal = (e: React.MouseEvent<HTMLDialogElement, MouseEvent>) =>
    e.target === dialogRef.current && router.back();

  console.log(dialogRef);

  return (
    <dialog
      ref={dialogRef}
      onClick={closeModal}
      onClose={router.back}
      className="backdrop:bg-black/60 backdrop:backdrop-blur-sm rounded-md lg:w-4/5"
    >
      <IoIosClose
        onClick={() => dialogRef.current?.close()}
        className="size-10 float-right m-4 text-base-content cursor-pointer hover:scale-105 active:scale-95 transition-all duration-300"
      />

      <div>{children}</div>
    </dialog>
  );
}
