import React, { useState, useEffect } from 'react';

const styles = {
    margin: 5,
    maxWidth: '590px',
    backgroundColor: '#edf2f4',
    title : {
        margin: 0,
        fontFamily: 'Trebuchet MS',
        fontStyle: 'italic',
        fontSize: '32px',
        letterSpacing: '-1px',
        color: '#2a9d8f',
        padding: '10px',
    },
    paragraph: {
        margin: 0,
        padding: '15px',
        fontFamily: 'Arial',
        fontSize: '15px',
        color: '#e76f51',
    },
};

export default function Ftimer() {
    const [counter, setCounter] = useState(0);

    // const updateCounter = () => {
    //     setInterval(setCounter(counter+1), 1000);
    // }
    // useEffect(() => {
    //     updateCounter();
    // }, []);

    // useEffect(() => {
    //     setInterval(() => {
    //         setCounter(counter + 1);
    //     }, 1000);
    //   }, [counter]);

    useEffect(() => {
        let interval = null;

          interval = setInterval(() => {
            setCounter(counter => counter + 1);
          }, 1000);

        return () => clearInterval(interval);
      }, [counter]);

    return(
        <div style={styles}>
            <h2 style={styles.title}>Timer Funkcyjny</h2>
            <p style={styles.paragraph}>Jesteś na stronie od {counter} sekund.</p>
        </div>
    );
}