import React from "react";
import howManyParks from "./parks/howManyParks";

function ColoradoStateParks() {
  howManyParks(); // => "42 parks!"

  return <h1>Colorado State Parks!</h1>;
}
import { trees, wildlife } from "./parks/RockyMountain";
console.log(trees)
wildlife();