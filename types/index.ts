import { IconType } from "react-icons";

export interface NavbarProps {
  path: string;
}

export interface SidebarProps {
  path: string;
  datasSidebar: DataSidebar[];
}

export interface DataSidebar {
  id: number;
  title: string;
  path: string;
  iconActive: IconType;
  icon: IconType;
}

export interface DataDummy {
  id: number;
  namaBarang: string;
  hargaBeli: number;
  hargaJual: number;
  stok: number;
}
