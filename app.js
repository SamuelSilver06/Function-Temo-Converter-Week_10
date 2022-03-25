function main(){
    fname()
    if(conversion() == "f"){
        var tem = temperature()
        total_c(calculationf(tem))
    }else{
        var tem = temperature()
        total_f(calculationc(tem))
    }


}

function fname(){
    var name = prompt("What is thy name?")
    alert(`Hello sir ${name}`)
    return name
}

function conversion(){
    var convert = prompt("Would you like to convert from, Fahrenheit to Celsius (f) or Celsius to Fahrenheit (c)")
    return convert
}

function temperature(){
    var temp = prompt("enter the temperature you would like to convert")
    return temp
}

function calculationf(x){
        totalf = ((x - 32) * 5 / 9)
        return totalf
}

function calculationc(x){
        totalc = ((x * 9 / 5 + 32))
        return totalc
}
function total_c(x) {
        alert(`your temp in Celsius is ${x}C`)
}

function total_f(x) {
    alert(`your temp in Fahrenheit is ${x}F`)
}

main()

