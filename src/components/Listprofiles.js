import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';

export default class Listprofiles extends Component {
  
  render() {
  // console.log(this.props.showing) 
    return (
        
        
        <div className="vh-100" style={{ backgroundColor: '#eee' }}>
          <MDBBtn onClick={()=>this.props.showing()} rounded size="lg">
                    
                    {this.props.show?"unshow " :"show"}
                    </MDBBtn>
          {this.props.show&&

            <MDBContainer className="container py-5 h-100">
          <MDBRow className="justify-content-center align-items-center h-100">
           
            
              <MDBCol md="12" xl="4">
              <MDBCard style={{ borderRadius: '15px' }}>
                <MDBCardBody className="text-center">
                  <div className="mt-3 mb-4">
                    <MDBCardImage src={this.props.profiles.imgSrc}
                      className="rounded-circle" fluid style={{ width: '100px' }} />
                  </div>
                  <MDBTypography tag="h4">{this.props.profiles.fullName}</MDBTypography>
                  
                  <div className="mb-4 pb-2">
                  <MDBCardText className="text-muted mb-4">
                  {this.props.profiles.profession}
                  </MDBCardText>
                  {this.props.profiles.bio}
                  </div>
                  
                  
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            
           
           
          </MDBRow>
        </MDBContainer>
        }
        
      </div>
    )
  }
}
