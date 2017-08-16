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
      const result = this.props.result;
      var resultStyle = null;
      var disabled = false;
      if(result !== ''){

        if(result === 'Winner'){
          resultStyle = {color : 'Red'};
        }else{
          resultStyle = {color : 'Green'};
        }
        disabled = true;
      }


      return(

        <div style={compStyle}>

          <h2 style={resultStyle}>{result}</h2>
            {(this.props.result)?(  <h3>{this.props.petName} likes: {this.props.likesCount}</h3>
            ):(
              <h3>{this.props.petName}</h3>
            )}
            {/* <h3>{this.props.petName} likes: {this.props.likesCount}</h3> */}
            <img style={imageStytle} src={this.props.petImageUrl} alt={"Lovele"+this.props.petName} />
            <br />
            <button style={btnStyle} disabled={disabled} name={this.props.petName} onClick={this.props.onLikeBtnClick}>Like</button>
            <button style={btnStyle} disabled={disabled} name={this.props.petName} onClick={this.props.onDislikeBtnClick}>Dislike</button>
        </div>

      );


    };

}



module.exports = PetComponent;
