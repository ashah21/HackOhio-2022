import {Component} from "react";

const Class = ({students, cls, section, time}) => {
    const studentList = [];
    var studentData = students["data"];


    console.log(studentData);
    if (students != null) {
        // 30 entries
        for (let i = 0; i < 30 && i < studentData.length; i++) {
            var student = studentData[i];
            studentList.push(<ClassEntry
                name={student['name']}
                disability={student['disability']}
                accommodations={student['accommodations']}
            />)
        }
    }

    console.log(studentList);

    return (
        <div className="center">
            <div className="studentTableContainer">
                <div className="studentTableHeader">
                    <p>Upcoming Class at {time}</p>
                    <p>Class: {cls}</p>
                    <p>Section: {section}</p>
                </div>
                <table>
                    <div>
                        <th className="table_title_student">Student</th>
                        <th className="table_title_disability">Disability</th>
                        <th className="table_title_accommodations">Accommodations</th>
                    </div>
                    {studentList}
                </table>
            </div>
        </div>

    )


}

const ClassEntry = ({name, disability, accommodations}) => {
    return (
        <div className="studentEntry">
            <tr>
                <td className="table_title_student">
                    <p className="rowText">{name}</p>
                </td>
                <td className="table_title_disability">
                    <p className="rowText">{disability}</p>
                </td>
                <td className="table_title_accommodations">
                    <p className="rowText">{accommodations}</p>
                </td>
            </tr>
        </div>
    )
}

export default Class;