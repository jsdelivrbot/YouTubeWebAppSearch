import React from 'react';
import VideoListItem from './video_list_item';

//.. which is then passed into this component as (props)
const VideoList = (props) => {
    // const videos = props.videos;
    
    const videoItems = props.videos.map((video) => {
        //always need a key. Make it unique! 
        return (
            <VideoListItem 
            //passing onVideoSelect onto VideoListItem
            onVideoSelect={props.onVideoSelect}
            video={video} 
            key={video.etag}/>
        );
    });
    
    return (
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    )
}

export default VideoList;