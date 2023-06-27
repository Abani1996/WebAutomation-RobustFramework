import type { Options } from "@wdio/types";
import deepmerge from "deepmerge";
import {config as wdioSharedConf} from "../wdio.ui.shared.conf.ts";

export const config: Options.Testrunner = deepmerge(wdioSharedConf, {
    specs: [
        "../../test/inn3/ui/features/login/*.feature"
    ]
}, { clone: false });