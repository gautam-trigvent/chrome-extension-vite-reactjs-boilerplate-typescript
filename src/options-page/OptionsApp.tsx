import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

interface OptionsAppProps {
    // Define the props for your component here if needed
}

const OptionsApp: React.FC<OptionsAppProps> = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div>
            <Button onClick={toggleModal}>Popup</Button>
            <Modal show={isModalOpen} onHide={toggleModal}>
                <Modal.Header>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={toggleModal}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={toggleModal}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default OptionsApp;
