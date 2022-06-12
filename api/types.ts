export type Product = {
  id: string | number;
  color: string;
  name: string;
  price: number;
  img: string;
};

export type Link = {name: string; url: string};

export type NavSubcategory = {
  title: string;
  links: Link[];
};

export type Nav = {
  category: string;
  url: string;
  img: string;
  subCategories: NavSubcategory[];
};
