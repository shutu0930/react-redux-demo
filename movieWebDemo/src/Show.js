var React = require('react');
var createClass = require('create-react-class');

var Title = createClass({
  render: function(){
    return(
      <h1>{this.props.title}</h1>
    );
  }
});


var Picture = createClass({
  render: function(){
    return(
      <img alt="Poster Show" style={{height:400, width: 400}} src={this.props.poster} />
    );
  }
});


var MovieInfo = createClass({
  render: function () {
    return(

      <div>
        <span>{this.props.intro}</span>
        <div>rating: {this.props.rating}</div>
      </div>
    );

  }

});

var Show = createClass({

  getDefaultProps: function(){
    return {
      showIndex: 0
    };
  },

  getInitialState: function(){
    return{
      showIndex: this.props.showIndex
    };
  },

  handleClickButton: function(){

    var totalNo = this.props.shows.length;
    //console.log(totalNo);
    this.setState(function(preIndex){
      return {
          showIndex: (preIndex.showIndex+1) % totalNo
      };
    });
  },

  render: function(){

    var shows = this.props.shows[this.state.showIndex];
    return(

      <div className="text-center">
        <Title title={shows.title}/>
        <Picture poster={shows.poster}/>
        <MovieInfo intro={shows.plot} rating={shows.imdbRating}/>
        <button onClick={this.handleClickButton}>Next Show</button>
      </div>
    );


  }


});

module.exports = Show;
