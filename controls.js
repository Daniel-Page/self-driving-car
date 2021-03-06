class Controls {
    constructor(type) {
        this.forward = false;
        this.left = false;
        this.right = false;
        this.reverse = false;

        switch(type) {
            case "KEYS":
                this.#addKeyboardListeners();
                break;
            case "DUMMY":
                this.forward = true;
                break;
        }
    }

    // # meas that this method is private
    #addKeyboardListeners() {
        document.onkeydown = (event) => {
            switch(event.key) {
                case "a":
                    this.left = true;
                    break;
                case "ArrowLeft":
                    this.left = true;
                    break;
                case "d":
                    this.right = true;
                    break;
                case "ArrowRight":
                    this.right = true;
                    break;
                case "w":
                    this.forward = true;
                    break;
                case "ArrowUp":
                    this.forward = true;
                    break;
                case "s":
                    this.reverse = true;
                    break;
                case "ArrowDown":
                    this.reverse = true;
                    break;
            }
        }
        document.onkeyup = (event) => {
            switch(event.key) {
                case "a":
                    this.left = false;
                    break;
                case "ArrowLeft":
                    this.left = false;
                    break;
                case "d":
                    this.right = false;
                    break;
                case "ArrowRight":
                    this.right = false;
                    break;
                case "w":
                    this.forward = false;
                    break;
                case "ArrowUp":
                    this.forward = false;
                    break;
                case "s":
                    this.reverse = false;
                    break;
                case "ArrowDown":
                    this.reverse = false;
                    break;
            }
        }
    }
}