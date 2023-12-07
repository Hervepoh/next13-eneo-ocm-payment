import { deletePayment, getById, getPayments, updatePayment } from "@/lib/data";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(request: Request, response: Response) {
  try {
    const prisma = new PrismaClient();
    const { searchParams } = new URL(request.url)
    //const query = searchParams.get('q')
    // const params = request.url.split("payment/");
    // const type = params[1];
    // const value = params[2];
    // console.log(params);
    // const payments = await prisma.payment.findMany({
    //   where: {
    //     OR:
    //       [
    //         {
    //           contract: {
    //             contains: params,
    //           },
    //         },
    //         {
    //           ref_bill: {
    //             contains: params,
    //           },
    //         },
    //         {
    //           ref_eneo: {
    //             contains: params,
    //           },
    //         },
    //         {
    //           ref_tango: {
    //             contains: params,
    //           },
    //         }
    //       ]
    //   },
    // });
    const payments = {"data":"data"}
    if (!payments) {
      return NextResponse.json({ message: "Error" }, { status: 404 });
    }
    return NextResponse.json({ message: "ok", payments }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred", error },
      {
        status: 500,
      }
    );
  }
}

export async function PUT(request: Request, response: Response) {
  try {
    const req = await request.json();
    console.log(req);
    //const { searchParams } = new URL(request.url)
    //const query = searchParams.get('q')
    const params = request.url.split("payment/")[1];
    const payment = updatePayment(params, req);
    if (!payment) {
      return NextResponse.json({ message: "Error" }, { status: 404 });
    }
    return NextResponse.json({ message: "ok", payment }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred", error },
      {
        status: 500,
      }
    );
  }
}

export async function DELETE(request: Request, response: Response) {
  try {
    //const { searchParams } = new URL(request.url)
    //const query = searchParams.get('q')
    const params = request.url.split("payment/")[1];
    const payment = deletePayment(params);
    return NextResponse.json({ message: "ok" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred", error },
      {
        status: 500,
      }
    );
  }
}
