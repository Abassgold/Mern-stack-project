import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react';

const FrontPage = () => {
    const URI = `http://localhost:3000/user/post`
    const formik = useFormik({
        initialValues:{
            tittle: '',
            reps: '',
            load: ''
        },
        onSubmit:(values)=>{
            axios.post(URI, values)
            console.log(values);
        }
    })
    return (
        <div>
            <form action="#" onSubmit={formik.handleSubmit}>
                <div className="w-75 mx-auto">
                    <input type="text" className='form-control mb-2' onChange={formik.handleChange} name='tittle'/>
                    <input type="number" className='form-control mb-2' onChange={formik.handleChange} name='reps'/>
                    <input type="number" className=' form-control mb-2 ' onChange={formik.handleChange} name='load'/>
                    <div className="text-end">
                        <button type='submit' className="btn btn-success">SUBMIT</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default FrontPage;
