// Univlop - Preloved Marketplace Mahasiswa Kos (SIFORIA 2026 UI/UX)


// Vite only bundles assets it can see statically; map 'assets/x.ext' strings in data to built URLs.
// Fallback safely if running outside Vite (e.g. plain static server or browser preview).
const ASSET_URLS = (typeof import.meta !== 'undefined' && typeof import.meta.glob === 'function')
  ? Object.fromEntries(
      Object.entries(import.meta.glob('./assets/*.{png,jpg,jpeg,svg}', { eager: true, query: '?url', import: 'default' }))
        .map(([path, url]) => [path.slice(2), url])
    )
  : {};
const assetUrl = (path) => ASSET_URLS[path] || path;

// --- 1. Master Product Database (Ekosistem Kos Mahasiswa UMS Solo) ---
const PRODUCTS = [
  {
    id: 'rice-cooker',
    title: 'Rice Cooker Miyako 0.6L Kosan',
    category: 'Elektronik',
    price: 85000,
    originalPrice: 190000,
    image: 'assets/banner-product-1.png',
    rating: 4.9,
    reviews: 28,
    seller: 'Aulia (Kos Gonilan UMS)',
    sellerTrust: 96,
    sellerStatus: 'Mahasiswa UMS · Aktif 10 menit lalu',
    condition: 'Bekas, Sangat Baik (95%)',
    completeness: 'Panci teflon mulus, kabel, centong',
    usage: '4 Bulan',
    posted: 'Hari ini',
    distance: '350m · Gonilan',
    areaCluster: 'gonilan',
    codSpot: 'Plaza Danau Siti Walidah UMS',
    codStatus: 'Tersedia',
    description: 'Rice cooker mini hemat listrik 300W pas untuk anak kos UMS. Fungsi masak dan penghangat normal, teflon anti lengket masih sangat mulus. Bisa cek nyala saat COD.'
  },
  {
    id: 'kipas-meja',
    title: 'Kipas Angin Meja Stand 12"',
    category: 'Elektronik',
    price: 65000,
    originalPrice: 150000,
    image: 'assets/banner-product-2.png',
    rating: 4.8,
    reviews: 19,
    seller: 'Bagus (Kos Pabelan UMS)',
    sellerTrust: 93,
    sellerStatus: 'Mahasiswa UMS · Aktif 15 menit lalu',
    condition: 'Bekas, Bersih (92%)',
    completeness: 'Unit kipas lengkap siap pakai',
    usage: '5 Bulan',
    posted: 'Kemarin',
    distance: '450m · Pabelan',
    areaCluster: 'pabelan',
    codSpot: 'Gerbang Utama Kampus 1 UMS',
    codStatus: 'Tersedia',
    description: 'Kipas angin meja hembusan kencang dan tidak berisik. Dijual karena mau oper kamar kos lulusan. Bersih tidak ada debu menumpuk, siap COD area Pabelan.'
  },
  {
    id: 'camera-sony',
    title: 'Kamera Sony Pocket 20MP',
    category: 'Alat Kuliah',
    price: 850000,
    originalPrice: 1000000,
    image: 'assets/camera-sony.png',
    rating: 4.9,
    reviews: 32,
    seller: 'Shenina Tsabita (FKI UMS)',
    sellerTrust: 96,
    sellerStatus: 'Mahasiswa FKI UMS · Aktif 5 menit lalu',
    condition: 'Bekas, Baik (90%)',
    completeness: 'Tali strap, Baterai ori, Charger',
    usage: '9 Bulan',
    posted: '2 Hari yang lalu',
    distance: '400m · Gonilan',
    areaCluster: 'gonilan',
    codSpot: 'Plaza Danau Siti Walidah UMS',
    codStatus: 'Tersedia',
    description: 'Kamera pocket Sony 20.1 MP bekas praktikum komunikasi & dokumentasi himpunan. Fungsi normal, lensa bersih. Bisa tes jepret langsung saat COD di Danau Siti Walidah UMS.'
  },
  {
    id: 'meja-kopi',
    title: 'Meja Belajar Lesehan Kayu Jati',
    category: 'Perabotan',
    price: 125000,
    originalPrice: 240000,
    image: 'assets/meja-kopi.png',
    rating: 4.8,
    reviews: 14,
    seller: 'Dinda (Kos Nilagraha Gonilan)',
    sellerTrust: 95,
    sellerStatus: 'Mahasiswa FEB UMS · Aktif 12 menit lalu',
    condition: 'Bekas, Mulus (94%)',
    completeness: 'Meja kayu utuh, kaki kokoh',
    usage: '6 Bulan',
    posted: 'Kemarin',
    distance: '300m · Nilagraha',
    areaCluster: 'gonilan',
    codSpot: 'Pelataran Edutorium KH Ahmad Dahlan UMS',
    codStatus: 'Tersedia',
    description: 'Meja belajar lesehan kayu jati belanda untuk kamar kos. Permukaan halus dan rata, nyaman buat laptopan. Dijual karena mau pindah kos.'
  },
  {
    id: 'kursi-goyang',
    title: 'Kursi Belajar Santai Kayu Kos',
    category: 'Perabotan',
    price: 350000,
    originalPrice: 650000,
    image: 'assets/kursi-goyang.png',
    rating: 4.7,
    reviews: 9,
    seller: 'Alif (Kos Mendungan UMS)',
    sellerTrust: 89,
    sellerStatus: 'Mahasiswa FK UMS · Aktif 1 jam lalu',
    condition: 'Bekas, Sangat Baik',
    completeness: 'Unit kursi lengkap bantalan',
    usage: '8 Bulan',
    posted: '3 Hari yang lalu',
    distance: '600m · Mendungan',
    areaCluster: 'mendungan',
    codSpot: 'Taman Kampus 4 UMS Mendungan',
    codStatus: 'Tersedia',
    description: 'Kursi santai nyaman untuk belajar dan baca modul kuliah di kos. Rangka kayu kuat, siap dijemput di kos Mendungan dekat Kampus 4 UMS.'
  },
  {
    id: 'lemari-kayu',
    title: 'Paket Oper Kamar Wisuda (Lemari + Kasur + Meja)',
    category: 'Paket Oper Kamar',
    price: 950000,
    originalPrice: 1750000,
    image: 'assets/lemari-kayu.png',
    rating: 4.9,
    reviews: 21,
    seller: 'Rania (Wisudawan Teknik UMS)',
    sellerTrust: 94,
    sellerStatus: 'Mahasiswa FT UMS · Aktif 30 menit lalu',
    condition: 'Paket Lengkap Siap Pakai',
    completeness: 'Lemari kayu 2 pintu, kasur busa, meja belajar',
    usage: '1 Tahun',
    posted: '1 Hari yang lalu',
    distance: '500m · Pabelan',
    areaCluster: 'pabelan',
    codSpot: 'Area Terbuka Kampus 2 UMS Pabelan',
    codStatus: 'Tersedia',
    description: 'Paket borongan oper isi kamar kos wisudawan UMS Pabelan. Semua terawat bersih, tidak perlu beli baru satu-satu. Cek langsung ke kos Pabelan.'
  },
  {
    id: 'meja-samping',
    title: 'Rak & Meja Samping Kasur Kos 2 Tingkat',
    category: 'Perabotan',
    price: 95000,
    originalPrice: 185000,
    image: 'assets/meja-samping.png',
    rating: 4.6,
    reviews: 18,
    seller: 'Fikri (Kos Makamhaji UMS)',
    sellerTrust: 91,
    sellerStatus: 'Mahasiswa FH UMS · Aktif 2 jam lalu',
    condition: 'Bekas, Baik (90%)',
    completeness: 'Meja 2 tingkat siap angkut',
    usage: '5 Bulan',
    posted: '4 Hari yang lalu',
    distance: '750m · Makamhaji',
    areaCluster: 'makamhaji',
    codSpot: 'Gerbang Utama Kampus 1 UMS',
    codStatus: 'Tersedia',
    description: 'Ukuran pas di samping kasur kos. Ada ambalan bawah untuk galon, buku kuliah, atau alat tulis. Ringan bisa dibawa naik motor saat COD.'
  }
];
PRODUCTS.forEach(p => { p.image = assetUrl(p.image); });

// --- 2. Daftar Incaran & Janjian COD State (Tanpa Checkout Kurir) ---
let CART = [
  { product: PRODUCTS.find(p => p.id === 'rice-cooker'), qty: 1, selected: true },
  { product: PRODUCTS.find(p => p.id === 'kipas-meja'), qty: 1, selected: true },
  { product: PRODUCTS.find(p => p.id === 'meja-kopi'), qty: 1, selected: true }
];

let currentDetailProduct = PRODUCTS[0];
let activeScreenId = 'screen-home';
let selectedPaymentMethod = 'cod';

// --- 3. Format Rupiah ---
function formatRupiah(amount) {
  return 'Rp ' + amount.toLocaleString('id-ID');
}

// --- 4. Navigation & Screen Switching ---
function navigateToScreen(screenId) {
  if (screenId && !screenId.startsWith('screen-')) {
    screenId = 'screen-' + screenId;
  }
  const screens = document.querySelectorAll('.app-screen');
  screens.forEach(s => s.classList.remove('active-screen'));

  const target = document.getElementById(screenId);
  if (target) {
    target.classList.add('active-screen');
    activeScreenId = screenId;
    
    // Scroll window smoothly to top
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Update floating nav active tab
    const tabHome = document.getElementById('figmaTabHome');
    const tabCatalog = document.getElementById('figmaTabCatalog');
    const tabCart = document.getElementById('figmaTabCart');
    const tabProfile = document.getElementById('figmaTabProfile');
    const floatingNav = document.getElementById('figmaFloatingNav');

    if (tabHome) tabHome.classList.toggle('active', screenId === 'screen-home');
    if (tabCatalog) tabCatalog.classList.toggle('active', screenId === 'screen-catalog');
    if (tabCart) tabCart.classList.toggle('active', screenId === 'screen-cart');
    if (tabProfile) tabProfile.classList.toggle('active', screenId === 'screen-profile');

    // Update desktop nav active state
    const dHome = document.getElementById('desktopNavHome');
    const dCatalog = document.getElementById('desktopNavCatalog');
    const dCart = document.getElementById('desktopNavCart');
    const dProfile = document.getElementById('desktopNavProfile');

    if (dHome) dHome.classList.toggle('active', screenId === 'screen-home');
    if (dCatalog) dCatalog.classList.toggle('active', screenId === 'screen-catalog');
    if (dCart) dCart.classList.toggle('active', screenId === 'screen-cart');
    if (dProfile) dProfile.classList.toggle('active', screenId === 'screen-profile');

    // Show floating nav on primary screens
    if (floatingNav) {
      if (['screen-home', 'screen-catalog', 'screen-cart', 'screen-profile'].includes(screenId)) {
        floatingNav.style.display = 'flex';
      } else {
        floatingNav.style.display = 'none';
      }
    }

    // Render screen specific states
    if (screenId === 'screen-catalog') renderCatalogProducts();
    if (screenId === 'screen-cart') renderCart();
    if (screenId === 'screen-checkout') renderCheckout();
    if (screenId === 'screen-profile') {
      renderProfileLapak();
      renderProfileOrders();
    }
  }
}

// --- 5. Catalog Rendering & Filters (Fokus Klaster Kos UMS) ---
let activeDesktopCategories = new Set(['Perabotan', 'Elektronik', 'Alat Kuliah', 'Paket Hemat', 'Paket Oper Kamar']);
let activeCampusFilter = 'all';
let activeRadiusKm = 5.0;

