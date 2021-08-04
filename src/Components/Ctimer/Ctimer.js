import React from 'react';

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

export default class Ctimer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter : 0,
        };
    }
    componentDidMount() {
        // this.setState(counter)
        setInterval(() => {
            this.setState({counter: this.state.counter+1})
          }, 1000);
    }
    render(){
        return(
            <div style={styles}>
                <h2 style={styles.title}>Timer Klasowy</h2>
                <p style={styles.paragraph}>Jesteś na stronie od {this.state.counter} sekund.</p>
            </div>
        );
    };
}