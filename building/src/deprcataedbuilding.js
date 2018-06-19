var building = {
    rooms:[],

    getBuildingName:function () {
      return this.buildingName;
    },

    setBuildingName:function (val) {
      this.buildingName = val;
    },

    getBuildingNum:function () {
        return this.buildingNum;
    },

    setBuildingNum:function (val) {
        this.buildingNum = val;
    },

    getNumberOfRooms:function () {
        return  this.numberOfRooms;
    },

    setNumberOfRooms:function (val) {
       this.numberOfRooms = val;
    },

    getBuilding:function () {
        var bulding = {
            Building_Name: this.buildingName,
            Building_Number: this.getBuildingNum(),
            In_this_building_have: this.getRooms().length.toString() + " - rooms",
            Rooms: (JSON.stringify(this.getRooms()))};
        return bulding;
    },

    setBuildingId:function (forceId) {
        if(!!forceId){
           return this.getBuildingId();
        }else{
            return "BL-" + forceId;
        }
    },

    getBuildingId:function () {
        return "BL-" + this.buildingName + this.buildingNum;
    },


    createBuilding:function (obj) {
     this.setNumberOfRooms(obj.numberOfRooms);
     this.setBuildingName(obj.buildingName);
     this.setBuildingNum(obj.buildingNum);
     this.setBuildingId();
     return this
    },

    removeRoom:function (roomId) {
        this.rooms.forEach(function(i){
            if(i.roomId === roomId) {
                return this.rooms.splice(i,1);
            }
        }.bind(this));
    },

    addRoom:function (room,floorName) {
        if(this.floorName === floorName){
            this.rooms.push(room);
        }

    },

    addRooms:function (rooms,floorName) {
        for(var i = 0;i<rooms.length;i++){
            this.addRoom(rooms[i],floorName);
        }

    },

    getRooms:function () {
       return this.rooms;
    },

    findEmployeeRoom: function (EmployeeName) {
        for (var i = 0; i < this.rooms.length; i++) {
            for (var j = 0; j < this.rooms[i].getRoomEmployeeNames().length; j++) {
                if (EmployeeName === this.rooms[i].getRoomEmployeeNames()[j].employeeName) {
                    return {
                        roomName: this.rooms[i].roomName,
                        roomNumber: this.rooms[i].roomNum,
                        buildingNumber: this.getBuildingNum()
                    }
                }else{
                    return {roomName: "Employee name not found"}
                }
            }

        }
    }
};