function renderCatalogProducts(filterType = 'all', searchKeyword = '') {
  const grid = document.getElementById('figmaCatalogGrid');
  if (!grid) return;

  let list = [...PRODUCTS];

  // Apply Category Filter
  if (activeDesktopCategories.size > 0) {
    list = list.filter(p => activeDesktopCategories.has(p.category) || activeDesktopCategories.size === 5);
  }

  // Apply Area Kos UMS Cluster Filter
  if (activeCampusFilter && activeCampusFilter !== 'all') {
    list = list.filter(p => p.areaCluster === activeCampusFilter);
  }

  // Apply Search Keyword Filter
  const input = document.getElementById('catalogSearchField');
  const kw = (searchKeyword || (input ? input.value : '')).trim().toLowerCase();
  if (kw && kw !== 'perabotan') {
    list = list.filter(p => 
      p.title.toLowerCase().includes(kw) || 
      p.category.toLowerCase().includes(kw) ||
      (p.seller && p.seller.toLowerCase().includes(kw)) ||
      (p.distance && p.distance.toLowerCase().includes(kw)) ||
      (p.description && p.description.toLowerCase().includes(kw))
    );
  }

  // Apply Sorting Chips
  if (filterType === 'murah') {
    list.sort((a, b) => a.price - b.price);
  } else if (filterType === 'terlaris') {
    list.sort((a, b) => b.reviews - a.reviews);
  } else if (filterType === 'kamubanget') {
    list.sort((a, b) => (b.isUserListing ? 1 : 0) - (a.isUserListing ? 1 : 0));
  }

  if (list.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; padding: 30px; text-align: center; color: var(--color-brown-subtle);">
        <p style="font-weight: 700; font-size: 14px;">Belum ada barang kos UMS yang cocok dengan filter kamu.</p>
        <button class="btn-reset-filters" style="margin-top: 10px;" onclick="resetDesktopFilters()">Reset Filter Area UMS</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = list.map(p => {
    const savingPercent = p.originalPrice ? Math.round(((p.originalPrice - p.price) / p.originalPrice) * 100) : 0;
    const distanceText = p.distance || '350m · Gonilan';
    const isBooked = p.codStatus === 'Booked COD';
    return `
    <div class="figma-product-card" onclick="openProductDetail('${p.id}')">
      <div class="figma-card-img-wrap" style="position: relative;">
        <img src="${p.image}" alt="${p.title}" loading="lazy">
        ${p.isUserListing ? '<span style="position: absolute; top: 8px; left: 8px; background: var(--color-obsidian); color: #FFF; font-size: 8.5px; font-weight: 800; letter-spacing: 0.1em; text-transform: uppercase; padding: 3px 7px; border-radius: 0;">Lapak Kamu</span>' : ''}
        ${isBooked ? '<span style="position: absolute; top: 8px; right: 8px; background: #D97706; color: #FFF; font-size: 8.5px; font-weight: 800; letter-spacing: 0.1em; text-transform: uppercase; padding: 3px 7px; border-radius: 0;">Dijanjikan COD</span>' : (p.category === 'Paket Oper Kamar' ? '<span style="position: absolute; top: 8px; right: 8px; background: #2E7D32; color: #FFF; font-size: 8.5px; font-weight: 800; letter-spacing: 0.1em; text-transform: uppercase; padding: 3px 7px; border-radius: 0;">Oper Kos UMS</span>' : '')}
        ${savingPercent > 0 ? `<span style="position: absolute; bottom: 8px; left: 8px; background: var(--color-heritage-burgundy); color: #FFF; font-size: 8.5px; font-weight: 800; letter-spacing: 0.1em; text-transform: uppercase; padding: 3px 7px; border-radius: 0;">Hemat ${savingPercent}%</span>` : ''}
        <span style="position: absolute; bottom: 8px; right: 8px; background: rgba(17,17,17,0.85); color: #FFF; font-size: 8.5px; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; padding: 3px 7px; border-radius: 0;">${distanceText}</span>
      </div>
      <div class="figma-card-title">${p.title}</div>
      <div style="display: flex; align-items: baseline; gap: 8px; padding: 0 14px; margin-top: 2px;">
        <span class="figma-card-price">${formatRupiah(p.price)}</span>
        ${p.originalPrice ? `<span style="font-size: 11px; color: #999999; text-decoration: line-through; font-weight: 600;">${formatRupiah(p.originalPrice)}</span>` : ''}
      </div>
      <div style="font-size: 10px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: #57534E; padding: 4px 14px 0; display: flex; justify-content: space-between; align-items: center;">
        <span>${p.seller || 'Mahasiswa UMS'}</span>
        <span style="color: #C98A00; font-weight: 800; display: inline-flex; align-items: center; gap: 3px;">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="#C98A00"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          ${p.rating || '4.8'}
        </span>
      </div>
      <div style="display: flex; gap: 8px; padding: 12px 14px 14px; margin-top: auto;">
        <button class="como-btn-nego" style="flex: 1; min-height: 40px; height: 40px; padding: 0 6px; font-size: 9.5px;" onclick="event.stopPropagation(); openOfferModal('${p.id}')">
          TAWAR / OPER
        </button>
        <button class="como-btn-bag" style="flex: 1; min-height: 40px; height: 40px; padding: 0 6px; font-size: 9.5px;" onclick="event.stopPropagation(); openChatModal('${p.id}')">
          CHAT COD
        </button>
      </div>
    </div>
  `}).join('');
}

function filterCatalogInput(val) {
  renderCatalogProducts('all', val);
}

function applyFigmaFilter(type, elem) {
  document.querySelectorAll('.figma-chips-row .figma-chip').forEach(btn => btn.classList.remove('active'));
  if (elem) elem.classList.add('active');
  const input = document.getElementById('catalogSearchField');
  const kw = input ? input.value : '';
  renderCatalogProducts(type, kw);
  showToast(`Filter: ${elem ? elem.textContent.trim() : type}`);
}

function selectCategory(categoryName) {
  navigateToScreen('screen-catalog');
  const input = document.getElementById('catalogSearchField');
  if (input) input.value = categoryName;
  activeDesktopCategories = new Set([categoryName]);
  renderCatalogProducts('all', categoryName);
  showToast(`Kategori: ${categoryName}`);
}

// --- 6. Product Detail (Fokus Tawar / Oper & Janjian COD UMS) ---
function openProductDetail(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  currentDetailProduct = product;
  window.currentDetailProduct = product;

  const titleElem = document.getElementById('detailTitleFigma');
  const priceElem = document.getElementById('detailPriceFigma');
  const oldPriceElem = document.getElementById('detailOldPriceFigma');
  const catPill = document.getElementById('detailCatPillFigma');
  const statusPill = document.getElementById('detailStatusPillFigma');
  const descElem = document.getElementById('detailDescFigma');
  const imgElem = document.getElementById('detailImgFigma');
  const specCond = document.getElementById('detailSpecCond');
  const specComp = document.getElementById('detailSpecComp');
  const specLoc = document.getElementById('detailSpecLoc');
  const sellerName = document.getElementById('detailSellerName');
  const sellerSub = document.getElementById('detailSellerSub');
  const sellerTrust = document.getElementById('detailSellerTrust');

  if (titleElem) titleElem.textContent = product.title;
  if (priceElem) priceElem.textContent = formatRupiah(product.price) + ',00';
  if (oldPriceElem) oldPriceElem.textContent = product.originalPrice ? formatRupiah(product.originalPrice) + ',00' : '';
  if (catPill) catPill.textContent = product.category;
  if (statusPill) {
    const isBooked = product.codStatus === 'Booked COD';
    statusPill.textContent = isBooked ? 'Status: Dijanjikan COD (Booked)' : 'Status: Tersedia COD UMS';
    statusPill.style.background = isBooked ? '#FFF4E6' : '#EBFBEE';
    statusPill.style.color = isBooked ? '#D97706' : '#2E7D32';
  }
  if (descElem) descElem.textContent = product.description;
  if (imgElem) imgElem.src = product.image;
  if (specCond) specCond.textContent = product.condition || 'Bekas, Sangat Baik';
  if (specComp) specComp.textContent = product.completeness || 'Unit lengkap siap pakai';
  if (specLoc) specLoc.textContent = (product.codSpot || 'Danau Siti Walidah UMS') + ' (' + (product.distance || '350m dari kos') + ')';
  if (sellerName) sellerName.textContent = product.seller || 'Mahasiswa UMS';
  if (sellerSub) sellerSub.textContent = product.sellerStatus || 'Mahasiswa UMS Terverifikasi KTM · Aktif';
  if (sellerTrust) sellerTrust.textContent = (product.sellerTrust || 95) + '%';

  navigateToScreen('screen-detail');
}

function addCurrentProductToCart() {
  if (currentDetailProduct) {
    addToCart(currentDetailProduct.id);
  }
}

// Lapak Penjual dari Sisi User (Public Seller Storefront)
let currentViewingSeller = null;

function openSellerStorefront(sellerName) {
  if (!sellerName && currentDetailProduct) {
    sellerName = currentDetailProduct.seller;
  }
  if (!sellerName) sellerName = 'Bagus (Kos Pabelan UMS)';

  currentViewingSeller = sellerName;

  const sellerProducts = PRODUCTS.filter(p => p.seller && (
    p.seller.toLowerCase().includes(sellerName.toLowerCase()) || 
    sellerName.toLowerCase().includes(p.seller.toLowerCase())
  ));

  let displayList = [...sellerProducts];
  if (displayList.length < 3) {
    const referenceProd = currentDetailProduct || PRODUCTS.find(p => p.seller === sellerName) || PRODUCTS[0];
    const more = PRODUCTS.filter(p => !displayList.some(dp => dp.id === p.id) && (p.areaCluster === referenceProd.areaCluster || p.category === referenceProd.category));
    displayList = [...displayList, ...more.slice(0, 3 - displayList.length)];
  }

  const avatarEl = document.getElementById('sellerStoreAvatar');
  const nameEl = document.getElementById('sellerStoreName');
  const subEl = document.getElementById('sellerStoreSubtitle');
  const clusterEl = document.getElementById('sellerStoreCluster');
  const ratingEl = document.getElementById('sellerStoreRating');
  const activeCountEl = document.getElementById('sellerStoreActiveCount');
  const successCountEl = document.getElementById('sellerStoreSuccessCount');
  const trustScoreEl = document.getElementById('sellerStoreTrustScore');
  const meetingPointEl = document.getElementById('sellerStoreMeetingPoint');
  const countPillEl = document.getElementById('sellerStoreListCount');
  const gridEl = document.getElementById('sellerStoreProductGrid');

  const initials = sellerName.replace(/\(.*?\)/g, '').trim().split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase() || 'UM';

  if (avatarEl) avatarEl.textContent = initials;
  if (nameEl) nameEl.textContent = sellerName;
  if (subEl) subEl.textContent = (currentDetailProduct && currentDetailProduct.sellerStatus) ? currentDetailProduct.sellerStatus : 'Mahasiswa UMS Terverifikasi KTM · Aktif';
  
  const referenceProd = currentDetailProduct || sellerProducts[0] || PRODUCTS[0];
  if (clusterEl) clusterEl.textContent = (referenceProd.areaCluster || 'Pabelan').toUpperCase();
  if (ratingEl) {
    ratingEl.innerHTML = `<svg width="13" height="13" viewBox="0 0 24 24" fill="#C98A00"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg> <span>${referenceProd.rating || '4.9'}</span>`;
  }
  if (activeCountEl) activeCountEl.textContent = displayList.length;
  if (successCountEl) successCountEl.textContent = referenceProd.reviews || '14';
  if (trustScoreEl) trustScoreEl.textContent = (referenceProd.sellerTrust || 96) + '%';
  if (meetingPointEl) meetingPointEl.textContent = referenceProd.codSpot || 'Gerbang Utama Kampus 1 UMS / Danau Siti Walidah';
  if (countPillEl) countPillEl.textContent = `${displayList.length} Barang Tersedia`;

  if (gridEl) {
    gridEl.innerHTML = displayList.map(p => {
      const savingPercent = p.originalPrice ? Math.round(((p.originalPrice - p.price) / p.originalPrice) * 100) : 0;
      const distanceText = p.distance || '350m · Gonilan';
      const isBooked = p.codStatus === 'Booked COD';
      return `
        <div class="figma-product-card" onclick="openProductDetail('${p.id}')">
          <div class="figma-card-img-wrap" style="position: relative;">
            <img src="${p.image}" alt="${p.title}" loading="lazy">
            ${isBooked ? '<span style="position: absolute; top: 8px; right: 8px; background: #D97706; color: #FFF; font-size: 8.5px; font-weight: 800; letter-spacing: 0.1em; text-transform: uppercase; padding: 3px 7px;">Dijanjikan COD</span>' : ''}
            ${savingPercent > 0 ? `<span style="position: absolute; bottom: 8px; left: 8px; background: var(--color-heritage-burgundy); color: #FFF; font-size: 8.5px; font-weight: 800; letter-spacing: 0.1em; text-transform: uppercase; padding: 3px 7px;">Hemat ${savingPercent}%</span>` : ''}
            <span style="position: absolute; bottom: 8px; right: 8px; background: rgba(17,17,17,0.85); color: #FFF; font-size: 8.5px; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; padding: 3px 7px;">${distanceText}</span>
          </div>
          <div class="figma-card-title">${p.title}</div>
          <div style="display: flex; align-items: baseline; gap: 8px; padding: 0 14px; margin-top: 2px;">
            <span class="figma-card-price">${formatRupiah(p.price)}</span>
            ${p.originalPrice ? `<span style="font-size: 11px; color: #78716C; text-decoration: line-through; font-weight: 600;">${formatRupiah(p.originalPrice)}</span>` : ''}
          </div>
          <div style="font-size: 10px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: #57534E; padding: 4px 14px 10px; display: flex; justify-content: space-between; align-items: center;">
            <span>${p.condition || 'Bekas Bagus'}</span>
            <span style="color: var(--color-maroon); font-weight: 800;">Lihat Detail &rarr;</span>
          </div>
        </div>
      `;
    }).join('');
  }

  navigateToScreen('screen-seller-store');
}

// --- 7. Daftar Incaran & Janjian COD Operations ---
function addToCart(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existing = CART.find(item => item.product && item.product.id === productId);
  if (!existing) {
    CART.push({ product, qty: 1, selected: true });
    showToast(`"${product.title}" disimpan ke Daftar Incaran COD!`);
  } else {
    showToast(`"${product.title}" sudah ada di Daftar Incaran COD kamu.`);
  }

  renderCart();
  saveAppState();
}

function removeFromCart(productId) {
  CART = CART.filter(item => item.product && item.product.id !== productId);
  renderCart();
  saveAppState();
  showToast('Barang dihapus dari Daftar Incaran COD.');
}

function renderCart() {
  const container = document.getElementById('figmaCartItems');
  const summaryLbl = document.getElementById('cartSummaryLblFigma');
  const summaryVal = document.getElementById('cartSummaryValFigma');
  const desktopCart = document.getElementById('desktopCartCounter');
  const mobileCart = document.getElementById('mobileCartCounter');

  CART = CART.filter(item => item && item.product);
  const totalQty = CART.length;
  const totalPrice = CART.reduce((sum, item) => sum + item.product.price, 0);

  if (desktopCart) desktopCart.textContent = totalQty;
  if (mobileCart) mobileCart.textContent = totalQty;
  if (summaryLbl) summaryLbl.textContent = `Estimasi Total COD (${totalQty} barang incaran)`;
  if (summaryVal) summaryVal.textContent = formatRupiah(totalPrice);

  if (!container) return;

  if (CART.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 48px 16px; color: #666666; background: var(--color-stone-bone); border: 1px solid var(--color-hairline); border-radius: 0;">
        <p style="font-family: var(--font-serif); font-weight: 800; font-size: 17px; color: var(--color-obsidian);">Belum Ada Barang Incaran COD</p>
        <p style="font-size: 12px; margin-top: 6px; color: #666666;">Cari barang kos di sekitar UMS lalu klik Tawar / Oper atau Simpan Incaran!</p>
        <button class="btn-como-primary" style="width: 240px; height: 44px; margin: 18px auto 0;" onclick="navigateToScreen('screen-catalog')">
          JELAJAHI BARANG KOS UMS
        </button>
      </div>
    `;
    return;
  }

  container.innerHTML = CART.map((item) => `
    <div class="cart-card-figma" style="flex-direction: column; align-items: stretch; gap: 12px;">
      <div style="display: flex; align-items: center; justify-content: space-between; gap: 12px;">
        <div class="cart-card-left" style="cursor: pointer;" onclick="openProductDetail('${item.product.id}')">
          <div class="cart-card-thumb-figma">
            <img src="${item.product.image}" alt="${item.product.title}">
          </div>
          <div>
            <div class="cart-card-title-figma">${item.product.title}</div>
            <div class="cart-card-price-figma">${formatRupiah(item.product.price)}</div>
            <div style="font-size: 10px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: #57534E; margin-top: 3px;">
              ${item.product.seller || 'Mahasiswa UMS'} • ${item.product.codSpot || 'Danau Siti Walidah UMS'}
            </div>
          </div>
        </div>
        <button type="button" onclick="removeFromCart('${item.product.id}')" aria-label="Hapus dari incaran" style="background: transparent; border: 1px solid var(--color-hairline); border-radius: 0; min-height: 36px; font-size: 10px; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; color: #C92A2A; cursor: pointer; padding: 6px 10px;">
          Hapus
        </button>
      </div>
      <div style="display: flex; gap: 8px; border-top: 1px solid var(--color-hairline); padding-top: 10px;">
        <button type="button" class="como-btn-nego" style="flex: 1; height: 40px; min-height: 40px; font-size: 10px;" onclick="openOfferModal('${item.product.id}')">
          TAWAR / OPER HARGA
        </button>
        <button type="button" class="como-btn-bag" style="flex: 1; height: 40px; min-height: 40px; font-size: 10px;" onclick="openChatModal('${item.product.id}')">
          CHAT & JANJIAN COD
        </button>
      </div>
    </div>
  `).join('');
}

function toggleSelectAllCart() {
  const box = document.getElementById('pilihSemuaBox');
  if (box) {
    box.classList.toggle('checked');
    showToast('Seluruh barang incaran siap dijadwalkan COD');
  }
}

function proceedToCheckout() {
  if (CART.length === 0) {
    showToast('Daftar incaran COD masih kosong!');
    return;
  }
  navigateToScreen('screen-checkout');
}

// --- 8. Penjadwalan Janjian COD UMS (100% Tanpa Kurir / Tanpa Rekber) ---
function renderCheckout() {
  const subtotalElem = document.getElementById('checkoutSubtotalFigma');
  const grandTotalElem = document.getElementById('checkoutGrandTotalFigma');
  
  const subtotal = CART.length > 0
    ? CART.reduce((sum, item) => sum + (item.product ? item.product.price : 0), 0)
    : (currentDetailProduct ? currentDetailProduct.price : 85000);

  if (subtotalElem) subtotalElem.textContent = formatRupiah(subtotal);
  if (grandTotalElem) grandTotalElem.textContent = formatRupiah(subtotal);
}

function selectFigmaPayment(method, elem) {
  selectedPaymentMethod = method;
  document.querySelectorAll('.pay-option-figma').forEach(opt => {
    opt.classList.remove('active');
    const radio = opt.querySelector('.radio-check-circle, .radio-uncheck-circle');
    if (radio) {
      radio.className = 'radio-uncheck-circle';
      radio.innerHTML = '';
    }
  });

  if (elem) {
    elem.classList.add('active');
    const radio = elem.querySelector('.radio-uncheck-circle');
    if (radio) {
      radio.className = 'radio-check-circle';
      radio.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>';
    }
  }

  showToast(`Pelunasan saat ketemuan COD: ${method === 'cod' ? 'Uang Tunai (Cash di Tempat)' : 'Scan QRIS Langsung Saat Ketemu'}`);
}

function confirmFigmaOrder() {
  const orderNum = 'UNIV-' + Math.floor(10000 + Math.random() * 90000);
  const meetingPlace = (selectedMeetingPoint && selectedMeetingPoint.name)
    ? selectedMeetingPoint.name
    : 'Plaza Danau Siti Walidah UMS';
  const timeSelect = document.getElementById('checkoutCodTimeSelect');
  const meetingTime = timeSelect ? timeSelect.value : 'Sore Hari Ini · 16:30 WIB (Selesai Kuliah)';
  
  let totalPrice = 0;
  let firstItemTitle = 'Rice Cooker Miyako 0.6L Kosan';
  let sellerName = 'Shenina Tsabita (FKI UMS)';

  if (CART.length > 0) {
    totalPrice = CART.reduce((sum, item) => sum + (item.product ? item.product.price : 0), 0);
    firstItemTitle = CART[0].product.title + (CART.length > 1 ? ` (+${CART.length - 1} barang kos lainnya)` : '');
    sellerName = CART[0].product.seller || 'Shenina Tsabita (FKI UMS)';
    CART.forEach(item => {
      if (item.product) item.product.codStatus = 'Booked COD';
    });
  } else if (currentDetailProduct) {
    totalPrice = currentDetailProduct.price;
    firstItemTitle = currentDetailProduct.title;
    sellerName = currentDetailProduct.seller || 'Shenina Tsabita (FKI UMS)';
    currentDetailProduct.codStatus = 'Booked COD';
  } else {
    totalPrice = 85000;
  }

  let firstItemImage = 'assets/camera-sony.png';
  let firstItemProductId = 'camera-sony';
  if (CART.length > 0 && CART[0].product) {
    if (CART[0].product.image) firstItemImage = CART[0].product.image;
    if (CART[0].product.id) firstItemProductId = CART[0].product.id;
  } else if (currentDetailProduct) {
    if (currentDetailProduct.image) firstItemImage = currentDetailProduct.image;
    if (currentDetailProduct.id) firstItemProductId = currentDetailProduct.id;
  }

  const newOrder = {
    id: orderNum,
    productName: firstItemTitle,
    seller: sellerName,
    buyer: CURRENT_USER ? CURRENT_USER.name : 'Rizky Pratama',
    price: totalPrice,
    status: 'Booked COD',
    meetingPoint: `${meetingPlace} (${meetingTime})`,
    note: `Bayar di Tempat (${selectedPaymentMethod === 'cod' ? 'Tunai Saat Ketemu' : 'QRIS Saat Ketemu'}) · Rp 0 Biaya Admin`,
    image: firstItemImage,
    productId: firstItemProductId
  };

  ORDERS.unshift(newOrder);
  if (CURRENT_USER && CURRENT_USER.orders) {
    CURRENT_USER.orders.unshift(newOrder);
  }
  if (ACCOUNTS.seller && !ACCOUNTS.seller.orders.some(o => o.id === orderNum)) {
    ACCOUNTS.seller.orders.unshift(newOrder);
  }

  const orderNoElem = document.getElementById('statusOrderNo');
  if (orderNoElem) orderNoElem.textContent = '#' + orderNum;

  const statusMeetingPoint = document.getElementById('statusMeetingPoint');
  if (statusMeetingPoint) statusMeetingPoint.textContent = `${meetingPlace} (${meetingTime})`;

  CART = [];
  renderCart();
  renderCatalogProducts();
  renderProfileOrders();
  renderAdminDesk();
  saveAppState();

  showToast(`Jadwal COD #${orderNum} dikunci di ${meetingPlace}!`);
  setTimeout(() => {
    navigateToScreen('screen-status');
  }, 250);
}

// --- 9. Modals (Chat COD, WhatsApp Handoff, Location, Notification, Menu) ---
function openChatModal(productId) {
  if (productId) {
    const found = PRODUCTS.find(p => p.id === productId);
    if (found) currentDetailProduct = found;
  }
  const prod = currentDetailProduct || PRODUCTS[0];

  const thumb = document.getElementById('chatProductThumb');
  const title = document.getElementById('chatProductTitle');
  const price = document.getElementById('chatProductPrice');
  const sellerName = document.getElementById('chatSellerNameDisplay');
  const sellerSub = document.getElementById('chatSellerSubDisplay');

  if (thumb && prod) thumb.src = prod.image;
  if (title && prod) title.textContent = prod.title;
  if (price && prod) price.textContent = `${formatRupiah(prod.price)} · Bisa Tawar / COD`;
  if (sellerName && prod) sellerName.textContent = prod.seller || 'Shenina Tsabita (FKI UMS)';
  if (sellerSub && prod) sellerSub.textContent = `Mahasiswa UMS Terverifikasi KTM · ${prod.distance || '500m · Pabelan'}`;

  const m = document.getElementById('modalChat');
  if (m) {
    m.classList.add('open');
    const box = document.getElementById('chatMessagesBox');
    if (box) setTimeout(() => { box.scrollTop = box.scrollHeight; }, 60);
  }
}

function closeChatModal() {
  const m = document.getElementById('modalChat');
  if (m) {
    m.classList.remove('open');
    m.classList.remove('is-fullscreen');
    const btn = document.getElementById('chatFullscreenBtn');
    if (btn) {
      const maxIcon = btn.querySelector('.icon-maximize');
      const minIcon = btn.querySelector('.icon-minimize');
      btn.title = 'Layar Penuh';
      btn.setAttribute('aria-label', 'Layar Penuh');
      if (maxIcon) maxIcon.style.display = 'block';
      if (minIcon) minIcon.style.display = 'none';
    }
  }
}

function toggleChatFullscreen() {
  const m = document.getElementById('modalChat');
  if (!m) return;
  const isFs = m.classList.toggle('is-fullscreen');
  const btn = document.getElementById('chatFullscreenBtn');
  if (btn) {
    const maxIcon = btn.querySelector('.icon-maximize');
    const minIcon = btn.querySelector('.icon-minimize');
    if (isFs) {
      btn.title = 'Kecilkan Layar';
      btn.setAttribute('aria-label', 'Kecilkan Layar');
      if (maxIcon) maxIcon.style.display = 'none';
      if (minIcon) minIcon.style.display = 'block';
    } else {
      btn.title = 'Layar Penuh';
      btn.setAttribute('aria-label', 'Layar Penuh');
      if (maxIcon) maxIcon.style.display = 'block';
      if (minIcon) minIcon.style.display = 'none';
    }
  }
  const box = document.getElementById('chatMessagesBox');
  if (box) setTimeout(() => { box.scrollTop = box.scrollHeight; }, 100);
}

function openWhatsAppChat() {
  const prod = currentDetailProduct || PRODUCTS[0];
  const spot = (selectedMeetingPoint && selectedMeetingPoint.name)
    ? selectedMeetingPoint.name
    : (prod.codSpot || 'Plaza Danau Siti Walidah UMS');
  const message = `Halo Kak ${prod.seller || 'Mahasiswa UMS'}, saya lihat iklan *${prod.title}* (${formatRupiah(prod.price)}) di UNIVLOP UMS Solo. Masih tersedia untuk ketemuan COD di *${spot}*?`;
  const waUrl = `https://wa.me/6281226002026?text=${encodeURIComponent(message)}`;
  window.open(waUrl, '_blank', 'noopener,noreferrer');
  showToast('Membuka WhatsApp untuk Shareloc & Janjian COD...');
}

function handleChatSubmit(e) {
  e.preventDefault();
  const inp = document.getElementById('chatInputMessage');
  const text = inp.value.trim();
  if (!text) return;

  appendChatMessage(text, 'buyer');
  inp.value = '';

  setTimeout(() => {
    appendChatMessage('Siap kak! Barang masih mulus. Nanti kabari atau shareloc WA kalau sudah sampai di titik temu UMS yaa.', 'seller');
  }, 700);
}

function sendQuickReply(text) {
  appendChatMessage(text, 'buyer');
  setTimeout(() => {
    if (text.toLowerCase().includes('danau') || text.toLowerCase().includes('sore')) {
      appendChatMessage('Bisa banget kak! Jam 16:30 habis kuliah saya stand by di Plaza Danau Siti Walidah UMS.', 'seller');
    } else if (text.toLowerCase().includes('nego')) {
      appendChatMessage('Boleh kak, klik tombol Ajukan Tawar / Oper COD di atas aja biar kita kunci harga & jam ketemunya.', 'seller');
    } else {
      appendChatMessage('Aman kak, barang berfungsi normal 100%. Nanti pas COD di UMS bebas dites sepuasnya sebelum bayar.', 'seller');
    }
  }, 700);
}

function appendChatMessage(msg, type) {
  const box = document.getElementById('chatMessagesBox');
  if (!box) return;
  const div = document.createElement('div');
  div.className = `chat-message-bubble ${type === 'buyer' ? 'outgoing' : 'incoming'}`;
  div.textContent = msg;
  box.appendChild(div);
  box.scrollTop = box.scrollHeight;
}

function openLocationModal() {
  const m = document.getElementById('modalLocation');
  if (m) m.classList.add('open');
}

function closeLocationModal() {
  const m = document.getElementById('modalLocation');
  if (m) m.classList.remove('open');
}

function chooseLocation(name, sub) {
  const lbl = document.getElementById('homeLocationLabel');
  if (lbl) lbl.textContent = name;
  const checkoutTitle = document.getElementById('checkoutAddrTitleFigma');
  if (checkoutTitle) checkoutTitle.textContent = name;
  const comoLoc = document.getElementById('comoSelectedLocationName');
  if (comoLoc) comoLoc.textContent = `${name} (${sub || 'Area Kos UMS'})`;

  // Sync to UMS campus map by default
  if (name.includes('Sekarpace') || name.includes('ISI')) {
    currentCampusKey = 'isi';
  } else if (name.includes('Ngoresan') || name.includes('UNS')) {
    currentCampusKey = 'uns';
  } else {
    currentCampusKey = 'ums';
  }

  const sel = document.getElementById('mapCampusSelect');
  if (sel) sel.value = currentCampusKey;
  if (typeof CAMPUS_MAP_DATA !== 'undefined' && CAMPUS_MAP_DATA[currentCampusKey]) {
    currentStudentKos = { ...CAMPUS_MAP_DATA[currentCampusKey].studentKos, name };
    selectedMeetingPoint = { ...CAMPUS_MAP_DATA[currentCampusKey].meetingPoints[0] };
  }

  if (leafletMap) {
    leafletMap.setView(currentStudentKos.latlng, 16);
    renderCampusMapElements();
  }

  closeLocationModal();
  showToast(`Titik Kos & COD disinkronkan: ${name}`);
}

function openNotificationModal() {
  const m = document.getElementById('modalNotification');
  if (m) m.classList.add('open');
}

function closeNotificationModal() {
  const m = document.getElementById('modalNotification');
  if (m) m.classList.remove('open');
}

function openMenuModal() {
  const m = document.getElementById('modalMenu');
  if (m) m.classList.add('open');
}

function closeMenuModal() {
  const m = document.getElementById('modalMenu');
  if (m) m.classList.remove('open');
}

// --- 10. Toast Notification System ---
let toastTimeout;
function showToast(message) {
  const toast = document.getElementById('toastNotification');
  const toastMsg = document.getElementById('toastMessage');
  if (!toast || !toastMsg) return;

  toastMsg.textContent = message;
  toast.classList.add('show');

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 2400);
}

// --- 10. Auth Modal Controls (Figma Login & Sign Up) ---
function openAuthModal(view = 'login') {
  const m = document.getElementById('modalAuth');
  if (m) {
    m.classList.add('open');
    switchAuthView(view);
  }
}

function closeAuthModal() {
  const m = document.getElementById('modalAuth');
  if (m) m.classList.remove('open');
}

function switchAuthView(view) {
  const viewLogin = document.getElementById('authViewLogin');
  const viewSignup = document.getElementById('authViewSignup');
  if (view === 'login') {
    if (viewLogin) viewLogin.style.display = 'block';
    if (viewSignup) viewSignup.style.display = 'none';
  } else {
    if (viewLogin) viewLogin.style.display = 'none';
    if (viewSignup) viewSignup.style.display = 'block';
  }
}

// --- 11. Multi-Role Account System (Pembeli, Penjual, Admin UMS Solo) ---
const ACCOUNTS = {
  buyer: {
    id: 'user-buyer-1',
    role: 'buyer',
    roleLabel: 'Mahasiswa UMS (Pembeli & Penjual)',
    name: 'Rizky Pratama',
    campus: 'Universitas Muhammadiyah Surakarta (UMS)',
    major: 'S1 Teknik Informatika (FKI)',
    kos: 'Kos Putra Garuda Gonilan, Pabelan (Kamar 102)',
    trustScore: 92,
    nim: 'L2002300XX',
    ktmFile: 'KTM_Rizky_UMS_2026.jpg',
    isVerified: true,
    avatar: 'assets/user-avatar.jpg',
    cart: [],
    orders: [
      {
        id: 'UNIV-98214',
        productName: 'Kamera Sony Pocket 20.1 MP',
        seller: 'Shenina Tsabita (FKI UMS)',
        buyer: 'Rizky Pratama',
        price: 750000,
        status: 'Booked COD',
        meetingPoint: 'Plaza Danau Siti Walidah UMS (Hari Ini 16.30 WIB)',
        note: 'Deal Tawar Harga dari Rp 850.000 · Bayar Tunai di Tempat',
        image: 'assets/camera-sony.png',
        productId: 'camera-sony'
      }
    ],
    listings: [
      {
        id: 'listing-kamera',
        title: 'Kamera Sony Pocket 20MP',
        category: 'Alat Kuliah',
        price: 850000,
        image: 'assets/camera-sony.png',
        status: 'Booked COD',
        condition: 'Bekas, Baik (90%)',
        location: 'Kos Putra Garuda Gonilan, UMS'
      },
      {
        id: 'listing-kursi',
        title: 'Kursi Belajar Santai Kayu Kos',
        category: 'Perabotan',
        price: 350000,
        image: 'assets/kursi-goyang.png',
        status: 'Aktif COD',
        condition: 'Bekas, Sangat Baik',
        location: 'Kos Putra Garuda Gonilan, UMS'
      },
      {
        id: 'listing-oper-kamar',
        title: 'Paket Oper Kamar Wisuda UMS (Lemari + Kasur + Meja)',
        category: 'Paket Oper Kamar',
        price: 950000,
        image: 'assets/lemari-kayu.png',
        status: 'Aktif COD',
        condition: 'Paket Lengkap Siap Pakai',
        location: 'Kos Putra Garuda Gonilan, UMS'
      }
    ]
  },
  seller: {
    id: 'user-seller-1',
    role: 'seller',
    roleLabel: 'Mahasiswa Penjual / Oper Kos UMS',
    name: 'Shenina Tsabita',
    campus: 'Universitas Muhammadiyah Surakarta (UMS)',
    major: 'S1 Teknik Informatika (FKI)',
    kos: 'Kos Putri Melati Gonilan, Pabelan (Kamar 3B)',
    trustScore: 96,
    nim: 'L2002300XX',
    ktmFile: 'KTM_Shenina_UMS_2026.jpg',
    isVerified: true,
    avatar: 'assets/contact-person.png',
    cart: [],
    orders: [
      {
        id: 'UNIV-98214',
        productName: 'Kamera Sony Pocket 20.1 MP',
        seller: 'Shenina Tsabita (FKI UMS)',
        buyer: 'Rizky Pratama',
        price: 750000,
        status: 'Booked COD',
        meetingPoint: 'Plaza Danau Siti Walidah UMS (Hari Ini 16.30 WIB)',
        note: 'Janjian COD masuk dari adik tingkat FKI UMS',
        image: 'assets/camera-sony.png',
        productId: 'camera-sony'
      }
    ],
    listings: [
      {
        id: 'listing-kamera',
        title: 'Kamera Sony Pocket 20MP',
        category: 'Alat Kuliah',
        price: 850000,
        image: 'assets/camera-sony.png',
        status: 'Booked COD (Nego Disepakati)',
        condition: 'Bekas, Baik (90%)',
        location: 'Kos Putri Melati Gonilan, UMS'
      },
      {
        id: 'listing-kursi',
        title: 'Kursi Belajar Santai Kayu Kos',
        category: 'Perabotan',
        price: 350000,
        image: 'assets/kursi-goyang.png',
        status: 'Aktif (Tersedia COD)',
        condition: 'Bekas, Sangat Baik',
        location: 'Kos Putri Melati Gonilan, UMS'
      },
      {
        id: 'listing-oper-kamar',
        title: 'Paket Oper Kamar Wisuda UMS (Lemari + Kasur + Meja)',
        category: 'Paket Oper Kamar',
        price: 950000,
        image: 'assets/lemari-kayu.png',
        status: 'Aktif (Bisa Cek ke Kos)',
        condition: 'Paket Lengkap Siap Pakai',
        location: 'Kos Putri Melati Gonilan, UMS'
      }
    ]
  },
  admin: {
    id: 'user-admin-1',
    role: 'admin',
    roleLabel: 'Univlop Admin (Moderator Independen)',
    name: 'Univlop Admin',
    campus: 'Universitas Muhammadiyah Surakarta (UMS)',
    major: 'Moderasi Lapak & Keamanan COD',
    kos: 'Pusat Keamanan & Moderasi Univlop',
    trustScore: 100,
    nim: 'ADMIN-UNIVLOP',
    ktmFile: 'Kredensial_Univlop_Admin.pdf',
    isVerified: true,
    avatar: 'assets/contact-person.png',
    cart: [],
    orders: [],
    listings: []
  }
};

let currentRole = 'buyer';
let CURRENT_USER = ACCOUNTS.buyer;
ACCOUNTS.buyer.listings.forEach(l => { l.image = assetUrl(l.image); });
ACCOUNTS.seller.listings.forEach(l => { l.image = assetUrl(l.image); });

// Backward compatibility references
const USER_PROFILE = CURRENT_USER;
let USER_LISTINGS = CURRENT_USER.listings;
let ORDERS = [
  {
    id: 'UNIV-98214',
    productName: 'Kamera Sony Pocket 20.1 MP',
    seller: 'Shenina Tsabita (FKI UMS)',
    buyer: 'Rizky Pratama',
    price: 750000,
    status: 'Booked COD',
    meetingPoint: 'Plaza Danau Siti Walidah UMS (Hari Ini 16.30 WIB)',
    note: 'Deal Tawar Harga dari Rp 850.000 · Bayar di Tempat',
    image: 'assets/camera-sony.png',
    productId: 'camera-sony'
  },
  {
    id: 'UNIV-84102',
    productName: 'Meja Belajar Lesehan Kayu Jati',
    seller: 'Dinda (Kos Nilagraha Gonilan)',
    buyer: 'Alif (Kos Mendungan UMS)',
    price: 110000,
    status: 'Selesai',
    meetingPoint: 'Pelataran Edutorium KH Ahmad Dahlan UMS',
    note: 'Transaksi COD Selesai (Lunas di Tempat)',
    image: 'assets/meja-samping.png',
    productId: 'meja-samping'
  }
];

let PENDING_VERIFICATIONS = [
  {
    id: 'verif-1',
    name: 'Ahmad Faiz',
    nim: 'L2002300XX',
    campus: 'Universitas Muhammadiyah Surakarta (UMS)',
    major: 'S1 Teknik Informatika',
    kos: 'Kos Putra Garuda Gonilan No. 20',
    ktmFile: 'KTM_Faiz_UMS_2026.jpg',
    submittedAt: 'Hari ini, 15:20 WIB',
    status: 'Menunggu Persetujuan'
  },
  {
    id: 'verif-2',
    name: 'Dinda Lestari',
    nim: 'L2002300XX',
    campus: 'Universitas Muhammadiyah Surakarta (UMS)',
    major: 'S1 Manajemen (FEB)',
    kos: 'Kos Putri Nilagraha Gonilan, Pabelan',
    ktmFile: 'KTM_Dinda_UMS_2026.jpg',
    submittedAt: 'Hari ini, 16:05 WIB',
    status: 'Menunggu Persetujuan'
  }
];

function switchUserRole(roleKey, silent = false) {
  if (!ACCOUNTS[roleKey]) return;
  currentRole = roleKey;
  CURRENT_USER = ACCOUNTS[roleKey];
  USER_LISTINGS = CURRENT_USER.listings || ACCOUNTS.seller.listings;

  // Update navbar role display
  const navRoleDisplay = document.getElementById('navRoleDisplay');
  if (navRoleDisplay) {
    if (roleKey === 'buyer') navRoleDisplay.textContent = 'ACCOUNT / RIZKY (UMS)';
    else if (roleKey === 'seller') navRoleDisplay.textContent = 'ACCOUNT / SHENINA (UMS)';
    else navRoleDisplay.textContent = 'ADMIN / UNIVLOP';
  }

  // Update Admin Desk button in navbar
  const adminNavBtn = document.getElementById('desktopNavAdmin');
  if (adminNavBtn) {
    adminNavBtn.style.display = roleKey === 'admin' ? 'block' : 'none';
  }

  // Update Sell button in navbar
  const sellBtn = document.getElementById('desktopSellBtn');
  if (sellBtn) {
    sellBtn.textContent = '+ OPER / JUAL BARANG';
    sellBtn.onclick = () => openSellModal();
  }

  // Update auth modal cards if present
  document.querySelectorAll('.auth-account-card').forEach(c => c.classList.remove('active'));
  const activeAuthCard = document.getElementById(roleKey === 'buyer' ? 'authCardBuyer' : (roleKey === 'seller' ? 'authCardSeller' : 'authCardAdmin'));
  if (activeAuthCard) activeAuthCard.classList.add('active');

  const loginNimInput = document.getElementById('loginUsernameInput');
  if (loginNimInput && CURRENT_USER.nim) {
    loginNimInput.value = CURRENT_USER.nim;
  }

  // Sync profile fields
  syncUserProfileUI();
  renderProfileLapak();
  renderProfileOrders();

  // If Admin role selected, navigate to Admin screen
  if (roleKey === 'admin') {
    renderAdminDesk();
    navigateToScreen('screen-admin');
    if (!silent) showToast('Beralih ke persona Univlop Admin');
  } else if (!silent) {
    showToast(`Beralih ke akun: ${CURRENT_USER.name}`);
  }
}

function syncUserProfileUI() {
  const nameElem = document.getElementById('profileNameDisplay');
  const campusElem = document.getElementById('profileCampusDisplay');
  const kosElem = document.getElementById('profileKosDisplay');
  const scoreElem = document.getElementById('profileTrustScoreNum');
  const badgeWrap = document.getElementById('profileVerifiedBadge');
  const badgeText = document.getElementById('profileVerifiedText');
  const actionBtnLabel = document.getElementById('profilePrimaryActionLabel');
  const initialsElem = document.getElementById('profileAvatarInitials');
  const avatarImg = document.getElementById('profileAvatarImg');
  const ktmInput = document.getElementById('ktmNimInput');
  const campusInput = document.getElementById('ktmCampusInput');
  const majorInput = document.getElementById('ktmMajorInput');
  const fileStatus = document.getElementById('ktmFileStatusText');

  if (nameElem) nameElem.textContent = CURRENT_USER.name;
  if (campusElem) campusElem.textContent = `${CURRENT_USER.campus} (${CURRENT_USER.major})`;
  if (kosElem) kosElem.textContent = CURRENT_USER.kos;
  if (scoreElem) scoreElem.textContent = CURRENT_USER.trustScore;

  if (avatarImg) {
    if (CURRENT_USER.avatar) {
      avatarImg.src = assetUrl(CURRENT_USER.avatar);
      avatarImg.style.display = 'block';
      avatarImg.style.objectFit = 'cover';
      avatarImg.style.objectPosition = 'center 20%';
      if (initialsElem) initialsElem.style.display = 'none';
    } else {
      avatarImg.style.display = 'none';
      if (initialsElem) initialsElem.style.display = 'block';
    }
  }

  if (initialsElem && CURRENT_USER.name) {
    const parts = CURRENT_USER.name.trim().split(/\s+/);
    initialsElem.textContent = parts.length > 1
      ? (parts[0][0] + parts[1][0]).toUpperCase()
      : parts[0].substring(0, 2).toUpperCase();
  }

  if (badgeWrap && badgeText) {
    if (CURRENT_USER.isVerified) {
      badgeWrap.style.background = '#550E15';
      badgeText.textContent = 'Terverifikasi KTM UMS';
    } else {
      badgeWrap.style.background = '#C98A00';
      badgeText.textContent = 'Menunggu Verifikasi';
    }
  }

  if (actionBtnLabel) {
    actionBtnLabel.textContent = 'Oper / Jual Barang Kos';
  }

  if (ktmInput) ktmInput.value = CURRENT_USER.nim;
  if (campusInput) campusInput.value = CURRENT_USER.campus;
  if (majorInput) majorInput.value = CURRENT_USER.major;
  if (fileStatus) fileStatus.textContent = `${CURRENT_USER.ktmFile} (${CURRENT_USER.isVerified ? 'Terverifikasi' : 'Proses Verifikasi'})`;

  // Update order count and listing count
  const orderCountElem = document.getElementById('statOrderCount');
  const listingCountElem = document.getElementById('statListingCount');
  const tabCountLapak = document.getElementById('tabCountLapak');
  const tabCountPesanan = document.getElementById('tabCountPesanan');

  const countListings = CURRENT_USER.listings ? CURRENT_USER.listings.length : USER_LISTINGS.length;
  const countOrders = CURRENT_USER.orders ? CURRENT_USER.orders.length : ORDERS.length;

  if (listingCountElem) listingCountElem.textContent = countListings;
  if (tabCountLapak) tabCountLapak.textContent = countListings;
  if (orderCountElem) orderCountElem.textContent = countOrders;
  if (tabCountPesanan) tabCountPesanan.textContent = countOrders;
}

function handleProfilePrimaryAction() {
  openSellModal();
}

let selectedSignupRole = 'buyer';
function selectSignupRole(role) {
  selectedSignupRole = role;
  const btnB = document.getElementById('btnSignupRoleBuyer');
  const btnS = document.getElementById('btnSignupRoleSeller');
  const inp = document.getElementById('signupRoleInput');
  if (inp) inp.value = role;

  if (role === 'buyer') {
    if (btnB) btnB.classList.add('active');
    if (btnS) btnS.classList.remove('active');
  } else {
    if (btnB) btnB.classList.remove('active');
    if (btnS) btnS.classList.add('active');
  }
}

function handleSignupKtmSelect(input) {
  if (input.files && input.files[0]) {
    const lbl = document.getElementById('signupKtmLabel');
    if (lbl) lbl.textContent = 'Lampiran: ' + input.files[0].name;
  }
}

function handleAuthLoginSubmit(e) {
  e.preventDefault();
  const username = document.getElementById('loginUsernameInput').value || 'Rizky';
  closeAuthModal();
  showToast(`Selamat datang kembali di UNIVLOP UMS, ${username}!`);
}

function handleAuthSignupSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('signupUsernameInput').value.trim() || 'Mahasiswa UMS';
  const nim = document.getElementById('signupNimInput').value.trim() || 'L2002300XX';
  const univ = document.getElementById('signupUnivInput').value.trim() || 'Universitas Muhammadiyah Surakarta (UMS)';
  const major = document.getElementById('signupMajorInput').value.trim() || 'S1 Teknik Informatika';
  const kos = document.getElementById('signupKosInput').value.trim() || 'Kos Sekitar Gonilan / Pabelan UMS';
  const role = document.getElementById('signupRoleInput').value || 'buyer';

  const ktmFile = 'KTM_' + name.replace(/\s+/g, '_') + '_UMS.jpg';

  const newAccount = {
    id: 'user-custom-' + Date.now(),
    role: role,
    roleLabel: role === 'buyer' ? 'Mahasiswa Pembeli UMS' : 'Mahasiswa Penjual UMS',
    name: name,
    campus: univ,
    major: major,
    kos: kos,
    trustScore: 80,
    nim: nim,
    ktmFile: ktmFile,
    isVerified: false,
    avatar: 'assets/contact-person.png',
    cart: [],
    orders: [],
    listings: []
  };

  ACCOUNTS.custom = newAccount;

  PENDING_VERIFICATIONS.unshift({
    id: 'verif-' + Date.now(),
    name: name,
    nim: nim,
    campus: univ,
    major: major,
    kos: kos,
    ktmFile: ktmFile,
    submittedAt: 'Baru saja',
    status: 'Menunggu Persetujuan',
    accountId: 'custom'
  });

  currentRole = 'custom';
  CURRENT_USER = newAccount;

  closeAuthModal();
  syncUserProfileUI();
  const navRoleDisplay = document.getElementById('navRoleDisplay');
  if (navRoleDisplay) {
    navRoleDisplay.textContent = (role === 'buyer' ? 'PEMBELI: ' : 'PENJUAL: ') + name.split(' ')[0] + ' (UMS)';
  }

  showToast(`Pendaftaran sukses! Selamat datang, ${name}. Berkas KTM diajukan ke Moderator Kampus UMS.`);

  setTimeout(() => {
    navigateToScreen('screen-catalog');
  }, 400);
}

