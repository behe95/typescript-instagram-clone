import {v4} from 'uuid';

export default function uploadImageToStorage(file: { originalname: any; mimetype: any; buffer: any; }, bucket: { file: (arg0: string) => any; name: any; }){
    return new Promise((resolve, reject) => {
      if (!file) {
        reject('No image file');
      }
      let newFileName = `${Date.now()}_${file.originalname}`;
  
      let fileUpload = bucket.file(`instagram/${newFileName}`);
      let uuid = v4();
  
      const blobStream = fileUpload.createWriteStream({
        metadata: {
          contentType: file.mimetype,
          metadata :{
            firebaseStorageDownloadTokens: uuid,
         }
        }
      });
  
      blobStream.on('error', (error: any) => {
        reject('Something is wrong! Unable to upload at the moment.');
      });
  
      blobStream.on('finish', () => {
        const url = `https://firebasestorage.googleapis.com/v0/b/${bucket.name}/o/${encodeURIComponent(fileUpload.name)}?alt=media&token=${uuid}`;
        resolve({
            url,
            fileName: newFileName
        });
      });
  
      blobStream.end(file.buffer);
    });
  }