// Retrieve the active link from localStorage
const activeLink = localStorage.getItem('activeLink');

if (activeLink) {
  // Remove 'active-link' class from all links
  $('.nav-link').removeClass('active-link');

  // Add 'active-link' class to the stored active link
  $(`.nav-link[href='${activeLink}']`).addClass('active-link');
}

$('.nav-link').on('click', function () {
  // Remove 'active-link' class from all links
  $('.nav-link').removeClass('active-link');

  // Add 'active-link' class to the clicked link
  $(this).addClass('active-link');

  // Store the clicked link's href in localStorage
  const href = $(this).attr('href');
  localStorage.setItem('activeLink', href);
});
