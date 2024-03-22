import React from 'react'
import CarCard from './CarCard'

const CarList = () => {
  // Assume cars data is fetched from backend
  const cars = [
    {
      id: 1,
      year: 1970,
      make: 'Chevrolet',
      model: 'Corvette LS5 454',
      imageUrl:
        'https://cdn.dealeraccelerate.com/streetside/5/42844/3519672/1920x1440/w/1970-chevrolet-corvette-ls5-454',
    },
    {
      id: 2,
      year: 1986,
      make: 'Mercury',
      model: 'Capri Mustang RESTOMOD',
      imageUrl:
        'https://cdn.dealeraccelerate.com/streetside/1/35530/2584689/1920x1440/w/1986-mercury-capri-mustang-restomodpath/to/car2_image.jpg',
    },
    {
      id: 3,
      year: 1923,
      make: 'Ford',
      model: 'Roadster Ratuala Coffin Car',
      imageUrl:
        'https://cdn.dealeraccelerate.com/streetside/6/42211/3437794/1920x1440/w/1923-ford-roadster-ratuala-coffin-car.jpg',
    },
    {
      id: 4,
      year: 1979,
      make: 'Volkswagen',
      model: 'Super Beetle Convertible',
      imageUrl:
        'https://cdn.dealeraccelerate.com/streetside/6/42717/3505997/1920x1440/w/1979-volkswagen-super-beetle-convertible',
    },
    {
      id: 5,
      year: 1969,
      make: 'AMC',
      model: 'SC Rambler Hurst',
      imageUrl:
        'https://cdn.dealeraccelerate.com/streetside/2/42618/3508313/1920x1440/w/1969-amc-sc-rambler-hurst',
    },
    {
      id: 6,
      year: 1989,
      make: 'Batmobile',
      model: '1989 Batmobile',
      imageUrl:
        'https://cdn.dealeraccelerate.com/streetside/6/42206/3439055/1920x1440/w/1989-batmobile',
    },
    {
      id: 7,
      year: 1937,
      make: 'Ford',
      model: 'Cabriolet Street Rod',
      imageUrl:
        'https://cdn.dealeraccelerate.com/streetside/6/42160/3427231/1920x1440/w/1937-ford-cabriolet-street-rod',
    },
    {
      id: 8,
      year: 1966,
      make: 'Jaguar',
      model: 'E-Type Series 1',
      imageUrl:
        'https://cdn.dealeraccelerate.com/streetside/6/41902/3390374/1920x1440/w/1966-jaguar-e-type-series-1',
    },
    {
      id: 9,
      year: 1970,
      make: 'Plymouth',
      model: 'Barracuda Gran Coupe',
      imageUrl:
        'https://cdn.dealeraccelerate.com/streetside/3/41768/3375113/1920x1440/w/1970-plymouth-barracuda-gran-coupe',
    },
    {
      id: 10,
      year: 1971,
      make: 'Pontiac',
      model: 'GTO Judge Tribute',
      imageUrl:
        'https://cdn.dealeraccelerate.com/streetside/2/41385/3341312/1920x1440/w/1971-pontiac-gto-judge-tribute',
    },
    {
      id: 11,
      year: 1946,
      make: 'Ford',
      model: 'UTE Restomod',
      imageUrl:
        'https://cdn.dealeraccelerate.com/streetside/5/41339/3337257/1920x1440/w/1946-ford-ute-restomod',
    },
    {
      id: 12,
      year: 1961,
      make: 'MG',
      model: 'MGA 1600',
      imageUrl:
        'https://cdn.dealeraccelerate.com/streetside/4/41323/3316418/1920x1440/w/1961-mg-mga-1600',
    },
    {
      id: 13,
      year: 1977,
      make: 'Citroen',
      model: '2CV',
      imageUrl:
        'https://cdn.dealeraccelerate.com/streetside/1/40650/3245396/1920x1440/1977-citroen-2cv',
    },
    {
      id: 14,
      year: 1955,
      make: 'Ford',
      model: 'Fairlane Crown Victoria',
      imageUrl:
        'https://cdn.dealeraccelerate.com/streetside/2/36959/2745087/1920x1440/w/1955-ford-fairlane-crown-victoria',
    },
    {
      id: 15,
      year: 1967,
      make: 'Chevrolet',
      model: 'Camaro Drag Car',
      imageUrl:
        'https://cdn.dealeraccelerate.com/streetside/6/39709/3113912/1920x1440/1967-chevrolet-camaro-drag-car',
    },
    {
      id: 16,
      year: 1972,
      make: 'Buick',
      model: 'Skylark',
      imageUrl:
        'https://cdn.dealeraccelerate.com/streetside/2/42678/3516429/1920x1440/w/1972-buick-skylark',
    },
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
