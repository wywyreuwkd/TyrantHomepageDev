import logo from "@public/logo/main_logo2_white_nomargin.png";

interface LogoProps {
  size?: "small" | "medium" | "large";
}

const sizeMap = {
  small: "32px",
  medium: "40px",
  large: "52px",
};

export function Logo({ size = "medium" }: LogoProps) {
  return (
    <div
      className="flex items-center"
      style={{
        filter: 'drop-shadow(0px 0px 0px 0px rgba(0, 0, 0, 0.28))',
        paddingLeft: '0px',
        paddingRight: '0px',
      }}
    >
      <img
        src={logo.src}
        alt="TYRANT Logo"
        style={{
          height: sizeMap[size],
          width: 'auto',
          objectFit: 'contain',
          display: 'block',
        }}
      />
    </div>
  )
}

