import React from 'react';

var compStyle={
  display: 'inline-block',
  marginLeft: '5px',
  marginRight: '5px',
};
var imageStytle={
  height: '300px',
  width: '300px'
};
var btnStyle={
  height: '20px',
  width: '60px',
  marginLeft:'5px',
  marginRight: '5px',
  marginTop:'10px'
};
class PetComponent extends React.Component{

    render(){
      return(
        <div style={compStyle}>
            <h3>{this.props.petName} likes: {this.props.likesCount}</h3>
            <img style={imageStytle} src={this.props.petImageUrl} alt={"Lovele"+this.props.petName} />
            <br />
            <button style={btnStyle} name={this.props.petName} onClick={this.props.onLikeBtnClick}>Like</button>
            <button style={btnStyle} name={this.props.petName} onClick={this.props.onDislikeBtnClick}>Dislike</button>
        </div>

      );


    };

}



module.exports = PetComponent;
