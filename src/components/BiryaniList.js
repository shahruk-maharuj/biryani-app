import React from "react";
import "./../assets/BiryaniList.css";

const BiryaniList = () => {
  const biryaniData = [
    {
      name: "Hazir Biriani",
      ingredients: "Chicken biryani, Hazir biryani, Chevon biryani",
      price: 15,
      photoName:
        "https://media-cdn.tripadvisor.com/media/photo-s/09/54/65/71/hazir-biriani.jpg",
      soldOut: false,
      location: "99, Motijheel b/a, Dhaka 1000, Bangladesh",
    },
    {
      name: "Star Kabab & Restaurant",
      ingredients: "Chicken and mutton biryani",
      price: 16,
      photoName:
        "https://media-cdn.tripadvisor.com/media/photo-s/09/54/65/71/hazir-biriani.jpg",
      soldOut: false,
      location: "House-15 Rd no. 17, Dhaka 1213, Bangladesh",
    },
    {
      name: "Sultan's Dine",
      ingredients: "Kacchi and chicken biryanis",
      price: 18,
      photoName:
        "https://media-cdn.tripadvisor.com/media/photo-s/09/54/65/71/hazir-biriani.jpg",
      soldOut: false,
      location: "Green Akshay Plaza, Dhaka 1209, Bangladesh",
    },
    {
      name: "Salam's Kitchen",
      ingredients:
        "Shahi mutton kacchi biryani and Kitchen Special Chicken Roast Biryani",
      price: 17,
      photoName:
        "https://media-cdn.tripadvisor.com/media/photo-s/09/54/65/71/hazir-biriani.jpg",
      soldOut: false,
      location: "House 30, Block D, Dhaka 1213, Bangladesh",
    },
    {
      name: "Al Razzaque",
      ingredients: "Mutton kacchi biryani and chicken biryani",
      price: 16,
      photoName:
        "https://media-cdn.tripadvisor.com/media/photo-s/09/54/65/71/hazir-biriani.jpg",
      soldOut: true,
      location: "29/1 North South Road, Dhaka 1100, Bangladesh",
    },
    {
      name: "Lucknow",
      ingredients:
        "Handi biryani, kofta biryani, keema biryani, parda biryani, and naushijaan biryani",
      price: 19,
      photoName:
        "https://media-cdn.tripadvisor.com/media/photo-s/09/54/65/71/hazir-biriani.jpg",
      soldOut: false,
      location: "60 Kemal Ataturk Avenue, Dhaka 1213, Bangladesh",
    },
    {
      name: "Kolkata Kacchi Ghor",
      ingredients:
        "Special kacchi biryani, mutton biryani, chicken biryani, and veg biryani",
      price: 15,
      photoName:
        "https://media-cdn.tripadvisor.com/media/photo-s/09/54/65/71/hazir-biriani.jpg",
      soldOut: false,
      location: "14 Abdul Hasnat Rd, Dhaka, Bangladesh",
    },
    {
      name: "Sajna",
      ingredients:
        "Various biryanis, chicken kebabs, breads, and spicy curries",
      price: 18,
      photoName:
        "https://media-cdn.tripadvisor.com/media/photo-s/09/54/65/71/hazir-biriani.jpg",
      soldOut: false,
      location: "House 14 Rd No. 11, Dhaka 1213, Bangladesh",
    },
    {
      name: "Khana Khazana",
      ingredients:
        "Prawn biryani, dum gosht biryani, chicken noormahal biryani, Nizami tarkari biryani, and veg biryani",
      price: 20,
      photoName:
        "https://media-cdn.tripadvisor.com/media/photo-s/09/54/65/71/hazir-biriani.jpg",
      soldOut: false,
      location: "175 Gulshan North Ave, Dhaka 1212, Bangladesh",
    },
    {
      name: "Thali - House of Spices",
      ingredients: "Hyderabadi biryani",
      price: 18,
      photoName:
        "https://media-cdn.tripadvisor.com/media/photo-s/09/54/65/71/hazir-biriani.jpg",
      soldOut: false,
      location: "Road No. 2, House 35, Dhanmondi, Dhaka 1209, Bangladesh",
    },
  ];

  return (
    <div className="biryani-card-container">
      {biryaniData.map((item, index) => (
        <div key={index} className="biryani-card">
          <img src={item.photoName} alt={item.name} className="biryani-image" />
          <div className="biryani-content">
            <h2>{item.name}</h2>
            <p>
              <strong>Ingredients:</strong> {item.ingredients}
            </p>
            <p>
              <strong>Price:</strong> ${item.price}
            </p>
            <p>
              <strong>Location:</strong> {item.location}
            </p>
            {item.soldOut ? <p className="sold-out">Sold Out</p> : null}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BiryaniList;
