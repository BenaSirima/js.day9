const BigApp = {
    backgroundColor: 'beige',
    color: 'black',
    fontFamily: 'san-sarif',
    minHeight: '450px',
  }

const Header = {
    padding: '1em',
  }

const Section = {
    backgroundColor: 'palepink',
    padding : '1.5em',
    margin : '1em 1em 1em 1em',
    // marginBottom : '2em',
    borderRadius: '8px'

  }


function App() {
    return (
        <div style={BigApp}>
            <header style={Header}>
                <h1>Quick Start</h1>
                <p>Welcome to the React documentation! This page will give you an introduction to the 80% of React concepts that you will use on a daily basis.</p>
            </header>
            <section style={Section}>
                <h2>You will learn</h2>
                <ul>
                    <li>How to create and nest components</li>
                    <li>How to add markup and styles</li>
                    <li>How to display data</li>
                    <li>How to render conditions and lists</li>
                    <li>How to respond to events and update the screen</li>
                    <li>How to share data between components</li>
                </ul>
            </section>
        </div>
    );
}

ReactDOM.createRoot(document.querySelector('#root'))
    .render(<App />)