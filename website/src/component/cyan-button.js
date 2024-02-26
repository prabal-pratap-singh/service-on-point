function CyanButton(props) {
  return (<button
    style={{
      border: "none",
      position: props.position,
      display: "inline-flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "10px",
      background: "#47e4bf",
      left: props.left,
      top: props.top,
      width: props.width,
      height: props.height,
    }}
  >
    <span
      style={{
        color: "#fff",
        textAlign: "center",
        fontFamily: "Plus Jakarta Sans",
        fontSize: "16px",
        fontStyle: "normal",
        fontWeight: "800",
        lineHeight: "normal",
      }}
    >
      Let's Talk
    </span>
  </button>)
}

export default CyanButton;
