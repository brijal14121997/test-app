import React from "react";

const OurStory = () => {
  return (
    <section id="ourstory">
      <div className="w-full h-[679px] md:h-[700px] md:mt-[100px] mt-7 rounded-lg bg-[#fbf7f0] relative grid md:grid-cols-2 grid-cols-1 place-items-center">
        <img src="/images/our-story.png" className="absolute"></img>
        <div className="md:-mt-20 -mt-12 md:ml-14 relative">
          {" "}
          <img
            src="/images/story.png"
            alt="story"
            className="md:w-[580px] w-full md:h-[887px] h-[300px]"
          ></img>
        </div>
        <div className="flex flex-col relative">
          <div className="flex flex-row relative">
            <span className="font-normal md:text-[64px] text-[32px]">
              Our story
            </span>
            <img
              src="/images/flower.png"
              className="absolute md:left-56 md:bottom-5"
            ></img>
          </div>
          <p className="md:w-[520px] w-[270px] md:text-base text-sm font-medium">
            Lorem ipsum dolor sit amet consectetur. Sed sit aenean condimentum
            nulla. Cursus tortor odio fringilla nibh nibh dictumst mattis. Enim
            semper sapien proin at nec pellentesque euismod tristique venenatis.
            Feugiat nulla orci elit sed magnis etiam semper placerat. Nunc a id
            integer eu. Quis velit praesent ante erat. Justo scelerisque lorem
            risus sed non erat egestas. Maecenas sit feugiat ornare enim risus.
            Pharetra vitae turpis id tortor. Viverra hac neque.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
