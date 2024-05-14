// import { PrismaClient } from "@prisma/client";
// import { NextResponse } from "next/server";
// import prisma from "@/lib/PrismaClient";

// export const POST = async (req: Request, res: NextResponse) => {
//   const { helperID, helperName } = await req.json();

//   const new_helper = await prisma.helper.create({
//     data: {
//       helperID,
//       helperName,
//     },
//   });
//   return NextResponse.json(new_helper);
// };

// export const GET = async (req: Request, res: NextResponse) => {
//   const helpers = await prisma.helper.findMany();
//   return NextResponse.json(helpers);
// };
