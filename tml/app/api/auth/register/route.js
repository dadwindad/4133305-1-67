import { PrismaClient } from "@prisma/client";
import { hash } from "bcrypt";

const prisma = new PrismaClient();

export async function POST(req) {
  const { email, name } = await req.json();
  const newUser = await prisma.user.create({
    data: {
      email,
      name: await hash(name, 10),
    },
  });

  try {
    return Response.json(
      {
        newUser,
      },
      { status: 200 }
    );
  } catch (err) {
    Response.json({ err }, { status: 500 });
  }
}
