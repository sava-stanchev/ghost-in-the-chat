import NewChat from "./NewChat";

function SideBar() {
  return (
    <div className="sidebar-wrapper">
      <div className="sidebar-container">
        <div>
          <NewChat />

          <div>{/* ModelSelection */}</div>

          {/* Map through the ChatRows */}
        </div>
      </div>
    </div>
  );
}

export default SideBar;