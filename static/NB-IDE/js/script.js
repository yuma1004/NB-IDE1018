// accordion機能
// section
// 縦方向に開く
// $('.section').click(function() {
//   $('.explanation').slideToggle(400);
//   // $('.header-b').fadeToggle(3000);
// });

// $(document).on("click", ".btn", function() {
//   $(this).next("div").slideToggle(400);
// });

// アコーディオン機能
//.accordionがクリックされたら
$(document).on('click', '.accordion', function() {

  console.log($(this).next().slideToggle(400))

  $(this).toggleClass('open');
});

function getNewNote() {
	return  '<div class="note">' +
			'<textarea class="text"></textarea>' +
			'<input class="delete-button" type="button" value="削除">' +
			'<input data-color="#e00020" class="color-button" type="button" value="赤">' +
			'<input data-color="#e0ff20" class="color-button" type="button" value="黄">' +
            '</div>';
}

function appendFunctions($note) {
	$note.draggable();
	$note.resizable();

	// $note.autosize('.expanding');

    $note.children(".delete-button")
    .on('click', function() {
        $(this).parents('.note').remove();
	});

    $note.children(".color-button")
    .on('click', function() {
        const color = $(this).data('color');
        $(this).parents('.note').css('background-color', color);
    });
}

$('#add-button').on('click', function(){
	var $note = $(getNewNote());
	appendFunctions($note);

    $('#sticky-note-container').append($note);
});
