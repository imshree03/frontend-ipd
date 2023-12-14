import { MdOutlineCloudUpload } from "react-icons/md";
import { FaCircleArrowRight } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { app } from "../firebase.config";
import {
  getDownloadURL,
  getStorage,
  ref,
  listAll,
  uploadBytes,
} from "firebase/storage";
import { v4 } from "uuid";
const imageDb = getStorage(app);

const Upload = () => {
  const [state, setState] = useState(true);
  const [img, setImg] = useState("");
  const [count, setCount] = useState(0);
  const [imgUrl, setImgUrl] = useState("");
  const [change, setChange] = useState(true);
  const uploadImg = () => {
    setState(!state);
  };

  const handleClick = () => {
    const imgRef = ref(imageDb, `image/${count}`);
    // setChange(!change);
    setState(!state);
    console.log(state);
    // setCount(count + 1);
    uploadBytes(imgRef, img);
  };

  useEffect(() => {
    listAll(ref(imageDb, "image")).then(imgs => {
      // console.log(imgs);
      imgs.items.forEach(val => {
        getDownloadURL(val).then(url => {
          setImgUrl(url);
          // console.log(url);
        });
      });
    });
  });

  return (
    <div className="container">
      <div className="card_container">
        <div className="upload_section">
          {state ? (
            <div>
              <img
                src="/image/UploadImageSymbol.jpg"
                alt=""
                style={{ width: "200px", height: "200px" }}
              />
              <br />
              <input type="file" onChange={e => setImg(e.target.files[0])} />
              <br />
              <button onClick={handleClick}>Upload Image</button>
            </div>
          ) : (
            <div>
              <img
                src={imgUrl}
                alt=""
                style={{ width: "200px", height: "200px" }}
              />
              <br />
              <input type="file" onChange={e => setImg(e.target.files[0])} />
              <br />
              <button onClick={handleClick}>Upload Image</button>
            </div>
          )}
        </div>
        <FaCircleArrowRight fontSize={"50px"} color="red" />
        {state ? (
          <div className="result_section">
            <h1>Result</h1>
            <p>
              <h3>Hurrey !! Success</h3> chances of you having TB are very less.
            </p>
          </div>
        ) : (
          <div className="result_section">
            <h1>Result</h1>
            <p>
              <h3>Ohh NOOO!!!</h3>Pls Consult a doctor you have high chances of
              having TB
            </p>
          </div>
        )}
      </div>
    </div>
    // <div className="container ">
    //   <div className="card_container">
    //     <div className="upload_section">
    //       {/* {state ?  :} */}
    //       {state ? (
    //         <>
    //           {/* <div className="ImageRender">
    //             <img src="/image/asset 0.jpeg" alt="" />
    //             <button className="upload_btn" onClick={uploadImg}>
    //               <MdOutlineCloudUpload fontSize={"24px"} />
    //               Upload Image
    //             </button>
    //           </div> */}
    //           <div className="ImageRender">
    //             <img src="/image/UploadImageSymbol.jpg" alt="" />
    //             <input type="file" onChange={e => setImg(e.target.files[0])} />
    //             <button
    //               onClick={handleClick}
    //               className="upload_btn"
    //               style={{ width: "250px" }}>
    //               <MdOutlineCloudUpload fontSize={"24px"} />
    //               Upload Image
    //             </button>
    //           </div>
    //         </>
    //       ) : (
    //         <>
    //           {/* <button className="upload_btn" onClick={uploadImg}>
    //             <MdOutlineCloudUpload fontSize={"24px"} />
    //             Upload Image
    //           </button> */}
    //           <div className="ImageRender">
    //             <img
    //               src={imgUrl}
    //               alt=""
    //               style={{ width: "300px", height: "300px" }}
    //             />
    //             <input type="file" onChange={e => setImg(e.target.files[0])} />
    //             <button onClick={handleClick}>
    //               {" "}
    //               <MdOutlineCloudUpload fontSize={"24px"} />
    //               Upload Image
    //             </button>
    //             <br />
    //           </div>
    //         </>
    //       )}
    //     </div>
    //     <FaCircleArrowRight fontSize={"50px"} color="red" />
    //     <div className="result_section"></div>
    //   </div>
    // </div>
  );
};

export default Upload;
