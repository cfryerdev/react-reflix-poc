import React, { Fragment, useEffect, useState, useContext } from "react";
import ReactPlayer from 'react-player'
import { ContentContext } from "../../contexts/content-context";
import Loader from "../../components/loader";

const videoUrl = "https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8";

export default ({ match, history }) => {
  const [url, setUrl] = useState('');
  const [loaded, setLoaded] = useState(false);

  const content = useContext(ContentContext);
  console.log(content.contentId);

  useEffect(() => {
    setUrl(videoUrl);
  }, []);

  return (
    <Fragment>
      <h5>Video Player</h5>
      { (loaded === false) 
        ? <Loader />
        : null
      }
      <ReactPlayer 
        controls={true}
        url={url}
        onReady={() => { setLoaded(true)}}
        className="react-player"
        playing={false}
        width="100%"
        height="100%"
      />
    </Fragment>
  );
}