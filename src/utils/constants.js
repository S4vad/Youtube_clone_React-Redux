const GOOGLE_API_KEY="AIzaSyCt5eopybzR9apRHZzcGq6-0CUYymL9eZc"

export const YOUTUBE_VIDEOS_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${GOOGLE_API_KEY}`;

// export const YOUTUBE_SEARCH_SUGGESTION_API = "https://thingproxy.freeboard.io/fetch/http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";


export const  YOUTUBE_SEARCH_API = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=25&key=${GOOGLE_API_KEY}`;