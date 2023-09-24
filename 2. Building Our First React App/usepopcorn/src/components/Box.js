export function Box({ setIsOpen, isOpen, children, setSelectedId }) {
  return (
    <div className="box">
      <button className="btn-toggle" onClick={() => setIsOpen((s) => !s)}>
        {isOpen ? "-" : "+"}
      </button>
      {isOpen && children}
    </div>
  );
}
