import { MovilNav, DesktopNav } from "../Navbar";

export default function Navbar() {
  return (
    <>
    <div className="hidden sm:block">
      <DesktopNav></DesktopNav>
    </div>

    <div className="sm:hidden">
      <MovilNav></MovilNav>
    </div>
    </>
  );
}