function adminApproveKtm(verifId) {
  const item = PENDING_VERIFICATIONS.find(v => v.id === verifId);
  if (!item) return;

  item.status = 'Disetujui';
  if (item.accountId && ACCOUNTS[item.accountId]) {
    ACCOUNTS[item.accountId].isVerified = true;
    ACCOUNTS[item.accountId].trustScore = 95;
  }

  const countElem = document.getElementById('adminStatVerifiedCount');
  if (countElem) {
    const cur = parseInt(countElem.textContent.replace('.', '')) || 1428;
    countElem.textContent = (cur + 1).toLocaleString('id-ID');
  }

  renderAdminDesk();
  syncUserProfileUI();
  showToast(`KTM ${item.name} (${item.nim}) berhasil disetujui! Status mahasiswa UMS aktif.`);
}

function adminRejectKtm(verifId) {
  const item = PENDING_VERIFICATIONS.find(v => v.id === verifId);
  if (!item) return;
  item.status = 'Ditolak (KTM Kurang Jelas)';
  renderAdminDesk();
  showToast(`Permohonan KTM ${item.name} ditolak. Notifikasi perbaikan dikirim.`);
}

function renderAdminDesk() {
  const container = document.getElementById('adminVerifListContainer');
  const pendingBadge = document.getElementById('adminPendingBadge');
  const pendingCountStat = document.getElementById('adminStatPendingCount');
  const ledgerTbody = document.getElementById('adminLedgerTableBody');

  const pendingItems = PENDING_VERIFICATIONS.filter(v => v.status === 'Menunggu Persetujuan');
  if (pendingBadge) pendingBadge.textContent = `${pendingItems.length} Berkas Baru`;
  if (pendingCountStat) pendingCountStat.textContent = pendingItems.length;

  if (container) {
    if (PENDING_VERIFICATIONS.length === 0) {
      container.innerHTML = '<div style="padding: 16px; color: #888; font-size: 12px; text-align: center;">Tidak ada antrean verifikasi KTM UMS.</div>';
    } else {
      container.innerHTML = PENDING_VERIFICATIONS.map(v => {
        const isPending = v.status === 'Menunggu Persetujuan';
        return `
          <div class="admin-verif-item">
            <div class="admin-verif-top">
              <div>
                <span class="admin-verif-name">${v.name}</span>
                <span style="font-size: 11px; color: #777; margin-left: 6px;">NIM: ${v.nim}</span>
              </div>
              <span class="admin-verif-badge ${isPending ? 'pending' : 'approved'}">${v.status}</span>
            </div>
            <div class="admin-verif-details">
              ${v.campus} • ${v.major}<br>
              Lokasi Kos: ${v.kos} • Diajukan: ${v.submittedAt}
            </div>
            <div class="admin-verif-ktm-file">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
              </svg>
              <span>${v.ktmFile}</span>
            </div>
            ${isPending ? `
              <div class="admin-verif-actions">
                <button class="btn-admin-approve" onclick="adminApproveKtm('${v.id}')">
                  SETUJUI MAHASISWA UMS
                </button>
                <button class="btn-admin-reject" onclick="adminRejectKtm('${v.id}')">
                  TOLAK / REVISI
                </button>
              </div>
            ` : `
              <div style="font-size: 11px; color: #2E7D32; font-weight: 700; margin-top: 4px;">
                Identitas Terotentikasi di Server Kampus UMS
              </div>
            `}
          </div>
        `;
      }).join('');
    }
  }

  // Render Ledger table
  if (ledgerTbody) {
    ledgerTbody.innerHTML = ORDERS.map(ord => `
      <tr>
        <td style="font-family: monospace; font-weight: 800; color: var(--color-maroon);">${ord.id}</td>
        <td>
          <div style="font-weight: 700;">${ord.productName}</div>
          <div style="font-size: 10.5px; color: #888;">${formatRupiah(ord.price)}</div>
        </td>
        <td>
          <div style="font-size: 11.5px;">Penjual: <strong>${ord.seller}</strong></div>
          <div style="font-size: 11px; color: #666;">Pembeli: ${ord.buyer || 'Rizky Pratama'}</div>
        </td>
        <td style="font-size: 11px;">${ord.meetingPoint}</td>
        <td>
          <button class="btn-como-primary" style="padding: 4px 8px; font-size: 10px;" onclick="openDigitalReceiptModal('${ord.id}')">
            LIHAT QR
          </button>
        </td>
      </tr>
    `).join('');
  }
}

