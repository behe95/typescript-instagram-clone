import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/reducers";


export default React.memo(function EditPhoto({editValues}:any){

    const {selectedPhotoUpload} = useSelector((state:RootState) => state.upload)

    const canvasRef = React.useRef() as React.MutableRefObject<HTMLCanvasElement>;

    React.useEffect(() => {
        let img = new Image();
        let reader = new FileReader();
        reader.readAsDataURL(selectedPhotoUpload);

        
        

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
              ctx!.filter = `brightness(${editValues.brightness}%)`
              ctx?.drawImage(img, xOffset, yOffset, newWidth , newHeight);

          }

          
      })
        console.log(editValues);
        
    },[editValues])
    
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