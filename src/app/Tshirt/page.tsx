import React from "react";
import TshirtCard from "./Tshirtcard";

const Tshirt = [
  {
    img: "/images-1.jpg",
    desc: "Mk-Garments T-shirt Men Autumn Men Long Sleeves",
    rating: 4,
    price: "Rs 499",
  },
  {
    img: "/images-2.jpg",
    desc: "The HR COLLECTION Plain Basic White T-shirt/Premium White...",
    rating: 7,
    price: "Rs 361",
  },
  {
    img: "/images-3.jpg",
    desc: "New Stylish Design T-shirt Hollister Printed Logo Tshirt For Mens",
    rating: 4,
    price: "Rs 299",
  },
  {
    img: "/images-4.jpg",
    desc: "Happy Smile Amazing Smart Fit T-shirt",
    rating: 8,
    price: "Rs 344",
  },
  {
    img: "/images-5.jpg",
    desc: "Gangster Printed Cotton Jersey Half Sleeves O-Neck T-shirt for Men",
    rating: 5,
    price: "Rs 399",
  },
  {
    img: "/images-6.jpg",
    desc: "The Vintage Clothing Pack of Plain Basic Half Sleeves",
    rating: 6,
    price: "Rs 722",
  },
  {
    img: "/images-7.jpg",
    desc: "T-Shirt Plain Black Colored Summer Top Half Sleeve Round Neck",
    rating: 3,
    price: "Rs 300",
  },
  {
    img: "/images-8.jpg",
    desc: "Plain Full Sleeves High Neck For Men, Turtle Neck Pullover Tight",
    rating: 2,
    price: "Rs 502",
  },
  {
    img: "/images-9.jpg",
    desc: "Mens's Vertical Stripes Amazing Smart Fit T-shirts",
    rating: 8,
    price: "Rs 362",
  },
  {
    img: "/images-10.jpg",
    desc: "Yellow & Black Trendy Printed For Mens & Boys -Soft",
    rating: 6,
    price: "Rs 880",
  },
  {
    img: "/images-11.jpg",
    desc: "Track Suit New Arrival Oh Yes Printed TrackOut Soft Fabric",
    rating: 3,
    price: "Rs 700",
  },
  {
    img: "/images-12.jpg",
    desc: "Olive Green & Black Printed Summer Tracksuit For Men",
    rating: 3,
    price: "Rs 780",
  },
  {
    img: "/images-13.jpg",
    desc: "Pack Of 3 Round Neck Full Sleeves Plain (jersey) T-shirt For Men",
    rating: 3,
    price: "Rs 660",
  },
  {
    img: "/images-14.jpg",
    desc: "Men's Pure Black Full Sleeves T-shirt for Winter",
    rating: 3,
    price: "Rs 580",
  },
  {
    img: "/images-15.jpg",
    desc: "Stylish Avengers Tags Trendy Stylish Theme Tag Round Neck Gym",
    rating: 3,
    price: "Rs 790",
  },
  {
    img: "/images-16.jpg",
    desc: "Stylish Men's Waffle Knit T-shirt Men's Stylish T-shirt",
    rating: 7,
    price: "Rs 450",
  },
];

const Tshirts = () => {
  return (
    <div>
      <div className="container pt-16">
        <h2 className="text-3xl pb-4 text-center hover:text-gray-300 font-bold py-2 px-4 rounded">
          New Products
        </h2>
        <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
          {Tshirt.map((item, index) => (
            <TshirtCard
              key={index}
              img={item.img}
              desc={item.desc}
              rating={item.rating}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tshirts;