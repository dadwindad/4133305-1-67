import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req, { params }) {
  const user_id = Number(params.id);

  const allUsers = await prisma.user.findUnique({
    where: { id: user_id },
  });

  return Response.json(allUsers);
}

export async function DELETE(req, { params }) {
  try {
    const user_id = Number(params.id);
    const result = await prisma.user.delete({
      where: { id: user_id },
    });

    return Response.json({ des: "Deleted user:", result }, { status: 200 });
  } catch (err) {
    return Response.json({ err }, { status: 500 });
  }
}
