//module.export사용하기
console.log('hi i am app js console log');
let exportEx = (x, y) => { x*x - y }

module.exports = 'hi i am export'
module.exports.exportEx = exportEx;