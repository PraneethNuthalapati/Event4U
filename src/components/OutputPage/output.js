import React, {Component}  from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

class OutputCard extends Component{
  render(){
  const status= this.props.result === "success"? 
                <h5 className="display-4 text-success">{this.props.result}</h5>:
                <h5 className="display-4 text-danger">{this.props.result}</h5>;
                console.log("Reson rESULT"+this.props.reason ==="");
    return (
          <div>
          <ReactBootStrap.Card style={{ width: '30rem', boxShadow:"0 4px 5px #ccc", borderRadius:"10px", textAlign:'left', paddingLeft:'20px' }}>
          
          <ReactBootStrap.Card.Body>
            <ReactBootStrap.Card.Text><strong>Order Status: </strong><h5 className="display-4 text-primary">{this.props.result}</h5></ReactBootStrap.Card.Text>
            <ReactBootStrap.Card.Text><strong>Reason: </strong>{this.props.reason}</ReactBootStrap.Card.Text>
            <ReactBootStrap.Card.Text><strong>Venue ID: </strong>{this.props.venueId}</ReactBootStrap.Card.Text>
            <ReactBootStrap.Card.Text><strong>Venue Name: </strong>{this.props.venueName}</ReactBootStrap.Card.Text>
            <ReactBootStrap.Card.Text><strong>Equipment Id: </strong>{this.props.equipmentId}</ReactBootStrap.Card.Text>
            <ReactBootStrap.Card.Text><strong>Quantity: </strong>{this.props.qty}</ReactBootStrap.Card.Text>
            <ReactBootStrap.Card.Text><strong>User Id: </strong>{this.props.userId}</ReactBootStrap.Card.Text>
            {/* <ReactBootStrap.Card.Text><strong>Order Date: </strong>{this.props.date}</ReactBootStrap.Card.Text>
            <ReactBootStrap.Card.Text><strong>Order Time: </strong>{this.props.time}</ReactBootStrap.Card.Text> */}
            
          
          </ReactBootStrap.Card.Body>
        </ReactBootStrap.Card>
          </div>
    )
  }
}

export default withRouter(OutputCard);