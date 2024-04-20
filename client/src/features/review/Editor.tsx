import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

type EditorProps = {
    onChangeHandler: (value: string) => void;
    value: string;
};


function Editor({onChangeHandler, value}: EditorProps) {

    const modules = {
        toolbar: [
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{'list': 'ordered'}, {'list': 'bullet'}],
            ['link','code'],
            ['clean']
        ],
    }

    return <ReactQuill theme="snow" value={value} placeholder="Write a comment..." onChange={onChangeHandler} modules={modules}/>
}

export default Editor;