// Mock database for PujaSewa containing Hindu puja samagri, spiritual products, ceremony kits, and essentials.

export const categories = [
  {
    id: "satyanarayan-katha",
    name: "Satyanarayan Ji Ki Katha",
    description: "Lord Satyanarayan Vishnu Puja samagri, banana leaves, fresh flowers, katha book, and basic setup accessories.",
    image: "https://images.unsplash.com/photo-1609137144814-1e07b8be90de?auto=format&fit=crop&w=800&q=80",
    banner: "https://images.unsplash.com/photo-1609137144814-1e07b8be90de?auto=format&fit=crop&w=1200&q=80",
    slug: "satyanarayan"
  },
  {
    id: "puja-clothes",
    name: "Puja Clothes / Kapde",
    description: "Laddu Gopal dresses, Mata Rani chunari, yellow/red puja cloth, Thakur Ji garments, and elegant puja aasans.",
    image: "https://images.unsplash.com/photo-1621252179027-94459d278660?auto=format&fit=crop&w=800&q=80",
    banner: "https://images.unsplash.com/photo-1621252179027-94459d278660?auto=format&fit=crop&w=1200&q=80",
    slug: "clothes"
  },
  {
    id: "nishan-samaan",
    name: "Nishan Ka Samaan",
    description: "Vibrant red/yellow temple flags, Mata Rani flags, Hanuman Ji nishan, and decorative sacred dhwaj.",
    image: "https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?auto=format&fit=crop&w=800&q=80",
    banner: "https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?auto=format&fit=crop&w=1200&q=80",
    slug: "nishan"
  },
  {
    id: "mundan-ceremony",
    name: "Mundan Ceremony Samaan",
    description: "Shaving ritual kits, baby traditional ceremony clothes, havan kund, gangajal, and sacred threads for Mundan.",
    image: "https://images.unsplash.com/photo-1608976451677-7427ccf4c75b?auto=format&fit=crop&w=800&q=80",
    banner: "https://images.unsplash.com/photo-1608976451677-7427ccf4c75b?auto=format&fit=crop&w=1200&q=80",
    slug: "mundan"
  },
  {
    id: "annaprashan-ceremony",
    name: "Annaprashan Ceremony Samaan",
    description: "Silver bowl and spoon sets, baby feeding sets, rice ceremony items, and traditional baby dresses.",
    image: "https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?auto=format&fit=crop&w=800&q=80",
    banner: "https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?auto=format&fit=crop&w=1200&q=80",
    slug: "annaprashan"
  },
  {
    id: "rudrabhishek-samaan",
    name: "Rudrabhishek Samaan",
    description: "Shivling, bel patra, fresh gangajal, rudraksha malas, milk/honey abhishek packs, and incense.",
    image: "https://images.unsplash.com/photo-1630409351241-e90e7f5e434d?auto=format&fit=crop&w=800&q=80",
    banner: "https://images.unsplash.com/photo-1630409351241-e90e7f5e434d?auto=format&fit=crop&w=1200&q=80",
    slug: "rudrabhishek"
  },
  {
    id: "basic-puja-samaan",
    name: "Basic Puja Samaan",
    description: "Incense sticks, ghee, cotton wicks, roli, sindoor, kapoor, lotas, brass plates, and daily ritual essentials.",
    image: "https://images.unsplash.com/photo-1545128485-c400e7702796?auto=format&fit=crop&w=800&q=80",
    banner: "https://images.unsplash.com/photo-1545128485-c400e7702796?auto=format&fit=crop&w=1200&q=80",
    slug: "basic"
  }
];

export const subcategories = {
  "puja-clothes": [
    { id: "thakur-ji-kapde", name: "Thakur Ji Ke Kapde" },
    { id: "mata-rani-kapde", name: "Mata Rani Ke Kapde" },
    { id: "laddu-gopal-dress", name: "Laddu Gopal Dress" },
    { id: "shiv-ji-vastra", name: "Shiv Ji Vastra" },
    { id: "hanuman-ji-vastra", name: "Hanuman Ji Vastra" },
    { id: "puja-cloth", name: "Red and Yellow Puja Cloth" },
    { id: "chunari", name: "Chunari" },
    { id: "puja-aasan", name: "Puja Aasan" }
  ]
};

