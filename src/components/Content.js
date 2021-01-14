import { useState, useEffect } from 'react'
import { Col, Container, Row } from "react-bootstrap"

export default function Content() {
    const [courses, setCourses] = useState({ "": [] })
    const [currentCourse, setCurrentCourse] = useState("")
    const [courseAddMode, setCourseAddMode] = useState(false)
    const [currentStudents, setCurrentStudents] = useState([])
    const [currentStudent, setCurrentStudent] = useState("")
    const [addStudentMode, setAddStudentMode] = useState(false)

    const handleCourseChange = e => {
        const course = e.target.value
        setCurrentCourse(course)
    }

    useEffect(() => {
        setCurrentStudents(courses[currentCourse] || [])
    }, [currentCourse, courses])

    useEffect(() => {
        if (!currentCourse) setAddStudentMode(false)
    }, [currentCourse])

    const handleCourseAdd = () => {
        if (!(currentCourse || currentCourse in courses)) {
            alert("Empty text ! or duplicate value in courses")
        } else {
            courses[currentCourse] = []
            setCourses({ ...courses })
            setCurrentCourse("")
            setAddStudentMode(false)
        }
    }

    const handleStudentAdd = () => {
        if (currentCourse && currentStudent) {
            courses[currentCourse] = [...currentStudents, currentStudent]
            setCourses({ ...courses })
            setCurrentStudent("")
        } else {
            alert("Empty text or course not selected")
        }
    }

    return (
        <div>
            <Container fluid>
                <Row style={{ display: 'flex', flexDirection: 'row' }}>
                    <Col>
                        <div style={{ verticalAlign: 'middle', alignItems: 'center' }}>
                            <b>Course</b>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <select style={{ backgroundColor: 'aqua',paddingLeft:'32px',paddingRight:'32px' }} value={currentCourse} onChange={handleCourseChange}>
                                <option value={""}>Select Course</option>
                                {Object.keys(courses).filter(course => course).map(course =>
                                    <option value={course} key={course}>{course}</option>
                                )}
                            </select>
                        </div>
                        <br />
                        <div>
                            <button
                                onClick={() => setCourseAddMode(true)} style={{paddingLeft: '50px',paddingRight:'50px',backgroundColor: 'aqua' }}
                            >
                                Add Course
                            </button>
                        </div>
                        <br />
                        {courseAddMode &&
                            <Row style={{ display: 'flex', flexDirection: 'row' }}>
                                <Col>
                                    <input
                                        value={currentCourse}
                                        onChange={e => setCurrentCourse(e.target.value)}
                                        placeholder={"Course Name"} style={{textAlign: 'center'}}
                                    />
                                </Col>
                                {/* <Col>
                                <button
                                    onClick={()=> setCourseAddMode(false)}
                                >
                                    Cancel
                                </button>
                            </Col> */}
                                <Col>
                                    <img src=".\cross.ico" onClick={() => setCourseAddMode(false)} height="20px"></img>
                                </Col>
                                {/* <Col>
                                <button
                                    onClick={handleCourseAdd}
                                >
                                    Add
                                </button>
                            </Col> */}
                                <Col>
                                    <img src="/check.ico" onClick={handleCourseAdd} height="20px"></img>
                                    
                                </Col>
                            </Row>}
                    </Col>
                </Row>
                <br /><br />
                <Row style={{ display: 'flex', flexDirection: 'row' }}>
                    <Col>
                        <b>Students</b>
                    </Col>
                    <Col>
                        <div>
                            <select style={{ backgroundColor: 'aqua',paddingLeft:'32px',paddingRight:'32px' }} value={currentStudent} onChange={e => setCurrentStudent(e.target.value)}>
                                <option value={""}>Select Student</option>
                                {currentStudents.map(student =>
                                    <option value={student} key={student}>{student}</option>
                                )}
                            </select>
                        </div>
                        <br />
                        <div>
                            {currentCourse &&
                                <button
                                    onClick={() => setAddStudentMode(true)} style={{paddingLeft: '50px',paddingRight:'50px',backgroundColor: 'aqua' }}
                                >
                                    Add Student
                            </button>
                            }
                        </div>
                        <br />
                        {addStudentMode &&
                            <Row style={{ display: 'flex', flexDirection: 'row' }}>
                                <Col>
                                    <input
                                        value={currentStudent}
                                        onChange={e => setCurrentStudent(e.target.value)}
                                        placeholder={"Student Name"} style={{paddingLeft: '5px',paddingRight:'5px',textAlign: 'center'}}
                                    />
                                </Col>
                                {/* <Col>
                                    <button
                                        onClick={() => setAddStudentMode(false)}
                                    >
                                        Cancel
                                </button>
                                </Col> */}
                                <Col>
                                    <img src=".\cross.ico" onClick={() => setAddStudentMode(false)} height="20px"></img>
                                </Col>
                                {/* <Col>
                                    <button
                                        onClick={handleStudentAdd}
                                    >
                                        Add
                                </button>
                                </Col> */}
                                <Col>
                                    <img src=".\check.ico" onClick={handleStudentAdd} height="20px"></img>
                                </Col>
                            </Row>}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}