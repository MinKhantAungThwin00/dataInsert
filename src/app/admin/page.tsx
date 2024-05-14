import Link from "next/link";
import ViewCustomers from "../componets/customerComponent/ViewCustomers";

export default function Home() {
  return (
    <div className="container m-auto">
      <div className="flex h-screen justify-between p-10">
        <div className="flex flex-col w-1/2 items-center justify-center">
          <Link
            href="/customer"
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            客追加
          </Link>
        </div>
        <ViewCustomers />
      </div>
      {/* <div className="flex h-screen justify-between p-10">
        <div className="flex flex-col w-1/2 items-center justify-center">
          <Link
            href="/helper"
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            ヘルパー追加
          </Link>
        </div>
        <ViewHelpers />
      </div> */}
    </div>
  );
}
