var React = require('react');
var ReactDOM = require('react-dom');
var createClass = require('create-react-class');
var Show = require('./Show');
var shows = require('./shows');

// var App = (
//   <ul>hello
//       <li>1</li>
//       <li>2</li>
//       <li>3</li>
//   </ul>
// );

// var Component = function(props){
//
//   var style={
//
//     color: props.color,
//     background: "yellow"
//   };
//
//   return(
//     <ul style={style}>{props.text}
//         <li>1</li>
//         <li>2</li>
//         <li>4</li>
//         <li>5</li>
//     </ul>
//
//   );
//
//
// };

// var ComponentNew = createClass({
//   getInitialState:function(){
//     return{
//       color: 'blue',
//       text: 'haha'
//     };
//
//
//
//   },
//
//   handleClickButton: function(){
//     this.setState(function(previous){
//
//       return{
//
//         color:(previous.color==='blue') ? 'green':'blue'
//       };
//       //console.log(previous.text);
//       //return previous;
//
//
//     });
//
//
//   },
//
//   render:function(){
//     console.log(this.state.color);
//     return(
//       <div>
//           <div style={{color: this.state.color}}>{this.props.text}</div>
//           <button onClick={this.handleClickButton}>click</button>
//       </div>
//
//
//     );
//
//   }
//
//
//
// });

ReactDOM.render(
  <Show shows={shows} showIndex={1}/>,

  document.getElementById('root')
);
