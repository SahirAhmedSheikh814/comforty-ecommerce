import Image from "next/image"

export default function ProductGrid() {
  const items = [
    { image: "/product-3.svg", alt: "Orange Chair" },
    { image: "/product-4.svg", alt: "White Chair 1" },
    { image: "/product-1.svg", alt: "White Chair 2" },
    { image: "/product-10.svg", alt: "Grey Chair" },
    { image: "/product-1.svg", alt: "White Chair 3" },
  ]

  return (
    <div className="container mx-auto px-4 py-20">
      {/* Mobile Heading */}
      <div className="xl:hidden text-center mb-6">
        <div className="text-xs tracking-wider text-muted-foreground font-thin">
          EXPLORE NEW AND POPULAR STYLES
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        {/* Rotated Text (hidden on mobile) */}
        <div className="hidden xl:block w-12 relative">
          <div className="absolute origin-top-left -rotate-90 translate-y-[450px] whitespace-nowrap text-lg tracking-wider text-muted-foreground font-medium rotated-text ">
            EXPLORE NEW AND POPULAR STYLES
          </div>
        </div>

        {/* Grid Layout */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-5 gap-4">
          {/* Large Image */}
          <div className="md:col-span-3 aspect-square md:aspect-auto">
            <div className="relative h-full">
              <Image
                src={items[0].image}
                alt={items[0].alt}
                fill
                className="object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Small Images Grid */}
          <div className="grid grid-cols-2 md:col-span-2 gap-4">
            {items.slice(1).map((item, index) => (
              <div key={index} className="aspect-square relative">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

