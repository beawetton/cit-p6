/*
    CIT 281 Project 6

    Name: Beatrice Wetton
*/

class Shape{
    constructor(sides = []){
        this.sides = sides
    }

    perimeter() {
        let total = 0;
        for( let i = 0; i < this.sides.length; i ++){
            total = total + this.sides[i] 
        }
        return total;
    }
}

class Rectangle extends Shape{
    constructor(length = 0, width = 0){
        super([length, width, length, width])
        this.length = length
        this.width = width
    }

    area() {
        return this.length * this.width
    }

}

class Triangle extends Shape{
    constructor(sideA=0, sideB=0, sideC=0){
        super([sideA, sideB, sideC])
        this.sideA = sideA
        this.sideB = sideB
        this.sideC = sideC
    }
    area() {
        let s = (this.sideA + this.sideB + this.sideC)/2
        let result = Math.sqrt(s*(s-this.sideA)*(s-this.sideB)*(s-this.sideC))
        return result
    }

}

// Array of sides arrays
const data = [ [3, 4], [5, 5], [3, 4, 5], [10], [] ];

function calculate(){
    let result = "";
    let perimeter = null
    let area = null
    for(const arr of data){
        if(arr.length == 3){
            perimeter = new Triangle(...arr).perimeter()
            area = new Triangle(...arr).area()
            text = `Triangle with sides ${arr} has perimeter of ${perimeter} and area of ${area}`
        }
        else if(arr.length == 2){
            perimeter = new Rectangle(...arr).perimeter()
            area = new Rectangle(...arr).area()
            if(arr[0] == arr[1]){
                text = `Square with sides ${arr} has perimeter of ${perimeter} and area of ${area}`
            }else{
            text = `Rectangle with sides ${arr} has perimeter of ${perimeter} and area of ${area}`
            }
        }else{
            text = `Shape with ${arr.length} sides unsupported`
        }
        result = result + "\n" + text
    }
    return result
}

console.log(calculate())


/*
console.log(new Shape([5, 10]).perimeter());  // 15
console.log(new Shape([1, 2, 3, 4, 5]).perimeter()); // 15
console.log(new Shape().perimeter()); // 0
*/
/*
console.log(new Rectangle(4, 4).perimeter());  // 16
console.log(new Rectangle(4, 4).area());  // 16
console.log(new Rectangle(5, 5).perimeter()); // 20
console.log(new Rectangle(5, 5).area()); // 25
console.log(new Rectangle().perimeter()); // 0
console.log(new Rectangle().area()); // 0
*/
/*
console.log(new Triangle(3, 4, 5).perimeter());  // 12
console.log(new Triangle(3, 4, 5).area());  // 6
console.log(new Triangle().perimeter()); // 0
console.log(new Triangle().area()); // 0
*/
