// "use client";

// import { useRouter } from "next/navigation";
// import { useState } from "react";

// const NewHelper = () => {
//   const router = useRouter();

//   const [helperName, setHelperName] = useState("");
//   const [isFetching, setIsFetching] = useState(false);

//   const handleSubmit = async () => {
//     setIsFetching(true);
//     {
//       const response = await fetch("/api/helper", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ helperName }),
//       });
//       const data = await response.json();
//     }
//     setIsFetching(false);

//     router.push("/admin");
//     router.refresh();
//   };

//   return (
//     <div className="flex flex-col space-y-10 w-1/2 p-10 items-center">
//       <form className="border-2 w-2/3 p-5">
//         <p className="text-center font-bold">Form (NewUser.tsx)</p>
//         ////////
//         <div className="flex flex-col mb-4">
//           <label htmlFor="name" className="mb-2">
//             helperName
//           </label>
//           <input
//             onChange={(event) => {
//               setHelperName(event.target.value);
//             }}
//             type="number"
//             name="name"
//             id="setHelperID"
//             className="border-2 p-2"
//           />
//         </div>
//         {isFetching ? (
//           <p className="text-center">Creating...</p>
//         ) : (
//           <button
//             type="button"
//             onClick={handleSubmit}
//             className="bg-blue-500 text-white px-2 py-1"
//           >
//             Submit
//           </button>
//         )}
//       </form>

//       <div className="flex flex-col w-full">
//         <p className="font-bold">REST-API Payload:</p>
//         <div className="border-2 items-center justify-center p-5 overflow-auto whitespace-normal">
//           {JSON.stringify({ helperName })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NewHelper;
