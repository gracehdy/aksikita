import "dotenv/config";

import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({
  adapter,
});

async function main() {

  // CREATE USER
  const user = await prisma.users.create({
    data: {
      id: "USR001",
      email: "bibi@gmail.com",
      username: "bibi",
      display_name: "Bibi Jojo",
      password: "hashedpassword"
    }
  });

  console.log("User berhasil dibuat:");
  console.log(user);

  // READ USER
  const users = await prisma.users.findMany();

  console.log("Daftar user:");
  console.log(users);
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });