import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    await prisma.post.create({
        data: {
            title: "read prisma",
            content: "prisma is the best orm available in the market",
            published:true,
            author: {
                connect: {
                    id:2
                }
            }
        }
    })
}
main()
    .then(async () => {
        console.log("post added")
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit()
})