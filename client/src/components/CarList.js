import React from 'react'
import CarCard from './CarCard'
import '../index.css'


const CarList = () => {
  // Assume cars data is fetched from backend
  const cars = [
    {
      id: 1,
      year: 1970,
      make: 'Chevrolet',
      model: 'Corvette LS5 454',
      description: 'The Chevrolet Corvette LS5 454 is a classic American sports car known for its powerful engine and iconic design.',
      imageUrl: 'https://cdn.dealeraccelerate.com/streetside/5/42844/3519672/1920x1440/w/1970-chevrolet-corvette-ls5-454',
    },
    {
      id: 2,
      year: 1986,
      make: 'Mercury',
      model: 'Capri Mustang RESTOMOD',
      description: 'The Mercury Capri Mustang RESTOMOD is a custom-built performance car based on the classic Ford Mustang platform.',
      imageUrl: 'https://cdn.dealeraccelerate.com/streetside/1/35530/2584689/1920x1440/w/1986-mercury-capri-mustang-restomodpath/to/car2_image.jpg',
    },
    {
      id: 3,
      year: 1923,
      make: 'Ford',
      model: 'Roadster Ratuala Coffin Car',
      description: 'The Ford Roadster Ratuala Coffin Car is a unique hot rod with a coffin-shaped body, perfect for spooky-themed events.',
      imageUrl: 'https://cdn.dealeraccelerate.com/streetside/6/42211/3437794/1920x1440/w/1923-ford-roadster-ratuala-coffin-car.jpg',
    },
    {
      id: 4,
      year: 1979,
      make: 'Volkswagen',
      model: 'Super Beetle Convertible',
      description: 'The Volkswagen Super Beetle Convertible is a classic German convertible known for its compact size and charming design.',
      imageUrl: 'https://cdn.dealeraccelerate.com/streetside/6/42717/3505997/1920x1440/w/1979-volkswagen-super-beetle-convertible',
    },
    {
      id: 5,
      year: 1969,
      make: 'AMC',
      model: 'SC Rambler Hurst',
      description: 'The AMC SC Rambler Hurst is a rare muscle car with a powerful V8 engine, designed for drag racing enthusiasts.',
      imageUrl: 'https://cdn.dealeraccelerate.com/streetside/2/42618/3508313/1920x1440/w/1969-amc-sc-rambler-hurst',
    },
    {
      id: 6,
      year: 1989,
      make: 'Batmobile',
      model: '1989 Batmobile',
      description: 'The 1989 Batmobile is the iconic vehicle driven by Batman in the 1989 Batman film, known for its sleek design and advanced technology.',
      imageUrl: 'https://cdn.dealeraccelerate.com/streetside/6/42206/3439055/1920x1440/w/1989-batmobile',
    },
    {
      id: 7,
      year: 1937,
      make: 'Ford',
      model: 'Cabriolet Street Rod',
      description: 'The Ford Cabriolet Street Rod is a vintage hot rod with a convertible roof, perfect for cruising down the open road in style.',
      imageUrl: 'https://cdn.dealeraccelerate.com/streetside/6/42160/3427231/1920x1440/w/1937-ford-cabriolet-street-rod',
    },
    {
      id: 8,
      year: 1966,
      make: 'Jaguar',
      model: 'E-Type Series 1',
      description: 'The Jaguar E-Type Series 1 is a classic British sports car known for its elegant design and exceptional performance.',
      imageUrl: 'https://cdn.dealeraccelerate.com/streetside/6/41902/3390374/1920x1440/w/1966-jaguar-e-type-series-1',
    },
    {
      id: 9,
      year: 1970,
      make: 'Plymouth',
      model: 'Barracuda Gran Coupe',
      description: 'The Plymouth Barracuda Gran Coupe is a rare muscle car with a sleek fastback design, powered by a high-performance V8 engine.',
      imageUrl: 'https://cdn.dealeraccelerate.com/streetside/3/41768/3375113/1920x1440/w/1970-plymouth-barracuda-gran-coupe',
    },
    {
      id: 10,
      year: 1971,
      make: 'Pontiac',
      model: 'GTO Judge Tribute',
      description: 'The Pontiac GTO Judge Tribute is a modern recreation of the iconic American muscle car, featuring a bold design and powerful engine.',
      imageUrl: 'https://cdn.dealeraccelerate.com/streetside/2/41385/3341312/1920x1440/w/1971-pontiac-gto-judge-tribute',
    },
    {
      id: 11,
      year: 1946,
      make: 'Ford',
      model: 'UTE Restomod',
      description: 'The Ford UTE Restomod is a customized vintage pickup truck with modern performance enhancements, perfect for daily driving or car shows.',
      imageUrl: 'https://cdn.dealeraccelerate.com/streetside/5/41339/3337257/1920x1440/w/1946-ford-ute-restomod',
    },
    {
      id: 12,
      year: 1961,
      make: 'MG',
      model: 'MGA 1600',
      description: 'The MG MGA 1600 is a classic British sports car known for its timeless design and agile handling, making it a favorite among motoring enthusiasts.',
      imageUrl: 'https://cdn.dealeraccelerate.com/streetside/4/41323/3316418/1920x1440/w/1961-mg-mga-1600',
    },
    {
      id: 13,
      year: 1977,
      make: 'Citroen',
      model: '2CV',
      description: 'The Citroen 2CV is a beloved French economy car known for its quirky design and reliable performance, making it a cultural icon.',
      imageUrl: 'https://cdn.dealeraccelerate.com/streetside/1/40650/3245396/1920x1440/1977-citroen-2cv',
    },
    {
      id: 14,
      year: 1955,
      make: 'Ford',
      model: 'Fairlane Crown Victoria',
      description: 'The Ford Fairlane Crown Victoria is a classic American sedan with a distinctive two-tone paint scheme and spacious interior, perfect for cruising in style.',
      imageUrl: 'https://cdn.dealeraccelerate.com/streetside/1/40650/3245396/1920x1440/1977-citroen-2cv',
    },
    {
      id: 15,
      year: 1967,
      make: 'Chevrolet',
      model: 'Camaro Drag Car',
      description: "The 1967 Chevrolet Camaro Drag Car is a legendary muscle car modified for drag racing competitions. With its powerful engine and lightweight design, it's built for speed and acceleration, making it a formidable contender on the drag strip.",
      imageUrl: 'https://cdn.dealeraccelerate.com/streetside/6/39709/3113912/1920x1440/1967-chevrolet-camaro-drag-car',
    },
    {
      id: 16,
      year: 1972,
      make: 'Buick',
      model: 'Skylark',
      description: 'The 1972 Buick Skylark is a classic American car known for its sleek design and smooth ride. With its V8 engine and luxurious interior, it offers a comfortable driving experience while still delivering plenty of power. Whether cruising down the highway or parked at a car show, the Buick Skylark is sure to turn heads.',
      imageUrl: 'https://cdn.dealeraccelerate.com/streetside/2/42678/3516429/1920x1440/w/1972-buick-skylark',
    }
]

  return (
    <div className="carList">
      {cars.map((car) => (
        <CarCard key={car.id} car={car} />
        
      ))}
    </div>
  )
}

export default CarList
