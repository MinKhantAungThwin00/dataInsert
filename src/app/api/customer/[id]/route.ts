import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import prisma from "@/lib/PrismaClient";

export const GET = async (
  req: Request,
  { params }: { params: { id: string } },
  res: NextResponse
) => {
  const id: number = parseInt(params.id);

  const customer = await prisma.customer.findFirst({ where: { id } });
  return NextResponse.json(customer);
};

export const PUT = async (
  req: Request,
  { params }: { params: { id: string } },
  res: NextResponse
) => {
  const id: number = parseInt(params.id);
  const { customerName } = await req.json();

  const customer = await prisma.customer.update({
    data: { customerName },
    where: { id },
  });
  return NextResponse.json(customer);
};

export const DELETE = async (
  req: Request,
  { params }: { params: { id: string } },
  res: NextResponse
) => {
  const id: number = parseInt(params.id);

  const customer = await prisma.customer.delete({
    where: { id },
  });
  return NextResponse.json(customer);
};
