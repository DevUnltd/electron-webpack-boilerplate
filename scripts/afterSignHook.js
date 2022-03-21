require('dotenv').config();
const fs = require('fs')
const path = require('path')
const electron_notarize = require('electron-notarize');
const getPackageJson = require('./getPackageJson');

const { build: { appId } } = getPackageJson('build');

module.exports = async function (params) {
    if (process.platform !== 'darwin') {
        return
    }

    console.log('afterSign hook triggered', params)

    const appPath = path.join(
        params.appOutDir,
        `${params.packager.appInfo.productFilename}.app`
    )
    if (!fs.existsSync(appPath)) {
        console.log('skip')
        return
    }

    console.log(
        `Notarizing ${appId} found at ${appPath} with Apple ID ${process.env.APPLE_ID}`
    )

    try {
        await electron_notarize.notarize({
            tool:'notarytool',
            appBundleId: appId,
            appPath: appPath,
            teamId: process.env.APPLE_TEAM_ID,
            appleId: process.env.APPLE_ID,
            appleIdPassword: process.env.APPLE_ID_PASSWORD,
        })
    } catch (error) {
        console.error(error)
    }

    console.log(`Done notarizing ${appId}`)
}