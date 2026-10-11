import NavLink from "./NavLink";

export default async function CategoryNavigation() {
  const res = await fetch(
    // "https://api.api-store.workers.dev/api/bazardor/categories",

    // AltrenativeAPI 
    "https://openapi.programming-hero.com/api/bazardor/categories",
    
  );
  const categories = await res.json();


  return <NavLink categories={categories} />;
}