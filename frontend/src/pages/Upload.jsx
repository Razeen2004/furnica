import { useState } from "react";
import axios from 'axios';

const Upload = () => {
    const [file,setFile] = useState();
    const onInputChange = (e) => {
        console.log(e.target.files[0]);
        setFile(e.target.files[0]);
    }

    const submitForm = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("productImg", file);

        const result = await axios.post("http://localhost:3000/api/v1/admin/upload",
            formData,
            {
                headers: {"Content-Type": "multipart/form-data"}
            })

        console.log(result);
    }
    return (
        <>
            <form onSubmit={submitForm}>
                <input type="file" name="productImg" onChange={onInputChange} />
                <button>Upload</button>
            </form>
        </>
    )
}

export default Upload;