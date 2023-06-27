import type { Options } from "@wdio/types";
import deepmerge from "deepmerge";
import {config as wdioSharedConf} from "../wdio.api.hooks.conf.ts";

export const config: Options.Testrunner = deepmerge(wdioSharedConf, {
    specs: [
        "../../test/inn3/api/users/*.test.ts"
    ]
}, { clone: false });