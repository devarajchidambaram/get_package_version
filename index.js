var path = require('path')
var fs = require('fs');

function getNpmVersion(npmName) {

    try {
        var npmPath = require.resolve(npmName)
        var npmDirName = path.dirname(npmPath)
        return JSON.parse(fs.readFileSync(path.join(npmDirName, '/package.json'))).version
    } catch (e) {
        console.log('error while get npm path', e.message)
    }

    return 'unknown'
}

module.exports = getNpmVersion;