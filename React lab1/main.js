const App = () => {
    const firstName = 'Sirima';
    const lastName = 'Khamsomboon';
    const birthYear = 2000;
    const st1 = {
        backgroundColor: 'powderblue',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'baseline',
        }
    const st2 = { 
        color: 'red',
        backgroundColor: 'beige' }
    
    return (
        <div>
            <h1 style={st1} >{firstName} {lastName}</h1>
            <p style={st2} >อายุ: {calculateAge(birthYear)} ปี</p>
        </div>
    );
}

const calculateAge = (birthYear) => {
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
};

ReactDOM.createRoot(document.querySelector('#root'))
    .render(<App />)