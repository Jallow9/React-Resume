import React, { useState } from 'react';
import { Modal, InputGroup, FormControl } from  'react-boostrap';

const Education = (props) => {
    const [ data, setData ] = useState ({
        institution: '',
        degree: '',
        summery: '',
        city: '',
        endDate: ''
    })

    let array=props.education

    const handleChange=(e)=> {
        const inputName=e.target.name
        if (inputName==="institution"){
            setData({...data, institution: e.target.value })
        }
        if (inputName==="degree"){
            setData({...data, degree: e.target.value })
        }
        if (inputName==="summary"){
            setData({...data, summary: e.target.value })
        }
        if (inputName==="city"){
            setData({...data, city: e.target.value })
        }
        if (inputName==="endDate"){
            setData({...data, endDate: e.target.value })
        }

        const handleSub = (e) => {
            e.preventDefault()
            array.push(data)
        }
    }

    return (
        <>  
            <InputGroup className="mb-3">
            <InputGroup.Prepend>
                <InputGroup.Text>First and last name</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl />
            <FormControl />
            </InputGroup>
            <Modal size="lg"  aria-labelledby="contained-modal-title-vcenter" show={props.show} centered>
                <Modal.Header closeButton>
                    <Modal.Title  id="contained-modal-title-vcenter">
                        Add Education
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row" onSubmit={(e)=>{handleSub(e); props.updateData(e, {educations: array})}}>
                    <h3>Education</h3>
                    <div className="form-group col-lg-3 col-sm-6">
                        <label htmlFor="institution">Institution</label>
                        <input type="text" name="institution" className="form-control" id="institution" placeholder="Institution name" 
                                onChange={handleChange} required/>
                    </div>
                    <div className="form-group col-lg-3 col-sm-6">
                        <label htmlFor="degree">Degree(s)</label>
                        <input type="text" name="degree" className="form-control" id="degree" placeholder="degree" 
                                onChange={handleChange} required/>
                    </div>
                    <div className="form-group col-sm-12">
                        <label htmlFor="summary">Summary</label>
                        <textarea id="summary" name="summary" className="form-control mb-1" rows="3" 
                                onChange={handleChange} required></textarea>
                    </div>
                    <div className="form-group col-lg-3 col-sm-6">
                        <label htmlFor="city">City</label>
                        <input type="text" name="city" className="form-control" id="city" placeholder="city" 
                                onChange={handleChange} required/>
                    </div>
                    <div className="form-group col-lg-3 col-sm-6">
                        <label htmlFor="end">End Date</label>
                        <input type="date" name="end" className="form-control" id="end" placeholder="End date " 
                                onChange={handleChange} required/>
                    </div>
                    <div className="form-group text-center  col-sm-12">
                        <button type="submit" className="mybutton pt-1 pb-1 pr-2 pl-2 bg-info mr-2 rounded" >Save</button>
                        <label onClick={props.onHide} className="mybutton pt-1 pb-1 pr-2 pl-2 bg-danger  rounded">Cancel</label>
                    </div>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    )
    // handleChange = (event) => {
  //   event.target.value,
  //   event.target.name
  // }
  
//   handleChange = ({ target : { value, name }}) => this.setState({ [name]: value });

}

export default Education