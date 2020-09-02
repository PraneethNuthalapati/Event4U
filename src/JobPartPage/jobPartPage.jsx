import React, { Component } from "react";
import Axios from 'axios';
import JobCards from '../components/JobCards/JobCards.jsx';
import { Container, Row, Col } from "react-bootstrap";
import NavBar from '../components/HeaderComponent/NavBar';

class JobPartPage extends Component {
    constructor() {
        super();
        this.state = {
            jobs: [],
            inputSearchData: "",
            showDetails: false
        }
    }
    componentDidMount() {
        //   fetch("http://ec2-75-101-236-93.compute-1.amazonaws.com:1337/jobs")
        //     .then(response => {
        //       console.log(response.json())
        //       response.json()})
        //     .then(filteredJobs => this.setState({ jobs: filteredJobs })) 
        //     .catch(error => console.log("exception"));
        Axios.get('https://cors-anywhere.herokuapp.com/http://54.146.204.95:5000/getAllVenues')
            .then(res => {
                const filterData= res.data.filter(v => {
                    if(v.orderStatus === "In Process"){
                        return v;
                    }
                })
                this.setState({ jobs: filterData });
                console.log("Company Z "+sessionStorage.getItem("LoggedIn"))
            })
            .catch(err => {
                this.setState({ loading: false });
            })
    }



    inputEvent = e => {
        e.preventDefault();
        this.setState({ inputSearchData: e.target.value });
    }

    render() {

        const jobsFiltered = this.state.jobs.filter(job =>
            job.venueName.toLowerCase().includes(this.state.inputSearchData.toLowerCase())
        );
        return (
            <div>
                <NavBar/>
                <h1>Welcome to Events 4U</h1>
                <br/>
                <i class="fas fa-search"></i>&nbsp;
                <input type="search" placeholder="Search a venue" onChange={this.inputEvent}/>
                <Container>
                    <Row>
                       
                            {jobsFiltered.map(job => (
                                 <Col lg={4} md={6} sm={12} xs={12}>
                                <JobCards key={job.venueId} venueName={job.venueName} venueId={job.venueId} qty={job.quantity} equipmentId={job.equipmentId} inputSearchData={job.venueName}></JobCards>
                            </Col>
                            ))}
                       

                    </Row>
                    <br/>
                </Container>

            </div>
        );
    }
}

export default JobPartPage;