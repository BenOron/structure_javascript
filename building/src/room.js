function Room(roomName,roomNum,roomBuildingId) {
     this.roomNum = roomNum;
     this.roomName = roomName;
     this.roomId = roomBuildingId ? this.setRoomId(roomBuildingId) :this.setRoomId();
}

Room.prototype.getRoomEmployeeNames = function() {
    return this.roomEmployeeNames;
};

Room.prototype.setRoomEmployeeName = function(employeeName) {
    if(employeeName){
        if(!this.roomEmployeeNames){
           this.roomEmployeeNames = [];
        }
        this.roomEmployeeNames.push({employeeName:employeeName});
    }else{
        console.log("you can add employee to this room");
    }
};

Room.prototype.removeRoomEmployeeName = function(employeeName) {
    this.roomEmployeeNames.pop({roomId:this.getRoomId(),employeeName:employeeName});
};

Room.prototype.getDepartmentName = function() {
    return this.departmentName;
};

Room.prototype.setDepartmentName = function(val) {
    if(val){
        this.departmentName = val;
    }else{
        this.departmentName = "defDepartment";
    }
};

Room.prototype.getRoomNum = function() {
    return  this.roomNum;
};

Room.prototype.setRoomNum = function (val) {
    this.roomNum = val;
};

Room.prototype.getRoom = function () {
    return this;
};

Room.prototype.setRoomId = function(forcedRoomId) {
    if(forcedRoomId){
        return "ROOM-" + forcedRoomId + "-" +this.getRoomId();
    }
    return "ROOM-" + this.getRoomId();
};

Room.prototype.getRoomId = function() {
    if(this.roomId){
        return this.roomId;
    }
    return this.roomName + this.roomNum;
};


Room.prototype.setRoomName = function(val) {
    this.roomName = val;
};

Room.prototype.getRoomName = function() {
    return this.roomName;
}

Room.prototype.setRoomBuildingId = function(id) {
    if(!id){
        consle.log("need a building id we don't know for what building add this room");
    }
    return id;
};





