// import { PrismaClient } from "@prisma/client";
// import { NextResponse } from "next/server";
// import prisma from "@/lib/PrismaClient";

// export const GET = async (
//   req: Request,
//   { params }: { params: { id: string } },
//   res: NextResponse
// ) => {
//   const id: number = parseInt(params.id);

//   const helper = await prisma.helper.findFirst({ where: { id: id } });

//   return NextResponse.json(helper);
// };

// export const PUT = async (
//   req: Request,
//   { params }: { params: { id: string } },
//   res: NextResponse
// ) => {
//   const id: number = parseInt(params.id);
//   const { helperID, helperName } = await req.json();

//   const helper = await prisma.helper.update({
//     data: { helperName },
//     where: { helperID },
//   });
//   return NextResponse.json(helper);
// };

// export const DELETE = async (
//   req: Request,
//   { params }: { params: { id: string } },
//   res: NextResponse
// ) => {
//   const id: number = parseInt(params.id);

//   const user = await prisma.helper.delete({
//     where: { id },
//   });
//   return NextResponse.json(user);
// };
