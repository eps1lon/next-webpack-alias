import React from "react";
import classnames from "classnames"; // will be aliased to `clsx`


export default function Page2() {
  return (
    <h1 className={classnames('a', 'b')}>I'm {"<h1 class='a b'></h1>"}</h1>
  );
}
