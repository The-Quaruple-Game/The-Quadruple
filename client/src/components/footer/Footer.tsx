import logo from "@/assets/logo.svg"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center">
              <img src={logo} className="h-15"/>
              <span className="ml-2 text-xl font-bold">SkillRush</span>
            </div>
            <p className="mt-4 text-gray-400 text-sm">
              Creating exceptional digital experiences and innovative solutions for businesses worldwide since 2010.
            </p>
            <div className="mt-6">
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Connect With Us</h3>
              <div className="mt-4 flex space-x-6">

                {/* Instagram */}
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                {/* YouTube */}
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">YouTube</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                  </svg>
                </a>
                {/* GitHub */}
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">GitHub</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Products Links */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Products</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm">Analytics</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm">Marketing Automation</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm">Email Campaigns</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm">CRM Integration</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm">Mobile Apps</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm">Enterprise Solutions</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm">API Documentation</a>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Resources</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm">Help Center</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm">Tutorials</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm">Documentation</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm">Webinars</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm">Developer Guide</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm">Blog</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm">Community Forum</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm">Events</a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm">About Us</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm">Careers</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm">Press</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm">News</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm">Contact Us</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm">Partners</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm">Investors</a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm">Cookie Policy</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm">GDPR Compliance</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm">Security</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm">Accessibility</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm">Trademark Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Newsletter Subscription */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Subscribe to our newsletter</h3>
              <p className="mt-2 text-base text-gray-400">
                Get the latest news, updates, and special offers sent directly to your inbox.
              </p>
            </div>
            <div>
              <form className="sm:flex">
                <label htmlFor="email-address" className="sr-only">Email address</label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full px-4 py-2 border border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500 rounded-md"
                  placeholder="Enter your email"
                />
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center px-5 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-6 md:order-2 mb-4 md:mb-0">
            {/* App Store */}
            <a href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">App Store</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701z" clipRule="evenodd" />
              </svg>
            </a>
            {/* Google Play */}
            <a href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">Google Play</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M3.172 4.828L12.3 1.26c.078-.03.156-.03.234 0l9.127 3.57c.684.27.684 1.2 0 1.47L12.534 9.87a.703.703 0 01-.465 0L2.942 6.299a.802.802 0 01.23-1.47zM2.77 8.097c-.323.12-.356.514-.072.668l9.127 7.27c.078.06.18.09.276.09s.198-.03.276-.09l9.127-7.27c.285-.154.252-.549-.072-.668L12.3 11.56a.703.703 0 01-.5 0L2.77 8.097zm9.729 9.518c.323.12.708-.03.87-.407L21.5 7.12c.183-.392-.173-.85-.603-.784l-8.398 1.554a.703.703 0 00-.572.572L10.371 16.86c-.066.43.392.786.784.603l1.343-.848zm-1.343-8.505c.066-.43-.392-.786-.784-.603l-8.398 5.088c-.355.213-.355.731 0 .944l8.398 5.088c.392.183.85-.173.784-.603l-1.554-8.398a.703.703 0 00-.572-.572l-1.343-.848z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
          <div className="md:order-1 text-center md:text-left">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} SkillRush, Inc. All rights reserved.
            </p>
            <p className="mt-1 text-xs text-gray-500">
              All trademarks are the property of their respective owners.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
