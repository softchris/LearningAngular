enum Brands {
  Chevrolet,
  Cadillac,
  Ford,
  Buick,
  Chrysler,
  Dodge
}
var myCar: Brands = Brands.Cadillac;

enum BrandsReduced {
  Tesla = 1,
  GMC,
  Jeep
}

var myTruck: BrandsReduced = BrandsReduced.GMC;

enum StackingIndex {
  None = 0,
  Dropdown = 1000,
  Overlay = 2000,
  Modal = 3000
}

var mySelectBoxStacking: StackingIndex = StackingIndex.Dropdown;

var myCarBrandName: string = Brands[1];
