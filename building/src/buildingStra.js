function Building(name) {
    this.name = name;
}


Building.prototype.getBuildingFloors = function () {
  return this.buildingFloors;
};
Building.prototype.addBuildingFloor = function(floor){
    if(!this.buildingFloors){
        this.buildingFloors = [];
    }
    floor.buildingName = this.getBuildingName();
    this.buildingFloors.push(floor);
};


Building.prototype.findByName = function(sName){
    for(var j = 0 ; j < this.buildingFloors.length ; j++){
        for(var i = 0;this.buildingFloors[j].floorRooms.length;i++){
            if(this.buildingFloors[j].floorRooms[i].findRoomWithEmp(sName)){
                return JSON.stringify(this.buildingFloors[j].floorRooms[i].findRoomWithEmp(sName));
            }
        }
    }
};


Building.prototype.removeBuildingFloor = function(floor){
    this.buildingFloors.forEach(function(i){
        if(i.floorName === floor) {
            return this.buildingFloors.splice(i,1);
        }else{
            console.log("not found this: "+ floor + "floor");
        }
    }.bind(this));
};


Building.prototype.getBuildingName = function () {
   return this.name;
};

