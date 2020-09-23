import React from 'react';
import '../App.css';
import '../index.css';
import Create from './Create';
import Read from './Read';
import Update from './Update';
import Delete from './Delete';
import mockapi from '../api/mockapi';
import SongsList from './SongsList';

class App extends React.Component {
  state = {playlistArr: [], showCreateModal: false, showReadModal: false, showEditModal: false, deleteItem: false, selectedSongName: ''};

  async componentDidMount(){
    const response = await mockapi.get('/playlist');
    this.setState({playlistArr: response.data});
    console.log(this.state.playlistArr);
  }

  onPlusClick = () => {
    this.setState({showCreateModal : true});
  }

  postNewSong = async (newSong) => {
    await mockapi.post('/playlist',newSong);
    this.setState({showCreateModal : false})
    this.setState((prevState, prevProps) => {
      return {playlistArr: [...prevState.playlistArr, newSong]};
    })
  }

  handleBtnsClick = (e,songName) => {
    switch(e.target.innerHTML){
      case 'read':
        this.setState({showReadModal: true});
        break;
      case 'edit':
        this.setState({showEditModal: true});
        break;
      case 'delete':
        this.setState({deleteItem: true});
        break
    }
    this.setState({selectedSongName: songName});
  }

  onReadClose = () => {
    this.setState({showReadModal: false});
  }

  editSong = async (editedSong) => {
    await mockapi.put(`/playlist/${editedSong.id}`,editedSong);
    const response = await mockapi.get('/playlist');
    this.setState({playlistArr: response.data});
    this.setState({showEditModal : false})
  }

  deleteSong = async (deletedSong) => {
    await mockapi.delete(`/playlist/${deletedSong[0].id}`);
    const response = await mockapi.get('/playlist');
    this.setState({playlistArr: response.data});
    this.setState({deleteItem : false});
  }

  render(){
    const {playlistArr} = this.state;
    if ((playlistArr === []) || (playlistArr.length === 0))
      return 'loading';
    else{
      return (
        <div className="App">

          {this.state.showCreateModal && <Create playlistArr = {this.state.playlistArr} onSubmit = {this.postNewSong}/>}
          {this.state.showReadModal && <Read playlistArr = {this.state.playlistArr} selectedSongName = {this.state.selectedSongName} onClose = {this.onReadClose}/>}
          {this.state.showEditModal && <Update playlistArr = {this.state.playlistArr} selectedSongName = {this.state.selectedSongName} onSubmit = {this.editSong}/>}
          {this.state.deleteItem && <Delete playlistArr = {this.state.playlistArr} selectedSongName = {this.state.selectedSongName} onDelete = {this.deleteSong}/>}
          
          <button className="plusBtn" onClick={this.onPlusClick}>+</button>
          <div className="container">
            <h1>My Playlist</h1>  
            <SongsList playlistArr = {this.state.playlistArr} onButtonsClick={this.handleBtnsClick}/>
          </div>
        </div>
        );
    }
    
  }
}

export default App;
