import React from "react"
import Loader from "./Loader"

const VideoDeatil = ({ video }) => {
  if (!video) {
    return <Loader />
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
  return (
    <div>
      <div className="ui embed">
        <iframe title="Video Player" src={videoSrc} />
      </div>
      <div className="ui piled segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  )
}

export default VideoDeatil
