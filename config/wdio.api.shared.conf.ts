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
    logLevel: 'info',
    bail: 0,
    baseUrl: '',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['chromedriver'],
    framework: 'mocha',
    outputDir: './testReport/api/logs',
    reporters: [
        [
            'allure', {
                outputDir: './testReport/api/allure-results',
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
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
}
