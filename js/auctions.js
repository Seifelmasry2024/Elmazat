// ============================================
// Auctions Page Handler
// ============================================

// Handle "Place Bid" buttons on auctions page
document.addEventListener('DOMContentLoaded', () => {
    const bidButtons = document.querySelectorAll('.auction-item .btn-primary');
    
    bidButtons.forEach((btn, index) => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Check if user is logged in
            if (!isUserLoggedIn()) {
                // Redirect directly to login page
                window.location.href = 'login.html';
                return;
            }
            
            // Get the auction ID (based on position)
            const auctionId = index + 1;
            
            // Redirect to auction details page
            window.location.href = `details.html?id=${auctionId}`;
        });
    });
});
