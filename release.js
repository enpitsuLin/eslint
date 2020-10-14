const path = require('path')
const util = require('util')
const exec = util.promisify(require('child_process').exec)
const readFile = util.promisify(require('fs').readFile)
const writeFile = util.promisify(require('fs').writeFile)
const rootPath = path.join(__dirname, './')
const packages = require('./package.json')
const PACKAGES = ['javascript', 'typescript']
const SHELLS = {
  install: 'yarn install --check-files --frozen-lockfile',
  publish: 'yarn publish --non-interactive',
}

const mergeVersion = async pwd => {
  const target = path.join(pwd, 'package.json')
  const fileContent = await readFile(target)
  const json = JSON.parse(fileContent.toString())
  const nextPackage = {
    ...json,
    version: packages.version,
  }
  await writeFile(target, JSON.stringify(nextPackage, null, 2))

  const name = pwd.split(path.sep).reverse()[0]
  console.log(`[MERGE]> ${name}: ${json.version || 'Empty'} to ${nextPackage.version}`)
}

const publish = async pwd => {
  const { stdout, stderr } = await exec(`cd ${pwd} && ${SHELLS.install} && ${SHELLS.publish}`)
  if (stderr) throw stderr
  console.log('stdout:', stdout.toString())
}

;(async () => {
  const tasks = PACKAGES.map(async pkgName => {
    const packagePath = path.join(rootPath, pkgName)
    await mergeVersion(packagePath)
    await publish(packagePath)
  })
  try {
    await Promise.all(tasks)
  } catch (e) {
    console.log(e)
    process.exit(1)
  }
})()
