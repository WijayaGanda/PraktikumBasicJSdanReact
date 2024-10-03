const { useState } = React;
const Counter = () => {
    const[count, setcount] = useState(0);

    const increment = () => {
        setcount(count + 1);
    }
    const decrement = () => {
        setcount(count - 1)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={decrement}>-1</button>
            <button onClick={increment}>+1</button>
        </div>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<Counter />);


