import { Options } from "@wdio/types";
import {config as wdioSharedConf} from "./wdio.api.shared.conf.ts";
import deepmerge from "deepmerge";
import path from 'path';
import dotenv from 'dotenv';

export const config: Options.Testrunner = deepmerge(wdioSharedConf, {
   onPrepare: ()=>{
    const envFiles = {
        prod:"prod",
        dev: "dev",
        qa:"qa"
    }
    const envFile = envFiles[(process.env.DEPLOY_ENV).replace(/\s/g, '')]
    dotenv.config({
        path:path.resolve('./env', `${envFile}.env`)
    });
   },
   // More hooks are coming..
}, { clone: false });