

function Home(props){
console.log(props.pod);
    const tekst = "Ovo je moja prva aplikacija";
    return <div>
    <h1>{props.naslov}</h1>
    <div>{tekst}</div></div>
}

export default Home;