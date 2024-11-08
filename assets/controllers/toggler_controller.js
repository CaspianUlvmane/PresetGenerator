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

  connect() {
    let inputs = document.querySelectorAll(".openSettings");
    console.log(inputs);

    inputs.forEach((element) => {
      console.log(element);

      let target = document.getElementById(element.name);
      if (element.checked) {
        target.style.height = "fit-content";
      } else {
        target.style.height = "0%";
      }
    });
    this.connectRadio();
  }

  connectRadio() {
    let inputs = document.querySelectorAll("input");
    inputs.forEach((element) => {
      console.log(Number(element.name.slice(-1)));

      if (Number(element.name.slice(-1)) && element.type != "radio") {
        element.parentElement.style.height = "0%";
        element.parentElement.style.display = "none";
      }
    });
  }

  toggle(event) {
    console.log(event.target.name);
    let target = document.getElementById(event.target.name);
    console.log(target);

    if (event.target.checked) {
      target.style.height = "fit-content";
      console.log("checked");
    } else {
      console.log("not checked");
      target.style.height = "0%";
    }
  }

  toggleOptions(event) {
    console.log(event.target);
    let options = document.querySelectorAll("input");
    console.log(event.target.value);

    if (event.target.value == 1) {
      options.forEach((element) => {
        console.log(element.name.slice(-1) === event.target.name.slice(-1));

        if (element.name.slice(-1) === event.target.name.slice(-1)) {
          element.parentElement.style.height = "fit-content";
          element.parentElement.style.display = "block";
        }
      });
    } else {
      options.forEach((element) => {
        if (
          element.name.slice(-1) === event.target.name.slice(-1) &&
          element.type != "radio"
        ) {
          element.parentElement.style.height = "0%";
          element.parentElement.style.display = "none";
        }
      });
    }
  }
}
