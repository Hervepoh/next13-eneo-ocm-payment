import { addPayment, getPayments } from "@/lib/data";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(request: Request, response: Response) {
  const prisma = new PrismaClient();
  try {
    //const payments = await prisma.payment.findMany()
    const { searchParams } = new URL(request.url);
    const type = searchParams.get("type");
    const value = searchParams.get("value");

    let payments = {};

    if (type === "contract" && value) {
      if (value && value.includes(";")) {
        const list = value.split(";");
        payments = await prisma.payment.findMany({
          where: {
            contract: {
              in: list,
            },
          },
        });
      } else {
        payments = await prisma.payment.findMany({
          where: {
            contract: {
              contains: value,
            },
          },
        });
      }
    } else if (type === "bill" && value) {
      
      if (value && value.includes(";")) {
        const list = value.split(";");
        payments = await prisma.payment.findMany({
          where: {
            ref_bill: {
              in: list
            },
          },
        });
      } else {
        payments = await prisma.payment.findMany({
          where: {
            ref_bill: {
              contains: value,
            },
          },
        });
      }
    } else if (type === "tango" && value) {
      if (value && value.includes(";")) {
        const list = value.split(";");
        payments = await prisma.payment.findMany({
          where: {
            ref_tango: {
              in: list,
            },
          },
        });
      } else {
        payments = await prisma.payment.findMany({
          where: {
            ref_tango: {
              contains: value,
            },
          },
        });
      }
    } else {
      return NextResponse.json({ message: "Error" }, { status: 404 });
    }

    return NextResponse.json({ payments });
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred", error },
      {
        status: 500,
      }
    );
  }
}

export async function POST(request: Request, response: Response) {
  const { REGION } = await request.json();
  try {
    const payment = { ID: Date.now().toString(), REGION: REGION };
    addPayment(payment);

    return NextResponse.json({ message: "ok", payment }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred", error },
      {
        status: 500,
      }
    );
  }
}
