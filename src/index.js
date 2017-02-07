import React, { Component }from 'react'; //knows components
import ReactDOM from 'react-dom'; //functionality to render to DOM
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyC9w2bQnPqxdBjsW0VU8LiKOQlqTfGC3gM';

//example search: 
// YTSearch({key: API_KEY, term: 'surfboards'}, function(data){
//     console.log(data);
// });

//downwards data flow: meaning that only the upmost parent should be responsible for fetching data.

class App extends Component {
    //constructor always gets called with (props)
    constructor(props){
        super(props);
        
        //we are calling it video, and it will be an array cause we are expecting a list of objects.
        
        this.state = { 
            videos: [],
            selectedVideo: null
        };
        
        this.videoSearch('surfboards')
        
    }
    
    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (data) =>{
            //if you call data as videos, you can just this.setState({videos}) as its the same name
        this.setState({ 
            videos: data,
            //once loading is complete, selectedVideo will be set to the first video. 
            selectedVideo: data[0]
            });
        });
    }
    
    render() {
        //using lodash
        //debounce takes term and assigns into a new function that can be called once every 300ms
        //just like google search
        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300)
        
        //props are available in any component as this.props. for class based, 
        // and just props for function based components.
        return (
            <div>
                {/* Pass onSearchTermChange to SearchBar*/}
                <SearchBar onSearchTermChange={videoSearch}/>
                {/* selected video will be re-rendered once data[0] is loaded*/}
                <VideoDetail video={ this.state.selectedVideo } />
                {/* Passing from parent to child the state, onVideoSelect and videos as props*/}
                <VideoList 
                //this function just has one purpose, to update state, and pass that property to VideoList
                onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                videos={ this.state.videos } 
                />
            </div>
        );
    }
}


//make an instance by wrapping in <JSX tags> 
ReactDOM.render(<App />, document.querySelector('.container'));

// Components will produce HTML and put it on the DOM