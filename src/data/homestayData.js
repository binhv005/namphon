export const homestayData = {
  business: {
    name: "NamPhon Homestay - Huế",
    shortName: "NamPhon Homestay",
    tagline: "Một góc nghỉ chân nhẹ nhàng giữa lòng Huế mộng mơ",
    industry: "Du lịch / Lưu trú",
    location: "Huế",
    contactPerson: "Huyền Trang",
    phone: "941821906",
    formattedPhone: "0941 821 906",
    address: "Lô O-SH 12-2 Đường số 9, Khu ĐTM An Cựu, Phường An Cựu, Huế.",
    facebookUrl: "https://www.facebook.com/namphonhomestay.hue",
    googleMapsUrl: "https://maps.app.goo.gl/NMiUvSMYvtUe7ccy6",
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.540134448384!2d107.5956041!3d16.4481068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3141a134812a6773%3A0x8e8eb4ca944d1877!2sKhu%20%C4%91%C3%B4%20th%E1%BB%8B%20m%E1%BB%9Bi%20An%20C%E1%BB%B1u%20City!5e0!3m2!1svi!2svn!4v1700000000000!5m2!1svi!2svn",
    logo: "/logo.jpg"
  },

  hero: {
    title: "NamPhon Homestay Huế",
    subtitle: "Một góc nghỉ chân nhẹ nhàng giữa lòng Huế mộng mơ",
    description: "Boutique homestay mang vẻ đẹp tinh tế, yên tĩnh và đậm chất Huế, phù hợp cho những chuyến nghỉ dưỡng, khám phá văn hóa và foodtour tại Huế.",
    primaryCta: "ĐẶT PHÒNG",
    secondaryCta: "NHẬN TƯ VẤN"
  },

  about: {
    heading: "Đến với NamPhon, bạn sẽ được trải nghiệm",
    description: "Một không gian đậm chất thơ của xứ Huế, nơi lưu giữ những phút giây lắng đọng, thư thái và tràn đầy năng lượng tích cực.",
    features: [
      {
        number: "01",
        title: "Ánh sáng tự nhiên",
        description: 'Không gian ngập tràn ánh sáng tự nhiên, góc nào lên hình cũng chân thực và "thơ".',
        icon: "Sun"
      },
      {
        number: "02",
        title: "Chỗ nghỉ êm ái",
        description: "Chỗ ngả lưng êm ái, tiếp sức sau những chuyến vi vu foodtour miệt mài.",
        icon: "Bed"
      },
      {
        number: "03",
        title: "Cẩm nang bản địa",
        description: 'Cẩm nang ăn chơi "chuẩn người bản địa".',
        icon: "Compass"
      }
    ]
  },

  brandStatement: {
    quote: "🌧️ NamPhon Homestay Huế – một góc nghỉ chân nhẹ nhàng giữa lòng Huế mộng mơ 💙",
    subtext: "Indochine Boutique Luxury • Nơi thanh âm xứ Huế hòa quyện cùng tiện nghi hiện đại"
  },

  // Real room cards mapping to our photo groups p1, p2, p3, p4
  rooms: [
    {
      id: "room-1",
      name: "Phòng Standard Ban Mai",
      category: "Ánh Sáng Tự Nhiên",
      description: "Không gian thoáng đãng đón trọn nắng sớm, thiết kế Indochine nhã nhặn, êm ái cho kỳ nghỉ thư thái.",
      images: [
        "/images/p1/825280027_122136034682737482_3016309913368186797_n.jpg",
        "/images/p1/829156215_122136034604737482_4182560705591538931_n.jpg",
        "/images/p1/831832673_122137340690737482_7081815097302372491_n.jpg"
      ],
      amenities: ["Giường đôi êm ái", "Cửa sổ đón sáng", "Điều hòa 2 chiều", "Wifi tốc độ cao", "Phòng tắm khép kín"],
      guests: "1 - 2 Khách",
      featured: true
    },
    {
      id: "room-2",
      name: "Phòng Deluxe Tinh Tế",
      category: "Boutique Indochine",
      description: "Phòng ngủ ấm cúng mang gam màu xanh rêu và gỗ mộc, góc check-in tuyệt đẹp cho các tín đồ mê chụp ảnh.",
      images: [
        "/images/p2/825340275_122135678042737482_4890250794503948191_n.jpg",
        "/images/p2/825340653_122135678054737482_6003994522418213098_n.jpg",
        "/images/p2/825340729_122135677994737482_876033064516461732_n.jpg",
        "/images/p2/828127939_122135678000737482_7412068789895914994_n.jpg"
      ],
      amenities: ["Giường King Size", "Bàn làm việc / trang điểm", "Máy sấy tóc & ấm đun", "Trà & cà phê Huế", "Vòi sen tắm đứng"],
      guests: "2 Khách",
      featured: true
    },
    {
      id: "room-3",
      name: "Phòng Superior Yên Tĩnh",
      category: "Nghỉ Dưỡng Thư Thái",
      description: "Không gian yên ả tuyệt đối để bạn tái tạo năng lượng sau một ngày dài dạo chơi Cố Đô.",
      images: [
        "/images/p3/795345132_122134153838737482_7034725548551381216_n.jpg",
        "/images/p3/814401023_122134152512737482_4442753540510387119_n.jpg",
        "/images/p3/815065360_122134153904737482_135771476210692152_n.jpg",
        "/images/p3/815974422_122134154252737482_2131857623990049980_n.jpg"
      ],
      amenities: ["Nệm cao cấp chống mỏi", "Tủ quần áo gỗ", "Khăn tắm mềm mại", "Nước suối miễn phí", "Cửa sổ ngắm phố"],
      guests: "2 Khách",
      featured: true
    },
    {
      id: "room-4",
      name: "Phòng Suite Mộng Mơ",
      category: "Cao Cấp Sang Trọng",
      description: "Căn phòng rộng rãi với trọn vẹn tiện nghi sang xịn, phù hợp cho cặp đôi hoặc gia đình nhỏ tìm kiếm sự riêng tư.",
      images: [
        "/images/p4/793947365_122133136142737482_7520221387132017454_n.jpg",
        "/images/p4/800888999_122133135968737482_6441016934055116463_n.jpg",
        "/images/p4/800966071_122133136028737482_1008036471332863108_n.jpg",
        "/images/p4/801885746_122133136016737482_1135786916866590813_n.jpg",
        "/images/p4/802906636_122133136160737482_2942091570019022141_n.jpg"
      ],
      amenities: ["Không gian rộng rãi", "Nội thất cao cấp", "Smart TV giải trí", "Minibar", "Bộ vệ sinh cá nhân cao cấp"],
      guests: "2 - 3 Khách",
      featured: true
    }
  ],

  // Gallery items for lightbox & showcase
  gallery: [
    {
      id: 1,
      category: "Phòng nghỉ",
      src: "/images/p1/825280027_122136034682737482_3016309913368186797_n.jpg",
      title: "Góc phòng ngập tràn ánh nắng tự nhiên"
    },
    {
      id: 2,
      category: "Phòng nghỉ",
      src: "/images/p2/825340275_122135678042737482_4890250794503948191_n.jpg",
      title: "Không gian Indochine ấm cúng và tinh tế"
    },
    {
      id: 3,
      category: "Ánh sáng tự nhiên",
      src: "/images/p1/829156215_122136034604737482_4182560705591538931_n.jpg",
      title: "Ánh sáng chan hòa từng góc nhỏ"
    },
    {
      id: 4,
      category: "Góc decor",
      src: "/images/p2/825340653_122135678054737482_6003994522418213098_n.jpg",
      title: "Chi tiết trang trí gỗ và tranh Indochine"
    },
    {
      id: 5,
      category: "Phòng nghỉ",
      src: "/images/p3/795345132_122134153838737482_7034725548551381216_n.jpg",
      title: "Chỗ ngả lưng êm ái tái tạo năng lượng"
    },
    {
      id: 6,
      category: "Góc decor",
      src: "/images/p3/814401023_122134152512737482_4442753540510387119_n.jpg",
      title: "Nét mộc mạc và thanh lịch xứ Huế"
    },
    {
      id: 7,
      category: "Không gian chung",
      src: "/images/p4/793947365_122133136142737482_7520221387132017454_n.jpg",
      title: "Thiết kế hiện đại chuẩn Boutique"
    },
    {
      id: 8,
      category: "Phòng nghỉ",
      src: "/images/p4/800888999_122133135968737482_6441016934055116463_n.jpg",
      title: "Góc thư giãn riêng tư và tĩnh lặng"
    },
    {
      id: 9,
      category: "Ánh sáng tự nhiên",
      src: "/images/p4/802906636_122133136160737482_2942091570019022141_n.jpg",
      title: "Không gian sống ảo thơ mộng"
    }
  ],

  // Location section data (Strictly adhering to prompt)
  location: {
    heading: "Thuận tiện để khám phá Huế",
    description: "NamPhon Homestay sở hữu vị trí thuận tiện để du khách dễ dàng di chuyển khám phá các danh lam thắng cảnh biểu tượng của Cố đô và cảm nhận trọn vẹn nhịp sống bình dị của người dân bản địa.",
    famousLandmarks: [
      { name: "Cầu Trường Tiền", distance: "2,8 km", time: "~ 6 phút đi xe", desc: "Biểu tượng thơ mộng bắc qua dòng sông Hương" },
      { name: "Cầu Thanh Toàn", distance: "3,2 km", time: "~ 8 phút đi xe", desc: "Cầu ngói cổ kính đậm chất làng quê Huế" },
      { name: "Chùa Từ Đàm", distance: "3,5 km", time: "~ 8 phút đi xe", desc: "Ngôi cổ tự linh thiêng và thanh tịnh" },
      { name: "Cố đô Huế", distance: "3,9 km", time: "~ 10 phút đi xe", desc: "Quần thể di tích lịch sử triều Nguyễn" },
      { name: "Hoàng thành Huế", distance: "4,0 km", time: "~ 10 phút đi xe", desc: "Trái tim di sản văn hóa thế giới" }
    ],
    nearestSpots: [
      { name: "Trung Tâm Tư Vấn & Dịch Vụ Sức Khỏe Sinh Sản", distance: "1,3 km", type: "Y tế & Sức khỏe" },
      { name: "Trung tâm thể thao Thừa Thiên Huế", distance: "1,4 km", type: "Thể thao" },
      { name: "Sân vận động trong nhà trung tâm", distance: "1,4 km", type: "Khu liên hợp" },
      { name: "Chợ địa phương tuyệt vời!", distance: "1,4 km", type: "Chợ ẩm thực & mua sắm" },
      { name: "Bảo tàng Mỹ thuật", distance: "1,5 km", type: "Văn hóa & Nghệ thuật" }
    ]
  },

  // Travel Guide (Cẩm nang ăn chơi Huế) - Section 13
  travelGuide: {
    heading: 'Cẩm nang ăn chơi "chuẩn người bản địa"',
    description: 'NamPhon tổng hợp những gợi ý trải nghiệm Huế đặc sắc nhất để chuyến đi của bạn thêm trọn vẹn và đáng nhớ.',
    categories: [
      {
        id: "food",
        title: "Ăn gì ở Huế?",
        subtitle: "Khám phá thiên đường ẩm thực cung đình & dân dã",
        icon: "Utensils",
        items: [
          { name: "Bún bò Huế chuẩn vị", desc: "Nước dùng thơm nồng mùi sả mắm ruốc đặc trưng Cố Đô", tag: "Must Try" },
          { name: "Bánh bèo - nậm - lọc", desc: "Những chén bánh dẻo thơm, tôm cháy vàng ươm", tag: "Đặc sản" },
          { name: "Cơm hến & bún hến Cồn Hến", desc: "Hương vị cay nồng đậm đà khó quên", tag: "Dân dã" },
          { name: "Chè Huế 20 món", desc: "Từ chè hạt sen long nhãn đến chè bột lọc heo quay", tag: "Tráng miệng" }
        ]
      },
      {
        id: "activities",
        title: "Chơi gì ở Huế?",
        subtitle: "Những trải nghiệm thư thái đậm chất Cố Đô",
        icon: "Sparkles",
        items: [
          { name: "Nghe ca Huế trên sông Hương", desc: "Thả hoa đăng và thưởng thức nhã nhạc về đêm", tag: "Văn hóa" },
          { name: "Dạo phố đi bộ Chu Văn An - Võ Thị Sáu", desc: "Tận hưởng không khí phố Tây sôi động", tag: "Buổi tối" },
          { name: "Đạp xe ngắm hoàng hôn làng cổ", desc: "Bình yên bên bóng tre và dòng sông phẳng lặng", tag: "Nghỉ dưỡng" },
          { name: "Thưởng trà Cung Đình Huế", desc: "Nâng niu vị thảo mộc thanh tao tốt cho sức khỏe", tag: "Thư giãn" }
        ]
      },
      {
        id: "checkin",
        title: "Địa điểm check-in",
        subtitle: "Những góc sống ảo vintage & thơ mộng",
        icon: "Camera",
        items: [
          { name: "Làng hương Thủy Xuân", desc: "Rực rỡ những bó chông hương đủ sắc màu", tag: "Hot trend" },
          { name: "Đồi Vọng Cảnh", desc: "Ngắm trọn khúc cua đẹp nhất của sông Hương", tag: "Ngắm cảnh" },
          { name: "Hồ Thủy Tiên", desc: "Công viên nước bỏ hoang với tượng rồng kỳ bí", tag: "Độc đáo" },
          { name: "Cung An Định", desc: "Kiến trúc giao thoa Á - Âu lộng lẫy", tag: "Kiến trúc" }
        ]
      },
      {
        id: "culture",
        title: "Địa danh văn hóa",
        subtitle: "Dấu ấn vàng son của triều đại phong kiến cuối cùng",
        icon: "Landmark",
        items: [
          { name: "Đại Nội - Hoàng Thành Huế", desc: "Cung điện nguy nga, di sản văn hóa thế giới UNESCO", tag: "Di sản" },
          { name: "Lăng Khải Định & Lăng Tự Đức", desc: "Tuyệt tác kiến trúc lăng tẩm hoàng gia", tag: "Lịch sử" },
          { name: "Chùa Thiên Mụ", desc: "Tháp Phước Duyên soi bóng bên dòng Hương Giang", tag: "Tâm linh" },
          { name: "Trường Quốc Học Huế", desc: "Ngôi trường cổ kính mang sắc đỏ hồng rực rỡ", tag: "Kiến trúc" }
        ]
      },
      {
        id: "experience",
        title: "Kinh nghiệm khám phá Huế",
        subtitle: "Mẹo nhỏ hữu ích từ người bản xứ NamPhon",
        icon: "Lightbulb",
        items: [
          { name: "Thời điểm lý tưởng ghé Huế", desc: "Mùa xuân và hè (tháng 3 đến tháng 8) nắng ráo tuyệt đẹp", tag: "Tips thời tiết" },
          { name: "Phương tiện di chuyển", desc: "Thuê xe máy hoặc trải nghiệm xích lô dạo quanh Thành Nội", tag: "Di chuyển" },
          { name: "Thuê Cổ Phục Huế", desc: "Chụp ảnh lưu niệm với áo Nhật Bình, Ngũ Thân sang trọng", tag: "Gợi ý ảnh" },
          { name: "Mua quà đặc sản", desc: "Mè xửng, trà tim sen, mắm tôm chua, kẹo cau", tag: "Quà tặng" }
        ]
      },
      {
        id: "foodtour",
        title: "Foodtour Huế",
        subtitle: "Lộ trình ăn sập Huế trong 24 giờ",
        icon: "MapPin",
        items: [
          { name: "Sáng: Bún bò mệ Kéo / bà Tuyết", desc: "Ăn kèm chả cua thơm lừng và nước dùng cay cay", tag: "Bữa sáng" },
          { name: "Trưa: Bánh ướt thịt nướng Huyền Anh", desc: "Thịt nướng thơm lừng chấm nước chấm gan mè", tag: "Bữa trưa" },
          { name: "Chiều: Bánh ép Nguyễn Du & Bánh bèo khay", desc: "Món ăn vặt khoái khẩu của giới trẻ xứ Huế", tag: "Ăn vặt" },
          { name: "Tối: Bánh mì Tràng Tiền & Chè Hẻm", desc: "Hương vị đường phố ấm cúng về đêm", tag: "Bữa khuya" }
        ]
      }
    ]
  },

  // Booking & Contact Info
  booking: {
    heading: "Đặt lịch / nhận tư vấn",
    subheading: "Hãy để NamPhon Homestay đồng hành cùng chuyến du lịch Huế đáng nhớ của bạn!",
    contactPerson: "Huyền Trang",
    phone: "941821906",
    formattedPhone: "0941 821 906",
    facebookUrl: "https://www.facebook.com/namphonhomestay.hue",
    googleMapsUrl: "https://maps.app.goo.gl/NMiUvSMYvtUe7ccy6",
    address: "Lô O-SH 12-2 Đường số 9, Khu ĐTM An Cựu, Phường An Cựu, Huế."
  }
};
