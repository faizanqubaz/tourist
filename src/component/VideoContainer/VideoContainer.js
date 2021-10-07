import list from '../../videos/f.mp4'
import './VideoContainer.css'
const VideoContainer = () => {
  return (
    <>
      <div className='video_container_slider'>
        <div className='video_container_contents'>
          <h1 className='video_container_contents_heading'>Videos</h1>
          <div className='video_container_videolist'>
            <div>
              <video className='video_container_main' autoPlay loop muted>
                <source src={list} type='video/mp4' />
              </video>
              <h3 style={{ margin: 0 }}>Welcome to Normal</h3>
              <p>A group of our earliest preorder holders joined us for R1T drives, a plant tour and tacos on the Camp Kitchen.</p>
            </div>

            <div className='video_container_list_list'>
              <hr />

              <video className='video_container_small'>
                <source src={list} type='video/mp4' />
                <div>
                  <h4>Welcome to normal</h4>
                  <p>A group of our earliest preorder holders</p>
                </div>
              </video>

              <hr />

<video className='video_container_small'>
  <source src={list} type='video/mp4' />
  <div>
    <h4>Welcome to normal</h4>
    <p>A group of our earliest preorder holders</p>
  </div>
</video>
<hr />

<video className='video_container_small'>
  <source src={list} type='video/mp4' />
  <div>
    <h4>Welcome to normal</h4>
    <p style={{ margin: 0}}>A group of our earliest preorder holders</p>
  </div>
</video>

            </div>

            
          </div>
        </div>
      </div>
    </>
  )
}


export default VideoContainer;