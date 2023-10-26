import Form from "./components/Form";



function App() {

    const homeRoute = async () => {
    const res = await fetch('http://localhost:8000/')
    const parsedRes = await res.json();
    console.log(parsedRes);
  }

  homeRoute();


  
  return (
    <div className="App">
      <Form type = "sign-up"/> 
      <Form type = "sign-in"/>   
    </div>
  );
}

export default App;
