function Employee(firsName,lastName,userId) {
    this.firstName = firsName;
    this.lastName = lastName;
    this.userId = userId;
    this.getEmployeeBuilding();
    this.getEmployeeRoom();
}



Employee.prototype.getEmployeeRoom = function () {
    return this.roomName;
};

Employee.prototype.getEmployeeBuilding = function () {
    return this.buildingName;
};




