import { ReactComponent as Vector1 } from "../home/assets/vector-1.svg";
import { ReactComponent as Vector2 } from "../home/assets/vector-2.svg";

function PlayBackVideo(props) {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "100px"
      }}
    >
      <div
        style={{
          position: "absolute"
        }}
      >
        <img
          src="https://s3-alpha-sig.figma.com/img/d876/998c/2f2f84e200d91d406a3bbc70c2223221?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DnJpBzM0deYPBF9AKtB3rGZ8Sj68LDrvCNxL76DcU8hMuV2mDWdTIGJ8kO0V2uFCJ9ETqJHNYHvRSglIKCAJ8W4~4I35RvIUzcITNsSBrJ2-robGFURD6~40a7NKL3agSCGOy3YYaMM8wAXSAvgKfDeY1QFwDODtCe43uQOrgpA~JZAt9ecfuyhZnP3IDznTXzcbwYzVLjfo3c9B-767k9IA2hxdEseYsTUzi2IbDt32xLS8EKSstrhiPAUqYe5wE-aMBWxlJFZHa7A3f6Z7mAB8U703l4p1oyPFIJpSHavDWPltnVG5f0QxNE4bFiyjkWieDwVtO1-Q6ZizMhq9qA__"
          alt="video"
          style={{
            mixBlendMode: "luminosity",
            zIndex: 1,
          }}
        />
        <Vector1
          style={{
            position: "absolute",
            zIndex: 2,
            left: "925px",
            top: "1px",
          }}
        />
        <Vector2
          style={{
            position: "absolute",
            zIndex: 1,
            left: "1040px",
            top: "-1px"
          }}
        />
      </div>
    </div>
  );
}

export default PlayBackVideo;