function simulateGoogleLogin() {
  closeAuthModal();
  showToast('Berhasil masuk dengan Email Mahasiswa (@student.ums.ac.id)!');
}

// --- 12. Initial App Setup ---
function hideSkeletonPage() {
  const loading = document.getElementById('univlopLoadingOverlay');
  if (loading) {
    loading.classList.add('loading-hidden');
    setTimeout(() => {
      loading.style.display = 'none';
    }, 450);
  }
  const sk = document.getElementById('univlopSkeletonPage');
  if (sk) {
    sk.classList.add('sk-hidden');
    setTimeout(() => {
      sk.style.display = 'none';
    }, 360);
  }
}

function showSkeletonPage(duration = 1000) {
  const loading = document.getElementById('univlopLoadingOverlay');
  if (loading) {
    loading.style.display = 'flex';
    loading.offsetHeight;
    loading.classList.remove('loading-hidden');
  }
  const sk = document.getElementById('univlopSkeletonPage');
  if (sk) {
    sk.style.display = 'block';
    sk.offsetHeight;
    sk.classList.remove('sk-hidden');
  }
  if (duration > 0) {
    setTimeout(() => {
      hideSkeletonPage();
    }, duration);
  }
}

function initApp() {
  renderCatalogProducts();
  renderCart();
  renderCheckout();
  switchUserRole('buyer', true);
  renderAdminDesk();

  // Hide mascot loading screen smoothly after initial load
  setTimeout(() => {
    hideSkeletonPage();
  }, 950);

  // Keyboard shortcut: ESC to exit chat fullscreen or close modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const chatModal = document.getElementById('modalChat');
      if (chatModal && chatModal.classList.contains('open')) {
        if (chatModal.classList.contains('is-fullscreen')) {
          toggleChatFullscreen();
        } else {
          closeChatModal();
        }
        return;
      }
      const offerModal = document.getElementById('modalOffer');
      if (offerModal && offerModal.classList.contains('open')) {
        closeOfferModal();
        return;
      }
    }
  });
}

