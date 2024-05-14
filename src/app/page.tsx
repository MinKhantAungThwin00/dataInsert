"use client";

import CameraJsQR2 from "@/app/componets/CameraJsQR2";
import Link from "next/link";
import Image from "next/image";
import ViewCustomers from "./componets/customerComponent/ViewCustomers";
import ViewHelpers from "./componets/helperComponent/ViewHelpers";

export default function Home() {
  return (
    <div className="w-screen">
      <div className="bg-black text-white p-2 flex items-center justify-center">
        訪問介護時間管理
      </div>
      <div className="flex h-screen items-center justify-center">
        <CameraJsQR2 />
      </div>

      <div className="flex flex-col w-1/2 items-center justify-center">
        <Link
          href="/customer"
          className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          add new customer
        </Link>
      </div>
      <ViewCustomers />
      {/* 
      <div className="flex flex-col w-1/2 items-center justify-center">
        <Link
          href="/helper"
          className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          add new helper
        </Link>
      </div>
      <ViewHelpers /> */}
    </div>
  );
}
