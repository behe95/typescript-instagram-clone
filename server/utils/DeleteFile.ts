
export default function deleteImageFromStorage(bucket: { file: (arg0: string) => { (): any; new(): any; delete: { (): any; new(): any; }; }; }, fileName:string) {
    
    async function deleteFile() {
      await bucket.file(`instagram/${fileName}`).delete();
  
      console.log(`DELETED`);
    }
  
    deleteFile().catch(console.error);
  }