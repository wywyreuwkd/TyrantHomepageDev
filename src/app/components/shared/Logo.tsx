import logo from "@public/logo/main_logo1.png";

export function Logo() {
  return (
    <div
      className="flex items-center"
      style={{
        filter: 'drop-shadow(0px 4px 4px 8px rgba(0, 0, 0, 0.28))',
        paddingLeft: '16px',
        paddingRight: '16px',
      }}
    >
      <img
        src={logo.src}
        alt="TYRANT Logo"
        style={{
          height: '56px',
          width: 'auto',
          objectFit: 'contain',
          display: 'block',
        }}
      />
    </div>
  )
}

