import React from 'react';

//this {video} is the same as const video = props.video
const VideoListItem = (props) => {
    // console.log(video)
    const video = props.video;
    const onVideoSelect = props.onVideoSelect;
    
    const imageUrl = video.snippet.thumbnails.default.url;
    return (
        //whenever li gets clicked, call that function onVideoSelect, with the video i was passed
        <li onClick={() => onVideoSelect(video)} className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl}/>
                </div>
                <div className="media-body">
                    <div className="media-heading">
                        {video.snippet.title}
                    </div>
                </div>
            </div>
        </li>
    );
};

export default VideoListItem;