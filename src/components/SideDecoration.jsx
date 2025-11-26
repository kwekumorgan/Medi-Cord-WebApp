function SideDecoration() {
  return (
    <div style={stylewrapper}>
      <div style={smalline}></div>

      <div style={longline}></div>

      <div style={dot}></div>
    </div>
  );
}

export default SideDecoration;

const smalline = {
  width: "4px",
  height: "30px",
  borderRadius: "4px",
  background: "#6a57d8",
};

const longline = {
  width: "4px",
  height: "180px",
  background: "#6a57d8",
  borderRadius: "4px",
};

const dot = {
  width: "10px",
  height: "10px",
  background: "#6a57d8",
  borderRadius: "50%",
};

const stylewrapper = {
  display: "flex",
  flexDirection: "column",
  gap: "85px",
  alignItems: "center",
};
