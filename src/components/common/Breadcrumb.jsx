import {Link} from "react-router-dom";
import {Row, Col, BreadcrumbItem} from "reactstrap";

const Breadcrumb = props => {
    return(
        <Row>
            <Col xs="12">
                <div className="page-title d-sm-flex justify-content-between align-items-center">
<h4 className="mb-2 fs-3">{props.breadcrumbItem}</h4>
                <div className="page-title-right">

                    <ol className="breadcrumb m-0"> 
                        <BreadcrumbItem>
                        <Link rel="stylesheet" href="#">{props.title}</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                        <Link rel="stylesheet" href="#">{props.breadcrumbItem}</Link>
                        </BreadcrumbItem>
                    </ol>
                </div>
                </div>
            </Col>
        </Row>
    );
}


export default Breadcrumb;
