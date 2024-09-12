import { AuthCredentialValidation } from "../lib/validators/AccounValidationCredentials";
import { publicProcedure, router } from "./trpc"
import { getPayloadClient } from "../getPayLoad";
import { TRPCError } from "@trpc/server";


export const authRouter = router({
    createPayloadUser: publicProcedure.input(AuthCredentialValidation).mutation( async ({input}) => {
        const {email, password} = input
        const payload = await getPayloadClient()

        //check if user already exist

        const {docs: users} = await payload.find({
            collection: 'users',
            where: {
                email:{
                    equals: email,
                },
            }
        }) // /super comment
        
        if(users.length !== 0) throw new TRPCError({code: 'CONFLICT'}) 
            await payload.create({
                collection: 'users',
                data: {},
        })
    })
});