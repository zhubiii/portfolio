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
                <h3 classname="mb-0">Relevant Course Work</h3>
                <div className="subheading mb-3">
                  Computer Science and Engineering
                </div>
                <div className="subheading mb-3 text-md-right">In Progress
                  <p>Fundamentals of Programming (Java)</p>
                  <p>Programming and Data Structures (Java)</p>
                  <p>Applied Engineering Computer Methods (Matlab,C++)</p>
                  <p>Systems Software (C,C++)</p>
                </div>
                <p>Fundamentals of Programming (Java)</p>
                <p>Programming and Data Structures (Java)</p>
                <p>Applied Engineering Computer Methods (Matlab,C++)</p>
                <p>Systems Software (C,C++)</p>
                <p>Foundations of Discrete Structures and Algorithms</p>
                <div className="subheading mb-3">Economics</div>
                <p>Principles of Economics</p>
                <p>Money,Banking, and Financial Markets</p>
                <p>Intermediate Microeconomic Analysis</p>
                <p>Intermediate Macroeconomic Analysis</p>
                <p>Econometrics (Stata)</p>
                <div className="subheading mb-3">Mathematics</div>
                <p>Calculas I,II</p>
                <p>Statistical Methods I,II</p>
              </div>
              <div className="resume-date text-md-right">
                <span className="text-primary">
                  {data.fromDate} - {data.toDate}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default Education;
