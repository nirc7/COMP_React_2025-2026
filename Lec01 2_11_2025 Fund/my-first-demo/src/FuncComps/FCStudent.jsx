
export default function FCStudent(props) {

    let num = 1;
    let id = 7;
    let grade = props.grade;
    id++;
    if (id === 7) {
        console.log(7);
    }

    if (80 < grade) {
        grade += 5;
    }

    if (grade < 60) {
        return (
            <div>Fail!</div>
        );
    }

    function btnAddOne() {
        console.log(num);
        num++;
        console.log(num);
    }

    function txtcng(e) {
        console.log(e.target.value);
    }

    return (
        <div>
            <div>Student</div>
            id={id} <br />
            name = {props.name} <br />
            grade={grade} <br />
            <button onClick={btnAddOne} >Add 1</button> <br />
            num = {num}
            bonus = <input type="text" onChange={txtcng} />
        </div>
    );
}