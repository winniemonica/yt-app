import react from "react";
import './VideoItem.css';

const VideoItem = ({ video, onVideoSelect }) => {
    const { title, thumbnails } = video.snippet
    return (
        <div onClick={() => onVideoSelect(video)} className=" video-item item">
            <img alt={title} className="ui image" src={thumbnails.medium.url}></img>
            <div className="content">
                <a className="header">{title}</a>
            </div >
        </div >
    )
}
export default VideoItem;