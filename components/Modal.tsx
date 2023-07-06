"use client";

import { tambahBarang } from "@/app/redux/slices/barangSlice";
import { RootState } from "@/app/redux/store";
import { DataDummy } from "@/types";
import React, { MouseEventHandler, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

interface HandleProps {
  handlerModal: MouseEventHandler;
  modal: any;
}

const Modal = ({ handlerModal, modal }: HandleProps) => {
  const dispatch = useDispatch();
  const barang = useSelector((state: RootState) => state.barang.data);

  const [nama, setNama] = useState<string>();
  const [beli, setBeli] = useState<number>();
  const [jual, setJual] = useState<number>();
  const [stok, setStok] = useState<number>();

  const fileHandler = (e: any) => {
    const file = e.target.files[0];
    if (file.size >= 1e5) {
      alert("max size 100kb");
      console.log(file);
      return false;
    }
  };

  const submitHandler = (e: any) => {
    e.preventDefault();
    const filter = barang.map((data) => data.namaBarang);

    if (filter.includes(`${nama}`)) {
      alert(`${nama} sudah ada`);
    } else {
      dispatch(
        tambahBarang({
          namaBarang: nama,
          hargaBeli: beli,
          hargaJual: jual,
          stok,
        })
      );
      modal(false);
    }
  };

  return (
    <div className="absolute bg-[rgba(0,0,0,0.3)] h-screen w-screen top-0 left-0 z-10 flex justify-center items-center">
      <div className="px-5 py-2 bg-white rounded-[10px]">
        <h2 className="font-custom-bold text-center pb-2 mb-2 border-b-[2px] border-borderColor">
          Tambah Barang
        </h2>
        <div className="flex">
          <form className="w-[300px]">
            <h2 className="font-custom-medium text-[13px] color-black">
              Nama Barang
            </h2>
            <input
              required
              className="text-[13px] p-[4px] w-full outline-none border-[2px] border-borderColor my-[5px]"
              type="text"
              value={nama}
              onChange={(e: any) => setNama(e.target.value)}
            />
            <h2 className="font-custom-medium text-[13px] color-black">
              Harga Beli
            </h2>
            <input
              required
              className="text-[13px] p-[4px] w-full outline-none border-[2px] border-borderColor my-[5px]"
              type="number"
              value={beli}
              onChange={(e: any) => setBeli(e.target.value)}
            />
            <h2 className="font-custom-medium text-[13px] color-black">
              Harga Jual
            </h2>
            <input
              required
              className="text-[13px] p-[4px] w-full  outline-none border-[2px] border-borderColor my-[5px]"
              type="number"
              value={jual}
              onChange={(e: any) => setJual(e.target.value)}
            />
            <h2 className="font-custom-medium text-[13px] color-black">Stok</h2>
            <input
              required
              className="text-[13px] p-[4px] w-full outline-none border-[2px] border-borderColor my-[5px]"
              type="number"
              value={stok}
              onChange={(e: any) => setStok(e.target.value)}
            />
            <h2 className="font-custom-medium text-[13px] color-black">
              Upload file
            </h2>
            <input
              className="my-[5px] text-[12px] file:py-1 file:px-5  file:rounded-sm file:border-0 file:text-[12px] file:bg-secondary file:text-primary file:outlet-none border-0"
              type="file"
              onChange={fileHandler}
              accept="image/png,image/jpg"
            />

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
                onClick={submitHandler}
                className="bg-primary text-[#fff] font-custom-medium py-1 px-5 text-[14px] rounded-sm"
              >
                Simpan
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
