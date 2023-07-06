"use client";

import React, { useState, MouseEvent, useEffect } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { LuPackagePlus } from "react-icons/lu";
import { Modal, ModalDelete, TableItem } from "@/components";
import { DataDummy } from "@/types";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import { getDatas, hapusBarang } from "@/app/redux/slices/barangSlice";

const page = () => {
  const barang = useSelector((state: RootState) => state.barang.data);
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState<boolean>(false);
  const [deleteModal, setDeleteModal] = useState<boolean>(false);
  const [selectedId, setSelectedId] = useState<number>();

  useEffect(() => {
    dispatch(getDatas());
  }, [dispatch]);

  const modalDelete = (e: MouseEvent) => {
    e.preventDefault();
    setDeleteModal(!deleteModal);
  };

  const modalHandler = (e: MouseEvent) => {
    e.preventDefault();
    setShowModal(!showModal);
  };

  const deleteItem = () => {
    dispatch(hapusBarang(selectedId));
    setDeleteModal(!deleteModal);
  };

  const catchId = (id: number) => {
    setSelectedId(id);
    setDeleteModal(!deleteModal);
  };

  return (
    <>
      {deleteModal ? (
        <ModalDelete handlerModal={modalDelete} deleted={deleteItem} />
      ) : null}
      {showModal ? (
        <Modal modal={setShowModal} handlerModal={modalHandler} />
      ) : null}
      <div className="bg-white h-full w-full rounded-[20px] overflow-hidden relative">
        <div className="p-[20px] bg-white flex justify-between items-center">
          <span>Total Barang (120)</span>
          <div className="flex flex-row">
            <div className="flex flex-row border-[2px] border-borderColor rounded-md p-1  items-center mr-2">
              <BiSearchAlt2 className="mr-2 text-grey" />
              <input
                type="text"
                placeholder="Search"
                className="focus:outline-none"
              />
            </div>
            <div
              onClick={modalHandler}
              className="flex flex-row  bg-primary text-white rounded-md py-1 px-3  items-center font-custom-medium cursor-pointer hover:bg-[rgb(2,36,17)]"
            >
              <LuPackagePlus className="mr-2 " />
              Tambah Barang
            </div>
          </div>
        </div>

        <table className="table-auto w-full ">
          <thead>
            <tr className="bg-secondary w-full">
              <th className="px-8 py-4 text-left">Nama Barang</th>
              <th className="px-8 py-4 text-left">Foto Barang</th>
              <th className="px-8 py-4 text-left">Harga Beli</th>
              <th className="px-8 py-4 text-left">Harga Jual</th>
              <th className="px-8 py-4 text-left">Stok</th>
              <th className="px-8 py-4 text-left">Action</th>
            </tr>
          </thead>
          <tbody className="w-full">
            {barang.map((data: DataDummy) => {
              return <TableItem data={data} modal={catchId} />;
            })}
          </tbody>
        </table>
        <div className="border-t-[2px] border-borderColor p-[20px] bg-white w-full flex justify-between items-center absolute bottom-0">
          <h3 className="font-custom-medium text-[14px] text-grey">
            Menampilkan 1 - {barang.length} dari 100
          </h3>
          <div>1</div>
        </div>
      </div>
    </>
  );
};

export default page;
