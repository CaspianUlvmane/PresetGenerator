import { Controller } from "@hotwired/stimulus";

/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="hello" attribute will cause
 * this controller to be executed. The name "hello" comes from the filename:
 * hello_controller.js -> "hello"
 *
 * Delete this file or adapt it for your use!
 */
export default class extends Controller {
  static targets = ["input", "hide"];

  toggle(event) {
    console.log(event.target.name);
    let target = document.getElementById(event.target.name);
    console.log(target);

    if (event.target.checked) {
      target.style.height = "100%";
      console.log("checked");
    } else {
      console.log("not checked");
      target.style.height = "0%";
    }
  }
}
