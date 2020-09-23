import React from 'react';
import '../index.css';
import DisplayItem from './DisplayItem';



class SongsList extends React.Component {
  constructor(props){
    super(props);
    this.state = {itemsArr : this.props.playlistArr};
  }

  handleBtnsClick = (e,songName) => {
    this.props.onButtonsClick(e,songName);
  }
  
   //this function is used for udpating the child props when the parent props are changed
  static getDerivedStateFromProps = (props, state) => {
    return {
      itemsArr : props.playlistArr
    };
  }


  render(){
    return (
      <div className="listDiv">
        <DisplayItem listResult={this.state.itemsArr} onButtonsClick={this.handleBtnsClick}/>
      </div>
      );
  }
}

export default SongsList;
