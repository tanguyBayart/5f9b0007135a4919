import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-exercice3",
  templateUrl: "./exercice3.component.html",
  styleUrls: ["./exercice3.component.css"],
})
export class Exercice3Component implements OnInit {
  status: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  logIt(composant: String) {
    console.log("click sur le composant exercice3 : " + composant);
  }

  changeStatus() {
    //console.log('changeStatus() called')
    if (this.status) this.status = false;
    else this.status = true;
  }
}
