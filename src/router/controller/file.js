const multiparty = require("multiparty")
const fs = require('fs');
const fse = require("fs-extra");
const path = require("path");
const UPLOAD_DIR = path.resolve(__dirname, "..", "target");

function upload(req, res) {
  const multipart = new multiparty.Form()
  multipart.parse(req, async (err, fields, files) => {
    if (err) {
      return
    }
    const [file] = fields.file;
    const [index] = fields.index;
    const [hash] = fields.hash;
    const filename = hash + '_' + index;
    const fileDir = path.resolve(UPLOAD_DIR, hash)
    if (!fse.existsSync(fileDir)) {
      await fse.mkdirs(fileDir);
    }

    await fse.move(file.path, `${fileDir}/${filename}`);
    res.end("received file chunk");
  })
}

module.exports = { upload: upload }