import React from "react";
import ultsData from "../../ultsData";

const LatestPost = () => {
  return (
    <div className="container mx-auto">
      <h1 className="font-semibold text-5xl text-center text-blue-800 mb-8 mt-8">
        Latest offers
      </h1>
      <div className="flex flex-wrap w-full  lg:gap-x-14 gap-y-4 lg:gap-y-0">
        {ultsData.latestPost.map((post) => (
          <div className="lg:w-96 w-full relative">
            <img
              className="w-full h-64 transition transform duration-1000 ease-in-out hover:-translate-y-1 hover:scale-110 cursor-pointer "
              src={post.image}
              alt=""
            />
            <div className="absolute bottom-10 left-8">
              {post.condition !== false && (
                <span className="text-white bg-green-500 rounded-2xl px-3 py-0.5 font-semibold">
                  {post.condition}
                </span>
              )}
              <h1 className="text-3xl text-blue-800 font-semibold">
                {post.title}
              </h1>
              {post.parsentage !== false && (
                <h1 className="text-yellow-500 font-bold text-5xl my-4">
                  {post.parsentage}
                </h1>
              )}
              {post.price !== false && (
                <div className="my-2">
                  <h1 className="font-bold text-5xl text-yellow-500 ">
                    ${post.price}
                  </h1>
                  <del className="font-semibold text-gray-500 text-2xl ">
                    $129.00
                  </del>
                </div>
              )}
              <p>{post.button}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestPost;
