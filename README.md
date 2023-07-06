# Test Praktek

### Login

- Email : admin@gmail.com
- Password : admin123

## Kebutuhan

- Foto Barang ( X ) alasan dikarnakan susah untuk menyimpan sebuah gambar tanpa adanya server
- Nama Barang ( OK )
- Harga Beli ( OK )
- Harga Jual ( OK )
- Stok ( OK )

## Point utama

- Format foto hanya jpg dan png, dan ukuran max 100kb ( OK )

```javascript
<input type="file" onChange={fileHandler} accept="image/png,image/jpg" />
```

```javascript
const fileHandler = (e: any) => {
  const file = e.target.files[0];
  if (file.size >= 1e5) {
    alert("max size 100kb");
    console.log(file);
    return false;
  }
};
```

- Nama barang harus unik ( OK )

```javascript
/*

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
    */

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
```

- Harga beli, jual, dan stok harus number ( OK )

```javascript
<input
    require
    type="number"
    value={beli}
    onChange={(e: any) => setBeli(e.target.value)}
/>

<input
    require
    type="number"
    value={jual}
    onChange={(e: any) => setJual(e.target.value)}
/>

<input
    require
    type="number"
    value={stok}
    onChange={(e: any) => setStok(e.target.value)}
/>
```

- Ketika delete data, ada konfirmasi terlebih dahulu/Modal ( OK )

```javascript
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
```

## Poin Tambahan

- Tampilan data barang pagination dan search ( X ) alasan nya karna waktu belum mencukupi.
- Form barang menggunakan popup ( OK )

```javascript
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
```

- Menerapkan JWT ( OK ), saya menggunakan cookies untuk menangkap token dari backend

```javascript
const submitHandler = (event: SyntheticEvent) => {
  event.preventDefault();
  if (email !== auth.email) {
    alert("Email anda salah");
    return false;
  }
  if (password !== auth.password) {
    alert("Password anda salah");
    return false;
  }
  Cookies.set("token", succesLogin.token);
  Cookies.set("nama", succesLogin.nama);
  router.replace("/dashboard");
};
```

## 🔗 Links Deploy

https://shopts-w4pw-67alcdvtd-ramdhani11.vercel.app/
