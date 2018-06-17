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
        return this;
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
        delete this.rooms.roomId;
    },

    addRoom:function (room) {
        this.rooms.push(room);
    },

    addRooms:function (rooms) {
        for(var i = 0;i<rooms.length;i++){
            this.rooms.push(rooms[i]);
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


