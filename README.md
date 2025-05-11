# ShopBaz
ShopBaz - An Ecommerce Platform
```
🛍️ ShopBaz – Modern E-Commerce Platform
ShopBaz is a full-stack eCommerce web application built using Next.js (App Router), MongoDB, and NextAuth for authentication. It allows users to browse products, add them to a cart, and place orders — while admins can manage inventory and orders through a secure dashboard.

📦 ShopBaz integrates with the Amazon Product API to fetch real product data — but presents it in a completely custom UI/UX design, tailored for a unique and smooth shopping experience.

🚀 Tech Stack
Frontend: Next.js (App Router), Tailwind CSS

Backend: Next.js API Routes, MongoDB (via Mongoose)

Authentication: NextAuth.js with Google OAuth

Security: Middleware for admin route protection

APIs: Amazon Product Advertising API (external product data)

Other: Cloudinary (image uploads), Toast notifications

🧑‍💻 Features
🔓 User Features
Google sign-in with NextAuth

Browse real products (Amazon API)

Custom-designed product cards and pages

Add to cart & checkout

View past orders

🛠️ Admin Features
Secure admin-only dashboard (middleware protected)

Add/Edit/Delete products

Upload product images (Cloudinary)

View and manage all customer orders

Update order status (Pending, Processing, Delivered)

📁 Folder Structure Highlights

app/
├── (auth)/login – NextAuth login
├── products/ – Product listing & details
├── cart/ – Shopping cart logic
├── checkout/ – Order placement
├── dashboard/ – Admin panel
├── api/ – REST API routes for products, cart, orders


 Future Improvements
Stripe/Razorpay integration

Product search, filters, and sorting
```

Mobile-first responsive design

User address management

Product ratings & customer reviews
