import "./watch.scss";
import ArrowBackOutlined from "@mui/icons-material/ArrowBackOutlined";

export default function Watch() {
  return (
    <div className="watch">
      <div className="back">
        {" "}
        <ArrowBackOutlined />
        Home
      </div>

      <video
        className="video"
        autoPlay
        progress
        controls
        src="/videos/STvid.mp4"
      />
    </div>
  );
}
