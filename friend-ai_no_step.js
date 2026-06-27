class NSfriendAi {
    constructor() {
        this.w1 = Math.random() * 0.5 - 0.25;
        this.w2 = Math.random() * 0.5 - 0.25;
        this.bias = Math.random() * 0.5 - 0.25;
    }

    dataSet(input, answer) {
        this.input = input;
        this.answer = answer;
    }

    inference(input1, input2) {
        return input1 * this.w1 + input2 * this.w2 + this.bias;
    }

    train(epochTime, lr) {
        let count = 0;
        let i = 0;

        while (count <= epochTime) {
            count++;
            const pre = this.inference(this.input[i][0], this.input[i][1]);
            const error = this.answer[i] - pre;

            this.w1 += lr * error * this.input[i][0];
            this.w2 += lr * error * this.input[i][1];
            this.bias += lr * error;
            
            i++;
            if (i >= this.input.length) {
                i = 0;
            }
        }
    }
}

window.NSfriendAi = NSfriendAi;