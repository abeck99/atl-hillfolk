import React from 'react'
import vis from 'vis'

 var nodes = new vis.DataSet([
        {id: 1, label: 'Node 1'},
        {id: 2, label: 'Node 2'},
        {id: 3, label: 'Node 3'},
        {id: 4, label: 'Node 4'},
        {id: 5, label: 'Node 5'}
    ]);

    // create an array with edges
    var edges = new vis.DataSet([
        {from: 1, to: 3},
        {from: 1, to: 2},
        {from: 2, to: 4},
        {from: 2, to: 5}
    ]);

var data = {
        nodes: nodes,
        edges: edges
    };
    var options = {};

    // initialize your network!


export default class UserGraph extends React.Component {
  componentDidMount() {
    var network = new vis.Network(this.refs.myRef, data, options);
  }

  render() {
    return <div ref="myRef" style={{height: this.props.height}}></div>;
  }
}