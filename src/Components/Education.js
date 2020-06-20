import React, { Component } from "react";

class Education extends Component {
  constructor(props) {
    super(props);

    this.education = props.education;
  }

  render() {
    return (
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="education"
      >
        <div className="w-100">
          <h2 className="mb-5">Education</h2>
          {this.education.map((data, index) => (
            <div
              key={index}
              className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5"
            >
              <div className="resume-content">
                <h3 className="mb-0">{data.university}</h3>
                <div className="subheading mb-3">{data.degree}</div>
                <p>Cumulative GPA: {data.cumulativegpa}</p>
                <p>Major GPA: {data.majorgpa}</p>
                <p>Dean's List</p>
              </div>
              <div className="resume-date text-md-right">
                <span className="text-secondary">
                  {data.fromDate} - {data.toDate}
                </span>
              </div>
            </div>
          ))}
          {this.education.map((data, index) => (
            <div
              key={index}
              className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5"
            >
              <div className="resume-content">
                <h3 className="mb-0">Relevant Course Work</h3>
              </div>
            </div>
          ))}
          {this.education.map((data, index) => (
            <div
              key={index}
              className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5"
            >
              <div className="resume-content">
                <div className="subheading mb-3">
                  Computer Science and Engineering
                </div>
                <p>Fundamentals of Programming (Java)</p>
                <p>Programming and Data Structures (Java)</p>
                <p>Applied Engineering Computer Methods (Matlab,C++)</p>
                <p>Systems Software (C,C++)</p>
                <p>Foundations of Discrete Structures and Algorithms</p>
              </div>
              <div className="resume-date text-md-right">
                <div className="subheading">
                  In Progress/Soon to be Completed
                </div>
                <p>Computer Organization and Architecture (C/C++)</p>
                <p>Engineering Experience</p>
                <p>Foundations of Robotics</p>
                <p>Software Engineering</p>
                <p>Programming Languages</p>
                <p>Operating System Design</p>
              </div>
            </div>
          ))}
          {this.education.map((data, index) => (
            <div
              key={index}
              className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5"
            >
              <div className="resume-content">
                <div className="subheading mb-3">Economics</div>
                <p>Principles of Economics</p>
                <p>Money,Banking, and Financial Markets</p>
                <p>Intermediate Microeconomic Analysis</p>
                <p>Intermediate Macroeconomic Analysis</p>
                <p>Econometrics (Stata)</p>
              </div>
              <div className="resume-date text-md-right">
                <div className="subheading">
                  In Progress/Soon to be Completed
                </div>
                <p>Economic Development</p>
              </div>
            </div>
          ))}
          {this.education.map((data, index) => (
            <div
              key={index}
              className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5"
            >
              <div className="resume-content">
                <div className="subheading mb-3">Mathematics</div>
                <p>Calculus I,II</p>
                <p>Statistical Methods I,II</p>
              </div>
              <div className="resume-date text-md-right">
                <div className="subheading ml-5">
                  In Progress/Soon to be Completed
                </div>
                <p>Calculus III</p>
                <p>Linear Algebra</p>
              </div>
            </div>
          ))}
          {this.education.map((data, index) => (
            <div
              key={index}
              className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5"
            >
              <div className="resume-content">
                <div className="subheading mb-3">Other</div>
                <p>Intro to Business in a Global Enviorment</p>
                <p>Seminar in Critical Reading and Writing</p>
                <p>Making and Breaking: US History</p>
                <p>Introduction to World Politics</p>
                <p>Natural Science: Climate Change</p>
                <p>Belief, Knowledge, and Action: Introduction to Philosophy</p>
              </div>
              <div className="resume-date text-md-right">
                <div className="subheading ml-5">
                  In Progress/Soon to be Completed
                </div>
                <p>Science of Enviormental Issues</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}
export default Education;
