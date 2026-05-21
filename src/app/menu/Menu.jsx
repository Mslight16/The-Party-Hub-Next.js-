import Image from "next/image";

const Menu = ({ items }) => {
  return (
    <div className="grid gap-12 xl:grid-cols-2">
      {items.map((menuItem) => {
        const { id, title, img, desc, price } = menuItem;

        return (
          <article
            key={id}
            className="grid md:grid-cols-[225px_1fr] gap-5 max-w-2xl"
          >
            <div className="relative w-full h-50 md:h-43.75">
              <Image
                src={img}
                alt={title}
                fill
                className="object-cover border-4 border-yellow-700 rounded-md"
              />
            </div>

            <div>
              <header className="flex justify-between border-b border-dotted border-gray-400 mb-3">
                <h4 className="font-bold capitalize text-lg text-gray-800">
                  {title}
                </h4>

                <h4 className="font-bold text-yellow-700">
                  ${price}
                </h4>
              </header>

              <p className="text-gray-600 leading-7">
                {desc}
              </p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;