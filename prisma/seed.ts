// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// async function main() {
//   const images = [
//     { top: "top-10", right: "right-30 sm:right-60", image: "https://example.com/images/product.png" },
//     { top: "top-10", left: "left-30 sm:left-60", image: "https://example.com/images/time_and_date.png" },
//     { top: "top-5", left: "left-15 sm:left-30", image: "https://example.com/images/office.png" },
//     { top: "top-5", right: "right-15 sm:right-30", image: "https://example.com/images/routes.png" },
//     { top: "top-0", left: "left-0", shadow: "shadow-[0_75px_75px_rgba(0,0,0,0.5)]", image: "https://example.com/images/home.png" },
//   ];

//   for (const img of images) {
//     await prisma.headerImage.create({
//       data: img,
//     });
//   }
// }

// main()
//   .catch((e) => {
//     console.error(e);
//     process.exit(1);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });