// import React from 'react';

import ReactQuill, { Quill } from "react-quill";

import { ImageDrop } from "quill-image-drop-module";

import ImageUploader from "quill-image-uploader";

import "react-quill/dist/quill.snow.css";

import "./style.css"

// import { uploadmedia } from "./apis/uploadmedia";

// import { setLocationInRedux } from "./redux/actions/AddLocation";

import { useDispatch } from "react-redux";

// import ImageResize from 'quill-image-resize-module';

// import { uploadMediaInBlog } from 'shared/api';

// import { toast } from 'react-toastify';

// import styled from 'styled-components';

let BaseImageFormat = Quill.import("formats/image");

let toolbarOptions = [

  ["bold", "italic", "underline", "strike"], // toggled buttons



  // [{ header: 1 }, { header: 2 }], // custom button values

  [{ list: "ordered" }, { list: "bullet" }],

  [{ indent: "-1" }, { indent: "+1" }], // outdent/indent

  [{ direction: "rtl" }], // text direction



  // [{ size: ["small", false, "large", "huge"] }], // custom dropdown

  [{ header: [1, 2, 3, 4, 5, 6, false] }],

  // ["link", "image"], // add's image support

  // [{ color: [] }, { background: [] }], // dropdown with defaults from theme

  [{ font: [] }],

  // ["video"],

  [{ align: [] }],



  ["clean"], // remove formatting button

];

Quill.register("modules/imageDrop", ImageDrop);

Quill.register("modules/imageUploader", ImageUploader);

// Quill.register('modules/imageResize', ImageResize);

//  const module={ImageResize:{}}



let locationArr=[];



Editor.modules = {

  toolbar: toolbarOptions,

  imageDrop: true,

//   imageUploader: {

//     upload: (file) => {

//       return new Promise(async (resolve, reject) => {

//         const formData = new FormData();

//         formData.append("file", file);

//         try {

//           const response = await uploadmedia(formData);

//           locationArr.push(response?.data?.data[0].location)

//           // setEditorImageUrl(response.data.data)

//           // const response = await (()=>{})();

//           resolve(response?.data?.data[0].location);

//         } catch (error) {

//           // toast.error('Upload failed');

//           reject("Upload failed");

//         }

//       });

//     },

//   },

  clipboard: {

    matchVisual: false,

  },

};



const ImageFormatAttributesList = ["alt", "height", "width", "style"];

class ImageFormat extends BaseImageFormat {

  static formats(domNode) {

    return ImageFormatAttributesList.reduce(function (formats, attribute) {

      if (domNode.hasAttribute(attribute)) {

        formats[attribute] = domNode.getAttribute(attribute);

      }

      return formats;

    }, {});

  }

  format(name, value) {

    if (ImageFormatAttributesList.indexOf(name) > -1) {

      if (value) {

        this.domNode.setAttribute(name, value);

      } else {

        this.domNode.removeAttribute(name);

      }

    } else {

      super.format(name, value);

    }

  }

}



Quill.register(ImageFormat, true);



Editor.formats = [

  'header',

  'font',

  'size',

  "bold",

  "italic",

  "underline",

  "strike",

  "blockquote",

  "list",

  "bullet",

  "indent",

  "link",

  // "image",

  "color",

  "width",

  "style",

  // "video",

];



//  Props: {

//   content;

//   setContent;

//   placeholder;

//   setEditorImageUrl;

// }

// const ele:any=document.getElementsByClassName("ql-tooltip")[0];

// ele.style.margin="100px 0px";



function Editor({content,setContent,placeholder}) {


//   const { content, setContent, placeholder, setEditorImageUrl } = props;

  const dispatch=useDispatch();

  const ele = document.getElementsByClassName("ql-tooltip").length

    ? document.getElementsByClassName("ql-tooltip")[0]

    : null;

  if (ele) {

    // ele.style.left=""

    // ele.style.right = '0px !important';

    // ele.style.top='0px !important'

    ele.style.margin = "0px auto";

  }



  let videoUrl = document.getElementsByTagName('iframe')

  let videoUrlArray = []




  return (

    <div style={{ Width: "100%"}}>

      <div className="text-editor" >

        
        <ReactQuill 

          value={content}

          
          onChange={(e) => setContent(e)
             

            // for(let i = 0; i < videoUrl.length; i++){

            //   videoUrlArray.push(videoUrl[i].src)

            // }

            // dispatch(setLocationInRedux([locationArr, videoUrlArray]));
             //0: image urls 1: video urls

          }

          placeholder={placeholder}

          modules={Editor.modules}

          formats={Editor.formats}

          theme="snow"

          className="edit_container"

         

          bounds={`[data-text-editor="name"]`}

        />

      </div>

    </div>

  );

}



// const QuillContainer = styled.div`

//   .ql-container {

//     min-height: 50vh !important;

//   }

// `;

export default Editor;