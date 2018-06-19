 function SAP() {
    var buildings = []  ;

    this.addBuilding = function(name){
        buildings.push(createBuilding(name));
    };

    createBuilding = function (name) {
        return {buildingName:name};
    };

    this.removeBuilding = function (sBlName) {
        for(var i=0 ; i< this.getAllBuildings().length;i++){
            if(this.getAllBuildings()[i].buildingName === sBlName){
               this.getAllBuildings().splice(i, 1);
            }
        }

    };

    this.getAllBuildings = function () {
        return buildings;
    };



    getBuildingByName = function (sBlName) {
        for(var i = 0 ; i< buildings.length;i++){
            if(buildings[i].buildingName === sBlName){
                return buildings[i];
            }
        }
    };

    this.addFloor = function(buildingName, floorName){
        var myBuilding = getBuildingByName(buildingName);

        if(!myBuilding.floors){
            myBuilding.floors = [];
        }

        var floor = {
            floorName:floorName,
            buildingName:buildingName
        };

        myBuilding.floors.push(floor);
    };


    getFloorByName = function (buildingName,floorName) {
        var myBuilding = getBuildingByName(buildingName);
        for(var i = 0 ; i < myBuilding.floors.length ; i++){
            if(myBuilding.floors[i].floorName === floorName){
                return myBuilding.floors[i];
            }
        }
    };


    this.addRoom = function (buildingName, floorName, roomName) {
        var floor = getFloorByName(buildingName,floorName);
        if(!floor.rooms){
            floor.rooms = [];
        }

        var room = {
            roomName: roomName
        };

        floor.rooms.push(room);
    };

    this.removeRoom = function(buildingName, floorName, roomName){
        var floor = getFloorByName(buildingName,floorName);
        for(var i = 0;i<floor.rooms.length;i++){
            if(floor.rooms[i].roomName === roomName){
                delete floor.rooms[i];
            }
        }
    };

    getRoomByName = function (buildingName, floorName, roomName) {
        var floor = getFloorByName(buildingName,floorName);
        for(var i = 0;i<floor.rooms.length;i++){
            if(floor.rooms[i].roomName === roomName){
                return floor.rooms[i]
            }
        }
    };

    this.addEmployee = function (buildingName, floorName, roomName, empId, empFirstName, empLastName) {
        var room = getRoomByName(buildingName, floorName, roomName);
        if(!room.employees){
            room.employees = [];
        }
        var employee = {
            location:{empBuilding:buildingName,empRoom:roomName},
            empId:empId,
            empFirstName: empFirstName,
            empLastName:empLastName
        };

        room.employees.push(employee);
    };

    this.getIndexOfEmp = function (buildingName, floorName, roomName,parm) {
        var room = getRoomByName(buildingName, floorName, roomName);
        for (var i = 0; i < room.employees.length; i++) {
            var em = room.employees[i];
            if(em.empId === parm  || em.empFirstName === parm  || em.empLastName === parm ){
                return i;
            }
        }
    };


    this.getEmployee = function (buildingName, floorName, roomName,sParm) {
        var getIndexOfEmp = this.getIndexOfEmp(buildingName, floorName, roomName,sParm);
        var room = getRoomByName(buildingName, floorName, roomName);
        return room.employees[getIndexOfEmp];
    };

    this.removeEmployee = function (buildingName, floorName, roomName, parm) {
        var getIndexOfEmp = this.getIndexOfEmp(buildingName, floorName, roomName, parm);
        var room = getRoomByName(buildingName, floorName, roomName);
        delete room.employees[getIndexOfEmp];
    };

    this.print = function(buildingName){
        return getBuildingByName(buildingName);
    };


}


