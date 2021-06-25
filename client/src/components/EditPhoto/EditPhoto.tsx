import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { photoUpload, setEditedPhoto } from "../../store/actions/upload";
import { RootState } from "../../store/reducers";

export async function dataUrlToFile(dataUrl: string, fileName: string): Promise<File> {

    const res: Response = await fetch(dataUrl);
    const blob: Blob = await res.blob();
    return new File([blob], fileName, { type: 'image/png' });
}


export default React.memo(function EditPhoto({editValues}:any){

    const {selectedPhotoUpload, donePhotoEditing, filter:selectedPhotoFilter} = useSelector((state:RootState) => state.upload)
    
    

    const canvasRef = React.useRef() as React.MutableRefObject<HTMLCanvasElement>;
    const [photoFile, setPhotoFile] = React.useState({} as File);

    // const [photoProcessingLoading, setPhotoProcessingLoading] = React.useState(false);

    const [editedPhoto, setEditedPhoto] = React.useState<Blob>({} as Blob);

    const [imageLoaded, setImageLoaded] = React.useState(false);

    const history = useHistory();

    const dispatch = useDispatch();

    
    
    React.useEffect(() => {
        (async function () {
            const file = await dataUrlToFile(selectedPhotoUpload, "image"); 
            console.log(file);
            
           setPhotoFile(file as File);
        }())

        return () => setPhotoFile({} as File);
        
    },[])

    React.useEffect(() => {
        if(imageLoaded){
            // if(!photoProcessingLoading) setPhotoProcessingLoading(true);
            let dataUrl = canvasRef.current.toDataURL();
            dispatch(photoUpload(dataUrl));
            // dispatch(setEditedPhoto(dataUrl));
        }
        
    },[donePhotoEditing])

    

    React.useEffect(() => {
        if(!photoFile.name) return;
        let img = new Image();
        let reader = new FileReader();
        
        reader.readAsDataURL(photoFile);

        
        

        // reader.addEventListener('load', () => {
        //     const ctx = canvasRef.current.getContext('2d');
        //     img.src = reader.result as string;
        //     img.onload = function(){
        //         img.height = canvasRef.current.height;
        //         img.width = canvasRef.current.width;
        //         ctx!.imageSmoothingEnabled = false;
                
        //         ctx?.drawImage(img, 0, 0, img.width, img.height);

        //     }

            
        // })


        reader.addEventListener('load', () => {
        if(!imageLoaded) setImageLoaded(b => true);
          const ctx = canvasRef.current.getContext('2d');
          img.src = reader.result as string;
          img.onload = function(){
              const measure = document.getElementById('measure');
              measure?.appendChild(img);

              let wrh = img.width / img.height;
              let newWidth = canvasRef.current.width;
              let newHeight = newWidth / wrh;
              if (newHeight > canvasRef.current.height) {
                  newHeight = canvasRef.current.height;
                  newWidth = newHeight * wrh;
              }

              const xOffset = newWidth < canvasRef.current.width ? ((canvasRef.current.width - newWidth) / 2) : 0;
              const yOffset = newHeight < canvasRef.current.height ? ((canvasRef.current.height - newHeight) / 2) : 0;
              if(selectedPhotoFilter){
                ctx!.filter = `brightness(${editValues.brightness}%) contrast(${editValues.contrast}%) saturate(${editValues.saturation}%) ${selectedPhotoFilter}`

              }else{
                ctx!.filter = `brightness(${editValues.brightness}%) contrast(${editValues.contrast}%) saturate(${editValues.saturation}%)`

              }
              console.log(selectedPhotoFilter);
              
              ctx?.drawImage(img, xOffset, yOffset, newWidth , newHeight);

          }

        //   canvasRef.current.toBlob(function(blob){
        //       // setEditedPhoto(blob as Blob);
        //       dispatch(setEditedPhoto(blob))
              
        //   }, 'image/jpeg', 1)

        

          
      })
        // console.log(editedPhoto);
        
    },[editValues,photoFile,selectedPhotoFilter])

    

    // if(donePhotoEditing){
    //     return (
    //         <div className="spinner spinner-sm" role="status">
    //             <span className="sr-only">Loading...</span>
    //         </div>            
    //     )
    // }
    
    return (
        <div id="canvas__holder">
            <canvas 
            height="1080" 
            width="1080"
            ref={canvasRef}
            style={{
              width: "320px", 
              height: "320px",
            }}
            >

            </canvas>

            <div
            style={{ position: "absolute", left: "-10000px", top: "-100000px"}}
            id="measure"></div>
        </div>
    )
})