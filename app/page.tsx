"use client";
import { auth, succesLogin } from "@/constant";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { SyntheticEvent, useState } from "react";

export default function Home() {
  const router = useRouter();

  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

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

  return (
    <main className="overflow-hidden">
      <div className="login center-content">
        <div className="w-[400px] bg-white px-[40px] py-[50px]">
          <h3 className="text-center text-primary font-custom-bold text-[22px]">
            Shop
          </h3>
          <h5 className="text-center font-custom-medium my-4">
            Login ke akun anda{" "}
          </h5>
          <form onSubmit={submitHandler}>
            <div className="flex flex-col">
              <label>Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="border-[1px] px-2 h-10 rounded-[5px] focus:login__form-focus"
                type="email"
              />
            </div>
            <div className="flex flex-col mt-2">
              <label>Password</label>
              <div className="relative w-[100%]">
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="border-[1px] px-2 h-10 rounded-[5px] focus:login__form-focus w-[100%]"
                  type="password"
                />
                <div
                  onClick={() => alert("Belum tersedia")}
                  className="cursor-pointer text-right font-custom-medium text-primary text-[14px]"
                >
                  Lupa password ?
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="h-10 rounded-[5px] w-full bg-primary my-4 text-white font-custom-bold"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
