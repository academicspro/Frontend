import React from "react";


interface LoaderProps {
  size?: number;
  color?: string;
  variant?: "spinner" | "dots";
}

const CustomLoader: React.FC<LoaderProps> = ({
  size = 40,
  color = "#3d85c6",
  variant = "spinner",
}) => {
  return (
    <div className="custom-loader-overlay">
      {variant === "spinner" ? (
        <div
          className="spinner"
          style={{
            width: size,
            height: size,
            borderColor: `${color} transparent transparent transparent`,
          }}
        ></div>
      ) : (
        <div className="dots">
          <span style={{ backgroundColor: color }}></span>
          <span style={{ backgroundColor: color }}></span>
          <span style={{ backgroundColor: color }}></span>
        </div>
      )}
    </div>
  );
};

export default CustomLoader;
