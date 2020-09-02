import React, { Component }  from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import Axios from 'axios';
import OutputCard from '../OutputPage/output';


class ConfirmCard extends Component {

    componentDidMount(){
        sessionStorage.setItem("LoggedIn", "true");
    }

    constructor(props){
        super();
    }
    state={
        msg:"",
        reason:"",
        status:""
        // job:{
        //     venueId:"",
        //     venueName:"",
        //     equipmentId:"",
        //     qty:"",
        //     time:"",
        //     date:"",
        //     result:"",
        //     userId:"",
        //     reason:""
        // }
    }

    confirmEvent =  (e) =>{
        e.preventDefault();
        Axios.post('https://cors-anywhere.herokuapp.com/http://ec2-34-225-29-83.compute-1.amazonaws.com:5000/supply', {
            
            equipmentId: this.props.equipmentId,
            venueId: this.props.venueId,
            userId: this.props.userName,
             qty: this.props.qty, 
          },[])
          .then(res => {
              console.log("icsidecofirm")
              console.log(res.data);
            this.setState({
                reason: res.data.reason,
                status: res.data.status,
                msg:res.data.status,
            })
            //   console.log("Confirm Card Page: "+sessionStorage.getItem("LoggedIn"))
                // console.log(JSON.stringify(res.data))
            //    if(res.data.status === "success")
            //    {
                //     const jobDetails = {...this.state.job};
                //     console.log("Before: "+jobDetails);
                //     jobDetails.jobName=res.data.jobName;
                //     jobDetails.partId=res.data.partId;
                //     jobDetails.qty=res.data.qty;
                //     jobDetails.time=res.data.time;
                //     jobDetails.date=res.data.date;
                //     jobDetails.result=res.data.Status;
                //     jobDetails.userId=res.data.userId;
                //     sessionStorage.setItem("userId",res.data.userId);
                //     jobDetails.reason="Success";
                //     console.log("after: "+jobDetails);
                //    this.setState({
                //         job:jobDetails,
                //         msg:"success"
                //     })
                //    console.log('+++++++++')
                //    console.log("Message"+this.state.job)
                    
            //    }

            //    else
            //    {
            //         const jobDetails = {...this.state.job};
            //         jobDetails.jobName=res.data.jobName;
            //         jobDetails.partId=res.data.partId;
            //         jobDetails.qty=res.data.qty;
            //         jobDetails.time=res.data.time;
            //         jobDetails.date=res.data.date;
            //         jobDetails.result=res.data.Status;
            //         jobDetails.userId=res.data.userId;
            //         sessionStorage.setItem("userId",res.data.userId);
            //         jobDetails.reason=res.data.Reason;
            //         console.log(jobDetails.msg)
            //         this.setState({ 
            //             job:jobDetails,
            //             msg:"Failed"
            //          })
            //         console.log('+++++++++')
            //         console.log("Message"+this.state.jobDetails)
            //    }
          })
          .catch(err => {
              console.log(err);
          })

        // this.props.history.push(`/order/${this.props.jobName}/${this.props.partId}/${this.props.qty}`)
      }

    render()
    {
        // console.log(this.state.job)
        // const jobs = {...this.state.job};


        let displayCard= this.state.msg === "" ?
                        (<ReactBootStrap.Card style={{ width: '30rem', boxShadow:"0 4px 5px #ccc", borderRadius:"10px" }}>
                        <ReactBootStrap.Card.Body>
                         
                          <ReactBootStrap.Card.Text><strong>Venue Name: </strong>{this.props.venueName}</ReactBootStrap.Card.Text>
                          <ReactBootStrap.Card.Text><strong>Equipment Id: </strong>{this.props.equipmentId}</ReactBootStrap.Card.Text>
                          <ReactBootStrap.Card.Text><strong>Quantity: </strong>{this.props.qty}</ReactBootStrap.Card.Text>
                          <ReactBootStrap.Card.Text><strong>User Id: </strong>{this.props.userName}</ReactBootStrap.Card.Text>
                          <ReactBootStrap.Button variant="primary"  onClick = {this.confirmEvent}>Confirm Order</ReactBootStrap.Button>
                        </ReactBootStrap.Card.Body>
                      </ReactBootStrap.Card>)
                      :
                        (<OutputCard 
                              key={this.props.venueId}
                              venueId={this.props.venueId}
                              venueName={this.props.venueName}
                              equipmentId={this.props.equipmentId}
                              qty={this.props.qty}
                              userId={this.props.userName} 
                              result={this.state.status}
                              reason={this.state.reason} />);
                          
                    // console.log("state:"+jobs[0].jobName)
return (
        // this.state.msg === ""?
        <div>
            {displayCard}
        </div>

)}};

export default withRouter(ConfirmCard);