import { NavLink } from "react-router";

export function HomeApp() {
  return (
    <>
      <link rel="icon" type="image/svg+xml" href="user.png" />

      <NavLink to="/EcommerceApp">
        <span>click here to direct to ecommerce project</span>
      </NavLink>
    </>
  );
}