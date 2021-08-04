import React, { setState } from 'react';

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

export default class BlogTile extends React.Component {
    constructor ( props ) {
        super(props);
        this.state = {
            displayText: '',
        };
    }

    checkIntro = () => {
        (this.props.intro.length > 25)
        ? this.setState({displayText: this.props.intro.slice(0, 25) + " ..."})
        : this.setState({displayText: this.props.intro});
    }

    componentDidMount() {
        this.checkIntro();
    }

    render() {
        return(
            <div style={styles}>
                <h2 style={styles.title}>{this.props.title}</h2>
                <p style={styles.paragraph}>{this.state.displayText}</p>
            </div>
        );
    }
};