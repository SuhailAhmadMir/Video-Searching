import React from "react"

import SearchBar from "./SearchBar"
import youtube from "../apis/youtube"
import VideoList from "./VideoList"
import VideoDetail from "./VideoDetail"

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
    marginTop: "25%",
  }
  onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    })
    console.log(response)
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    })
  }

  onVideoSelect = (video) => {
    this.setState({
      selectedVideo: video,
    })
  }

  render() {
    return (
      <div className="ui container">
        {!this.state.selectedVideo ? (
          <div
            className="ui-segment padded"
            style={{ marginTop: `${this.state.marginTop}` }}
          >
            <SearchBar onFormSubmit={this.onTermSubmit} />
          </div>
        ) : (
          <div className="ui-segment padded" style={{ marginTop: "5%" }}>
            <SearchBar onFormSubmit={this.onTermSubmit} />
          </div>
        )}

        <div className="ui grid padded">
          <div className="eleven wide column">
            <VideoDetail video={this.state.selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList
              videos={this.state.videos}
              onVideoSelect={this.onVideoSelect}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App
