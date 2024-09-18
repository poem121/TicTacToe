let box = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let msgContainer = document.querySelector(".msg-container");
let newGamebtn = document.querySelector("#new-btn");
let msg = document.querySelector("#msg");
let turn0 = false;
//queryselector -> searching the elements in html
const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () => {

    turn0 = true;
    enableBoxes();

};


box.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if (turn0) {
            box.innerText = "0";
            turn0 = false;
        }
        else {
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
    });

});
const enableBoxes = () => {
    for (let boxes of box) {
        boxes.disabled = false;
        boxes.innerText = "";
    }
};

const disabledBoxes = () => {
    for (let boxes of box) {
        boxes.disabled = true;

    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
}

const checkWinner = () => {
    msg.innerText = "Winner"

    for (let pattern of winPattern) {
        let pos1Val = box[pattern[0]].innerText;
        let pos2Val = box[pattern[1]].innerText;
        let pos3Val = box[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("Winner", pos2Val);
                showWinner(pos2Val);
            }
        }
    }

    //pos1Val & pos2Val & pos3Val != ""

};

newGamebtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