// --- 13. Pilar 1: Pasang Iklan / Oper Barang Kos UMS ---
let selectedSellCondition = 'Mulus (95%)';
let uploadedSellPhotoUrl = assetUrl('assets/banner-product-1.png');

function openSellModal() {
  const m = document.getElementById('modalSell');
  if (m) m.classList.add('open');
}

function closeSellModal() {
  const m = document.getElementById('modalSell');
  if (m) m.classList.remove('open');
}

function selectSellCondition(cond, elem) {
  selectedSellCondition = cond;
  document.querySelectorAll('#sellConditionChips .figma-chip').forEach(b => b.classList.remove('active'));
  if (elem) elem.classList.add('active');
}

function handleSellPhotoSelect(input) {
  if (input.files && input.files[0]) {
    const reader = new FileReader();
    reader.onload = function(e) {
      uploadedSellPhotoUrl = e.target.result;
      const preview = document.getElementById('sellPhotoPreview1');
      if (preview) preview.src = e.target.result;
      showToast('Foto barang berhasil dipilih!');
    };
    reader.readAsDataURL(input.files[0]);
  }
}

function handleSellProductSubmit(e) {
  e.preventDefault();
  const title = document.getElementById('sellTitleInput').value.trim();
  const category = document.getElementById('sellCategorySelect').value;
  const price = parseInt(document.getElementById('sellPriceInput').value, 10) || 100000;
  const location = document.getElementById('sellLocationInput').value.trim();
  const desc = document.getElementById('sellDescInput').value.trim();
  const isOper = document.getElementById('sellOperKamarCheck').checked;

  const newId = 'user-prod-' + Date.now();
  const newProduct = {
    id: newId,
    title: title,
    category: isOper ? 'Paket Oper Kamar' : category,
    price: price,
    originalPrice: Math.round(price * 1.25),
    image: uploadedSellPhotoUrl || assetUrl('assets/banner-product-1.png'),
    rating: 5.0,
    reviews: 1,
    seller: (CURRENT_USER && CURRENT_USER.name ? CURRENT_USER.name : 'Mahasiswa UMS') + ' (UMS)',
    sellerTrust: CURRENT_USER ? CURRENT_USER.trustScore : 95,
    sellerStatus: 'Mahasiswa UMS · Aktif sekarang',
    condition: selectedSellCondition,
    completeness: 'Lengkap, siap cek saat COD',
    usage: '1 Semester',
    posted: 'Baru saja',
    distance: '300m · Gonilan',
    areaCluster: 'gonilan',
    codSpot: location || 'Plaza Danau Siti Walidah UMS',
    codStatus: 'Tersedia',
    description: desc + (isOper ? ' [Paket Oper Kamar Kos UMS]' : ''),
    isUserListing: true
  };

  PRODUCTS.unshift(newProduct);
  USER_LISTINGS.unshift({
    id: newId,
    title: newProduct.title,
    category: newProduct.category,
    price: newProduct.price,
    image: newProduct.image,
    status: 'Aktif (Tersedia COD)',
    condition: newProduct.condition,
    location: location
  });

  closeSellModal();
  renderCatalogProducts();
  renderProfileLapak();
  showToast(`Iklan "${title}" berhasil ditayangkan untuk mahasiswa UMS!`);
  navigateToScreen('screen-catalog');
}

