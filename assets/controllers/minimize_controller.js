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
  connect() {
    this.minimize();
  }

  minimize() {
    console.log(this);

    if (this.inputTarget.checked) {
      //   this.hidemeTarget.style.display = "block";
      console.log("checked");
    } else {
      console.log("not checked");
      //   document.getElementById(id).style.height = "0px";
    }
  }
}
