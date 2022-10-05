import React, { Component } from 'react';
import "./css/Students.css";
import Exam from './Exams';

class Students extends Component {
    constructor(props) {
        super(props);
        this.state = {
            student: this.props.filteredStudents[0]
        };
        console.log(this.state.student)
        this.displayExam = this.displayExam.bind(this);
    }

    displayExam(studentData) {
        this.setState({
            student: studentData
        });
    }

    render() {
        let gender = this.props.gender.charAt(0).toUpperCase() + this.props.gender.slice(1);

        return (
            <>
                <div className="gender">
                    {gender}
                </div>
                <div className="container">
                    <div className="left">
                        <div className="nameList">
                            {this.props.filteredStudents.map((data, index) => {
                                return (
                                    <div key={"entry" + index} className="listEntry">
                                        <div key={"name" + index}>{data.name}</div>
                                        <button onClick={() => this.displayExam({data})} key={"button" + index}>See {data._id}'s grades</button>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <Exam student={this.state.student} gender={gender} />
                </div>
            </>
        );
    }
}
export default Students;