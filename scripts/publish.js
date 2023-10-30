/*
* @Author: fw168
* @Date: 2023-10-30 09:36:06
* @Last Modified by: fw168
* @Last Modified time: 2023-10-30 09:36:06
*/
import path from "path"
import shelljs from "shelljs"
import { program } from "commander"
import packagejson from '../dist/package.json' assert { type: "json" }
// const path = require('path')
// const shelljs = require('shelljs')
// const program = require('commander')
// const targetFile = path.resolve(__dirname, '../dist/package.json')
// const packagejson = require(targetFile)
const currentVersion = packagejson.version
const versionArr = currentVersion.split( '.' )
const [ mainVersion, subVersion, phaseVersion ] = versionArr
// 默认版本号
const defaultVersion = `${ mainVersion }.${ subVersion }.${ +phaseVersion + 1 }`
let newVersion = defaultVersion
// 从命令行参数中取版本号
program.option( '-v, --versions <type>', 'Add release version number', defaultVersion )
program.parse( process.argv )
if ( program.versions ) {
    newVersion = program.versions;
}

function publish() {
    shelljs.sed( '-i', '"name": "nbfrank-utils-ts"', '"name": "@nbFrank/nbfrank-utils-ts"', packagejson ) // 修改包名
    shelljs.sed( '-i', `"version": "${ currentVersion }"`, `"version": "${ newVersion }"`, packagejson ) // 修改版本号
    shelljs.cd( 'dist' )
    shelljs.exec( 'npm publish' ) // 发布
}

publish()
