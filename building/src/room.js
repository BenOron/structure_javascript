function Room(roomName) {
    this.roomName = roomName;
}


Room.prototype.getRoomEmployeeNames = function() {
    return this.roomEmployeeNames;
};

Room.prototype.setRoomEmployeeName = function(emp) {
    if(!this.roomEmployeeNames){
       this.roomEmployeeNames = [];
    }
    emp.locationProp = {roomName:this.roomName,buildingName:this.buildingName};
    this.roomEmployeeNames.push(emp);
};


Room.prototype.findRoomWithEmp = function (name) {
    for(var i = 0 ; i <  this.roomEmployeeNames.length;i++){
        if(this.roomEmployeeNames[i].firstName === name){
            return this.roomEmployeeNames[i];
        }else{
            continue
        }
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

Room.prototype.setRoomFloor = function (val) {
    this.roomNum = val;
};

Room.prototype.getRoomFloor = function () {
    return this;
};


Room.prototype.getRoomName = function() {
    return this.roomName;
};







