import clsx from "clsx";
import React from "react";

export default function Home() {
  return (
    <>
      <a className={clsx("home-a", "home-b")} href="/page1">
        Visit me but don't land on me.
      </a>
      <br />
      <a href="/page2">Visit me but don't land on me.</a>
    </>
  );
}
