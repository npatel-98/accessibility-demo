import React from "react";
import FooterLogo from "../../images/HZTL_grey_workshop.png";

function Footer() {
  return (
    <footer>
      <div className="primaryColor pt-[95px] pb-1" id="footer_component">
        <div className="container mx-auto">
          <div className="mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-4/12 xl:w-5/12">
              <div className="mb-11 max-w-[320px]">
                <a href="#footer_component" className="mb-8 inline-block">
                  <img src={FooterLogo} height={180} width={160} alt="footer logo" className="block max-w-full" />
                </a>
                <p className="text-base text-slate-400">This membership will help you plan and execute a variety of projects.</p>
              </div>
            </div>
            <div className="w-full px-4 lg:w-8/12 xl:w-7/12">
              <div className="-mx-4 flex flex-wrap">
                <div className="w-full px-4 sm:w-1/2 md:w-2/12 lg:w-2/12">
                  <div className="footer_col mb-11">
                    <h3 className="mb-8 text-[22px] font-medium text-black">Home</h3>
                    <ul className="footer_elements space-y-[10px]">
                      <li>
                        <a href="#" className="inline-block text-base text-slate-400 hover:text-indigo-400">
                          Product
                        </a>
                      </li>
                      <li>
                        <a href="#" className="inline-block text-base text-slate-400 hover:text-indigo-400">
                          Pricing
                        </a>
                      </li>
                      <li>
                        <a href="#" className="inline-block text-base text-slate-400 hover:text-indigo-400">
                          Business
                        </a>
                      </li>
                      <li>
                        <a href="#" className="inline-block text-base  text-slate-400 hover:text-indigo-400">
                          Enterprise
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="w-full px-4 sm:w-1/2 md:w-3/12 lg:w-3/12">
                  <div className="mb-11 footer_col">
                    <h3 className="mb-8 text-[22px] font-medium text-black">About Us</h3>
                    <ul className="space-y-[10px]">
                      <li>
                        <a href="#" className="inline-block text-base text-slate-400 hover:text-indigo-400">
                          Company
                        </a>
                      </li>
                      <li>
                        <a href="#" className="inline-block text-base text-slate-400 hover:text-indigo-400">
                          Leadership
                        </a>
                      </li>
                      <li>
                        <a href="#" className="inline-block text-base text-slate-400 hover:text-indigo-400">
                          Careers
                        </a>
                      </li>
                      <li>
                        <a href="#" className="inline-block text-base text-slate-400 hover:text-indigo-400">
                          Diversity
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="w-full px-4 sm:w-1/2 md:w-3/12 lg:w-3/12">
                  <div className="wow fadeInUp mb-11 footer_col">
                    <h3 className="mb-8 text-[22px] font-medium text-black">Resources</h3>
                    <ul className="space-y-[10px]">
                      <li>
                        <a href="#" className="inline-block text-base text-slate-400 hover:text-indigo-400">
                          Andy Guide
                        </a>
                      </li>
                      <li>
                        <a href="#" className="inline-block text-base text-slate-400 hover:text-indigo-400">
                          Forum
                        </a>
                      </li>
                      <li>
                        <a href="#" className="inline-block text-base text-slate-400 hover:text-indigo-400">
                          Support
                        </a>
                      </li>
                      <li>
                        <a href="3" className="inline-block text-base text-slate-400 hover:text-indigo-400">
                          App Directory
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="w-full px-4 sm:w-1/2 md:w-4/12 lg:w-4/12">
                  <div className="mb-11 footer_col">
                    <h3 className="mb-8 text-[22px] font-medium text-black">Tutorial</h3>
                    <ul className="space-y-[10px]">
                      <li>
                        <a href="#" className="inline-block text-base text-slate-400 hover:text-indigo-400">
                          10 Leadership Styles
                        </a>
                      </li>
                      <li>
                        <a href="#" className="inline-block text-base text-slate-400 hover:text-indigo-400">
                          Executive Summary Tips
                        </a>
                      </li>
                      <li>
                        <a href="#" className="inline-block text-base text-slate-400 hover:text-indigo-400">
                          Prevent Team Burnout
                        </a>
                      </li>
                      <li>
                        <a href="#" className="inline-block text-base text-slate-400 hover:text-indigo-400">
                          What are OKRs?
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div tabIndex="-1" id="example-footer" className="text-center">
            &copy; 2021 Site Name
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
