import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changePhotoCaption, toggleDonePhotoEditing } from "../../store/actions/upload";
import { RootState } from "../../store/reducers";

export async function dataUrlToFile(dataUrl: string, fileName: string): Promise<File> {

    const res: Response = await fetch(dataUrl);
    const blob: Blob = await res.blob();
    return new File([blob], fileName, { type: 'image/png' });
}

export default function SharePhoto(){
    const {selectedPhotoUpload,caption} = useSelector((state:RootState) => state.upload);

    const {user: userProfileInfo} = useSelector((state:RootState) => state.auth);

    const canvasRef = React.useRef() as React.MutableRefObject<HTMLCanvasElement>;
    const [photoFile, setPhotoFile] = React.useState({} as File);


    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(toggleDonePhotoEditing());
        (async function () {
            const file = await dataUrlToFile(selectedPhotoUpload, "image"); 
            console.log(file);
            
           setPhotoFile(file as File);
        }())

        return () => setPhotoFile({} as File);
        
    },[])

    React.useEffect(() => {
        if(!photoFile.name) return;
        let img = new Image();
        let reader = new FileReader();
        console.log(photoFile);
        
        reader.readAsDataURL(photoFile);


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
              ctx?.drawImage(img, xOffset, yOffset, newWidth , newHeight);

          }

          
      })
        
    },[photoFile])

    return (
        <div id="share__photo__component">
            <div id="container">
                <div className="left">
                    <img src={userProfileInfo?.profilePhoto?.url} alt="portrait"/>
                </div>

                <div id="caption__holder">
                    <form>
                        <textarea
                        onChange={e => dispatch(changePhotoCaption(e))}
                        value={caption}
                        placeholder="Write a caption"
                        name="caption" id="caption" rows={3}></textarea>
                    </form>
                </div>

                <div id="canvas__holder">
                    <canvas 
                    height="1080" 
                    width="1080"
                    ref={canvasRef}
                    style={{
                    width: "60px", 
                    height: "60px",
                    }}
                    >

                    </canvas>

                    <div
                    style={{ position: "absolute", left: "-10000px", top: "-100000px"}}
                    id="measure"></div>
                </div>

            </div>
        </div>
    )
}