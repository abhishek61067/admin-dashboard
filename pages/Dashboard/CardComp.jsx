import React from 'react'
import {Card, Row, Col} from 'reactstrap'
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const CardComp = () => {
  return (
    <>
    <Card className='credit-card-container overflow-hidden text-white bg-primary border-0'>
        <Row>
            <Col>
            <div>
                <p className='fw-normal'>Name</p>
                <p className='fw-bold'>Abhishek</p>
            </div>
            <div>
                <p className='fw-normal mt-2'>Card Number</p>
                <p className='fw-bold'>XXXX YYYY ZZZZ</p>
            </div>

            <div className="d-flex justify-content-between align-items-center mt-2">

            <div className=''>
                <p className='fw-normal'>Valid</p>
                <p className='fw-bold'>11/15</p>
            </div>
            <div>
                <p className='fw-normal'>Expiry</p>
                <p className='fw-bold'>11/25</p>
            </div>
            <div>
                <p className='fw-normal'>CVV</p>
                <p className='fw-bold'>1133025</p>
            </div>
            </div>
            </Col>
        </Row>
    </Card>
    </>
  )
}

export default CardComp;