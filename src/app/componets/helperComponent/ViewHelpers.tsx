// "use client";

// import { helperType } from "@/app/api/helper/type";
// import Link from "next/link";
// import { useEffect, useState } from "react";

// const ViewHelpers = () => {
//   const [helpers, setHelper] = useState<helperType[]>([]);
//   const [reload, setReload] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     const fetchHelpers = async () => {
//       setIsLoading(true);
//       {
//         const res = await fetch("/api/customer/");
//         const helpers = await res.json();
//         setHelpers(helpers);
//       }
//       setIsLoading(false);
//     };
//     fetchHelpers();
//   }, [reload]);

//   const handleReload = () => {
//     setReload(!reload);
//   };

//   return (
//     <div className="w-1/2 flex flex-col ">
//       <div className="flex justify-between mb-5">
//         <p className="text-center font-bold text-3xl">Supabase: User table</p>
//         {isLoading ? (
//           <p>Reloading...</p>
//         ) : (
//           <button
//             onClick={handleReload}
//             type="button"
//             className="bg-blue-500 text-white px-2 py-1"
//           >
//             Reload
//           </button>
//         )}
//       </div>
//       <div className="flex flex-col items-center justify-start">
//         {helpers.map((helper) => (
//           <Link
//             href={`/helper/login/${helper.id}`}
//             className="flex border-2 w-full px-2 py-1"
//           >
//             {JSON.stringify(helper)}
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ViewHelpers;
