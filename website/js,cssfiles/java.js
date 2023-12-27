const sidebar = document.getElementById('sidebar');
const content = document.getElementById('content');
const toggleBtn = document.getElementById('toggle-btn');

toggleBtn.addEventListener('click', () => {
  const sidebarWidth = sidebar.offsetWidth;
  if (sidebar.style.left === '0px') {
    sidebar.style.left = `-${sidebarWidth}px`;
    content.style.marginLeft = '0';
  } else {
    sidebar.style.left = '0';
    content.style.marginLeft = `${sidebarWidth}px`;
  }
});
function changeStyle(cssFile){
   const styleSheet = document.getElementById('styleSheet');
   styleSheet.style.opacity=0;
   setTimeout(() => {
    styleSheet.href = cssFile;
    styleSheet.style.opacity = 1;
}, 0);
   }
   document.getElementById('search-button').addEventListener('click', function() {
    var searchInput = document.getElementById('search-input').value.toLowerCase();
    var sections = document.querySelectorAll('.content section');
    var resultSection = document.getElementById('resultSection');
    var resultCards = resultSection.querySelector('.cards');
    resultCards.innerHTML = ''; // Clear previous results

    sections.forEach(function(section) {
      var cards = section.querySelectorAll('.card');
      book.querySelector('h3').textContent.toLocaleLowerCase();
      cards.forEach(function(card) {
        var cardContent = card.textContent.toLowerCase();
        if (cardContent.includes(searchInput)) {
          // Create a new card for the result
          var resultCard = document.createElement('div');
          resultCard.className = 'card';
          resultCard.textContent = card.textContent;
          resultCards.appendChild(resultCard);
        }
      });
    });

    // Show or hide the result section based on the number of results
    resultSection.style.display = resultCards.children.length > 0 ? 'flex' : 'none';
  });



