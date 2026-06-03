
// --- CẤU HÌNH PHÂN TRANG ---
let currentView = "home";
let currentPage = 1;       // Mặc định ban đầu ở trang 1
const itemsPerPage = 10;    // Số lượng truyện hiển thị trên mỗi trang
let globalMangasToDisplay = []; // Biến lưu trữ danh sách truyện sau khi đã tìm kiếm/lọc

// Biến toàn cục để lưu trạng thái thể loại đang chọn (mặc định là hiển thị 'all')
let currentGenre = "all";

// ==========================================
// ĐÁP ỨNG TIÊU CHÍ: 05 HÀM TỰ ĐỊNH NGHĨA
// ==========================================

// --- HÀM 1: Hiển thị danh sách truyện kèm Phân Trang (Co dãn tự nhiên) ---
function renderReviews(mangasToDisplay) {
    // Lưu danh sách truyện cần hiển thị vào biến toàn cục để các nút bấm trang dùng chung
    globalMangasToDisplay = mangasToDisplay; 
    
    const container = document.getElementById("manga-container");
    container.innerHTML = ""; 
    document.getElementById("pagination-container").innerHTML = "";

    if (mangasToDisplay.length === 0) {
        container.innerHTML = `<p class="text-center text-gray-800 my-8 text-sm">Không tìm thấy truyện nào phù hợp...</p>`;
        return;
    }

    // 1. TÍNH TOÁN VỊ TRÍ ĐỂ CẮT MẢNG DỮ LIỆU
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedMangas = mangasToDisplay.slice(startIndex, endIndex);

    // 2. HIỂN THỊ CÁC THẺ TRUYỆN CỦA TRANG HIỆN TẠI
    paginatedMangas.forEach(manga => {
        const card = document.createElement("article");
        
        // Class chuẩn: items-start và không ép cứng chiều cao (h-auto tự nhiên)
        card.className = "w-full bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-amber-200 transition-all duration-200 flex flex-col sm:flex-row gap-5 items-start cursor-pointer";
        
        card.addEventListener("click", () => {
    currentView = "all"; // Ghi nhớ đang click từ trang Tất cả truyện (phân trang)
    goToMangaDetail(manga);
});

        card.innerHTML = `
            <div class="w-32 h-48 flex-shrink-0 mx-auto sm:mx-0 overflow-hidden rounded-lg shadow-inner bg-gray-50 border border-gray-100">
                <img src="${manga.image}" alt="${manga.title}" class="w-full h-full object-cover">
            </div>
            
            <div class="flex-grow space-y-1.5 text-sm w-full">
                <div class="flex justify-between items-start gap-4 mb-1">
                    <h2 class="text-xl font-black tracking-tight text-gray-950">${manga.title}</h2>
                    <div class="flex-shrink-0 bg-amber-50 border border-amber-200 px-3 py-1 rounded-xl text-center min-w-[80px]">
                        <div class="flex items-center justify-center font-black text-amber-600 text-base">
                            <span>${manga.rating}</span>
                            <span class="text-amber-500/80 font-bold ml-0.5">/10</span>
                        </div>
                        <span class="text-[9px] text-amber-400 block font-bold tracking-wider -mt-0.5">⭐ RATE</span>
                    </div>
                </div>
                
                
                
                <ul class="space-y-1 text-gray-700 font-normal">
                    <li><span class ="text-gray-700 font-medium">✏️ Tên khác:</span> ${manga.othertitle}</li>
                    <li><span class="text-gray-700 font-medium">🔹 Tác giả:</span> ${manga.author}</li>
                    <li><span class="text-gray-700 font-medium">📅 Xuất bản:</span> ${manga.year}</li>
                    <li><span class="text-gray-700 font-medium">📌 Tình trạng:</span> ${manga.status}</li>
                </ul>
                <ul class="space-y-1 text-gray-700 font-normal">
                    <li>
                        <span class="text-gray-700 font-medium">🏷️ Thể loại:</span>
                        <span class="inline-flex flex-wrap gap-1">
                            ${manga.genre.map(g => `<span class="bg-gray-200 text-amber-600 px-2 py-0.5 rounded text-xs font-medium">${g}</span>`).join('')}
                        </span>
                    </li>
                </ul>
            </div>
        `;
        container.appendChild(card);
    });
  
    // 3. TỰ ĐỘNG SINH CỤM NÚT PHÂN TRANG [1] [2] [3] Ở PHÍA DƯỚI DÀNH CHO BẠN
    renderPaginationControls(mangasToDisplay.length);
}

