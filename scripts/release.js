const path = require('path')
const rootPkg = require('../package.json')
const fs = require('fs').promises
const packagesPath = path.join(__dirname, '../packages')

const main = async () => {
  const files = await fs.readdir(packagesPath)
  await Promise.all(
    files.map(async name => {
      const pkgPath = path.join(packagesPath, name, 'package.json')
      const stat = await fs.stat(pkgPath)
      if (!stat.isFile()) {
        process.exitCode = 1
      }
      const content = await fs.readFile(pkgPath, 'utf-8')
      const json = JSON.parse(content)
      json.version = rootPkg.version
      await fs.writeFile(pkgPath, JSON.stringify(json, null, 2))
    }),
  )
  console.log(`\n> ${files.length} packages synchronized, version: ${rootPkg.version}.`)
}

main().catch(err => {
  console.log(err)
  process.exitCode = 1
})
