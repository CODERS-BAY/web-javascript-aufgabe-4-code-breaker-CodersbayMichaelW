class Count {
    constructor() {
        this.number = 0;

        var tag = document.createElement("div");
        var button1 = document.createElement("button");
        var button2 = document.createElement("button");
        var text = document.createElement("input");
    
        tag.appendChild(button1);
        tag.appendChild(text);
        tag.appendChild(button2);
        numbers.appendChild(tag);
    
        // give the tags an class!
        // let textString = '<button id=increase' + i + '></button>';
        let textString = '<button class="increase"></button>';
        button1.outerHTML = textString;

        textString = '<input value=' + this.number + '>';
        text.outerHTML = textString;

        // textString = '<button id=increase' + i + '></button>';
        textString = '<button class="decrease"></button>';
        button2.outerHTML = textString;
    }

    get countNumber() {
        return this.number;
    }

    increaseNumber() {
        if (this.number == 9) {
            this.number = 0;
        }
        else {
            this.number++;
        }
        this.updateValue();
    }

    decreaseNumber() {
        if (this.number == 0) {
            this.number = 9;
        }
        else {
            this.number--;
        }
        updateValue();
    }

    updateValue() {
        // debug
        console.log(this.number);
    }
}