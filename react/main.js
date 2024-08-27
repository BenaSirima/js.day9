//console.log(React)
function App() { 
    const [count, setCount] = React.useState(0)
    const updateCounter = (n) => {
        if (count+n < 0) {return}
        setCount( prv => {
            prv+=n
            return prv
        } )
    }
    console.log('App run...')
    return (
        <div>
            <button onClick={()=>updateCounter(10)}>+10</button>
        <h1>Counter App</h1>
        <Counter count={count} updateCounter={updateCounter} />


        </div>
    )
}
function Counter(props) {
    const {count,updateCounter } = props
    //const [count, setCount] = React.useState(0)
    console.log('Counter run...')
    console.log(props)
    
    // const hdlClick= (n) => {
    //     if(count+n < 0) { return }
        //setCount(count+n)
        return (
   
    
    <div className="counter">
        <button onClick={()=>updateCounter(-1)}>-</button>
        <h2>{count}</h2>
        <button onClick={()=>updateCounter(1)}>+</button>
        <button onClick={()=>updateCounter(-count)}>C</button>
        
    </div>
    )
}
console.log(ReactDOM)
ReactDOM.createRoot(document.querySelector('#root'))
.render(<App />)
