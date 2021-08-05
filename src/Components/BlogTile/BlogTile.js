import React, { setState } from "react";

import Text from "./Text";

const styles = {
  margin: 5,
  maxWidth: "590px",
  backgroundColor: "#edf2f4",
  title: {
    margin: 0,
    fontFamily: "Trebuchet MS",
    fontStyle: "italic",
    fontSize: "32px",
    letterSpacing: "-1px",
    color: "#2a9d8f",
    padding: "10px"
  }
};

export default class BlogTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayText: "",
      showFull: false,
      clickAnchor: " ...more"
    };
  }

  shortenText = () => {
    this.props.intro.length > 25 && this.state.showFull === false
      ? this.setState({
          displayText: this.props.intro.slice(0, 25),
          clickAnchor: " ...more"
        })
      : this.setState({
          displayText: this.props.intro,
          clickAnchor: " ...less"
        });
  };

  showMore = () => {
    this.setState({
      showFull: !this.state.showFull
    });
    this.shortenText();
  };

  componentDidMount() {
    this.shortenText();
  }

  render() {
    return (
      <div style={styles} onClick={this.showMore}>
        <h2 style={styles.title}>{this.props.title}</h2>
        <Text
          txt={this.state.displayText}
          clickAnchor={this.state.clickAnchor}
        />
      </div>
    );
  }
}
