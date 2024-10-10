export const products = [
  {
    id: 1,
    name: "YouTube Premium",
    description: "Xem video không quảng cáo, tải xuống và phát trong nền",
    fullDescription:
      "YouTube Premium cung cấp trải nghiệm xem video tuyệt vời không bị gián đoạn bởi quảng cáo. Bạn có thể tải xuống video để xem offline và phát nhạc trong nền khi sử dụng các ứng dụng khác.",
    options: [
      { duration: "1 tháng", price: 50000 },
      { duration: "6 tháng", price: 270000 },
      { duration: "12 tháng", price: 500000 },
    ],
    image: "../public/images/yt.png",
  },
  {
    id: 2,
    name: "Spotify Premium",
    description: "Nghe nhạc không quảng cáo, tải xuống và chất lượng cao",
    fullDescription:
      "Spotify Premium cho phép bạn thưởng thức âm nhạc với chất lượng cao nhất, không bị gián đoạn bởi quảng cáo. Bạn có thể tải nhạc để nghe offline và tận hưởng nhiều tính năng độc quyền.",
    options: [
      { duration: "1 tháng", price: 40000 },
      { duration: "6 tháng", price: 220000 },
      { duration: "12 tháng", price: 400000 },
    ],
    image: "../public/images/spotify.png",
  },
  {
    id: 3,
    name: "Netflix Premium",
    description: "Xem phim và series TV không giới hạn",
    fullDescription:
      "Netflix Premium mang đến cho bạn kho phim, series TV, và nội dung độc quyền khổng lồ. Bạn có thể xem trên nhiều thiết bị cùng lúc với chất lượng 4K Ultra HD.",
    options: [
      { duration: "1 tháng", price: 180000 },
      { duration: "6 tháng", price: 1000000 },
      { duration: "12 tháng", price: 1800000 },
    ],
    image: "../public/images/netflix.png",
  },
  {
    id: 4,
    name: "Office 365",
    description:
      "Nâng cấp Microsoft 365 Family - OneDrive 1TB mail chính chủ (1 user), fullDescription: Tối đa 1TB dung lượng lưu trữ đám mây OneDrive cho tài khoản, riêng tư tuyệt đối, thành viên khác không thể xem dữ liệu của bạn Mỗi người có thể sử dụng cùng lúc trên 5 thiết bị ",

    options: [
      { duration: "1 tháng", price: 180000 },
      { duration: "6 tháng", price: 1000000 },
      { duration: "12 tháng", price: 1800000 },
    ],
    image: "../public/images/365.png",
  },
];
