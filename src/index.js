import React from 'react';
import ReactDOM from 'react-dom';
import { withFormik } from 'formik';
import Yup from 'yup';

const App = ({
    values,
    handleChange,
    handleSubmit
}) => (
    <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" value={values.email} onChange={handleChange}/>
        <input type="password" name="password" placeholder="Password" value={values.password} onChange={handleChange}/>
        <button>Submit</button>
    </form>
)

const FormikApp = withFormik({
    mapPropsToValues({email, password}){
        return {
            email: email || '',
            password: password || ''
        }
    },
    handleSubmit(values) {
        console.log(values)
    }
    
})(App)


ReactDOM.render(<FormikApp />, document.getElementById('root'));
