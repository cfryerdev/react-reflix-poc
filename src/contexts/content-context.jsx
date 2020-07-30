import React, { Component } from "react";
// import { ContentFunctions } from "./content-functions"

const ContentContext = React.createContext({ 
  home: [],
  series: [],
  movies: [],
  contentId: '',
  type: ''
});
const ContentConsumer = ContentContext.Consumer;

class ContentProvider extends Component {
  constructor(state) {
    super(state);
    this.state = { 
      home: [],
      series: [],
      movies: [],
      contentId: '',
      type: ''
    };
  }

  componentDidMount() {
    
  }

  render() {
    const { children } = this.props;
    return (
      <ContentContext.Provider value={{ 
        home: this.home, 
        series: this.series, 
        movies: this.movies,
        contentId: this.contentId,
        type: this.type
      }} >
        {children}
      </ContentContext.Provider>
    );
  }
}

export { ContentContext, ContentProvider, ContentConsumer };
