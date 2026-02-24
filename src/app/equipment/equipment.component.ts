import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  equipment: string[] = ["Habitat dome", "Drones", "Food containers", "Oxygen tanks"];
  toolBeingEdited: string = null;

  constructor() { }

  ngOnInit() {
  }

  add(toolName: string){
    const cleanName =  toolName.trim().toLowerCase();
    if(!this.equipment.some(e => e.toLowerCase() === cleanName)){
      this.equipment.push(toolName);
    }
  }

  edit(toolName: string){
     this.toolBeingEdited = toolName;
  }

  save(updatedName: string, tool: string){
      const index = this.equipment.indexOf(tool);
      if(index > -1){
        this.equipment[index]=updatedName.trim();
      }
      this.toolBeingEdited = null;
  }

  remove(toolName: string){
      let index = this.equipment.indexOf(toolName);
      this.equipment.splice(index,1);
  }
}
