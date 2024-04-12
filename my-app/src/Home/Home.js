import { useState } from "react";

function Home(props){
    const [tekst, setTekst] = 
    useState("Ovo je moja prva aplikacija");

    const[ime, setIme] = useState("Bozo");
    const[godine, setGodine] = useState("16");
    const[novoIme, setNovoIme] = useState("");
    const[noveGodine, setNoveGodine] = useState("");


    const handleOnClick = (event) => {
        event.preventDefault();
        setIme(novoIme);
        setGodine(noveGodine);
        setNovoIme("");
        setNoveGodine("");
        props.funkcija(futerData)
      };

return <>
    <h1>{props.naslov}</h1>
    <div>{tekst}</div>
    
<form onSubmit={handleOnClick}>
    <label>
        ine:
        <input
        type="text"
        value={Novo ime}
        onChange={(event) => setNovoIme(event.target.value)}
    </label>
<br/>
<label>
    Godine
    <input
    type="number"
    value={NoveGodine}
    onChange={(event) =>{
        setNoveGodine(event.target.value);
        console.log(event);
    }}
/>
</label>
<button type = "submit">SUBMIT</button>
</form>
<div/>

</>

export default Home;