let ads = ["ad-image.jpg", "ad-image6.png", "ad-image5.png"];
  let currentAd = 0;
  
  const adImage = document.getElementById("adImage");
  const dots = document.getElementsByClassName("dot");
  const leftArrow = document.querySelector(".arrow.left");
  const rightArrow = document.querySelector(".arrow.right");
  
  // Function to update ad and dots
  function updateAd() {
    adImage.src = ads[currentAd];
  
    let i = 0;
    while (i < dots.length) {
      dots[i].classList.remove("active");
      i++;
    }
    dots[currentAd].classList.add("active");
    // DOM navigation property used here
  console.log("Ad image parent container:", adImage.parentElement); // DOM TREE NAVIGATION PROPERTY
  }
  
  // Arrow click events
  leftArrow.addEventListener("click", () => {
    currentAd = (currentAd - 1 + ads.length) % ads.length;
    updateAd();
  });
  
  rightArrow.addEventListener("click", () => {
    currentAd = (currentAd + 1) % ads.length;
    updateAd();
  });
  
  // Initial load
  updateAd(); // CUSTOM FUNCTION
  


  document.querySelectorAll('.wishlist-icon i').forEach(icon => {
    icon.addEventListener('click', function () {
      // Only remove if it's the filled heart
      if (this.textContent.trim() === 'favorite') {
        const dealContainer = this.closest('.deal-card-container');
        const productName = dealContainer.querySelector('.title').textContent;
        dealContainer.remove();
  
        const message = document.createElement('div');
        message.className = 'remove-msg';
        message.textContent = `"${productName}" was removed from your wishlist.`;
  
        const messageArea = document.getElementById('messageArea');
        messageArea.prepend(message); //  ELEMENT TO THE DOM AT RUNTIME
  
        setTimeout(() => message.remove(), 3000);
      }
    });
  });
  
  
 