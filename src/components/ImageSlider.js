import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";

// You can use ThemeProvider to add a theme to the entire component

const theme = {
  primary: "red",
  secondary: "gold",
};

const Button = styled.button`
  
  font-size: 1.3rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  padding: 7px 10px;
  /* background: ${(props) => (props.primary ? "red" : "black")}; */
  background: ${(props) => props.theme.primary};
  color: white;
  &:hover {
    background: ${(props) => props.theme.secondary};
    color: black;
  }
`;

const H1 = styled.h1`
  font-size: 3rem;
`;

const Image = styled.img`
  width: 400px;
  height: 400px;
  border-radius: 15px;
  margin: 15px;
`;

class ImageSlider extends Component {
  state = {
    images: [
      "https://cdn.vox-cdn.com/thumbor/jL5dWxjiE31pge69711ibkMUb0g=/0x0:4142x2761/1200x800/filters:focal(1734x344:2396x1006)/cdn.vox-cdn.com/uploads/chorus_image/image/66236609/usa_today_13966081.0.jpg",
      "https://www.sfexaminer.com/wp-content/uploads/2019/11/19516497_web1_George-Kittle-Arizona.jpg",
      "https://cdn.vox-cdn.com/thumbor/2niMyBa-l4LmhG0wZIR0pYREBwU=/0x0:3456x2804/1200x800/filters:focal(912x1556:1464x2108)/cdn.vox-cdn.com/uploads/chorus_image/image/65381310/1175431334.jpg.0.jpg",
      "https://lh3.googleusercontent.com/proxy/lvechizFdcgA0V_adDUoxuv2YIsAyZrmFeHD_unuOHKNTNeVhb0ddUKRy1OD3BBCaATaQy8ikW4Yo2fkxy8y2GLvH09N3LNzYFQu-ZroZIYSbKtsqO6UFq5goOTTccPVJFJBObszzo4BNJFXnd5xyhEpHiwrJbZwyboBLNE9ZTUW5hvF4LZ3u-P7zTzI1qHNEcgZCc_utby2Cd1tLHh0f9DczzuOzLlBpe85Z5bhtNYz",
    ],
    idx: 0,
  };

  handleNext = () => {
    this.setState({
      idx: (this.state.idx + 1) % this.state.images.length,
    });
  };

  handlePrevious = () => {
    this.setState({
      idx: (this.state.idx - 1) % this.state.images.length,
    });
  };

  render() {
    return (
      <ThemeProvider theme={theme}>
        <div>
          <H1>Cornerstone pieces of the 49ers</H1>
          <Button onClick={this.handlePrevious}>Previous</Button>
          <Image alt="Jimmy G" src={this.state.images[this.state.idx]} />
          <Button onClick={this.handleNext}>Next</Button>
        </div>
      </ThemeProvider>
    );
  }
}

export default ImageSlider;
