import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {

  experiments: string[] = ["Mars soil sample", "Plant growth in habitat", "Human bone density"];
  experimentBeingEdited: string = null;
  constructor() { }

  ngOnInit() {
  }

  add(experimentName: string){
      const cleanName = experimentName.trim().toLowerCase();
      if(!this.experiments.some(e => e.toLowerCase() === cleanName)){
        this.experiments.push(experimentName);
      }
  }

  edit(experimentName: string){
    this.experimentBeingEdited = experimentName;
  }

  save(updatedName: string, experiment: string){
    const index = this.experiments.indexOf(experiment);
    if(index > -1){
      this.experiments[index] = updatedName.trim();
    }
    this.experimentBeingEdited = null;
  }

  remove(experimentName: string){
      let index = this.experiments.indexOf(experimentName);
      this.experiments.splice(index, 1);
  }
}
