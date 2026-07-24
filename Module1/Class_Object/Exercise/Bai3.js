class Rectangle {
    #width;
    #height;
    constructor(width,height) {
        this.setSize(width,height);
    }
    setSize(width,height){
        this.#width = width < 0 ? 0 : width;
        this.#height = height < 0 ? 0 : height;

    }
    getArea(){
        return this.#height * this.#width;
    }
    getPerimeter(){
        return (this.#height + this.#width) * 2;
    }

}
  let rectangle = new Rectangle(10,5);
  console.log(rectangle);
    console.log(`Chu vi hcn: ${rectangle.getPerimeter()}`);
    console.log(`Dien tích hcn: ${rectangle.getArea()}`);
    rectangle.setSize(5,6);
    console.log(rectangle);
console.log(`Chu vi hcn: ${rectangle.getPerimeter()}`);
console.log(`Dien tích hcn: ${rectangle.getArea()}`);