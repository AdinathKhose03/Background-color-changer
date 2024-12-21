import { useState } from "react";

function App() {
  const [color, setColor] = useState("beige");

  const changeColor = (newColor) => {
    setColor(newColor);
  };

  return (
    <>
      <ScreenWrapper bgcolor={color}>
        <TextDiv color={color}>

        </TextDiv>
        <ButtonWrapper>
          <ButtonComponent btnColor="black" onClick={() => changeColor("black")}>
            Button 1
          </ButtonComponent>
          <ButtonComponent btnColor="blue" onClick={() => changeColor("blue")}>
            Button 2
          </ButtonComponent>
          <ButtonComponent btnColor="red" onClick={() => changeColor("red")}>
            Button 3
          </ButtonComponent>
          <ButtonComponent btnColor="maroon" onClick={() => changeColor("maroon")}>
            Button 3
          </ButtonComponent>
          <ButtonComponent btnColor="pink" onClick={() => changeColor("pink")}>
            Button 3
          </ButtonComponent>
          <ButtonComponent btnColor="grey" onClick={() => changeColor("grey")}>
            Button 3
          </ButtonComponent>
        </ButtonWrapper>
      </ScreenWrapper>
    </>
  );
}

function ScreenWrapper({ children, bgcolor}) {
  return (
    <div
      style={{
        width: "100vw", // Full viewport width
        height: "100vh", // Full viewport height
        backgroundColor: bgcolor, // Blue background color
        display: "flex", // Flex layout
        flexDirection: "column", // Column direction
        justifyContent: "center", // Center content vertically
        alignItems: "center", // Center content horizontally
      }}
    >
      {children}
    </div>
  );
}

function ButtonWrapper({ children }) {
  return (
    <div
      style={{
        width: "60%", // Full width
        position: "fixed", // Fixed at the bottom
        bottom: 0, // Align to bottom
        backgroundColor: "white", // Light gray background
        padding: "1rem", // Padding
        display: "flex", // Flex layout for buttons
        justifyContent: "center", // Center buttons horizontally
        gap: "1rem", // Space between buttons
        margin:"auto",
        borderRadius:"10px"
      }}
    >
      {children}
    </div>
  );
}

function ButtonComponent({ btnColor, onClick }) {
  return (
    <button
      style={{
        padding: "0.5rem 1rem", // Button padding
        backgroundColor: btnColor, // Set button color dynamically
        color: "white", // White text
        border: "none", // No border
        borderRadius: "0.25rem", // Rounded corners
        cursor: "pointer", // Pointer on hover
        transition: "background-color 0.3s ease", // Smooth hover effect
      }}
      onClick={onClick}
    >
      Click Here
    </button>
  );
}

function TextDiv({color}){
  return (
    <div style={{
      marginTop: "2rem",
      color: "#213555",
      fontSize: "1.5rem",
    }}
>
      <h2>Background Color : {color}</h2>
    </div>
  )
}

export default App;
