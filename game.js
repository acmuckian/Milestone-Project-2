const textElement = document.getElementById("text");
const optionButtons = document.getElementById("options");
function startGame () {
state = {};
showTextNode(1);
}
function showTextNode(textNodeIndex) {
const textNode = textNodes.find(textNode => textNode.id ===
    textNodeIndex)
    textElement.innerText = textNode.text
}
function selectOption(option) {

}
const textNodes = [
    {
        id: 1,
        text: "It is your very first day living in a small village in rural North Wales. You receive an invitation for a welcome party.",
        
    options: [ {
        text: "Ignore it",
        nextText: 2
    },
    {
        text: "RVSP",
        setState: { Party: true},
        nextText: 2
    }
    ]
}
]

startGame ()