// ============================================
// Home Page Handler - Featured Auctions
// ============================================

// Handle "Place Bid" buttons on home page
document.addEventListener('DOMContentLoaded', () => {
    const featuredAuctionsSection = document.querySelector('.featured-auctions');
    if (!featuredAuctionsSection) return;
    
    const bidButtons = featuredAuctionsSection.querySelectorAll('.auction-item .btn-primary');
    
    bidButtons.forEach((btn, index) => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Check if user is logged in
            if (!isUserLoggedIn()) {
                // Redirect directly to login page
                window.location.href = 'pages/login.html';
                return;
            }
            
            // Get the auction ID (based on position)
            const auctionId = index + 1;
            
            // Redirect to auction details page
            window.location.href = `pages/details.html?id=${auctionId}`;
        });
    });
});
