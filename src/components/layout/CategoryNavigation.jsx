import NavLink from "./NavLink";

export default async function CategoryNav() {
  const res = await fetch(
    "https://api.abcz.workers.dev/api/bazardor/categories",
    { cache: "no-store" }
  );
  const categories = await res.json();


  return <NavLink categories={categories} />;
}