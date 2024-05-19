import dotenv from 'dotenv';
import path from 'path';
import type { InitOptions } from 'payload/config';

dotenv.config({
  path: path.resolve(__dirname, '../.env'),
});

let cashed = (global as any).payload;

if (!cashed) {
  cashed = (global as any).payload = {
    client: null,
    promise: null,
  };
}
interface Args{
    initOption?: Partial<InitOptions> 
        }   ;

export const getPayloadClient = async ({initOption} : Args = {} ) => {
    if(!process.env.PAYLOAD_SECRET ){
        throw new Error(' The PAYLOAD SECRET is Missing');
    }
};
