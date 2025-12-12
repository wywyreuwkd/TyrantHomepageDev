import logo from "figma:asset/3fb5962f0aa17706d99f08acf5c416487fbf672c.png";

export function Logo() {
  return (
    <div 
      className="flex items-center"
      style={{
        filter: 'drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.28))',
        paddingLeft: '16px',
        paddingRight: '16px'
      }}
    >
      <img 
        src={logo} 
        alt="TYRANT Logo" 
        style={{
          height: '56px',
          width: 'auto',
          objectFit: 'contain',
          display: 'block'
        }}
      />
    </div>
  );
}