// --- 14. Pilar 2: Tawar / Oper Harga & Janjian COD Interaktif di Chat ---
let currentOfferProduct = null;
let currentOfferedAmount = 722500;

function openOfferModal(productId) {
  if (productId) {
    const found = PRODUCTS.find(p => p.id === productId);
    if (found) currentDetailProduct = found;
  }
  currentOfferProduct = currentDetailProduct || PRODUCTS[0];
  const m = document.getElementById('modalOffer');
  if (!m) return;

  const thumb = document.getElementById('offerProductThumb');
  const title = document.getElementById('offerProductTitle');
  const price = document.getElementById('offerProductBasePrice');
  const input = document.getElementById('offerPriceInput');

  if (thumb) thumb.src = currentOfferProduct.image;
  if (title) title.textContent = currentOfferProduct.title;
  if (price) price.textContent = formatRupiah(currentOfferProduct.price);
  
  // Default 15% discount
  const defaultOffer = Math.round(currentOfferProduct.price * 0.85);
  if (input) input.value = defaultOffer;
  currentOfferedAmount = defaultOffer;

  // Set active chip on 15%
  document.querySelectorAll('.offer-quick-chip').forEach(btn => {
    btn.classList.toggle('active', parseInt(btn.dataset.percent, 10) === 15);
  });
  updateOfferSavingsDisplay(15, defaultOffer);

  m.classList.add('open');
}

function closeOfferModal() {
  const m = document.getElementById('modalOffer');
  if (m) m.classList.remove('open');
}

function setOfferQuickPercent(pct) {
  if (!currentOfferProduct) currentOfferProduct = currentDetailProduct || PRODUCTS[0];
  const discounted = Math.round(currentOfferProduct.price * ((100 - pct) / 100));
  const input = document.getElementById('offerPriceInput');
  if (input) input.value = discounted;
  currentOfferedAmount = discounted;

  document.querySelectorAll('.offer-quick-chip').forEach(btn => {
    btn.classList.toggle('active', parseInt(btn.dataset.percent, 10) === pct);
  });

  updateOfferSavingsDisplay(pct, discounted);
}

function handleOfferPriceInput() {
  if (!currentOfferProduct) currentOfferProduct = currentDetailProduct || PRODUCTS[0];
  const input = document.getElementById('offerPriceInput');
  const val = parseInt(input.value, 10) || 0;
  currentOfferedAmount = val;

  const orig = currentOfferProduct.price;
  const pct = orig > 0 ? Math.round(((orig - val) / orig) * 100) : 0;

  document.querySelectorAll('.offer-quick-chip').forEach(btn => {
    btn.classList.toggle('active', parseInt(btn.dataset.percent, 10) === pct);
  });

  updateOfferSavingsDisplay(pct, val);
}

function updateOfferSavingsDisplay(pct, offeredVal) {
  const note = document.getElementById('offerSavingsNote');
  if (!note || !currentOfferProduct) return;
  const orig = currentOfferProduct.price;
  const diff = orig - offeredVal;

  if (diff > 0) {
    note.style.color = '#2E7D32';
    note.textContent = `Hemat ${formatRupiah(diff)} (-${pct}%) dari harga buka`;
  } else if (diff === 0) {
    note.style.color = '#550E15';
    note.textContent = 'Sesuai harga buka lapak (Harga Pas)';
  } else {
    note.style.color = '#B71C1C';
    note.textContent = `Tawaran lebih tinggi ${formatRupiah(Math.abs(diff))} dari harga buka`;
  }
}

