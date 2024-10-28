import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seed() {
  const user = await prisma.user.create({
    data: {
      name: 'User1',
      email: 'sample@email.com',
    },
  });
  console.log(`User created: ${user.name} (${user.email})`);
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