// --- HÀM: Tạo và điều khiển các nút bấm chuyển trang (Có thêm Mũi tên Trước / Sau) ---
function renderPaginationControls(totalItems) {
    const totalPages = Math.ceil(totalItems / itemsPerPage); // Tính tổng số trang
    
    // Nếu tổng số truyện quá ít (chỉ có 1 trang) thì không cần hiện thanh phân trang
    if (totalPages <= 1) return;

    const container = document.getElementById("manga-container");
    
    // Tạo vùng chứa các nút bấm căn giữa
    const paginationDiv = document.createElement("div");
    paginationDiv.className = "flex justify-center items-center gap-2 pt-6 w-full pb-4";

    // ==========================================
    // 1. NÚT MŨI TÊN "TRƯỚC" (PREVIOUS BUTTON)
    // ==========================================
    const prevBtn = document.createElement("button");
    prevBtn.innerHTML = "◀";
    
    if (currentPage === 1) {
        // Nếu đang ở trang 1 thì làm mờ nút Trước và không cho bấm
        prevBtn.className = "px-3 py-2 bg-gray-50 text-gray-300 border border-gray-100 rounded-xl text-sm font-medium cursor-not-allowed shadow-sm";
    } else {
        // Nếu ở trang lớn hơn 1 thì cho bấm thoải mái
        prevBtn.className = "px-3 py-2 bg-white text-gray-700 border border-gray-200 rounded-xl text-sm font-medium hover:border-amber-500 hover:text-amber-500 transition-colors cursor-pointer shadow-sm";
        prevBtn.addEventListener("click", () => {
            currentPage--; // Giảm đi 1 trang
            renderReviews(globalMangasToDisplay);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
    paginationDiv.appendChild(prevBtn);

    // ==========================================
    // 2. CÁC NÚT SỐ TRANG [1] [2] [3]...
    // ==========================================
    for (let i = 1; i <= totalPages; i++) {
        const btn = document.createElement("button");
        btn.innerText = i;
        
        if (i === currentPage) {
            btn.className = "px-4 py-2 bg-amber-500 text-white font-bold rounded-xl text-sm shadow-sm cursor-default";
        } else {
            btn.className = "px-4 py-2 bg-white text-gray-700 border border-gray-200 rounded-xl text-sm font-medium hover:border-amber-500 hover:text-amber-500 transition-colors cursor-pointer shadow-sm";
            btn.addEventListener("click", () => {
                currentPage = i;
                renderReviews(globalMangasToDisplay);
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }
        paginationDiv.appendChild(btn);
    }

    // ==========================================
    // 3. NÚT MŨI TÊN "SAU" (NEXT BUTTON)
    // ==========================================
    const nextBtn = document.createElement("button");
    nextBtn.innerHTML = "▶";
    
    if (currentPage === totalPages) {
        // Nếu đang ở trang cuối cùng thì làm mờ nút Sau và không cho bấm
        nextBtn.className = "px-3 py-2 bg-gray-50 text-gray-300 border border-gray-100 rounded-xl text-sm font-medium cursor-not-allowed shadow-sm";
    } else {
        // Nếu chưa phải trang cuối thì cho bấm thoải mái
        nextBtn.className = "px-3 py-2 bg-white text-gray-700 border border-gray-200 rounded-xl text-sm font-medium hover:border-amber-500 hover:text-amber-500 transition-colors cursor-pointer shadow-sm";
        nextBtn.addEventListener("click", () => {
            currentPage++; // Tăng thêm 1 trang
            renderReviews(globalMangasToDisplay);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
    paginationDiv.appendChild(nextBtn);
    
    // Đẩy toàn bộ cụm nút vào container chính
    const paginationContainer = document.getElementById("pagination-container");
paginationContainer.innerHTML = ""; // Xóa cũ
paginationContainer.appendChild(paginationDiv);
}
// --- HÀM 2: Hàm chuyển mục và đổ dữ liệu sang mục Chi Tiết Truyện ---
function goToMangaDetail(manga) {
    const allMangaPage = document.getElementById("all-manga-page");
    const mainPage = document.getElementById("main-page");
    const detailPage = document.getElementById("detail-page");
    const detailContent = document.getElementById("detail-content");

    // 1. Kiểm tra xem truyện có link hay không để quyết định ẩn/hiện
    //  Kiểm tra Link xem phim
    let linkXemHTML = "";
    if (manga.link && manga.link.trim() !== "") {
        linkXemHTML = `
            <div class="space-y-2 pt-2 border-t border-gray-100">
                <p class="text-sm font-semibold text-gray-800">
                    🔗 Link xem: 
                    <a href="${manga.link}" target="_blank" class="text-amber-600 font-bold hover:text-amber-700 transition-colors cursor-pointer ml-1">
                        Tại đây ➔
                    </a>
                </p>
            </div>
        `;
    } else {
        linkXemHTML = `
            <div class="space-y-2 pt-2 border-t border-gray-100">
                <p class="text-sm font-semibold text-gray-800">
                    🔗 Link xem: 
                    <span class="text-gray-400 font-semibold italic ml-1">Update soon...</span>
                </p>
            </div>
        `;
    }

    // 2. Đổ dữ liệu chi tiết vào trang (Đã sửa nút Quay lại và xử lý ẩn link xem)
    detailContent.innerHTML = `
        <div class="flex flex-col sm:flex-row gap-6 items-start pb-6 border-b border-gray-100">
            <div class="w-32 h-48 flex-shrink-0 mx-auto sm:mx-0 overflow-hidden rounded-xl shadow-md border border-gray-100">
                <img src="${manga.image}" alt="${manga.title}" class="w-full h-full object-cover">
            </div>
            
            <div class="space-y-2.5 w-full text-sm">
                <h3 class="text-2xl font-black text-gray-950 leading-tight">${manga.title}</h3>
                
                <div class="flex items-center gap-1.5 text-amber-600 font-black text-xl pt-1">
                    <span>⭐ ${manga.rating}</span><span class="text-lg text-gray-750 font-bold">/10 </span>
                </div>

                <p><span class="text-gray-700 font-medium">✏️ Tên khác:</span> <strong class="text-gray-800 font-semibold">${manga.othertitle}</strong></p>
                <p><span class="text-gray-700 font-medium">🔹 Tác giả:</span> <strong class="text-gray-800 font-semibold">${manga.author}</strong></p>
                <p><span class="text-gray-700 font-medium">📅 Xuất bản:</span> <span class="text-gray-800 font-semibold ">${manga.year}</span></p>
                <p><span class="text-gray-700 font-medium">📌 Tình trạng:</span> <span class="text-amber-600 font-semibold">${manga.status}</span></p>
                <div class="pt-1">
                    <span class="text-gray-700 font-medium block mb-1">🏷️ Thể loại:</span>
                    <div class="flex flex-wrap gap-1.5">
                        ${manga.genre.map(g => `<span class="bg-amber-50 text-amber-700 border border-amber-100 px-2.5 py-0.5 rounded-md text-xs font-medium">${g}</span>`).join('')}
                    </div>
                </div>
            </div>
            
        </div>

       <div class="pt-6 space-y-6">
            <div class="space-y-2">
                <h4 class="text-base font-black text-gray-800 flex items-center gap-2">
                    <span class="w-1.5 h-4 bg-amber-500 rounded-full"></span> Summary
                </h4>
                <div class="bg-gray-100 p-5 rounded-xl border border-gray-100">
                    ${
                        manga.intro && manga.intro.trim() !== ""
                        ? `<p class="text-gray-700 text-[14px] leading-relaxed font-medium">${manga.intro}</p>`
                        : `<p class="text-gray-700 text-[14px] font-medium ">Đang cập nhật...</p>`
                    }
                </div>
            </div>

           <div class="space-y-2">
    <h4 class="text-base font-black text-gray-800 flex items-center gap-2">
        <span class="w-1.5 h-4 bg-amber-500 rounded-full"></span> Chapter List
    </h4>
    <div class="border border-gray-100 rounded-xl overflow-hidden">

    
       ${  // hiển thị nút xem thêm
    manga.chapters && manga.chapters.length > 0  
    ? (() => {
        const limit = 15;
        const visibleChaps = manga.chapters.slice(0, limit);
        const hiddenChaps = manga.chapters.slice(limit);

        const renderChap = ch => `
            <a ${ch.link && ch.link.trim() !== "" ? `href="${ch.link}" target="_blank"` : ""}
               class="flex justify-between items-center px-4 py-3 text-sm border-b border-gray-100 last:border-0 hover:bg-amber-50 transition-colors ${ch.link && ch.link.trim() !== "" ? "cursor-pointer" : "cursor-default"}">
                <span class="text-gray-800 font-medium">Chapter ${ch.number}${ch.title ? ': ' + ch.title : ''}</span>
                <span class="text-gray-400 text-xs">${ch.date}</span>
            </a>
        `;

        return `
            ${visibleChaps.map(renderChap).join('')}
            ${hiddenChaps.length > 0 ? `
                <div id="hidden-chaps" class="hidden">
                    ${hiddenChaps.map(renderChap).join('')}
                </div>
                <button onclick="
                    const el = document.getElementById('hidden-chaps');
                    const isHidden = el.classList.contains('hidden');
                    el.classList.toggle('hidden');
                    this.innerHTML = isHidden ? '▲ Thu gọn' : '➕️ Xem thêm';
                " class="w-full py-3 text-sm text-amber-600 font-semibold hover:bg-amber-50 transition-colors border-t border-gray-100 cursor-pointer">
                    ➕️ Xem thêm 
                </button>
            ` : ''}
        `;
    })()
    : `<p class="text-gray-400 text-sm p-4">Đang cập nhật...</p>`
}
    </div>
</div>

            ${linkXemHTML}

        </div>

    `;

   
   // 3. Kích hoạt sự kiện quay lại cho nút bấm ở trang chi tiết
    // Kích hoạt sự kiện quay lại cho nút bấm ở trang chi tiết
    const backBtn = document.getElementById("back-to-list-btn");
    if (backBtn) {
        backBtn.onclick = function() {
            detailPage.classList.add("hidden"); 
            
            // DÒNG IN KIỂM TRA: Xem lúc này hệ thống đang nhận diện bạn ở đâu
            console.log("Trạng thái view hiện tại khi bấm Quay lại là:", currentView);
            
            if (currentView === "all") {
                document.getElementById("all-manga-page").classList.remove("hidden");
                console.log("Đã kích hoạt hiển thị lại all-manga-page");
            } else {
                const mainPage = document.getElementById("main-page");
                const viewAllBtn = document.getElementById("view-all-btn");
                if (mainPage) mainPage.classList.remove("hidden");
                if (viewAllBtn) viewAllBtn.classList.remove("hidden");
                console.log("Đã kích hoạt hiển thị lại main-page");
                document.getElementById("popular-carousel").classList.remove("hidden"); // Thêm dòng này: chỉ hiện carousel khi quay về trang chủ
            }
            
           window.scrollTo(0, 0);
        };
    }

    // 4. Ẩn trang danh sách (Mục 1) và hiện trang chi tiết (Mục 2)
    mainPage.classList.add("hidden");
    document.getElementById("all-manga-page").classList.add("hidden");
    detailPage.classList.remove("hidden");
    document.getElementById("popular-carousel").classList.add("hidden");
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// --- HÀM 3: Lọc dữ liệu tổng hợp dựa trên cả Thể loại và Thanh tìm kiếm ---
function filterData() {
    currentPage = 1; // Đưa về trang 1 khi lọc dữ liệu
    
    // Kiểm tra an toàn: Lấy ô tìm kiếm trên thanh Header màu cam
    const searchInput = document.getElementById("search-input");
    
    // Nếu tìm thấy ô input thì lấy chữ người dùng gõ, nếu không thấy thì mặc định là chuỗi rỗng ""
    const searchKey = searchInput ? searchInput.value.toLowerCase() : "";
    
    // Tiến hành lọc mảng truyện
    const filtered = mangaData.filter(manga => {
        const matchesSearch = manga.title.toLowerCase().includes(searchKey);
        
        if (currentGenre === "all") {
            return matchesSearch;
        } else {
            return matchesSearch && manga.genre.includes(currentGenre);
        }
    });
    
    // Đổ dữ liệu đã lọc ra giao diện
    renderReviews(filtered);
}
// --- HÀM 4: Cài đặt sự kiện cho ô Nhập liệu tìm kiếm (Tương tác DOM) ---
function setupSearchEvent() {
    const searchInput = document.getElementById("search-input");
    
    // Lắng nghe sự kiện 'input' (mỗi khi người dùng gõ phím, trang tự động cập nhật ngay)
    searchInput.addEventListener("input", filterData);
}

// --- HÀM 5: Reset toàn bộ bộ lọc quay về trạng thái ban đầu khi bấm vào chữ Trang Chủ ---
function resetToAll() {
    // 1. Xóa chữ trong ô tìm kiếm và đặt lại thể loại về tất cả
    const searchInput = document.getElementById("search-input");
    if (searchInput) searchInput.value = "";
    currentGenre = "all"; 

    // 2. Ẩn các phân vùng không liên quan
    const allMangaPage = document.getElementById("all-manga-page");
    const detailPage = document.getElementById("detail-page");
    if (allMangaPage) allMangaPage.classList.add("hidden");
    if (detailPage) detailPage.classList.add("hidden");
    
    // 3. Hiện lại trang chủ demo và nút Xem tất cả
    const mainPage = document.getElementById("main-page");
    const viewAllBtn = document.getElementById("view-all-btn");
    if (mainPage) mainPage.classList.remove("hidden");
    if (viewAllBtn) viewAllBtn.classList.remove("hidden");

    const carousel = document.getElementById("popular-carousel");
    if (carousel) carousel.classList.remove("hidden");

    // 4. ĐẶT BIẾN TRẠNG THÁI VỀ HOME ĐỂ NÚT QUAY LẠI HOẠT ĐỘNG ĐÚNG
    currentView = "home"; 

    // 5. Đổ lại đúng dữ liệu 8 bộ truyện demo ban đầu và cuộn lên đầu trang
    if (typeof renderDemoMangas === "function") {
        renderDemoMangas(mangaData);
    }
    window.scrollTo(0, 0);
}
// --- HÀM MỚI 6: Hiển thị 6 bộ truyện demo ra ngoài trang chủ ---
// --- HÀM 1: Hiển thị 6 bộ truyện demo ra ngoài trang chủ (An toàn tuyệt đối) ---
function renderDemoMangas(mangas) {
    try {
        const demoContainer = document.getElementById("demo-container");
        if (!demoContainer) return;
        demoContainer.innerHTML = "";
        if (!mangas || mangas.length === 0) return;

        const demoList = mangas.slice(0, 16); // 8 cột x 2 hàng
        
        demoList.forEach(manga => {
            const card = document.createElement("article");
            card.className = "cursor-pointer group";
            card.addEventListener("click", () => {
                currentView = "home";
                goToMangaDetail(manga);
            });
            card.innerHTML = `
                <div class="overflow-hidden rounded-lg shadow-sm group-hover:shadow-md transition-all" style="aspect-ratio: 2/3;">
                    <img src="${manga.image || ''}" alt="${manga.title || ''}" class="w-full h-full object-cover group-hover:scale-106 transition-transform duration-300">
                </div>
                <div class="mt-1.5 px-0.5">
                    <p class="text-xs font-semibold text-gray-800 line-clamp-2 leading-tight">${manga.title}</p>
                    <p class="text-[10px] text-amber-500 font-bold mt-0.5">⭐ ${manga.rating}/10</p>
                </div>
            `;
            demoContainer.appendChild(card);
        });

        // 8 cột total, hiện 7, ẩn 1 bên phải
        const maxOffset = 1;
        let offset = 0;

       function updateGrid() {
    const wrapper = demoContainer.parentElement;
    const colWidth = wrapper.getBoundingClientRect().width / 4;
    demoContainer.style.transform = `translateX(-${offset * colWidth}px)`;
    demoContainer.style.transition = "transform 0.4s ease";

    const prevBtn = document.getElementById("demo-prev");
    const nextBtn = document.getElementById("demo-next");
    const fade = document.getElementById("demo-fade");

    if (prevBtn) prevBtn.classList.toggle("hidden", offset === 0);
    if (nextBtn) nextBtn.classList.toggle("hidden", offset >= maxOffset);
    if (fade) fade.classList.toggle("hidden", offset >= maxOffset);
}

        const nextBtn = document.getElementById("demo-next");
        const prevBtn = document.getElementById("demo-prev");

        if (nextBtn) nextBtn.onclick = () => {
            if (offset < maxOffset) { offset++; updateGrid(); }
        };
        if (prevBtn) prevBtn.onclick = () => {
            if (offset > 0) { offset--; updateGrid(); }
        };

        updateGrid();

    } catch (error) {
        console.error("Lỗi renderDemoMangas:", error);
    }
}

// --- HÀM MỚI 2: Cài đặt sự kiện chuyển phân vùng trang khi click nút ---
function setupNavigationEvents() {
    try {
        const viewAllBtn = document.getElementById("view-all-btn");
        const backToHomeBtn = document.getElementById("back-to-home-btn");
        
        const mainPage = document.getElementById("main-page");
        const allMangaPage = document.getElementById("all-manga-page");
        const detailPage = document.getElementById("detail-page");

       if (viewAllBtn) {    ///xem tất cả
    viewAllBtn.onclick = function() {
        mainPage.classList.add("hidden");
        detailPage.classList.add("hidden");
        allMangaPage.classList.remove("hidden");
        document.getElementById("popular-carousel").classList.add("hidden");
        currentPage = 1;
        renderReviews(mangaData);
        setTimeout(() => { window.scrollTo(0, 0); }, 50);
    };
}

        if (backToHomeBtn) {
            backToHomeBtn.onclick = function() {
                allMangaPage.classList.add("hidden");
                detailPage.classList.add("hidden");
                mainPage.classList.remove("hidden");
                if (viewAllBtn) viewAllBtn.classList.remove("hidden"); 
                document.getElementById("popular-carousel").classList.remove("hidden");
            };
        }
    } catch (error) {
        console.error(error);
    }
}
function setupCarousel() {
    // Lấy các bộ rating >= 9, sắp xếp theo rating giảm dần
    const popularMangas = [...mangaData]
       .sort((a,b) => parseFloat(b.rating) - parseFloat(a.rating))
       .slice(0,8);

    const track = document.getElementById("carousel-track");
    const dotsContainer = document.getElementById("carousel-dots");
    if (!track || popularMangas.length === 0) return;

    let currentSlide = 0;

    // Tạo các slide
    popularMangas.forEach((manga, index) => {
        const slide = document.createElement("div");
        slide.className = "relative flex-shrink-0 w-full h-full";
        slide.style.width = "100%";
        slide.style.cursor = "pointer";
        slide.addEventListener("click", () => {  
    currentView = "home";
    goToMangaDetail(manga);
});
 /// Ảnh nền đằng sau
      slide.innerHTML = `  
    <div class="absolute inset-0" style="overflow: hidden;">
        <img src="${manga.image}" alt="${manga.title}"    
             class="w-full h-full object-cover object-center" style="filter:  blur(0px)  brightness(0.8); transform: scale(1.15);">
    </div>

    <div class="absolute inset-0 flex flex-row items-center px-10 gap-8">
        <!-- Ảnh bìa nhỏ bên trái -->
        <div class="flex-shrink-0 w-36 h-52 rounded-xl overflow-hidden shadow-2xl border-2 border-white/20">
            <img src="${manga.image}" alt="${manga.title}" class="w-full h-full object-cover">
        </div>

        <!-- Thông tin bên phải -->
        <div class="flex flex-col max-w-xl">
            <h2 class="text-white font-black text-2xl sm:text-3xl leading-tight mb-3 drop-shadow-lg">${manga.title}</h2>
            <div class="flex items-center gap-2 mb-2 flex-wrap">
                ${manga.genre.map(g => `<span class="bg-white/20 text-white text-xs px-2 py-0.5 rounded font-medium">${g}</span>`).join('')}
            </div>
            
            <p class="text-white/80 text-sm leading-relaxed line-clamp-3 drop-shadow">${manga.intro}</p>
            <div class="mt-4 flex items-center gap-2 text-xs text-white/60">
                <span>✏️ ${manga.author}</span>
                <span>•</span>
                <span class="text-amber-400 font-semibold">${manga.status}</span>
                <span>•</span>
                <span class="text-amber-400 font-semibold">⭐ ${manga.rating}/10</span>
            </div>
        </div>
    </div>
`;
        track.appendChild(slide);

        // Dot
        const dot = document.createElement("button");
        dot.className = index === 0
            ? "w-6 h-2 bg-amber-400 rounded-full transition-all"
            : "w-2 h-2 bg-white/50 rounded-full transition-all hover:bg-white";
        dot.addEventListener("click", () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    function goToSlide(index) {
        currentSlide = index;
        track.style.transform = `translateX(-${index * 100}%)`;

        // Cập nhật dots
        const dots = dotsContainer.querySelectorAll("button");
        dots.forEach((d, i) => {
            d.className = i === index
                ? "w-6 h-2 bg-amber-400 rounded-full transition-all"
                : "w-2 h-2 bg-white/50 rounded-full transition-all hover:bg-white";
        });
    }

    // Nút prev/next
    document.getElementById("carousel-prev").addEventListener("click", () => {
        goToSlide((currentSlide - 1 + popularMangas.length) % popularMangas.length);
    });
    document.getElementById("carousel-next").addEventListener("click", () => {
        goToSlide((currentSlide + 1) % popularMangas.length);
    });

    // Tự động chạy mỗi 4 giây
    setInterval(() => {
        goToSlide((currentSlide + 1) % popularMangas.length);
    }, 4000);
}


// ==========================================
// KHỞI CHẠY ỨNG DỤNG LẦN ĐẦU KHI LOAD TRANG
// ==========================================
renderDemoMangas(mangaData);   // Hiển thị danh sách truyện ban đầu
setupSearchEvent();        // Kích hoạt tính năng gõ chữ tìm kiếm
setupNavigationEvents(); // Kích hoạt tính năng click chuyển đổi cho nút "Xem tất cả"
setupDropdownEvents();
setupCarousel();
// --- HÀM BỔ SUNG: Lắng nghe sự kiện click từ bảng thể loại thả xuống (Dropdown) ---
function setupDropdownEvents() {
    const dropdownButtons = document.querySelectorAll(".menu-genre-btn");
    
    dropdownButtons.forEach(btn => {
        btn.addEventListener("click", function() {
            const selectedGenre = this.getAttribute("data-genre");
            currentGenre = selectedGenre;

            // ✅ THÊM: Chuyển sang trang all-manga và ẩn trang chủ
            const mainPage = document.getElementById("main-page");
            const allMangaPage = document.getElementById("all-manga-page");
            const viewAllBtn = document.getElementById("view-all-btn");
            const carousel = document.getElementById("popular-carousel");

            if (mainPage) mainPage.classList.add("hidden");
            if (allMangaPage) allMangaPage.classList.remove("hidden");
            if (viewAllBtn) viewAllBtn.classList.add("hidden");
            if (carousel) carousel.classList.add("hidden");

            currentView = "all"; // ✅ Cập nhật trạng thái
            currentPage = 1;

            filterData();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
}



