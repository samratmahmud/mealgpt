import React, {ReactNode} from "react";
import Navbar from "./Navbar";

interface layoutProps {
  children: ReactNode;
}

function Layout(props: layoutProps) {
  const {children} = props;
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}

export default Layout;
