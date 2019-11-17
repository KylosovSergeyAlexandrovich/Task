const hiddenBlockSelection = $('.selected-block');
const hiddenBlockBackground = $('.background-color-body');

function blockCleaningOnCross() {
    $(".img-cross").click(function () {
        hiddenBlockSelection.empty();
        hiddenBlockBackground.css({"display": "none"});
        hiddenBlockSelection.css({"display": "none"});
        console.log('удаление');
    });
}

function blockCleaningOnBackground() {
    $(document).mouseup(function (e) {
        if (!hiddenBlockSelection.is(e.target)
            && hiddenBlockSelection.has(e.target).length === 0) {
            hiddenBlockSelection.hide();
            hiddenBlockBackground.css({"display": "none"});
            hiddenBlockSelection.empty();
        }
    });
}

$(".content-device").click(function () {
    hiddenBlockBackground.css({"display": "block"});
    hiddenBlockSelection.css({"display": "block"});

    const selectedBlock = $(this).html();

    hiddenBlockSelection.append('' +
        '<div class="confirmation-text">Confirmation</div>\n' +
        '  <img class="img-cross" src="img/cross.svg">\n' +
        '  <button class="play-button">Confirm and play</button>' + selectedBlock
    );

    blockCleaningOnCross();
    blockCleaningOnBackground();

});