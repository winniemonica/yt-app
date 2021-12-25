import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import Videodetail from "./VideoDetails";
import useVideos from "./hooks/useVideos";

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null)
  const [video, search] = useVideos('itzy')

  useEffect(() => {
    setSelectedVideo(video[0])
  }, [video])

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <Videodetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList OnVideoSelect={setSelectedVideo} videos={video} />
          </div>
        </div>
      </div>
    </div>
  )
}





// class App extends Component {
//   state = { videos: [], SelectedVideo: null }

//   componentDidMount() {
//     this.onTermSubmit('itzy');
//   }

//   onTermSubmit = async (term) => {
//     const response = await youtube.get('/search', {
//       params: {
//         q: term
//       }
//     })
//     this.setState({ videos: response.data.items, SelectedVideo: response.data.items[0] })
//   }

//   OnVideoSelect = (video) => {
//     this.setState({ SelectedVideo: video })
//   }
//   render() {
//     return (
//       <div className="ui container">
//         <SearchBar onFormSubmit={this.onTermSubmit} />
//         <div className="ui grid">
//           <div className="ui row">
//             <div className="eleven wide column">
//               <Videodetail video={this.state.SelectedVideo} />
//             </div>
//             <div className="five wide column">
//               <VideoList OnVideoSelect={this.OnVideoSelect} videos={this.state.videos} />
//             </div>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }
export default App;
