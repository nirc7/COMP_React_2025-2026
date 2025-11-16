
import React from 'react'

export default function FCStudent(props) {

    let grade = props.grade;
    if (80 < grade) {
        grade += 5;
    }

    return (
        <div style={{
            border: '2px solid black',
            borderRadius: 10,
            margin: 10,
            padding: 5,
            color: 'red'
        }}  >
            Student <br />
            name = {props.name} <br />
            grade={grade} <br /> <br />
        </div>
    )
}