export const products = [
  // --- SATYANARAYAN JI KI KATHA ---
  {
    id: "sn-1",
    category: "satyanarayan-katha",
    name: "Complete Satyanarayan Puja Kit",
    price: 799,
    originalPrice: 999,
    discount: 20,
    rating: 4.9,
    reviewsCount: 182,
    inStock: true,
    deliveryTime: "3-5 days",
    image: "https://images.unsplash.com/photo-1609137144814-1e07b8be90de?auto=format&fit=crop&w=500&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1609137144814-1e07b8be90de?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1608976451677-7427ccf4c75b?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?auto=format&fit=crop&w=500&q=80"
    ],
    description: "An all-in-one divine package containing all necessary samagri for Satyanarayan Puja. Includes katha book, roli, sindoor, kapoor, dhoop, agarbatti, kalash, honey, gangajal, matchbox, Janeu pair, and dry fruits. Specially packed under sterile conditions.",
    material: "Natural and Brass",
    size: "Standard Puja Pack"
  },
  {
    id: "sn-2",
    category: "satyanarayan-katha",
    name: "Satyanarayan Katha Book",
    price: 149,
    originalPrice: 199,
    discount: 25,
    rating: 4.8,
    reviewsCount: 95,
    inStock: true,
    deliveryTime: "3-5 days",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=500&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=500&q=80"
    ],
    description: "Authentic Satyanarayan Vrat Katha book in bold letters with complete Sanskrit shlokas and simple Hindi translation. Contains Aarti, Chalisa, and procedural guidelines for Vrat.",
    material: "Paperback, Glossy Cover",
    size: "A5 Format"
  },
  {
    id: "sn-3",
    category: "satyanarayan-katha",
    name: "Kele Ka Patta Pack (Banana Leaves)",
    price: 99,
    originalPrice: 129,
    discount: 23,
    rating: 4.7,
    reviewsCount: 310,
    inStock: true,
    deliveryTime: "1-2 days",
    image: "https://images.unsplash.com/photo-1532186651327-6ac23687d189?auto=format&fit=crop&w=500&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1532186651327-6ac23687d189?auto=format&fit=crop&w=500&q=80"
    ],
    description: "Pack of 5 fresh, organic banana leaves harvested directly from green farms. Essential for decoration and serving prasad in Satyanarayan Puja setup. Shipped in cooling packaging.",
    material: "Fresh Organic Leaves",
    size: "Pack of 5 (Large)"
  },
  {
    id: "sn-4",
    category: "satyanarayan-katha",
    name: "Fresh Flower Mala (Garland)",
    price: 129,
    originalPrice: 159,
    discount: 18,
    rating: 4.8,
    reviewsCount: 215,
    inStock: true,
    deliveryTime: "1-2 days",
    image: "https://images.unsplash.com/photo-1619895862022-09114b41f16f?auto=format&fit=crop&w=500&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1619895862022-09114b41f16f?auto=format&fit=crop&w=500&q=80"
    ],
    description: "Freshly hand-woven garland of fragrant marigold flowers, roses, and mango leaves. Perfect for hanging on the photo frame or kalash setup.",
    material: "Fresh Marigolds & Roses",
    size: "Length: 2.5 feet"
  },
  {
    id: "sn-5",
    category: "satyanarayan-katha",
    name: "Dhoopbatti Pack (Wet Dhoop)",
    price: 89,
    originalPrice: 119,
    discount: 25,
    rating: 4.6,
    reviewsCount: 67,
    inStock: true,
    deliveryTime: "3-5 days",
    image: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?auto=format&fit=crop&w=500&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1509248961158-e54f6934749c?auto=format&fit=crop&w=500&q=80"
    ],
    description: "Traditional wet dhoop sticks made from organic cow dung, pure sandalwood paste, and natural essential oils. Fills your room with deep spiritual energy and eliminates negative vibes.",
    material: "Sandalwood & Natural herbs",
    size: "Pack of 20 sticks"
  },
  {
    id: "sn-6",
    category: "satyanarayan-katha",
    name: "Havan Lakdi Pack (Mango Wood)",
    price: 199,
    originalPrice: 249,
    discount: 20,
    rating: 4.7,
    reviewsCount: 88,
    inStock: true,
    deliveryTime: "3-5 days",
    image: "https://images.unsplash.com/photo-1542382156909-9ae37b3f56fd?auto=format&fit=crop&w=500&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1542382156909-9ae37b3f56fd?auto=format&fit=crop&w=500&q=80"
    ],
    description: "Dried premium mango wood sticks (Aam ki Lakdi) cut uniformly for easy burning in havan kund. Clean and chemical-free, yielding auspicious purification smoke.",
    material: "Mango Wood",
    size: "1 kg Pack"
  },
  {
    id: "sn-7",
    category: "satyanarayan-katha",
    name: "Kalawa / Mauli (Sacred Thread)",
    price: 49,
    originalPrice: 69,
    discount: 28,
    rating: 4.9,
    reviewsCount: 450,
    inStock: true,
    deliveryTime: "3-5 days",
    image: "https://images.unsplash.com/photo-1562972855-2474dc61d441?auto=format&fit=crop&w=500&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1562972855-2474dc61d441?auto=format&fit=crop&w=500&q=80"
    ],
    description: "Sacred red and yellow cotton wrist thread (Mauli/Kalawa). Made of 100% skin-friendly cotton thread. Purely hand-dyed and sanitized.",
    material: "100% Cotton",
    size: "Pack of 2 Rolls (10 meters each)"
  },
  {
    id: "sn-8",
    category: "satyanarayan-katha",
    name: "Puja Kalash (Copper)",
    price: 299,
    originalPrice: 399,
    discount: 25,
    rating: 4.8,
    reviewsCount: 130,
    inStock: true,
    deliveryTime: "3-5 days",
    image: "https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?auto=format&fit=crop&w=500&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?auto=format&fit=crop&w=500&q=80"
    ],
    description: "Pure copper Kalash (lota) designed with fine margins. Copper is highly auspicious for storing holy Gangajal and holding the coconut during the puja ritual.",
    material: "100% Pure Copper",
    size: "Diameter: 4 inches, Volume: 500ml"
  },
  {
    id: "sn-9",
    category: "satyanarayan-katha",
    name: "Coconut Pack (Nariyal)",
    price: 79,
    originalPrice: 99,
    discount: 20,
    rating: 4.7,
    reviewsCount: 220,
    inStock: true,
    deliveryTime: "3-5 days",
    image: "https://images.unsplash.com/photo-1532186651327-6ac23687d189?auto=format&fit=crop&w=500&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1532186651327-6ac23687d189?auto=format&fit=crop&w=500&q=80"
    ],
    description: "Auspicious water-filled shrifal (coconut) with fiber, representing Lord Ganesha and Goddess Lakshmi. Clean and checked for cracks before shipping.",
    material: "Fresh Coconut with husk",
    size: "Medium Size"
  },
  {
    id: "sn-10",
    category: "satyanarayan-katha",
    name: "Bhimsaini Kapoor Pack",
    price: 69,
    originalPrice: 89,
    discount: 22,
    rating: 4.9,
    reviewsCount: 340,
    inStock: true,
    deliveryTime: "3-5 days",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=500&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=500&q=80"
    ],
    description: "Pure crystalline Bhimsaini Camphor (Kapoor). Leaves no residue, burns completely, and emits a soothing fragrance. Perfect for deep cleansing and performing aarti.",
    material: "Pure Bhimsaini Camphor",
    size: "100g Pack"
  },
  {
    id: "sn-11",
    category: "satyanarayan-katha",
    name: "Pure Gangajal Bottle",
    price: 99,
    originalPrice: 120,
    discount: 17,
    rating: 4.9,
    reviewsCount: 512,
    inStock: true,
    deliveryTime: "3-5 days",
    image: "https://images.unsplash.com/photo-1609137144814-1e07b8be90de?auto=format&fit=crop&w=500&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1609137144814-1e07b8be90de?auto=format&fit=crop&w=500&q=80"
    ],
    description: "Directly sourced from the holy river Ganges at Haridwar. Filtered and bottled hygienically, retaining its sacred spiritual value and elements.",
    material: "Holy Ganges Water",
    size: "250ml Sealed Bottle"
  },
  {
    id: "sn-12",
    category: "satyanarayan-katha",
    name: "Decorative Brass Puja Thali",
    price: 499,
    originalPrice: 699,
    discount: 28,
    rating: 4.8,
    reviewsCount: 145,
    inStock: true,
    deliveryTime: "3-5 days",
    image: "https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?auto=format&fit=crop&w=500&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?auto=format&fit=crop&w=500&q=80"
    ],
    description: "Stunning hand-engraved brass plate with floral patterns and integrated small bowl slots. Resistant to tarnish, easy to clean, and gives a royal feel to the puja alter.",
    material: "Premium Brass",
    size: "Diameter: 10 inches"
  },

  // --- PUJA CLOTHES / KAPDE ---
  {
    id: "pc-1",
    category: "puja-clothes",
    subcategory: "laddu-gopal-dress",
    name: "Laddu Gopal Velvet Dress",
    price: 349,
    originalPrice: 499,
    discount: 30,
    rating: 4.9,
    reviewsCount: 198,
    inStock: true,
    deliveryTime: "3-5 days",
    image: "https://images.unsplash.com/photo-1621252179027-94459d278660?auto=format&fit=crop&w=500&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1621252179027-94459d278660?auto=format&fit=crop&w=500&q=80"
    ],
    description: "Exquisite velvet dress in bright yellow and maroon colors adorned with fine golden lace and embroidery (Zari work). Comes with a matching mukut/pagri. Ideal for Janmashtami or daily deity worship.",
    material: "Royal Velvet & Zari Border",
    size: "Size 2", // Sizes 0 to 6
    sizes: ["Size 0", "Size 1", "Size 2", "Size 3", "Size 4", "Size 5", "Size 6"],
    color: "Royal Yellow & Red",
    colors: ["Yellow", "Red", "Blue", "Green"]
  },
  {
    id: "pc-2",
    category: "puja-clothes",
    subcategory: "mata-rani-kapde",
    name: "Mata Rani Red Chunari",
    price: 299,
    originalPrice: 399,
    discount: 25,
    rating: 4.8,
    reviewsCount: 124,
    inStock: true,
    deliveryTime: "3-5 days",
    image: "https://images.unsplash.com/photo-1621252179027-94459d278660?auto=format&fit=crop&w=500&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1621252179027-94459d278660?auto=format&fit=crop&w=500&q=80"
    ],
    description: "Gorgeously embroidered net fabric chunari in dark red, featuring heavy golden gota-patti border and small sequin motifs. Fits all standard size Durga and Lakshmi idols.",
    material: "Net fabric, Golden Gota",
    size: "Medium",
    sizes: ["Small", "Medium", "Large"],
    color: "Deep Red"
  },
  {
    id: "pc-3",
    category: "puja-clothes",
    subcategory: "puja-cloth",
    name: "Yellow Puja Cloth (Suits Altar)",
    price: 199,
    originalPrice: 299,
    discount: 33,
    rating: 4.7,
    reviewsCount: 312,
    inStock: true,
    deliveryTime: "3-5 days",
    image: "https://images.unsplash.com/photo-1621252179027-94459d278660?auto=format&fit=crop&w=500&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1621252179027-94459d278660?auto=format&fit=crop&w=500&q=80"
    ],
    description: "High-quality pure cotton yellow cloth, specifically used to cover the puja chowki (table) for Satyanarayan katha, Ganesh Sthapana, or Navratri setup.",
    material: "100% Pure Cotton",
    size: "2 meters",
    sizes: ["1 meter", "2 meter", "3 meter"],
    color: "Bright Yellow"
  },
  {
    id: "pc-4",
    category: "puja-clothes",
    subcategory: "puja-aasan",
    name: "Red Velvet Puja Aasan",
    price: 249,
    originalPrice: 349,
    discount: 28,
    rating: 4.8,
    reviewsCount: 160,
    inStock: true,
    deliveryTime: "3-5 days",
    image: "https://images.unsplash.com/photo-1621252179027-94459d278660?auto=format&fit=crop&w=500&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1621252179027-94459d278660?auto=format&fit=crop&w=500&q=80"
    ],
    description: "Thick cushioned velvet mat with golden brocade borders. Provides a comfortable and pure seating posture (Aasan) during long prayer and havan sessions.",
    material: "Velvet with Foam padding",
    size: "18x18 inches",
    color: "Crimson Red"
  },
  {
    id: "pc-5",
    category: "puja-clothes",
    subcategory: "shiv-ji-vastra",
    name: "Shiv Ji White Cotton Vastra",
    price: 279,
    originalPrice: 349,
    discount: 20,
    rating: 4.8,
    reviewsCount: 78,
    inStock: true,
    deliveryTime: "3-5 days",
    image: "https://images.unsplash.com/photo-1621252179027-94459d278660?auto=format&fit=crop&w=500&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1621252179027-94459d278660?auto=format&fit=crop&w=500&q=80"
    ],
    description: "Pure white cotton dhoti and dupatta clothing set for Lord Shiva deity idol, stitched delicately with orange border lines.",
    material: "Pure Mulmul Cotton",
    size: "Standard (Fits 6-9 inch idols)",
    color: "Auspicious White"
  },
  {
    id: "pc-6",
    category: "puja-clothes",
    subcategory: "hanuman-ji-vastra",
    name: "Hanuman Ji Orange Vastra",
    price: 269,
    originalPrice: 329,
    discount: 18,
    rating: 4.9,
    reviewsCount: 93,
    inStock: true,
    deliveryTime: "3-5 days",
    image: "https://images.unsplash.com/photo-1621252179027-94459d278660?auto=format&fit=crop&w=500&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1621252179027-94459d278660?auto=format&fit=crop&w=500&q=80"
    ],
    description: "Bright saffron-orange satin clothing (Langot and Patka set) printed with 'Jai Shri Ram' text in gold. Ideal for Hanuman ji idols.",
    material: "Satin Silk",
    size: "Fits 8-12 inch idols",
    color: "Saffron Orange"
  },
  {
    id: "pc-7",
    category: "puja-clothes",
    subcategory: "thakur-ji-kapde",
    name: "Thakur Ji Silk Dress",
    price: 499,
    originalPrice: 649,
    discount: 23,
    rating: 4.9,
    reviewsCount: 54,
    inStock: true,
    deliveryTime: "3-5 days",
    image: "https://images.unsplash.com/photo-1621252179027-94459d278660?auto=format&fit=crop&w=500&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1621252179027-94459d278660?auto=format&fit=crop&w=500&q=80"
    ],
    description: "Premium pure silk banarasi dress crafted for Thakur Ji (Lord Krishna/Vishnu) with detailed golden thread work. Includes matching pagri, necklace, and flute toy.",
    material: "Banarasi Silk",
    size: "Size 4",
    sizes: ["Size 2", "Size 4", "Size 6"],
    color: "Deep Pink & Gold"
  },

  // --- NISHAN KA SAMAAN ---
  {
    id: "ns-1",
    category: "nishan-samaan",
    name: "Red Mata Rani Nishan (Flag)",
    price: 349,
    originalPrice: 449,
    discount: 22,
    rating: 4.8,
    reviewsCount: 112,
    inStock: true,
    deliveryTime: "3-5 days",
    image: "https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?auto=format&fit=crop&w=500&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?auto=format&fit=crop&w=500&q=80"
    ],
    description: "Auspicious red triangular religious flag dedicated to Goddess Durga/Mata Rani. Made of shiny silk with heavy golden border work and prints of Durga Trishul. Widely used for offering in temples.",
    material: "Satin Silk",
    size: "Medium",
    sizes: ["Small", "Medium", "Large"]
  },
  {
    id: "ns-2",
    category: "nishan-samaan",
    name: "Hanuman Ji Nishan",
    price: 399,
    originalPrice: 499,
    discount: 20,
    rating: 4.9,
    reviewsCount: 154,
    inStock: true,
    deliveryTime: "3-5 days",
    image: "https://images.unsplash.com/photo-1590076215667-873d6f009088?auto=format&fit=crop&w=500&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1590076215667-873d6f009088?auto=format&fit=crop&w=500&q=80"
    ],
    description: "Saffron triangular flag printed with Veer Hanuman carrying the Sanjeevani mountain, featuring sacred 'Jai Bajrangbali' lettering. Heavy-duty material that withstands high winds on roofs.",
    material: "Polyester-Silk mix",
    size: "Medium",
    sizes: ["Small", "Medium", "Large"]
  },
  {
    id: "ns-3",
    category: "nishan-samaan",
    name: "Yellow Temple Flag (Dhwaj)",
    price: 299,
    originalPrice: 399,
    discount: 25,
    rating: 4.7,
    reviewsCount: 89,
    inStock: true,
    deliveryTime: "3-5 days",
    image: "https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?auto=format&fit=crop&w=500&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?auto=format&fit=crop&w=500&q=80"
    ],
    description: "Bright yellow dhwaj flag representing spiritual peace and positivity, printed with Om symbol. Perfect for household or temple mounting.",
    material: "Premium Satin",
    size: "Small",
    sizes: ["Small", "Medium", "Large"]
  },
  {
    id: "ns-4",
    category: "nishan-samaan",
    name: "Printed Jai Mata Di Nishan",
    price: 449,
    originalPrice: 599,
    discount: 25,
    rating: 4.8,
    reviewsCount: 65,
    inStock: true,
    deliveryTime: "3-5 days",
    image: "https://images.unsplash.com/photo-1590076215667-873d6f009088?auto=format&fit=crop&w=500&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1590076215667-873d6f009088?auto=format&fit=crop&w=500&q=80"
    ],
    description: "Premium large red flags printed with a detailed face of Goddess Durga and written 'Jai Mata Di' in Hindi. Adorned with hanging golden tassels.",
    material: "Velvet Silk",
    size: "Large (3 x 4.5 feet)"
  },
  {
    id: "ns-5",
    category: "nishan-samaan",
    name: "Silk Religious Nishan",
    price: 599,
    originalPrice: 799,
    discount: 25,
    rating: 4.9,
    reviewsCount: 42,
    inStock: true,
    deliveryTime: "3-5 days",
    image: "https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?auto=format&fit=crop&w=500&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?auto=format&fit=crop&w=500&q=80"
    ],
    description: "High-grade pure silk nishan flag with elaborate gold brocade embroidery (Gota work). Built specifically for special offerings in pilgrimage temples.",
    material: "Pure Banarasi Silk",
    size: "3 feet"
  },
  {
    id: "ns-6",
    category: "nishan-samaan",
    name: "Cotton Nishan Cloth",
    price: 199,
    originalPrice: 249,
    discount: 20,
    rating: 4.6,
    reviewsCount: 110,
    inStock: true,
    deliveryTime: "3-5 days",
    image: "https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?auto=format&fit=crop&w=500&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?auto=format&fit=crop&w=500&q=80"
    ],
    description: "Durable orange cotton flag cloth. Easy to clean, sturdy stitch quality, suitable for harsh outdoor conditions.",
    material: "100% Cotton",
    size: "Standard (2 x 3 feet)"
  },
  {
    id: "ns-7",
    category: "nishan-samaan",
    name: "Temple Dhwaj Flag",
    price: 349,
    originalPrice: 429,
    discount: 18,
    rating: 4.8,
    reviewsCount: 76,
    inStock: true,
    deliveryTime: "3-5 days",
    image: "https://images.unsplash.com/photo-1590076215667-873d6f009088?auto=format&fit=crop&w=500&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1590076215667-873d6f009088?auto=format&fit=crop&w=500&q=80"
    ],
    description: "Traditional triangular temple dhwaj flag made of heavy orange satin with detailed stitches and a flag pole socket.",
    material: "Satin fabric",
    size: "Standard"
  },

  // --- MUNDAN CEREMONY ---
  {
    id: "mc-1",
    category: "mundan-ceremony",
    name: "Mundan Ceremony Puja Kit",
    price: 999,
    originalPrice: 1299,
    discount: 23,
    rating: 4.9,
    reviewsCount: 90,
    inStock: true,
    deliveryTime: "3-5 days",
    image: "https://images.unsplash.com/photo-1608976451677-7427ccf4c75b?auto=format&fit=crop&w=500&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1608976451677-7427ccf4c75b?auto=format&fit=crop&w=500&q=80"
    ],
    description: "Complete ceremonial kit for the Mundan (head-shaving) ritual. Contains havan samagri, gangajal, pure ghee, roli, akshat (unbroken rice), dhar (shaving bowl), baby scissors, cotton wicks, kapoor, turmeric, sandalwood powder, and small baby comb.",
    material: "Natural items",
    size: "Complete Kit"
  },
  {
    id: "mc-2",
    category: "mundan-ceremony",
    name: "Baby Traditional Dress (Mundan)",
    price: 599,
    originalPrice: 799,
    discount: 25,
    rating: 4.8,
    reviewsCount: 142,
    inStock: true,
    deliveryTime: "3-5 days",
    image: "https://images.unsplash.com/photo-1562972855-2474dc61d441?auto=format&fit=crop&w=500&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1562972855-2474dc61d441?auto=format&fit=crop&w=500&q=80"
    ],
    description: "Soft, organic cotton dhoti and kurta set in bright yellow, perfect for the baby to wear during the sacred havan. Skin-friendly, highly breathable, and comfortable for toddlers.",
    material: "100% Organic Cotton",
    size: "1 Year",
    sizes: ["6 Months", "1 Year", "2 Years"]
  },
  {
    id: "mc-3",
    category: "mundan-ceremony",
    name: "Havan Samagri Pack",
    price: 299,
    originalPrice: 399,
    discount: 25,
    rating: 4.7,
    reviewsCount: 205,
    inStock: true,
    deliveryTime: "3-5 days",
    image: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?auto=format&fit=crop&w=500&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1509248961158-e54f6934749c?auto=format&fit=crop&w=500&q=80"
    ],
    description: "Proprietary mixture of 51 natural herbs, roots, dry fruits, and spices. Releases a sweet, purifying smoke when burned in the havan, cleansing the environment and baby's health aura.",
    material: "51 Ayurvedic Herbs",
    size: "500g Pack"
  },
  {
    id: "mc-4",
    category: "mundan-ceremony",
    name: "Baby Hooded Towel",
    price: 199,
    originalPrice: 299,
    discount: 33,
    rating: 4.6,
    reviewsCount: 88,
    inStock: true,
    deliveryTime: "3-5 days",
    image: "https://images.unsplash.com/photo-1562972855-2474dc61d441?auto=format&fit=crop&w=500&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1562972855-2474dc61d441?auto=format&fit=crop&w=500&q=80"
    ],
    description: "Soft micro-fiber towel with hood to wrap the baby immediately after head shaving and ritual bathing. Absorbs water rapidly.",
    material: "Soft Microfiber",
    size: "Standard Baby Size"
  },

  // --- ANNAPRASHAN CEREMONY ---
  {
    id: "an-1",
    category: "annaprashan-ceremony",
    name: "Annaprashan Puja Kit",
    price: 1099,
    originalPrice: 1499,
    discount: 26,
    rating: 4.9,
    reviewsCount: 76,
    inStock: true,
    deliveryTime: "3-5 days",
    image: "https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?auto=format&fit=crop&w=500&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?auto=format&fit=crop&w=500&q=80"
    ],
    description: "Complete kit for the Annaprashan (first-rice-feeding) ceremony. Includes organic rice grains, raw sugar, honey, saffron strands, kheer bowl, roli, chandan, matchbox, and custom kheer cooking manual.",
    material: "Premium organic foods",
    size: "Complete Kit"
  },
  {
    id: "an-2",
    category: "annaprashan-ceremony",
    name: "Silver Bowl and Spoon Set",
    price: 899,
    originalPrice: 1199,
    discount: 25,
    rating: 4.8,
    reviewsCount: 165,
    inStock: true,
    deliveryTime: "3-5 days",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=500&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=500&q=80"
    ],
    description: "High-purity German silver polished bowl and spoon set, engraved with traditional Peacock/Lotus designs. Ideal for feeding the baby first sweet rice (kheer) and keeping as a lifelong keepsake.",
    material: "German Silver (Silver plated)",
    size: "Bowl: 3.5 inch, Spoon: 4 inch"
  },
  {
    id: "an-3",
    category: "annaprashan-ceremony",
    name: "Baby Feeding Set (Eco-Friendly)",
    price: 499,
    originalPrice: 599,
    discount: 17,
    rating: 4.7,
    reviewsCount: 94,
    inStock: true,
    deliveryTime: "3-5 days",
    image: "https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?auto=format&fit=crop&w=500&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?auto=format&fit=crop&w=500&q=80"
    ],
    description: "Pure brass kansa bowl, plate, and glass feeding set, designed for infants. Kansa has ayurvedic properties that support digestion and immunity.",
    material: "Kansa (Bronze alloy)",
    size: "Set of 3 items"
  },
  {
    id: "an-4",
    category: "annaprashan-ceremony",
    name: "Baby Traditional Dress (Annaprashan)",
    price: 699,
    originalPrice: 899,
    discount: 22,
    rating: 4.8,
    reviewsCount: 130,
    inStock: true,
    deliveryTime: "3-5 days",
    image: "https://images.unsplash.com/photo-1562972855-2474dc61d441?auto=format&fit=crop&w=500&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1562972855-2474dc61d441?auto=format&fit=crop&w=500&q=80"
    ],
    description: "A gorgeous silk-cotton blend sherwani or lehenga set for the baby, designed with soft inner lining. Gives a festive look without causing skin itchiness.",
    material: "Silk-Cotton Blend",
    size: "1 Year",
    sizes: ["6 Months", "1 Year", "2 Years"]
  },
  {
    id: "an-5",
    category: "annaprashan-ceremony",
    name: "Rice Ceremony Pack",
    price: 149,
    originalPrice: 199,
    discount: 25,
    rating: 4.9,
    reviewsCount: 300,
    inStock: true,
    deliveryTime: "3-5 days",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=500&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=500&q=80"
    ],
    description: "Sacred Gobindobhog long-grain aromatic rice, cleaned thrice and stored airtight. Specially harvested for cooking traditional sweet kheer for the child.",
    material: "Organic Gobindobhog Rice",
    size: "500g Pack"
  },
  {
    id: "an-6",
    category: "annaprashan-ceremony",
    name: "Return Gift Pack (Dry Fruits Box)",
    price: 399,
    originalPrice: 499,
    discount: 20,
    rating: 4.8,
    reviewsCount: 154,
    inStock: true,
    deliveryTime: "3-5 days",
    image: "https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?auto=format&fit=crop&w=500&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?auto=format&fit=crop&w=500&q=80"
    ],
    description: "Elegant golden printed cardboard box containing four partitions filled with premium quality almonds, cashews, raisins, and pistachios. Great for distribution among guests.",
    material: "Almonds, Cashews, Raisins, Pistachios",
    size: "400g Box"
  },

  // --- RUDRABHISHEK ---
  {
    id: "rb-1",
    category: "rudrabhishek-samaan",
    name: "Rudrabhishek Complete Puja Kit",
    price: 1299,
    originalPrice: 1599,
    discount: 18,
    rating: 4.9,
    reviewsCount: 110,
    inStock: true,
    deliveryTime: "3-5 days",
    image: "https://images.unsplash.com/photo-1630409351241-e90e7f5e434d?auto=format&fit=crop&w=500&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1630409351241-e90e7f5e434d?auto=format&fit=crop&w=500&q=80"
    ],
    description: "Complete ingredients for Performing Rudrabhishek of Lord Shiva. Contains gangajal, honey, pure cow milk, belpatra, datura fruits, bhasma, white sandalwood, rudraksha mala, janeu, perfume, and sugar.",
    material: "Pure organic items",
    size: "Complete Ceremony Pack"
  },
  {
    id: "rb-2",
    category: "rudrabhishek-samaan",
    name: "Bel Patra Pack (Fresh Leaves)",
    price: 99,
    originalPrice: 129,
    discount: 23,
    rating: 4.8,
    reviewsCount: 420,
    inStock: true,
    deliveryTime: "1-2 days",
    image: "https://images.unsplash.com/photo-1532186651327-6ac23687d189?auto=format&fit=crop&w=500&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1532186651327-6ac23687d189?auto=format&fit=crop&w=500&q=80"
    ],
    description: "Pack of 21 fresh, undamaged three-lobed (trifoliate) Bel Patra leaves, symbolizing the trinity of Brahma, Vishnu, Shiva. Handpicked with devotion.",
    material: "Fresh Organic Leaves",
    size: "Pack of 21"
  },
  {
    id: "rb-3",
    category: "rudrabhishek-samaan",
    name: "Rudraksha Mala (108 Beads)",
    price: 399,
    originalPrice: 599,
    discount: 33,
    rating: 4.9,
    reviewsCount: 288,
    inStock: true,
    deliveryTime: "3-5 days",
    image: "https://images.unsplash.com/photo-1630409351241-e90e7f5e434d?auto=format&fit=crop&w=500&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1630409351241-e90e7f5e434d?auto=format&fit=crop&w=500&q=80"
    ],
    description: "Original 5 Mukhi (five-faced) Nepali Rudraksha bead mala with 108+1 sumeru beads. Strung securely, ideal for chanting Shiva mantras (Japa) or wearing around the neck.",
    material: "Five-Mukhi Rudraksha Seeds",
    size: "8mm bead size, 108 beads"
  },
  {
    id: "rb-4",
    category: "rudrabhishek-samaan",
    name: "Pure Narmadeshwar Shivling",
    price: 799,
    originalPrice: 999,
    discount: 20,
    rating: 4.9,
    reviewsCount: 167,
    inStock: true,
    deliveryTime: "3-5 days",
    image: "https://images.unsplash.com/photo-1630409351241-e90e7f5e434d?auto=format&fit=crop&w=500&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1630409351241-e90e7f5e434d?auto=format&fit=crop&w=500&q=80"
    ],
    description: "Naturally formed stone Shivling sourced directly from the Narmada River bed. Features a polished texture and distinct natural patterns. Ideal for daily milk and water abhishek.",
    material: "Natural Narmada Stone",
    size: "Height: 3 inches"
  },
  {
    id: "rb-5",
    category: "rudrabhishek-samaan",
    name: "Bhasma Pack (Vibhuti)",
    price: 99,
    originalPrice: 129,
    discount: 23,
    rating: 4.8,
    reviewsCount: 188,
    inStock: true,
    deliveryTime: "3-5 days",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=500&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=500&q=80"
    ],
    description: "Pure, sacred Vibhuti Bhasma made from ritual cow-dung fire ash mixed with herbs. Provides protective energies when applied to the forehead.",
    material: "Pure Havan Ash",
    size: "150g Pack"
  },
  {
    id: "rb-6",
    category: "rudrabhishek-samaan",
    name: "Datura Flower and Fruit Pack",
    price: 129,
    originalPrice: 169,
    discount: 23,
    rating: 4.7,
    reviewsCount: 122,
    inStock: true,
    deliveryTime: "1-2 days",
    image: "https://images.unsplash.com/photo-1619895862022-09114b41f16f?auto=format&fit=crop&w=500&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1619895862022-09114b41f16f?auto=format&fit=crop&w=500&q=80"
    ],
    description: "Freshly picked Datura flowers and spiky green Datura fruits, highly preferred by Lord Shiva. Packaged securely to preserve freshness.",
    material: "Fresh Organic Flowers",
    size: "Pack of 5 Flowers & 5 Fruits"
  },

  // --- BASIC PUJA SAMAAN ---
  {
    id: "bp-1",
    category: "basic-puja-samaan",
    name: "Aromatic Agarbatti Pack (Sandalwood)",
    price: 99,
    originalPrice: 129,
    discount: 23,
    rating: 4.7,
    reviewsCount: 312,
    inStock: true,
    deliveryTime: "3-5 days",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=500&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=500&q=80"
    ],
    description: "Premium charcoal-free agarbatti incense sticks with organic sandalwood essential oils. Produces minimal soot and provides 45 minutes of continuous divine aroma.",
    material: "Bamboo sticks, Sandalwood oil",
    size: "150 sticks box"
  },
  {
    id: "bp-2",
    category: "basic-puja-samaan",
    name: "Pure Cow Ghee Pack",
    price: 249,
    originalPrice: 299,
    discount: 16,
    rating: 4.8,
    reviewsCount: 410,
    inStock: true,
    deliveryTime: "3-5 days",
    image: "https://images.unsplash.com/photo-1545128485-c400e7702796?auto=format&fit=crop&w=500&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1545128485-c400e7702796?auto=format&fit=crop&w=500&q=80"
    ],
    description: "Pure, aromatic clarified butter (ghee) made from A2 cow milk. Ideal for burning diyas (lamps) and pouring in Havan fire.",
    material: "Pure Cow Ghee",
    size: "500ml Pack"
  },
  {
    id: "bp-3",
    category: "basic-puja-samaan",
    name: "Brass Diya (Akhand Jyot)",
    price: 299,
    originalPrice: 399,
    discount: 25,
    rating: 4.9,
    reviewsCount: 165,
    inStock: true,
    deliveryTime: "3-5 days",
    image: "https://images.unsplash.com/photo-1545128485-c400e7702796?auto=format&fit=crop&w=500&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1545128485-c400e7702796?auto=format&fit=crop&w=500&q=80"
    ],
    description: "Premium quality solid brass diya with glass cover, designed to burn continuously for 24+ hours (Akhand Jyot). Easy to assemble and safe for homes.",
    material: "Pure Brass & Borosilicate Glass",
    size: "Height: 5 inches"
  },
  {
    id: "bp-4",
    category: "basic-puja-samaan",
    name: "Ruyi Ki Batti (Cotton Wicks)",
    price: 49,
    originalPrice: 69,
    discount: 28,
    rating: 4.7,
    reviewsCount: 520,
    inStock: true,
    deliveryTime: "3-5 days",
    image: "https://images.unsplash.com/photo-1545128485-c400e7702796?auto=format&fit=crop&w=500&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1545128485-c400e7702796?auto=format&fit=crop&w=500&q=80"
    ],
    description: "Pack of round (gol) cotton wicks made of high-absorbency organic cotton. Retains ghee longer for standard flame burning.",
    material: "100% Cotton",
    size: "Pack of 200 wicks"
  },
  {
    id: "bp-5",
    category: "basic-puja-samaan",
    name: "Sandalwood Chandan Powder",
    price: 149,
    originalPrice: 199,
    discount: 25,
    rating: 4.8,
    reviewsCount: 195,
    inStock: true,
    deliveryTime: "3-5 days",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=500&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=500&q=80"
    ],
    description: "Pure yellow sandalwood (chandan) powder. Cools the forehead, smells wonderful, and can be mixed with Gangajal for deity tilak.",
    material: "Pure Sandalwood wood dust",
    size: "100g Pack"
  },
  {
    id: "bp-6",
    category: "basic-puja-samaan",
    name: "Hand-held Brass Temple Bell",
    price: 249,
    originalPrice: 349,
    discount: 28,
    rating: 4.9,
    reviewsCount: 110,
    inStock: true,
    deliveryTime: "3-5 days",
    image: "https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?auto=format&fit=crop&w=500&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?auto=format&fit=crop&w=500&q=80"
    ],
    description: "Finely tuned hand bell (ghanti) crafted from solid brass with an elegant Lord Ganesha carved on top of the handle. Produces a loud and clear ring.",
    material: "Brass",
    size: "Height: 6 inches"
  },
  {
    id: "bp-7",
    category: "basic-puja-samaan",
    name: "Auspicious Kumkum & Roli Set",
    price: 49,
    originalPrice: 59,
    discount: 16,
    rating: 4.8,
    reviewsCount: 220,
    inStock: true,
    deliveryTime: "3-5 days",
    image: "https://images.unsplash.com/photo-1609137144814-1e07b8be90de?auto=format&fit=crop&w=500&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1609137144814-1e07b8be90de?auto=format&fit=crop&w=500&q=80"
    ],
    description: "Pack of natural herbal Roli (red tilak) and Kumkum made of turmeric mixed with lime. Chemical-free, skin-friendly, and highly auspicious.",
    material: "Herbal powders",
    size: "Pack of 2 jars (50g each)"
  },
  {
    id: "bp-8",
    category: "basic-puja-samaan",
    name: "Complete Basic Puja Kit",
    price: 899,
    originalPrice: 1199,
    discount: 25,
    rating: 4.9,
    reviewsCount: 124,
    inStock: true,
    deliveryTime: "3-5 days",
    image: "https://images.unsplash.com/photo-1545128485-c400e7702796?auto=format&fit=crop&w=500&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1545128485-c400e7702796?auto=format&fit=crop&w=500&q=80"
    ],
    description: "Essential home kit containing dhoopbatti, agarbatti, cow ghee, brass diya, cotton wicks, matchbox, roli, sindoor, kapoor, chandan, honey, and gangajal. Great for new homes.",
    material: "Mixed Essentials",
    size: "Standard Box"
  }
];

