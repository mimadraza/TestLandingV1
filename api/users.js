import { PrismaClient } from "@prisma/client";
import { prisma } from "../lib/prisma";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "GET") {
    const users = await prisma.user.findMany();
    return res.status(200).json(users);
  }

  if (req.method === "POST") {
    const { email, name } = req.body;

    const user = await prisma.user.create({
      data: { email, name }
    });

    return res.status(201).json(user);
  }

  return res.status(405).json({ message: "Method not allowed" });
}
