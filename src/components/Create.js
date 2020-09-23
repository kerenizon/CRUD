import React from 'react';
import '../index.css';

class Create extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      songTerm: '',
      singerTerm: '',
      songURLTerm: '',
      albumImgTerm: '',
      lyricsTerm: '',
    }
  }

  

  handleOnSubmit = (e) => {
    e.preventDefault();
    const newSong = {
      id: this.props.playlistArr.length + 1,
      song: this.state.songTerm,
      singer: this.state.singerTerm,
      link: this.state.songURLTerm,
      albumImg: this.state.albumImgTerm || '',
      lyrics: this.state.lyricsTerm || ''
    };
    this.props.onSubmit(newSong);
  }


  render(){
    return (
      <div className="modalOuter open">
        <div className="modalInner">
          <form className="newSongForm" onSubmit={this.handleOnSubmit}>
            <h2>The new song details:</h2>
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
              <input type="submit" name="submit" value="submit"></input>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Create;
