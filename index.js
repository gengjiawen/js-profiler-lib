const fs = require('fs')
const v8 = require('v8')
const path = require('path')

function getHeap() {
  const snapshotStream = v8.getHeapSnapshot()
  const fileName = path.join(__dirname, `${Date.now()}.heapsnapshot`)
  const fileStream = fs.createWriteStream(fileName)
  snapshotStream.pipe(fileStream)
  return fileName
}

getHeap()

const f = function AWWWWWeMyFunction() {
  console.log(f)
}
const a = new f()

getHeap()
