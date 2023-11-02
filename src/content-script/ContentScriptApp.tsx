import React from 'react';
import { Button, Modal } from 'react-bootstrap';

interface ContentScriptAppProps {
    // Define the props for your component here if needed
}

interface ContentScriptAppState {
    showModal : boolean
}

class ContentScriptApp extends React.Component<ContentScriptAppProps, ContentScriptAppState> {
  constructor(props:ContentScriptAppProps) {
    super(props);
    this.state = {
      showModal: false
    };
  }

  handleClose = () => {
    this.setState({ showModal: !this.state.showModal });
  }

  render() {
    return (
      <div>
        React ContentScriptApp
        <Button variant='primary' onClick={this.handleClose}>Open Modal</Button>
        <Modal show={this.state.showModal} onHide={this.handleClose}>
          <Modal.Header>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
        </Modal>
      </div>
    );
  }
}

export default ContentScriptApp;