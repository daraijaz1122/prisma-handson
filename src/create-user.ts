import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient()

async function main() {
    await prisma.user.create({
        data: {
            email: "johndoe@gmail.com",
            name:"john doe"
        }
    })
}
main()
    .then(async () => {
        console.log("done");
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit()
    })