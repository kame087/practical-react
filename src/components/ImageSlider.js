import React, { Component } from "react";
import { ThemeProvider } from "styled-components";

import Button from "../elements/Button";
import H1 from "../elements/H1";
import Image from "../elements/Image";

// You can use ThemeProvider to add a theme to the entire component

const theme = {
  primary: "red",
  secondary: "gold",
  alert: "yellow",
};

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
          <Button color="primary" onClick={this.handlePrevious}>
            Previous
          </Button>
          <Image alt="Jimmy G" src={this.state.images[this.state.idx]} />
          <Button color="primary" onClick={this.handleNext}>
            Next
          </Button>
        </div>
      </ThemeProvider>
    );
  }
}

export default ImageSlider;