function handleOfferSubmit(e) {
  e.preventDefault();
  const input = document.getElementById('offerPriceInput');
  const offeredPrice = parseInt(input.value, 10) || currentOfferedAmount;
  const spotSelect = document.getElementById('offerCodSpotSelect');
  const timeSelect = document.getElementById('offerCodTimeSelect');
  const proposedSpot = spotSelect ? spotSelect.value : 'Plaza Danau Siti Walidah UMS';
  const proposedTime = timeSelect ? timeSelect.value : 'Sore Hari Ini · 16:30 WIB (Selesai Kuliah)';
  const note = document.getElementById('offerNoteInput').value.trim();

  closeOfferModal();
  openChatModal(currentOfferProduct ? currentOfferProduct.id : undefined);

  const chatBox = document.getElementById('chatMessagesBox');
  if (!chatBox) return;

  const originalPrice = currentOfferProduct ? currentOfferProduct.price : 850000;
  const title = currentOfferProduct ? currentOfferProduct.title : 'Kamera Sony';

  const offerCard = document.createElement('div');
  offerCard.className = 'chat-offer-bubble';
  offerCard.innerHTML = `
    <div class="chat-offer-tag">Tawaran Harga & Ajakan COD UMS</div>
    <div class="chat-offer-title">${title}</div>
    <div class="chat-offer-price-row">
      <span class="chat-offer-new-price">${formatRupiah(offeredPrice)}</span>
      <span class="chat-offer-old-price">${formatRupiah(originalPrice)}</span>
    </div>
    <div style="font-size: 11px; color: var(--color-dark); background: #FFFFFF; padding: 6px 8px; border-radius: 8px; border: 1px solid var(--color-border); margin-bottom: 8px;">
      <strong>Usulan Titik COD:</strong> ${proposedSpot}<br>
      <strong>Waktu:</strong> ${proposedTime}
    </div>
    ${note ? `<div style="font-size: 11px; color: var(--color-brown-subtle); margin-bottom: 8px;">"${note}"</div>` : ''}
    <div class="chat-offer-actions">
      <button type="button" class="btn-chat-accept" onclick="acceptOfferInChat(${offeredPrice}, '${proposedSpot.replace(/'/g, "\\'")}', '${proposedTime.replace(/'/g, "\\'")}')">Terima & Kunci COD</button>
      <button type="button" class="btn-chat-counter" onclick="counterOfferInChat(${offeredPrice})">Nego Ulang</button>
    </div>
  `;
  chatBox.appendChild(offerCard);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function acceptOfferInChat(offeredPrice, proposedSpot = 'Plaza Danau Siti Walidah UMS', proposedTime = 'Sore Hari Ini · 16:30 WIB') {
  appendChatMessage(`Tawaran kamu sebesar ${formatRupiah(offeredPrice)} DITERIMA! Yuk konfirmasi titik & jam ketemuan COD di bawah ini.`, 'seller');
  
  setTimeout(() => {
    const chatBox = document.getElementById('chatMessagesBox');
    if (!chatBox) return;

    const codCard = document.createElement('div');
    codCard.className = 'chat-cod-card';
    codCard.innerHTML = `
      <div style="font-size: 11px; font-weight: 800; color: var(--color-maroon); margin-bottom: 6px;">
        KUNCI JADWAL & TITIK TEMU COD UMS
      </div>
      <div style="font-size: 11.5px; color: var(--color-brown-dark); margin-bottom: 8px;">
        Pilih titik aman di area kampus/kos UMS untuk cek fisik & bayar di tempat:
      </div>
      <div style="display: flex; flex-direction: column; gap: 6px; margin-bottom: 10px;">
        <select id="chatCodPointSelect" class="form-select-figma" style="font-size: 11.5px; padding: 6px 10px;">
          <option ${proposedSpot.includes('Danau') ? 'selected' : ''}>Plaza Danau Siti Walidah UMS (Kampus 2)</option>
          <option ${proposedSpot.includes('Edutorium') ? 'selected' : ''}>Pelataran Edutorium KH Ahmad Dahlan UMS</option>
          <option ${proposedSpot.includes('Kampus 1') ? 'selected' : ''}>Gerbang Utama Kampus 1 UMS Pabelan</option>
          <option ${proposedSpot.includes('Gonilan') ? 'selected' : ''}>Indomaret / Alfamart Tugu Gonilan UMS</option>
          <option ${proposedSpot.includes('Mendungan') ? 'selected' : ''}>Taman Kampus 4 UMS Mendungan</option>
        </select>
        <select id="chatCodTimeSelect" class="form-select-figma" style="font-size: 11.5px; padding: 6px 10px;">
          <option ${proposedTime.includes('16:30') ? 'selected' : ''}>Hari Ini - Jam 16:30 WIB (Selesai Kuliah)</option>
          <option ${proposedTime.includes('19:30') ? 'selected' : ''}>Hari Ini - Jam 19:30 WIB (Malam Santai)</option>
          <option ${proposedTime.includes('09:30') ? 'selected' : ''}>Besok Pagi - Jam 09:30 WIB (Jeda Kelas)</option>
        </select>
      </div>
      <button type="button" class="btn-chat-accept" style="width: 100%; min-height: 40px;" onclick="confirmCodSchedule(${offeredPrice})">
        Kunci Janjian COD (Tandai Booked)
      </button>
    `;
    chatBox.appendChild(codCard);
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 500);
}

function counterOfferInChat(offeredPrice) {
  const counterAmount = Math.round(offeredPrice * 1.05);
  appendChatMessage(`Naik dikit ke ${formatRupiah(counterAmount)} gimana kak? Barang masih mulus banget, nanti sekalian saya bawain ke Danau Siti Walidah UMS.`, 'seller');
}

function confirmCodSchedule(price) {
  const locElem = document.getElementById('chatCodPointSelect');
  const timeElem = document.getElementById('chatCodTimeSelect');
  const location = locElem ? locElem.value : 'Plaza Danau Siti Walidah UMS';
  const time = timeElem ? timeElem.value : 'Hari Ini 16:30 WIB';

  const prod = currentOfferProduct || currentDetailProduct || PRODUCTS[0];
  if (prod) {
    prod.codStatus = 'Booked COD';
  }

  const orderNo = 'UNIV-' + Math.floor(10000 + Math.random() * 90000);
  const newOrder = {
    id: orderNo,
    productName: prod ? prod.title : 'Kamera Sony Pocket 20MP',
    seller: prod ? prod.seller : 'Shenina Tsabita (FKI UMS)',
    buyer: CURRENT_USER ? CURRENT_USER.name : 'Rizky Pratama',
    price: price || (prod ? prod.price : 750000),
    status: 'Booked COD',
    meetingPoint: `${location} (${time})`,
    note: 'Deal Tawar & Janjian COD via Chat · Bayar Saat Ketemu',
    image: prod && prod.image ? prod.image : 'assets/camera-sony.png',
    productId: prod ? prod.id : 'camera-sony'
  };

  ORDERS.unshift(newOrder);
  if (CURRENT_USER && CURRENT_USER.orders) {
    CURRENT_USER.orders.unshift(newOrder);
  }

  closeChatModal();
  renderCatalogProducts();
  renderProfileOrders();
  renderAdminDesk();
  showToast(`Janjian COD #${orderNo} dikunci di ${location}! Status barang: Booked COD.`);
  navigateToScreen('screen-profile');
  switchProfileTab('pesanan');
}

// --- 15. Pilar 3: Profil Mahasiswa & Riwayat Transaksi ---
function switchProfileTab(tabName) {
  const tabs = ['lapak', 'pesanan', 'ktm'];
  tabs.forEach(t => {
    const btn = document.getElementById('tabBtn' + t.charAt(0).toUpperCase() + t.slice(1));
    const pane = document.getElementById('pane' + t.charAt(0).toUpperCase() + t.slice(1));
    if (btn) btn.classList.toggle('active', t === tabName);
    if (pane) pane.style.display = (t === tabName) ? 'block' : 'none';
  });
}

function renderProfileLapak() {
  const container = document.getElementById('userListingsContainer');
  const countBadge = document.getElementById('statListingCount');
  if (!container) return;

  if (countBadge) countBadge.textContent = USER_LISTINGS.length;

  if (USER_LISTINGS.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 36px 16px; color: #666666; background: var(--color-stone-bone); border: 1px solid var(--color-hairline); border-radius: 0;">
        <p style="font-family: var(--font-serif); font-weight: 800; font-size: 16px; color: var(--color-obsidian);">Kamu belum memasang iklan barang kos.</p>
        <p style="font-size: 12px; margin-top: 4px; color: #666666;">Punya barang yang tidak terpakai? Oper ke adik tingkat sekarang.</p>
        <button class="btn-como-primary" style="width: 200px; height: 42px; margin: 16px auto 0;" onclick="openSellModal()">+ PASANG SEKARANG</button>
      </div>
    `;
    return;
  }

  container.innerHTML = USER_LISTINGS.map(item => `
    <div class="user-listing-item">
      <div class="user-listing-thumb-wrap">
        <img src="${item.image}" alt="${item.title}" class="user-listing-thumb">
        <span class="user-listing-status-tag ${item.status === 'Terjual' ? 'sold' : 'active'}">${item.status || 'Aktif COD'}</span>
      </div>
      <div class="user-listing-info">
        <div class="user-listing-meta">${item.category} • ${item.condition}</div>
        <h4 class="user-listing-title">${item.title}</h4>
        <div class="user-listing-price">${formatRupiah(item.price)}</div>
        <div class="user-listing-spot">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
          <span>${item.location || 'Area Kos Kampus UMS'}</span>
        </div>
      </div>
      <div class="user-listing-actions">
        ${item.status === 'Terjual'
          ? `<span class="badge-listing-sold">SUDAH TERJUAL</span>`
          : `<button type="button" class="btn-mini-status" onclick="markListingSold('${item.id}')">Tandai Terjual</button>`}
        <button type="button" class="btn-mini-status delete" onclick="deleteUserListing('${item.id}')" title="Hapus Iklan">Hapus</button>
      </div>
    </div>
  `).join('');
}

function markListingSold(id) {
  const listing = USER_LISTINGS.find(l => l.id === id);
  if (listing) {
    listing.status = 'Terjual';
    showToast(`Barang "${listing.title}" ditandai terjual!`);
    renderProfileLapak();
  }
}

function deleteUserListing(id) {
  USER_LISTINGS = USER_LISTINGS.filter(l => l.id !== id);
  // Also remove from PRODUCTS
  const idx = PRODUCTS.findIndex(p => p.id === id);
  if (idx !== -1) PRODUCTS.splice(idx, 1);
  showToast('Iklan barang berhasil dihapus.');
  renderProfileLapak();
  renderCatalogProducts();
}

function renderProfileOrders() {
  const container = document.getElementById('userOrdersContainer');
  const countBadge = document.getElementById('statOrderCount');
  if (!container) return;

  const currentOrders = CURRENT_USER && CURRENT_USER.orders ? CURRENT_USER.orders : ORDERS;
  if (countBadge) countBadge.textContent = currentOrders.length;

  if (currentOrders.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 48px 24px; color: #666666; background: var(--color-stone-bone); border: 1px solid var(--color-hairline); border-radius: 0;">
        <p style="font-family: var(--font-serif); font-weight: 800; font-size: 18px; color: var(--color-obsidian); margin-bottom: 6px;">Belum Ada Jadwal Janjian COD Aktif</p>
        <p style="font-size: 12.5px; color: #666666; max-width: 440px; margin: 0 auto 20px; line-height: 1.5;">Semua negosiasi tawar over dan janjian serah terima fisik barang di sekitar area kampus UMS akan tercatat resmi di sini.</p>
        <button class="btn-como-primary" style="width: 240px; height: 44px; margin: 0 auto;" onclick="navigateToScreen('screen-catalog')">JELAJAHI KATALOG KOS</button>
      </div>
    `;
    return;
  }

  container.innerHTML = currentOrders.map(order => {
    let imgSrc = order.image;
    if (!imgSrc) {
      const lower = (order.productName || '').toLowerCase();
      if (lower.includes('meja') || lower.includes('kursi') || lower.includes('lemari')) {
        imgSrc = 'assets/meja-samping.png';
      } else if (lower.includes('rice') || lower.includes('cooker')) {
        imgSrc = 'assets/banner-product-1.png';
      } else if (lower.includes('kipas')) {
        imgSrc = 'assets/banner-product-2.png';
      } else {
        imgSrc = 'assets/camera-sony.png';
      }
    }
    const safeImg = assetUrl(imgSrc);
    const isCompleted = order.status === 'Selesai';
    const statusLabel = isCompleted ? 'SELESAI · SERAH TERIMA' : 'BOOKED COD · MENUNGGU KETEMUAN';
    const statusClass = isCompleted ? 'completed' : 'pending';
    const partnerName = order.seller || order.buyer || 'Shenina Tsabita (FKI UMS)';

    return `
      <div class="order-card-figma">
        <div class="order-card-topbar">
          <div class="order-card-badge-group">
            <span class="order-hash">${order.id}</span>
            <span class="order-official-pill">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              BERITA ACARA DIGITAL COD UMS
            </span>
          </div>
          <span class="order-status-chip ${statusClass}">
            ${statusLabel}
          </span>
        </div>

        <div class="order-card-main-split">
          <div class="order-card-thumb-col">
            <img src="${safeImg}" alt="${order.productName}" class="order-card-thumb">
            <span class="order-thumb-badge">SIAP CEK FISIK</span>
          </div>

          <div class="order-card-info-col">
            <div class="order-title-price-row">
              <h4 class="order-item-title">${order.productName}</h4>
              <div class="order-price-badge">
                <span class="order-price-val">${formatRupiah(order.price)}</span>
                <span class="order-settle-tag">BAYAR DI TEMPAT</span>
              </div>
            </div>

            <div class="order-specs-grid">
              <div class="order-spec-card">
                <div class="order-spec-header">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  <span>TITIK KETEMUAN KAMPUS</span>
                </div>
                <div class="order-spec-value">${order.meetingPoint}</div>
                <div class="order-spec-hint">Area Terpantau Satpam Kampus UMS</div>
              </div>

              <div class="order-spec-card">
                <div class="order-spec-header">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="12" cy="7" r="4"/><path d="M5.5 21a6.5 6.5 0 0 1 13 0"/></svg>
                  <span>MITRA MAHASISWA COD</span>
                </div>
                <div class="order-spec-value">${partnerName}</div>
                <div class="order-spec-hint">
                  <span class="ktm-inline-badge">✓ KTM UMS Terverifikasi</span>
                </div>
              </div>
            </div>

            ${order.note ? `
            <div class="order-note-box">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
              <div class="order-note-text">
                <span class="order-note-lbl">Kesepakatan Negosiasi:</span>
                ${order.note}
              </div>
            </div>` : ''}
          </div>
        </div>

        <div class="order-card-footer">
          <button type="button" class="btn-order-receipt" onclick="openDigitalReceiptModal('${order.id}')">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
            LIHAT BERITA ACARA & QR COD
          </button>
          <button type="button" class="btn-order-chat" onclick="openChatModal('${order.productId || ''}')">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
            CHAT JANJIAN WHATSAPP
          </button>
        </div>
      </div>
    `;
  }).join('');
}

function handleKtmVerificationSubmit(e) {
  e.preventDefault();
  const nim = document.getElementById('ktmNimInput').value.trim();
  const campus = document.getElementById('ktmCampusInput').value.trim();
  const major = document.getElementById('ktmMajorInput').value.trim();

  USER_PROFILE.nim = nim;
  USER_PROFILE.campus = campus;
  USER_PROFILE.major = major;

  const campusDisplay = document.getElementById('profileCampusDisplay');
  if (campusDisplay) campusDisplay.textContent = `${campus} (${major})`;

  showToast('Data verifikasi mahasiswa berhasil diperbarui!');
}

function handleKtmFileSelect(input) {
  if (input.files && input.files[0]) {
    const filename = input.files[0].name;
    const statusText = document.getElementById('ktmFileStatusText');
    if (statusText) statusText.textContent = `${filename} (Diunggah)`;
    showToast(`KTM "${filename}" berhasil diunggah.`);
  }
}

// --- 16. Pilar 4: Desktop Search & Filters ---
function handleDesktopSearch(val) {
  filterCatalogInput(val);
  if (activeScreenId !== 'screen-catalog') {
    navigateToScreen('screen-catalog');
  }
}

function handleRadiusChange(val) {
  activeRadiusKm = parseFloat(val);
  const badge = document.getElementById('radiusValDisplay');
  if (badge) badge.textContent = `${val} km`;
  showToast(`Radius pencarian: ${val} km dari kos`);
}

function applyCampusFilter(campusVal) {
  activeCampusFilter = campusVal;
  renderCatalogProducts();
  if (campusVal === 'all') {
    showToast('Menampilkan barang dari seluruh area kos UMS Solo');
  } else {
    showToast(`Filter area kos UMS: ${campusVal.toUpperCase()}`);
  }
}

function toggleCategoryFilter(catName, isChecked) {
  if (isChecked) {
    activeDesktopCategories.add(catName);
  } else {
    activeDesktopCategories.delete(catName);
  }
  renderCatalogProducts();
}

function resetDesktopFilters() {
  activeDesktopCategories = new Set(['Perabotan', 'Elektronik', 'Alat Kuliah', 'Paket Hemat', 'Paket Oper Kamar']);
  activeCampusFilter = 'all';
  activeRadiusKm = 5.0;

  const range = document.getElementById('radiusRange');
  const badge = document.getElementById('radiusValDisplay');
  const campusSelect = document.getElementById('campusFilterSelect');
  const searchField = document.getElementById('catalogSearchField');
  const desktopSearch = document.getElementById('desktopSearchInput');

  if (range) range.value = '5.0';
  if (badge) badge.textContent = '5.0 km';
  if (campusSelect) campusSelect.value = 'all';
  if (searchField) searchField.value = '';
  if (desktopSearch) desktopSearch.value = '';

  renderCatalogProducts('all', '');
  showToast('Seluruh filter area UMS telah di-reset');
}

// --- 18. Peta Radar Titik Temu COD Kampus UMS (Real Interactive OpenStreetMap) ---
const CAMPUS_MAP_DATA = {
  ums: {
    name: 'Universitas Muhammadiyah Surakarta (Pabelan, Gonilan, Mendungan)',
    center: [-7.5565, 110.7725],
    zoom: 16,
    studentKos: {
      name: 'Kos Putri Melati Gonilan (UMS Pabelan)',
      latlng: [-7.5535, 110.7710],
      address: 'Jl. Garuda No. 8, Gonilan, Kartasura, Sukoharjo'
    },
    meetingPoints: [
      {
        id: 'ums-pt-1',
        name: 'Plaza Danau Siti Walidah UMS',
        latlng: [-7.5580, 110.7735],
        distance: '350 meter',
        walkTime: '4 menit jalan kaki',
        note: 'Zona Terbuka Hijau Gedung Induk Siti Walidah & Pos Keamanan 24 Jam'
      },
      {
        id: 'ums-pt-2',
        name: 'Pelataran Edutorium KH Ahmad Dahlan UMS',
        latlng: [-7.5508, 110.7758],
        distance: '520 meter',
        walkTime: '6 menit jalan kaki',
        note: 'Halaman Parkir Luas Jl. Adi Sucipto, Cocok Angkut Barang Besar'
      },
      {
        id: 'ums-pt-3',
        name: 'Gerbang Utama Kampus 1 UMS Pabelan',
        latlng: [-7.5590, 110.7710],
        distance: '480 meter',
        walkTime: '6 menit jalan kaki',
        note: 'Pos Satpam Utama Jl. Ahmad Yani Pabelan'
      },
      {
        id: 'ums-pt-4',
        name: 'Area Terbuka Kampus 2 UMS Pabelan',
        latlng: [-7.5562, 110.7732],
        distance: '380 meter',
        walkTime: '5 menit jalan kaki',
        note: 'Koridor Utama & Kantin Kampus 2 UMS'
      },
      {
        id: 'ums-pt-5',
        name: 'Taman Kampus 4 UMS Mendungan',
        latlng: [-7.5522, 110.7685],
        distance: '650 meter',
        walkTime: '8 menit jalan kaki',
        note: 'Titik Temu Mahasiswa FK / FIK Area Kos Mendungan'
      }
    ]
  },
  uns: {
    name: 'Universitas Sebelas Maret (Kentingan, Jebres, Solo)',
    center: [-7.5586, 110.8560],
    zoom: 16,
    studentKos: {
      name: 'Kos Putri Ngoresan (UNS Jebres)',
      latlng: [-7.5542, 110.8552],
      address: 'Jl. Ngoresan No. 14, Jebres, Kota Surakarta'
    },
    meetingPoints: [
      {
        id: 'uns-pt-1',
        name: 'Gazebo Danau UNS Kentingan',
        latlng: [-7.5595, 110.8550],
        distance: '300 meter',
        walkTime: '3 menit jalan kaki',
        note: 'Area Terbuka Hijau & Ramai Mahasiswa'
      },
      {
        id: 'uns-pt-2',
        name: 'Gerbang Belakang Ngoresan UNS',
        latlng: [-7.5550, 110.8555],
        distance: '450 meter',
        walkTime: '5 menit jalan kaki',
        note: 'Akses Utama Sentra Kos Mahasiswa Ngoresan'
      }
    ]
  },
  isi: {
    name: 'Institut Seni Indonesia Surakarta (Sekarpace & Mojosongo)',
    center: [-7.5530, 110.8520],
    zoom: 16,
    studentKos: {
      name: 'Kos Seni Sekarpace ISI',
      latlng: [-7.5515, 110.8510],
      address: 'Jl. Sekarpace No. 5, Jebres'
    },
    meetingPoints: [
      {
        id: 'isi-pt-1',
        name: 'Pendopo Ageng GPH Joyokusumo ISI',
        latlng: [-7.5528, 110.8525],
        distance: '300 meter',
        walkTime: '4 menit jalan kaki',
        note: 'Area Terbuka Utama Kampus Seni'
      }
    ]
  }
};

let leafletMap = null;
let currentCampusKey = 'ums';
let activeMapRadius = 500;
let campusMarkers = [];
let studentMarker = null;
let radiusCircle = null;
let routeLine = null;

let currentStudentKos = {
  name: 'Kos Putri Melati Gonilan (UMS Pabelan)',
  latlng: [-7.5535, 110.7710],
  address: 'Jl. Garuda No. 8, Gonilan, Kartasura, Sukoharjo'
};

let selectedMeetingPoint = {
  id: 'ums-pt-1',
  name: 'Plaza Danau Siti Walidah UMS',
  distance: '350 meter',
  walkTime: '4 menit jalan kaki',
  latlng: [-7.5580, 110.7735],
  note: 'Zona Resmi Kampus UMS: Terbuka, Dekat Pos Satpam 24 Jam & Ramai Mahasiswa'
};

function openCampusMapModal() {
  openLocationModal();
}

function closeCampusMapModal() {
  closeLocationModal();
}

function initRealCampusMap() {}
function selectMapMeetingPoint() {}
function applyMapMeetingPoint() { closeLocationModal(); }
function changeMapCampus() {}
function setMapRadius() {}
function detectStudentLocation() {}
function openExternalGoogleMapsDirections() {}

// --- 19. Berita Acara Digital & QR Code COD ---
function openDigitalReceiptModal(orderId = 'UNIV-98214') {
  const m = document.getElementById('modalDigitalReceipt');
  if (!m) return;

  const order = ORDERS.find(o => o.id === orderId) || ORDERS[0];
  if (order) {
    const noEl = document.getElementById('receiptOrderNo');
    const itemEl = document.getElementById('receiptItemName');
    const priceEl = document.getElementById('receiptPrice');
    const meetEl = document.getElementById('receiptMeetingPoint');

    if (noEl) noEl.textContent = `ID Transaksi: ${order.id}`;
    if (itemEl) itemEl.textContent = order.productName;
    if (priceEl) priceEl.textContent = formatRupiah(order.price);
    if (meetEl) meetEl.textContent = order.meetingPoint;
  }

  m.classList.add('open');
}

function closeDigitalReceiptModal() {
  const m = document.getElementById('modalDigitalReceipt');
  if (m) m.classList.remove('open');
}

function downloadReceiptPdfSimulation() {
  showToast('Berita Acara Digital COD UMS berhasil diunduh (Format PDF resmi)!');
  setTimeout(() => {
    closeDigitalReceiptModal();
  }, 1000);
}

// --- 20. LocalStorage Persistence ---
function saveAppState() {
  try {
    const data = {
      cart: CART,
      userListings: USER_LISTINGS,
      orders: ORDERS
    };
    localStorage.setItem('univlop_ums_cod_state_v2', JSON.stringify(data));
  } catch (err) {
    // silently ignore storage errors
  }
}

function loadAppState() {
  try {
    const raw = localStorage.getItem('univlop_ums_cod_state_v2');
    if (raw) {
      const data = JSON.parse(raw);
      if (Array.isArray(data.userListings)) USER_LISTINGS = data.userListings;
      if (Array.isArray(data.orders)) ORDERS = data.orders;
    }
  } catch (err) {
    // fallback to initial state
  }
}

// Hook state saving to listings & orders
const originalHandleSellSubmit = handleSellProductSubmit;
handleSellProductSubmit = function(e) {
  originalHandleSellSubmit(e);
  saveAppState();
};

const originalConfirmCod = confirmCodSchedule;
confirmCodSchedule = function(price) {
  originalConfirmCod(price);
  saveAppState();
};

// Initialize app with persistent storage
loadAppState();
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

// Expose all functions to window for onclick handlers
Object.assign(window, {
  navigateToScreen,
  renderCatalogProducts,
  filterCatalogInput,
  applyFigmaFilter,
  selectCategory,
  openProductDetail,
  addCurrentProductToCart,
  addToCart,
  removeFromCart,
  renderCart,
  toggleSelectAllCart,
  proceedToCheckout,
  renderCheckout,
  selectFigmaPayment,
  confirmFigmaOrder,
  openChatModal,
  closeChatModal,
  toggleChatFullscreen,
  openWhatsAppChat,
  handleChatSubmit,
  sendQuickReply,
  openLocationModal,
  closeLocationModal,
  chooseLocation,
  openNotificationModal,
  closeNotificationModal,
  openMenuModal,
  closeMenuModal,
  openAuthModal,
  closeAuthModal,
  switchAuthView,
  handleAuthLoginSubmit,
  handleAuthSignupSubmit,
  simulateGoogleLogin,
  showToast,
  showSkeletonPage,
  hideSkeletonPage,
  openSellerStorefront,
  // Pillar 1, 2, 3, 4 Exports
  openSellModal,
  closeSellModal,
  selectSellCondition,
  handleSellPhotoSelect,
  handleSellProductSubmit,
  openOfferModal,
  closeOfferModal,
  setOfferQuickPercent,
  handleOfferPriceInput,
  handleOfferSubmit,
  acceptOfferInChat,
  counterOfferInChat,
  confirmCodSchedule,
  switchProfileTab,
  renderProfileLapak,
  renderProfileOrders,
  markListingSold,
  deleteUserListing,
  handleKtmVerificationSubmit,
  handleKtmFileSelect,
  handleDesktopSearch,
  handleRadiusChange,
  applyCampusFilter,
  toggleCategoryFilter,
  resetDesktopFilters,
  openCampusMapModal,
  closeCampusMapModal,
  selectMapMeetingPoint,
  applyMapMeetingPoint,
  changeMapCampus,
  setMapRadius,
  detectStudentLocation,
  openExternalGoogleMapsDirections,
  openDigitalReceiptModal,
  closeDigitalReceiptModal,
  downloadReceiptPdfSimulation,
  // Multi-Role & Admin System
  switchUserRole,
  selectSignupRole,
  handleSignupKtmSelect,
  adminApproveKtm,
  adminRejectKtm,
  renderAdminDesk,
  handleProfilePrimaryAction
});



