import { React, useState, useEffect } from "react";
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
var Spinner = require('react-spinkit');


const Loader = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    handleShow();
  }, []);

  return (
    <>
      <Modal show={show} size="sm" centered >
        <Modal.Body className="  m-0 p-0  ">
          <Container className="  m-4   ">
            <Col>
              <div className="row ">
                <div className="col-md-4">
                  <Spinner name='chasing-dots' style={{ width: 40, height: 40 }} className="float-end" color="#9A0008" />
                </div>
                <div className="col-md-7 ">
                  <h5 className=" pt-2">Loading. . .</h5>
                </div>
              </div>
            </Col>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Loader;
