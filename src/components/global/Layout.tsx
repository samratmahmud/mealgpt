import React, {ReactNode} from "react";

interface layoutProps {
  children: ReactNode;
}

function Layout(props: layoutProps) {
  const {children} = props;

  return <div>{children}</div>;
}

export default Layout;
