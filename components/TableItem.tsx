import { DataDummy } from "@/types";
import React from "react";

interface TableProps {
  data: DataDummy;
  modal: any;
}

const TableItem = ({ data, modal }: TableProps) => {
  return (
    <tr className="border-b-[2px] border-borderColor">
      <td className="px-8 py-4 font-custom-medium text-[14px] ">
        {data.namaBarang}
      </td>
      <td className="px-8 py-4"></td>
      <td className="px-8 py-4 font-custom-medium text-[14px]">
        Rp. {data.hargaBeli.toLocaleString()}
      </td>
      <td className="px-8 py-4 font-custom-medium text-[14px]">
        Rp. {data.hargaJual.toLocaleString()}
      </td>
      <td className="px-8 py-4 font-custom-medium text-[14px]">{data.stok}</td>
      <td className="px-8 py-4 font-custom-medium text-[14px]">
        <button
          type="button"
          onClick={() => modal(data.id)}
          className="bg-[#ffe9e4] text-[#e91c4d] font-custom-medium py-1 px-5 text-[14px] rounded-sm mr-[10px]"
        >
          Hapus
        </button>
      </td>
    </tr>
  );
};

export default TableItem;
