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
      cat: {likesCount: 0, result: ''},
      dog: {likesCount: 0, result: ''}
      // catLikesCount: 0,
      // dogLikesCount: 0,
      // catResult: '',
      // dogResult: ''
    };
    this.handleLikeBtnClick = this.handleLikeBtnClick.bind(this);
    this.handleDislikeBtnClick = this.handleDislikeBtnClick.bind(this);
    this.handleShowWinnerBtnClick = this.handleShowWinnerBtnClick.bind(this);
    this.handleStartOverBtnClick = this.handleStartOverBtnClick.bind(this);
  }
  handleLikeBtnClick(event){
    var pet=event.target.name;
    if(pet==='Cat'){
      this.setState(function(preState){
        return{
          cat: {likesCount: preState.cat.likesCount+1, result: preState.cat.result}
          // catLikesCount: preState.catLikesCount+1,
          // dogLikesCount: preState.dogLikesCount
        };
      });

    }else if(pet==='Dog'){

      this.setState(function(preState){
        return{

          dog: {likesCount: preState.dog.likesCount+1, result: preState.dog.result}

          // catLikesCount: preState.catLikesCount,
          // dogLikesCount: preState.dogLikesCount+1
        };
      });

    }

  }

  handleDislikeBtnClick(event){

    var pet=event.target.name;
    if(pet==='Cat'){
      this.setState(function(preState){
        return{
          cat: {likesCount: preState.cat.likesCount-1, result: preState.cat.result}

          // catLikesCount: preState.catLikesCount-1,
          // dogLikesCount: preState.dogLikesCount
        };
      });

    }else if(pet==='Dog'){

      this.setState(function(preState){
        return{
          dog: {likesCount: preState.dog.likesCount-1, result: preState.dog.result}

          // catLikesCount: preState.catLikesCount,
          // dogLikesCount: preState.dogLikesCount-1
        };
      });

    }


  }

  handleShowWinnerBtnClick(){
    const catVotes = this.state.cat.likesCount;
    const dogVotes = this.state.dog.likesCount;
    var catRes = 'TIE', dogRes = 'TIE';
    if(catVotes > dogVotes){
      catRes = 'Winner';
      dogRes = 'Loser';
    }else if(dogVotes > catVotes){
      catRes = 'Loser';
      dogRes = 'Winner';
    }

    this.setState(function(preState){
      // catResult : catRes,
      // dogResult : dogRes
      return{
        cat: {likesCount: preState.cat.likesCount, result: catRes},
        dog: {likesCount: preState.dog.likesCount, result: dogRes}

      };

    });
  }

  handleStartOverBtnClick(){
    this.setState({
      cat: {likesCount: 0, result: ''},
      dog: {likesCount: 0, result: ''}
    });



  }

  render(){
    return(
      <div>
        <Title />
        <div style={subtitleStyle}>
          <PetComponent
            likesCount={this.state.cat.likesCount}
            petName='Cat'
            result={this.state.cat.result}
            petImageUrl="http://www.cutestpaw.com/wp-content/uploads/2011/11/Guggugg.jpg"
            onLikeBtnClick={this.handleLikeBtnClick}
            onDislikeBtnClick={this.handleDislikeBtnClick}
          />
          <PetComponent
            likesCount={this.state.dog.likesCount}
            petName='Dog'
            result={this.state.dog.result}
            petImageUrl="http://www.funchap.com/wp-content/uploads/2014/05/help-dog-picture.jpg"
            onLikeBtnClick={this.handleLikeBtnClick}
            onDislikeBtnClick={this.handleDislikeBtnClick}
          />
        </div>
        <div style={{textAlign: 'center'}}>
          {!this.state.cat.result && <button style={{marginTop: '50px', marginLeft:'5px', marginRight:'5px'}} onClick={this.handleShowWinnerBtnClick}>Show Winner</button>}
          {/* <button style={{marginTop: '50px', marginLeft:'5px', marginRight:'5px'}} onClick={this.handleShowWinnerBtnClick}>Show Winner</button> */}
          <button style={{marginTop: '50px', marginLeft:'5px', marginRight:'5px'}} onClick={this.handleStartOverBtnClick}>Start Over</button>
        </div>

      </div>

    );

  }
}

module.exports = HomePage;
