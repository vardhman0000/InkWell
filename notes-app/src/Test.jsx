import React, { useState, useEffect, useRef } from "react";

const MyComponent = () => {
    const previousValueRef = useRef();
    const [value, setValue] = useState(0);

    useEffect(() => {
        previousValueRef.current = value;

        if(previousValue < value){
            console.log("Prev Value LESS");
        }
        if(previousValue > value){
            console.log("Curr Value MORE");
        }
    }, [value]);

    const previousValue = previousValueRef.current;

    const incrementValue = () => {
        setValue(prev => prev + 1);
    };

    const decrementValue = () => {
        setValue(prev => prev - 1);
    };

    return (
        <div>
            <div>Current Value: {value}</div>
            <div>Previous Value: {previousValue}</div>
            <button onClick={incrementValue}>Increment</button>
            <button onClick={decrementValue}>Decrement</button>
        </div>
    );
};

export default MyComponent;
