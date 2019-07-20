import clsx from "clsx";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <>
      <Link href="/page1">
        <a className={clsx("home-a", "home-b")}>
          Visit me but don't land on me.
        </a>
      </Link>
      <br />
      <Link href="/page2">
        <a>Visit me but don't land on me.</a>
      </Link>
    </>
  );
}
