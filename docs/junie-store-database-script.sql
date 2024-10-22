CREATE DATABASE [JunieStore]
GO
USE [JunieStore]
GO
/****** Object:  Table [dbo].[__EFMigrationsHistory]    Script Date: 5/6/2023 7:20:39 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[__EFMigrationsHistory](
	[MigrationId] [nvarchar](150) NOT NULL,
	[ProductVersion] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY CLUSTERED 
(
	[MigrationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Collections]    Script Date: 5/6/2023 7:20:39 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Collections](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Title] [nvarchar](64) NOT NULL,
	[Description] [nvarchar](512) NOT NULL,
	[Slug] [nvarchar](64) NOT NULL,
	[ImagePath] [nvarchar](512) NOT NULL,
 CONSTRAINT [PK_Collections] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Discounts]    Script Date: 5/6/2023 7:20:39 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Discounts](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Code] [nvarchar](64) NOT NULL,
	[Value] [real] NOT NULL,
	[MinPrice] [float] NOT NULL,
	[Quantity] [int] NULL,
	[ExpiryDate] [datetime] NULL,
	[IsActive] [bit] NOT NULL,
 CONSTRAINT [PK_Discounts] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Images]    Script Date: 5/6/2023 7:20:39 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Images](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[ProductId] [int] NOT NULL,
	[Path] [nvarchar](512) NOT NULL,
 CONSTRAINT [PK_Images] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[OrderProducts]    Script Date: 5/6/2023 7:20:39 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[OrderProducts](
	[OrderId] [int] NOT NULL,
	[ProductId] [int] NOT NULL,
	[Quantity] [int] NOT NULL,
	[Price] [float] NOT NULL,
 CONSTRAINT [PK_OrderProducts] PRIMARY KEY CLUSTERED 
(
	[OrderId] ASC,
	[ProductId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Orders]    Script Date: 5/6/2023 7:20:39 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Orders](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[OrderDate] [datetime] NOT NULL,
	[PhoneNumber] [nvarchar](16) NOT NULL,
	[Email] [nvarchar](64) NULL,
	[Name] [nvarchar](64) NOT NULL,
	[Address] [nvarchar](512) NOT NULL,
	[AddressDescription] [nvarchar](512) NULL,
	[Notes] [nvarchar](1024) NULL,
	[TotalPrice] [float] NOT NULL,
	[IsFreeDelivery] [bit] NOT NULL,
	[IsConfirmed] [bit] NOT NULL,
	[DiscountId] [int] NULL,
 CONSTRAINT [PK_Orders] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Products]    Script Date: 5/6/2023 7:20:39 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Products](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](128) NOT NULL,
	[Slug] [nvarchar](128) NOT NULL,
	[Price] [float] NOT NULL,
	[Discount] [real] NOT NULL,
	[Quantity] [int] NOT NULL,
	[Type] [nvarchar](64) NOT NULL,
	[TotalSold] [int] NOT NULL,
	[Ratings] [int] NULL,
	[Description] [nvarchar](max) NOT NULL,
	[UserManual] [nvarchar](max) NOT NULL,
	[IsActive] [bit] NOT NULL,
	[CollectionId] [int] NOT NULL,
 CONSTRAINT [PK_Products] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20230505113846_Init', N'7.0.4')
GO
SET IDENTITY_INSERT [dbo].[Collections] ON 

INSERT [dbo].[Collections] ([Id], [Title], [Description], [Slug], [ImagePath]) VALUES (1, N'Bông Tai Nữ', N'Bông tai là phụ kiện thời trang không thể thiếu của những cô nàng dễ thương. Hãy tô điểm cho bản thân với bộ sưu tập đa dạng những khuyên tai nữ cá tính của Junie.', N'earrings', N'/assets/images/collections/earrings/earrings.jpg')
INSERT [dbo].[Collections] ([Id], [Title], [Description], [Slug], [ImagePath]) VALUES (2, N'Dây Chuyền Nữ', N'Chọn dây chuyền nàng yêu, làm những điều nàng thích', N'necklace', N'/assets/images/collections/necklace/necklace.jpg')
INSERT [dbo].[Collections] ([Id], [Title], [Description], [Slug], [ImagePath]) VALUES (3, N'Vòng Tay Nữ', N'Lắc tay xinh xắn, thể hiện chất riêng', N'bracelet', N'/assets/images/collections/bracelet/bracelet.jpg')
INSERT [dbo].[Collections] ([Id], [Title], [Description], [Slug], [ImagePath]) VALUES (4, N'Nhẫn nữ', N'Đeo nhẫn bạc, ngại gì tỏa sáng!', N'ring', N'/assets/images/collections/ring/ring.jpg')
INSERT [dbo].[Collections] ([Id], [Title], [Description], [Slug], [ImagePath]) VALUES (5, N'Bán chạy', N'Luôn luôn bị thúc đẩy bởi niềm đam mê!', N'best-selling', N'/assets/images/collections/best-selling/best-selling.jpg')
INSERT [dbo].[Collections] ([Id], [Title], [Description], [Slug], [ImagePath]) VALUES (6, N'Sản phẩm mới', N'Được tạo ra bằng tình yêu với thiết kế và chất lượng sản phẩm tốt.', N'new-in', N'/assets/images/collections/new-in/new-in.jpg')
INSERT [dbo].[Collections] ([Id], [Title], [Description], [Slug], [ImagePath]) VALUES (7, N'Sale Off', N'Khám phá tất cả bộ sưu tập!', N'sale-outlet', N'/assets/images/collections/sale-outlet/sale-outlet.jpg')
SET IDENTITY_INSERT [dbo].[Collections] OFF
GO
SET IDENTITY_INSERT [dbo].[Discounts] ON 

INSERT [dbo].[Discounts] ([Id], [Code], [Value], [MinPrice], [Quantity], [ExpiryDate], [IsActive]) VALUES (1, N'FREE_DELIVER_FEE', 30000, 250000, NULL, NULL, 1)
SET IDENTITY_INSERT [dbo].[Discounts] OFF
GO
SET IDENTITY_INSERT [dbo].[Images] ON 

INSERT [dbo].[Images] ([Id], [ProductId], [Path]) VALUES (1, 1, N'uploads/images/jane-01.jpg')
INSERT [dbo].[Images] ([Id], [ProductId], [Path]) VALUES (2, 1, N'uploads/images/jane-02.jpg')
INSERT [dbo].[Images] ([Id], [ProductId], [Path]) VALUES (3, 2, N'uploads/images/lumi-01.jpg')
INSERT [dbo].[Images] ([Id], [ProductId], [Path]) VALUES (4, 2, N'uploads/images/lumi-02.jpg')
INSERT [dbo].[Images] ([Id], [ProductId], [Path]) VALUES (5, 3, N'uploads/images/lela-01.jpg')
INSERT [dbo].[Images] ([Id], [ProductId], [Path]) VALUES (6, 3, N'uploads/images/lela-02.jpg')
INSERT [dbo].[Images] ([Id], [ProductId], [Path]) VALUES (7, 4, N'uploads/images/gracie-01.jpg')
INSERT [dbo].[Images] ([Id], [ProductId], [Path]) VALUES (8, 4, N'uploads/images/gracie-02.jpg')
INSERT [dbo].[Images] ([Id], [ProductId], [Path]) VALUES (9, 5, N'uploads/images/macy-01.jpg')
INSERT [dbo].[Images] ([Id], [ProductId], [Path]) VALUES (10, 5, N'uploads/images/macy-02.jpg')
INSERT [dbo].[Images] ([Id], [ProductId], [Path]) VALUES (11, 6, N'uploads/images/lily-01.jpg')
INSERT [dbo].[Images] ([Id], [ProductId], [Path]) VALUES (12, 6, N'uploads/images/lily-02.jpg')
INSERT [dbo].[Images] ([Id], [ProductId], [Path]) VALUES (13, 7, N'uploads/images/raya-01.jpg')
INSERT [dbo].[Images] ([Id], [ProductId], [Path]) VALUES (14, 7, N'uploads/images/raya-02.jpg')
INSERT [dbo].[Images] ([Id], [ProductId], [Path]) VALUES (15, 8, N'uploads/images/abby-01.jpg')
INSERT [dbo].[Images] ([Id], [ProductId], [Path]) VALUES (16, 8, N'uploads/images/abby-02.jpg')
INSERT [dbo].[Images] ([Id], [ProductId], [Path]) VALUES (17, 9, N'uploads/images/jenna-01.jpg')
INSERT [dbo].[Images] ([Id], [ProductId], [Path]) VALUES (18, 9, N'uploads/images/jenna-02.jpg')
INSERT [dbo].[Images] ([Id], [ProductId], [Path]) VALUES (19, 10, N'uploads/images/claire-01.jpg')
INSERT [dbo].[Images] ([Id], [ProductId], [Path]) VALUES (20, 10, N'uploads/images/claire-02.jpg')
INSERT [dbo].[Images] ([Id], [ProductId], [Path]) VALUES (21, 11, N'uploads/images/sunny-01.jpg')
INSERT [dbo].[Images] ([Id], [ProductId], [Path]) VALUES (22, 11, N'uploads/images/sunny-02.jpg')
INSERT [dbo].[Images] ([Id], [ProductId], [Path]) VALUES (23, 12, N'uploads/images/lena-01.jpg')
INSERT [dbo].[Images] ([Id], [ProductId], [Path]) VALUES (24, 12, N'uploads/images/lena-02.jpg')
INSERT [dbo].[Images] ([Id], [ProductId], [Path]) VALUES (25, 13, N'uploads/images/crossy-01.jpg')
INSERT [dbo].[Images] ([Id], [ProductId], [Path]) VALUES (26, 13, N'uploads/images/crossy-02.jpg')
INSERT [dbo].[Images] ([Id], [ProductId], [Path]) VALUES (27, 14, N'uploads/images/leaf-01.jpg')
INSERT [dbo].[Images] ([Id], [ProductId], [Path]) VALUES (28, 14, N'uploads/images/leaf-02.jpg')
INSERT [dbo].[Images] ([Id], [ProductId], [Path]) VALUES (29, 15, N'uploads/images/charlotte-01.jpg')
INSERT [dbo].[Images] ([Id], [ProductId], [Path]) VALUES (30, 15, N'uploads/images/charlotte-02.jpg')
INSERT [dbo].[Images] ([Id], [ProductId], [Path]) VALUES (31, 16, N'uploads/images/sense-01.jpg')
INSERT [dbo].[Images] ([Id], [ProductId], [Path]) VALUES (32, 16, N'uploads/images/sense-02.jpg')
INSERT [dbo].[Images] ([Id], [ProductId], [Path]) VALUES (44, 17, N'uploads/images/d71c626f64284a35b8710050d20057e8.jpg')
INSERT [dbo].[Images] ([Id], [ProductId], [Path]) VALUES (45, 17, N'uploads/images/2921080df6834c55a6c7a250cacd79b1.jpg')
INSERT [dbo].[Images] ([Id], [ProductId], [Path]) VALUES (46, 17, N'uploads/images/39b57acc085b4f5b86c37fc7d283aa81.jpg')
INSERT [dbo].[Images] ([Id], [ProductId], [Path]) VALUES (47, 17, N'uploads/images/d971fd33114142749e65b892b375ae0d.jpg')
INSERT [dbo].[Images] ([Id], [ProductId], [Path]) VALUES (48, 17, N'uploads/images/2a1f5762e37246af85147acc0f953428.jpg')
INSERT [dbo].[Images] ([Id], [ProductId], [Path]) VALUES (54, 18, N'uploads/images/b70cfcba1fd6436785c7803c52e607e1.jpg')
INSERT [dbo].[Images] ([Id], [ProductId], [Path]) VALUES (55, 18, N'uploads/images/c1ce03e7b8074b5ead009f4ffff42c0d.jpg')
INSERT [dbo].[Images] ([Id], [ProductId], [Path]) VALUES (56, 18, N'uploads/images/fe77db40f793428285cf1778424791af.jpg')
INSERT [dbo].[Images] ([Id], [ProductId], [Path]) VALUES (57, 18, N'uploads/images/7c5849f64c264ed8974c7ff2c86501a8.jpg')
INSERT [dbo].[Images] ([Id], [ProductId], [Path]) VALUES (58, 18, N'uploads/images/0594c2693c444ddea387fee5bdded5a2.jpg')
INSERT [dbo].[Images] ([Id], [ProductId], [Path]) VALUES (59, 19, N'uploads/images/ece77d8d90ba4e41bd87779370862798.jpg')
INSERT [dbo].[Images] ([Id], [ProductId], [Path]) VALUES (60, 19, N'uploads/images/132a0d08732e42f582cc034dbabf6401.jpg')
INSERT [dbo].[Images] ([Id], [ProductId], [Path]) VALUES (61, 19, N'uploads/images/8af1948385094eb8a7170c9daaac1c1f.jpg')
INSERT [dbo].[Images] ([Id], [ProductId], [Path]) VALUES (62, 19, N'uploads/images/011f66fb18f54fde8595c537f16a7359.jpg')
INSERT [dbo].[Images] ([Id], [ProductId], [Path]) VALUES (63, 19, N'uploads/images/775b970d6b604c638d3dd204f2d078b5.jpg')
INSERT [dbo].[Images] ([Id], [ProductId], [Path]) VALUES (64, 19, N'uploads/images/cec6c8117c584cdf90f9cdf7817a9afa.jpg')
INSERT [dbo].[Images] ([Id], [ProductId], [Path]) VALUES (65, 19, N'uploads/images/e88ef7082ccb4bc2b155fcd29a2f36cd.jpg')
INSERT [dbo].[Images] ([Id], [ProductId], [Path]) VALUES (66, 20, N'uploads/images/4753ba5b2d784554a4cbb8b78da064e3.jpg')
INSERT [dbo].[Images] ([Id], [ProductId], [Path]) VALUES (67, 20, N'uploads/images/bbe64078960e43d493d785193251b274.jpg')
INSERT [dbo].[Images] ([Id], [ProductId], [Path]) VALUES (68, 20, N'uploads/images/a6e13071f5f74461b280185e07387d69.jpg')
INSERT [dbo].[Images] ([Id], [ProductId], [Path]) VALUES (69, 20, N'uploads/images/a33a78f298444b6eac109c7e8aeb8803.jpg')
INSERT [dbo].[Images] ([Id], [ProductId], [Path]) VALUES (70, 20, N'uploads/images/cb513c87e5b64c9ea5ed12c01892be86.jpg')
INSERT [dbo].[Images] ([Id], [ProductId], [Path]) VALUES (71, 20, N'uploads/images/3ca35beec1fd4461bbc027761ed66617.jpg')
INSERT [dbo].[Images] ([Id], [ProductId], [Path]) VALUES (72, 21, N'uploads/images/2b8eaef94a884e319f0e2e1910fed6da.jpg')
INSERT [dbo].[Images] ([Id], [ProductId], [Path]) VALUES (73, 21, N'uploads/images/3365713e41394df09e182c47e9624842.jpg')
INSERT [dbo].[Images] ([Id], [ProductId], [Path]) VALUES (74, 21, N'uploads/images/86b05ed53a624566bda412a0008cbf68.jpg')
INSERT [dbo].[Images] ([Id], [ProductId], [Path]) VALUES (75, 21, N'uploads/images/e75a8b510bff428ba8099201c58df252.jpg')
INSERT [dbo].[Images] ([Id], [ProductId], [Path]) VALUES (76, 21, N'uploads/images/797cfd29a6e54f0fba4a8aabe9ff118f.jpg')
INSERT [dbo].[Images] ([Id], [ProductId], [Path]) VALUES (77, 22, N'uploads/images/79d67b5bd6e34c27929df653102eb22b.jpg')
INSERT [dbo].[Images] ([Id], [ProductId], [Path]) VALUES (78, 22, N'uploads/images/03b8a1031f58498e95514a0c300be3dc.jpg')
INSERT [dbo].[Images] ([Id], [ProductId], [Path]) VALUES (79, 22, N'uploads/images/4e06a0d51b6149f58e02b8cfd2855bb1.jpg')
INSERT [dbo].[Images] ([Id], [ProductId], [Path]) VALUES (80, 22, N'uploads/images/f7fcd63dd62c44349a5d28da03d43ed6.jpg')
INSERT [dbo].[Images] ([Id], [ProductId], [Path]) VALUES (81, 22, N'uploads/images/c7b29a142b364cc6b52967829f8d4505.jpg')
INSERT [dbo].[Images] ([Id], [ProductId], [Path]) VALUES (88, 24, N'uploads/images/397144fc3e7241e8bd0f635d67ea56d4.jpg')
INSERT [dbo].[Images] ([Id], [ProductId], [Path]) VALUES (89, 24, N'uploads/images/265f856c2a8c40c69d76e99f0c57cb35.jpg')
INSERT [dbo].[Images] ([Id], [ProductId], [Path]) VALUES (90, 24, N'uploads/images/2c1ffed9e03c41679a732cecbde08675.jpg')
INSERT [dbo].[Images] ([Id], [ProductId], [Path]) VALUES (91, 24, N'uploads/images/694ffff80737427381fbac092e151160.jpg')
INSERT [dbo].[Images] ([Id], [ProductId], [Path]) VALUES (92, 24, N'uploads/images/3f1239b46ac74fe993c148582d5aaf7e.jpg')
INSERT [dbo].[Images] ([Id], [ProductId], [Path]) VALUES (105, 23, N'uploads/images/8ffc48611a8e4f42b3a38b7bd3fb6c2c.jpg')
INSERT [dbo].[Images] ([Id], [ProductId], [Path]) VALUES (106, 23, N'uploads/images/6b9b8955697649afac65de59bc190645.jpg')
INSERT [dbo].[Images] ([Id], [ProductId], [Path]) VALUES (107, 23, N'uploads/images/59dad65831414a4780f206465af0f39c.jpg')
INSERT [dbo].[Images] ([Id], [ProductId], [Path]) VALUES (108, 23, N'uploads/images/49bd799801914a3aa0a7e4b46d864861.jpg')
INSERT [dbo].[Images] ([Id], [ProductId], [Path]) VALUES (109, 23, N'uploads/images/77d4eb7cf53842bfa4689abef0fb3eda.jpg')
INSERT [dbo].[Images] ([Id], [ProductId], [Path]) VALUES (110, 23, N'uploads/images/9983caf37bc2494a837b86515365796a.jpg')
INSERT [dbo].[Images] ([Id], [ProductId], [Path]) VALUES (111, 25, N'uploads/images/406a89793e364be6be2a740c8b59868a.jpg')
INSERT [dbo].[Images] ([Id], [ProductId], [Path]) VALUES (112, 25, N'uploads/images/48f986eaaaf34c72944862c4bb9d91a8.jpg')
INSERT [dbo].[Images] ([Id], [ProductId], [Path]) VALUES (113, 25, N'uploads/images/3cfc044c0dcd43c28c866f948b103266.jpg')
INSERT [dbo].[Images] ([Id], [ProductId], [Path]) VALUES (114, 25, N'uploads/images/72626c57309d416ba5fd333d81d53f8a.jpg')
INSERT [dbo].[Images] ([Id], [ProductId], [Path]) VALUES (115, 25, N'uploads/images/f60851fd77a6499e9303899da43d2b14.jpg')
INSERT [dbo].[Images] ([Id], [ProductId], [Path]) VALUES (116, 25, N'uploads/images/2cd3ff4569d445eeb6ae8a641ad14e9f.jpg')
INSERT [dbo].[Images] ([Id], [ProductId], [Path]) VALUES (117, 26, N'uploads/images/ad69bd8d59094ff1be3c3fa2003636f2.jpg')
INSERT [dbo].[Images] ([Id], [ProductId], [Path]) VALUES (118, 26, N'uploads/images/0d97c3ef666d4441b73a9021f27a8bea.jpg')
INSERT [dbo].[Images] ([Id], [ProductId], [Path]) VALUES (119, 26, N'uploads/images/396389d38f714a3d9be683c946ec022e.jpg')
INSERT [dbo].[Images] ([Id], [ProductId], [Path]) VALUES (120, 26, N'uploads/images/5adf9c9ceb814265a750fae14d93e84d.jpg')
INSERT [dbo].[Images] ([Id], [ProductId], [Path]) VALUES (121, 26, N'uploads/images/979a6d16e9dc4bb1b7ae0d96c339d334.jpg')
INSERT [dbo].[Images] ([Id], [ProductId], [Path]) VALUES (122, 26, N'uploads/images/3deca1b1079d4e4184396dfc95b6aa6d.jpg')
INSERT [dbo].[Images] ([Id], [ProductId], [Path]) VALUES (123, 27, N'uploads/images/e853db6cf4f84814bb7ca8792eaafc32.jpg')
INSERT [dbo].[Images] ([Id], [ProductId], [Path]) VALUES (124, 27, N'uploads/images/88fb3d74107945f6b8b9344321a576b6.jpg')
INSERT [dbo].[Images] ([Id], [ProductId], [Path]) VALUES (125, 27, N'uploads/images/0a34802559ee44448e35db84b80dfee6.jpg')
INSERT [dbo].[Images] ([Id], [ProductId], [Path]) VALUES (126, 27, N'uploads/images/3a4182ea46304c8c8fd1963b21a574db.jpg')
INSERT [dbo].[Images] ([Id], [ProductId], [Path]) VALUES (127, 27, N'uploads/images/3925937fd8404a229fbd6786bff81f29.jpg')
INSERT [dbo].[Images] ([Id], [ProductId], [Path]) VALUES (128, 28, N'uploads/images/1c42f7bcccc04562871d910ee1a69956.jpg')
INSERT [dbo].[Images] ([Id], [ProductId], [Path]) VALUES (129, 28, N'uploads/images/894df85ad79744429c3a6633bad00db1.jpg')
INSERT [dbo].[Images] ([Id], [ProductId], [Path]) VALUES (130, 28, N'uploads/images/e07873427c7f431d9d39aaa6373c0fcc.jpg')
INSERT [dbo].[Images] ([Id], [ProductId], [Path]) VALUES (131, 28, N'uploads/images/a6c0303b01e14298a7832bc243787789.jpg')
INSERT [dbo].[Images] ([Id], [ProductId], [Path]) VALUES (132, 28, N'uploads/images/c3460b4e78d14f558e3f1a0935ba289c.jpg')
INSERT [dbo].[Images] ([Id], [ProductId], [Path]) VALUES (133, 29, N'uploads/images/c358cb8b10f74450af541149013b160a.jpg')
GO
INSERT [dbo].[Images] ([Id], [ProductId], [Path]) VALUES (134, 29, N'uploads/images/07d2e8bf0fec47d6b39b5baa6a59adce.jpg')
INSERT [dbo].[Images] ([Id], [ProductId], [Path]) VALUES (135, 29, N'uploads/images/a85e68af33f74b81bb82bd9cb5d6a163.jpg')
INSERT [dbo].[Images] ([Id], [ProductId], [Path]) VALUES (136, 29, N'uploads/images/6f8a00ff53f74c0f81061a50fdf37d20.jpg')
INSERT [dbo].[Images] ([Id], [ProductId], [Path]) VALUES (137, 29, N'uploads/images/62316fd77d44415b8ba4c8ce667ab08e.jpg')
INSERT [dbo].[Images] ([Id], [ProductId], [Path]) VALUES (150, 30, N'uploads/images/6f879183352e474bb3a7278e48cdb073.jpg')
INSERT [dbo].[Images] ([Id], [ProductId], [Path]) VALUES (151, 30, N'uploads/images/d4f1a43fc80b49639a258a6bc16da23c.jpg')
INSERT [dbo].[Images] ([Id], [ProductId], [Path]) VALUES (152, 30, N'uploads/images/6ea7616c1c294b16a209ca6569202ad2.jpg')
INSERT [dbo].[Images] ([Id], [ProductId], [Path]) VALUES (153, 30, N'uploads/images/7e4824fe09d7450e9b2e15a13107f720.jpg')
INSERT [dbo].[Images] ([Id], [ProductId], [Path]) VALUES (154, 30, N'uploads/images/6ed0ccf8ffc54daaa494cfb4c755a512.jpg')
INSERT [dbo].[Images] ([Id], [ProductId], [Path]) VALUES (155, 30, N'uploads/images/e279cb9b34d542e9833c32bc694c7c3f.jpg')
INSERT [dbo].[Images] ([Id], [ProductId], [Path]) VALUES (156, 31, N'uploads/images/fdcb315cdfce4a7d8e1768bd6286dab2.jpg')
INSERT [dbo].[Images] ([Id], [ProductId], [Path]) VALUES (157, 31, N'uploads/images/1fc0164447c44a098a2fb09ed613a449.jpg')
INSERT [dbo].[Images] ([Id], [ProductId], [Path]) VALUES (158, 31, N'uploads/images/db6c3df640374e2bac8ea3f39c3027b4.jpg')
INSERT [dbo].[Images] ([Id], [ProductId], [Path]) VALUES (159, 31, N'uploads/images/c190d7de6846461082ec75dd45dac400.jpg')
INSERT [dbo].[Images] ([Id], [ProductId], [Path]) VALUES (160, 31, N'uploads/images/4a02751e33ac469c9ee1ba4fce3a8ca7.jpg')
INSERT [dbo].[Images] ([Id], [ProductId], [Path]) VALUES (191, 32, N'uploads/images/016380e4533c402d8d600bd3830674d4.jpg')
INSERT [dbo].[Images] ([Id], [ProductId], [Path]) VALUES (192, 32, N'uploads/images/79ef8a97b8474c918d6551fa64917da6.jpg')
INSERT [dbo].[Images] ([Id], [ProductId], [Path]) VALUES (193, 32, N'uploads/images/6e57add23ba7470fafa63368e72a9736.jpg')
INSERT [dbo].[Images] ([Id], [ProductId], [Path]) VALUES (194, 32, N'uploads/images/c290f212c43146808ec7f2db76bd7b63.jpg')
INSERT [dbo].[Images] ([Id], [ProductId], [Path]) VALUES (195, 32, N'uploads/images/0a78c4aa9dab47c9aa8517358b5e322f.jpg')
SET IDENTITY_INSERT [dbo].[Images] OFF
GO
INSERT [dbo].[OrderProducts] ([OrderId], [ProductId], [Quantity], [Price]) VALUES (1, 29, 2, 240000)
GO
SET IDENTITY_INSERT [dbo].[Orders] ON 

INSERT [dbo].[Orders] ([Id], [OrderDate], [PhoneNumber], [Email], [Name], [Address], [AddressDescription], [Notes], [TotalPrice], [IsFreeDelivery], [IsConfirmed], [DiscountId]) VALUES (1, CAST(N'2023-05-06T16:22:55.357' AS DateTime), N'0792815452', N'', N'Du Phong Linh', N'Dalat, Vietnam', N'', N'', 480000, 1, 0, NULL)
SET IDENTITY_INSERT [dbo].[Orders] OFF
GO
SET IDENTITY_INSERT [dbo].[Products] ON 

INSERT [dbo].[Products] ([Id], [Name], [Slug], [Price], [Discount], [Quantity], [Type], [TotalSold], [Ratings], [Description], [UserManual], [IsActive], [CollectionId]) VALUES (1, N'Bông tai Jane', N'bong-tai-jane', 230000, 0, 50, N'E-JANE-RG', 0, 76, N'Bông tai Jane đính ngọc trai nước ngọt, mang đến vẻ đẹp cao quý, trong sáng và thánh thiện. Sản phẩm được nhiều phái đẹp yêu thích là do nó vừa mang sự nhẹ nhàng, thanh nhã, nữ tính vừa mang nét mạnh mẽ, kiêu kỳ.
Bông tai Jane sẽ tôn vinh vẻ đẹp thân thiện, dịu dàng, từ đó dễ dàng lấy được thiện cảm từ những người xung quanh cho các cô gái.', N'Được làm từ những chất liệu cao cấp và bền bỉ nhưng do đặc tính cơ bản của chất liệu, Junie khuyến khích khách hàng nên tuân theo các nguyên tắc bảo quản trang sức nói chung.
Nên tháo trang sức ra trước khi tiếp xúc với bất kỳ môi trường ẩm hoặc ma sát mạnh (vd: rửa tay, đi ngủ, tắm rửa,...) để đảm bảo và duy trì độ bóng của sản phẩm cũng như kéo dài tuổi thọ của sản phẩm.', 1, 1)
INSERT [dbo].[Products] ([Id], [Name], [Slug], [Price], [Discount], [Quantity], [Type], [TotalSold], [Ratings], [Description], [UserManual], [IsActive], [CollectionId]) VALUES (2, N'Bông tai Lumi', N'bong-tai-lumi', 195000, 0, 50, N'E-LUMI-RG', 0, 0, N'Thêm chút phong cách trang nhã cho đôi tai của bạn với đôi bông tai ôm sát đầy tinh tế của Junie.
Bông taI Lumi được chế tác tỉ mỉ từ bạc 925 cao cấp, phủ một lớp dày vàng 14K, kết hợp với đá Cubic Zirconia lấp lánh tạo nên một thiết kế hoàn mỹ, là điểm nhấn duyên dáng trên vành tai nhỏ xinh của nàng.
Thiết kế đơn giản, nhưng không kém phần tinh tế để nàng có thể kết hợp cùng nhiều loại trang phục trong các dịp khác nhau như đi làm, đi chơi, thậm chí cả những bữa tiệc nhẹ nhàng.', N'Được làm từ những chất liệu cao cấp và bền bỉ nhưng do đặc tính cơ bản của chất liệu, Junie khuyến khích khách hàng nên tuân theo các nguyên tắc bảo quản trang sức nói chung.
Nên tháo trang sức ra trước khi tiếp xúc với bất kỳ môi trường ẩm hoặc ma sát mạnh (vd: rửa tay, đi ngủ, tắm rửa,...) để đảm bảo và duy trì độ bóng của sản phẩm cũng như kéo dài tuổi thọ của sản phẩm.', 1, 1)
INSERT [dbo].[Products] ([Id], [Name], [Slug], [Price], [Discount], [Quantity], [Type], [TotalSold], [Ratings], [Description], [UserManual], [IsActive], [CollectionId]) VALUES (3, N'Bông tai Lela', N'bong-tai-lela', 175000, 0, 50, N'E-LELA', 0, 2, N'Thêm chút phong cách trang nhã cho đôi tai của bạn với đôi bông tai ôm sát đầy tinh tế của Junie.
Bông taI Lumi được chế tác tỉ mỉ từ bạc 925 cao cấp, phủ một lớp dày vàng 14K, kết hợp với đá Cubic Zirconia lấp lánh tạo nên một thiết kế hoàn mỹ, là điểm nhấn duyên dáng trên vành tai nhỏ xinh của nàng.
Thiết kế đơn giản, nhưng không kém phần tinh tế để nàng có thể kết hợp cùng nhiều loại trang phục trong các dịp khác nhau như đi làm, đi chơi, thậm chí cả những bữa tiệc nhẹ nhàng.', N'Được làm từ những chất liệu cao cấp và bền bỉ nhưng do đặc tính cơ bản của chất liệu, Junie khuyến khích khách hàng nên tuân theo các nguyên tắc bảo quản trang sức nói chung.
Nên tháo trang sức ra trước khi tiếp xúc với bất kỳ môi trường ẩm hoặc ma sát mạnh (vd: rửa tay, đi ngủ, tắm rửa,...) để đảm bảo và duy trì độ bóng của sản phẩm cũng như kéo dài tuổi thọ của sản phẩm.', 1, 1)
INSERT [dbo].[Products] ([Id], [Name], [Slug], [Price], [Discount], [Quantity], [Type], [TotalSold], [Ratings], [Description], [UserManual], [IsActive], [CollectionId]) VALUES (4, N'Bông tai Gracie', N'bong-tai-gracie', 220000, 0, 50, N'E-GRACIE', 0, 0, N'Nếu nàng đang tìm kiếm một mẫu khuyên tai lấp lánh để hợp với chiếc đầm dạ hội trong bữa tiệc tối nay những lại đủ nhẹ nhàng để đi chơi, cafe cùng hội bạn dịp cuối tuần, thì Gracie chính là mẫu bông tai ngọc trai bạn đang tìm kiếm.
Chế tác trên nền bạc S925 (Sterling Silver) phủ một lớp vàng 14K sang trọng, bền bỉ khiến cho Gracie sẽ trở thành trợ thủ đắc lực của nàng mỗi ngày. Điểm nhấn là thiết kế dài/ngắn làm nên sự khác biệt cùng ngọc trai nước ngọt lấp lánh mang lại vẻ đẹp hoàn hảo nhưng rất dịu dàng.', N'Được làm từ những chất liệu cao cấp và bền bỉ nhưng do đặc tính cơ bản của chất liệu, Junie khuyến khích khách hàng nên tuân theo các nguyên tắc bảo quản trang sức nói chung.
Nên tháo trang sức ra trước khi tiếp xúc với bất kỳ môi trường ẩm hoặc ma sát mạnh (vd: rửa tay, đi ngủ, tắm rửa,...) để đảm bảo và duy trì độ bóng của sản phẩm cũng như kéo dài tuổi thọ của sản phẩm.', 1, 1)
INSERT [dbo].[Products] ([Id], [Name], [Slug], [Price], [Discount], [Quantity], [Type], [TotalSold], [Ratings], [Description], [UserManual], [IsActive], [CollectionId]) VALUES (5, N'Dây chuyền Macy', N'day-chuyen-macy', 280000, 0, 50, N'N-MACY', 0, 0, N'Chuỗi hạt ngọc trai mini này làm tăng nét cổ điển cho chiếc vòng cổ với một chút lấp lánh tinh tế trên mặt dây chuyền làm từ đá Cubic Zirconia.
Bộ dây chuyền layer này là sản phẩm mới nhất trong bộ sưu tập ngọc trai của Junie, mang đến cho nàng một lựa chọn hoàn hảo trong bất kỳ dịp nào cần sự nhẹ nhàng và dịu dàng như đi dự tiệc, hay đi chơi cùng bạn bè cuối tuần.
Hay, nếu bạn đang muốn tìm một mẫu vòng cổ ngọc trai mặc áo dài thì đây chắc chắn là một lựa chọn không thể bỏ qua.', N'Được làm từ những chất liệu cao cấp và bền bỉ nhưng do đặc tính cơ bản của chất liệu, Junie khuyến khích khách hàng nên tuân theo các nguyên tắc bảo quản trang sức nói chung.
Nên tháo trang sức ra trước khi tiếp xúc với bất kỳ môi trường ẩm hoặc ma sát mạnh (vd: rửa tay, đi ngủ, tắm rửa,...) để đảm bảo và duy trì độ bóng của sản phẩm cũng như kéo dài tuổi thọ của sản phẩm.', 1, 2)
INSERT [dbo].[Products] ([Id], [Name], [Slug], [Price], [Discount], [Quantity], [Type], [TotalSold], [Ratings], [Description], [UserManual], [IsActive], [CollectionId]) VALUES (6, N'Dây chuyền Lily', N'day-chuyen-lily', 280000, 0, 50, N'N-LILY', 0, 2, N'Cỏ bốn lá mang ý nghĩa may mắn đến cho người đeo, không chỉ dừng lại ở đó, Junie đã tiến thêm một bước nữa với thiết kế hai kiểu dáng đeo. Nàng có thể lựa chọn dáng đeo 4 hình trái tim hoặc ghép lại thành hình cỏ 4 lá may mắn.
Với chất liệu hợp kim Titan vô cùng bền màu và cao cấp sau đó được dát vàng 14K sang trọng, tạo nên vẻ bề ngoài lấp lánh.', N'Được làm từ những chất liệu cao cấp và bền bỉ nhưng do đặc tính cơ bản của chất liệu, Junie khuyến khích khách hàng nên tuân theo các nguyên tắc bảo quản trang sức nói chung.
Nên tháo trang sức ra trước khi tiếp xúc với bất kỳ môi trường ẩm hoặc ma sát mạnh (vd: rửa tay, đi ngủ, tắm rửa,...) để đảm bảo và duy trì độ bóng của sản phẩm cũng như kéo dài tuổi thọ của sản phẩm.', 1, 2)
INSERT [dbo].[Products] ([Id], [Name], [Slug], [Price], [Discount], [Quantity], [Type], [TotalSold], [Ratings], [Description], [UserManual], [IsActive], [CollectionId]) VALUES (7, N'Dây chuyền Raya', N'day-chuyen-raya', 350000, 0, 50, N'N-RAYA', 0, 0, N'Nằm trong bộ sưu tập ngọc trai nước ngọt của nhà Junie, mẫu dây chuyền Raya đã trở thành một món trang sức gây ấn tượng với thiết kế đơn giản, khiêm tốn nhưng ẩn chứa vẻ đẹp dịu dàng, sang trọng.
Viên ngọc trai sáng bóng treo dưới một nút thắt vàng lấp lánh tựa như ánh hoàng hôn rơi xuống những ngọn núi. Raya mang tới vẻ đẹp cuốn hút, kì diệu và đầy bí ẩn đến cho những cô nàng của Junie.
Điều đặc biệt ở dây chuyền Raya là có một thiết kế vừa đủ: không quá cầu kỳ - nàng có thể yên tâm phối với bộ cánh nhẹ nhàng xuống phố; nhưng cũng đủ diễm lệ cho những sự kiện quan trọng.', N'Được làm từ những chất liệu cao cấp và bền bỉ nhưng do đặc tính cơ bản của chất liệu, Junie khuyến khích khách hàng nên tuân theo các nguyên tắc bảo quản trang sức nói chung.
Nên tháo trang sức ra trước khi tiếp xúc với bất kỳ môi trường ẩm hoặc ma sát mạnh (vd: rửa tay, đi ngủ, tắm rửa,...) để đảm bảo và duy trì độ bóng của sản phẩm cũng như kéo dài tuổi thọ của sản phẩm.', 1, 2)
INSERT [dbo].[Products] ([Id], [Name], [Slug], [Price], [Discount], [Quantity], [Type], [TotalSold], [Ratings], [Description], [UserManual], [IsActive], [CollectionId]) VALUES (8, N'Dây chuyền Abby', N'day-chuyen-abby', 340000, 0, 50, N'N-ABBY', 0, 0, N'Mặt dây chuyền hình trái tim luôn là món trang sức được các cô gái yêu chiều, một điểm nhấn nhỏ xinh nhưng khiến nàng trở nên thật dịu dàng và đáng yêu.
Chiếc vòng cổ quyến rũ hình trái tim này chế tác từ chất liệu Bạc 925 phủ vàng 14K cao cấp và có một hạt charm hình trái tim bằng xà cừ độc đáo.
Junie gợi ý nàng có thể kết hợp chiếc vòng cổ này với một bông tai làm từ chất liệu tương tự hoặc họa tiết hình trái tim để tạo nên một bộ sưu tập hoàn hảo, giúp nàng tỏa sáng như ánh bình minh trên biển.', N'Được làm từ những chất liệu cao cấp và bền bỉ nhưng do đặc tính cơ bản của chất liệu, Junie khuyến khích khách hàng nên tuân theo các nguyên tắc bảo quản trang sức nói chung.
Nên tháo trang sức ra trước khi tiếp xúc với bất kỳ môi trường ẩm hoặc ma sát mạnh (vd: rửa tay, đi ngủ, tắm rửa,...) để đảm bảo và duy trì độ bóng của sản phẩm cũng như kéo dài tuổi thọ của sản phẩm.', 1, 2)
INSERT [dbo].[Products] ([Id], [Name], [Slug], [Price], [Discount], [Quantity], [Type], [TotalSold], [Ratings], [Description], [UserManual], [IsActive], [CollectionId]) VALUES (9, N'Vòng tay Jenna', N'vong-tay-jenna', 230000, 0, 50, N'B-JENNA', 0, 0, N'Sản phẩm lắc tay Jenna siêu đẹp này được chế tác từ bạc 925 phủ một lớp dày vàng 14K sang trọng. Nổi bật với thiết kế đính đá Cubic Zirconia để tăng thêm vẻ quyến rũ tinh tế cho mọi dịp từ đi làm văn phòng đến những đêm dạ hội.
Hoàn hảo nhất khi đeo kết hợp dạng layer với những mẫu lắc tay khác tại Junie nhưng cũng không kém phần xinh đẹp khi đeo một mình. Lắc tay Jenna luôn là phụ kiện thời trang không thể thiếu của nàng khi muốn nổi bật cá tính riêng.', N'Được làm từ những chất liệu cao cấp và bền bỉ nhưng do đặc tính cơ bản của chất liệu, Junie khuyến khích khách hàng nên tuân theo các nguyên tắc bảo quản trang sức nói chung.
Nên tháo trang sức ra trước khi tiếp xúc với bất kỳ môi trường ẩm hoặc ma sát mạnh (vd: rửa tay, đi ngủ, tắm rửa,...) để đảm bảo và duy trì độ bóng của sản phẩm cũng như kéo dài tuổi thọ của sản phẩm.', 1, 3)
INSERT [dbo].[Products] ([Id], [Name], [Slug], [Price], [Discount], [Quantity], [Type], [TotalSold], [Ratings], [Description], [UserManual], [IsActive], [CollectionId]) VALUES (10, N'Vòng tay Claire', N'vong-tay-claire', 260000, 0, 50, N'B-CLAIRE', 0, 0, N'Lấp lánh những hình trái tim bé xinh, vòng tay Claire dễ dàng trở thành một điểm nhấn mỏng manh tuyệt đẹp tôn lên cổ tay thanh mảnh của nàng.
Tình yêu luôn là nguồn cảm hứng bất tận của nghệ thuật. Dựa trên nguồn cảm hứng đó, Junie mang đến cho nàng mẫu vòng tay Claire với tạo hình những trái tim nhỏ bé được khảm bởi những viên đá CZ lấp lánh như kim cương - đẹp mơ mộng như chuyện tình của nàng Juliet.
Với mẫu vòng tay này, nàng có thể thoải mái kết hợp với nhiều loại trang phục khác nhau từ đi học, đi làm hay đi chơi…', N'Được làm từ những chất liệu cao cấp và bền bỉ nhưng do đặc tính cơ bản của chất liệu, Junie khuyến khích khách hàng nên tuân theo các nguyên tắc bảo quản trang sức nói chung.
Nên tháo trang sức ra trước khi tiếp xúc với bất kỳ môi trường ẩm hoặc ma sát mạnh (vd: rửa tay, đi ngủ, tắm rửa,...) để đảm bảo và duy trì độ bóng của sản phẩm cũng như kéo dài tuổi thọ của sản phẩm.', 1, 3)
INSERT [dbo].[Products] ([Id], [Name], [Slug], [Price], [Discount], [Quantity], [Type], [TotalSold], [Ratings], [Description], [UserManual], [IsActive], [CollectionId]) VALUES (11, N'Vòng tay Sunny', N'vong-tay-sunny', 280000, 0, 50, N'B-SUNNY', 0, 3, N'Toả sáng rực rỡ như một bông hồng dưới ánh mặt trời, vòng tay Sunny dễ dàng trở thành một điểm nhấn tuyệt đẹp tôn lên cổ tay thanh mảnh của cô gái đeo nó.
Thật không sai khi so sánh phụ nữ như những bông hoa, đều cần được chở che, chăm sóc, nâng niu thì mới càng nở rộ và trở nên xinh đẹp.
Dựa trên nguồn cảm hứng đó, Junie mang đến cho nàng mẫu vòng tay Sunny với tạo hình bông hồng được khảm bởi những viên đá CZ lấp lánh như kim cương - như một phiên bản thu nhỏ của chính nàng.', N'Được làm từ những chất liệu cao cấp và bền bỉ nhưng do đặc tính cơ bản của chất liệu, Junie khuyến khích khách hàng nên tuân theo các nguyên tắc bảo quản trang sức nói chung.
Nên tháo trang sức ra trước khi tiếp xúc với bất kỳ môi trường ẩm hoặc ma sát mạnh (vd: rửa tay, đi ngủ, tắm rửa,...) để đảm bảo và duy trì độ bóng của sản phẩm cũng như kéo dài tuổi thọ của sản phẩm.', 1, 3)
INSERT [dbo].[Products] ([Id], [Name], [Slug], [Price], [Discount], [Quantity], [Type], [TotalSold], [Ratings], [Description], [UserManual], [IsActive], [CollectionId]) VALUES (12, N'Vòng tay Lena', N'vong-tay-lena', 175000, 0, 50, N'B-LENA', 0, 0, N'Chiếc lắc tay Lena trang nhã này với thiết kế các vòng tròn lồng vào nhau được chế tác bằng hợp kim Titan và được nhúng vào vàng 18k sang trọng.
Có thể điều chỉnh độ dài với trọng lượng nhẹ, vòng đeo tay hình tròn lồng vào nhau Lena có một vòng với lớp bề mặt mịn và vòng thứ hai có thiết kế xoắn tinh tế đính đá Zirconia, làm cho nó trở thành một món đồ trang sức tinh tế vượt thời gian.', N'Được làm từ những chất liệu cao cấp và bền bỉ nhưng do đặc tính cơ bản của chất liệu, Junie khuyến khích khách hàng nên tuân theo các nguyên tắc bảo quản trang sức nói chung.
Nên tháo trang sức ra trước khi tiếp xúc với bất kỳ môi trường ẩm hoặc ma sát mạnh (vd: rửa tay, đi ngủ, tắm rửa,...) để đảm bảo và duy trì độ bóng của sản phẩm cũng như kéo dài tuổi thọ của sản phẩm.', 1, 3)
INSERT [dbo].[Products] ([Id], [Name], [Slug], [Price], [Discount], [Quantity], [Type], [TotalSold], [Ratings], [Description], [UserManual], [IsActive], [CollectionId]) VALUES (13, N'Nhẫn Crossy', N'nhan-crossy', 210000, 0, 50, N'R_CROSSY', 0, 0, N'Nhẫn Crossy được xem là mảnh ghép hoàn hảo tạo nên vẻ đẹp đầy nữ tính và sang trọng cho nàng tự tin toả sáng.
Được chế tác bằng chất liệu bạc cao cấp 925 nhập khẩu, đính đá Cubic Zirconia có độ cứng hoàn hảo và lấp lánh như kim cương. Kết hợp với những đường nét uốn lượn mềm mại của biểu tượng Infinity (∞) hay còn gọi là “vô cực”. Giúp tạo điểm nhấn ấn tượng và nổi bật cho trang phục của nàng.
Biểu tượng Infinity là sự không giới hạn, vĩnh cửu mà các nhà thiết kế của Junie thổi hồn vào trang sức như để thể hiện những khát khao yêu thương, niềm tin vào một tình yêu chân thành.', N'Được làm từ những chất liệu cao cấp và bền bỉ nhưng do đặc tính cơ bản của chất liệu, Junie khuyến khích khách hàng nên tuân theo các nguyên tắc bảo quản trang sức nói chung.
Nên tháo trang sức ra trước khi tiếp xúc với bất kỳ môi trường ẩm hoặc ma sát mạnh (vd: rửa tay, đi ngủ, tắm rửa,...) để đảm bảo và duy trì độ bóng của sản phẩm cũng như kéo dài tuổi thọ của sản phẩm.', 1, 4)
INSERT [dbo].[Products] ([Id], [Name], [Slug], [Price], [Discount], [Quantity], [Type], [TotalSold], [Ratings], [Description], [UserManual], [IsActive], [CollectionId]) VALUES (14, N'Nhẫn Leaf', N'nhan-leaf', 195000, 0, 50, N'R-LEAF', 0, 0, N'Chiếc lá dịu dàng gợi nhớ đến mùa thu bình yên, thơ mộng và lãng mạn, nhẫn Leaf sẽ làm tôn lên nét đẹp yêu kiều, uyển chuyển của các cô gái trong mọi khoảnh khắc.
Những chiếc lá mong manh nhưng bền bỉ, đơn thuần nhưng thiết yếu, tràn đầy sức sống không mệt mỏi. Và Junie mong rằng, mỗi người đều có một tình yêu như vậy, có thể không vồn vã lãng mạn nhưng đôi bên đều hiểu rằng thuộc về nhau là điều đương nhiên.
Nhẫn Leaf là một món quà thích hợp để tặng người yêu hoặc nàng có thể tặng cho chính bản thân mình.', N'Được làm từ những chất liệu cao cấp và bền bỉ nhưng do đặc tính cơ bản của chất liệu, Junie khuyến khích khách hàng nên tuân theo các nguyên tắc bảo quản trang sức nói chung.
Nên tháo trang sức ra trước khi tiếp xúc với bất kỳ môi trường ẩm hoặc ma sát mạnh (vd: rửa tay, đi ngủ, tắm rửa,...) để đảm bảo và duy trì độ bóng của sản phẩm cũng như kéo dài tuổi thọ của sản phẩm.', 1, 4)
INSERT [dbo].[Products] ([Id], [Name], [Slug], [Price], [Discount], [Quantity], [Type], [TotalSold], [Ratings], [Description], [UserManual], [IsActive], [CollectionId]) VALUES (15, N'Nhẫn Charlotte', N'nhan-charlotte', 230000, 0, 50, N'R-CHARLOTTE', 0, 0, N'Tinh tế, duyên dáng những vẫn sang trọng là những điều mà chúng ta sẽ cảm nhận được khi đeo trên mình các trang sức làm từ ngọc trai. Ẩn chứa trong mỗi viên ngọc trai đều là một vẻ đẹp đầy sự thu hút, mà càng nhìn lại càng thấy yêu hơn.
Lần đầu tiên cho ra mắt sản phẩm về nhẫn, Junie ưu ái mang tới sự kết hợp từ ngọc trai nước ngọt nhỏ nhắn nhưng không kém phần nổi bật và những viên đá Cubic Zirconia lấp lánh kiêu sa.
Một chiếc nhẫn nhỏ xinh mà bạn có thể diện vào bất cứ lúc nào, bất cứ ở nơi đâu và bất cứ khi bạn muốn lựa chọn vẻ xinh đẹp riêng phù hợp với chính mình.', N'Được làm từ những chất liệu cao cấp và bền bỉ nhưng do đặc tính cơ bản của chất liệu, Junie khuyến khích khách hàng nên tuân theo các nguyên tắc bảo quản trang sức nói chung.
Nên tháo trang sức ra trước khi tiếp xúc với bất kỳ môi trường ẩm hoặc ma sát mạnh (vd: rửa tay, đi ngủ, tắm rửa,...) để đảm bảo và duy trì độ bóng của sản phẩm cũng như kéo dài tuổi thọ của sản phẩm.', 1, 4)
INSERT [dbo].[Products] ([Id], [Name], [Slug], [Price], [Discount], [Quantity], [Type], [TotalSold], [Ratings], [Description], [UserManual], [IsActive], [CollectionId]) VALUES (16, N'Nhẫn Sense', N'nhan-sense', 210000, 0, 50, N'R-SENSE', 0, 0, N'Đây chắc chắn là một món phụ kiện must-have dành cho những cô nàng theo đuổi phong cách trẻ trung, ngọt ngào.
Tạo hình giống như sợi ruy băng trắng tinh, thuần khiết nhẹ nhàng quấn lấy ngón tay nàng, nhẫn Sense giúp cho nàng trở nên dễ thương, xinh đẹp và “đính kèm” chút mơ mộng, dịu dàng.
Nhẫn Sense dễ dàng kết hợp với những bộ trang phục từ trong sáng, ngây thơ đến ngọt ngào, quyến rũ, hay từ đơn giản, nhẹ nhàng cho đến những bộ đồ sang trọng, lung linh.', N'Được làm từ những chất liệu cao cấp và bền bỉ nhưng do đặc tính cơ bản của chất liệu, Junie khuyến khích khách hàng nên tuân theo các nguyên tắc bảo quản trang sức nói chung.
Nên tháo trang sức ra trước khi tiếp xúc với bất kỳ môi trường ẩm hoặc ma sát mạnh (vd: rửa tay, đi ngủ, tắm rửa,...) để đảm bảo và duy trì độ bóng của sản phẩm cũng như kéo dài tuổi thọ của sản phẩm.', 1, 4)
INSERT [dbo].[Products] ([Id], [Name], [Slug], [Price], [Discount], [Quantity], [Type], [TotalSold], [Ratings], [Description], [UserManual], [IsActive], [CollectionId]) VALUES (17, N'Bông tai Paris', N'bong-tai-paris', 175000, 0, 3, N'E-PARIS-G', 0, 0, N'Đôi bông tai mang một vẻ đẹp cuốn hút như phép thuật-không-thể-cưỡng-lại đến từ Junie. Paris xanh lấp lánh, xinh đẹp là một đôi bông tai không thể thiếu trong BST trang sức của nàng.
Được chế tác từ chất liệu bạc 925 cao cấp phủ vàng 14K, chiếc khuyên nhỏ vàng rực ôm sát vành tai phối màu tuyệt vời với những viên đá Cubic Zirconia được đính trên đó. Hai viên đá CZ được mài dũa tinh tế, lấp lánh như những vì sao nhỏ trên vành tai xinh xắn của nàng.
Sự lấp lánh, kiêu sa của đá CZ, tạo nên một diện mạo sang trọng, quyến rũ, nhưng cũng không làm mất đi nét trẻ trung, cá tính của nàng.
Với bông tai này, các nàng có thể thỏa sức kết hợp với nhiều kiểu dáng trang phục khác nhau. Đây sẽ là sự lựa chọn an toàn và đa-zi-năng cho tất cả những lần xuất hiện của nàng.', N'Được làm từ những chất liệu cao cấp và bền bỉ nhưng do đặc tính cơ bản của chất liệu, Junie khuyến khích khách hàng nên tuân theo các nguyên tắc bảo quản trang sức nói chung.
Nên tháo trang sức ra trước khi tiếp xúc với bất kỳ môi trường ẩm hoặc ma sát mạnh (vd: rửa tay, đi ngủ, tắm rửa,...) để đảm bảo và duy trì độ bóng của sản phẩm cũng như kéo dài tuổi thọ của sản phẩm.', 1, 1)
INSERT [dbo].[Products] ([Id], [Name], [Slug], [Price], [Discount], [Quantity], [Type], [TotalSold], [Ratings], [Description], [UserManual], [IsActive], [CollectionId]) VALUES (18, N'Bông tai Quinn', N'bong-tai-quinn', 250000, 0, 50, N'E-QUINN-G', 0, 0, N'Bông tai Quinn của Junie như một dấu ấn của sự tinh tế và rực rỡ, một phiên bản tự tin và lộng lẫy hơn dành cho các quý cô hiện đại.
Được chế tác từ tinh hoa của tự nhiên - Đá Cubic Zirconia lấp lánh tựa kim cương treo lơ lửng dưới chiếc khuyên được làm từ Bạc 925 phủ vàng 14K, tất cả tạo nên một tác phẩm sang trọng và không kém phần kiêu sa.
Như tất cả những người phụ nữ trên thế giới này, nàng xứng đáng nhận được tôn vinh bằng những điều tốt đẹp nhất. Hãy dành tặng bản thân một đôi bông tai đẹp đầy mê hoặc như Quinn để trở nên thật kiều diễm và thanh lịch.', N'Được làm từ những chất liệu cao cấp và bền bỉ nhưng do đặc tính cơ bản của chất liệu, Junie khuyến khích khách hàng nên tuân theo các nguyên tắc bảo quản trang sức nói chung.
Nên tháo trang sức ra trước khi tiếp xúc với bất kỳ môi trường ẩm hoặc ma sát mạnh (vd: rửa tay, đi ngủ, tắm rửa,...) để đảm bảo và duy trì độ bóng của sản phẩm cũng như kéo dài tuổi thọ của sản phẩm.', 1, 1)
INSERT [dbo].[Products] ([Id], [Name], [Slug], [Price], [Discount], [Quantity], [Type], [TotalSold], [Ratings], [Description], [UserManual], [IsActive], [CollectionId]) VALUES (19, N'Bông tai Fania', N'bong-tai-fania', 175000, 0, 50, N'E-FANIA', 0, 0, N'Bông tai Fania được chế tác từ bạc 925 phủ vàng 14K kết hợp với đá CZ cao cấp. Kiểu dáng nhỏ nhắn, tinh tế mang đến cho các cô gái sự thanh lịch, nhẹ nhàng, phù hợp trong mọi hoàn cảnh và mọi trang phục.', N'Được làm từ những chất liệu cao cấp và bền bỉ nhưng do đặc tính cơ bản của chất liệu, Junie khuyến khích khách hàng nên tuân theo các nguyên tắc bảo quản trang sức nói chung.
Nên tháo trang sức ra trước khi tiếp xúc với bất kỳ môi trường ẩm hoặc ma sát mạnh (vd: rửa tay, đi ngủ, tắm rửa,...) để đảm bảo và duy trì độ bóng của sản phẩm cũng như kéo dài tuổi thọ của sản phẩm.', 1, 1)
INSERT [dbo].[Products] ([Id], [Name], [Slug], [Price], [Discount], [Quantity], [Type], [TotalSold], [Ratings], [Description], [UserManual], [IsActive], [CollectionId]) VALUES (20, N'Bông tai Sophia', N'bong-tai-sophia', 220000, 0, 50, N'E-SOPHIA', 0, 0, N'Lấp lánh cùng những hình khối xếp thành từ những viên đá quý Zirconia có độ cứng hoàn hảo tạo nên nét duyên dáng không kém phần nổi bật cho nàng. Bông tai được chế tác tinh xảo từ nền bạc 925 dát một lớp vàng 14K dày dặn, cuối cùng được hoàn thiện bằng rất nhiều viên đá Zirconia lánh lánh tinh khiết.', N'Được làm từ những chất liệu cao cấp và bền bỉ nhưng do đặc tính cơ bản của chất liệu, Junie khuyến khích khách hàng nên tuân theo các nguyên tắc bảo quản trang sức nói chung.
Nên tháo trang sức ra trước khi tiếp xúc với bất kỳ môi trường ẩm hoặc ma sát mạnh (vd: rửa tay, đi ngủ, tắm rửa,...) để đảm bảo và duy trì độ bóng của sản phẩm cũng như kéo dài tuổi thọ của sản phẩm.', 1, 1)
INSERT [dbo].[Products] ([Id], [Name], [Slug], [Price], [Discount], [Quantity], [Type], [TotalSold], [Ratings], [Description], [UserManual], [IsActive], [CollectionId]) VALUES (21, N'Dây chuyền Vida', N'day-chuyen-vida', 275000, 0, 50, N'N-VIDA', 0, 0, N'Chiếc vòng cổ mặt đá CZ tuyệt đẹp được dát vàng 14K này rất phù hợp để thể hiện một chút lấp lánh theo một cách tối giản.
Kết hợp chuỗi hạt hình khối được đánh bóng thể hiện sự mạnh mẽ nhưng không kém phần dịu dàng khi kết hợp với mặt đá CZ có độ cứng hoàn hảo (tương đương kim cương).
Đảm bảo khi bạn đeo vòng cổ Vida này sẽ đẹp một cách sững sờ trong bất kỳ dịp nào.', N'Được làm từ những chất liệu cao cấp và bền bỉ nhưng do đặc tính cơ bản của chất liệu, Junie khuyến khích khách hàng nên tuân theo các nguyên tắc bảo quản trang sức nói chung.
Nên tháo trang sức ra trước khi tiếp xúc với bất kỳ môi trường ẩm hoặc ma sát mạnh (vd: rửa tay, đi ngủ, tắm rửa,...) để đảm bảo và duy trì độ bóng của sản phẩm cũng như kéo dài tuổi thọ của sản phẩm.', 1, 2)
INSERT [dbo].[Products] ([Id], [Name], [Slug], [Price], [Discount], [Quantity], [Type], [TotalSold], [Ratings], [Description], [UserManual], [IsActive], [CollectionId]) VALUES (22, N'Dây chuyền Olivia', N'day-chuyen-olivia', 250000, 0, 50, N'N-OLIVIA', 0, 0, N'Mặt dây chuyền tuyệt đẹp này là sự bổ sung mới nhất cho bộ sưu tập vòng cổ của Junie. Sự kết hợp hoàn hảo của những viên đá quý zirconia hình khối rực rỡ trên dây chuyền trang nhã để thêm lấp lánh và tỏa sáng cho bất kỳ trang phục nào.
Với mỗi viên đá CZ tỏa sáng hơn viên tiếp theo, mặt dây chuyền này được chế tác bằng hợp kim Titan bền bỉ và hoàn thiện bằng việc dát vàng 14K để tạo ra vẻ ngoài nổi bật và sang trọng.', N'Được làm từ những chất liệu cao cấp và bền bỉ nhưng do đặc tính cơ bản của chất liệu, Junie khuyến khích khách hàng nên tuân theo các nguyên tắc bảo quản trang sức nói chung.
Nên tháo trang sức ra trước khi tiếp xúc với bất kỳ môi trường ẩm hoặc ma sát mạnh (vd: rửa tay, đi ngủ, tắm rửa,...) để đảm bảo và duy trì độ bóng của sản phẩm cũng như kéo dài tuổi thọ của sản phẩm.', 1, 2)
INSERT [dbo].[Products] ([Id], [Name], [Slug], [Price], [Discount], [Quantity], [Type], [TotalSold], [Ratings], [Description], [UserManual], [IsActive], [CollectionId]) VALUES (23, N'Dây chuyền Amari', N'day-chuyen-amari', 210000, 0, 4, N'N-AMARI', 0, 0, N'Thể hiện nét cổ điển của bạn với chiếc vòng cổ dạng thanh quyến rũ này với điểm nhấn là ngọc trai nước ngọt lấp lánh ở giữa.
Được dát vàng 14K một cách tinh tế, chiếc vòng cổ Amari này là món đồ hoàn hảo để khiến bạn trở nên lấp lánh, dù ngày hay đêm.
Hãy mang chiếc vòng cổ dạng thanh này đi chơi trong những buổi dạ tiệc hoặc kết hợp với quần jean và áo thun để có vẻ ngoài linh hoạt như chính món đồ trang sức vậy.', N'Được làm từ những chất liệu cao cấp và bền bỉ nhưng do đặc tính cơ bản của chất liệu, Junie khuyến khích khách hàng nên tuân theo các nguyên tắc bảo quản trang sức nói chung.
Nên tháo trang sức ra trước khi tiếp xúc với bất kỳ môi trường ẩm hoặc ma sát mạnh (vd: rửa tay, đi ngủ, tắm rửa,...) để đảm bảo và duy trì độ bóng của sản phẩm cũng như kéo dài tuổi thọ của sản phẩm.', 1, 2)
INSERT [dbo].[Products] ([Id], [Name], [Slug], [Price], [Discount], [Quantity], [Type], [TotalSold], [Ratings], [Description], [UserManual], [IsActive], [CollectionId]) VALUES (24, N'Dây chuyền Rosette', N'day-chuyen-rosette', 320000, 0, 50, N'N-ROSETTE', 0, 0, N'Mang một vẻ đẹp dịu dàng cổ điển như các quý cô Anh Quốc, dây chuyền Rosette gắn liền với biểu tượng của một bông hồng Anh ngọt ngào, quý phái.
Bông hồng được điêu khắc tỉ mỉ trên mặt dây chuyền hình tròn, nằm e ấp trên làn da trắng muốt mong manh của nàng, tạo nên một vẻ đẹp vừa quyến rũ, vừa thuần khiết.
Dây chuyền Rosette được chế tác từ bạc 925 mạ vàng 14K cao cấp, thân thiện với làn da của nàng.
Đặc biệt với thiết kế đơn giản không cầu kì, nàng có thể kết hợp dây chuyền Rosette với bất kì một kiểu trang phục nào. Hoặc nếu nàng muốn có thể kết hợp Rosette với các dây chuyền khác theo kiểu layer để trở nên phong cách, hiện đại hơn.', N'Được làm từ những chất liệu cao cấp và bền bỉ nhưng do đặc tính cơ bản của chất liệu, Junie khuyến khích khách hàng nên tuân theo các nguyên tắc bảo quản trang sức nói chung.
Nên tháo trang sức ra trước khi tiếp xúc với bất kỳ môi trường ẩm hoặc ma sát mạnh (vd: rửa tay, đi ngủ, tắm rửa,...) để đảm bảo và duy trì độ bóng của sản phẩm cũng như kéo dài tuổi thọ của sản phẩm.', 1, 2)
INSERT [dbo].[Products] ([Id], [Name], [Slug], [Price], [Discount], [Quantity], [Type], [TotalSold], [Ratings], [Description], [UserManual], [IsActive], [CollectionId]) VALUES (25, N'Vòng tay Penny', N'vong-tay-penny', 380000, 0, 50, N'B-PENNY', 0, 0, N'Một phiên bản xinh đẹp và lộng lẫy hơn cho các cô nàng của Junie. Vòng tay Penny dễ dàng tôn lên nước da của nàng, tô điểm cho cổ tay xinh xắn thêm cuốn hút.
Được kiến tạo từ tinh hoa của tự nhiên - những hạt ngọc trai trắng xen kẽ với những hạt charm đính đá Cubic Zirconia lấp lánh tựa kim cương tạo nên một chiếc vòng tay sang trọng và không kém phần kiêu sa.
Móc khóa được chế tác từ bạc 925 phủ vàng 14K cao cấp. Nữ tính hơn với hạt ngọc trai thả dọc theo cánh tay nuột nà.
Nàng có thể kết hợp vòng tay Penny với các thiết kế ngọc trai khác của Junie để hoàn thiện vẻ ngoài duyên dáng của mình.', N'Được làm từ những chất liệu cao cấp và bền bỉ nhưng do đặc tính cơ bản của chất liệu, Junie khuyến khích khách hàng nên tuân theo các nguyên tắc bảo quản trang sức nói chung.
Nên tháo trang sức ra trước khi tiếp xúc với bất kỳ môi trường ẩm hoặc ma sát mạnh (vd: rửa tay, đi ngủ, tắm rửa,...) để đảm bảo và duy trì độ bóng của sản phẩm cũng như kéo dài tuổi thọ của sản phẩm.', 1, 3)
INSERT [dbo].[Products] ([Id], [Name], [Slug], [Price], [Discount], [Quantity], [Type], [TotalSold], [Ratings], [Description], [UserManual], [IsActive], [CollectionId]) VALUES (26, N'Vòng tay Eden', N'vong-tay-eden', 280000, 0, 50, N'B-EDEN', 0, 0, N'Nữ tính hơn với vòng tay Eden. Mang trong mình sắc xanh của biển cả, vòng tay Eden được chế tác tinh xảo bởi những viên đá CZ xanh lấp lánh và sợi dây phủ vàng 14K mảnh mai treo hờ hững trên cổ tay của nàng tạo nên một sức hút kì lạ.
Sẽ hoàn hảo hơn khi nàng kết hợp bộ 3: dây chuyền, bông tai và vòng tay Eden cho outfit của mình thêm xinh đẹp, cuốn hút mọi ánh nhìn.', N'Được làm từ những chất liệu cao cấp và bền bỉ nhưng do đặc tính cơ bản của chất liệu, Junie khuyến khích khách hàng nên tuân theo các nguyên tắc bảo quản trang sức nói chung.
Nên tháo trang sức ra trước khi tiếp xúc với bất kỳ môi trường ẩm hoặc ma sát mạnh (vd: rửa tay, đi ngủ, tắm rửa,...) để đảm bảo và duy trì độ bóng của sản phẩm cũng như kéo dài tuổi thọ của sản phẩm.', 1, 3)
INSERT [dbo].[Products] ([Id], [Name], [Slug], [Price], [Discount], [Quantity], [Type], [TotalSold], [Ratings], [Description], [UserManual], [IsActive], [CollectionId]) VALUES (27, N'Vòng tay Taylor', N'vong-tay-taylor', 220000, 0, 50, N'B-TAYLOR', 0, 0, N'Hoàn thiện vẻ duyên dáng của nàng với chiếc lắc tay Taylor được chế tác tỉ mỉ. Vòng tay hình tròn là món đồ trang sức hoàn hảo để tạo điểm nhấn cho phong cách hàng ngày của nàng.
Được chế tác bằng bạc Sterling và phủ vàng 14K, chiếc vòng tay trang nhã này có các vòng tròn nhỏ được đánh bóng bằng vàng sang trọng.
Cho dù nàng đang đeo nó một mình hay đeo chung với những chiếc vòng khác, thì chiếc vòng tròn vàng này là một món đồ đi cùng năm tháng cho bộ sưu tập đồ trang sức của chị em con gái chúng mình.', N'Được làm từ những chất liệu cao cấp và bền bỉ nhưng do đặc tính cơ bản của chất liệu, Junie khuyến khích khách hàng nên tuân theo các nguyên tắc bảo quản trang sức nói chung.
Nên tháo trang sức ra trước khi tiếp xúc với bất kỳ môi trường ẩm hoặc ma sát mạnh (vd: rửa tay, đi ngủ, tắm rửa,...) để đảm bảo và duy trì độ bóng của sản phẩm cũng như kéo dài tuổi thọ của sản phẩm.', 1, 3)
INSERT [dbo].[Products] ([Id], [Name], [Slug], [Price], [Discount], [Quantity], [Type], [TotalSold], [Ratings], [Description], [UserManual], [IsActive], [CollectionId]) VALUES (28, N'Vòng tay Farrah', N'vong-tay-farrah', 330000, 0, 50, N'B-FARRAH', 0, 0, N'Ngọc trai luôn là sự lựa chọn sáng suốt trong cuộc chơi trang sức
Mang trong mình vẻ đẹp trong suốt, dịu nhẹ từ biển cả, mẫu vòng tay Farrah được Junie lựa chọn tỉ mỉ dành riêng cho các cô nàng theo đuổi phong cách nhẹ nhàng, sang trọng.
Với thiết kế ngọc trai trắng nước ngọt kết hợp với chất liệu Titan phủ vàng 14K sang trọng, Farrah đem lại cho các cô nàng sự tinh tế, thanh lịch, dù kết hợp với bất kỳ loại trang phục nào.', N'Được làm từ những chất liệu cao cấp và bền bỉ nhưng do đặc tính cơ bản của chất liệu, Junie khuyến khích khách hàng nên tuân theo các nguyên tắc bảo quản trang sức nói chung.
Nên tháo trang sức ra trước khi tiếp xúc với bất kỳ môi trường ẩm hoặc ma sát mạnh (vd: rửa tay, đi ngủ, tắm rửa,...) để đảm bảo và duy trì độ bóng của sản phẩm cũng như kéo dài tuổi thọ của sản phẩm.', 1, 3)
INSERT [dbo].[Products] ([Id], [Name], [Slug], [Price], [Discount], [Quantity], [Type], [TotalSold], [Ratings], [Description], [UserManual], [IsActive], [CollectionId]) VALUES (29, N'Nhẫn Bixby', N'nhan-bixby', 240000, 0, 0, N'R-BIXBY', 1, 0, N'Trong một đêm trăng đẹp, có người nói với nàng rằng: "Đá Mặt trăng tượng trưng cho tình bạn và tình yêu, nó ẩn chứa tất cả những lời chúc tốt đẹp dành cho người đeo, là ánh trăng dẫn lối cho em, bảo vệ và che chở em trong những lúc không có tôi bên cạnh".
Được truyền cảm hứng bởi câu chuyện đó, Junie mang đến cho nàng thiết kế nhẫn Bixby với một viên đá Mặt trăng thuần khiết và lấp lánh, hấp thụ năng lượng từ Mặt trăng để khơi dậy tình yêu và hy vọng trong nàng.
Chế tác từ chất liệu Bạc 925 cao cấp, nhẫn Bixby rất thân thiện với làn da và thu hút mọi ánh mắt đến đôi bàn tay xinh đẹp của nàng.', N'Được làm từ những chất liệu cao cấp và bền bỉ nhưng do đặc tính cơ bản của chất liệu, Junie khuyến khích khách hàng nên tuân theo các nguyên tắc bảo quản trang sức nói chung.
Nên tháo trang sức ra trước khi tiếp xúc với bất kỳ môi trường ẩm hoặc ma sát mạnh (vd: rửa tay, đi ngủ, tắm rửa,...) để đảm bảo và duy trì độ bóng của sản phẩm cũng như kéo dài tuổi thọ của sản phẩm.', 1, 4)
INSERT [dbo].[Products] ([Id], [Name], [Slug], [Price], [Discount], [Quantity], [Type], [TotalSold], [Ratings], [Description], [UserManual], [IsActive], [CollectionId]) VALUES (30, N'Nhẫn Lola', N'nhan-lola', 210000, 0, 50, N'R-LOLA', 0, 0, N'Chú thỏ nhỏ nhắn xinh xắn dành cho những bạn gái ngọt ngào và đáng yêu của nhà Junie.
Nhẫn Lola được tạo hình chú thỏ nhỏ cực kì khéo léo tăng thêm điểm vào ô dễ thương cho các bạn nữ đeo nó.
Được chế tác từ chất liệu bạc 925 cao cấp phủ vàng 14K, nhẫn Lola rất thân thiện với làn da của nàng.
Đây là một Item phù hợp cho nàng đi học, đi chơi hoặc các buổi hẹn hò lãng mạn bên người ấy.', N'Được làm từ những chất liệu cao cấp và bền bỉ nhưng do đặc tính cơ bản của chất liệu, Junie khuyến khích khách hàng nên tuân theo các nguyên tắc bảo quản trang sức nói chung.
Nên tháo trang sức ra trước khi tiếp xúc với bất kỳ môi trường ẩm hoặc ma sát mạnh (vd: rửa tay, đi ngủ, tắm rửa,...) để đảm bảo và duy trì độ bóng của sản phẩm cũng như kéo dài tuổi thọ của sản phẩm.', 1, 4)
INSERT [dbo].[Products] ([Id], [Name], [Slug], [Price], [Discount], [Quantity], [Type], [TotalSold], [Ratings], [Description], [UserManual], [IsActive], [CollectionId]) VALUES (31, N'Nhẫn Remi', N'nhan-remi', 200000, 0, 4, N'R-REMI', 0, 0, N'Chiếc nhẫn Remi được thiết kế với hình dạng trái tim đơn giản nhưng tinh tế, đem lại vẻ đẹp lãng mạn và ngọt ngào cho người đeo.
Với chất liệu bạc 925 cao cấp, chiếc nhẫn có độ bền cao và không gây kích ứng da.
Biểu tượng trái tim trên chiếc nhẫn được chế tác tỉ mỉ với kỹ thuật uốn xuất sắc, tạo ra hiệu ứng sáng lấp lánh, đầy sức hút dù không gắn bất kì một viên đá nào. Khi đeo lên ngón tay của bạn, chiếc nhẫn này sẽ tôn lên vẻ trẻ trung, hiện đại, đầy quyến rũ.
Chiếc nhẫn có thiết kế vừa đủ, phù hợp với nhiều phong cách thời trang và sự kiện khác nhau, từ các buổi hẹn hò, dạo phố cho đến các bữa tiệc hay các dịp quan trọng trong cuộc sống.
Đối với các chàng trai Remi chắc chắn sẽ là món quà đầy ý nghĩa cho người mà bạn yêu thương.', N'Được làm từ những chất liệu cao cấp và bền bỉ nhưng do đặc tính cơ bản của chất liệu, Junie khuyến khích khách hàng nên tuân theo các nguyên tắc bảo quản trang sức nói chung.
Nên tháo trang sức ra trước khi tiếp xúc với bất kỳ môi trường ẩm hoặc ma sát mạnh (vd: rửa tay, đi ngủ, tắm rửa,...) để đảm bảo và duy trì độ bóng của sản phẩm cũng như kéo dài tuổi thọ của sản phẩm.', 1, 4)
INSERT [dbo].[Products] ([Id], [Name], [Slug], [Price], [Discount], [Quantity], [Type], [TotalSold], [Ratings], [Description], [UserManual], [IsActive], [CollectionId]) VALUES (32, N'Nhẫn Onina', N'nhan-onina', 210000, 0, 5, N'R-ONINA', 0, 0, N'Trên tay điểm xuyết một em nhẫn Onina, từng cử chỉ của nàng sẽ khiến ai đó không thể rời mắt.
Nổi bật với màu xanh lá của đá Cubic Zirconia rực rỡ tựa như ngọc lục bảo, chiếc nhẫn Onina đủ lấp lánh để tạo điểm nhấn cho bất kì bộ trang phục nào.
Hãy đeo chiếc nhẫn Onina một mình hoặc kết hợp nó với những chiếc vòng màu xanh lá cây phù hợp như dây chuyền Kai hoặc Coco của Junie để hoàn thiện vẻ ngoài xinh đẹp ngọt ngào của nàng.', N'Được làm từ những chất liệu cao cấp và bền bỉ nhưng do đặc tính cơ bản của chất liệu, Junie khuyến khích khách hàng nên tuân theo các nguyên tắc bảo quản trang sức nói chung.
Nên tháo trang sức ra trước khi tiếp xúc với bất kỳ môi trường ẩm hoặc ma sát mạnh (vd: rửa tay, đi ngủ, tắm rửa,...) để đảm bảo và duy trì độ bóng của sản phẩm cũng như kéo dài tuổi thọ của sản phẩm.', 1, 4)
SET IDENTITY_INSERT [dbo].[Products] OFF
GO
ALTER TABLE [dbo].[Discounts] ADD  DEFAULT ((0.0000000000000000e+000)) FOR [MinPrice]
GO
ALTER TABLE [dbo].[Discounts] ADD  DEFAULT (CONVERT([bit],(1))) FOR [IsActive]
GO
ALTER TABLE [dbo].[OrderProducts] ADD  DEFAULT ((1)) FOR [Quantity]
GO
ALTER TABLE [dbo].[Orders] ADD  DEFAULT (CONVERT([bit],(0))) FOR [IsConfirmed]
GO
ALTER TABLE [dbo].[Products] ADD  DEFAULT ((0.0000000000000000e+000)) FOR [Price]
GO
ALTER TABLE [dbo].[Products] ADD  DEFAULT (CONVERT([real],(0))) FOR [Discount]
GO
ALTER TABLE [dbo].[Products] ADD  DEFAULT ((0)) FOR [Quantity]
GO
ALTER TABLE [dbo].[Products] ADD  DEFAULT ((0)) FOR [TotalSold]
GO
ALTER TABLE [dbo].[Products] ADD  DEFAULT ((0)) FOR [Ratings]
GO
ALTER TABLE [dbo].[Products] ADD  DEFAULT (CONVERT([bit],(1))) FOR [IsActive]
GO
ALTER TABLE [dbo].[Images]  WITH CHECK ADD  CONSTRAINT [FK_Images_Products_ProductId] FOREIGN KEY([ProductId])
REFERENCES [dbo].[Products] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Images] CHECK CONSTRAINT [FK_Images_Products_ProductId]
GO
ALTER TABLE [dbo].[OrderProducts]  WITH CHECK ADD  CONSTRAINT [FK_Orders_OrderProducts] FOREIGN KEY([OrderId])
REFERENCES [dbo].[Orders] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[OrderProducts] CHECK CONSTRAINT [FK_Orders_OrderProducts]
GO
ALTER TABLE [dbo].[OrderProducts]  WITH CHECK ADD  CONSTRAINT [FK_Products_Orders] FOREIGN KEY([ProductId])
REFERENCES [dbo].[Products] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[OrderProducts] CHECK CONSTRAINT [FK_Products_Orders]
GO
ALTER TABLE [dbo].[Orders]  WITH CHECK ADD  CONSTRAINT [FK_Orders_Discounts_DiscountId] FOREIGN KEY([DiscountId])
REFERENCES [dbo].[Discounts] ([Id])
GO
ALTER TABLE [dbo].[Orders] CHECK CONSTRAINT [FK_Orders_Discounts_DiscountId]
GO
ALTER TABLE [dbo].[Products]  WITH CHECK ADD  CONSTRAINT [FK_Products_Collections] FOREIGN KEY([CollectionId])
REFERENCES [dbo].[Collections] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Products] CHECK CONSTRAINT [FK_Products_Collections]
GO
