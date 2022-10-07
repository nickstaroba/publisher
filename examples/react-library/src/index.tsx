import { Button, Link } from "@eterna/react-library/";
import React from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));
root.render(
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      gridGap: 12,
      maxWidth: 300,
    }}
  >
    <Button label={"Button"} />
    <Link href={"http://google.com/"} label={"Link"} />
  </div>
);
