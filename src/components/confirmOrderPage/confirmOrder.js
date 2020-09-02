import React, { Component } from 'react';
import ConfirmedCardView from '../JobCards/confirmedCards';
import NavBar from '../HeaderComponent/NavBar';

export default class ConfirmOrder extends Component {


    render() {
        const param=[this.props.match.params];
        const card=Object.keys(param)
              .map(pKey => {
                return [...Array(param[pKey])]
                .map((job,j)=>{
            
                  return <ConfirmedCardView key={job.venueId} equipmentId={job.equipmentId} venueId={job.venueId} venueName={job.venueName} qty={job.qty} userName = {job.userEmailId}/>;
                })
              })
        
        return (
            <div>
                <NavBar/>
                <center>
                    <h2 className="display-4 mt-5" >Order Information</h2>
                    {card}
                </center>
            </div>
        )
    }
}