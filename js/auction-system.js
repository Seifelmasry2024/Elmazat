// ============================================
// Auction System Management
// ============================================

class AuctionSystem {
    constructor() {
        this.auctions = this.loadAuctions();
        this.bids = this.loadBids();
        this.initializeData();
    }

    // Load Auctions from localStorage
    loadAuctions() {
        const saved = localStorage.getItem('auctions');
        return saved ? JSON.parse(saved) : [];
    }

    // Save Auctions to localStorage
    saveAuctions() {
        localStorage.setItem('auctions', JSON.stringify(this.auctions));
    }

    // Load Bids from localStorage
    loadBids() {
        const saved = localStorage.getItem('bids');
        return saved ? JSON.parse(saved) : [];
    }

    // Save Bids to localStorage
    saveBids() {
        localStorage.setItem('bids', JSON.stringify(this.bids));
    }

    // Initialize Default Auctions if Empty
    initializeData() {
        if (this.auctions.length === 0) {
            this.auctions = [
                {
                    id: 1,
                    title: 'ساعة ذكية فاخرة',
                    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop',
                    currentPrice: 500,
                    originalPrice: 1200,
                    startPrice: 200,
                    endTime: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString(),
                    bidsCount: 45,
                    description: 'ساعة ذكية بتقنية حديثة مع شاشة AMOLED وبطارية تدوم طويلاً',
                    active: true
                },
                {
                    id: 2,
                    title: 'عقد ذهبي فاخر',
                    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop',
                    currentPrice: 800,
                    originalPrice: 1500,
                    startPrice: 400,
                    endTime: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000).toISOString(),
                    bidsCount: 62,
                    description: 'عقد ذهبي عيار 18 مع أحجار كريمة أصلية',
                    active: true
                },
                {
                    id: 3,
                    title: 'نظارات شمسية بريطانية',
                    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=300&h=300&fit=crop',
                    currentPrice: 300,
                    originalPrice: 700,
                    startPrice: 150,
                    endTime: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString(),
                    bidsCount: 38,
                    description: 'نظارات شمسية من ماركة بريطانية عريقة مع حماية UV',
                    active: true
                },
                {
                    id: 4,
                    title: 'حقيبة جلد إيطالية',
                    image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=300&h=300&fit=crop',
                    currentPrice: 1200,
                    originalPrice: 2500,
                    startPrice: 600,
                    endTime: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString(),
                    bidsCount: 58,
                    description: 'حقيبة يد من جلد إيطالي أصلي مع خياطة يدوية',
                    active: true
                },
                {
                    id: 5,
                    title: 'حذاء رياضي عالمي',
                    image: 'https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=300&h=300&fit=crop',
                    currentPrice: 450,
                    originalPrice: 1000,
                    startPrice: 200,
                    endTime: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000).toISOString(),
                    bidsCount: 41,
                    description: 'حذاء رياضي من ماركة عالمية بتقنية تهوية متقدمة',
                    active: true
                },
                {
                    id: 6,
                    title: 'كاميرا احترافية',
                    image: 'https://images.unsplash.com/photo-1606986628025-35d57e735ae0?w=300&h=300&fit=crop',
                    currentPrice: 3500,
                    originalPrice: 6000,
                    startPrice: 2000,
                    endTime: new Date(Date.now() + 6 * 24 * 60 * 60 * 1000).toISOString(),
                    bidsCount: 35,
                    description: 'كاميرا احترافية بدقة 24 ميجابكسل مع عدسات متعددة',
                    active: true
                },
                {
                    id: 7,
                    title: 'لابتوب عالي الأداء',
                    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=300&h=300&fit=crop',
                    currentPrice: 5000,
                    originalPrice: 8500,
                    startPrice: 3000,
                    endTime: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
                    bidsCount: 28,
                    description: 'لابتوب بمعالج حديث وذاكرة رام 16GB وتخزين SSD',
                    active: true
                },
                {
                    id: 8,
                    title: 'ساعة يد فاخرة',
                    image: 'https://images.unsplash.com/photo-1523170335684-f042d1d0f21c?w=300&h=300&fit=crop',
                    currentPrice: 2500,
                    originalPrice: 5000,
                    startPrice: 1500,
                    endTime: new Date(Date.now() + 8 * 24 * 60 * 60 * 1000).toISOString(),
                    bidsCount: 52,
                    description: 'ساعة يد سويسرية بآلية حركة دقيقة وتصميم كلاسيكي',
                    active: true
                },
                {
                    id: 9,
                    title: 'جهاز لوحي حديث',
                    image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=300&h=300&fit=crop',
                    currentPrice: 1800,
                    originalPrice: 3500,
                    startPrice: 1000,
                    endTime: new Date(Date.now() + 9 * 24 * 60 * 60 * 1000).toISOString(),
                    bidsCount: 19,
                    description: 'جهاز لوحي بشاشة OLED وبطارية تدوم طويلاً',
                    active: true
                },
                {
                    id: 10,
                    title: 'سماعات لاسلكية فاخرة',
                    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop',
                    currentPrice: 600,
                    originalPrice: 1200,
                    startPrice: 300,
                    endTime: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000).toISOString(),
                    bidsCount: 73,
                    description: 'سماعات لاسلكية بضوضاء نشطة وجودة صوت فائقة',
                    active: true
                }
            ];
            this.saveAuctions();
        }
    }

    // Get Active Auctions (Sorted by Recent)
    getActiveAuctions() {
        return this.auctions
            .filter(a => a.active)
            .sort((a, b) => new Date(b.endTime) - new Date(a.endTime));
    }

    // Get Last 10 Auctions
    getLastTenAuctions() {
        return this.getActiveAuctions().slice(0, 10);
    }

    // Get Auction by ID
    getAuctionById(id) {
        return this.auctions.find(a => a.id === parseInt(id));
    }

    // Get Bids for Auction
    getBidsForAuction(auctionId) {
        return this.bids.filter(b => b.auctionId === auctionId).sort((a, b) => b.amount - a.amount);
    }

    // Add Bid
    addBid(auctionId, bidderName, amount) {
        const auction = this.getAuctionById(auctionId);
        if (!auction) return false;

        if (amount <= auction.currentPrice) return false;

        const bid = {
            id: this.bids.length + 1,
            auctionId,
            bidderName: bidderName || 'مستخدم مجهول',
            amount,
            timestamp: new Date().toISOString()
        };

        this.bids.push(bid);
        auction.currentPrice = amount;
        auction.bidsCount += 1;

        this.saveBids();
        this.saveAuctions();
        return true;
    }

    // Filter Auctions by Search Term
    searchAuctions(searchTerm) {
        return this.getActiveAuctions().filter(a =>
            a.title.includes(searchTerm) || a.description.includes(searchTerm)
        );
    }

    // Sort Auctions
    sortAuctions(type) {
        const auctions = this.getActiveAuctions();
        
        switch (type) {
            case 'newest':
                return auctions.sort((a, b) => new Date(b.endTime) - new Date(a.endTime));
            case 'oldest':
                return auctions.sort((a, b) => new Date(a.endTime) - new Date(b.endTime));
            case 'price-high':
                return auctions.sort((a, b) => b.currentPrice - a.currentPrice);
            case 'price-low':
                return auctions.sort((a, b) => a.currentPrice - b.currentPrice);
            default:
                return auctions;
        }
    }

    // Get Time Remaining
    getTimeRemaining(endTime) {
        const now = new Date();
        const end = new Date(endTime);
        const diff = end - now;

        if (diff <= 0) {
            return { expired: true, text: 'انتهى المزاد' };
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

        let text = '';
        if (days > 0) text += `${days} يوم `;
        if (hours > 0) text += `${hours} ساعة `;
        if (minutes > 0) text += `${minutes} دقيقة`;

        return { expired: false, text: text.trim() };
    }
}

// Initialize Auction System Globally
const auctionSystem = new AuctionSystem();
