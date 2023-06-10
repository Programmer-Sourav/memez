import "../stylesheets/style.css"

export default function Home(){
    return(
        <div className="container">
            <nav className="white-bg">
        <div className="p-s pl-xxl txt-m ml-m">
          <a href="../../index.html">
            <span className="primary-color">My</span>Website
          </a>
        </div>
      </nav>
        <aside className="p-s pt-xl pl-xxl ml-m sidebar1">
        <div className="flex flex-column flex-space-between sidebar">
          <div>
            <div className="pt-s black-color fw-semibold">
              <a href="">
                <i className="bi bi-house"></i> &nbsp;
                <span className="fw-bold">Home</span>
              </a>
            </div>
            <div className="pt-s black-color fw-semibold">
              <a href="../explore/explore.html">
                <i className="bi bi-rocket"></i> &nbsp;
                <span>Explore</span>
              </a>
            </div>
            <div className="pt-s black-color fw-semibold">
              <a href="../bookmarks/bookmark.html">
                <i className="bi bi-bookmark"></i> &nbsp;
                <span>Bookmark</span>
              </a>
            </div>
            <div className="pt-s black-color fw-semibold">
              <a href="../profile/profile.html">
                <i className="bi bi-person"></i> &nbsp;
                <span>Profile</span>
              </a>
            </div>
            <button className="mt-m p-s primary-bg white-color border-none outline-transparent new-post-btn">
              Create New Post
            </button>
          </div>
          <div className="flex flex-space-between flex-align-center">
            <div className="flex">
              <div className="grey-bg br-full width-xl height-xl"></div>
              <div className="flex flex-column ml-xs">
                <div className="fw-bold">Tanay Pratap</div>
                <div className="fw-light grey-color">@tanaypratap</div>
              </div>
            </div>
            <div className="grey-color fw-bold">...</div>
          </div>
        </div>
      </aside>
      <main className="mt-xl">
        <div className="white-bg mr-xxl p-xs mt-s">
          <div className="flex flex-row nowrap p-xs">
            <div className="grey-bg br-full width-xl height-xl p-xs mr-xs" style={{aspectRatio : '1'}}></div>
            <div className="w-full">
              <textarea name="" id="" cols="50" rows="6" className="w-full lynx-white-bg p-s outline-transparent border-none" style={{resize : 'none'}} placeholder="Write something interesting..."></textarea>
              <div className="flex flex-space-between pt-s">
                <div className="flex " style={{gap : '1rem'}}>
                  <i className="bi bi-card-image"></i>
                  <i className="bi bi-filetype-gif"></i>
                  <i className="bi bi-emoji-smile"></i>
                </div>
                <button className="primary-bg p-l pt-xs pb-xs secondary-color border-none outline-transparent">Post</button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-space-between mr-xxl flex-align-center pt-s">
          <h3 className="">Latest Posts</h3>
          <i className="bi bi-sliders2-vertical"></i>
        </div>
        <div className="white-bg mr-xxl p-xs mt-s">
          <div className="flex flex-row nowrap p-xs">
            <div className="grey-bg br-full width-xl height-xl p-xs mr-xs" style={{aspectRatio : '1'}}></div>
            <div>
              <div className="flex flex-row flex-align-center flex-space-between">
                <div className="flex flex-row">
                  <p className="fw-semibold">Tanay Pratap</p>
                  <p className="grey-color pl-xs">
                    @tanaypratap <span className="pl-xs">•</span>
                    <span className="pl-xs">1 min</span>
                  </p>
                </div>
                <p className="">∙∙∙</p>
              </div>
              <p className="pr-s pt-xs">
                
              </p>
              <div className="flex flex-row nowrap flex-space-between pb-xs pt-m pr-s flex-align-center">
                <i className="bi bi-heart"></i>
                <i className="bi bi-chat-left"></i>
                <i className="bi bi-share"></i>
                <i className="bi bi-bookmark-fill"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="white-bg mr-xxl p-xs mt-s">
          <div className="flex flex-row nowrap p-xs">
            <div className="grey-bg br-full width-xl height-xl p-xs mr-xs" style={{aspectRatio : '1'}}></div>
            <div>
              <div className="flex flex-row flex-align-center flex-space-between">
                <div className="flex flex-row">
                  <p className="fw-semibold">Tanay Pratap</p>
                  <p className="grey-color pl-xs">
                    @tanaypratap <span className="pl-xs">•</span>
                    <span className="pl-xs">1 min</span>
                  </p>
                </div>
                <p className="">∙∙∙</p>
              </div>
              <p className="pr-s pt-xs">
                
              </p>
              <div className="flex flex-row nowrap flex-space-between pb-xs pt-m pr-s flex-align-center">
                <i className="bi bi-heart"></i>
                <i className="bi bi-chat-left"></i>
                <i className="bi bi-share"></i>
                <i className="bi bi-bookmark-fill"></i>
              </div>
            </div>
          </div>
        </div>
      </main>
      <aside className="mt-xl mr-xxl sidebar2">
        <div className="white-bg mb-m pl-s border flex flex-row flex-center nowrap">
          <i className="bi bi-search"></i>
          <input type="search" name="search-bar" className="search-bar border-none outline-transparent p-s width-16" placeholder="Search Posts, People, Anything"/>
        </div>
        <div className="white-bg">
          <div className="fw-bold flex flex-row flex-space-between flex-align-center border-bottom p-s">
            <div>Who to Follow?</div>
            <div className="primary-color">Show More</div>
          </div>
          <div className="flex p-s flex-space-between flex-align-center">
            <div className="grey-bg br-full width-xl height-xl"></div>
            <div className="flex flex-column">
              <a href="../profile/profile1.html">
                <div className="fw-bold">Tanay Pratap</div>
                <div className="fw-light grey-color">@tanaypratap</div>
              </a>
            </div>
            <div className="primary-color fw-bold">
              <a href="../profile/profile2.html">
                Follow <i className="bi bi-plus-lg"></i>
              </a>
            </div>
          </div>
          <div className="flex p-s flex-space-between flex-align-center">
            <div className="grey-bg br-full width-xl height-xl"></div>
            <div className="flex flex-column">
              <a href="../profile/profile1.html">
                <div className="fw-bold">Tanay Pratap</div>
                <div className="fw-light grey-color">@tanaypratap</div>
              </a>
            </div>
            <div className="primary-color fw-bold">
              <a href="../profile/profile2.html">
                Follow <i className="bi bi-plus-lg"></i>
              </a>
            </div>
          </div>
          <div className="flex p-s flex-space-between flex-align-center">
            <div className="grey-bg br-full width-xl height-xl"></div>
            <div className="flex flex-column">
              <a href="../profile/profile1.html">
                <div className="fw-bold">Tanay Pratap</div>
                <div className="fw-light grey-color">@tanaypratap</div>
              </a>
            </div>
            <div className="primary-color fw-bold">
              <a href="../profile/profile2.html">
                Follow <i className="bi bi-plus-lg"></i>
              </a>
            </div>
          </div>
          <div className="flex p-s flex-space-between flex-align-center">
            <div className="grey-bg br-full width-xl height-xl"></div>
            <div className="flex flex-column">
              <a href="../profile/profile1.html">
                <div className="fw-bold">Tanay Pratap</div>
                <div className="fw-light grey-color">@tanaypratap</div>
              </a>
            </div>
            <div className="primary-color fw-bold">
              <a href="../profile/profile2.html">
                Follow <i className="bi bi-plus-lg"></i>
              </a>
            </div>
          </div>
        </div>
      </aside>
        </div>
    )
}