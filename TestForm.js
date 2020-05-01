import React from "react";
import {Formik,Field} from "formik";

export default class TestForm extends React.Component{

    constructor(props) {
        super(props);
    }

    onsubmit=(values)=>{
        console.log(values)
    }

    form_code=(props)=>{
        return <form onSubmit={props.handleSubmit}>
                 <label>First name</label>
                 <Field name={'first_name'}/>
                 <label>Last name</label>
                 <Field name={'last_name'}/>
                 <label>Major</label>
                <Field name={'major'} component={'select'}>
                     <option value={'CS'}>CS</option>
                     <option value={'CE'}>CE</option>
                 </Field>

                 <label>swimming</label>
                 <Field name={'swimming'} type={'checkbox'}/>
                 <label>Reading</label>
                 <Field name={'reading'} type={'checkbox'}/>

                 <label>Sex</label>
                 <Field type={'radio'} name={'sex'} value={'male'}/> male
                 <Field type={'radio'} name={'sex'} value={'female'}/> female

            <button type={'submit'}>Send</button>
              </form>
    }

    render() {
        return(
            <Formik
            initialValues={{first_name:'aaa',last_name:'bbb',swimming:false,reading:true,sex:'female'}}
            onSubmit={this.onsubmit}
            render={this.form_code}
            />

        )
    }

}