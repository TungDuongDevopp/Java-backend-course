class Rectangle {
    #width;
    #height;
    constructor(width,height) {
        this.setSize(width,height);
    }
    setSize(width,height){
            if(width<0) this.#width = 0;
            if (height<0) this.#height = 0;

        else{
            this.#height = height;
            this.#width = width;
        }

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