import React from 'react';
import Image from 'next/image';

interface PropsType {
    img: string;
    title: string;
    desc: string;
    rating: number;
    price: string;
}

const TshirtCard: React.FC<PropsType> = ({ img, title, desc, rating, price }) => {
    return (
        <div className="px-4 border border-gray-200 rounded-xl max-w-[400px] shadow-md overflow-hidden hover:shadow-xl  hover:opacity-100 transition-opacity duration-800">
            <div className="w-full h-auto">
                <Image
                    className="rounded-t-xl"
                    src={img}
                    width={400}
                    height={300}
                    layout="responsive"
                    alt={title}
                />
            </div>
            <div className="p-4">
                <h3 className="font-semibold text-lg">{title}</h3>
                <p className="text-gray-500">{desc}</p>
                <div className="flex items-center mt-2">
                    <span className="text-yellow-500 font-semibold">{'★'.repeat(rating)}</span>
                    <span className="text-gray-400 ml-2">({rating})</span>
                </div>
                <p className="text-xl font-bold mt-2">{price}</p>
            </div>
        </div>
    );
};

export default TshirtCard;
