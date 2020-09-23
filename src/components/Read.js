import React from 'react';
import '../index.css';

class Read extends React.Component{
  constructor(props){
    super(props);
    this.state = {selectedSong: ''}
  }

  componentDidMount(){
    const selectedSong = this.props.playlistArr.filter((song) => {
      if (this.props.selectedSongName === song.song){
        return song;
      }
    });
    this.setState({ selectedSong });
  }

  handleClickOutside = (e) => {
    this.props.onClose();
  }


  render(){
    const obj = this.state.selectedSong[0];
    if (!obj)
      return 'loading';
    else{
        return (
          <div className="modalOuter open" onClick={this.handleClickOutside}>
            <div className="modalInner">
              <form className="selectedSongForm">
                <label>Song:</label>
                <label>{obj.song}</label> <br/>
                <label>Singer:</label>
                <label>{obj.singer}</label> <br/>
                <label>Song URL:</label>
                <label>{obj.link}</label> <br/>
                <label>Lyrics:</label>
                <label>{obj.lyrics}</label> 
              </form>
            </div>
          </div>
        );
      }
    }   
}

export default Read;
