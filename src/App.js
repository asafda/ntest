import React from 'react';
import styled from 'styled-components';

const AppStyled = styled.div`
  text-align: center;

  .countries-list {
    list-style-type: none;
  }
`

class App extends React.Component {

  state= {
    name: [],
    originUpperLevels: []
  }

  componentDidMount() {
    fetch('http://api.homeis.com/v1/communities')
      .then(res => res.json())
      .then(res => {
        console.log(res.data);
        this.setState({name: res.data, originUpperLevels: res.data.originUpperLevels})
      });
  }

  render() {
    const { name, originUpperLevels } = this.state;
    console.log(name);
    return (
      <AppStyled className="App">
        <h1>Comunities</h1>
        <ul>
          {name.map( obj => <li className="countries-list">{obj.name}</li> )}
        </ul>
      </AppStyled>
    );
  }  
}

export default App;
