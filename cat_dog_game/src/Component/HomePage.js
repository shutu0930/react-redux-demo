import React from 'react';
import PetComponent from './PetComponent'
var titleStyle={
  textAlign: 'center',
  fontSize:'2em',
  color:'rebeccapurple',
  marginTop:'20px'

};

var subtitleStyle={
  marginTop: '60px',
  textAlign: 'center'
};

class Title extends React.Component{
  render(){
    return(
      <h1 style={titleStyle}>Welcome to Cat and Dog Cuteness Fight Game!</h1>
    );
  }
}

class HomePage extends React.Component{
  constructor(props){
    super(props);
    this.state={
      catLikesCount: 0,
      dogLikesCount: 0
    };
    this.handleLikeBtnClick = this.handleLikeBtnClick.bind(this);
    this.handleDislikeBtnClick = this.handleDislikeBtnClick.bind(this);
    this.handleShowWinnerBtnClick = this.handleShowWinnerBtnClick.bind(this);
  }
  handleLikeBtnClick(event){
    var pet=event.target.name;
    if(pet==='Cat'){
      this.setState(function(preState){
        return{
          catLikesCount: preState.catLikesCount+1,
          dogLikesCount: preState.dogLikesCount
        };
      });

    }else if(pet==='Dog'){

      this.setState(function(preState){
        return{
          catLikesCount: preState.catLikesCount,
          dogLikesCount: preState.dogLikesCount+1
        };
      });

    }

  }

  handleDislikeBtnClick(event){

    var pet=event.target.name;
    if(pet==='Cat'){
      this.setState(function(preState){
        return{
          catLikesCount: preState.catLikesCount-1,
          dogLikesCount: preState.dogLikesCount
        };
      });

    }else if(pet==='Dog'){

      this.setState(function(preState){
        return{
          catLikesCount: preState.catLikesCount,
          dogLikesCount: preState.dogLikesCount-1
        };
      });

    }


  }

  handleShowWinnerBtnClick(){
    const catVotes = this.state.catLikesCount;
    const dogVotes = this.state.dogLikesCount;
    if(catVotes > dogVotes){
      console.log('Cat is the Winner!');
    }else if(dogVotes > catVotes){
      console.log('Dog is the Winner!');

    }else{
      console.log('Game is a TIE!');
    }
  }

  render(){
    return(
      <div>
        <Title />
        <div style={subtitleStyle}>
          <PetComponent
            likesCount={this.state.catLikesCount}
            petName='Cat'
            petImageUrl="http://www.cutestpaw.com/wp-content/uploads/2011/11/Guggugg.jpg"
            onLikeBtnClick={this.handleLikeBtnClick}
            onDislikeBtnClick={this.handleDislikeBtnClick}
          />
          <PetComponent
            likesCount={this.state.dogLikesCount}
            petName='Dog'
            petImageUrl="http://www.funchap.com/wp-content/uploads/2014/05/help-dog-picture.jpg"
            onLikeBtnClick={this.handleLikeBtnClick}
            onDislikeBtnClick={this.handleDislikeBtnClick}
          />
        </div>
        <div style={{textAlign: 'center'}}>
          <button style={{marginTop: '50px', marginLeft:'5px', marginRight:'5px'}} onClick={this.handleShowWinnerBtnClick}>Show Winner</button>
          <button style={{marginTop: '50px', marginLeft:'5px', marginRight:'5px'}} >Start Over</button>
        </div>

      </div>

    );

  }
}

module.exports = HomePage;