export const offers = [
  {
    id: "off-1",
    title: "First Order Discount",
    code: "PUJA10",
    description: "Use coupon PUJA10 at checkout to save 10% flat on your very first order.",
    value: "10% OFF"
  },
  {
    id: "off-2",
    title: "Free Delivery Offer",
    code: "FREE999",
    description: "Free express delivery automatically applied on all orders above ₹999.",
    value: "FREE DELIVERY"
  },
  {
    id: "off-3",
    title: "Navratri Special Combo",
    code: "NAVRATRI20",
    description: "Buy complete Durga Puja kit with items and save flat 20% on clothes.",
    value: "20% OFF CLOTHES"
  },
  {
    id: "off-4",
    title: "Diwali Puja Combo Offer",
    code: "DIWALI15",
    description: "Get Lakshmi-Ganesh brass idols, pure ghee, and decorative clay diyas in a single combo and save 15%.",
    value: "15% COMBO SAVINGS"
  },
  {
    id: "off-5",
    title: "Shivratri Rudrabhishek Pack",
    code: "SHIVAJI",
    description: "Get Narmadeshwar shivling + fresh belpatra + pure gangajal combo with complimentary Rudraksha Mala.",
    value: "FREE RUDRAKSHA"
  },
  {
    id: "off-6",
    title: "Janmashtami Laddu Gopal Dress Combo",
    code: "GOPAL12",
    description: "Get velvet dress, bansuri, mukut and swing cushion in one set and get 12% off.",
    value: "12% BUNDLE DISCOUNT"
  }
];
