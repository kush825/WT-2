const path = require('path')

console.log(path.join('wt','index.js\n'))

console.log(path.dirname('/wt/abc/index.js\n'))

console.log(path.basename('/wt/abc/index.js\n'))

console.log(path.extname('/wt/abc/index.js\n'))

console.log(path.format({ 
    root: '/ignored',
    dir: '/home/user/dir',
    base: 'file.txt',
    base: '/file.txt\n'}))

console.log(path.format({ 
        root: '/',
        base: 'file.txt',
        ext: 'ignored\n'}))

console.log(path.isAbsolute('/wt/..'))
console.log(path.isAbsolute('//server'))

