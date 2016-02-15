/* foundation modal tweaks
 */

// init foundation plugins
$(document).foundation();

// add a class on the body, when the modal is opened
// so we can set position: fixed on the background.
$(document).on('opened', '[data-reveal]', function () {
  $(document.body).addClass('modal-opened');
});

$(document).on('closed', '[data-reveal]', function () {
  $(document.body).removeClass('modal-opened');
});
