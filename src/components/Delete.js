import React from 'react';
import '../index.css';

class Delete extends React.Component{

  componentDidMount(){
    const selectedSong = this.props.playlistArr.filter((song) => {
      if (this.props.selectedSongName === song.song){
        return song;
      }
    });
    this.props.onDelete(selectedSong);
  }


  render(){
    return (
      <div></div>
    );
  }
}

export default Delete;
