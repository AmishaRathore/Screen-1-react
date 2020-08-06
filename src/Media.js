import React, { Component } from 'react'
import { Navbar, ListGroup } from 'react-bootstrap';
import styles from './mystyle.module.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';
export default class Media extends Component {
    constructor(props) {
        super(props)
        this.state = {
            startDate: new Date()
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(date) {
        this.setState({
            startDate: date
        })
    }
    render() {
        return (
            <div className="row">
                <div className="col-4" ></div>
                    <div className="col-md-4">
                    <div className={styles.borderA}>

                        <Navbar className={styles.Aborder} bg="light">
                            <i class="fa fa-chevron-left fa-lg"></i>
                            <h6 className={styles.nav}>Create Homework (Sciene)</h6>
                        </Navbar>
                        <div className={styles.upperBlock}>
                            <div className={styles.border}>
                            <div className={styles.innerUpper}>
                                <div className={styles.calendar}>
                                    <span className={styles.date}>
                                        <DatePicker
                                            selected={this.state.startDate}
                                            onChange={this.handleChange}
                                            name="startDate"
                                            dateFormat="dd/MM/yyyy"
                                        />
                                    </span>
                                    <i class="fa fa-calendar" aria-hidden="true"></i>
                                </div>
                                <p className={styles.font}>Homework due date:</p>
                                <input className={styles.input1} placeholder="Enter title here"></input>
                                <textarea className={styles.input2} placeholder="Enter user remarks here"></textarea>
                            </div>
                            </div>
                            <div className={styles.innerLower}>
                                <div className="float-left"><i class="fa fa-paperclip"></i></div>
                                <h6 className={styles.attach}>Attachments</h6>
                                <p className={styles.imageTitle}>Image</p>
                                <p className={styles.videoTitle}>Video</p>
                                <br></br>
                                <span className={styles.icon}><i class="fa fa-image"></i></span>
                                <span className={styles.vicon}><i class="fa fa-file-video-o"></i></span>
                            </div>
                        </div>
                        <div className={styles.lowerBlock}>
                            <div className={styles.innerBottom}>
                                <span className={styles.carema}><i class="fa fa-camera"></i></span>
                                <span className={styles.micro}><i class="fa fa-microphone"></i></span>
                                <span className={styles.image}><i class="fa fa-image"></i></span>
                                <br></br>
                                <h6 className={styles.cameraTitle}>Add from camera</h6>
                                <h6 className={styles.voiceTitle}>Add voice</h6>
                                <h6 className={styles.Title}>From gallery</h6>
                                <button className={styles.button}>SEND TO STUDENTS</button>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
        )
    }
}
