// const UserData = ({users}) => {
//     return (
//         <>
//             {
//                 users.map((curUser) => {
//                     const {id, name, email} = curUser;
//                     const {street, city, zipcode} = curUser.address;

//                     return (
//                         <tr key={id}>
//                             <td>{id}</td>
//                             <td>{name}</td>
//                             <td>{email}</td>
//                             <td>{street}, {city}, {" "}, {zipcode}</td>
//                         </tr>
//                     )
//                 })

//             }
//         </>
//     )
// }
// export default UserData;


import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const UserData = ({ users }) => {
    const [showModal, setShowModal] = useState(false);
    const [selectedAddress, setSelectedAddress] = useState('');

    const handleCloseModal = () => setShowModal(false);

    const handleShowModal = (address) => {
        setSelectedAddress(address);
        setShowModal(true);
    };

    return (
        <>
            {
                users.map((curUser) => {
                    const { id, username, name, email } = curUser;
                    const { street, suite, city, zipcode } = curUser.address;

                    return (
                        <tr key={id}>
                            <td>{id}</td>
                            <td>{name}</td>
                            <td>{username}</td>
                            <td>{email}</td>
                            <td>
                                <Button onClick={() => handleShowModal(`Street: ${street}, Suite: ${suite}, City: ${city}, ZipCode: ${zipcode}`)}>Show Address</Button>
                            </td>
                        </tr>
                    )
                })
            }
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>User Address</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedAddress}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default UserData;
