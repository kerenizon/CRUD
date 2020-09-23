import React from 'react';
import '../index.css';

class Update extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      songTerm: '',
      singerTerm: '',
      songURLTerm: '',
      albumImgTerm: '',
      lyricsTerm: '',
      selectedSong: ''
    }
  }

  componentDidMount(){
    const selectedSong = this.props.playlistArr.filter((song) => {
      if (this.props.selectedSongName === song.song){
        return song;
      }
    });
    this.setState({ selectedSong });
  }

  

  handleOnSave = (e) => {
    e.preventDefault();
    const editedSong = {
      id: this.state.selectedSong[0].id,
      song: this.state.songTerm,
      singer: this.state.singerTerm,
      link: this.state.songURLTerm,
      albumImg: this.state.albumImgTerm || '',
      lyrics: this.state.lyricsTerm || ''
    };
    this.props.onSubmit(editedSong);
  }


  render(){
    const obj = this.state.selectedSong[0];
    if (!obj)
      return 'loading';
    else {
      return (
        <div className="modalOuter open">
          <div className="modalInner">
            <form className="newSongForm" onSubmit={this.handleOnSave}>
              <h2>Edit the song details:</h2>
              <label>Song:</label>
              <input type="text" onChange={e => this.setState({songTerm :e.target.value})}></input> <br/>
              <label>Singer:</label>
              <input type="text" onChange={e => this.setState({singerTerm :e.target.value})}></input> <br/>
              <label>Song URL:</label>
              <input type="text" onChange={e => this.setState({songURLTerm :e.target.value})}></input> <br/>
              <label>Song Album img URL: (optional)</label>
              <input type="text" onChange={e => this.setState({albumImgTerm :e.target.value})}></input> <br/>
              <label>Lyrics: (optional)</label>
              <textarea onChange={e => this.setState({lyricsTerm :e.target.value})}></textarea> <br/>
              <div className="submit">
                <input type="submit" value="save"></input>
              </div>
            </form>
          </div>
        </div>
      );
    }
  }
}

export default Update;
