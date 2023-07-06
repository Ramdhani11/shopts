// import no_content from "@/assets/no-content.png";
import { BiSolidDashboard } from "react-icons/bi";
import { LuLayoutDashboard, LuPackage, LuPackageOpen } from "react-icons/lu";
import { DataDummy, DataSidebar } from "@/types";

// export const images = {
//   no_content,
// };

export const dataSidebar: DataSidebar[] = [
  {
    id: 1,
    title: "Dashboard",
    path: "/dashboard",
    iconActive: BiSolidDashboard,
    icon: LuLayoutDashboard,
  },
  {
    id: 2,
    title: "Barang",
    path: "/dashboard/barang",
    iconActive: LuPackageOpen,
    icon: LuPackage,
  },
];

export const dummyData: DataDummy[] = [
  {
    id: 1,
    namaBarang: "Kulkas",
    hargaBeli: 2390000,
    hargaJual: 2530000,
    stok: 10,
  },
  {
    id: 2,
    namaBarang: "Kursi Kayu Jati",
    hargaBeli: 1800000,
    hargaJual: 2000000,
    stok: 4,
  },
  {
    id: 3,
    namaBarang: "Lampu Gantung",
    hargaBeli: 130000,
    hargaJual: 150000,
    stok: 3,
  },
];

export const auth: { nama: string; email: string; password: string } = {
  nama: "super admin",
  email: "admin@gmail.com",
  password: "admin123",
};

export const succesLogin: { nama: string; token: string } = {
  nama: "super admin",
  token: "ini token",
};
