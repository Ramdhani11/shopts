import React, { MouseEventHandler } from "react";
import { PiWarningBold } from "react-icons/pi";

interface HandleProps {
  handlerModal: any;
  deleted: any;
}

const ModalDelete = ({ handlerModal, deleted }: HandleProps) => {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.3)] h-screen w-screen top-0 left-0 z-10 flex justify-center items-center">
      <div className="px-5 py-2 bg-white rounded-[10px]">
        <div className="flex flex-col justify-center items-center">
          <PiWarningBold className="" color="#B70404" size="120px" />
          <h2 className="font-custom-bold ">Hapus Barang ?</h2>
        </div>

        <div className="flex justify-end my-2">
          <button
            type="button"
            onClick={handlerModal}
            className="bg-[#ffe9e4] text-[#e91c4d] font-custom-medium py-1 px-5 text-[14px] rounded-sm mr-[10px]"
          >
            Batal
          </button>
          <button
            type="button"
            onClick={() => deleted()}
            className="bg-primary text-[#fff] font-custom-medium py-1 px-5 text-[14px] rounded-sm"
          >
            Hapus
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalDelete;
