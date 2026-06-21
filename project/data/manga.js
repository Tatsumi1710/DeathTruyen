
// ĐOẠN DỮ LIỆU GỐC (DATABASE MÔ PHỎNG)
function chapterImages(mangaFolder, chNum, totalPages, ext = "jpg") {
    return Array.from({length: totalPages}, (_, i) => 
        `manga/chapters/${mangaFolder}/ch${chNum}/${i + 1}.${ext}`
    );
}
    const mangaData = [
    {
       title: "",
       othertitle: "",
       image: "../",
       author: "",
       year: "",
       genre: [],
       status: "",
       rating: 8.67,
       intro: ``,
       chapter: [],
       link: ""
    },

    {
       title: "masamune-kun no revenge",
       othertitle: "Masamune-kun no Ribenji",
       image: "img/masamune.jpg",
       author: "Takeoka Hazuki",
       year: "2013",
       genre: ["Comedy", "Romance","Slice of life"],
       status: "Hoàn thành",
       rating: 9,
       intro: `Makabe Masamune lúc nhỏ chỉ là một con heo vô dụng yếu đuối, nhưng từ khi tỏ tình thất bại với Adagaki, tuyệt vọng khi bị chế nhạo nên Makabe quyết tâm nỗ lực rèn luyện mình và vạch ra một kế hoạch hoàn hảo để trả thù Adagaki. 
               Tám năm sau, cậu đã trở thành một anh chàng đẹp trai, thân hình đầy đặn với thành tích xuất sắc đậu vào trường của Adagaki đang học. Liệu cậu có thể trả thù hay không? Cùng nhau theo dõi câu chuyện nào...`,
       chapter: [
            {number:1, title: "", date: "27/05/2026", images:chapterImages()}
       ],
       link: ""
    },

    {
       title: "Oozoku Furenzu",
       othertitle: "Công chúa và những người bạn",
       image: "img/oozoku.jpg",
       author: "Gatou Ari",
       year: "2026",
       genre: ["One shot","Romance"],
       status: "Hoàn thành",
       rating: 8.65,
       intro: `Lấy bối cảnh tại học viện quý tộc ở vương quốc của thú nhân. Nào, hãy cùng theo chân nàng công chúa rụt rè trên con đường làm thân với cô thường dân nhút nhát...`,
       chapters: [
            {number: 1, title: "", date: "27/05/2026", images:chapterImages()},
       ],
       link: ""
    },

    {
       title: "From The Hero In His Past",
       othertitle: "Anh hùng đến từ quá khứ",
       image: "img/past.jpg",
       author: "Punniz",
       year: "2024",
       genre: ["One shot"],
       status: "Hoàn thành",
       rating: 8.74,
       intro: ``,
       chapters: [
            {number: 1, title: "", date: "12/05/2026", images:chapterImages()},
       ],
       
       link: ""
    },

    {
       title: "Sora kara Onnanoko ga!",
       othertitle: "Cô gái trên bầu trời cao ấy",
       image: "img/sora.jpg",
       author: "Kouhei Katou",
       year: "2023",
       genre: ["One shot","Sports","Romance","Slice of life"],
       status: "Hoàn thành",
       rating: 9,
       intro: `Nhân vật chính là một nam sinh bị bạn cùng lớp bắt nạt và đã chạy trốn lên sân thượng vào mỗi giờ nghỉ trưa. Ở đó, cậu gặp một cô gái, người cũng ở trong hoàn cảnh tương tự với cậu, và cô ấy đã rủ cậu cùng nhảy dù với cô ấy với nỗ lực thay đổi cuộc đời của họ ...?`,
       chapters: [
            {number: 1, title: "", date: "16/05/2026", images:chapterImages()},
       ],
       link: ""
    },

    {
       title: "Blue Lock",
       othertitle: "Khóa Xanh",
       image: "img/bluelock.jpg",
       author: "Kaneshiro Muneyuki",
       year: "2022",
       genre: ["Sports","Drama","Fantasy","Shounen"],
       status: "Đang tiến hành",
       rating: 8.82,
       intro: ` Đá bóng bằng cả tính mạng. `,
       chapters: [
            {number: 15, title: "", date: "10/06/2026", images:chapterImages()},
            {number: 14, title: "", date: "10/06/2026", images:chapterImages()},
            {number: 13, title: "", date: "03/06/2026", images:chapterImages()},
            {number: 12, title: "", date: "01/06/2026", images:chapterImages()},
            {number: 11, title: "", date: "30/05/2026", images:chapterImages()},
            {number: 10, title: "", date: "25/05/2026", images:chapterImages()},
            {number: 9, title: "", date: "22/05/2026", images:chapterImages()},
            {number: 8, title: "", date: "18/05/2026", images:chapterImages()},
            {number: 7, title: "", date: "17/05/2026", images:chapterImages()},
            {number: 6, title: "", date: "16/05/2026", images:chapterImages()},
            {number: 5, title: "", date: "13/05/2026", images:chapterImages()},
            {number: 4, title: "", date: "13/05/2026", images:chapterImages()},
            {number: 3, title: "", date: "13/05/2026", images:chapterImages()},
            {number: 2, title: "", date: "13/05/2026", images:chapterImages()},
            {number: 1, title: "", date: "12/05/2026", images:chapterImages()},
       ],
       link: ""
    },

    {
       title: "Natsu no Hi no Refrain",
       othertitle: "Ngày hè vọng lại",
       image: "img/natsu.jpg",
       author: " Icereizou ",
       year: "2024",
       genre: ["One shot","Romance","Comedy","Slice of life"],
       status: "Hoàn thành",
       rating: 8.4,
       intro: `Cô bạn thuở nhỏ của Sou Irie là Natsuki Nonoka bất ngờ gặp tai nạn và rồi...`,
       chapters: [
            {number: 1, title: "", date: "18/05/2026", images:chapterImages()},
       ],
       link: ""
    },

    {
       title: "Ichizu De Bitch Na Kouhai",
       othertitle: "A story about a flirty kouhai seducing her senpai",
       image: "img/ichizu.jpg",
       author: "Ironon",
       year: "2022",
       genre: ["One shot","School life","Slice of life","Romance","Comedy"],
       status: "Đang tiến hành",
       rating: 9.2,
       intro: `One shot nhưng lại là series`,
       chapters: [
            {number: 12, title: "", date: "24/05/2026", images:chapterImages()},
            {number: 11, title: "", date: "22/05/2026", images:chapterImages()},
            {number: 10, title: "", date: "20/05/2026", images:chapterImages()},
            {number: 9, title: "", date: "19/05/2026", images:chapterImages()},
            {number: 8, title: "", date: "18/05/2026", images:chapterImages()},
            {number: 7, title: "", date: "17/05/2026", images:chapterImages()},
            {number: 2, title: "", date: "17/05/2026", images:chapterImages()},
            {number: 6, title: "", date: "17/05/2026", images:chapterImages()},
            {number: 5, title: "", date: "13/05/2026", images:chapterImages()},
            {number: 4, title: "", date: "13/05/2026", images:chapterImages()},
            {number: 3, title: "", date: "13/05/2026", images:chapterImages()},
            {number: 2, title: "", date: "13/05/2026", images:chapterImages()},
            {number: 1, title: "", date: "12/05/2026", images:chapterImages()},
       ],
       link: ""
    },

    {
       title: "Kikikaikai",
       othertitle: "Kikikaikai",
       image: "img/demons.jpg",
       author: "Sakurai Ato",
       year: "2025",
       genre: ["One shot","Vampires","Supernatural"],
       status: "Hoàn thành",
       rating: 8.5,
       intro: `Aoi, một cậu trai quỷ đang giấu kín thân phận của mình vì sự kì thị cực đoan từ con người đối với loài quỷ, sống một đời bình lặng như học sinh trung học bình thường. Một ngày nọ, từ trên trời rơi xuống một cô nàng đáng yêu không được bình thường cho lắm.`,
       chapters: [
            {number: 1, title: "", date: "12/05/2026", images:chapterImages()},
       ],
       link: ""
    },
    
    {
       title: "The angel next door spoils me rotten",
       othertitle: "Otonari no Tenshi-sama ni Itsu no Ma ni ka Dame Ningen ni Sareteita Ken",
       image: "img/tenshi.jpg",
       author: "Saekisan",
       year: "2022",
       genre: ["Romance","Comedy","Slice of life","School life"],
       status: "Đang tiến hành",
       rating: 9.1,
       intro: `Mahiru là một cô nàng được mệnh danh là "Thiên sứ" của cả trường, vẻ ngoài xinh đẹp, học giỏi, chơi thể thao tốt, một cô nàng thiên sứ gần như hoàn hảo về mọi mặt. Trái ngược lại với cô, chàng hàng xóm Amane lại chỉ là một cậu trai bình thường đến tầm thường, mờ nhạt, u ám, luôn xa lánh người khác.. Tuy nhiên, mọi thứ đã dần thay đổi sau cuộc gặp mặt định mệnh kia`,
       chapters: [
            {number: 9, title: "", date: "02/06/2026", images:chapterImages()},
            {number: 8, title: "", date: "30/05/2026", images:chapterImages()},
            {number: 7, title: "", date: "28/05/2026", images:chapterImages()},
            {number: 6, title: "", date: "22/05/2026", images:chapterImages()},
            {number: 5, title: "", date: "17/05/2026", images:chapterImages()},
            {number: 4, title: "", date: "13/05/2026", images:chapterImages()},
            {number: 3, title: "", date: "13/05/2026", images:chapterImages()},
            {number: 2, title: "", date: "13/05/2026", images:chapterImages()},
            {number: 1, title: "", date: "12/05/2026", images:chapterImages()},
       ],
       link: "https://www.youtube.com/playlist?list=PLxSscENEp7JiAoaxImun4H_FRDkFI9k3Q"
    },
    {
       title: "Lời nói dối của kẻ gác mộ",
       othertitle: "Đang cập nhật",
       image: "img/1.jpg",
       author: "Furumiya Koto",
       year: "2026",
       genre: ["One shot","tradegy","fantasy","Romance"],
       status: "Hoàn thành",
       rating: 8.3,
       intro: `Ở một ngôi làng nọ, có một thiếu nữ nổi tiếng xinh đẹp tên là Lily.
              Cô cùng em trai Lenny gắn bó nương tựa vào nhau, ngày ngày chăm sóc nghĩa trang đã được gia đình quản lý qua nhiều thế hệ.

            Thế nhưng, gần đây Lenny ngày càng hay bị thương, và nụ cười trên gương mặt cậu cũng dần dần biến mất.
            “Có gì đó không ổn lắm…” – linh cảm ấy bắt đầu lớn dần trong lòng Lily, nhưng rồi…?

            “Chị sẽ không đi đâu cả. Chúng ta sẽ bên nhau mãi mãi”.
            Câu chuyện về lời hứa và lời nói dối dịu dàng mà tàn nhẫn giữa hai chị em người gác mộ.`,
       chapters: [
            {number: 1, title: "", date: "14/05/2026", images:chapterImages()},
       ],
       link: ""
    },

    {
       title: "Mu Jyuu Ryoku Shojou",
       othertitle: "Cô gái không trọng lực",
       image: "img/jyuu.jpg",
       author: "Obaru Regu",
       year: "2025",
       genre: ["one shot","Slice of life","Comedy","Romance"],
       status: "Hoàn thành",
       rating: 8.1,
       intro: `Khi cảm giác lâng lâng từ những niềm vui khó tả có thể được bộc lộ ra thì sẽ trông thế nào?`,
       chapters: [
            {number: 1, title: "", date: "15/05/2026", images:chapterImages()},
       ],
       link: ""
    },

    {
       title: "Mayonaka Heart Tune",
       othertitle: "Tune In to the Midnight Heart",
       image: "img/mayonaka.jpg",
       author: "Masakuni Igarashi",
       year: "2023",
       genre: ["School life","Slice of life","Romance","Comedy",],
       status: "Đang tiến hành",
       rating: 9.3,
       intro: `"Giữa đêm khuya thanh vắng, nằm cô độc trên giường, chỉ có giọng nói của cậu là thứ duy nhất cứu rỗi tớ. Tớ muốn được trò chuyện cùng cậu một lần nữa. Tớ có điều này muốn nói với cậu."

            Yamabuki Arisu, một nam sinh trung học năm hai, đang mãi miết tìm kiếm cô gái mang tên "Apollo" - một cô gái bí ẩn mà cậu chẳng hề biết tên thật hay dung mạo.

            Thế rồi một ngày nọ, Arisu bắt được manh mối về Apollo ngay tại Câu lạc bộ Phát thanh của ngôi trường mình đang theo học. Chờ đợi cậu ở đó là 4 thiếu nữ xinh đẹp cùng ấp ủ ước mơ "được làm những công việc liên quan đến giọng nói"!!

            Rốt cuộc, ai trong số họ mới là Apollo? Và chặng đường theo đuổi ước mơ của 4 cô gái ấy sẽ đi về đâu?`,
       chapters: [
            {number: 6, title: "", date: "02/06/2026", images:chapterImages()},
            {number: 5, title: "", date: "22/05/2026", images:chapterImages()},
            {number: 4, title: "", date: "13/05/2026", images:chapterImages()},
            {number: 3, title: "", date: "13/05/2026", images:chapterImages()},
            {number: 2, title: "", date: "13/05/2026", images:chapterImages()},
            {number: 1, title: "", date: "12/05/2026", images:chapterImages()},
       ],
       link: ""
    },

    {
       title: "Beyond the Bourdary",
       othertitle: "Kyoukai no kanata",
       image: "img/boundary.jpg",
       author: "Torii Nagomu",
       year: "2013",
       genre: ["Slice of life", "Dark Fantasy","School life","Comedy","Romance","Drama"],
       status: "Hoàn thành",
       rating: 9.2,
       intro: `Mirai và Senpai.`,
       chapters: [
            {number: 2, title: "", date: "20/05/2026", images:chapterImages()},
            {number: 1, title: "", date: "13/05/2026", images:chapterImages()},
       ],
       link: ""
    },

    {
       title: "Josee, the tiger and the Fish",
       othertitle: "Joze to Tora to Sakana-tachi",
       image: "img/tigerandfish.jpg",
       author: "Seiko Tanabe",
       year: "2020",
       genre: ["Slice of life","Comedy","Romance","Drama"],
       status: "Hoàn thành",
       rating: 9.8,
       intro: `Câu chuyện chủ yếu xoay quanh mối quan hệ của Tsuneo và Josee. 
               Tsuneo là một sinh viên đại học, còn Josee là một cô gái trẻ hiếm khi ra khỏi nhà do không thể đi lại được như người bình thường. 
               Hai người họ đã vô tình gặp nhau khi Tsuneo thấy bà của Josee đưa cô ấy tản bộ vào đêm tối...`,
       chapters: [
            {number: 10, title: "",date: "03/06/2026", images:chapterImages()},
            {number: 9, title: "", date: "27/05/2026", images:chapterImages()},
            {number: 8, title: "", date: "22/05/2026", images:chapterImages()},
            {number: 7, title: "", date: "20/05/2026", images:chapterImages()},
            {number: 6, title: "", date: "15/05/2026", images:chapterImages()},
            {number: 5, title: "", date: "13/05/2026", images:chapterImages()},
            {number: 4, title: "", date: "13/05/2026", images:chapterImages()},
            {number: 3, title: "", date: "13/05/2026", images:chapterImages()},
            {number: 2, title: "", date: "13/05/2026", images:chapterImages()},
            {number: 1, title: "", date: "12/05/2026", images:chapterImages()},
       ],
       link: "https://youtu.be/i1o9eiRFzqc?si=sg8kvbfuOF7Ftbg6"
    },

    {
       title: "You are still in a bird cage",
       othertitle: "Kimi wa mada tori kago no naka",
       image: "img/birdcage.jpg",
       author: "Hakuri",
       year: "2017",
       genre: ["One shot","Tragedy","shoujo","School life","Drama"],
       status: "Hoàn thành",
       rating: 8.1,
       intro: `Nitogi Amane và Utsuya Madoka lần đầu gặp nhau vào giữa năm 2 sơ trung. 
              Nhưng vì một sai lầm nhỏ nhưng chết người đã khiến Amane phải trả giá đắt hơn cả người bạn thân tưởng chừng như vô hại của cô...`,
       chapters: [
            {number: 1, title: "", date: "22/05/2026", images:chapterImages()},
       ],
       link: ""
    },

    {
       title: "Watashi wa Jakuchu ni naritai",
       othertitle: " Tớ sẽ trở thành Jakuchu!",
       image: "img/jakuchu.jpg",
       author: "Manami Miya",
       year: "2025",
       genre: ["One shot","Seinen"],
       status: "Hoàn thành",
       rating: 8.64,
       intro: `Không biết nói gì nữa, chỉ biết là oneshot nhân văn`,
       chapters: [
            {number: 1, title: "", date: "25/05/2026", images:chapterImages()},
       ],
       link: ""
    },

    {
       title: "Nitamono Doushi",
       othertitle: "(Không) Giống như hai giọt nước",
       image: "img/doushi.jpg",
       author: "Efu",
       year: "2026",
       genre: ["One shot","School life","Romance","Drama"],
       status: "Hoàn thành",
       rating: 9.1,
       intro: `Teru là một thanh niên bị ám ảnh bởi tuổi thơ, tự cô lập bản thân và tránh giao tiếp với xã hội. 
              Niềm vui duy nhất của cậu đến từ việc chơi game... cho đến khi cuộc gặp gỡ đầy định mệnh tại quán chơi game cậu hay chơi, phá vỡ thế giới bình yên của cậu.
               Một câu chuyện cảm động, về cuộc gặp gỡ giữa hay tâm hồn lạc lối, kéo họ lại với nhau sau một đêm`,
       chapters: [
            {number: 1, title: "", date: "23/05/2026", images:chapterImages()},
       ],
       link: ""
    },

    {
       title: "Hanrou to Shoujo",
       othertitle: "Bán sói và cô bé",
       image: "img/hanrou.jpg",
       author: "Fukuda Dai",
       year: "2025",
       genre: ["One shot","Tragedy","Fantasy","Slice of life","Drama"],
       status: "Hoàn thành",
       rating: 8.5,
       intro: `Một người sói cô độc tìm thấy một cô bé bị mù...
               Câu chuyện về một kẻ "không phải người" làm tất cả vì mạng sống của một "người"`,
       chapters: [
            {number: 1, title: "", date: "21/05/2026", images:chapterImages()},
       ],
       link: ""


    },
    {
       title: "Sakura no Uta",
       othertitle: "Vần thơ Sakura",
       image: "img/sakura1.jpg",
       author: "Hayashi Nema",
       year: "2022",
       genre: ["One shot","Slice of life","Drama"],
       status: "Hoàn thành",
       rating: 8.9,
       intro: `Vì bố mẹ ly hôn, Sakura hiện sống với bố. Em được mọi người đánh giá là "một đứa trẻ ngoan ngoãn chững chạc". 
              Tuy nhiên, cậu bạn cùng khoá Minato đặt ra cho em một câu hỏi khiến em phải bất giác khựng mình. 
              Lúc đó Sakura không nghĩ ngợi mấy, nhưng sau khi gặp lại mẹ, mọi thứ bắt đầu thay đổi...?`,
       chapters: [
            {number: 1, title: "", date: "24/05/2026", images:chapterImages()},
       ],
       link: ""
    },

    {
       title: "Ao và Sakura",
       othertitle: " Ao to Sakura ",
       image: "img/aoandsakura.jpg",
       author: "Kasuka Io",
       year: "2026",
       genre: ["One shot","Romance","Comedy","Slice of life"],
       status: "Hoàn thành",
       rating: 8.7,
       intro: `Fujieda Ao, một học sinh cao trung không hoà nhập được với lớp của mình. 
               Sau giờ học cậu hay đến thư viện nơi cậu gặp cô ấy. Cô rạng rỡ, vô tư, và hay cười; đối lập hoàn toàn với cậu. 
               Cô ấy tên là Hidaka Sakura. Ao dần bị Sakura hớp hồn. Từ cuộc gặp gỡ ấy, hạt giống “tình yêu” đã dần nảy mầm.`,
       chapters: [
            {number: 1, title: "", date: "23/05/2026", images:chapterImages()},
       ],
       link: ""
    },

    {
       title: "Spring Returns to Aoi's Room",
       othertitle: "Aoi no Heya ni Mata Haru ga Kita",
       image: "img/aoi.jpg",
       author: "Ishikawa Ireishi",
       year: "2025",
       genre: ["One shot","Romance","Slice of life"],
       status: "Hoàn thành",
       rating: 9.34,
       intro: `Câu chuyện chữa lành về Aoi — một cô gái trẻ sống tự hủy hoại bản thân, 
               bỗng một ngày căn phòng của cô xuất hiện các biểu tượng mùa xuân (hoa anh đào, bướm) lặng lẽ dõi theo cô hằng ngày.`,
       chapters: [
            {number: 1, title: "", date: "12/05/2026", images:chapterImages()},
       ],
       link: ""
    },

    {
       title: "Light Again",
       othertitle: "Ánh sáng cuối cùng",
       image: "img/lightagain.jpg",
       author: "Arisaka Ako",
       year: "2021",
       genre: ["One shot", "Sci-fi","Drama"],
       status: "Hoàn thành",
       rating: 9,
       intro: `Trái đất mất đi nguồn sáng sau vụ va chạm của thiên thạch vào mặt trăng, từ đó, một căn bệnh lạ xuất hiện...`,
       chapters: [
            {number: 1, title: "", date: "17/05/2026", images:chapterImages()},
       ],
       link: ""
    },

    {
        title: "Parasol Alliance",
       othertitle: "Parasol Doumei",
       image: "img/parasol.jpg",
       author: "Miura Kouji",
       year: "2020",
       genre: ["One shot","Comedy"],
       status: "Hoàn thành",
       rating: 9.1,
       intro: ``,
       chapters: [
            {number: 1, title: "", date: "01/06/2026", images:chapterImages()},
       ],
       link: ""
    },

    {
       title: "The Pet Girl of Sakurasou",
       othertitle: "Sakura-sō no Pet na Kanojo",
       image: "img/sakura.jpg",
       author: "Kamoshida Hajime",
       year: "2013",
       genre: ["Comedy","Romance","Slice of life"],
       status: "Hoàn Thành",
       rating: 8.6,
       intro: ``,
       chapters: [
            {number: 5, title: "", date: "16/05/2026", images:chapterImages()},
            {number: 4, title: "", date: "13/05/2026", images:chapterImages()},
            {number: 3, title: "", date: "13/05/2026", images:chapterImages()},
            {number: 2, title: "", date: "13/05/2026", images:chapterImages()},
            {number: 1, title: "", date: "12/05/2026", images:chapterImages()},
       ],
       link: ""
    },
   
    {
       title: "Lúc đó, tôi đã chuyển sinh thành Slime",
       othertitle: "Tensei-shitara Suraimu datta Ken",
       image: "img/slime.jpg",
       author: "Fuse",
       year: "2016",
       genre: ["Isekai","Action","Comdey","Fantasy"],
       status: "Đang tiến hành",
       rating: 9.3,
       intro: ``,
       chapters: [
            {number: 5, title: "", date: "22/05/2026", images:chapterImages()},
            {number: 4, title: "", date: "18/05/2026", images:chapterImages()},
            {number: 3, title: "", date: "13/05/2026", images:chapterImages()},
            {number: 2, title: "", date: "13/05/2026", images:chapterImages()},
            {number: 1, title: "", date: "12/05/2026", images:chapterImages()},
       ],
       link: ""
    },
 
    {
       title: "Chuunibyou demo koi ga shitai",
       othertitle: "Hội chứng tuổi dậy thì",
       image: "img/chuunibyou.jpg",
       author: "Torako",
       year: "2012",
       genre: ["Comedy","Romance","Slice of life","Supernatural"],
       status: "Hoàn Thành",
       rating: 9.45,
       intro: ``,
       chapters: [
            {number: 5, title: "", date: "21/05/2026", images:chapterImages()},
            {number: 4, title: "", date: "17/05/2026", images:chapterImages()},
            {number: 3, title: "", date: "13/05/2026", images:chapterImages()},
            {number: 2, title: "", date: "13/05/2026", images:chapterImages()},
            {number: 1, title: "", date: "12/05/2026", images:chapterImages()},
       ],
       link: ""
    },

    {
        
       title: "Naruto Shippuden",
       othertitle: "Naruto",
       image: "img/naruto.jpg",
       author: "Kishimoto Masashi.",
       year: "2007",
       genre: ["Action", "Shounen","Comedy"],
       status: "Hoàn Thành",
       rating: 9,
       intro: ``,
       chapters: [
            {number: 5, title: "", date: "17/05/2026", images:chapterImages()},
            {number: 4, title: "", date: "13/05/2026", images:chapterImages()},
            {number: 3, title: "", date: "13/05/2026", images:chapterImages()},
            {number: 2, title: "", date: "13/05/2026", images:chapterImages()},
            {number: 1, title: "", date: "12/05/2026", images:chapterImages()},
       ],
       link: ""


    },
    
    {
        title: "Plunderer",
        othertitle: "Purandara",
        image: "img/plundere.jpg",
        author: "Minazuki Suu",
        year: "2020",
        genre: ["Action", "Comedy","Fantasy"],
        status: "Hoàn Thành",
        rating: 8.36,
        intro: ``,
        chapters: [
            {number: 3, title: "", date: "13/05/2026", images:chapterImages()},
            {number: 2, title: "", date: "13/05/2026", images:chapterImages()},
            {number: 1, title: "", date: "12/05/2026", images:chapterImages()},
        ],
        link: ""
    },
    {
        title: "Hige o Soru",
        othertitle: "Higehiro: After Being Rejected, I Shaved and Took in a High School Runaway",
        image: "img/hige.jpg",
        author: "Shimesaba",
        year: "2018",
        genre: ["Comedy", "Slice of life","Tragedy"],
        status: "Hoàn thành",
        rating: 8.52,
        intro: ``,
        chapters: [
            {number: 5, title: "", date: "14/05/2026", images:chapterImages()},
            {number: 4, title: "", date: "13/05/2026", images:chapterImages()},
            {number: 3, title: "", date: "13/05/2026", images:chapterImages()},
            {number: 2, title: "", date: "13/05/2026", images:chapterImages()},
            {number: 1, title: "", date: "12/05/2026", images:chapterImages()},
        ],
        link: ""

    },
    {
        title: "Tamako love story",
        othertitle: "Tamako rabusutōrī",
        image: "img/tamako.jpg",
        author: "Mutsuki Ichinose",
        year: "2014",
        genre: ["comedy","Romance","Slice of life"],
        status: "Hoàn thành",
        rating: 8.43,
        intro: ``,
        chapters: [
            {number: 5, title: "", date: "13/05/2026", images:chapterImages()},
            {number: 4, title: "", date: "13/05/2026", images:chapterImages()},
            {number: 3, title: "", date: "13/05/2026", images:chapterImages()},
            {number: 2, title: "", date: "13/05/2026", images:chapterImages()},
            {number: 1, title: "", date: "12/05/2026", images:chapterImages()},
        ],
        link: ""
    },
    {
        title: "Thất nghiệp chuyển sinh",
        othertitle: "Mushoku Tensei ",
        image: "img/mushoku.jpg",
        author: "Rifujin na Magonote",
        year: "2014",
        genre: ["Adventure","Harem","Comedy","Tragedy","Dark Fantasy"],
        status: "Đang tiến hành",
        rating: 9.2,
        intro: `ột otaku vô công rồi nghề 34 tuổi bị đuổi ra khỏi nhà bởi chính gia đình của mình. Nhận ra cuộc đời của bản thân đã lâm vào ngõ cụt cũng như là sự rác rưởi, vô dụng của bản thân; anh ta ước rằng phải chi bản thân khi xưa vượt qua được giai đoạn đen tối của cuộc đời thì bây giờ có lẽ mọi chuyện đã khác. 
                Đúng vào khoảnh khắc hối tiếc đó, anh thấy 1 chiếc xe tải chạy với vận tốc lớn đang lao đến 3 học sinh trung học gần đó. Gom tất cả sức lực còn lại, anh ta cứu được 3 học sinh kia tuy nhiên lại phải bỏ mạng của chính bản thân mình dưới bánh chiếc xe tải đó. Khi mở mắt ra, anh nhận ra rằng mình đã được đầu thai ở thế giới của gươm giáo và phép thuật song hành tồn tại dưới cái tên Rudeus Greyrat. Dưới hình hài mới ở một thế giới mới, Rudeus tự khẳng định với bản thân " Lần này mình sẽ thực sự sống đến tận cùng cuộc sống này mà không hề tiếc nuối". Và như thế, cuộc hành trình của anh bắt đầu.`,
        chapters: [
            {number: 5, title: "", date: "24/05/2026", images:chapterImages()},
            {number: 4, title: "", date: "16/05/2026", images:chapterImages()},
            {number: 3, title: "", date: "15/05/2026", images:chapterImages()},
            {number: 2, title: "", date: "14/05/2026", images:chapterImages()},
            {number: 1, title: "", date: "12/05/2026", images:chapterImages()},
        ],
        link: ""

    },
    
    {
        title: "Assassination Classroom",
        othertitle: "Ansatsu Kyōshitsu",
        image: "img/classassin.jpg",
        author: "Matsui Yūsei",
        year: "2012",
        genre: ["Action","Shounen","Comedy","School life"],
        status: "Hoàn thành",
        rating: 9,
        intro:``,
        chapters: [
            {number: 5, title: "", date: "20/05/2026", images:chapterImages()},
            {number: 4, title: "", date: "14/05/2026", images:chapterImages()},
            {number: 3, title: "", date: "14/05/2026", images:chapterImages()},
            {number: 2, title: "", date: "14/05/2026", images:chapterImages()},
            {number: 1, title: "", date: "12/05/2026", images:chapterImages()},
        ],
        link:""
    },
    
    {
        title: "The Day I Became a God",
        othertitle: "Kamisama ni Natta Hi",
        image: "img/kami.jpg",
        author: "Maeda Jun",
        year: "2020",
        genre: ["Slice of life","Tragedy","Romance","Fantasy"],
        status: "Hoàn thành",
        rating: 8.3,
        intro: `Narukami Youta, một nam sinh chuẩn bị thi đại học, bất ngờ gặp được một cô bé tự do là thần linh toàn tri tên Hina — 
                người tuyên bố thế giới sẽ diệt vong trong 30 ngày. vui vẻ bên nhau.`,
        chapters: [
            {number: 6, title: "", date: "13/05/2026", images:chapterImages()},
            {number: 5, title: "", date: "13/05/2026", images:chapterImages()},
            {number: 4, title: "", date: "13/05/2026", images:chapterImages()},
            {number: 3, title: "", date: "13/05/2026", images:chapterImages()},
            {number: 2, title: "", date: "12/05/2026", images:chapterImages()},
            {number: 1, title: "", date: "12/05/2026", images:chapterImages()},
        ],
        link: "",

    },
    {
        title: "Seraph of the End: Vampire Reign",
        othertitle: "Owari no seraph",
        image: "img/owari.jpg",
        author: "Kagami Takaya",
        year: "2012",
        genre: ["Action"],
        status: "Đang tiến hành",
        rating: 8.5,
        intro: `Một loại Virus xuất hiện trên Trái đất và giết hết tất cả những người bị nhiễm có tuổi trên 13. 
                Cùng lúc đó, ma cà rồng xuất hiện từ lòng đất sâu thẳm và biến loài người thành nô lệ. Nhân vật chính Hyakuya Yuuichirou là một trẻ mồ côi, bị ma cà rồng xem như loài vật cho chúng hút máu. 
                Dù bị giam cầm, nhưng cậu có hoài bão lớn, khao khát có ngày giết hết toàn bộ ma cà rồng.`,
        chapters: [
            {number: 6, title: "", date: "18/05/2026", images:chapterImages()},
            {number: 5, title: "", date: "18/05/2026", images:chapterImages()},
            {number: 4, title: "", date: "18/05/2026", images:chapterImages()},
            {number: 3, title: "", date: "18/05/2026", images:chapterImages()},
            {number: 2, title: "", date: "17/05/2026", images:chapterImages()},
            {number: 1, title: "", date: "13/05/2026", images:chapterImages()},
        ],
        link: "",
    },    
    
    {
        title: "Kem Đá",
        othertitle: "Hyouka",
        image:"img/hyouka.jpg",
        author: "Honobu Yonezawa",
        year: "2012",
        genre: ["Slice of life","Detective","Comedy","School life","Mystery"],
        status: "Đang tiến hành",
        rating: 8.7,
        intro: `Houtarou Oreki, một học sinh cấp ba trung thành với phong cách “tiết kiệm năng lượng” đã phải từ bỏ những ngày bình yên khi phải tham gia Câu lạc bộ Văn Học Cổ Điển theo yêu cầu từ chị mình.
                Đồng hành cùng cậu là Chitanda Eru, một cô gái với lòng hiếu kì vô hạn sẽ mang đến cho cậu vô vàn những “bí ẩn” thách thức khả năng suy luận của cậu.
                Hyouka là một câu chuyện học đường nhẹ nhàng chứa đựng một thông điệp: cuộc sống quanh ta luôn ẩn chứa những bí ẩn nhỏ mà nếu để ý, ta có thể trải nghiệm những câu chuyện cực kì thú vị.`,
        chapters: [
            {number: 3, title: "", date: "24/05/2026", images:chapterImages()},
            {number: 2, title: "", date: "15/05/2026", images:chapterImages()},
            {number: 1, title: "", date: "12/05/2026", images:chapterImages()},
        ],
        link: "",
       

    },
    {
         title: "Is This a Zombie?",
        othertitle: "Kore wa Zonbi desu ka?",
        image: "img/Zombie.jpg",
        author:"Shinichi Kimura",
        year:"2010",
        genre:["Comedy","Romance","Slice of life","Fantasy"],
        status: "Hoàn thành",
        rating: 8,
        intro:"",
        chapters:[
            {number: 3, title: "", date: "15/05/2026", images:chapterImages()},
            {number: 2, title: "", date: "15/05/2026", images:chapterImages()},
            {number: 1, title: "", date: "12/05/2026", images:chapterImages()},
        ],
        link: "",
        
    },
    {
        title: "A Bridge to the Starry Skies",
        othertitle:"Hoshizora E kakuru",
        image: "img/hoshizora.jpg",
        author:"Feng",
        year: "2010",
        genre: ["Comedy"],
        status: "Hoàn thành",
        rating: 7.5,
        intro:"",
        chapters: [
            {number: 3, title: "", date: "17/05/2026", images:chapterImages()},
            {number: 2, title: "", date: "15/05/2026", images:chapterImages()},
            {number: 1, title: "", date: "12/05/2026", images:chapterImages()},
        ],
        link: "",
    },

    {
        title: "Akame ga Kill",
        othertitle: "Akame ga Kiru",
        image: "img/Akamegakill1.jpg",
        author: "Takahiro",
        year: "20/3/2010",
        genre: ["Dark Fantasy", "Action","Comedy","Shounen"],
        status: "Hoàn thành",
        rating: "9.25",
        intro:`Tatsumi, một chàng trai trẻ từ vùng quê nghèo, gia nhập tổ chức ám sát bí mật Night Raid với mong muốn thay đổi đế chế thối nát. 
               Hành trình của cậu là những trận chiến đẫm máu, những mất mát đau lòng và câu hỏi liệu cái ác có thể bị tiêu diệt bằng cái ác hay không.`,
        chapters: [
            {number: 3, title: "", date: "17/05/2026", images:chapterImages()},
            {number: 2, title: "", date: "15/05/2026", images:chapterImages()},
            {number: 1, title: "", date: "12/05/2026", images:chapterImages()},
        ],
        link: ""
    },

    {
        title: "Date a Live",
        othertitle: "Dēto A Raibu",
        image: "img/datealive.jpg",
        author: "Tachibana Kōshi",
        year: "2011",
        genre: ["Harem","Comedy","Fantasy","Romance"],
        status: "Hoàn thành",
        rating: 8.2,
        intro: `Thế giới bị đảo lộn bởi các "Chấn động không gian" bí ẩn gây ra bởi những cô gái mang sức mạnh siêu nhiên được gọi là Tinh Linh. Shido, một nam sinh trung học bình thường, phát hiện ra mình sở hữu một năng lực độc nhất vô nhị: có thể phong ấn sức mạnh của Tinh Linh. Tuy nhiên, để làm được điều đó, anh phải khiến Tinh Linh rung động, yêu mình và có một buổi hẹn hò hoàn hảo. Nếu buổi hẹn hò thất bại, Tinh Linh sẽ bạo phát, gây nguy hiểm đến toàn nhân loại.`,
        chapters: [
            {number: 4, title: "", date: "22/05/2026", images:chapterImages()},
            {number: 3, title: "", date: "17/05/2026", images:chapterImages()},
            {number: 2, title: "", date: "15/05/2026", images:chapterImages()},
            {number: 1, title: "", date: "12/05/2026", images:chapterImages()},
        ],
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
        intro: ``,
        chapters: [
            {number: 2, title: "", date: "17/05/2026", images:chapterImages()},
            {number: 1, title: "", date: "13/05/2026", images:chapterImages()},
        ],
        link: ""
    },
    {
        title: "Fly Me to The Moon",
        othertitle: "Tonikaku Kawaii",
        image: "img/tonikaku.jpg",
        author: "Hata Kenjiro",
        year:"14/2/2018,",
        genre:["Comedy","Romance","Slice of life","Supernatural"],
        status:"Đang tiến hành",
        rating: 8.4,
        intro: ``,
        chapters: [
            {number: 7, title: "", date: "21/05/2026", images:chapterImages()},
            {number: 6, title: "", date: "21/05/2026", images:chapterImages()},
            {number: 5, title: "", date: "21/05/2026", images:chapterImages()},
            {number: 4, title: "", date: "21/05/2026", images:chapterImages()},
            {number: 3, title: "", date: "21/05/2026", images:chapterImages()},
            {number: 2, title: "", date: "20/05/2026", images:chapterImages()},
            {number: 1, title: "", date: "17/05/2026", images:chapterImages()},
        ],
        link: ""

    },

    {
        title: "The Tunnal to Summer, the Exit of Goodbye",
        othertitle: "Natsu e no Tonneru, Sayonara no Deguchi",
        image: "img/theTunnal.jpg",
        author: "Hachimoku Mei",
        year: "2022",
        genre:["Comedy","Tragedy","Supernatural","Slice of life"],
        status: "Hoàn thành",
        rating: 8.5,
        intro: `Tono Kaoru nghe được một tin đồn, rằng quy luật không thời gian chẳng có nghĩa lí gì với đường hầm Urushima cả. Nếu tìm thấy được nó, hãy đi qua và ở phía bên kia đường hầm, bạn sẽ tìm được niềm khao khát sâu thẳm trong tim...và để đổi lấy, bạn sẽ phải trả bằng chính những năm tháng cuộc đời mình.

            Vào cái đêm mà Kaoru tình cờ nhận ra bản thân đang đứng trước con đường hầm đầy đáng ngờ, hệt như trong lời đồn đại kia, cậu nhận ra rằng bản thân đang nghĩ về Karen, người em gái đã mất 5 năm trước vì tai nạn của cậu.

            Ngạc nhiên hơn nữa, học sinh mới chuyển đến Anzu Hanashiro đã bám theo cậu tới đây, và còn hứa rằng sẽ giúp cậu thử nghiệm đường hầm bí ẩn ấy. Nhưng, đổi lại thì cô ấy muốn gì ở Kaoru? Và liệu cậu có còn gì để trả cô không, sau khi bước chân ra khỏi đường hầm kia?`,
        chapters: [
            {number: 2, title: "", date: "20/05/2026", images:chapterImages()},
            {number: 1, title: "", date: "16/05/2026", images:chapterImages()},
        ],
        link: ""

    },

    {
        title: "Shikimori's Not Just a Cutie",
        othertitle:"Kawaii dake ja Nai Shikimori-san",
        image: "img/shikimori.jpg",
        author: "Maki Keigo",
        year: "2019",
        genre: ["Comedy","Romance","Slice of life","School life"],
        status: "Hoàn thành",
        rating: 8.87,
        intro:  `Izumi là một nam sinh trung học bị xui xẻo bẩm sinh.Bạn gái của cậu là một cô bạn cùng lớp tên Shikimori.
        Shikimori rất xinh đẹp, dễ thương và tràn đầy tình yêu, tuy nhiên mỗi khi Izumi gặp rắc rối, cô lại trở thành người bạn gái ngầu nhất trên đời!
        Cuộc sống thường ngày dễ thương và đầy những pha kỳ thú của Shikimori, Izumi và những người bạn sẽ bắt đầu tại đây.`,
        chapters: [
            {number: 5, title: "", date: "29/05/2026", images:chapterImages()},
            {number: 4, title: "", date: "20/05/2026", images:chapterImages()},
            {number: 3, title: "", date: "17/05/2026", images:chapterImages()},
            {number: 2, title: "", date: "16/05/2026", images:chapterImages("shikimori", 2, 6, "png")},
            {number: 1, title: "", date: "14/05/2026", images:chapterImages("shikimori", 1, 9, "jpg")},
        ],
        link: "https://www.youtube.com/playlist?list=PLdM751AKK4aPXPNBecZyWlru3Qe45ggrU"
    },
    
    {
        title: "One Piece",
        othertitle:"One Piece",
        image: "img/onepiece.jpg",
        author:"Oda Eiichiro",
        year: "1997",
        genre: ["Shonen","Fantasy"],
        status: "Đang tiến hành",
        rating: 9,
        intro: `Monkey D. Luffy, chàng trai mang trong mình sức mạnh của Trái Ác Quỷ, lên đường chinh phục Grand Line với giấc mơ trở thành Vua Hải Tặc.
                Cùng với đội thuyền ngày càng đông đảo, mỗi hòn đảo là một cuộc phiêu lưu mới, một kẻ thù mạnh hơn và một bí ẩn lớn hơn đang chờ đợi.`,
        chapters: [
            {number: 9, title: "", date: "17/05/2026", images:chapterImages()},
            {number: 8, title: "", date: "17/05/2026", images:chapterImages()},
            {number: 7, title: "", date: "17/05/2026", images:chapterImages()},
            {number: 6, title: "", date: "17/05/2026", images:chapterImages()},
            {number: 5, title: "", date: "17/05/2026", images:chapterImages()},
            {number: 4, title: "", date: "14/05/2026", images:chapterImages()},
            {number: 3, title: "", date: "13/05/2026", images:chapterImages()},
            {number: 2, title: "", date: "13/05/2026", images:chapterImages()},
            {number: 1, title: "", date: "10/05/2026", images:chapterImages()},
        ],
        link:""
    },
    {
        title: "Grand Blue",
        othertitle: "Guranburu",
        image: "img/grandblue.jpg",
        author: "Kenji Inoue",
        year: "2014",
        genre: ["Comedy","Romance","Slice of life","School life"],
        status: "Đang tiến hành",
        rating: 8.75,
        intro: `Grand Blue xoay quanh Kitahara Iori, một nam sinh vừa đậu vào trường đại học ở thành phố biển xinh đẹp Izu. Những tưởng sẽ được tận hưởng cuộc sống đại học an nhàn, Iori bị buộc phải tham gia một câu lạc bộ bơi lặn, gặp gỡ những cô gái xinh đẹp và những tên “đực rựa” nổi loạn bất kham. Cũng từ đó, cuộc sống mới của Iori chính thức bắt đầu.`,
        chapters: [
             {number: 5, title: "", date: "22/05/2026", images:chapterImages()},
             {number: 4, title: "", date: "17/05/2026", images:chapterImages()},
             {number: 3, title: "", date: "14/05/2026", images:chapterImages()},
             {number: 2, title: "", date: "14/05/2026", images:chapterImages()},
             {number: 1, title: "", date: "13/05/2026", images:chapterImages()},
        ],            
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
        chapters: [   
            {number: 8, title: "", date: "18/05/2026", images:chapterImages()},
            {number: 7, title: "", date: "17/05/2026", images:chapterImages()},
            {number: 6, title: "", date: "16/05/2026", images:chapterImages()},
            {number: 5, title: "", date: "16/05/2026", images:chapterImages()},
            {number: 4, title: "", date: "13/05/2026", images:chapterImages()},
            {number: 3, title: "", date: "13/05/2026", images:chapterImages()},
            {number: 2, title: "", date: "12/05/2026", images:chapterImages()},
            {number: 1, title: "", date: "12/05/2026", images:chapterImages("konosuba", 1, 40)},
        ],
        link: "https://www.youtube.com/playlist?list=PLOVZwvNm10lXlKl2VHXGmpqqygCG6XbPw",
    },
    
];