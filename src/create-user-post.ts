import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main(){
    const user = await prisma.user.create({
        data: {
            email: "john@gmail.com",
            name: "john carter",
            posts: {
                create: [
                    {
                    title: "Code",
                    content: "You need to code daily",
                    published:true
                }, {
                    title: "Walk",
                    content: "You need walk daily",
                    published:true
                }
                ]
            }
        }
    })
    console.log(user)
}
main()
.then(async () => {
    console.log("done")
    await prisma.$disconnect()
})
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit()
})