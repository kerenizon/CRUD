import React from 'react';
import '../index.css';



class DisplayItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {songsResults: []};
  }
  
  handleBtnsClick = (e) => {
    console.log('clicked');
    const songName = e.target.parentElement.parentElement.firstElementChild.firstElementChild.title;
    this.props.onButtonsClick(e, songName);
  }

  displaySongs = (arr) => {
    const songsArr = arr.map((song) => {
      return (
        <div className="songDiv" key= {song.id}>
          <div className="imgDiv"> 
            <img 
            alt={song.singer} 
            title = {song.song} 
            // src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/800px-A_small_cup_of_coffee.JPG" 
            src = {song.albumImg}
            height="130px"
            width="150px"
            /> 
          </div>
          <div className="content">
            <h2>{song.song}</h2>
            <div className="meta">
              <h3>{song.singer}</h3>
              <a href={song.link}>link to the song</a>
            </div>
          </div>
          <div className="buttons">
            <button onClick={this.handleBtnsClick}>read</button>
            <button onClick={this.handleBtnsClick}>edit</button>
            <button onClick={this.handleBtnsClick}>delete</button>
          </div>
      </div>
      );
    })
    return songsArr;
  }

  componentDidMount = () => {
    this.setState({songsResults: this.displaySongs(this.props.listResult)});
  }

  //this function is used for udpating the child props when the parent props are changed  
  componentWillReceiveProps(nextProps){
    this.setState({
      songsResults : this.displaySongs(nextProps.listResult)
    });
  }
  // static getDerivedStateFromProps = (props, state) => {
  //   return {
  //     songsResults : displaySongs(props.listResult)
  //   };
  // }

  render(){
    return(
      <div>
        {this.state.songsResults}      
      </div>
    );
  }
}

export default DisplayItem;
