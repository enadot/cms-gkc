<<<<<<< HEAD
import Image from "next/image";

export const Logo = () => (
  <Image
    src="https://res.cloudinary.com/levantine/image/upload/v1685273251/Web/logo/Asset_1_svlgrn.svg"
    alt="Levantine"
    width={185}
    height={45}
=======
export const Logo = () => (
  <img
    src="/static/logo.png"
    alt="Logo"
    width={85}
    height={"auto"}
>>>>>>> f91efac5851721f5552623c0d308c127742a78a6
    style={{ padding: "0.6rem" }}
  />
);
