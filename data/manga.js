// ==========================================
// ĐOẠN DỮ LIỆU GỐC (DATABASE MÔ PHỎNG)
// ==========================================
    const mangaData = [
    {
        title: "Parasol Alliance",
       othertitle: "Parasol Doumei",
       image: "../img/parasol.jpg",
       author: "Miura Kouji",
       year: "2020",
       genre: ["One shot"],
       status: "Hoàn thành",
       rating: 9.1,
       intro: ``,
       chapter: [],
       link: ""
    },
    {
       title: "The Pet Girl of Sakurasou",
       othertitle: "Sakura-sō no Pet na Kanojo",
       image: "../img/sakura.jpg",
       author: "Kamoshida Hajime",
       year: "2013",
       genre: ["Comedy","Romance","Slice of life"],
       status: "Hoàn Thành",
       rating: 8.6,
       intro: ``,
       chapter: [],
       link: ""
    },
   
    {
       title: "Lúc đó, tôi đã chuyển sinh thành Slime",
       othertitle: "Tensei-shitara Suraimu datta Ken",
       image: "../img/slime.jpg",
       author: "Fuse",
       year: "2016",
       genre: ["Isekai","Action","Comdey"],
       status: "Đang tiến hành",
       rating: 9.3,
       intro: ``,
       chapter: [],
       link: ""
    },
 
    {
       title: "Chuunibyou demo koi ga shitai",
       othertitle: "Hội chứng tuổi dậy thì",
       image: "../img/chuunibyou.jpg",
       author: "Torako",
       year: "2012",
       genre: ["Comedy","Romance","Slice of life","Supernatural"],
       status: "Hoàn Thành",
       rating: 9.45,
       intro: ``,
       chapter: [],
       link: ""
    },

    {
        
       title: "Naruto Shippuden",
       othertitle: "Naruto",
       image: "../img/naruto.jpg",
       author: "Kishimoto Masashi.",
       year: "2007",
       genre: ["Action", "Shounen"],
       status: "Hoàn Thành",
       rating: 9,
       intro: ``,
       chapter: [],
       link: ""


    },
    
    {
        title: "Plunderer",
        othertitle: "Purandara",
        image: "../img/plundere.jpg",
        author: "Minazuki Suu",
        year: "2020",
        genre: ["Action", "Comedy"],
        status: "Hoàn Thành",
        rating: 8.36,
        intro: ``,
        chapter: [],
        link: ""
    },
    {
        title: "Hige o Soru",
        othertitle: "Higehiro: After Being Rejected, I Shaved and Took in a High School Runaway",
        image: "../img/hige.jpg",
        author: "Shimesaba",
        year: "2018",
        genre: ["Comedy", "Slice of life"],
        status: "Hoàn thành",
        rating: 8.52,
        intro: ``,
        chapter: [],
        link: ""

    },
    {
        title: "Tamako love story",
        othertitle: "Tamako rabusutōrī",
        image: "../img/tamako.jpg",
        author: "Mutsuki Ichinose",
        year: "2014",
        genre: ["comedy", "Slice of life"],
        status: "Hoàn thành",
        rating: 8.43,
        intro: ``,
        chapter: [],
        link: ""
    },
    {
        title: "Thất nghiệp chuyển sinh",
        othertitle: "Mushoku Tensei ",
        image: "../img/mushoku.jpg",
        author: "Rifujin na Magonote",
        year: "2014",
        genre: ["Adventure"],
        status: "Đang tiến hành",
        rating: 9.2,
        intro: ``,
        chapters: [],
        link: ""

    },
    
    {
        title: "Assassination Classroom",
        othertitle: "Ansatsu Kyōshitsu",
        image: "../img/classassin.jpg",
        author: "Matsui Yūsei",
        year: "2012",
        genre: ["Action"],
        status: "Hoàn thành",
        rating: 9,
        intro:``,
        chapters: [],
        link:""
    },
    
    {
        title: "The Day I Became a God",
        othertitle: "Kamisama ni Natta Hi",
        image: "../img/kami.jpg",
        author: "Maeda Jun",
        year: "2020",
        genre: ["Slice of life"],
        status: "Hoàn thành",
        rating: 8.3,
        intro: `Narukami Youta, một nam sinh chuẩn bị thi đại học, bất ngờ gặp được một cô bé tự do là thần linh toàn tri tên Hina — 
                người tuyên bố thế giới sẽ diệt vong trong 30 ngày. vui vẻ bên nhau.`,
        chapters: [],
        link: "",

    },
    {
        title: "Seraph of the End: Vampire Reign",
        othertitle: "Owari no seraph",
        image: "../img/owari.jpg",
        author: "Kagami Takaya",
        year: "2012",
        genre: ["Action"],
        status: "Đang tiến hành",
        rating: 8.5,
        intro: `Một loại Virus xuất hiện trên Trái đất và giết hết tất cả những người bị nhiễm có tuổi trên 13. 
                Cùng lúc đó, ma cà rồng xuất hiện từ lòng đất sâu thẳm và biến loài người thành nô lệ. Nhân vật chính Hyakuya Yuuichirou là một trẻ mồ côi, bị ma cà rồng xem như loài vật cho chúng hút máu. 
                Dù bị giam cầm, nhưng cậu có hoài bão lớn, khao khát có ngày giết hết toàn bộ ma cà rồng.`,
        chapters: [],
        link: "",
        


    },    
    
    {
        title: "Kem Đá",
        othertitle: "Hyouka",
        image:"../img/hyouka.jpg",
        author: "Honobu Yonezawa",
        year: "2012",
        genre: ["Slice of life"],
        status: "Đang tiến hành",
        rating: 8.7,
        intro: "",
        chapter: [],
        link: "",
       

    },
    {
         title: "Is This a Zombie?",
        othertitle: "Kore wa Zonbi desu ka?",
        image: "../img/Zombie.jpg",
        author:"Shinichi Kimura",
        year:"2010",
        genre:["Comedy"],
        status: "Hoàn thành",
        rating: 8,
        intro:"",
        chapters :[],
        link: "",
        
    },
    {
        title: "A Bridge to the Starry Skies",
        othertitle:"Hoshizora E kakuru",
        image: "../img/hoshizora.jpg",
        author:" Feng",
        year: "2010",
        genre: ["Comedy"],
        status: "Hoàn thành",
        rating: 7.5,
        intro:"",
        chapters: [],
        link: "",
        

    },
    {
        title: "Akame ga Kill",
        othertitle: "Akame ga Kiru",
        image: "../img/Akamegakill1.jpg",
        author: "Takahiro",
        year: "20/3/2010",
        genre: ["Dark Fantasy", "Action"],
        status: "Hoàn thành",
        rating: "9.25",
        intro:`Tatsumi, một chàng trai trẻ từ vùng quê nghèo, gia nhập tổ chức ám sát bí mật Night Raid với mong muốn thay đổi đế chế thối nát. 
               Hành trình của cậu là những trận chiến đẫm máu, những mất mát đau lòng và câu hỏi liệu cái ác có thể bị tiêu diệt bằng cái ác hay không.`,
        chapters: [],
        link: ""
    },
    {
        title: "Date a Live",
        othertitle: "Dēto A Raibu",
        image: "../img/datealive.jpg",
        author: "Tachibana Kōshi",
        year: "2011",
        genre: ["Harem","Comedy","Fantasy"],
        status: "Hoàn thành",
        rating: 8.2,
        intro: "",
        chapters: [],
        link: ""
    },
    {
        title:"Song Tinh Diệt Quỷ Sư",
        othertitle: "Sōsei no Onmyōji",
        image: "../img/onmyoji.jpg",
        author: "Yoshiaki Sukeno",
        year: "2013",
        genre: ["Adventure","Comedy","Supernatural"],
        status: "Hoàn thành",
        rating: 8.8,
        intro: "",
        chapter: [],
        link: ""
    },
    {
        title: "Fly Me to The Moon",
        othertitle: "Tonikaku Kawaii",
        image: "../img/tonikaku.jpg",
        author: "Hata Kenjiro",
        year:"14/2/2018,",
        genre:["Comedy"],
        status:"Đang tiến hành",
        rating: 8.4,
        intro: "",
        chapter: [],
        link: ""

    },
    {
        title:"The Angel Next Door Spoils Me Rotten",
        othertitle: "Otonari no Tenshi-sama ni Itsu no Ma ni ka Dame Ningen ni Sareteita Ken",
        image:"../img/tenshi.jpg",
        author:"Saekisan",
        year:"2018",
        genre: ["Comedy"],
        status: "Đang tiến hành",
        rating: 9,
        intro: `Amane, một nam sinh bình thường, tình cờ giúp đỡ Mahiru — cô gái được cả trường gọi là "thiên thần" — trong một đêm mưa. 
                Từ đó, cô hàng xóm hoàn hảo bỗng dưng xuất hiện mỗi ngày để nấu ăn và chăm sóc cậu...`,
        chapters: [],
        link: "https://www.youtube.com/playlist?list=PLxSscENEp7JiAoaxImun4H_FRDkFI9k3Q"



    },
    {
        title: "The Tunnal to Summer, the Exit of Goodbye",
        othertitle: "Natsu e no Tonneru, Sayonara no Deguchi",
        image: "../img/theTunnal.jpg",
        author: "Hachimoku Mei",
        year: "2022",
        genre:["Comedy"],
        status: "Hoàn thành",
        rating: 8.5,
        intro: "",
        chapters: [],
        link: ""

    },
    {
        title: "Josee, the Tiger and the Fish",
        othertitle:"Joze to Tora to Sakana-tachi",
        image: "../img/josee.jpg",
        author: "Seiko Tanabe",
        year: "2020",
        genre:["Comedy"],
        status: "Hoàn thành",
        rating: 9.1,
        intro:`Tsuneo, sinh viên đại học đam mê lặn biển, tình cờ gặp Josee — cô gái ngồi xe lăn với tính cách gai góc nhưng tâm hồn đầy màu sắc. 
                Hai người dần kéo nhau ra khỏi vỏ bọc của chính mình và cùng nhau theo đuổi những ước mơ tưởng chừng không thể.`,
        chapter: [],
        link: ""
    },

    {
        title: "Shikimori's Not Just a Cutie",
        othertitle:"Kawaii dake ja Nai Shikimori-san",
        image: "../img/shikimori.jpg",
        author: "Maki Keigo",
        year: "2019",
        genre: ["Comedy"],
        status: "Hoàn thành",
        rating: 8.87,
        intro:  `Izumi là một nam sinh trung học bị xui xẻo bẩm sinh.Bạn gái của cậu là một cô bạn cùng lớp tên Shikimori.
        Shikimori rất xinh đẹp, dễ thương và tràn đầy tình yêu, tuy nhiên mỗi khi Izumi gặp rắc rối, cô lại trở thành người bạn gái ngầu nhất trên đời!
        Cuộc sống thường ngày dễ thương và đầy những pha kỳ thú của Shikimori, Izumi và những người bạn sẽ bắt đầu tại đây.`,
        chapters: [],
        link: "https://www.youtube.com/playlist?list=PLdM751AKK4aPXPNBecZyWlru3Qe45ggrU"
    },
    
    {
        title: "One Piece",
        othertitle:"One Piece",
        image: "../img/onepiece.jpg",
        author:"Oda Eiichiro",
        year: "1997",
        genre: ["Shonen"],
        status: "Đang tiến hành",
        rating: 9,
        intro: `Monkey D. Luffy, chàng trai mang trong mình sức mạnh của Trái Ác Quỷ, lên đường chinh phục Grand Line với giấc mơ trở thành Vua Hải Tặc.
                Cùng với đội thuyền ngày càng đông đảo, mỗi hòn đảo là một cuộc phiêu lưu mới, một kẻ thù mạnh hơn và một bí ẩn lớn hơn đang chờ đợi.`,
        chapters: [],
        link:""


    },
    {
        title: "Grand Blue",
        othertitle: "Guranburu",
        image: "../img/grandblue.jpg",
        author: "Kenji Inoue",
        year: "2014",
        genre: ["Comedy"],
        status: "Đang tiến hành",
        rating: 8.75,
        intro: "",
        chapters: [],            
         link: ""

    },

    /// KonoSuba: Gods Blessing on this Wonderful World!
    {
        title: "KonoSuba: Gods Blessing on this Wonderful World!",
        othertitle:"Kono subarashii sekai ni shukufuku o!",
        image: "../img/konosuba.jpg",
        author: "Natsume Akatsuki",
        year: "2013",
        genre: ["Adventure", "Action", "Comedy"],
        status: "Đang tiến hành",
        rating: 9.37,
        intro: "Satou Kazuma, một hikikomori đam mê trò chơi, Nhưng cuộc sống ngắn ngủi của anh kết thúc vì tai nạn giao thông lãng xẹt ... Nhưng khi anh ta tỉnh dậy, một cô gái xinh đẹp, người tự gọi mình là một nữ thần đã ở phía trước đôi mắt anh ấy và đưa anh ấy đến một thế giới khác, Khi sang thế giới mới, cậu gặp ngày càng nhiều mấy cô nàng không điên thì cũng tâm thần, riết rồi cậu muốn quay trở về thế giới cũ càng nhanh càng tốt...",
        review: ["peak isekai, mấy con gà biết gì:))"],
        chapters: [
            {number: 66, title: "", date: "26/05/2026", link: ""},
            {number: 65, title: "", date: "26/05/2026", link: ""},
            {number: 64, title: "", date: "26/05/2026", link: ""},
            {number: 63, title: "", date: "26/05/2026", link: ""},
            {number: 62, title: "", date: "26/05/2026", link: ""},
            {number: 61, title: "", date: "26/05/2026", link: ""},
            {number: 60, title: "", date: "26/05/2026", link: ""},
            {number: 59, title: "", date: "26/05/2026", link: ""},
            {number: 58, title: "", date: "26/05/2026", link: ""},
            {number: 56, title: "", date: "26/05/2026", link: ""},
            {number: 55, title: "", date: "26/05/2026", link: ""},
            {number: 54, title: "", date: "26/05/2026", link: ""},
            {number: 53, title: "", date: "26/05/2026", link: ""},
            {number: 52, title: "", date: "26/05/2026", link: ""},
            {number: 51, title: "", date: "26/05/2026", link: ""},
            {number: 50, title: "", date: "26/05/2026", link: ""},
            {number: 49, title: "", date: "26/05/2026", link: ""},
            {number: 48, title: "", date: "26/05/2026", link: ""},
            {number: 47, title: "", date: "26/05/2026", link: ""},
            {number: 46, title: "", date: "26/05/2026", link: ""},
            {number: 45, title: "", date: "26/05/2026", link: ""},
            {number: 44, title: "", date: "26/05/2026", link: ""},
            {number: 43, title: "", date: "26/05/2026", link: ""},
            {number: 42, title: "", date: "26/05/2026", link: ""},
            {number: 41, title: "", date: "26/05/2026", link: ""},
            {number: 40, title: "", date: "26/05/2026", link: ""},
            {number: 39, title: "", date: "26/05/2026", link: ""},
            {number: 38, title: "", date: "26/05/2026", link: ""},
            {number: 37, title: "", date: "26/05/2026", link: ""},
            {number: 36, title: "", date: "26/05/2026", link: ""},
            {number: 35, title: "", date: "26/05/2026", link: ""},
            {number: 34, title: "", date: "26/05/2026", link: ""},
            {number: 33, title: "", date: "26/05/2026", link: ""},
            {number: 32, title: "", date: "26/05/2026", link: ""},
            {number: 31, title: "", date: "26/05/2026", link: ""},
            {number: 30, title: "", date: "26/05/2026", link: ""},
            {number: 29, title: "", date: "26/05/2026", link: ""},
            {number: 28, title: "", date: "26/05/2026", link: ""},
            {number: 27, title: "", date: "26/05/2026", link: ""},
            {number: 26, title: "", date: "26/05/2026", link: ""},
            {number: 25, title: "", date: "26/05/2026", link: ""},
            {number: 24, title: "", date: "26/05/2026", link: ""},
            {number: 23, title: "", date: "26/05/2026", link: ""},
            {number: 22, title: "", date: "26/05/2026", link: ""},
            {number: 21, title: "", date: "26/05/2026", link: ""},
            {number: 20, title: "", date: "26/05/2026", link: ""},
            {number: 19, title: "", date: "26/05/2026", link: ""},
            {number: 18, title: "", date: "26/05/2026", link: ""},
            {number: 17, title: "", date: "26/05/2026", link: ""},
            {number: 16, title: "", date: "26/05/2026", link: ""},
            {number: 15, title: "", date: "26/05/2026", link: ""},
            {number: 14, title: "", date: "26/05/2026", link: ""},
            {number: 13, title: "", date: "26/05/2026", link: ""},
            {number: 12, title: "", date: "26/05/2026", link: ""},
            {number: 11, title: "", date: "26/05/2026", link: ""},
            {number: 10, title: "", date: "26/05/2026", link: ""},
            {number: 9, title: "", date: "26/05/2026", link: ""},
            {number: 8, title: "", date: "26/05/2026", link: ""},
            {number: 7, title: "", date: "26/05/2026", link: ""},
            {number: 6, title: "", date: "26/05/2026", link: ""},
            {number: 5, title: "", date: "26/05/2026", link: ""},
            {number: 4, title: "", date: "26/05/2026", link: ""},
            {number: 3, title: "", date: "26/05/2026", link: ""},
            {number: 2, title: "May There be Joy for this Beautiful Expert!", date: "26/05/2026", link: "https://mangadex.org/chapter/8cd29957-f734-4ba7-be06-6c1ab2b329f1"},
            {number: 1, title: "May I Go to a New World with this Self-Proclaimed Goddess!", date: "26/05/2026", link: "https://mangadex.org/chapter/9d5246d2-f7e1-4149-8576-202bf8ba0584"},
            
          
        ],
        link: "https://www.youtube.com/playlist?list=PLOVZwvNm10lXlKl2VHXGmpqqygCG6XbPw",
        
    },
    
    
];