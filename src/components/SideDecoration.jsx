function SideDecoration({style}) {
  return (
    <div style={{decorationStyle}}>
    <div style={stylewrapper}>
      <div style={smalline}></div>

      <div style={longline}></div>

      <div style={dot}></div>
    </div>
    </div>
  );
}

export default SideDecoration;


const decorationStyle = {
    padding:0,
};
const smalline = {
  width: "4px",
  height: "30px",
  borderRadius: "4px",
  background: "#6a57d8",
};

const longline = {
  width: "4px",
  height: "195px",
  background: "#6a57d8",
  borderRadius: "4px",
};

const dot = {
  width: "10px",
  height: "10px",
  background: "#6a57d8",
  borderRadius: "50%",
  marginTop: "10px",   
};

const stylewrapper = {
  display: "flex",
  flexDirection: "column",
  gap: "80px",
  alignItems: "center",
  marginLeft: "30px",
  marginRight:0,
  marginTop:"155px"
};
