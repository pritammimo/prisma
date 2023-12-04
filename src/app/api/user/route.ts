import prisma from "@/lib/prisma";
export async function GET() {
    // const users = await prisma.user.findMany({
    //     // where:{
    //     //     name:"John"
    //     // }
    //     // where:{
    //     //     // name:{
    //     //     //     startsWith:"J",
    //     //     //     endsWith:"n"
    //     //     // }
    //     // id:{
    //     //    // in:[1,2]
    //     //    not:{
    //     //     gt:3
    //     //    }
    //     // },
    //     // }
    //     where:{
    //         OR:[{
    //            id:{
    //                    not:{
    //         gt:2
    //        }
    //            } 
    //         },
    //            { name:{
    //             startsWith:"S",
    //         }
    //     }
    //         ]
    //     }
       
    // })
    const users=await prisma.user.findMany({
    where:{
        posts:{
            // some:{
            //     published:true
            // }
            none:{
                published:false
            }
        }
    }
    })
    return new Response(JSON.stringify(users));
}