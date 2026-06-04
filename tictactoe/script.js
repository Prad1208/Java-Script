let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let newGameBtn = document.querySelector("#new-btn");
let undoBtn = document.querySelector("#undo-btn");
let gameOver = false;
let lastMove = null;
let turn0 = true;

const winPatterns = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        lastMove = { box: box ,symbol: turn0 ? "0" : "X"  };
        if (turn0) {
            box.textContent = "0";
            turn0 = false;
        } else {
            box.textContent = "X";
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
        checkDraw();
    });
});

const showWinner = (winner) => {
    gameOver = true;
    msg.textContent = `Congratulations! Winner is ${winner} 🎉`;
    msgContainer.classList.remove("hide");
    boxes.forEach((box) => box.disabled = true);
};

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1val = boxes[pattern[0]].textContent.trim();
        let pos2val = boxes[pattern[1]].textContent.trim();
        let pos3val = boxes[pattern[2]].textContent.trim();

        if (pos1val !== "" && pos2val !== "" && pos3val !== "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                showWinner(pos1val);
                return;
            }
        }
    }
};

const checkDraw = () => {
    if (gameOver) return;
    let allFilled = [...boxes].every((box) => box.textContent.trim() !== "");
    if (allFilled) {
        msg.textContent = "Game Tied! 🤝";
        msgContainer.classList.remove("hide");
    }
};

// ✅ single reset function used by both buttons
const resetGame = () => {
    gameOver = false;
    turn0 = true;
    lastMove = null;
    boxes.forEach((box) => {
        box.textContent = "";
        box.disabled = false;
    });
    msgContainer.classList.add("hide");
};

resetBtn.addEventListener("click", resetGame);
newGameBtn.addEventListener("click", resetGame); // ✅ no duplicate code

undoBtn.addEventListener("click", () => {
    if (lastMove) {
        lastMove.box.textContent = "";
        lastMove.box.disabled = false;
        turn0 = !turn0;
        lastMove = null;
    }
});