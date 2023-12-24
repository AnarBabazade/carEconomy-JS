let benzin= prompt("benzininizi daxil edin");
const standartWay=100;
const economy=10;
function cruze(carbenzin,carway,careconomy){
    let result=standartWay*benzin/economy
    return{
        carbenzin,
        carway,
        careconomy,
        result,
    }

}
const result=cruze(benzin,standartWay,economy);
console.log(result)
