// Implementing logout screen

const logout = document.getElementById('logout-btn')
const darkScreen = document.getElementById('dark-screen')
let isDark = true


const toggleLogout = () => {
    isDark = !isDark
    if (isDark) {
        // remove
        darkScreen.innerHTML = ``
        darkScreen.classList.remove('fade-effect', 'w-full', 'w-full', 'h-full', 'absolute', 'z-10', 'flex','justify-center', 'items-center')
        document.body.style.overflow = 'auto';
    } else {
        // add
        window.scrollTo(0, 0)
        document.body.style.overflow = 'hidden';
        darkScreen.innerHTML = `
        <div class="absolute z-10 bg-white rounded-3xl p-8">
        <div class=" flex items-center flex-col">
          <div class="ml-auto cursor-pointer" id="exit-logout">
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.1811 0.981702L6.50001 5.66283L1.81889 0.981702C1.7063 0.878674 1.5583 0.823057 1.40573 0.826438C1.25315 0.829818 1.10776 0.891936 0.999847 0.99985C0.891933 1.10776 0.829816 1.25315 0.826435 1.40573C0.823054 1.5583 0.878671 1.7063 0.981699 1.81889L5.66045 6.50002L0.980512 11.18C0.923337 11.2344 0.877631 11.2998 0.846082 11.3722C0.814533 11.4446 0.797776 11.5226 0.796798 11.6016C0.79582 11.6806 0.81064 11.7589 0.840386 11.8321C0.870133 11.9053 0.914205 11.9717 0.970014 12.0276C1.02582 12.0835 1.09224 12.1277 1.16536 12.1575C1.23849 12.1874 1.31684 12.2023 1.39581 12.2014C1.47479 12.2006 1.5528 12.1839 1.62525 12.1525C1.6977 12.121 1.76313 12.0754 1.8177 12.0183L6.50001 7.33839L11.1811 12.0195C11.2937 12.1225 11.4417 12.1782 11.5943 12.1748C11.7469 12.1714 11.8923 12.1093 12.0002 12.0014C12.1081 11.8935 12.1702 11.7481 12.1736 11.5955C12.177 11.4429 12.1214 11.2949 12.0183 11.1823L7.3372 6.5012L12.0183 1.81889C12.0755 1.7644 12.1212 1.69903 12.1528 1.62663C12.1843 1.55422 12.2011 1.47624 12.202 1.39726C12.203 1.31829 12.1882 1.23992 12.1585 1.16675C12.1287 1.09359 12.0846 1.02711 12.0288 0.971218C11.973 0.91533 11.9066 0.871163 11.8335 0.841313C11.7604 0.811463 11.682 0.796533 11.603 0.797399C11.524 0.798265 11.446 0.814911 11.3736 0.846357C11.3011 0.877804 11.2357 0.923417 11.1811 0.980515V0.981702Z" fill="black"/>
              </svg>
          </div>
            <div class="flex flex-col items-center py-10 px-20">
              <div class="bg-slate-100 p-8 rounded-full">
                <svg width="56" height="59" viewBox="0 0 56 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M29.8874 0C39.0079 0 47.4527 4.11525 53.0526 11.0448C53.2121 11.2412 53.3312 11.4683 53.4027 11.7125C53.4742 11.9567 53.4967 12.213 53.4688 12.4662C53.441 12.7194 53.3633 12.9643 53.2405 13.1864C53.1177 13.4085 52.9522 13.6031 52.7539 13.7588C52.3503 14.0807 51.8392 14.2299 51.3292 14.1748C50.8192 14.1197 50.3503 13.8647 50.0221 13.4638C47.5735 10.4466 44.4969 8.01996 41.0145 6.35893C37.5321 4.6979 33.7307 3.84392 29.8845 3.8586C15.631 3.8586 4.07451 15.34 4.07451 29.5C4.07451 43.66 15.631 55.1414 29.8845 55.1414C33.7861 55.1566 37.641 54.278 41.1633 52.5707C44.6855 50.8635 47.7847 48.3715 50.2309 45.2796C50.5536 44.8745 51.0187 44.6132 51.5275 44.551C52.0364 44.4888 52.549 44.6305 52.9569 44.9462C53.1569 45.0992 53.3247 45.2916 53.4502 45.5118C53.5757 45.7321 53.6564 45.9758 53.6875 46.2284C53.7186 46.481 53.6995 46.7374 53.6313 46.9824C53.5631 47.2273 53.4471 47.4558 53.2904 47.6543C47.6992 54.7638 39.1413 59 29.8874 59C13.4821 59 0.191406 45.7929 0.191406 29.5C0.191406 13.2071 13.485 0 29.8874 0Z" fill="#0F8BFD"/>
                  <path d="M55.4262 28.5737L47.5788 20.5881C47.223 20.2177 46.7372 20.0062 46.2282 20.0001C45.7192 19.994 45.2286 20.1939 44.8644 20.5556C44.5088 20.9261 44.3123 21.4252 44.3183 21.943C44.3243 22.4608 44.5322 22.955 44.8963 23.3168L49.4145 27.9129H19.6344C18.5614 27.9129 17.6914 28.7773 17.6914 29.8452C17.6944 30.1017 17.7471 30.355 17.8464 30.5908C17.9457 30.8265 18.0896 31.0401 18.2701 31.2192C18.4505 31.3984 18.6638 31.5396 18.8979 31.6349C19.132 31.7302 19.3823 31.7776 19.6344 31.7745H49.5334L45.0471 36.3382C44.8706 36.5217 44.7313 36.7388 44.6374 36.9771C44.5434 37.2154 44.4966 37.4702 44.4996 37.727C44.5025 37.9837 44.5552 38.2373 44.6547 38.4733C44.7541 38.7093 44.8983 38.9231 45.079 39.1023C45.4352 39.4723 45.9212 39.6832 46.4302 39.6888C46.9392 39.6943 47.4296 39.494 47.7934 39.1318L55.461 31.335C56.2005 30.5798 56.186 29.3437 55.4262 28.5737Z" fill="#FF551F"/>
                  </svg>
              </div>
              <div class="flex flex-col items-center gap-2 mt-8">
                <h3 class="font-bold text-xl">LOG OUT!</h3>
                <p class="text-gray-500 font-medium">Do you really want to log out?</p>
              </div>
                <!-- buttons -->
              <div class="mt-14 flex gap-6 w-full">
                <button id="cancel-logout" class="bg-gray-700 rounded-md py-2 text-white font-medium px-12">Cancel</button>
                <button class="bg-orange-600 rounded-md py-2 text-white font-medium px-12">Logout</button>
              </div>
            </div>
          <!-- logo -->
        
        </div>
        <!-- remove button -->
      
      </div>
        `
        darkScreen.classList.add('fade-effect', 'w-full', 'w-full', 'h-full', 'absolute', 'z-10', 'flex','justify-center', 'items-center')
        const exitLogout = document.getElementById('exit-logout')
        exitLogout.addEventListener('click', () => {
            console.log('cross')
            toggleLogout()
        })
        const cancelLogout = document.getElementById('cancel-logout')
        cancelLogout.addEventListener('click', () => {
            console.log('cross')
            toggleLogout()
        })

    }
}


logout.addEventListener('click', () => {
    toggleLogout()
})

