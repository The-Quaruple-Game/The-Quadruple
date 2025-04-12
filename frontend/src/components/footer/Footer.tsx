export default function Footer() {
<<<<<<< HEAD
=======
  const BrandName = "SkillRush"
>>>>>>> 85245aeb05c52bf229904b483c9dfaee59dd498a
    return (
      <footer className="bg-gray-800 text-white">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
<<<<<<< HEAD
              <div className="text-lg font-bold">Brand Logo</div>
=======
              <div className="text-lg font-bold">{BrandName}</div>
>>>>>>> 85245aeb05c52bf229904b483c9dfaee59dd498a
              <p className="text-sm text-gray-400">© 2025 Company Inc. All rights reserved.</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-300">Privacy Policy</a>
              <a href="#" className="hover:text-blue-300">Terms of Service</a>
              <a href="#" className="hover:text-blue-300">Contact Us</a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
