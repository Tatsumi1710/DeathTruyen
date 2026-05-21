// ==========================================
// ĐOẠN DỮ LIỆU GỐC (DATABASE MÔ PHỎNG)
// ==========================================
    const mangaData = [
    {
        title: "Hyouka",
        othertitle: "Kem Đá",
        image:"img/hyouka.jpg",
        author: "Honobu Yonezawa",
        year: "2012",
        genre: ["Slice of life"],
        status: "Đang tiến hành",
        rating: 8.7,
        intro: "",
        review: "",
        link: "",
        linkDoc: ""

    },
    {
         title: "Is This a Zombie?",
        othertitle: "Kore wa Zonbi desu ka?",
        image: "img/Zombie.jpg",
        author:"Shinichi Kimura",
        year:"2010",
        genre:["Comedy"],
        status: "Hoàn thành",
        rating: 8,
        intro:"",
        review: "",
        link: "",
        linkDoc: ""
    },
    {
        title: "A Bridge to the Starry Skies",
        othertitle:"Hoshizora E kakuru",
        image: "img/hoshizora.jpg",
        author:" Feng",
        year: "2010",
        genre: ["Comedy"],
        status: "Hoàn thành",
        rating: 7.5,
        intro:"",
        review:"",
        link: "",
        link:""

    },
    {
        title: "Akame ga Kill",
        othertitle: "Akame ga Kiru",
        image: "img/Akamegakill.jpg",
        author: "Takahiro",
        year: "20/3/2010",
        genre: ["Dark Fantasy", "Action"],
        status: "Hoàn thành",
        rating: "9.25",
        intro:`Tatsumi, một chàng trai trẻ từ vùng quê nghèo, gia nhập tổ chức ám sát bí mật Night Raid với mong muốn thay đổi đế chế thối nát. 
               Hành trình của cậu là những trận chiến đẫm máu, những mất mát đau lòng và câu hỏi liệu cái ác có thể bị tiêu diệt bằng cái ác hay không.`,
        review: ["Đây là bộ anime đầu tiên mình xem",
                "Cái tên Tatsumi mình lấy từ nhân vật chính của bộ truyện này:v",
        ],
        link: ""
    },
    {
        title: "Date a Live",
        othertitle: "Dēto A Raibu",
        image: "img/datealive.jpg",
        author: "Tachibana Kōshi",
        year: "2011",
        genre: ["Harem","Comedy","Fantasy"],
        status: "Hoàn thành",
        rating: 8.2,
        intro: "",
        review: [],
        link: ""
    },
    {
        title:"Song Tinh Diệt Quỷ Sư",
        othertitle: "Sōsei no Onmyōji",
        image: "img/onmyoji.jpg",
        author: "Yoshiaki Sukeno",
        year: "2013",
        genre: ["Adventure","Comedy","Supernatural"],
        status: "Hoàn thành",
        rating: 8.8,
        intro: "",
        review:[],
        link: ""
    },
    {
        title: "Fly Me to The Moon",
        othertitle: "Tonikaku Kawaii",
        image: "img/tonikaku.jpg",
        author: "Hata Kenjiro",
        year:"14/2/2018,",
        genre:["Comedy"],
        status:"Đang tiến hành",
        rating: 8.4,
        intro: "",
        review:[],
        link: ""

    },
    {
        title:"The Angel Next Door Spoils Me Rotten",
        othertitle: "Otonari no Tenshi-sama ni Itsu no Ma ni ka Dame Ningen ni Sareteita Ken",
        image:"img/tenshi.jpg",
        author:"Saekisan",
        year:"2018",
        genre: ["Comedy"],
        status: "Đang tiến hành",
        rating: 9,
        intro: `Amane, một nam sinh bình thường, tình cờ giúp đỡ Mahiru — cô gái được cả trường gọi là "thiên thần" — trong một đêm mưa. 
                Từ đó, cô hàng xóm hoàn hảo bỗng dưng xuất hiện mỗi ngày để nấu ăn và chăm sóc cậu...`,
        review:[],
        link: "https://www.youtube.com/playlist?list=PLxSscENEp7JiAoaxImun4H_FRDkFI9k3Q"



    },
    {
        title: "The Tunnal to Summer, the Exit of Goodbye",
        othertitle: "Natsu e no Tonneru, Sayonara no Deguchi",
        image: "img/theTunnal.jpg",
        author: "Hachimoku Mei",
        year: "2022",
        genre:["Comedy"],
        status: "Hoàn thành",
        rating: 8.5,
        intro: "",
        review: [],
        link: ""

    },
    {
        title: "Josee, the Tiger and the Fish",
        othertitle:"Joze to Tora to Sakana-tachi",
        image: "img/josee.jpg",
        author: "Seiko Tanabe",
        year: "2020",
        genre:["Comedy"],
        status: "Hoàn thành",
        rating: 9.1,
        intro:`Tsuneo, sinh viên đại học đam mê lặn biển, tình cờ gặp Josee — cô gái ngồi xe lăn với tính cách gai góc nhưng tâm hồn đầy màu sắc. 
                Hai người dần kéo nhau ra khỏi vỏ bọc của chính mình và cùng nhau theo đuổi những ước mơ tưởng chừng không thể.`,
        review:[],
        link: ""
    },

    {
        title: "Shikimori's Not Just a Cutie",
        othertitle:"Kawaii dake ja Nai Shikimori-san",
        image: "img/shikimori.jpg",
        author: "Maki Keigo",
        year: "2019",
        genre: ["Comedy"],
        status: "Hoàn thành",
        rating: 8.87,
        intro:  `Izumi là một nam sinh trung học bị xui xẻo bẩm sinh.Bạn gái của cậu là một cô bạn cùng lớp tên Shikimori.
        Shikimori rất xinh đẹp, dễ thương và tràn đầy tình yêu, tuy nhiên mỗi khi Izumi gặp rắc rối, cô lại trở thành người bạn gái ngầu nhất trên đời!
        Cuộc sống thường ngày dễ thương và đầy những pha kỳ thú của Shikimori, Izumi và những người bạn sẽ bắt đầu tại đây.`,
        review:[],
        link: "https://www.youtube.com/playlist?list=PLdM751AKK4aPXPNBecZyWlru3Qe45ggrU"
    },
    
    {
        title: "One Piece",
        othertitle:"One Piece",
        image: "img/onepiece.jpg",
        author:"Oda Eiichiro",
        year: "1997",
        genre: ["Shonen"],
        status: "Đang tiến hành",
        rating: 9,
        intro: `Monkey D. Luffy, chàng trai mang trong mình sức mạnh của Trái Ác Quỷ, lên đường chinh phục Grand Line với giấc mơ trở thành Vua Hải Tặc.
                Cùng với đội thuyền ngày càng đông đảo, mỗi hòn đảo là một cuộc phiêu lưu mới, một kẻ thù mạnh hơn và một bí ẩn lớn hơn đang chờ đợi.`,
        review:["lan man, dài quá"],
        link:""


    },
    {
        title: "Grand Blue",
        othertitle: "",
        image: "img/grandblue.jpg",
        author: "Kenji Inoue",
        year: "2014",
        genre: ["Comedy"],
        status: "Đang tiến hành",
        rating: 8.75,
        intro: "",
        review: ["bộ này bựa vl"],
                    
         link: ""

    },

    {
        title: "KonoSuba: Gods Blessing on this Wonderful World!",
        othertitle:"Kono subarashii sekai ni shukufuku o!",
        image: "img/konosuba.jpg",
        author: "Natsume Akatsuki",
        year: "2013",
        genre: ["Adventure", "Action", "Comedy"],
        status: "Đang tiến hành",
        rating: 9.37,
        intro: "Satou Kazuma, một hikikomori đam mê trò chơi, Nhưng cuộc sống ngắn ngủi của anh kết thúc vì tai nạn giao thông lãng xẹt ... Nhưng khi anh ta tỉnh dậy, một cô gái xinh đẹp, người tự gọi mình là một nữ thần đã ở phía trước đôi mắt anh ấy và đưa anh ấy đến một thế giới khác, Khi sang thế giới mới, cậu gặp ngày càng nhiều mấy cô nàng không điên thì cũng tâm thần, riết rồi cậu muốn quay trở về thế giới cũ càng nhanh càng tốt...",
        review: ["peak isekai, mấy con gà biết gì:))"],
        link: "https://www.youtube.com/playlist?list=PLOVZwvNm10lXlKl2VHXGmpqqygCG6XbPw",
        linkDoc:">>>"
    }
    
    
];

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
        container.innerHTML = `<p class="text-center text-gray-400 my-8 text-sm">Không tìm thấy truyện nào phù hợp...</p>`;
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

    //  Kiểm tra Link đọc truyện
    let linkDocHTML = "";
    if (manga.linkDoc && manga.linkDoc.trim() !== "") {
        linkDocHTML = `
            <div class="space-y-2 pt-2 border-t border-gray-100 mt-2">
                <p class="text-sm font-semibold text-gray-800">
                    📖 Link đọc: 
                    <a href="${manga.linkDoc}" target="_blank" class="text-amber-600 font-bold hover:text-amber-700 transition-colors cursor-pointer ml-1">
                        Tại đây ➔
                    </a>
                </p>
            </div>
        `;
    } else {
        linkDocHTML = `
            <div class="space-y-2 pt-2 border-t border-gray-100 mt-2">
                <p class="text-sm font-semibold text-gray-800">
                    📖 Link đọc: 
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
                    <span class="w-1.5 h-4 bg-amber-500 rounded-full"></span> Giới thiệu
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
                    <span class="w-1.5 h-4 bg-amber-500 rounded-full"></span> Review
                </h4>
                <div class="bg-gray-100 p-5 rounded-xl border border-gray-100">
                    ${
                        (Array.isArray(manga.review) && manga.review.length > 0) || (typeof manga.review === 'string' && manga.review.trim() !== "")
                        ? `
                            <ul class="list-disc pl-5 space-y-2 text-gray-700 text-[14px] leading-relaxed font-medium">
                                ${
                                    Array.isArray(manga.review)
                                    ? manga.review.map(item => `<li>${item}</li>`).join('')
                                    : `<li>${manga.review}</li>`
                                }
                            </ul>
                        `
                        : `
                            <p class="text-gray-700 text-[14px] font-medium">
                                Đang cập nhật...
                            </p>
                        `
                    }
                </div>
            </div>

            ${linkXemHTML}
            ${linkDocHTML}
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
            }
            
           window.scrollTo(0, 0);
        };
    }

    // 4. Ẩn trang danh sách (Mục 1) và hiện trang chi tiết (Mục 2)
    mainPage.classList.add("hidden");
    document.getElementById("all-manga-page").classList.add("hidden");
    detailPage.classList.remove("hidden");
    
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

// --- HÀM 5: Reset toàn bộ bộ lọc quay về trạng thái ban đầu khi bấm vào Logo ---
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

    // 4. ĐẶT BIẾN TRẠNG THÁI VỀ HOME ĐỂ NÚT QUAY LẠI HOẠT ĐỘNG ĐÚNG
    currentView = "home"; 

    // 5. Đổ lại đúng dữ liệu 8 bộ truyện demo ban đầu và cuộn lên đầu trang
    if (typeof renderDemoMangas === "function") {
        renderDemoMangas(mangaData);
    }
    window.scrollTo(0, 0);
}
// --- HÀM MỚI 1: Hiển thị 6 bộ truyện demo ra ngoài trang chủ ---
// --- HÀM 1: Hiển thị 6 bộ truyện demo ra ngoài trang chủ (An toàn tuyệt đối) ---
function renderDemoMangas(mangas) {
    try {
        const demoContainer = document.getElementById("demo-container");
        if (!demoContainer) {
            console.error("Không tìm thấy thẻ #demo-container trong HTML!");
            return;
        }
        demoContainer.innerHTML = "";

        if (!mangas || mangas.length === 0) return;

        // Lấy tối đa 6 bộ truyện đầu tiên
        const demoList = mangas.slice(0, 6);

        demoList.forEach(manga => {
            const card = document.createElement("article");
            card.className = "w-full bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-amber-200 transition-all duration-200 flex flex-col sm:flex-row gap-5 items-start cursor-pointer";
            
            card.addEventListener("click", () => {
    currentView = "home"; // Ghi nhớ đang click từ trang chủ demo
    goToMangaDetail(manga);
});

            // Đổ HTML đồng bộ với dữ liệu gốc của bạn
            card.innerHTML = `
                <div class="w-32 h-44 flex-shrink-0 overflow-hidden rounded-xl border border-gray-100 shadow-sm">
                    <img src="${manga.image || ''}" alt="${manga.title || ''}" class="w-full h-full object-cover">
                </div>
                <div class="flex-grow min-w-0 text-sm space-y-2">
                    <h3 class="text-base font-bold text-gray-900 truncate">${manga.title || 'Chưa rõ tên'}</h3>
                    <ul class="space-y-1 text-gray-700 font-normal">
                        <li><span class="text-gray-700 font-medium">📝 Tên khác:</span> Đang cập nhật...</li>
                        <li><span class="text-gray-700 font-medium">🔹 Tác giả:</span> ${manga.author || 'Đang cập nhật'}</li>
                        <li><span class="text-gray-700 font-medium">📅 Xuất bản:</span> Năm ${manga.year || '...'}</li>
                        <li><span class="text-gray-700 font-medium">📌 Tình trạng:</span> <span class="text-amber-600 font-medium">${manga.status || 'Đang cập nhật'}</span></li>
                        <li>
                            <span class="text-gray-700 font-medium">🏷️ Thể loại:</span>
                            <span class="inline-flex flex-wrap gap-1">
                                ${(manga.genre || []).map(g => `<span class="bg-gray-100 text-gray-600 px-2 py-0.5 rounded text-xs font-medium">${g}</span>`).join('')}
                            </span>
                        </li>
                    </ul>
                </div>
            `;
            demoContainer.appendChild(card);
        });
    } catch (error) {
        console.error("Lỗi xảy ra trong hàm renderDemoMangas:", error);
    }
}

// --- HÀM 2: Cài đặt sự kiện click chuyển phân vùng trang (Chống crash) ---

// --- HÀM MỚI 2: Cài đặt sự kiện chuyển phân vùng trang khi click nút ---
function setupNavigationEvents() {
    try {
        const viewAllBtn = document.getElementById("view-all-btn");
        const backToHomeBtn = document.getElementById("back-to-home-btn");
        
        const mainPage = document.getElementById("main-page");
        const allMangaPage = document.getElementById("all-manga-page");
        const detailPage = document.getElementById("detail-page");

        if (viewAllBtn) {
            viewAllBtn.onclick = function() {
                mainPage.classList.add("hidden");
                detailPage.classList.add("hidden");
                allMangaPage.classList.remove("hidden");
                viewAllBtn.classList.add("hidden"); 
                
                currentPage = 1; 
                renderReviews(mangaData);

                // Scroll lên đầu SAU khi render xong
                setTimeout(() => {
                    window.scrollTo(0, 0);
                }, 50);
            };
        }

        if (backToHomeBtn) {
            backToHomeBtn.onclick = function() {
                allMangaPage.classList.add("hidden");
                detailPage.classList.add("hidden");
                mainPage.classList.remove("hidden");
                if (viewAllBtn) viewAllBtn.classList.remove("hidden"); 
            };
        }
    } catch (error) {
        console.error(error);
    }
}
// ==========================================
// KHỞI CHẠY ỨNG DỤNG LẦN ĐẦU KHI LOAD TRANG
// ==========================================
renderDemoMangas(mangaData);   // Hiển thị danh sách truyện ban đầu
setupSearchEvent();        // Kích hoạt tính năng gõ chữ tìm kiếm
setupNavigationEvents();   // Kích hoạt tính năng click chuyển đổi cho nút "Xem tất cả"
// --- HÀM BỔ SUNG: Lắng nghe sự kiện click từ bảng thể loại thả xuống (Dropdown) ---
function setupDropdownEvents() {
    const dropdownButtons = document.querySelectorAll(".menu-genre-btn");
    
    dropdownButtons.forEach(btn => {
        btn.addEventListener("click", function() {
            // Lấy tên thể loại được gắn ở thuộc tính data-genre
            const selectedGenre = this.getAttribute("data-genre");
            
            // Cập nhật biến thể loại toàn cục và tiến hành lọc dữ liệu
            currentGenre = selectedGenre;
            filterData();
            
            // Cuộn trang xuống mượt mà để người dùng nhìn thấy kết quả ngay
            window.scrollTo({ top: 150, behavior: 'smooth' });
        });
    });
}

// Gọi kích hoạt hàm này cùng với các hàm khởi chạy ban đầu ở cuối file script.js
setupDropdownEvents();

