const textElement = document.getElementById('text')
const optionButtons = document.getElementById('options')
let state = {}
function startGame() {
    state = {}
    showTextNode(1)
}
function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => text.id === textNodeIndex)
    textElement.innerText = textNode.text
    while (optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }
    textNode.options.forEach(option => {
        if (showOption(option)) {

        }
    })
}
function showOption(option) {
    const button = document.createElement('button')
    button.innerText = option.text
    button.classList.add('btn')
    button.addEventListener('click', () => selectOption())
    optionButtonsElement.appendChild(button)
}
function selectOption(option) {

}
const textNodes = [
    {
        id: 1,
        text: "You have recently moved to a small village in rural Wales. You receive an invite for a party.",
        options: [
            {
                text: 'RVSP',
                setState: { party: true },
                nextText: 2
            },
            {
                text: 'Ignore',
                nextText: 2
            }
        ]
    },
    {
        id: 2
    }
]
startGame()