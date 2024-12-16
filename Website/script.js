

        function toggleMenu() {
            const menu = document.getElementById('navMenu');
            menu.classList.toggle('active');
        }
        
        // Close button functionality
        document.getElementById('nav_close').addEventListener('click', function () {
            const menu = document.getElementById('navMenu');
            menu.classList.remove('active');
        });

        function showFullContent() {
            const modal = document.getElementById("modal");
            modal.style.display = "block";
          }
          
          function closeModal() {
            const modal = document.getElementById("modal");
            modal.style.display = "none";
          }
          
        
      
