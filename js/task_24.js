// var Elevator = {
//     toFloor: function(floor){
//         floor = floor.toString();
//         for (var i = 1; i <= floor; i++){
//             if (i >= 1 && i <= 16){
//                 var whichFloor = "Elevator is on the floor " + whichFloor + i;
//                 // console.log(whichFloor);
//             }    
//         }
//     },
//     printFloor: function(){
//         var i = whi;
//         console.log(whichFloor);
//     }
//     // oneFloorUp: ;
//     // oneFloorDown: ; 
// }

// // console.log(Elevator.toFloor(5));
// // Elevator.toFloor(5);

var Elevator = {
    floor: 1,
    toFloor: function (setFloor) { // Перемещение на этаж
      if (setFloor <= 16 && setFloor > 0) {
        while (this.floor < setFloor) {
          this.printFloor();
          this.upOneFloor();
        }
        while (this.floor > setFloor) {
          this.printFloor();
          this.downOneFloor();
        }
        if (this.floor == setFloor) this.printFloor();
      } else console.log('В доме от 1 го до 16 этажей!');
    },
    printFloor: function () { // Отображение этажа
      console.log(`Лифт на этаже: ${this.floor}`);
    },
    upOneFloor: function () { // 1 этаж вверх
      this.floor++;
    },
    downOneFloor: function () { // 1 этаж вниз
      this.floor--;
    }
  };
  
  Elevator.toFloor(5);
  Elevator.toFloor(12);
  Elevator.toFloor(1);