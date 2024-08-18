                  const carouselItems = document.getElementById('carouselItems');
                  const slides = carouselItems.children;
                  let currentIndex = 0;
                  let interval;
                
                  const updateCarousel = (index) => {
                    carouselItems.style.transform = `translateX(-${index * 100}%)`;
                  };
                
                  const startCarousel = () => {
                    const intervalTime = slides[currentIndex].getAttribute('data-interval') || 5000; // default to 5000ms if no data-interval
                    interval = setTimeout(() => {
                      currentIndex = (currentIndex + 1) % slides.length;
                      updateCarousel(currentIndex);
                      startCarousel();
                    }, intervalTime);
                  };
                
                  document.getElementById('prevBtn').addEventListener('click', () => {
                    clearTimeout(interval);
                    currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
                    updateCarousel(currentIndex);
                    startCarousel();
                  });
                
                  document.getElementById('nextBtn').addEventListener('click', () => {
                    clearTimeout(interval);
                    currentIndex = (currentIndex + 1) % slides.length;
                    updateCarousel(currentIndex);
                    startCarousel();
                  });
                
                  // Start the carousel on page load
                  window.onload = startCarousel;


    