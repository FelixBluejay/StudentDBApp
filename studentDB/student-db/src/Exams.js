import React, { Component } from 'react';
import "./css/Exam.css";
import boy from "./gfx/student-boy.png";
import girl from "./gfx/student-girl.png";
import both from "./gfx/students.png";

class Exam extends Component {
    render() {
        let imgSrc = "";
        if (this.props.gender === "Women") {
            imgSrc = girl;
        } else if (this.props.gender === "Men") {
            imgSrc = boy;
        } else {
            imgSrc = both;
        }

        // console.log(this.props.student.data)
        if (!this.props.student.data) {
            let name = "";
            let exam = "";
            let quiz = "";
            let hw1 = "";
            let hw2 = "";
            let avg = "";
            return (
                <div className="right">
                    <div className="studentExams">
                        <div className="imageContainer">
                            <img src={imgSrc} />
                        </div>

                        <div className="studentData">
                            <p id="name">Name: {name}</p>
                            <p>Exam: {exam}</p>
                            <p>Quiz: {quiz}</p>
                            <p>Homework: {hw1}</p>
                            <p>Homework: {hw2}</p>
                            <p id="avg">Average: {avg}</p>
                        </div>
                    </div>
                </div>
            );
        } else {
            let name = this.props.student.data.name;
            let exam = this.props.student.data.scores[0].score;
            let quiz = this.props.student.data.scores[1].score;
            let hw1 = this.props.student.data.scores[2].score;
            let hw2 = this.props.student.data.scores[3].score;
            let avg = (exam + quiz + hw1 + hw2) / 4;
            return (
                <div className="right">
                    <div className="studentExams">
                        <div className="imageContainer">
                            <img src={imgSrc} />
                        </div>

                        <div className="studentData">
                            <p id="name">Name: {name}</p>
                            <p>Exam: {exam}</p>
                            <p>Quiz: {quiz}</p>
                            <p>Homework: {hw1}</p>
                            <p>Homework: {hw2}</p>
                            <p id="avg">Average: {avg}</p>
                        </div>
                    </div>
                </div>
            );
        }
    }
}
export default Exam;