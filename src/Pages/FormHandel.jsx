import { upload } from '@testing-library/user-event/dist/upload';
import React, { useState } from 'react'
import { Card, Col, Container, Row, Button, Table, } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

export default function FormHandel() {
    let [formData, setFormData] = useState(
        {
            uname: '',
            uemail: '',
            uphone: '',
            umessage: '',
            index: ''
        }
    )

    let [userData, setUserData] = useState([])

    let getValue = (event) => {
        let oldData = { ...formData }
        let inputName = event.target.name
        let inputValue = event.target.value
        oldData[inputName] = inputValue
        setFormData(oldData)

    }

    let handelSubmit = (event) => {
        let currentUserFormData = {
            uname: formData.uname,
            uemail: formData.uemail,
            uphone: formData.uphone,
            umessage: formData.umessage
        }

        if (formData.index === '') {

            let checkFilterUser = userData.filter((v) => v.uemail == formData.uemail || v.uphone == formData.uphone)

            if (checkFilterUser.length == 1) {
                toast.error("Email or Phone already Exist..!")

            }
            else {
                let oldUserData = [...userData, currentUserFormData]
                setUserData(oldUserData)
                setFormData({
                    uname: '',
                    uemail: '',
                    uphone: '',
                    umessage: '',
                    index: ''
                })

            }
        }
        else {
            let updateIndex = formData.index
            let oldData = userData

            let checkFilterUser = userData.filter((v, i) => (v.uemail == formData.uemail || v.uphone == formData.uphone) && i != updateIndex)

            if (checkFilterUser.length == 0) {

                oldData[updateIndex]['uname'] = formData.uname
                oldData[updateIndex]['uemail'] = formData.uemail
                oldData[updateIndex]['uphone'] = formData.uphone
                oldData[updateIndex]['umessage'] = formData.umessage
                setUserData(oldData)
                setFormData(
                    {
                        uname: '',
                        uemail: '',
                        uphone: '',
                        umessage: '',
                        index: ''
                    }
                )
            }
            else {
                toast.error("Email or Phone already Exist..!")

            }
        }
        event.preventDefault();


    }

    let deleteRow = (index) => {
        let filterDataAfterDelete = userData.filter((v, i) => i != index)
        toast.success("Data Deleted..!")

        setUserData(filterDataAfterDelete)

    }

    let updateRow = (index) => {
        let updateData = userData.filter((v, i) => i == index)[0]
        updateData['index'] = index
        setFormData(updateData)

    }

    return (
        <Container fluid>
            <li><Link to={'/'}>Home</Link></li>
            <ToastContainer/>
            <Container>
                <Row>
                    <Col className='text-center py-5'>
                        <h1>Enquiry Now</h1>
                    </Col>
                </Row>
                <Row>
                    <Col lg={3}>
                        {userData.length}
                        <form onSubmit={handelSubmit}>
                            <div className='pb-3'>
                                <label className='form-label'>User Name</label>
                                <input type='text' onChange={getValue} className='form-control' value={formData.uname} name='uname'></input>
                            </div>
                            <div className='pb-3'>
                                <label className='form-label'>Email</label>
                                <input type='email' onChange={getValue} className='form-control' value={formData.uemail} name='uemail'></input>
                            </div>
                            <div className='pb-3'>
                                <label className='form-label'>Phone</label>
                                <input type='text' onChange={getValue} className='form-control' value={formData.uphone} name='uphone'></input>
                            </div>
                            <div className='pb-3'>
                                <label className='form-label'>Message</label>
                                <textarea onChange={getValue} className='form-control' value={formData.umessage} name='umessage'></textarea>
                            </div>
                            <button className='btn btn-primary'>{formData.index !== '' ? 'Update' : 'Save'}</button>
                        </form>
                    </Col>
                    <Col lg={9}>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Message</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {userData.length >= 1 ?
                                    userData.map((obj, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{obj.uname}</td>
                                                <td>{obj.uemail}</td>
                                                <td>{obj.uphone}</td>
                                                <td>{obj.umessage}</td>
                                                <td>
                                                    <button onClick={() => updateRow(index)} className='btn btn-warning me-2'>Update</button>
                                                    <button onClick={() => deleteRow(index)} className='btn btn-danger'>Delete</button>
                                                </td>
                                            </tr>

                                        )
                                    })
                                    :
                                    <tr>
                                        <td colSpan={6}>No Data Found</td>
                                    </tr>
                                }

                            </tbody>
                        </Table>

                    </Col>
                </Row>
            </Container>


        </Container>
    )
}
