(function() {
  'use strict';

  // --- AMAZON-STYLE EXPANDED FLAGSHIP CATALOG (100 UNIQUE HIGH-QUALITY PRODUCTS) ---
  const PRODUCTS = [
    // ==================== 1. MOBILES & SMARTPHONES (15 PRODUCTS) ====================
    {
      id: 'amz-mob-1',
      name: 'Apple iPhone 15 Pro Max (256 GB) - Natural Titanium',
      category: 'Mobiles',
      brand: 'Apple',
      price: 1199,
      originalPrice: 1399,
      discount: 14,
      rating: 4.9,
      reviewsCount: 14280,
      image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600&auto=format&fit=crop&q=80',
      description: 'Forged in titanium with revolutionary A17 Pro chip, customizable Action button, and 5x optical telephoto camera system.',
      specs: { 'Brand': 'Apple', 'Display': '6.7" Super Retina XDR OLED 120Hz', 'Chip': 'A17 Pro 3nm', 'Camera': '48MP + 12MP + 12MP (5x Optical Zoom)', 'Battery': '4422 mAh Fast Charge' },
      tag: 'Amazon Choice'
    },
    {
      id: 'amz-mob-2',
      name: 'Apple iPhone 15 (128 GB) - Pink',
      category: 'Mobiles',
      brand: 'Apple',
      price: 799,
      originalPrice: 899,
      discount: 11,
      rating: 4.8,
      reviewsCount: 11240,
      image: 'https://images.unsplash.com/photo-1695048065058-29a4a77d4039?w=600&auto=format&fit=crop&q=80',
      description: 'Dynamic Island comes to iPhone 15, 48MP main camera with 2x Telephoto, and color-infused glass design with USB-C.',
      specs: { 'Brand': 'Apple', 'Display': '6.1" Super Retina XDR', 'Chip': 'A16 Bionic', 'Camera': '48MP Main + 12MP Ultra Wide', 'Connector': 'USB-C' },
      tag: 'Popular'
    },
    {
      id: 'amz-mob-3',
      name: 'Apple iPhone 14 Pro (256 GB) - Deep Purple',
      category: 'Mobiles',
      brand: 'Apple',
      price: 949,
      originalPrice: 1099,
      discount: 14,
      rating: 4.8,
      reviewsCount: 19800,
      image: 'https://images.unsplash.com/photo-1663499482523-1c0c1bae4ce1?w=600&auto=format&fit=crop&q=80',
      description: 'Features Dynamic Island, Always-On Display, 48MP Main Camera, and Crash Detection safety technology.',
      specs: { 'Brand': 'Apple', 'Display': '6.1" ProMotion 120Hz', 'Chip': 'A16 Bionic', 'Camera': '48MP Pro System', 'Color': 'Deep Purple' },
      tag: 'Pro Model'
    },
    {
      id: 'amz-mob-4',
      name: 'Apple iPhone 13 (128 GB) - Starlight',
      category: 'Mobiles',
      brand: 'Apple',
      price: 599,
      originalPrice: 699,
      discount: 14,
      rating: 4.7,
      reviewsCount: 35600,
      image: 'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=600&auto=format&fit=crop&q=80',
      description: 'Advanced dual-camera system, A15 Bionic chip, durable Ceramic Shield front, and all-day battery life.',
      specs: { 'Brand': 'Apple', 'Display': '6.1" Super Retina XDR', 'Chip': 'A15 Bionic', 'Camera': '12MP Dual System', 'Battery': 'Up to 19 Hours Video' },
      tag: 'Best Value'
    },
    {
      id: 'amz-mob-5',
      name: 'Samsung Galaxy S24 Ultra 5G (512 GB) - Titanium Gray',
      category: 'Mobiles',
      brand: 'Samsung',
      price: 1299,
      originalPrice: 1419,
      discount: 8,
      rating: 4.8,
      reviewsCount: 9850,
      image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600&auto=format&fit=crop&q=80',
      description: 'Galaxy AI is here. Search like never before, get real-time translation, edit photos with AI, and capture 200MP detail with S Pen.',
      specs: { 'Brand': 'Samsung', 'Display': '6.8" Dynamic AMOLED 2X 120Hz', 'Processor': 'Snapdragon 8 Gen 3 for Galaxy', 'Camera': '200MP Main + 50MP Periscope', 'Stylus': 'Built-in S Pen' },
      tag: 'Best Seller'
    },
    {
      id: 'amz-mob-6',
      name: 'Samsung Galaxy Z Fold 5 (512 GB) - Phantom Black Foldable',
      category: 'Mobiles',
      brand: 'Samsung',
      price: 1699,
      originalPrice: 1919,
      discount: 11,
      rating: 4.8,
      reviewsCount: 3120,
      image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=600&auto=format&fit=crop&q=80',
      description: 'Unfold an immersive 7.6" main screen for ultimate multitasking, S Pen support, and zero-gap Flex Hinge.',
      specs: { 'Brand': 'Samsung', 'Display': '7.6" Dynamic AMOLED Foldable + 6.2" Cover', 'Processor': 'Snapdragon 8 Gen 2', 'Camera': '50MP Triple System', 'Hinge': 'Flex Hinge Zero Gap' },
      tag: 'Flagship Fold'
    },
    {
      id: 'amz-mob-7',
      name: 'Samsung Galaxy Z Flip 5 (256 GB) - Mint',
      category: 'Mobiles',
      brand: 'Samsung',
      price: 899,
      originalPrice: 999,
      discount: 10,
      rating: 4.7,
      reviewsCount: 5120,
      image: 'https://images.unsplash.com/photo-1574944985070-8f3024426591?w=600&auto=format&fit=crop&q=80',
      description: '3.4" Flex Window cover screen lets you reply to messages, take hands-free FlexCam selfies, and pocket easily.',
      specs: { 'Brand': 'Samsung', 'Cover Screen': '3.4" Super AMOLED', 'Main Display': '6.7" FHD+ 120Hz', 'Design': 'Compact Flip' },
      tag: 'Compact Fold'
    },
    {
      id: 'amz-mob-8',
      name: 'Google Pixel 8 Pro (128 GB) - Bay Blue AI Phone',
      category: 'Mobiles',
      brand: 'Google',
      price: 899,
      originalPrice: 999,
      discount: 10,
      rating: 4.7,
      reviewsCount: 6420,
      image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600&auto=format&fit=crop&q=80',
      description: 'Fully upgraded with Google Tensor G3, custom AI image features like Magic Eraser, Best Take, and 7 years of OS updates.',
      specs: { 'Brand': 'Google', 'Display': '6.7" LTPO OLED 120Hz', 'Processor': 'Google Tensor G3', 'Camera': '50MP + 48MP Telephoto', 'OS Support': '7 Years Guaranteed' },
      tag: 'Top Rated AI'
    },
    {
      id: 'amz-mob-9',
      name: 'Google Pixel 8a (128 GB) - Aloe Green',
      category: 'Mobiles',
      brand: 'Google',
      price: 499,
      originalPrice: 549,
      discount: 9,
      rating: 4.8,
      reviewsCount: 2840,
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&auto=format&fit=crop&q=80',
      description: 'Powered by Tensor G3 with Pixel Camera features, Audio Magic Eraser, 120Hz Actua display, and IP67 water protection.',
      specs: { 'Brand': 'Google', 'Display': '6.1" Actua 120Hz', 'Processor': 'Tensor G3', 'Camera': '64MP Main + 13MP Ultra', 'Security': 'Titan M2 Chip' },
      tag: 'Best Mid-Range'
    },
    {
      id: 'amz-mob-10',
      name: 'OnePlus 12 5G (16GB RAM + 512GB) - Silky Black',
      category: 'Mobiles',
      brand: 'OnePlus',
      price: 799,
      originalPrice: 899,
      discount: 11,
      rating: 4.7,
      reviewsCount: 4120,
      image: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=600&auto=format&fit=crop&q=80',
      description: '100W SUPERVOOC fast charging, 4th Gen Hasselblad Camera System, and Snapdragon 8 Gen 3 speed engine.',
      specs: { 'Brand': 'OnePlus', 'Charging': '100W Wired + 50W Wireless', 'Display': '2K 120Hz ProXDR', 'RAM': '16GB LPDDR5X', 'Cooling': 'Dual Cryo-velocity VC' },
      tag: 'Super Charging'
    },
    {
      id: 'amz-mob-11',
      name: 'Xiaomi 14 Ultra 5G (16GB + 512GB) - Leica Quad Camera',
      category: 'Mobiles',
      brand: 'Xiaomi',
      price: 1199,
      originalPrice: 1349,
      discount: 11,
      rating: 4.9,
      reviewsCount: 2150,
      image: 'https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=600&auto=format&fit=crop&q=80',
      description: 'Revolutionary Leica quad camera system with 1-inch main sensor, stepless variable aperture f/1.63 - f/4.0.',
      specs: { 'Brand': 'Xiaomi', 'Camera': 'Leica Quad 50MP 1-inch Sensor', 'Display': '6.73" WQHD+ 120Hz', 'Processor': 'Snapdragon 8 Gen 3' },
      tag: 'Leica Optics'
    },
    {
      id: 'amz-mob-12',
      name: 'Nothing Phone (2) 5G (12GB + 256GB) - Dark Grey Glyph UI',
      category: 'Mobiles',
      brand: 'Nothing',
      price: 649,
      originalPrice: 729,
      discount: 11,
      rating: 4.7,
      reviewsCount: 3940,
      image: 'https://images.unsplash.com/photo-1533228876829-65c94e7b5025?w=600&auto=format&fit=crop&q=80',
      description: 'Iconic transparent back design with customizable Glyph light interface, Nothing OS 2.5, and dual 50MP Sony sensors.',
      specs: { 'Brand': 'Nothing', 'Glyph UI': 'Custom Light Patterns', 'Display': '6.7" LTPO OLED 120Hz', 'Processor': 'Snapdragon 8+ Gen 1' },
      tag: 'Glyph Lights'
    },
    {
      id: 'amz-mob-13',
      name: 'ASUS ROG Phone 8 Pro 5G (24GB RAM + 1TB) - Gaming Phone',
      category: 'Mobiles',
      brand: 'ASUS',
      price: 1199,
      originalPrice: 1299,
      discount: 8,
      rating: 4.9,
      reviewsCount: 1420,
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&auto=format&fit=crop&q=80',
      description: 'Ultimate esports gaming phone with 165Hz AMOLED display, AirTrigger ultrasonic touch buttons, and AniMe Vision LED back.',
      specs: { 'Brand': 'ASUS ROG', 'Display': '6.78" 165Hz Samsung E6 AMOLED', 'RAM': '24GB LPDDR5X', 'Triggers': 'AirTrigger Controls' },
      tag: 'Esports Gaming'
    },
    {
      id: 'amz-mob-14',
      name: 'Motorola Edge 50 Ultra 5G (16GB + 1TB) - Peach Fuzz Pantone',
      category: 'Mobiles',
      brand: 'Motorola',
      price: 999,
      originalPrice: 1099,
      discount: 9,
      rating: 4.7,
      reviewsCount: 1820,
      image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=600&auto=format&fit=crop&q=80',
      description: 'Real wooden back cover design, 125W TurboPower charging, 50MP periscope telephoto, and IP68 underwater protection.',
      specs: { 'Brand': 'Motorola', 'Back': 'Natural Wood Finish', 'Charging': '125W Wired + 50W Wireless', 'Display': '6.7" 144Hz pOLED' },
      tag: 'Pantone Special'
    },
    {
      id: 'amz-mob-15',
      name: 'Sony Xperia 1 VI 5G (12GB + 256GB) - Black 4K OLED',
      category: 'Mobiles',
      brand: 'Sony',
      price: 1399,
      originalPrice: 1499,
      discount: 7,
      rating: 4.8,
      reviewsCount: 940,
      image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600&auto=format&fit=crop&q=80',
      description: 'Continuous optical zoom lens 85-170mm, BRAVIA tuned HDR OLED screen, 3.5mm headphone jack, and dedicated shutter button.',
      specs: { 'Brand': 'Sony', 'Camera': 'Continuous Optical Zoom 85-170mm', 'Audio': 'Hi-Res Audio 3.5mm Jack', 'Display': '120Hz Powered by BRAVIA' },
      tag: 'Pro Camera'
    },

    // ==================== 2. ELECTRONICS & TECH (15 PRODUCTS) ====================
    {
      id: 'amz-elec-1',
      name: 'Apple MacBook Pro 16" (M3 Max Chip, 36GB RAM, 1TB SSD) - Space Black',
      category: 'Electronics',
      brand: 'Apple',
      price: 3499,
      originalPrice: 3899,
      discount: 10,
      rating: 4.9,
      reviewsCount: 3210,
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&auto=format&fit=crop&q=80',
      description: 'The ultimate pro laptop. Liquid Retina XDR display, up to 22 hours of battery life, and monster 16-core CPU graphics performance.',
      specs: { 'Brand': 'Apple', 'Chip': 'Apple M3 Max (16-Core CPU, 40-Core GPU)', 'RAM': '36GB Unified', 'Display': '16.2" Liquid Retina XDR', 'Battery': 'Up to 22 Hours' },
      tag: 'Amazon Choice'
    },
    {
      id: 'amz-elec-2',
      name: 'Dell XPS 15 Laptop (Intel Core i9-13900H, 32GB RAM, 1TB SSD, RTX 4070)',
      category: 'Electronics',
      brand: 'Dell',
      price: 2299,
      originalPrice: 2599,
      discount: 11,
      rating: 4.8,
      reviewsCount: 2140,
      image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=600&auto=format&fit=crop&q=80',
      description: '15.6-inch 3.5K OLED Touch display with CNC aluminum chassis, NVIDIA GeForce RTX 4070 graphics, and quad-speaker sound.',
      specs: { 'Brand': 'Dell', 'Display': '15.6" 3.5K OLED Touch 400-Nit', 'Processor': 'Intel Core i9 13900H', 'Graphics': 'NVIDIA RTX 4070 8GB GDDR6' },
      tag: 'Creator Laptop'
    },
    {
      id: 'amz-elec-3',
      name: 'Lenovo ThinkPad X1 Carbon Gen 11 (Intel Core i7, 32GB RAM, 1TB SSD)',
      category: 'Electronics',
      brand: 'Lenovo',
      price: 1749,
      originalPrice: 1999,
      discount: 12,
      rating: 4.8,
      reviewsCount: 1890,
      image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=600&auto=format&fit=crop&q=80',
      description: 'Ultralight carbon-fiber business laptop built to military durability standards with legendary Ergonomic TrackPoint keyboard.',
      specs: { 'Brand': 'Lenovo', 'Weight': '2.48 lbs Ultra Lightweight', 'Processor': 'Intel Evo i7 1360P', 'Security': 'Match-on-Chip Fingerprint' },
      tag: 'Business Leader'
    },
    {
      id: 'amz-elec-4',
      name: 'ASUS ROG Strix SCAR 18 Gaming Laptop (Intel i9 14900HX, RTX 4090, 32GB RAM)',
      category: 'Electronics',
      brand: 'ASUS',
      price: 3899,
      originalPrice: 4299,
      discount: 9,
      rating: 4.9,
      reviewsCount: 840,
      image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=600&auto=format&fit=crop&q=80',
      description: 'Extreme 18-inch QHD+ 240Hz ROG Nebula HDR Mini LED display powered by NVIDIA GeForce RTX 4090 desktop graphics.',
      specs: { 'Brand': 'ASUS ROG', 'Display': '18" 2.5K QHD+ 240Hz Mini-LED', 'GPU': 'NVIDIA RTX 4090 16GB', 'Cooling': 'Tri-Fan Liquid Metal' },
      tag: 'Monster Gaming'
    },
    {
      id: 'amz-elec-5',
      name: 'Sony WH-1000XM5 Wireless Industry-Leading Noise Canceling Headphones',
      category: 'Electronics',
      brand: 'Sony',
      price: 348,
      originalPrice: 399,
      discount: 13,
      rating: 4.8,
      reviewsCount: 18920,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=80',
      description: 'Auto NC Optimizer noise cancellation with 8 microphones, HD Noise Canceling Processor QN1, and crystal clear hands-free calls.',
      specs: { 'Brand': 'Sony', 'Battery': '30 Hours Playback', 'Processor': 'QN1 + V1 Dual Processors', 'Microphones': '8 Mics Auto NC', 'Weight': '250g Ultra Light' },
      tag: '#1 Best Seller'
    },
    {
      id: 'amz-elec-6',
      name: 'Bose QuietComfort Ultra Wireless Noise Canceling Headphones',
      category: 'Electronics',
      brand: 'Bose',
      price: 379,
      originalPrice: 429,
      discount: 11,
      rating: 4.8,
      reviewsCount: 7410,
      image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=600&auto=format&fit=crop&q=80',
      description: 'Bose Immersive Audio spatial sound, CustomTune technology, quiet/aware modes, and luxurious protein leather cushions.',
      specs: { 'Brand': 'Bose', 'Feature': 'Spatial Immersive Audio', 'Battery': '24 Hours Playback', 'Modes': 'Quiet & Aware Modes' },
      tag: 'Immersion Audio'
    },
    {
      id: 'amz-elec-7',
      name: 'Apple AirPods Max Wireless Over-Ear Headphones - Space Gray',
      category: 'Electronics',
      brand: 'Apple',
      price: 479,
      originalPrice: 549,
      discount: 12,
      rating: 4.7,
      reviewsCount: 14200,
      image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&auto=format&fit=crop&q=80',
      description: 'Apple-designed dynamic driver provides high-fidelity audio. Active Noise Cancellation with Transparency mode and Spatial Audio.',
      specs: { 'Brand': 'Apple', 'Chip': 'Dual Apple H1 Chips', 'Audio': 'Personalized Spatial Audio', 'Canopy': 'Knit Mesh Headband' },
      tag: 'Hi-Fi Audio'
    },
    {
      id: 'amz-elec-8',
      name: 'Sony PlayStation 5 Slim Console (1TB SSD - Disc Edition)',
      category: 'Electronics',
      brand: 'Sony',
      price: 499,
      originalPrice: 549,
      discount: 9,
      rating: 4.9,
      reviewsCount: 42800,
      image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=600&auto=format&fit=crop&q=80',
      description: 'Harness the power of a custom CPU, GPU, and SSD with Integrated I/O that rewrite the rules of what a PlayStation console can do.',
      specs: { 'Brand': 'Sony', 'Storage': '1TB Ultra High Speed NVMe SSD', 'Graphics': 'Ray Tracing up to 4K 120Hz', 'Controller': 'DualSense Wireless' },
      tag: '#1 Gaming Console'
    },
    {
      id: 'amz-elec-9',
      name: 'Xbox Series X 1TB Gaming Console - Carbon Black',
      category: 'Electronics',
      brand: 'Microsoft',
      price: 449,
      originalPrice: 499,
      discount: 10,
      rating: 4.8,
      reviewsCount: 28400,
      image: 'https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=600&auto=format&fit=crop&q=80',
      description: '12 teraflops of raw graphic processing power, 4K gaming at up to 120 FPS, 3D Spatial Audio, and Xbox Velocity Architecture.',
      specs: { 'Brand': 'Microsoft Xbox', 'Power': '12 TFLOPS Custom RDNA 2', 'Resolution': 'True 4K Gaming', 'FPS': 'Up to 120 FPS' },
      tag: '4K Powerhouse'
    },
    {
      id: 'amz-elec-10',
      name: 'Meta Quest 3 512GB Advanced All-in-One VR & Mixed Reality Headset',
      category: 'Electronics',
      brand: 'Meta',
      price: 649,
      originalPrice: 699,
      discount: 7,
      rating: 4.8,
      reviewsCount: 5120,
      image: 'https://images.unsplash.com/photo-1622979135225-d2ba269bc1bd?w=600&auto=format&fit=crop&q=80',
      description: 'Transform your living space with full-color passthrough mixed reality, Snapdragon XR2 Gen 2 power, and Touch Plus controllers.',
      specs: { 'Brand': 'Meta', 'Display': '4K+ Infinite Display (2064x2208 per eye)', 'Processor': 'Snapdragon XR2 Gen 2', 'Tracking': 'Inside-Out 6DoF' },
      tag: 'Mixed Reality'
    },
    {
      id: 'amz-elec-11',
      name: 'ASUS ROG Swift 32" 4K 240Hz QD-OLED Gaming Monitor',
      category: 'Electronics',
      brand: 'ASUS',
      price: 1299,
      originalPrice: 1499,
      discount: 13,
      rating: 4.8,
      reviewsCount: 1450,
      image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600&auto=format&fit=crop&q=80',
      description: '32-inch 4K UHD QD-OLED gaming monitor with extreme 240Hz refresh rate and lightning 0.03ms response time.',
      specs: { 'Brand': 'ASUS ROG', 'Screen': '32" 4K QD-OLED', 'Refresh Rate': '240Hz Native', 'Response Time': '0.03ms GTG', 'HDR': 'DisplayHDR True Black 400' },
      tag: 'Ultimate Gaming'
    },
    {
      id: 'amz-elec-12',
      name: 'DJI Mini 4 Pro Fly More Combo (DJI RC 2 Remote Controller)',
      category: 'Electronics',
      brand: 'DJI',
      price: 1099,
      originalPrice: 1199,
      discount: 8,
      rating: 4.9,
      reviewsCount: 3840,
      image: 'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?w=600&auto=format&fit=crop&q=80',
      description: 'Under 249g ultralight drone with 4K/60fps HDR true vertical shooting, omnidirectional obstacle sensing, and 20km video transmission.',
      specs: { 'Brand': 'DJI', 'Weight': '<249 grams (No License Needed)', 'Camera': '4K/60fps HDR 1/1.3-inch CMOS', 'Transmission': '20km O4 HD Transmission' },
      tag: 'Pro Drone'
    },
    {
      id: 'amz-elec-13',
      name: 'Sony Alpha A7 IV Full-Frame Mirrorless Camera (33MP Body)',
      category: 'Electronics',
      brand: 'Sony',
      price: 2498,
      originalPrice: 2699,
      discount: 7,
      rating: 4.9,
      reviewsCount: 4120,
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&auto=format&fit=crop&q=80',
      description: '33MP Exmor R back-illuminated CMOS sensor, 4K 60p 10-bit 4:2:2 video recording, and Real-time Eye AF for humans, animals, and birds.',
      specs: { 'Brand': 'Sony', 'Sensor': '33MP Full-Frame Exmor R', 'Video': '4K 60p 10-Bit 4:2:2', 'Autofocus': '759 Phase Detection Points' },
      tag: 'Pro Photo/Video'
    },
    {
      id: 'amz-elec-14',
      name: 'ASUS ROG Rapture WiFi 7 Tri-Band Gaming Router (GT-BE98)',
      category: 'Electronics',
      brand: 'ASUS',
      price: 799,
      originalPrice: 899,
      discount: 11,
      rating: 4.8,
      reviewsCount: 940,
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&auto=format&fit=crop&q=80',
      description: 'Quad-band WiFi 7 speed up to 25,000 Mbps, dual 10G ports, 320MHz channels, and Multi-Link Operation for zero-lag gaming.',
      specs: { 'Brand': 'ASUS ROG', 'WiFi Standard': 'WiFi 7 (802.11be)', 'Speed': 'Up to 25 Gbps', 'Ports': 'Dual 10G WAN/LAN Ports' },
      tag: 'WiFi 7 Speed'
    },
    {
      id: 'amz-elec-15',
      name: 'Apple iPad Pro 13" (M4 Chip, 512GB) - Space Black',
      category: 'Electronics',
      brand: 'Apple',
      price: 1499,
      originalPrice: 1699,
      discount: 12,
      rating: 4.9,
      reviewsCount: 2890,
      image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&auto=format&fit=crop&q=80',
      description: 'Ultra Retina XDR Tandem OLED display, incredibly thin design, and next-gen M4 chip for AI workloads.',
      specs: { 'Brand': 'Apple', 'Display': '13" Tandem OLED Ultra Retina XDR', 'Processor': 'Apple M4 Chip', 'Thickness': '5.1mm Ultra Thin', 'Storage': '512GB NVMe' },
      tag: 'New Release'
    },

    // ==================== 3. APPLIANCES & HOME TECH (15 PRODUCTS) ====================
    {
      id: 'amz-app-1',
      name: 'LG InstaView Door-in-Door Smart Refrigerator (635 Liters)',
      category: 'Appliances',
      brand: 'LG',
      price: 1899,
      originalPrice: 2299,
      discount: 17,
      rating: 4.8,
      reviewsCount: 1420,
      image: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=600&auto=format&fit=crop&q=80',
      description: 'Knock twice to see inside without losing cold air. Linear cooling technology, UVnano water dispenser, and ThinQ Smart AI app control.',
      specs: { 'Capacity': '635 Liters Side-by-Side', 'Feature': 'InstaView Glass Panel', 'Dispenser': 'UVnano Water & Ice', 'Compressor': 'Inverter Linear' },
      tag: 'Smart Kitchen'
    },
    {
      id: 'amz-app-2',
      name: 'Samsung 9kg Front Load AI Washing Machine & EcoBubble',
      category: 'Appliances',
      brand: 'Samsung',
      price: 749,
      originalPrice: 899,
      discount: 17,
      rating: 4.7,
      reviewsCount: 2310,
      image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=600&auto=format&fit=crop&q=80',
      description: 'AI Wash optimizes water, detergent, and wash cycles. EcoBubble technology turns detergent into bubbles for deep cleaning at low temps.',
      specs: { 'Capacity': '9.0 kg Front Load', 'Tech': 'EcoBubble + AI Control', 'Motor': 'Digital Inverter (20Y Warranty)', 'Steam Wash': 'Hygiene Steam' },
      tag: 'Top Rated Washer'
    },
    {
      id: 'amz-app-3',
      name: 'Dyson V15 Detect Cordless Vacuum Cleaner',
      category: 'Appliances',
      brand: 'Dyson',
      price: 649,
      originalPrice: 749,
      discount: 13,
      rating: 4.9,
      reviewsCount: 8420,
      image: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?w=600&auto=format&fit=crop&q=80',
      description: 'Laser reveals invisible dust on hard floors. Piezo sensor counts particle size and automatically adjusts suction power.',
      specs: { 'Suction Power': '230 AW Hyperdymium Motor', 'Run Time': 'Up to 60 Minutes', 'Filtration': 'HEPA Whole Machine Filtration' },
      tag: 'Amazon Choice'
    },
    {
      id: 'amz-app-4',
      name: 'Sony BRAVIA XR 65" 4K QD-OLED Smart Google TV',
      category: 'Appliances',
      brand: 'Sony',
      price: 2199,
      originalPrice: 2499,
      discount: 12,
      rating: 4.9,
      reviewsCount: 3150,
      image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=600&auto=format&fit=crop&q=80',
      description: 'Cognitive Processor XR delivers absolute black levels, vibrant QD-OLED colors, Acoustic Surface Audio+, and 120Hz PS5 gaming features.',
      specs: { 'Screen': '65" QD-OLED 4K HDR', 'Processor': 'Cognitive Processor XR', 'Refresh Rate': '120Hz HDMI 2.1 VRR', 'OS': 'Google TV' },
      tag: 'Cinema OLED'
    },
    {
      id: 'amz-app-5',
      name: 'LG Dual Inverter 1.5 Ton Smart Split Air Conditioner (AC)',
      category: 'Appliances',
      brand: 'LG',
      price: 599,
      originalPrice: 749,
      discount: 20,
      rating: 4.7,
      reviewsCount: 4210,
      image: 'https://images.unsplash.com/photo-1631541909061-71e349d1f203?w=600&auto=format&fit=crop&q=80',
      description: 'Dual inverter compressor cools 50% faster with up to 70% energy savings. AI Convertible 6-in-1 cooling modes with HD air filter.',
      specs: { 'Capacity': '1.5 Ton 5-Star', 'Compressor': 'Dual Rotary Inverter', 'Cooling': '6-in-1 AI Convertible', 'App': 'ThinQ WiFi Control' },
      tag: 'Energy Efficient'
    },
    {
      id: 'amz-app-6',
      name: 'Philips XXL HD9650 Air Fryer & Multi-Cooker',
      category: 'Appliances',
      brand: 'Philips',
      price: 199,
      originalPrice: 249,
      discount: 20,
      rating: 4.8,
      reviewsCount: 15400,
      image: 'https://images.unsplash.com/photo-1585515320310-259814833e62?w=600&auto=format&fit=crop&q=80',
      description: 'Twin TurboStar technology removes fat from food. XXL capacity cooks a whole chicken or 1.4kg of fries with little to no oil.',
      specs: { 'Capacity': '1.4 kg / 7.3 Liters', 'Tech': 'Twin TurboStar Fat Removal', 'Preset Programs': '5 One-Touch Presets' },
      tag: '#1 Air Fryer'
    },
    {
      id: 'amz-app-7',
      name: 'Roborock S8 MaxV Ultra Robot Vacuum & Mop Cleaner',
      category: 'Appliances',
      brand: 'Roborock',
      price: 1399,
      originalPrice: 1599,
      discount: 13,
      rating: 4.9,
      reviewsCount: 1920,
      image: 'https://images.unsplash.com/photo-1616712134411-6b6ae89bc3ba?w=600&auto=format&fit=crop&q=80',
      description: '10,000 Pa extreme suction power, FlexiArm side brush, hot water mop washing, auto dust emptying, and AI obstacle avoidance.',
      specs: { 'Suction': '10,000 Pa HyperForce', 'Dock': '8-in-1 RockDock Ultra', 'Mopping': 'VibraRise 3.0 Sonic Mop', 'AI': 'Reactive AI 2.0 Camera' },
      tag: 'Ultimate Robot Clean'
    },
    {
      id: 'amz-app-8',
      name: 'Whirlpool 30L Smart Convection Microwave Oven',
      category: 'Appliances',
      brand: 'Whirlpool',
      price: 189,
      originalPrice: 229,
      discount: 17,
      rating: 4.7,
      reviewsCount: 6840,
      image: 'https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=600&auto=format&fit=crop&q=80',
      description: '30L capacity suitable for large families. 300 auto-cook menus, 6th Sense crispy bake technology, and zero-oil cooking mode.',
      specs: { 'Capacity': '30 Liters Convection', 'Menus': '300 Auto Cook Recipes', 'Baking': '6th Sense Crispy Grill' },
      tag: 'Smart Oven'
    },
    {
      id: 'amz-app-9',
      name: 'Bosch Series 6 14 Place Settings Freestanding Dishwasher',
      category: 'Appliances',
      brand: 'Bosch',
      price: 849,
      originalPrice: 999,
      discount: 15,
      rating: 4.8,
      reviewsCount: 3120,
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&auto=format&fit=crop&q=80',
      description: 'PerfectDry with Zeolith technology dries dishes, glassware, and plastic containers with 100% sparkling finish.',
      specs: { 'Capacity': '14 Place Settings', 'Drying': 'Zeolith Mineral Drying', 'Noise': '44 dB Super Silent' },
      tag: 'German Engineering'
    },
    {
      id: 'amz-app-10',
      name: 'Dyson Purifier Cool Formaldehyde TP09 Air Purifier',
      category: 'Appliances',
      brand: 'Dyson',
      price: 699,
      originalPrice: 799,
      discount: 13,
      rating: 4.8,
      reviewsCount: 4210,
      image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&auto=format&fit=crop&q=80',
      description: 'Automatically detects and destroys formaldehyde. HEPA H13 filtration captures 99.95% of ultrafine dust and allergens.',
      specs: { 'Filtration': 'HEPA H13 + Catalytic Formaldehyde Filter', 'Coverage': 'Up to 600 sq ft', 'Airflow': '350° Air Multiplier' },
      tag: 'Pure Air'
    },
    {
      id: 'amz-app-11',
      name: 'Breville Barista Touch Impress Espresso Machine',
      category: 'Appliances',
      brand: 'Breville',
      price: 1499,
      originalPrice: 1699,
      discount: 12,
      rating: 4.9,
      reviewsCount: 1840,
      image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&auto=format&fit=crop&q=80',
      description: 'Touchscreen espresso machine with Impress Puck System, precise 9 bar extraction, and ThermoJet 3-second heat up.',
      specs: { 'Brand': 'Breville', 'Grinder': 'Baratza European Precision Burrs', 'Heating': 'ThermoJet 3-Sec System', 'Milk': 'Auto MilQ Hands Free' },
      tag: 'Barista Espresso'
    },
    {
      id: 'amz-app-12',
      name: 'Kent Grand Plus 8L RO + UV + UF Water Purifier',
      category: 'Appliances',
      brand: 'Kent',
      price: 249,
      originalPrice: 299,
      discount: 17,
      rating: 4.7,
      reviewsCount: 9420,
      image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4e?w=600&auto=format&fit=crop&q=80',
      description: 'Multiple purification process by RO+UV+UF+TDS Control removes dissolved impurities and retains essential natural minerals.',
      specs: { 'Capacity': '8 Liters Storage', 'Purification': 'RO + UV + UF + TDS Control', 'In-Tank UV': 'LED Disinfection' },
      tag: 'Pure Water'
    },
    {
      id: 'amz-app-13',
      name: 'Panasonic 55" 4K Ultra HD Smart LED TV (Google TV)',
      category: 'Appliances',
      brand: 'Panasonic',
      price: 499,
      originalPrice: 599,
      discount: 17,
      rating: 4.7,
      reviewsCount: 5210,
      image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=600&auto=format&fit=crop&q=80',
      description: '4K Color Engine with Dolby Vision & Dolby Atmos sound engine. Google Assistant voice search remote included.',
      specs: { 'Screen': '55" 4K HDR10+', 'Audio': 'Dolby Atmos 20W', 'OS': 'Google TV Smart' },
      tag: '4K Smart TV'
    },
    {
      id: 'amz-app-14',
      name: 'Faber 60cm 1500 m³/hr Auto-Clean Kitchen Chimney',
      category: 'Appliances',
      brand: 'Faber',
      price: 229,
      originalPrice: 279,
      discount: 18,
      rating: 4.6,
      reviewsCount: 3840,
      image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=600&auto=format&fit=crop&q=80',
      description: 'Touch control with Motion Sensor technology. Powerful 1500 m³/hr suction power keeps kitchen smoke-free.',
      specs: { 'Suction': '1500 m³/hr', 'Control': 'Touch & Motion Gesture Control', 'Clean': 'Heat Auto-Clean Tech' },
      tag: 'Clean Kitchen'
    },
    {
      id: 'amz-app-15',
      name: 'Instant Pot Duo 7-in-1 Electric Pressure Cooker (6 Quart)',
      category: 'Appliances',
      brand: 'Instant Pot',
      price: 99,
      originalPrice: 129,
      discount: 23,
      rating: 4.8,
      reviewsCount: 84100,
      image: 'https://images.unsplash.com/photo-1585515320310-259814833e62?w=600&auto=format&fit=crop&q=80',
      description: 'Replaces 7 kitchen appliances: pressure cooker, slow cooker, rice cooker, steamer, sauté pan, yogurt maker and warmer.',
      specs: { 'Capacity': '6 Quart (5.7 Liters)', 'Programs': '13 One-Touch Smart Programs', 'Safety': '10+ Overheat Protection Features' },
      tag: '#1 Cooker'
    },

    // ==================== 4. FURNITURE & HOME LIVING (15 PRODUCTS) ====================
    {
      id: 'amz-furn-1',
      name: 'Herman Miller Aeron Ergonomic Executive Chair (Size B)',
      category: 'Furniture',
      brand: 'Herman Miller',
      price: 1295,
      originalPrice: 1495,
      discount: 13,
      rating: 4.9,
      reviewsCount: 5410,
      image: 'https://images.unsplash.com/photo-1580481072645-022f9a6d5017?w=600&auto=format&fit=crop&q=80',
      description: 'Pellicle 8Z breathable suspension mesh and PostureFit SL back support for world-class ergonomic office sitting.',
      specs: { 'Brand': 'Herman Miller', 'Mesh': '8Z Pellicle Suspension', 'Lumbar': 'PostureFit SL Adjustable', 'Warranty': '12-Year Warranty' },
      tag: 'Ergonomic Leader'
    },
    {
      id: 'amz-furn-2',
      name: 'FlexiSpot E7 Ergonomic Motorized Height-Adjustable Standing Desk',
      category: 'Furniture',
      brand: 'FlexiSpot',
      price: 479,
      originalPrice: 579,
      discount: 17,
      rating: 4.8,
      reviewsCount: 6810,
      image: 'https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?w=600&auto=format&fit=crop&q=80',
      description: 'Dual-motor electric height adjustment from 22.8" to 48.4", premium solid bamboo tabletop, anti-collision sensor, and 355 lbs capacity.',
      specs: { 'Motors': 'Dual Electric Motors', 'Height Range': '22.8" - 48.4"', 'Desktop': '55" x 28" Solid Bamboo', 'Weight Capacity': '355 lbs' },
      tag: 'Best Standing Desk'
    },
    {
      id: 'amz-furn-3',
      name: 'Ashley Furniture Signature Leather Power Recliner Sofa',
      category: 'Furniture',
      brand: 'Ashley Furniture',
      price: 899,
      originalPrice: 1099,
      discount: 18,
      rating: 4.7,
      reviewsCount: 3240,
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&auto=format&fit=crop&q=80',
      description: 'Top-grain genuine leather upholstery with dual-motor power reclining, adjustable headrest, USB charging ports, and cup holders.',
      specs: { 'Material': 'Top-Grain Genuine Leather', 'Mechanism': 'Dual Motor Power Recline', 'Extra': 'USB Charging & LED Cup Holders' },
      tag: 'Luxury Sofa'
    },
    {
      id: 'amz-furn-4',
      name: 'West Elm Mid-Century Modern Solid Wood Dining Table Set (6 Seats)',
      category: 'Furniture',
      brand: 'West Elm',
      price: 1149,
      originalPrice: 1399,
      discount: 18,
      rating: 4.9,
      reviewsCount: 1420,
      image: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?w=600&auto=format&fit=crop&q=80',
      description: 'Kiln-dried solid walnut wood dining table crafted with iconic tapered legs, including 6 matching cushioned dining chairs.',
      specs: { 'Wood': 'Solid Walnut & Eucalyptus', 'Seating': '6 Persons Included', 'Dimensions': '72" L x 36" W x 30" H' },
      tag: 'Mid-Century Modern'
    },
    {
      id: 'amz-furn-5',
      name: 'Zinus Green Tea 12" Cooling Memory Foam Queen Mattress',
      category: 'Furniture',
      brand: 'Zinus',
      price: 329,
      originalPrice: 399,
      discount: 18,
      rating: 4.7,
      reviewsCount: 68400,
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&auto=format&fit=crop&q=80',
      description: 'Infused with natural green tea extract and active charcoal to block moisture and odors for fresh, pressure-relieving sleep.',
      specs: { 'Size': 'Queen (60" x 80" x 12")', 'Foam': 'CertiPUR-US Memory Foam', 'Infusion': 'Green Tea & Purified Charcoal' },
      tag: '#1 Mattress'
    },
    {
      id: 'amz-furn-6',
      name: 'IKEA STRANDMON Wing Armchair - Nordvalla Dark Grey',
      category: 'Furniture',
      brand: 'IKEA',
      price: 299,
      originalPrice: 349,
      discount: 14,
      rating: 4.8,
      reviewsCount: 11200,
      image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=600&auto=format&fit=crop&q=80',
      description: 'Classic high back wing chair providing lumbar support and neck comfort. Upholstered in durable, machine-washable woven fabric.',
      specs: { 'Brand': 'IKEA', 'Style': 'Classic Wingback Chair', 'Fabric': 'High Resistance Woven Poly', 'Frame': 'Solid Beech & Plywood' },
      tag: 'Classic Comfort'
    },
    {
      id: 'amz-furn-7',
      name: 'Article Sven Charme Tan Leather Mid-Century 3-Seater Sofa',
      category: 'Furniture',
      brand: 'Article',
      price: 1599,
      originalPrice: 1899,
      discount: 16,
      rating: 4.9,
      reviewsCount: 2450,
      image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&auto=format&fit=crop&q=80',
      description: 'Full-aniline Italian tanned leather sofa with plush feather-down toppers and solid mahogany corner-blocked wooden frame.',
      specs: { 'Leather': 'Full-Aniline Italian Charme Tan', 'Cushions': 'High-Density Foam with Feather Down', 'Length': '88" Long' },
      tag: 'Italian Leather'
    },
    {
      id: 'amz-furn-8',
      name: 'Songmics 5-Tier Industrial Wood & Steel Bookshelf Storage',
      category: 'Furniture',
      brand: 'Songmics',
      price: 119,
      originalPrice: 149,
      discount: 20,
      rating: 4.8,
      reviewsCount: 14200,
      image: 'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?w=600&auto=format&fit=crop&q=80',
      description: 'Sturdy black matte iron frame paired with rustic brown wood shelving units. Each tier holds up to 66 lbs of books and decor.',
      specs: { 'Tiers': '5 Shelves', 'Frame': 'Heavy Duty Alloy Steel', 'Height': '70 inches' },
      tag: 'Industrial Decor'
    },
    {
      id: 'amz-furn-9',
      name: 'Pottery Barn Chesterfield Leather 3-Piece Sectional Sofa Couch',
      category: 'Furniture',
      brand: 'Pottery Barn',
      price: 3499,
      originalPrice: 3999,
      discount: 12,
      rating: 4.9,
      reviewsCount: 1120,
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&auto=format&fit=crop&q=80',
      description: 'Hand-tufted genuine leather sectional sofa featuring classic rolled arms and antique brass nailhead accents.',
      specs: { 'Material': 'Top Grain Leather', 'Arms': 'Classic Rolled Tufted', 'Seating': '5-6 Persons Sectional' },
      tag: 'Grand Sectional'
    },
    {
      id: 'amz-furn-10',
      name: 'Coavas Folding Modern Computer Desk & Study Table',
      category: 'Furniture',
      brand: 'Coavas',
      price: 79,
      originalPrice: 99,
      discount: 20,
      rating: 4.7,
      reviewsCount: 18400,
      image: 'https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?w=600&auto=format&fit=crop&q=80',
      description: 'No assembly required folding writing desk. Made of waterproof textured MDF tabletop and black powder-coated steel legs.',
      specs: { 'Assembly': 'Zero Tool Assembly Required', 'Foldable': 'Flats in 5 seconds', 'Top': 'Waterproof MDF Wood' },
      tag: 'No Assembly'
    },
    {
      id: 'amz-furn-11',
      name: 'Walker Edison Industrial Minimalist TV Stand Console (Up to 65")',
      category: 'Furniture',
      brand: 'Walker Edison',
      price: 219,
      originalPrice: 269,
      discount: 18,
      rating: 4.7,
      reviewsCount: 9410,
      image: 'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?w=600&auto=format&fit=crop&q=80',
      description: 'Accommodates TVs up to 65 inches. Features open shelving units and cord management ports for cable boxes and gaming consoles.',
      specs: { 'TV Size': 'Fits up to 65" Flat Screens', 'Cable Mgmt': '4 Cable Pass-Through Ports', 'Frame': 'High-Grade MDF & Metal' },
      tag: 'TV Console'
    },
    {
      id: 'amz-furn-12',
      name: 'Prepac 6-Drawer Tall Bedroom Dresser & Chest',
      category: 'Furniture',
      brand: 'Prepac',
      price: 249,
      originalPrice: 299,
      discount: 17,
      rating: 4.6,
      reviewsCount: 5120,
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&auto=format&fit=crop&q=80',
      description: 'Smooth metal glides with built-in safety stops. Brushed solid metal knobs and non-toxic laminated composite wood.',
      specs: { 'Drawers': '6 Deep Drawers', 'Glides': 'Nylon Metal Glides with Safety Stops', 'Finish': 'Espresso Wood Grain' },
      tag: 'Bedroom Storage'
    },
    {
      id: 'amz-furn-13',
      name: 'Zinus Lorelei Metal Platform Bed Frame with Headboard (Queen)',
      category: 'Furniture',
      brand: 'Zinus',
      price: 159,
      originalPrice: 199,
      discount: 20,
      rating: 4.8,
      reviewsCount: 32400,
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&auto=format&fit=crop&q=80',
      description: 'Strong steel slat support eliminates the need for a box spring. 12 inches of under-bed clearance for extra storage.',
      specs: { 'Size': 'Queen Platform', 'Under-bed Clearance': '12 inches', 'Weight Limit': '1500 lbs Static' },
      tag: 'Noise-Free Bed'
    },
    {
      id: 'amz-furn-14',
      name: 'Winsome Wood 3-Piece Counter Height Bar Stool Table Set',
      category: 'Furniture',
      brand: 'Winsome',
      price: 189,
      originalPrice: 229,
      discount: 17,
      rating: 4.6,
      reviewsCount: 4210,
      image: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?w=600&auto=format&fit=crop&q=80',
      description: 'Solid beech wood construction counter height table with 2 matching square stool chairs for compact breakfast nooks.',
      specs: { 'Wood': '100% Solid Beech Wood', 'Set': '1 High Table + 2 Stools', 'Finish': 'Warm Walnut' },
      tag: 'Breakfast Set'
    },
    {
      id: 'amz-furn-15',
      name: 'Outdoor Patio Wicker Conversation Set with Cushions (4-Piece)',
      category: 'Furniture',
      brand: 'Devoko',
      price: 349,
      originalPrice: 429,
      discount: 18,
      rating: 4.7,
      reviewsCount: 8940,
      image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=600&auto=format&fit=crop&q=80',
      description: 'All-weather PE rattan wicker furniture set including double loveseat sofa, 2 single armchairs, and tempered glass coffee table.',
      specs: { 'Material': 'Weatherproof PE Rattan Wicker', 'Glass': 'Tempered Glass Tabletop', 'Cushions': 'Spun Polyester Waterproof' },
      tag: 'Patio Living'
    },

    // ==================== 5. FASHION & APPAREL (10 PRODUCTS) ====================
    {
      id: 'amz-fash-1',
      name: 'Levi\'s Men\'s 501 Original Fit Straight Jeans',
      category: 'Fashion',
      brand: 'Levi\'s',
      price: 59,
      originalPrice: 79,
      discount: 25,
      rating: 4.6,
      reviewsCount: 34120,
      image: 'https://images.unsplash.com/photo-1542272604-780c36856d60?w=600&auto=format&fit=crop&q=80',
      description: 'The iconic 501 straight leg denim jeans with classic button fly styling made from 100% durable cotton.',
      specs: { 'Material': '100% Cotton Denim', 'Fit': 'Original Straight Fit', 'Closure': 'Classic Button Fly' },
      tag: 'Classic Denim'
    },
    {
      id: 'amz-fash-2',
      name: 'Ray-Ban RB2140 Original Wayfarer Polarized Sunglasses',
      category: 'Fashion',
      brand: 'Ray-Ban',
      price: 163,
      originalPrice: 213,
      discount: 23,
      rating: 4.8,
      reviewsCount: 15400,
      image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&auto=format&fit=crop&q=80',
      description: '100% UV400 polarized crystal glass lenses housed in iconic acetate wayfarer frames.',
      specs: { 'Lens': 'Polarized G-15 Green Crystal Glass', 'Frame': 'Acetate Wayfarer', 'UV Protection': '100% UV400' },
      tag: 'Iconic Style'
    },
    {
      id: 'amz-fash-3',
      name: 'Nike Sportswear Tech Fleece Full-Zip Windrunner Hoodie',
      category: 'Fashion',
      brand: 'Nike',
      price: 135,
      originalPrice: 160,
      discount: 16,
      rating: 4.8,
      reviewsCount: 8910,
      image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=600&auto=format&fit=crop&q=80',
      description: 'Premium lightweight fleece smooth on both sides provides warmth without adding bulk.',
      specs: { 'Material': '66% Cotton, 34% Polyester', 'Fit': 'Standard Fit', 'Zip': 'Full-length 2-way zipper' },
      tag: '#1 Fleece'
    },
    {
      id: 'amz-fash-4',
      name: 'The North Face 1996 Retro Nuptse Down Jacket - Black',
      category: 'Fashion',
      brand: 'The North Face',
      price: 320,
      originalPrice: 360,
      discount: 11,
      rating: 4.9,
      reviewsCount: 7420,
      image: 'https://images.unsplash.com/photo-1544441893-675973e31985?w=600&auto=format&fit=crop&q=80',
      description: 'Iconic boxy silhouette with 700-fill goose down insulation, durable ripstop fabric, and stowable hood.',
      specs: { 'Insulation': '700-Fill Goose Down', 'Shell': '100% Recycled Ripstop Nylon', 'Waterproof': 'DWR Finish' },
      tag: 'Winter Classic'
    },
    {
      id: 'amz-fash-5',
      name: 'Hugo Boss Men\'s Italian Wool 2-Piece Slim Fit Suit',
      category: 'Fashion',
      brand: 'Hugo Boss',
      price: 649,
      originalPrice: 799,
      discount: 18,
      rating: 4.8,
      reviewsCount: 1840,
      image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&auto=format&fit=crop&q=80',
      description: 'Tailored in pure Italian Super 120s virgin wool. Notch lapel blazer with matching flat-front trousers.',
      specs: { 'Material': '100% Italian Virgin Wool Super 120s', 'Fit': 'Modern Slim Fit', 'Origin': 'Made in Europe' },
      tag: 'Luxury Suit'
    },
    {
      id: 'amz-fash-6',
      name: 'Ralph Lauren Polo Bear Cotton Knit Crewneck Sweater',
      category: 'Fashion',
      brand: 'Ralph Lauren',
      price: 248,
      originalPrice: 298,
      discount: 16,
      rating: 4.8,
      reviewsCount: 2150,
      image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&auto=format&fit=crop&q=80',
      description: 'Crafted from soft combed cotton featuring the iconic Polo Bear intarsia-knit at the center front with hand-embroidered RL details.',
      specs: { 'Material': '100% Combed Cotton', 'Knit': 'Intarsia-Knit Polo Bear', 'Neck': 'Ribbed Crewneck' },
      tag: 'Iconic Bear'
    },
    {
      id: 'amz-fash-7',
      name: 'Tommy Hilfiger Men\'s Classic Fit Oxford Button-Down Shirt',
      category: 'Fashion',
      brand: 'Tommy Hilfiger',
      price: 49,
      originalPrice: 65,
      discount: 24,
      rating: 4.7,
      reviewsCount: 12400,
      image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&auto=format&fit=crop&q=80',
      description: 'Pre-washed cotton oxford cloth shirt with button-down collar and flag logo embroidered at the left chest pocket.',
      specs: { 'Material': '100% Soft Cotton Oxford', 'Collar': 'Button-Down Collar', 'Fit': 'Regular Fit' },
      tag: 'Casual Classic'
    },
    {
      id: 'amz-fash-8',
      name: 'Columbia Men\'s Watertight II Waterproof Rain Jacket',
      category: 'Fashion',
      brand: 'Columbia',
      price: 69,
      originalPrice: 89,
      discount: 22,
      rating: 4.7,
      reviewsCount: 41200,
      image: 'https://images.unsplash.com/photo-1544441893-675973e31985?w=600&auto=format&fit=crop&q=80',
      description: 'Omni-Tech waterproof/breathable fully seam-sealed nylon shell jacket packs down into its own hand pocket.',
      specs: { 'Tech': 'Omni-Tech Waterproof/Breathable', 'Lining': '100% Mesh Polyester', 'Packable': 'Stows in pocket' },
      tag: '#1 Rain Jacket'
    },
    {
      id: 'amz-fash-9',
      name: 'Zara Women\'s Tailored Double-Breasted Linen Blazer',
      category: 'Fashion',
      brand: 'Zara',
      price: 89,
      originalPrice: 119,
      discount: 25,
      rating: 4.7,
      reviewsCount: 3840,
      image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&auto=format&fit=crop&q=80',
      description: 'Lightweight linen blend double-breasted lapel jacket featuring tortoise shell buttons and flap pockets.',
      specs: { 'Material': '55% Linen, 45% Cotton', 'Buttons': 'Tortoise Shell Dual Row', 'Fit': 'Structured Oversized' },
      tag: 'Summer Chic'
    },
    {
      id: 'amz-fash-10',
      name: 'Calvin Klein Women\'s Modern Cotton Bralette & Panty Set',
      category: 'Fashion',
      brand: 'Calvin Klein',
      price: 38,
      originalPrice: 48,
      discount: 20,
      rating: 4.8,
      reviewsCount: 28400,
      image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&auto=format&fit=crop&q=80',
      description: 'Soft cotton modal blend wireless bralette and bikini panty with iconic Calvin Klein repeating logo band.',
      specs: { 'Material': '53% Cotton, 35% Modal, 12% Elastane', 'Style': 'Racerback Wireless Bralette', 'Band': 'Repeat Logo Elastic' },
      tag: '#1 Comfort Set'
    },

    // ==================== 6. SHOES & FOOTWEAR (10 PRODUCTS) ====================
    {
      id: 'amz-shoe-1',
      name: 'Nike Men\'s Air Force 1 \'07 Basketball Shoes - White',
      category: 'Shoes',
      brand: 'Nike',
      price: 115,
      originalPrice: 135,
      discount: 15,
      rating: 4.8,
      reviewsCount: 42100,
      image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&auto=format&fit=crop&q=80',
      description: 'The radiance lives on in the Nike Air Force 1 \'07, the b-ball icon that puts a fresh spin on stitched leather overlays and classic white style.',
      specs: { 'Upper': 'Stitched Leather Overlays', 'Cushioning': 'Encapsulated Nike Air', 'Outsole': 'Non-marking Rubber' },
      tag: '#1 Best Seller'
    },
    {
      id: 'amz-shoe-2',
      name: 'Adidas Ultraboost Light Running Shoes',
      category: 'Shoes',
      brand: 'Adidas',
      price: 149,
      originalPrice: 190,
      discount: 22,
      rating: 4.7,
      reviewsCount: 18450,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=80',
      description: 'Experience epic energy in the new Ultraboost Light, featuring Light BOOST material designed for ultimate bounce.',
      specs: { 'Midsole': '30% Lighter Light BOOST', 'Upper': 'PRIMEKNIT+ Textile', 'Outsole': 'Continental Rubber' },
      tag: 'Top Performance'
    },
    {
      id: 'amz-shoe-3',
      name: 'Timberland Men\'s 6-Inch Premium Waterproof Leather Boots',
      category: 'Shoes',
      brand: 'Timberland',
      price: 198,
      originalPrice: 240,
      discount: 17,
      rating: 4.8,
      reviewsCount: 22400,
      image: 'https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=600&auto=format&fit=crop&q=80',
      description: 'Seam-sealed waterproof construction made with premium nubuck leather and 400g PrimaLoft insulation.',
      specs: { 'Leather': 'Premium Waterproof Nubuck', 'Insulation': '400g PrimaLoft', 'Padded Collar': 'Comfort Ankle Fit' },
      tag: 'Waterproof Classic'
    },
    {
      id: 'amz-shoe-4',
      name: 'Air Jordan 1 Retro High OG "Chicago Lost & Found"',
      category: 'Shoes',
      brand: 'Nike',
      price: 249,
      originalPrice: 299,
      discount: 16,
      rating: 4.9,
      reviewsCount: 18200,
      image: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=600&auto=format&fit=crop&q=80',
      description: 'The sneaker that started it all. Premium aged leather upper with classic red, white, and black colorway.',
      specs: { 'Upper': 'Cracked Aged Leather', 'Color': 'Varsity Red/Sail/Black', 'Midsole': 'Encapsulated Air Cushioning' },
      tag: 'Collector Edition'
    },
    {
      id: 'amz-shoe-5',
      name: 'New Balance 9060 Unisex Chunky Lifestyle Sneakers',
      category: 'Shoes',
      brand: 'New Balance',
      price: 149,
      originalPrice: 179,
      discount: 16,
      rating: 4.8,
      reviewsCount: 9410,
      image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?w=600&auto=format&fit=crop&q=80',
      description: 'Futuristic design inspired by the 990 series with dual-density ABZORB and SBS cushioning pod sole.',
      specs: { 'Midsole': 'ABZORB + SBS Cushioning', 'Upper': 'Mesh & Pigskin Suede', 'Style': 'Chunky 90s Y2K' },
      tag: 'Trending Chunky'
    },
    {
      id: 'amz-shoe-6',
      name: 'Converse Chuck Taylor All Star 70 High Top Sneakers',
      category: 'Shoes',
      brand: 'Converse',
      price: 85,
      originalPrice: 95,
      discount: 10,
      rating: 4.8,
      reviewsCount: 52100,
      image: 'https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=600&auto=format&fit=crop&q=80',
      description: 'Heavy-grade 12oz canvas upper, vintage egret rubber foxing, and cushioned OrthoLite insole for all-day wear.',
      specs: { 'Canvas': '12 oz Vintage Canvas', 'Insole': 'OrthoLite Cushioning', 'Sole': 'High Rubber Wall' },
      tag: 'Timeless Icon'
    },
    {
      id: 'amz-shoe-7',
      name: 'Crocs Classic Unisex Clogs with Jibbitz Charms',
      category: 'Shoes',
      brand: 'Crocs',
      price: 49,
      originalPrice: 59,
      discount: 17,
      rating: 4.7,
      reviewsCount: 112000,
      image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&auto=format&fit=crop&q=80',
      description: 'Water-friendly lightweight Croslite foam construction with ventilation ports for breathability and quick drying.',
      specs: { 'Material': '100% Croslite Foam', 'Clean': 'Waterproof & Easy Hose Off', 'Strap': 'Pivoting Heel Strap' },
      tag: '#1 Comfort Clog'
    },
    {
      id: 'amz-shoe-8',
      name: 'Dr. Martens 1460 8-Eye Smooth Leather Unisex Boots',
      category: 'Shoes',
      brand: 'Dr. Martens',
      price: 170,
      originalPrice: 190,
      discount: 10,
      rating: 4.7,
      reviewsCount: 19400,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=80',
      description: 'Constructed with durable Smooth leather, iconic yellow welt stitching, and oil/fat resistant AirWair air-cushioned sole.',
      specs: { 'Leather': 'Durable Dr. Martens Smooth', 'Stitching': 'Yellow Goodyear Welted', 'Sole': 'AirWair Bouncing Sole' },
      tag: 'Punk Classic'
    },
    {
      id: 'amz-shoe-9',
      name: 'Hoka One One Clifton 9 Neutral Max Cushioning Running Shoes',
      category: 'Shoes',
      brand: 'Hoka',
      price: 145,
      originalPrice: 165,
      discount: 12,
      rating: 4.9,
      reviewsCount: 14800,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=80',
      description: 'Revitalized with lighter compression molded EVA foam midsole and early-stage Meta-Rocker for smooth stride transition.',
      specs: { 'Midsole': 'Compression Molded EVA', 'Meta-Rocker': 'Early-Stage Geometry', 'Weight': '8.7 oz Light' },
      tag: 'Max Cushion'
    },
    {
      id: 'amz-shoe-10',
      name: 'Vans Old Skool Classic Skate Shoes - Black/White',
      category: 'Shoes',
      brand: 'Vans',
      price: 70,
      originalPrice: 80,
      discount: 12,
      rating: 4.8,
      reviewsCount: 68400,
      image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&auto=format&fit=crop&q=80',
      description: 'First to bare the iconic side stripe. Sturdy suede and canvas uppers, re-enforced toe caps, and signature waffle rubber outsoles.',
      specs: { 'Upper': 'Suede & Canvas Combo', 'Outsole': 'Signature Rubber Waffle', 'Closure': 'Lace-up' },
      tag: 'Skate Classic'
    },

    // ==================== 7. BEAUTY & PERSONAL CARE (10 PRODUCTS) ====================
    {
      id: 'amz-beau-1',
      name: 'Dyson Airwrap Multi-Styler Complete Long - Strawberry Bronze',
      category: 'Beauty',
      brand: 'Dyson',
      price: 599,
      originalPrice: 649,
      discount: 8,
      rating: 4.9,
      reviewsCount: 12400,
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&auto=format&fit=crop&q=80',
      description: 'Curl, shape, smooth, and hide flyaways using the Coanda effect with no extreme heat damage.',
      specs: { 'Technology': 'Coanda Airflow Airwrap', 'Attachments': '6 Multi-styler barrels & brushes', 'Heat Control': 'Intelligent Heat Sensor' },
      tag: 'Amazon Choice'
    },
    {
      id: 'amz-beau-2',
      name: 'CeraVe Hydrating Facial Cleanser (16 Fl Oz / 473ml)',
      category: 'Beauty',
      brand: 'CeraVe',
      price: 15,
      originalPrice: 19,
      discount: 21,
      rating: 4.8,
      reviewsCount: 89400,
      image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&auto=format&fit=crop&q=80',
      description: 'Formulated with hyaluronic acid, ceramides, and glycerin to cleanse skin without stripping natural moisture.',
      specs: { 'Ingredients': '3 Essential Ceramides & Hyaluronic Acid', 'Volume': '473ml', 'Dermatologist Recommended': 'Yes' },
      tag: '#1 Skincare Cleanser'
    },
    {
      id: 'amz-beau-3',
      name: 'Estée Lauder Advanced Night Repair Synchronized Serum (50ml)',
      category: 'Beauty',
      brand: 'Estée Lauder',
      price: 115,
      originalPrice: 135,
      discount: 15,
      rating: 4.9,
      reviewsCount: 16800,
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&auto=format&fit=crop&q=80',
      description: 'Patented Chronolux Power Signal Technology promotes natural skin repair and collagen production overnight.',
      specs: { 'Volume': '50 ml / 1.7 oz', 'Benefits': 'Reduces Fine Lines, Hyaluronic Hydration', 'Skin Type': 'All Skin Types' },
      tag: 'Luxury Serum'
    },
    {
      id: 'amz-beau-4',
      name: 'La Mer Crème de la Mer Ultra Moisturizing Cream (60ml)',
      category: 'Beauty',
      brand: 'La Mer',
      price: 380,
      originalPrice: 420,
      discount: 9,
      rating: 4.9,
      reviewsCount: 3120,
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&auto=format&fit=crop&q=80',
      description: 'Infused with cell-renewing Miracle Broth, this ultra-rich cream delivers healing moisture, daily protection, and energized repair.',
      specs: { 'Key Ingredient': 'Miracle Broth Sea Kelp', 'Volume': '60 ml / 2 oz', 'Texture': 'Rich Cream' },
      tag: 'Ultra Luxury'
    },
    {
      id: 'amz-beau-5',
      name: 'Olaplex No. 3 Hair Perfector Repairing Treatment (100ml)',
      category: 'Beauty',
      brand: 'Olaplex',
      price: 30,
      originalPrice: 38,
      discount: 21,
      rating: 4.8,
      reviewsCount: 74200,
      image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&auto=format&fit=crop&q=80',
      description: 'Weekly at-home treatment that reduces breakage and visibly strengthens hair, improving its look and feel.',
      specs: { 'Technology': 'Bond Building Bis-Aminopropyl Diglycol', 'Volume': '100 ml', 'Sulfate Free': 'Yes' },
      tag: '#1 Hair Repair'
    },
    {
      id: 'amz-beau-6',
      name: 'Dior Sauvage Eau de Parfum Spray (100ml / 3.4 oz)',
      category: 'Beauty',
      brand: 'Dior',
      price: 145,
      originalPrice: 165,
      discount: 12,
      rating: 4.9,
      reviewsCount: 28900,
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&auto=format&fit=crop&q=80',
      description: 'A radically fresh composition with notes of Calabrian bergamot and Papua New Guinean vanilla absolute.',
      specs: { 'Scent': 'Fresh Citrus & Warm Amber Wood', 'Volume': '100 ml / 3.4 oz', 'Concentration': 'Eau de Parfum' },
      tag: 'Top Fragrance'
    },
    {
      id: 'amz-beau-7',
      name: 'The Ordinary Niacinamide 10% + Zinc 1% Blemish Serum',
      category: 'Beauty',
      brand: 'The Ordinary',
      price: 11,
      originalPrice: 15,
      discount: 26,
      rating: 4.7,
      reviewsCount: 94100,
      image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&auto=format&fit=crop&q=80',
      description: 'High-strength vitamin and mineral blemish formula reduces appearance of skin spots and congestion.',
      specs: { 'Niacinamide': '10% High Potency', 'Zinc PCA': '1% Balancing', 'Volume': '30 ml' },
      tag: 'Budget Savior'
    },
    {
      id: 'amz-beau-8',
      name: 'Laneige Lip Sleeping Mask - Berry Intense Hydration',
      category: 'Beauty',
      brand: 'Laneige',
      price: 24,
      originalPrice: 29,
      discount: 17,
      rating: 4.9,
      reviewsCount: 68400,
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&auto=format&fit=crop&q=80',
      description: 'Overnight leave-on lip mask enriched with Berry Mix Complex, Vitamin C, and hyaluronic acid for plush lips.',
      specs: { 'Complex': 'Berry Fruit Extract & Vitamin C', 'Volume': '20g', 'Dermatologist Tested': 'Yes' },
      tag: 'Lip Cult Favorite'
    },
    {
      id: 'amz-beau-9',
      name: 'SK-II Facial Treatment Essence with Pitera (160ml)',
      category: 'Beauty',
      brand: 'SK-II',
      price: 199,
      originalPrice: 235,
      discount: 15,
      rating: 4.8,
      reviewsCount: 6210,
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&auto=format&fit=crop&q=80',
      description: 'Formulated with over 90% Pitera, the iconic bio-ingredient that transforms skin texture, radiance, and firmness.',
      specs: { 'Pitera Content': '> 90% Pure Bio Factor', 'Volume': '160 ml', 'Effect': 'Crystal Clear Skin' },
      tag: 'Miracle Water'
    },
    {
      id: 'amz-beau-10',
      name: 'Chanel Coco Mademoiselle Eau de Parfum (100ml)',
      category: 'Beauty',
      brand: 'Chanel',
      price: 165,
      originalPrice: 185,
      discount: 10,
      rating: 4.9,
      reviewsCount: 31200,
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&auto=format&fit=crop&q=80',
      description: 'An amber floral fragrance with notes of vibrant orange, clear jasmine, and elegant May rose.',
      specs: { 'Brand': 'Chanel', 'Notes': 'Orange, Jasmine, Rose, Patchouli', 'Volume': '100 ml / 3.4 oz' },
      tag: 'Timeless Luxury'
    },

    // ==================== 8. ACCESSORIES & WATCHES (10 PRODUCTS) ====================
    {
      id: 'amz-acc-1',
      name: 'Apple Watch Ultra 2 (GPS + Cellular 49mm Titanium Case)',
      category: 'Accessories',
      brand: 'Apple',
      price: 779,
      originalPrice: 799,
      discount: 3,
      rating: 4.9,
      reviewsCount: 6810,
      image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=600&auto=format&fit=crop&q=80',
      description: 'The ultimate sports and adventure watch. Brightest Always-On Retina display, S9 SiP chip, and up to 72 hours battery life.',
      specs: { 'Case': '49mm Aerospace Titanium', 'Display': '3000 Nits Always-On Retina', 'Water Resistance': '100m Dive Rated', 'GPS': 'Precision Dual-Frequency' },
      tag: 'Amazon Choice'
    },
    {
      id: 'amz-acc-2',
      name: 'Kindle Paperwhite 16GB (6.8" Display with Adjustable Warm Light)',
      category: 'Accessories',
      brand: 'Amazon',
      price: 149,
      originalPrice: 169,
      discount: 12,
      rating: 4.8,
      reviewsCount: 54100,
      image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&auto=format&fit=crop&q=80',
      description: 'Flush-front 300 ppi glare-free display, 10 weeks battery life, 20% faster page turns, and IPX8 waterproof reading.',
      specs: { 'Display': '6.8" 300 ppi Glare-Free', 'Storage': '16GB', 'Battery Life': 'Up to 10 Weeks', 'Waterproof': 'IPX8 Rated' },
      tag: '#1 E-Reader'
    },
    {
      id: 'amz-acc-3',
      name: 'Samsung Galaxy Watch 6 Classic 47mm Bluetooth - Black',
      category: 'Accessories',
      brand: 'Samsung',
      price: 349,
      originalPrice: 429,
      discount: 19,
      rating: 4.7,
      reviewsCount: 8420,
      image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=600&auto=format&fit=crop&q=80',
      description: 'Classic rotating bezel design, personalized HR zones, advanced BIA body composition analysis, and Sapphire Crystal glass.',
      specs: { 'Size': '47mm Stainless Steel', 'Bezel': 'Physical Rotating Bezel', 'Sensors': 'ECG, BIA Body Comp, Sleep Tracking' },
      tag: 'Smart Classic'
    },
    {
      id: 'amz-acc-4',
      name: 'Garmin Fenix 7 Pro Sapphire Solar Multisport GPS Watch',
      category: 'Accessories',
      brand: 'Garmin',
      price: 799,
      originalPrice: 899,
      discount: 11,
      rating: 4.9,
      reviewsCount: 4120,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop&q=80',
      description: 'Solar charging sapphire lens provides up to 37 days battery life in smartwatch mode. Built-in LED flashlight and TopoActive maps.',
      specs: { 'Lens': 'Power Sapphire Solar Charging', 'Flashlight': 'Multi-LED Built-in', 'Battery': 'Up to 37 Days Solar' },
      tag: 'Ultimate Outdoor'
    },
    {
      id: 'amz-acc-5',
      name: 'Sony WF-1000XM5 Wireless Noise Canceling Earbuds',
      category: 'Accessories',
      brand: 'Sony',
      price: 278,
      originalPrice: 299,
      discount: 7,
      rating: 4.8,
      reviewsCount: 9410,
      image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&auto=format&fit=crop&q=80',
      description: 'Specially designed Dynamic Driver X for wide frequency reproduction, dual processors, and crystal clear call quality.',
      specs: { 'Audio': 'Dynamic Driver X + LDAC High-Res', 'Microphones': '6 Mics with AI Noise Reduction', 'Battery': '24 Hours with Case' },
      tag: 'Hi-Res Earbuds'
    },
    {
      id: 'amz-acc-6',
      name: 'Samsonite Pro CX Expandable Carry-On Spinner Suitcase',
      category: 'Accessories',
      brand: 'Samsonite',
      price: 219,
      originalPrice: 269,
      discount: 18,
      rating: 4.8,
      reviewsCount: 6840,
      image: 'https://images.unsplash.com/photo-1565026057447-b88e3f29042b?w=600&auto=format&fit=crop&q=80',
      description: '100% polycarbonate scratch-resistant shell with dual spinner wheels, TSA lock, and built-in USB charging port.',
      specs: { 'Shell': 'Polycarbonate Hard side', 'Wheels': 'Dual Dual-Airflow Spinner', 'Lock': 'Integrated TSA Combination' },
      tag: '#1 Luggage'
    },
    {
      id: 'amz-acc-7',
      name: 'Anker Prime 20,000mAh 200W Ultra-Fast Power Bank',
      category: 'Accessories',
      brand: 'Anker',
      price: 129,
      originalPrice: 149,
      discount: 13,
      rating: 4.9,
      reviewsCount: 14200,
      image: 'https://images.unsplash.com/photo-1609592424083-d9dd7d983416?w=600&auto=format&fit=crop&q=80',
      description: '200W total output recharges a MacBook Pro 16" to 50% in just 28 minutes. Smart digital display shows live power stats.',
      specs: { 'Output': '200W Max Total Output', 'Capacity': '20,000 mAh', 'Display': 'Smart Color LCD Screen' },
      tag: 'Ultra Power'
    },
    {
      id: 'amz-acc-8',
      name: 'Logitech MX Master 3S Wireless Performance Mouse',
      category: 'Accessories',
      brand: 'Logitech',
      price: 99,
      originalPrice: 119,
      discount: 17,
      rating: 4.8,
      reviewsCount: 38400,
      image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=600&auto=format&fit=crop&q=80',
      description: '8K DPI glass tracking sensor, Quiet Clicks with 90% less noise, and MagSpeed electromagnetic scrolling wheel.',
      specs: { 'Sensor': '8,000 DPI Darkfield Glass Tracking', 'Scroll': 'MagSpeed 1,000 Lines/Sec', 'Noise': '90% Quiet Clicks' },
      tag: '#1 Ergonomic Mouse'
    },
    {
      id: 'amz-acc-9',
      name: 'Fossil Heritage Genuine Leather Slim Bifold Wallet with RFID',
      category: 'Accessories',
      brand: 'Fossil',
      price: 45,
      originalPrice: 60,
      discount: 25,
      rating: 4.7,
      reviewsCount: 11400,
      image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=600&auto=format&fit=crop&q=80',
      description: 'Handcrafted 100% genuine cowhide leather with RFID blocking lining to protect credit cards against digital theft.',
      specs: { 'Leather': '100% Litehide Genuine Leather', 'Security': 'RFID Blocking Shield', 'Capacity': '8 Card Slots + Billfold' },
      tag: 'RFID Protected'
    },
    {
      id: 'amz-acc-10',
      name: 'Oakley Holbrook Polarized Prizm Square Sunglasses',
      category: 'Accessories',
      brand: 'Oakley',
      price: 156,
      originalPrice: 196,
      discount: 20,
      rating: 4.8,
      reviewsCount: 16800,
      image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&auto=format&fit=crop&q=80',
      description: 'Prizm Sapphire Polarized lenses enhance color, contrast and detail with O Matter lightweight durable frame.',
      specs: { 'Lens': 'Prizm Sapphire Polarized', 'Frame': 'O Matter Stress-Resistant', 'UV Protection': 'Plutonite 100% UV' },
      tag: 'Prizm Optics'
    }
  ];

  // --- PROMO COUPONS SYSTEM ---
  const PROMO_COUPONS = {
    'VIBE10': { discountPercent: 10, minSpend: 50, desc: '10% OFF on orders over $50' },
    'FLASH20': { discountPercent: 20, minSpend: 200, desc: '20% OFF on orders over $200' },
    'AMZSUPER': { discountPercent: 25, minSpend: 500, desc: '25% OFF on orders over $500' },
    'MOBILE100': { flatDiscount: 100, minSpend: 700, desc: 'Flat $100 OFF on Flagships ($700+)' },
    'FURNITURE15': { discountPercent: 15, minSpend: 300, desc: '15% OFF Home & Appliances ($300+)' },
    'WELCOMEMART': { flatDiscount: 50, minSpend: 100, desc: '$50 OFF New Customer Welcome Gift' },
    'WALLET50': { flatDiscount: 50, minSpend: 150, desc: '$50 OFF when paying with VibeMart Wallet' }
  };

  // --- PRE-STORED GIFT CARD CODES ---
  const VALID_GIFT_CARDS = {
    'GIFT25': 25,
    'GIFT50': 50,
    'GIFT100': 100,
    'GIFT250': 250,
    'VIBE500': 500
  };

  const state = {
    cart: JSON.parse(localStorage.getItem('vibemart_cart')) || [{ productId: 'amz-mob-1', quantity: 1 }],
    wishlist: JSON.parse(localStorage.getItem('vibemart_wishlist')) || ['amz-elec-5', 'amz-shoe-1'],
    user: JSON.parse(localStorage.getItem('vibemart_user')) || {
      name: 'Alex Johnson',
      email: 'alex.johnson@vibemart.com',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex',
      memberStatus: 'VIP Gold Member',
      cashbackRate: '5%'
    },
    orders: JSON.parse(localStorage.getItem('vibemart_orders')) || [
      {
        orderId: 'AMZ-849201',
        date: 'Aug 5, 2026',
        items: [
          { product: PRODUCTS[0], quantity: 1 },
          { product: PRODUCTS[15], quantity: 1 }
        ],
        location: { city: 'San Francisco, CA', pincode: '94016' },
        paymentMethod: 'wallet',
        status: 'In Transit 🚚',
        deliveryDate: 'Tomorrow, Aug 7',
        totalAmount: 1547
      }
    ],
    walletBalance: JSON.parse(localStorage.getItem('vibemart_wallet_balance')) || 250,
    walletTransactions: JSON.parse(localStorage.getItem('vibemart_wallet_tx')) || [
      { id: 'TX-9842', title: 'Welcome Reward Cashback', amount: 50, type: 'credit', date: 'Aug 1, 2026' },
      { id: 'TX-9843', title: 'Gift Voucher Redeemed', amount: 100, type: 'credit', date: 'Aug 4, 2026' }
    ],
    location: JSON.parse(localStorage.getItem('vibemart_location')) || { city: 'San Francisco, CA', pincode: '94016', address: 'Market St' },
    giftCardBalance: JSON.parse(localStorage.getItem('vibemart_gift_balance')) || 50,
    selectedCategory: 'all',
    searchQuery: '',
    maxPrice: 4000,
    sortBy: 'featured',
    appliedCoupon: null,
    appliedCouponCode: '',
    activeView: 'home',
    activeProfileTab: 'orders',
    quickViewProduct: null
  };

  function saveState() {
    localStorage.setItem('vibemart_cart', JSON.stringify(state.cart));
    localStorage.setItem('vibemart_wishlist', JSON.stringify(state.wishlist));
    localStorage.setItem('vibemart_user', JSON.stringify(state.user));
    localStorage.setItem('vibemart_orders', JSON.stringify(state.orders));
    localStorage.setItem('vibemart_wallet_balance', JSON.stringify(state.walletBalance));
    localStorage.setItem('vibemart_wallet_tx', JSON.stringify(state.walletTransactions));
    localStorage.setItem('vibemart_location', JSON.stringify(state.location));
    localStorage.setItem('vibemart_gift_balance', JSON.stringify(state.giftCardBalance));
  }

  function showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = 'animate-fade-in';
    toast.style.cssText = `
      background: #ffffff;
      border: 2px solid #fde047;
      border-left: 4px solid ${type === 'success' ? '#10b981' : type === 'warning' ? '#f59e0b' : '#3b82f6'};
      padding: 0.8rem 1.1rem;
      border-radius: var(--radius-sm);
      box-shadow: 0 4px 15px rgba(0,0,0,0.1);
      color: #111827;
      font-size: 0.88rem;
      font-weight: 700;
    `;
    toast.innerHTML = message;
    container.appendChild(toast);
    setTimeout(() => {
      toast.remove();
    }, 3500);
  }

  function switchView(viewName, subTab = null) {
    state.activeView = viewName;
    if (subTab) state.activeProfileTab = subTab;

    document.querySelectorAll('.view-section').forEach(el => el.classList.remove('active'));
    const target = document.getElementById(`view-${viewName}`);
    if (target) target.classList.add('active');

    document.querySelectorAll('.nav-link-item').forEach(btn => {
      if (btn.getAttribute('data-view') === viewName) btn.classList.add('active');
      else btn.classList.remove('active');
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
    renderCatalog();
    renderCart();
    renderProfileView();
  }

  function createProductCardHTML(p) {
    const isWish = state.wishlist.includes(p.id);
    const isInCart = state.cart.some(c => c.productId === p.id);

    return `
      <div class="product-card animate-fade-in">
        <div class="product-image-wrap">
          ${p.tag ? `<span class="badge-tag">${p.tag}</span>` : ''}
          <button class="wishlist-btn ${isWish ? 'active' : ''}" onclick="window.VibeMart.toggleWishlist('${p.id}')">
            ${isWish ? '❤️' : '🤍'}
          </button>
          <img src="${p.image}" alt="${p.name}" class="product-img" loading="lazy" />
        </div>
        <div class="product-info">
          <span class="product-category-tag">${p.category} ${p.brand ? `• ${p.brand}` : ''}</span>
          <h3 class="product-title" title="${p.name}">${p.name}</h3>
          <div class="product-rating">
            <span>⭐</span>
            <span style="font-weight: 700; color: #111827;">${p.rating}</span>
            <span style="color: var(--text-muted); font-size: 0.75rem;">(${p.reviewsCount.toLocaleString()})</span>
          </div>
          <div class="product-price-row">
            <span class="current-price">$${p.price.toLocaleString()}</span>
            ${p.originalPrice ? `<span class="original-price">$${p.originalPrice.toLocaleString()}</span>` : ''}
            ${p.discount ? `<span class="discount-tag">${p.discount}% OFF</span>` : ''}
          </div>
          <div class="card-actions">
            <button class="btn-add-cart" style="background: ${isInCart ? 'var(--accent-emerald)' : 'linear-gradient(135deg, #facc15 0%, #eab308 100%)'}" onclick="window.VibeMart.addToCart('${p.id}')">
              ${isInCart ? '✓ In Cart' : '🛒 Add to Cart'}
            </button>
            <button class="btn-quick-view" onclick="window.VibeMart.openProductDetails('${p.id}')">👁️</button>
          </div>
        </div>
      </div>
    `;
  }

  function renderCatalog() {
    const categories = ['Mobiles', 'Electronics', 'Appliances', 'Furniture', 'Fashion', 'Shoes', 'Beauty', 'Accessories'];
    categories.forEach(cat => {
      const container = document.getElementById(`home-grid-${cat.toLowerCase()}`);
      if (container) {
        const catProducts = PRODUCTS.filter(p => p.category === cat);
        container.innerHTML = catProducts.map(p => createProductCardHTML(p)).join('');
      }
    });

    const catalogContainer = document.getElementById('products-catalog-container');
    if (!catalogContainer) return;

    const filtered = PRODUCTS.filter(p => {
      if (state.selectedCategory !== 'all' && p.category !== state.selectedCategory) return false;
      if (state.searchQuery.trim()) {
        const q = state.searchQuery.toLowerCase();
        const matchesName = p.name.toLowerCase().includes(q);
        const matchesCat = p.category.toLowerCase().includes(q);
        const matchesBrand = p.brand ? p.brand.toLowerCase().includes(q) : false;
        if (!matchesName && !matchesCat && !matchesBrand) return false;
      }
      if (p.price > state.maxPrice) return false;
      return true;
    }).sort((a, b) => {
      if (state.sortBy === 'price-low') return a.price - b.price;
      if (state.sortBy === 'price-high') return b.price - a.price;
      if (state.sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });

    const countEl = document.getElementById('catalog-item-count');
    if (countEl) countEl.innerText = `${filtered.length} products found in ${state.selectedCategory === 'all' ? 'All 100 Products' : state.selectedCategory}`;

    if (filtered.length === 0) {
      catalogContainer.innerHTML = `
        <div style="grid-column: 1 / -1; padding: 4rem 2rem; text-align: center; background: #fffbeb; border-radius: var(--radius-lg); border: 2px solid #fde047; color: #111827;">
          <div style="font-size: 3rem; margin-bottom: 0.5rem;">🛍️</div>
          <h3>No Matching Products Found</h3>
        </div>
      `;
    } else {
      catalogContainer.innerHTML = filtered.map(p => createProductCardHTML(p)).join('');
    }
  }

  function addToCart(productId, qty = 1) {
    const existing = state.cart.find(item => item.productId === productId);
    if (existing) {
      existing.quantity += qty;
    } else {
      state.cart.push({ productId, quantity: qty });
    }
    saveState();
    updateBadges();
    renderCart();
    const product = PRODUCTS.find(p => p.id === productId);
    showToast(`Added "${product ? product.name : 'Item'}" to Cart`, 'success');
  }

  function removeFromCart(productId) {
    state.cart = state.cart.filter(item => item.productId !== productId);
    saveState();
    updateBadges();
    renderCart();
    showToast('Item removed from cart', 'info');
  }

  function updateQuantity(productId, delta) {
    const item = state.cart.find(i => i.productId === productId);
    if (!item) return;
    item.quantity += delta;
    if (item.quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    saveState();
    updateBadges();
    renderCart();
  }

  function toggleWishlist(productId) {
    if (state.wishlist.includes(productId)) {
      state.wishlist = state.wishlist.filter(id => id !== productId);
      showToast('Removed from wishlist', 'info');
    } else {
      state.wishlist.push(productId);
      showToast('Saved to wishlist', 'success');
    }
    saveState();
    updateBadges();
    renderCatalog();
    renderProfileView();
  }

  function updateBadges() {
    const totalCartCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartBadge = document.getElementById('cart-badge');
    if (cartBadge) cartBadge.innerText = totalCartCount;

    const giftBadge = document.getElementById('header-gift-balance');
    if (giftBadge) giftBadge.innerText = `$${state.giftCardBalance}`;

    const walletBadge = document.getElementById('header-wallet-balance');
    if (walletBadge) walletBadge.innerText = `$${state.walletBalance}`;
  }

  function topUpWallet(amount) {
    state.walletBalance += amount;
    state.walletTransactions.unshift({
      id: 'TX-' + Math.floor(1000 + Math.random() * 9000),
      title: 'Wallet Direct Top-Up',
      amount: amount,
      type: 'credit',
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    });
    saveState();
    updateBadges();
    renderProfileView();
    renderCart();
    showToast(`Added $${amount} to your VibeMart Wallet! 💳`, 'success');
    if (typeof confetti === 'function') {
      try { confetti({ particleCount: 70, spread: 50, origin: { y: 0.6 } }); } catch(e){}
    }
  }

  function applyCoupon(code) {
    const cleanCode = (code || '').toUpperCase().trim();
    if (!cleanCode) {
      showToast('Please enter a coupon code', 'warning');
      return;
    }

    const coupon = PROMO_COUPONS[cleanCode];
    if (!coupon) {
      showToast('Invalid Coupon Code!', 'warning');
      return;
    }

    let subtotal = 0;
    state.cart.forEach(item => {
      const product = PRODUCTS.find(p => p.id === item.productId);
      if (product) subtotal += product.price * item.quantity;
    });

    if (subtotal < coupon.minSpend) {
      showToast(`Coupon "${cleanCode}" requires a minimum spend of $${coupon.minSpend}`, 'warning');
      return;
    }

    state.appliedCoupon = coupon;
    state.appliedCouponCode = cleanCode;
    renderCart();
    showToast(`Coupon "${cleanCode}" applied successfully! 🎉`, 'success');
  }

  function removeCoupon() {
    state.appliedCoupon = null;
    state.appliedCouponCode = '';
    renderCart();
    showToast('Coupon code removed', 'info');
  }

  function trackOrder(orderId) {
    const order = state.orders.find(o => o.orderId === orderId);
    if (!order) return;
    showToast(`📦 Tracking ${orderId}: ${order.status} • Delivery: ${order.deliveryDate}`, 'info');
  }

  function reorder(orderId) {
    const order = state.orders.find(o => o.orderId === orderId);
    if (!order) return;
    order.items.forEach(item => {
      if (item.product) addToCart(item.product.id, item.quantity);
    });
    switchView('cart');
    showToast(`Items from order ${orderId} re-added to cart! 🛒`, 'success');
  }

  function redeemGiftCard(code) {
    const cleanCode = (code || '').toUpperCase().trim();
    if (!cleanCode) {
      showToast('Please enter a gift card code', 'warning');
      return;
    }

    if (VALID_GIFT_CARDS[cleanCode]) {
      const amount = VALID_GIFT_CARDS[cleanCode];
      state.giftCardBalance += amount;
      saveState();
      updateBadges();
      renderCart();
      renderProfileView();
      showToast(`🎉 Gift Card Redeemed! Added $${amount} to your VibeMart Balance.`, 'success');
      delete VALID_GIFT_CARDS[cleanCode];
    } else {
      showToast('Invalid or already redeemed Gift Card code.', 'warning');
    }
  }

  function buyGiftCard(amount) {
    state.giftCardBalance += amount;
    saveState();
    updateBadges();
    renderCart();
    renderProfileView();
    showToast(`🎉 Purchased $${amount} VibeMart Digital Gift Card!`, 'success');
  }

  // --- SECTION MODAL HANDLERS ---
  function openMobileCompareModal() {
    const modal = document.getElementById('modal-mobile-compare');
    if (modal) modal.classList.remove('hidden');
  }

  function openApplianceServiceModal() {
    const modal = document.getElementById('modal-appliance-service');
    if (modal) modal.classList.remove('hidden');
  }

  function openFurnitureCustomizerModal() {
    const modal = document.getElementById('modal-furniture-customizer');
    if (modal) modal.classList.remove('hidden');
  }

  function renderCart() {
    const cartPageBody = document.getElementById('cart-page-body');
    const summaryContainer = document.getElementById('cart-cost-summary');

    let subtotal = 0;
    const cartItems = state.cart.map(item => {
      const product = PRODUCTS.find(p => p.id === item.productId);
      if (!product) return '';
      const itemCost = product.price * item.quantity;
      subtotal += itemCost;

      return `
        <div class="cart-item">
          <img src="${product.image}" alt="${product.name}" class="cart-item-img" />
          <div style="flex: 1;">
            <h4 style="font-size: 0.95rem; font-weight: 800; line-height: 1.3; color: #111827;">${product.name}</h4>
            <div style="font-weight: 800; margin-top: 4px; color: #111827;">$${itemCost.toLocaleString()}</div>
            <div style="display: flex; gap: 6px; align-items: center; margin-top: 6px;">
              <button onclick="window.VibeMart.updateQuantity('${product.id}', -1)" style="padding: 2px 10px; background: #ffffff; border: 1px solid #ca8a04; font-weight: 800; color: #111827; border-radius: 4px;">-</button>
              <span style="font-weight: 800; padding: 0 4px;">${item.quantity}</span>
              <button onclick="window.VibeMart.updateQuantity('${product.id}', 1)" style="padding: 2px 10px; background: #ffffff; border: 1px solid #ca8a04; font-weight: 800; color: #111827; border-radius: 4px;">+</button>
            </div>
          </div>
          <button onclick="window.VibeMart.removeFromCart('${product.id}')" style="color: #ef4444; font-size: 1.2rem;">🗑️</button>
        </div>
      `;
    }).join('');

    if (cartPageBody) cartPageBody.innerHTML = cartItems || `<div style="text-align:center; padding:3rem 1rem; color: #111827; font-weight: 700;">🛒 Your Cart is Empty</div>`;

    let couponDiscount = 0;
    if (state.appliedCoupon) {
      if (state.appliedCoupon.discountPercent) {
        couponDiscount = (subtotal * state.appliedCoupon.discountPercent) / 100;
      } else if (state.appliedCoupon.flatDiscount) {
        couponDiscount = Math.min(subtotal, state.appliedCoupon.flatDiscount);
      }
    }

    const deliveryFee = subtotal > 500 ? 0 : (subtotal > 0 ? 25 : 0);
    const tax = Math.round((subtotal - couponDiscount) * 0.08);
    let netBeforeGift = Math.max(0, subtotal - couponDiscount + deliveryFee + tax);

    let giftDeduction = 0;
    if (state.giftCardBalance > 0) {
      giftDeduction = Math.min(netBeforeGift, state.giftCardBalance);
    }
    const finalTotal = Math.max(0, netBeforeGift - giftDeduction);

    const summaryHTML = `
      <div class="cart-summary-line"><span>Subtotal:</span><span>$${subtotal.toLocaleString()}</span></div>
      ${state.appliedCouponCode ? `
        <div class="cart-summary-line" style="color:#10b981;">
          <span>Coupon (${state.appliedCouponCode}):</span>
          <span>-$${couponDiscount.toLocaleString()} <button onclick="window.VibeMart.removeCoupon()" style="color:#ef4444; font-size:0.75rem; margin-left:4px;">[Remove]</button></span>
        </div>
      ` : ''}
      <div class="cart-summary-line"><span>Delivery Fee:</span><span>${deliveryFee === 0 ? '<strong style="color:#10b981;">FREE</strong>' : `$${deliveryFee}`}</span></div>
      <div class="cart-summary-line"><span>Tax (8%):</span><span>$${tax.toLocaleString()}</span></div>
      ${giftDeduction > 0 ? `
        <div class="cart-summary-line" style="color:#2563eb;">
          <span>Gift Balance Applied:</span>
          <span>-$${giftDeduction.toLocaleString()}</span>
        </div>
      ` : ''}
      <div class="cart-summary-line total"><span>Total Cost:</span><span style="color: #111827;">$${finalTotal.toLocaleString()}</span></div>

      <!-- COUPON INPUT BOX -->
      <div style="margin-top: 1.2rem; border-top: 2px dashed #fde047; padding-top: 1rem;">
        <label style="font-weight: 800; font-size: 0.85rem; color: #111827; display: block; margin-bottom: 0.4rem;">🎟️ Have a Coupon Code?</label>
        <div style="display: flex; gap: 0.4rem;">
          <input type="text" id="cart-coupon-input" placeholder="e.g. VIBE10, MOBILE100" class="form-input" style="padding: 0.5rem; text-transform: uppercase;" value="${state.appliedCouponCode}" />
          <button class="btn-primary" style="padding: 0.5rem 1rem; font-size: 0.85rem;" onclick="window.VibeMart.applyCoupon(document.getElementById('cart-coupon-input').value)">Apply</button>
        </div>
        <div style="display: flex; gap: 0.4rem; flex-wrap: wrap; margin-top: 0.6rem;">
          <span class="coupon-chip" onclick="window.VibeMart.applyCoupon('VIBE10')">VIBE10 (10% OFF)</span>
          <span class="coupon-chip" onclick="window.VibeMart.applyCoupon('MOBILE100')">MOBILE100 ($100 OFF)</span>
          <span class="coupon-chip" onclick="window.VibeMart.applyCoupon('AMZSUPER')">AMZSUPER (25% OFF)</span>
        </div>
      </div>
    `;

    if (summaryContainer) summaryContainer.innerHTML = summaryHTML;
  }

  function placeOrder(paymentDetails) {
    if (state.cart.length === 0) {
      showToast('Your cart is empty', 'warning');
      return;
    }

    let subtotal = 0;
    const items = state.cart.map(item => {
      const product = PRODUCTS.find(p => p.id === item.productId);
      subtotal += product.price * item.quantity;
      return { product, quantity: item.quantity };
    });

    let couponDiscount = 0;
    if (state.appliedCoupon) {
      if (state.appliedCoupon.discountPercent) couponDiscount = (subtotal * state.appliedCoupon.discountPercent) / 100;
      else if (state.appliedCoupon.flatDiscount) couponDiscount = Math.min(subtotal, state.appliedCoupon.flatDiscount);
    }

    const deliveryFee = subtotal > 500 ? 0 : 25;
    const tax = Math.round((subtotal - couponDiscount) * 0.08);
    const netBeforeGift = Math.max(0, subtotal - couponDiscount + deliveryFee + tax);

    let giftDeduction = 0;
    if (state.giftCardBalance > 0) {
      giftDeduction = Math.min(netBeforeGift, state.giftCardBalance);
      state.giftCardBalance -= giftDeduction;
    }

    const totalAmount = Math.max(0, netBeforeGift - giftDeduction);

    if (paymentDetails.method === 'wallet') {
      if (state.walletBalance < totalAmount) {
        showToast(`Insufficient Wallet Balance ($${state.walletBalance}). Please Top-Up or select another payment method!`, 'warning');
        return;
      }
      state.walletBalance -= totalAmount;
      state.walletTransactions.unshift({
        id: 'TX-' + Math.floor(1000 + Math.random() * 9000),
        title: 'Order Payment Deducted',
        amount: totalAmount,
        type: 'debit',
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
      });
    }

    const newOrder = {
      orderId: 'AMZ-' + Math.floor(100000 + Math.random() * 900000),
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      items,
      location: { ...state.location },
      paymentMethod: paymentDetails.method,
      status: 'In Transit 🚚',
      subtotal,
      couponDiscount,
      giftDeduction,
      totalAmount,
      deliveryDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })
    };

    state.orders.unshift(newOrder);
    state.cart = [];
    state.appliedCoupon = null;
    state.appliedCouponCode = '';
    saveState();
    updateBadges();

    const successModal = document.getElementById('modal-order-success');
    if (successModal) {
      document.getElementById('success-order-id').innerText = newOrder.orderId;
      document.getElementById('success-order-total').innerText = `$${totalAmount.toLocaleString()}`;
      document.getElementById('success-delivery-date').innerText = newOrder.deliveryDate;
      successModal.classList.remove('hidden');
    }

    if (typeof confetti === 'function') {
      try { confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } }); } catch(e){}
    }

    showToast('Amazon-Style Order Placed Successfully! 🎉', 'success');
  }

  function login(email, password) {
    const userName = email.split('@')[0];
    const formatted = userName.charAt(0).toUpperCase() + userName.slice(1);
    state.user = {
      name: formatted || 'Customer',
      email: email,
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${formatted}`,
      memberStatus: 'VIP Gold Member',
      cashbackRate: '5%'
    };
    saveState();
    renderProfileView();
    closeAuthModal();
    showToast(`Welcome back, ${formatted}!`, 'success');
  }

  function signup(name, email, password) {
    state.user = {
      name: name,
      email: email,
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`,
      memberStatus: 'VIP Gold Member',
      cashbackRate: '5%'
    };
    saveState();
    renderProfileView();
    closeAuthModal();
    showToast(`Account created! Welcome to Vibe Mart, ${name}!`, 'success');
  }

  function logout() {
    state.user = null;
    saveState();
    renderProfileView();
    showToast('Logged out successfully', 'info');
  }

  function renderProfileView() {
    const userContainer = document.getElementById('profile-user-info');
    const dashboardContainer = document.getElementById('profile-dashboard-content');

    if (userContainer) {
      if (state.user) {
        userContainer.innerHTML = `
          <div style="display: flex; align-items: center; gap: 1.2rem; background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%); padding: 1.4rem; border-radius: var(--radius-md); border: 2px solid #facc15; flex-wrap: wrap;">
            <img src="${state.user.avatar}" alt="User Avatar" style="width: 64px; height: 64px; border-radius: 50%; border: 3px solid #facc15;" />
            <div>
              <div style="display: flex; align-items: center; gap: 0.6rem;">
                <h3 style="font-size: 1.3rem; font-weight: 800; color: #f8fafc;">${state.user.name}</h3>
                <span style="background: #facc15; color: #000000; font-size: 0.72rem; font-weight: 800; padding: 2px 8px; border-radius: 999px;">${state.user.memberStatus || 'VIP Gold'}</span>
              </div>
              <p style="color: var(--text-secondary); font-size: 0.88rem;">${state.user.email}</p>
              <div style="display: flex; gap: 1rem; margin-top: 6px; font-weight: 800; font-size: 0.85rem; color: #facc15;">
                <span>💳 Wallet: <strong>$${state.walletBalance}</strong></span>
                <span>🎁 Gift Credit: <strong>$${state.giftCardBalance}</strong></span>
              </div>
            </div>
            <button onclick="window.VibeMart.logout()" class="btn-secondary" style="margin-left: auto; color: #ef4444; border-color: #ef4444;">Logout 🚪</button>
          </div>
        `;
      } else {
        userContainer.innerHTML = `
          <div style="text-align: center; padding: 2rem; background: #1e293b; border-radius: var(--radius-md); border: 2px solid #facc15;">
            <h3 style="color: #f8fafc; font-weight: 800;">Not Logged In</h3>
            <p style="color: var(--text-secondary); font-size: 0.88rem; margin: 0.5rem 0 1rem 0;">Sign in to view your orders, wallet & saved coupons.</p>
            <button class="btn-primary" onclick="window.VibeMart.openAuthModal('login')">Sign In / Register</button>
          </div>
        `;
      }
    }

    if (!dashboardContainer) return;

    const activeTab = state.activeProfileTab || 'orders';

    if (activeTab === 'orders') {
      if (state.orders.length === 0) {
        dashboardContainer.innerHTML = `<div style="text-align: center; padding: 3rem; background: #1e293b; border-radius: var(--radius-md); border: 2px solid rgba(250, 204, 21, 0.4); color: #f8fafc;">📦 No Orders Found</div>`;
      } else {
        dashboardContainer.innerHTML = state.orders.map(order => `
          <div style="background: #1e293b; border: 2px solid rgba(250, 204, 21, 0.4); padding: 1.4rem; border-radius: var(--radius-md); margin-bottom: 1.2rem; box-shadow: 0 4px 15px rgba(0,0,0,0.5);">
            <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(250, 204, 21, 0.3); padding-bottom: 0.8rem; margin-bottom: 1rem; flex-wrap: wrap; gap: 0.5rem;">
              <div>
                <span style="font-size: 0.8rem; color: var(--text-muted);">ORDER REF ID</span>
                <div style="font-weight: 800; font-size: 1.1rem; color: var(--accent-yellow);">${order.orderId}</div>
              </div>
              <div>
                <span style="font-size: 0.8rem; color: var(--text-muted);">DATE</span>
                <div style="font-weight: 700; color: #f8fafc;">${order.date}</div>
              </div>
              <div>
                <span style="font-size: 0.8rem; color: var(--text-muted);">STATUS</span>
                <div style="background: #0f172a; border: 1px solid #facc15; padding: 2px 10px; border-radius: 999px; font-weight: 800; font-size: 0.82rem; color: #facc15;">${order.status || 'Processing ⚙️'}</div>
              </div>
              <div>
                <span style="font-size: 0.8rem; color: var(--text-muted);">TOTAL PAID</span>
                <div style="font-weight: 800; font-size: 1.1rem; color: #f8fafc;">$${order.totalAmount.toLocaleString()}</div>
              </div>
            </div>

            <div style="display: flex; flex-direction: column; gap: 0.75rem; margin-bottom: 1rem;">
              ${order.items.map(i => i.product ? `
                <div style="display: flex; align-items: center; gap: 1rem; background: #0f172a; padding: 0.6rem 0.9rem; border-radius: 8px;">
                  <img src="${i.product.image}" alt="${i.product.name}" style="width: 48px; height: 48px; object-fit: contain;" />
                  <div style="flex: 1;">
                    <div style="font-weight: 800; font-size: 0.9rem; color: #f8fafc;">${i.product.name}</div>
                    <div style="font-size: 0.78rem; color: var(--text-secondary);">Qty: ${i.quantity} × $${i.product.price}</div>
                  </div>
                  <div style="font-weight: 800; color: #facc15;">$${(i.product.price * i.quantity).toLocaleString()}</div>
                </div>
              ` : '').join('')}
            </div>

            <div style="display: flex; gap: 0.6rem; justify-content: flex-end; flex-wrap: wrap;">
              <button class="btn-secondary" style="font-size: 0.85rem; padding: 0.5rem 1rem;" onclick="window.VibeMart.trackOrder('${order.orderId}')">🚚 Track Package</button>
              <button class="btn-primary" style="font-size: 0.85rem; padding: 0.5rem 1rem;" onclick="window.VibeMart.reorder('${order.orderId}')">🔄 Re-Order Items</button>
            </div>
          </div>
        `).join('');
      }
    } else if (activeTab === 'wallet') {
      dashboardContainer.innerHTML = `
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 1.5rem;">
          <div style="background: linear-gradient(135deg, #facc15 0%, #ca8a04 100%); color: #000; padding: 1.8rem; border-radius: var(--radius-lg); box-shadow: 0 8px 25px rgba(202, 138, 4, 0.5);">
            <div style="font-weight: 800; font-size: 0.85rem; opacity: 0.9;">VIBEMART DIGITAL WALLET BALANCE</div>
            <div style="font-size: 2.8rem; font-weight: 800; margin: 0.4rem 0;">$${state.walletBalance.toLocaleString()}</div>
            <div style="font-weight: 700; font-size: 0.85rem;">⚡ Earn 5% Instant Cashback on All Purchases</div>
          </div>

          <div style="background: #1e293b; border: 2px solid rgba(250, 204, 21, 0.4); padding: 1.5rem; border-radius: var(--radius-lg); display: flex; flex-direction: column; justify-content: center;">
            <h4 style="font-weight: 800; color: #f8fafc; margin-bottom: 0.8rem;">💳 Top-Up Wallet Funds</h4>
            <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 0.5rem;">
              <button class="btn-secondary" style="justify-content: center; font-weight: 800;" onclick="window.VibeMart.topUpWallet(25)">+$25</button>
              <button class="btn-secondary" style="justify-content: center; font-weight: 800;" onclick="window.VibeMart.topUpWallet(50)">+$50</button>
              <button class="btn-secondary" style="justify-content: center; font-weight: 800;" onclick="window.VibeMart.topUpWallet(100)">+$100</button>
              <button class="btn-secondary" style="justify-content: center; font-weight: 800;" onclick="window.VibeMart.topUpWallet(200)">+$200</button>
            </div>
          </div>
        </div>

        <h4 style="font-weight: 800; color: #f8fafc; margin-bottom: 0.8rem;">📜 Wallet Transaction History</h4>
        <div style="display: flex; flex-direction: column; gap: 0.6rem;">
          ${state.walletTransactions.map(tx => `
            <div style="display: flex; justify-content: space-between; align-items: center; background: #1e293b; border: 1px solid rgba(250, 204, 21, 0.3); padding: 0.8rem 1.2rem; border-radius: var(--radius-sm);">
              <div>
                <div style="font-weight: 800; color: #f8fafc; font-size: 0.92rem;">${tx.title}</div>
                <div style="font-size: 0.78rem; color: var(--text-muted);">${tx.date} • Ref ${tx.id}</div>
              </div>
              <div style="font-weight: 800; font-size: 1.1rem; color: ${tx.type === 'credit' ? '#10b981' : '#ef4444'};">
                ${tx.type === 'credit' ? '+' : '-'}$${tx.amount}
              </div>
            </div>
          `).join('')}
        </div>
      `;
    } else if (activeTab === 'coupons') {
      dashboardContainer.innerHTML = `
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.2rem;">
          ${Object.entries(PROMO_COUPONS).map(([code, details]) => `
            <div class="coupon-card animate-fade-in" style="background: #1e293b; border-color: #facc15;">
              <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                <div>
                  <span class="coupon-tag">ACTIVE PROMO</span>
                  <h4 style="font-size: 1.1rem; font-weight: 800; color: #f8fafc; margin-top: 4px;">${code}</h4>
                  <p style="font-size: 0.82rem; color: #cbd5e1; margin: 4px 0 8px 0;">${details.desc}</p>
                </div>
                <div class="coupon-code-badge" onclick="window.VibeMart.applyCoupon('${code}')">Apply Now</div>
              </div>
            </div>
          `).join('')}
        </div>
      `;
    } else if (activeTab === 'wishlist') {
      const wishItems = PRODUCTS.filter(p => state.wishlist.includes(p.id));
      if (wishItems.length === 0) {
        dashboardContainer.innerHTML = `<div style="text-align: center; padding: 3rem; background: #1e293b; border-radius: var(--radius-md); border: 2px solid rgba(250, 204, 21, 0.4); color: #f8fafc;">❤️ Wishlist is empty</div>`;
      } else {
        dashboardContainer.innerHTML = `<div class="product-grid">${wishItems.map(p => createProductCardHTML(p)).join('')}</div>`;
      }
    } else if (activeTab === 'address') {
      dashboardContainer.innerHTML = `
        <div style="background: #1e293b; border: 2px solid rgba(250, 204, 21, 0.4); padding: 1.5rem; border-radius: var(--radius-lg);">
          <h4 style="font-weight: 800; color: #f8fafc; margin-bottom: 1rem;">📍 Saved Shipping Address</h4>
          <div class="form-group">
            <label class="form-label">Default Address</label>
            <input type="text" class="form-input" id="profile-address-in" value="${state.location.address || 'Market St, San Francisco, CA'}" />
          </div>
          <div class="form-group">
            <label class="form-label">City & ZIP Code</label>
            <input type="text" class="form-input" id="profile-city-in" value="${state.location.city} - ${state.location.pincode}" />
          </div>
          <button class="btn-primary" onclick="window.VibeMart.saveManualLocation(document.getElementById('profile-city-in').value, '94016')">
            ✓ Update Address Preferences
          </button>
        </div>
      `;
    }
  }

  function openProductDetails(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;
    state.quickViewProduct = product;

    const modal = document.getElementById('modal-product-detail');
    if (!modal) return;

    document.getElementById('detail-img').src = product.image;
    document.getElementById('detail-cat').innerText = `${product.category} ${product.brand ? `• ${product.brand}` : ''}`;
    document.getElementById('detail-title').innerText = product.name;
    document.getElementById('detail-price').innerText = `$${product.price.toLocaleString()}`;
    document.getElementById('detail-desc').innerText = product.description;

    const specsContainer = document.getElementById('detail-specs');
    if (specsContainer && product.specs) {
      specsContainer.innerHTML = Object.entries(product.specs).map(([k, v]) => `
        <div style="display: flex; justify-content: space-between; font-size: 0.85rem; padding: 6px 0; border-bottom: 1px solid rgba(250, 204, 21, 0.2); color: #f8fafc;">
          <span style="color: var(--text-muted);">${k}:</span>
          <span style="font-weight: 700; color: #f8fafc;">${v}</span>
        </div>
      `).join('');
    }

    modal.classList.remove('hidden');
  }


  function closeProductDetails() {
    const modal = document.getElementById('modal-product-detail');
    if (modal) modal.classList.add('hidden');
  }

  function detectGPSLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          state.location.city = 'San Francisco (GPS Verified)';
          state.location.pincode = '94103';
          saveState();
          showToast('Location updated via GPS!', 'success');
          closeLocationModal();
        },
        (err) => {
          showToast('GPS access denied. Using manual address.', 'warning');
        }
      );
    }
  }

  function saveManualLocation(city, pincode) {
    state.location.city = city || 'New York, NY';
    state.location.pincode = pincode || '10001';
    saveState();
    showToast(`Location set to ${city}`, 'success');
    closeLocationModal();
  }

  function openLocationModal() {
    const modal = document.getElementById('modal-location');
    if (modal) modal.classList.remove('hidden');
  }

  function closeLocationModal() {
    const modal = document.getElementById('modal-location');
    if (modal) modal.classList.add('hidden');
  }

  function openAuthModal(mode = 'login') {
    state.authMode = mode;
    const modal = document.getElementById('modal-auth');
    if (modal) modal.classList.remove('hidden');
  }

  function closeAuthModal() {
    const modal = document.getElementById('modal-auth');
    if (modal) modal.classList.add('hidden');
  }

  function toggleSectionsMenu() {
    const menu = document.getElementById('sections-mega-menu');
    if (menu) menu.classList.toggle('hidden');
  }

  function closeSectionsMenu() {
    const menu = document.getElementById('sections-mega-menu');
    if (menu) menu.classList.add('hidden');
  }

  function jumpToSection(category) {
    closeSectionsMenu();
    if (state.activeView !== 'home') {
      switchView('home');
    }
    setTimeout(() => {
      const el = document.getElementById(`home-section-${category.toLowerCase()}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 120);
  }

  // --- PHOTO SEARCH & AUTOCOMPLETE FUNCTIONS ---
  function openPhotoSearchModal() {
    const modal = document.getElementById('modal-photo-search');
    if (modal) modal.classList.remove('hidden');
  }

  function closePhotoSearchModal() {
    const modal = document.getElementById('modal-photo-search');
    if (modal) modal.classList.add('hidden');
  }

  function handlePhotoUpload(input) {
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = function(e) {
        processPhotoSearch(e.target.result, 'Uploaded Image');
      };
      reader.readAsDataURL(input.files[0]);
    }
  }

  function processPhotoSearch(imgUrl, categoryTag) {
    const previewContainer = document.getElementById('photo-search-preview-container');
    const previewImg = document.getElementById('photo-search-preview-img');
    const laser = document.getElementById('photo-scan-laser');
    const statusText = document.getElementById('photo-scan-status');

    if (previewImg) previewImg.src = imgUrl;
    if (previewContainer) previewContainer.classList.remove('hidden');
    if (laser) laser.classList.remove('hidden');
    if (statusText) statusText.innerText = '🔍 Analyzing image features & product matches with AI...';

    setTimeout(() => {
      if (laser) laser.classList.add('hidden');
      if (statusText) statusText.innerText = '✅ Visual AI Recognition Complete!';

      let catToFilter = 'Mobiles';
      const tagLower = (categoryTag || '').toLowerCase();
      if (tagLower.includes('laptop') || tagLower.includes('tech') || tagLower.includes('headphone') || tagLower.includes('elec')) catToFilter = 'Electronics';
      else if (tagLower.includes('phone') || tagLower.includes('mobile')) catToFilter = 'Mobiles';
      else if (tagLower.includes('appliance') || tagLower.includes('fridge') || tagLower.includes('tv')) catToFilter = 'Appliances';
      else if (tagLower.includes('chair') || tagLower.includes('desk') || tagLower.includes('sofa') || tagLower.includes('furniture')) catToFilter = 'Furniture';
      else if (tagLower.includes('shoe') || tagLower.includes('sneaker') || tagLower.includes('boot')) catToFilter = 'Shoes';
      else if (tagLower.includes('watch') || tagLower.includes('accessory')) catToFilter = 'Accessories';
      else if (tagLower.includes('dress') || tagLower.includes('jacket') || tagLower.includes('fashion')) catToFilter = 'Fashion';
      else if (tagLower.includes('beauty') || tagLower.includes('serum')) catToFilter = 'Beauty';

      state.selectedCategory = catToFilter;
      closePhotoSearchModal();
      switchView('products');
      showToast(`📷 Photo Search AI found matching ${catToFilter} products!`, 'success');
    }, 1500);
  }

  function triggerVoiceSearch() {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      recognition.onstart = function() {
        showToast('🎙️ Listening... Speak product name now (e.g. MacBook, PS5, iPhone)', 'info');
      };
      recognition.onresult = function(event) {
        const transcript = event.results[0][0].transcript;
        const searchInput = document.getElementById('global-search-input');
        if (searchInput) searchInput.value = transcript;
        state.searchQuery = transcript;
        switchView('products');
        showToast(`🎙️ Voice search query: "${transcript}"`, 'success');
      };
      recognition.start();
    } else {
      const sampleQueries = ['MacBook Pro', 'PlayStation 5', 'iPhone 15', 'Herman Miller', 'Sony Headphones', 'Dyson Airwrap'];
      const randomQuery = sampleQueries[Math.floor(Math.random() * sampleQueries.length)];
      const searchInput = document.getElementById('global-search-input');
      if (searchInput) searchInput.value = randomQuery;
      state.searchQuery = randomQuery;
      switchView('products');
      showToast(`🎙️ Simulated Voice Query: "${randomQuery}"`, 'success');
    }
  }

  function renderSearchAutocomplete(query) {
    const dropdown = document.getElementById('search-autocomplete-dropdown');
    if (!dropdown) return;

    const q = (query || '').trim().toLowerCase();
    if (!q) {
      dropdown.classList.add('hidden');
      dropdown.innerHTML = '';
      return;
    }

    const matches = PRODUCTS.filter(p => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q) || (p.brand && p.brand.toLowerCase().includes(q))).slice(0, 6);

    if (matches.length === 0) {
      dropdown.classList.add('hidden');
      dropdown.innerHTML = '';
      return;
    }

    dropdown.innerHTML = matches.map(p => `
      <div class="autocomplete-item" onclick="window.VibeMart.openProductDetails('${p.id}'); document.getElementById('search-autocomplete-dropdown').classList.add('hidden');">
        <img src="${p.image}" alt="${p.name}" style="width: 36px; height: 36px; object-fit: contain;" />
        <div style="flex: 1;">
          <div style="font-weight: 800; font-size: 0.85rem; color: #111827;">${p.name}</div>
          <div style="font-size: 0.75rem; color: #ca8a04;">$${p.price.toLocaleString()} • ${p.category}</div>
        </div>
      </div>
    `).join('');

    dropdown.classList.remove('hidden');
  }

  function handleHomeSearch(query) {
    state.searchQuery = query;
    const globalInput = document.getElementById('global-search-input');
    if (globalInput) globalInput.value = query;
    renderSearchAutocomplete(query);
  }

  function executeHomeSearch() {
    const input = document.getElementById('home-simple-search-input');
    if (input) state.searchQuery = input.value;
    switchView('products');
  }

  function quickHomeSearch(term) {
    const input = document.getElementById('home-simple-search-input');
    if (input) input.value = term;
    const globalInput = document.getElementById('global-search-input');
    if (globalInput) globalInput.value = term;
    state.searchQuery = term;
    switchView('products');
  }

  function initApp() {
    updateBadges();
    renderCatalog();
    renderCart();
    renderProfileView();

    document.querySelectorAll('.category-item-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.category-item-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.selectedCategory = btn.getAttribute('data-cat') || 'all';
        renderCatalog();
      });
    });

    const searchInput = document.getElementById('global-search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        state.searchQuery = e.target.value;
        const homeInput = document.getElementById('home-simple-search-input');
        if (homeInput) homeInput.value = e.target.value;
        renderSearchAutocomplete(e.target.value);
        renderCatalog();
      });
    }

    const priceSlider = document.getElementById('price-range-slider');
    if (priceSlider) {
      priceSlider.addEventListener('input', (e) => {
        state.maxPrice = Number(e.target.value);
        document.getElementById('price-slider-val').innerText = `$${state.maxPrice}`;
        renderCatalog();
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }

  window.VibeMart = {
    state,
    PRODUCTS,
    switchView,
    addToCart,
    removeFromCart,
    updateQuantity,
    toggleWishlist,
    openProductDetails,
    closeProductDetails,
    openLocationModal,
    closeLocationModal,
    detectGPSLocation,
    saveManualLocation,
    openAuthModal,
    closeAuthModal,
    login,
    signup,
    logout,
    placeOrder,
    applyCoupon,
    removeCoupon,
    redeemGiftCard,
    buyGiftCard,
    topUpWallet,
    trackOrder,
    reorder,
    openMobileCompareModal,
    openApplianceServiceModal,
    openFurnitureCustomizerModal,
    openPhotoSearchModal,
    closePhotoSearchModal,
    handlePhotoUpload,
    processPhotoSearch,
    triggerVoiceSearch,
    handleHomeSearch,
    executeHomeSearch,
    quickHomeSearch,
    renderSearchAutocomplete,
    renderProfileView,
    renderCatalog,
    toggleSectionsMenu,
    closeSectionsMenu,
    jumpToSection,
    showToast
  };
})();



