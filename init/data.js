
const sampleListings = [
  {
    title: "Cozy Mountain Cabin",
    description: "A peaceful wooden cabin surrounded by pine trees and fresh mountain air.",
    image: {
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
      filename: "mountain_cabin_1"
    },
    price: 3500,
    country: "India",
    location: "Manali, Himachal Pradesh"
  },
  {
    title: "Luxury Beach Resort",
    description: "Oceanfront resort with premium rooms and private beach access.",
    image: {
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      filename: "beach_resort_1"
    },
    price: 9500,
    country: "India",
    location: "Goa"
  },
  {
    title: "Modern City Apartment",
    description: "Fully furnished apartment located in the heart of the city.",
    image: {
      url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
      filename: "city_apartment_1"
    },
    price: 4200,
    country: "India",
    location: "Bengaluru, Karnataka"
  },
  {
    title: "Royal Desert Camp",
    description: "Luxury tents with traditional Rajasthani food and cultural shows.",
    image: {
      url: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",

      filename: "desert_camp_1"
    },
    price: 3000,
    country: "India",
    location: "Jaisalmer, Rajasthan"
  },
  {
    title: "Hill View Homestay",
    description: "Comfortable homestay offering scenic hill views and peaceful vibes.",
    image: {
      url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
      filename: "hill_homestay_1"
    },
    price: 2800,
    country: "India",
    location: "Ooty, Tamil Nadu"
  },
  {
    title: "Lake Side Villa",
    description: "Beautiful villa beside the lake with sunset views.",
    image: {
      url: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
      filename: "lake_villa_1"
    },
    price: 7200,
    country: "India",
    location: "Udaipur, Rajasthan"
  },
  {
    title: "Forest Tree House",
    description: "Unique tree house stay deep inside the forest.",
    image: {
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      filename: "tree_house_1"
    },
    price: 5000,
    country: "India",
    location: "Wayanad, Kerala"
  },
  {
    title: "Heritage Haveli",
    description: "Traditional haveli showcasing royal architecture and decor.",
    image: {
      url: "https://images.unsplash.com/photo-1549187774-b4e9b0445b41",
      filename: "heritage_haveli_1"
    },
    price: 6500,
    country: "India",
    location: "Jaipur, Rajasthan"
  },
  {
    title: "Backwater Cottage",
    description: "Relax in a peaceful cottage surrounded by Kerala backwaters.",
    image: {
      url: "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba",
      filename: "backwater_cottage_1"
    },
    price: 4800,
    country: "India",
    location: "Alleppey, Kerala"
  },
  {
    title: "Snow View Lodge",
    description: "Winter lodge offering breathtaking snow-covered mountain views.",
    image: {
      url: "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66",
      filename: "snow_lodge_1"
    },
    price: 6000,
    country: "India",
    location: "Gulmarg, Kashmir"
  },

  // 15 more
  {
    title: "Urban Studio Flat",
    description: "Compact studio flat ideal for solo travelers.",
    image: {
      url: "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
      filename: "studio_flat_1"
    },
    price: 2500,
    country: "India",
    location: "Delhi"
  },
  {
    title: "Cliffside Cottage",
    description: "Cozy cottage offering dramatic cliffside sea views.",
    image: {
      url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      filename: "cliff_cottage_1"
    },
    price: 5500,
    country: "India",
    location: "Varkala, Kerala"
  },
  {
    title: "Tea Garden Bungalow",
    description: "Bungalow surrounded by lush green tea gardens.",
    image: {
      url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
      filename: "tea_bungalow_1"
    },
    price: 4300,
    country: "India",
    location: "Darjeeling, West Bengal"
  },
  {
    title: "Luxury Penthouse",
    description: "High-rise penthouse with stunning city skyline views.",
    image: {
      url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
      filename: "penthouse_1"
    },
    price: 12000,
    country: "India",
    location: "Mumbai"
  },
  {
    title: "Farm Stay Retreat",
    description: "Village-style farm stay with organic meals.",
    image: {
      url: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6",
      filename: "farm_stay_1"
    },
    price: 3200,
    country: "India",
    location: "Coorg, Karnataka"
  },
  {
    title: "Riverfront Cottage",
    description: "Peaceful cottage located beside a flowing river.",
    image: {
      url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
      filename: "river_cottage_1"
    },
    price: 3900,
    country: "India",
    location: "Rishikesh, Uttarakhand"
  },
  {
    title: "Jungle Safari Resort",
    description: "Nature resort with wildlife safari experience.",
    image: {
      url: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c",
      filename: "jungle_resort_1"
    },
    price: 8000,
    country: "India",
    location: "Jim Corbett"
  },
  {
    title: "Budget Guest House",
    description: "Clean and affordable guest house near tourist attractions.",
    image: {
      url: "https://images.unsplash.com/photo-1523217582562-09d0def993a6",
      filename: "guest_house_1"
    },
    price: 1500,
    country: "India",
    location: "Varanasi, Uttar Pradesh"
  },
  {
    title: "Island Beach Hut",
    description: "Simple beach hut just steps away from the sea.",
    image: {
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      filename: "beach_hut_1"
    },
    price: 4500,
    country: "India",
    location: "Andaman Islands"
  },
  {
    title: "Eco Bamboo House",
    description: "Eco-friendly bamboo house in a quiet hill town.",
    image: {
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      filename: "bamboo_house_1"
    },
    price: 2700,
    country: "India",
    location: "Shillong, Meghalaya"
  },

  {
  title: "Himalayan View Homestay",
  description: "Cozy homestay with breathtaking views of the Himalayas.",
  image: {
    url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    filename: "himalayan_homestay_1"
  },
  price: 2500,
  country: "India",
  location: "Manali, Himachal Pradesh"
},
{
  title: "Backwater Bliss Villa",
  description: "Peaceful villa surrounded by Kerala backwaters.",
  image: {
    url: "https://images.unsplash.com/photo-1600508774634-4e11d34730e2",
    filename: "backwater_villa_1"
  },
  price: 4000,
  country: "India",
  location: "Alappuzha, Kerala"
},
{
  title: "Goa Beach Shack",
  description: "Beachside shack with sunset views and sea breeze.",
  image: {
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    filename: "goa_beach_shack_1"
  },
  price: 3500,
  country: "India",
  location: "Anjuna, Goa"
},
{
  title: "Hilltop Cottage",
  description: "Quiet cottage located on a scenic hilltop.",
  image: {
    url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    filename: "hilltop_cottage_1"
  },
  price: 2800,
  country: "India",
  location: "Ooty, Tamil Nadu"
},
{
  title: "Royal Heritage Haveli",
  description: "Traditional haveli with royal architecture and comfort.",
  image: {
    url: "https://images.unsplash.com/photo-1548013146-72479768bada",
    filename: "heritage_haveli_1"
  },
  price: 4500,
  country: "India",
  location: "Jaipur, Rajasthan"
},
{
  title: "Forest Retreat Lodge",
  description: "Nature retreat surrounded by dense forest.",
  image: {
    url: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
    filename: "forest_lodge_1"
  },
  price: 3200,
  country: "India",
  location: "Wayanad, Kerala"
},
{
  title: "Lakeside Wooden Cabin",
  description: "Wooden cabin near a calm and beautiful lake.",
  image: {
    url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
    filename: "lakeside_cabin_1"
  },
  price: 3000,
  country: "India",
  location: "Nainital, Uttarakhand"
},
{
  title: "Tea Garden Bungalow",
  description: "Stay amidst lush green tea plantations.",
  image: {
    url: "https://images.unsplash.com/photo-1523978591478-c753949ff840",
    filename: "tea_bungalow_1"
  },
  price: 3800,
  country: "India",
  location: "Munnar, Kerala"
},
{
  title: "Snow Peak Chalet",
  description: "Chalet with snowy mountain views.",
  image: {
    url: "https://images.unsplash.com/photo-1519817650390-64a93db511aa",
    filename: "snow_chalet_1"
  },
  price: 4200,
  country: "India",
  location: "Gulmarg, Kashmir"
},
{
  title: "Urban Luxury Apartment",
  description: "Modern apartment in the heart of the city.",
  image: {
    url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
    filename: "luxury_apartment_1"
  },
  price: 5000,
  country: "India",
  location: "Mumbai, Maharashtra"
},
{
  title: "Desert Star Camp",
  description: "Night camping with stars and folk music.",
  image: {
    url: "https://images.unsplash.com/photo-1518684079-3c830dcef090",
    filename: "desert_camp_2"
  },
  price: 2800,
  country: "India",
  location: "Bikaner, Rajasthan"
},
{
  title: "Riverside Bamboo Hut",
  description: "Eco-friendly bamboo hut near the river.",
  image: {
    url: "https://images.unsplash.com/photo-1502082553048-f009c37129b9",
    filename: "bamboo_hut_1"
  },
  price: 2200,
  country: "India",
  location: "Rishikesh, Uttarakhand"
},
{
  title: "Cliffside Ocean Resort",
  description: "Resort with dramatic cliff and ocean views.",
  image: {
    url: "https://images.unsplash.com/photo-1506929562872-bb421503ef21",
    filename: "ocean_resort_1"
  },
  price: 4800,
  country: "India",
  location: "Varkala, Kerala"
},
{
  title: "Jungle Treehouse",
  description: "Treehouse stay inside the jungle.",
  image: {
    url: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
    filename: "treehouse_1"
  },
  price: 3600,
  country: "India",
  location: "Thekkady, Kerala"
},
{
  title: "Colonial Style Bungalow",
  description: "British-era bungalow with classic interiors.",
  image: {
    url: "https://images.unsplash.com/photo-1599423300746-b62533397364",
    filename: "colonial_bungalow_1"
  },
  price: 4100,
  country: "India",
  location: "Shillong, Meghalaya"
},
{
  title: "Beachfront Villa",
  description: "Private villa directly on the beach.",
  image: {
    url: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
    filename: "beach_villa_1"
  },
  price: 5500,
  country: "India",
  location: "Pondicherry"
},
{
  title: "Mountain Stone House",
  description: "Stone house with rustic mountain charm.",
  image: {
    url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
    filename: "stone_house_1"
  },
  price: 2900,
  country: "India",
  location: "Kasol, Himachal Pradesh"
},
{
  title: "Luxury Houseboat",
  description: "Premium houseboat experience on backwaters.",
  image: {
    url: "https://images.unsplash.com/photo-1585999323294-85a6f42d4d4f",
    filename: "houseboat_1"
  },
  price: 6000,
  country: "India",
  location: "Kumarakom, Kerala"
},
{
  title: "Eco Mud House",
  description: "Sustainable mud house with natural cooling.",
  image: {
    url: "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba",
    filename: "mud_house_1"
  },
  price: 2000,
  country: "India",
  location: "Auroville, Tamil Nadu"
},
{
  title: "Palace View Hotel",
  description: "Hotel with direct view of historic palace.",
  image: {
    url: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1",
    filename: "palace_hotel_1"
  },
  price: 4700,
  country: "India",
  location: "Udaipur, Rajasthan"
}

];


module.exports = { data: sampleListings };
