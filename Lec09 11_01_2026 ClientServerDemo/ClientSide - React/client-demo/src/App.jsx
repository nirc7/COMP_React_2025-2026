import './App.css'

const apiUrl = 'https://localhost:7026/api/Students/';

function App() {

  const btnGetAll = () => {
    fetch(apiUrl, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json; charset=UTF-8',
        'Accept': 'application/json; charset=UTF-8',
      })
    })
      .then(response => {
        console.log('res=', response);
        console.log('res.status', response.status);
        console.log('res.ok', response.ok);
        return response.json()
      })
      .then(
        (result) => {
          console.log("fetch btnFetchGetStudents= ", result);
          result.map(st => console.log(st.name));
          console.log('result[0].FullName=', result[0].name);
        },
        (error) => {
          console.log("err post=", error);
        });
  }

  const btnGetById = () => {
    fetch(apiUrl + "2", {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json; charset=UTF-8',
        'Accept': 'application/json; charset=UTF-8',
      })
    })
      .then(response => {
        console.log('res=', response);
        console.log('res.status', response.status);
        console.log('res.ok', response.ok);
        return response.json()
      })
      .then(
        (result) => {
          console.log("fetch btnFetchGetStudents= ", result);
          console.log('result[0].FullName=', result.name);
        },
        (error) => {
          console.log("err post=", error);
        });
  }

  const btnPost = () => {
    const data = { //pay attention case sensitive!!!! should be exactly as the prop in C#!
      Id: 0,
      Name: 'nir',
      Grade: 77
    };

    fetch(apiUrl, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: new Headers({
        'Content-type': 'application/json; charset=UTF-8', //very important to add the 'charset=UTF-8'!!!!
        'Accept': 'application/json; charset=UTF-8',
      })
    })
      .then(res => {
        console.log('res=', res);
        return res.json()
      })
      .then(
        (result) => {
          console.log("fetch POST= ", result);
          console.log(result.grade);
          console.log(result.id);
        },
        (error) => {
          console.log("err post=", error);
        });

  }

  const btnPut = () => {
    const data = { //pay attention case sensitive!!!! should be exactly as the prop in C#!
      Id: 2,
      Name: 'eli',
      Grade: 90
    };

    fetch(apiUrl + "2", {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: new Headers({
        'Content-type': 'application/json; charset=UTF-8', //very important to add the 'charset=UTF-8'!!!!
        'Accept': 'application/json; charset=UTF-8',
      })
    })
      .then(res => {
        console.log('res=', res);
        console.log('res=', res.status);
      },
        (error) => {
          console.log("err post=", error);
        });
  }

  const btnDelete=()=>{
    fetch(apiUrl + "2", {
      method: 'Delete',
      headers: new Headers({
        'Content-type': 'application/json; charset=UTF-8', //very important to add the 'charset=UTF-8'!!!!
        'Accept': 'application/json; charset=UTF-8',
      })
    })
      .then(res => {
        console.log('res=', res);
        console.log('res=', res.status);
      },
        (error) => {
          console.log("err post=", error);
        });
  }

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={btnGetAll}>Get All</button> <br />
        <button onClick={btnGetById}>Get By Id</button> <br />
        <button onClick={btnPost}>Post</button> <br />
        <button onClick={btnPut}>Put</button> <br />
        <button onClick={btnDelete}>Delete</button> <br />
      </div>
    </>
  )
}

export default App
