import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-exercice1",
  templateUrl: "./exercice1.component.html",
  styleUrls: ["./exercice1.component.css"],
})
export class Exercice1Component implements OnInit {
  msg: string = "EASY!";

  constructor() {
    this.msg = "bonjour à tous!";
  }

  ngOnInit(): void {}

  logIt1() {
    console.log("click sur le composant exercice1");
  }
}
