import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div>
      	{this.props.children}
        这是一个基于ReactJS Flux的demo
      </div>
    );
  }
}

export default App;