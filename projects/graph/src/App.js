import React, { Component } from 'react';
import { Graph } from './graph';
import './App.css';

// !!! IMPLEMENT ME
const canvasWidth = 800;
const canvasHeight = 600;

/**
 * GraphView
 */
class GraphView extends Component {
  /**
   * On mount
   */
  componentDidMount() {
    this.updateCanvas();
  }

  /**
   * On state update
   */
  componentDidUpdate() {
    this.updateCanvas();
  }

  /**
   * Render the canvas
   */
  updateCanvas() {
    let canvas = this.refs.canvas;
    let ctx = canvas.getContext('2d');

    // Create gradient
    var rgrd = ctx.createRadialGradient(0, 0, 1000, canvasWidth, canvasHeight, 0);
    rgrd.addColorStop(0, "red");
    rgrd.addColorStop(1, "white");

    // Fill with gradient
    ctx.fillStyle = rgrd;
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    // Clear it
    ctx.fillStyle = 'rgb(0, 206, 209)';
    ctx.fillRect(0, 0, 90, 180);
    ctx.fillStyle = 'rgb(0, 233, fff)';
    ctx.fillRect(200, 200, 200, 200);
    ctx.fillStyle = 'rgb(bbb, 201, 120)';
    ctx.fillRect(500, 50, 300, 450);

    ctx.moveTo(0, 0);
    ctx.lineTo(200, 100);
    ctx.lineTo(50, 100);
    ctx.lineTo(500, 500);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(500, 200, 75, 0, 2 * Math.PI);
    ctx.moveTo(0, 0);
    ctx.arc(100, 100, 100, 0, 2 * Math.PI);
    ctx.stroke();

    ctx.fillStyle = 'crimson';

    for (let i = 0; i < 500; i++) {
      ctx.beginPath();
      ctx.moveTo(800, 600);
      ctx.lineTo(i * 10, 0);
      ctx.stroke();
    }

    // create gradient
    let grd = ctx.createLinearGradient(0, 0, 400, 400);
    grd.addColorStop(0, 'red');
    grd.addColorStop(1, 'white');
    // fill with gradient
    ctx.fillStyle = grd;
    ctx.fillRect(0, 400, 300, 150);

    // !!! IMPLEMENT ME
    // compute connected components
    // draw edges
    // draw verts
    // draw vert values (labels)
  }

  /**
   * Render
   */
  render() {
    return <canvas ref="canvas" width={canvasWidth} height={canvasHeight}></canvas>;
  }
}


/**
 * App
 */
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      graph: new Graph()
    };

    // !!! IMPLEMENT ME
    // use the graph randomize() method
  }

  render() {
    return (
      <div className="App">
        <GraphView graph={this.state.graph}></GraphView>
      </div>
    );
  }
}

export default App;
