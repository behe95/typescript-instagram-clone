"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var uuid_1 = require("uuid");
function uploadImageToStorage(file, bucket) {
    return new Promise(function (resolve, reject) {
        if (!file) {
            reject('No image file');
        }
        var newFileName = Date.now() + "_" + file.originalname;
        var fileUpload = bucket.file("instagram/" + newFileName);
        var uuid = uuid_1.v4();
        var blobStream = fileUpload.createWriteStream({
            metadata: {
                contentType: file.mimetype,
                metadata: {
                    firebaseStorageDownloadTokens: uuid,
                }
            }
        });
        blobStream.on('error', function (error) {
            reject('Something is wrong! Unable to upload at the moment.');
        });
        blobStream.on('finish', function () {
            var url = "https://firebasestorage.googleapis.com/v0/b/" + bucket.name + "/o/" + encodeURIComponent(fileUpload.name) + "?alt=media&token=" + uuid;
            resolve({
                url: url,
                fileName: newFileName
            });
        });
        blobStream.end(file.buffer);
    });
}
exports.default = uploadImageToStorage;
