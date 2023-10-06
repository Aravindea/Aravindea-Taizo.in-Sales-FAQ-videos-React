import styles from "./VideoPlayerPopupSowmiya.module.css";

const VideoPlayerPopupSowmiya = ({ onClose }) => {
  return (
    <div className={styles.videoPlayerPopupSowmiya}>
      <iframe
        className={styles.video}
        src={`https://www.youtube.com/embed/z2mWKDXG1xk?rel=0&autoplay=1&mute=1`}
        frameBorder="0"
        allowFullScreen
      />
    </div>
  );
};

export default VideoPlayerPopupSowmiya;
