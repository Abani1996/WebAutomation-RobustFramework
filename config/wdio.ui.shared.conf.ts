import type { Options } from '@wdio/types'

export const config: Options.Testrunner = {
    runner: 'local',
    autoCompileOpts: {
        autoCompile: true,
        tsNodeOpts: {
            project: '../tsconfig.json',
            transpileOnly: true
        }
    },
    specs: [],
    exclude: [],
    maxInstances: 10,
    capabilities: [{
        browserName: 'chrome' // or "firefox", "microsoftedge", "safari"
    }],
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevel: 'info',
    outputDir: './testReport/ui/logs',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['chromedriver'], // or 'geckodriver','edgedriver'
    framework: 'cucumber',
    reporters: [
        [
            'allure', {
                outputDir: './testReport/ui/allure-results',
                disableWebdriverStepsReporting: false,
                disableWebdriverScreenshotsReporting: false,
            }
        ],
        [
            'spec', {
                stdout: true,
            }
        ],
    ],
cucumberOpts: {
        require: ['./test/inn3/ui/step-definations/login/login.steps.test.ts'],
        backtrace: false,
        requireModule: [],
        dryRun: false,
        failFast: false,
        snippets: true,
        source: true,
        strict: false,
        tagExpression: '',
        timeout: 60000,
        ignoreUndefinedDefinitions: true
    },
}
