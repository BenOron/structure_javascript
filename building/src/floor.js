function Floor(floorName){
    this.floorName = floorName;
}

Floor.prototype.setFloorName = function (sFloorName) {
  this.floorName = sFloorName;  
};

Floor.prototype.getFloorName = function () {
    return this.floorName;
};

Floor.prototype.getFloorRooms = function () {
    this.floorRooms;
};

Floor.prototype.addFloorRoom = function(room){
    if(!this.floorRooms){
        this.floorRooms = [];
    }
    room.buildingName = this.buildingName;
    this.floorRooms.push(room);
};


Building.prototype.removeFloorRoom = function(roomName){
    this.floorRooms.forEach(function(i){
        if(i.roomName === roomName) {
            return this.floorRooms.splice(i,1);
        }else{
            console.log("not found: "+ roomName + "room");
        }
    }.bind(this));
};



