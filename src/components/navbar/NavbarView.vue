<template>
  <nav :class="`${ isScrolled ? 'bg-opacity-100 bg-white duration-200' : 'bg-white duration-200' }  sticky top-0 py-4 px-2 z-20 w-full shadow-md`">
    <transition name="slide">
            <ul v-if="isMenuOpen" class="md:hidden fixed top-0 left-0 mr-10 z-10 w-[250px] sm:w-[400px] h-[100vh]   bg-white shadow-lg pt-5">
              <li class="">
                <div @click="navigateTo('home')" class="cursor-pointer flex items-center">
                    <img :src="require('@/assets/logo.png')" alt="Pasanggiri Seni Sunda" class="w-[50px] mr-2">
                    <h1 class="text-main text-lg font-semibold">Karavista</h1>
                  </div>
              </li>
              <li class="py-2">
                <a @click="navigateTo('home')" :class="`${ isHomeSectionInView ? 'text-main' : 'text-gray-800' } cursor-pointer block px-4 py-2 font-medium hover:text-main uppercase`">Home</a>
              </li>
              <li class="mr-4">
                <a  @click="navigateTo('about')" :class="`${ isAboutSectionInView ? 'text-main' : 'text-gray-800' } cursor-pointer block px-4 py-2 font-medium hover:text-main uppercase`" >About Us</a>
              </li>
              <li class="py-2">
                <a @click="navigateTo('event')" :class="`${ isEventSectionInView ? 'text-main' : 'text-gray-800' } cursor-pointer block px-4 py-2 font-medium hover:text-main uppercase`">Event</a>
              </li>
              <li class="ml-2">
                <a href="/tiket" class="hidden md:flex items-center justify-between gap-2 bg-white text-main border border-main py-2 px-4 rounded-lg font-[500] hover:bg-main hover:text-white duration-200" @mouseover="isHovered = true" @mouseleave="isHovered = false"><IcPay :color="isHovered ? '#286895' : 'white'" className="w-[24px]"/> Beli Tiket</a>
              </li>
            </ul>
          </transition>
    <div class="max-w-[1200px] mx-auto">
      <div class="container mx-auto flex justify-between items-center">
        <div @click="navigateTo('home')" class="cursor-pointer flex items-center">
          <img :src="require('@/assets/logo.png')" alt="Pasanggiri Seni Sunda" class="w-[50px] mr-2">
          <h1 class="text-main text-lg font-semibold">Karavista</h1>
        </div>
        <div class="md:hidden">
          <button @click="toggleMenu" :class="`${ isScrolled ? 'text-gray-600 hover:text-gray-800 focus:text-gray-800' : 'text-gray-600 hover:text-gray-800 focus:text-gray-800' } block focus:outline-none`">
            <svg class="w-8 h-8 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 6h16M6 12h16M6 18h16"></path>
              <path v-if="isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <ul class="hidden md:flex">
          <li class="mr-4">
            <a @click="navigateTo('home')" :class="`${ isScrolled ? '' : 'text-gray-600' } ${  isHomeSectionInView ? 'text-main' : 'text-gray-800' } cursor-pointer font-medium hover:text-main uppercase`">Home</a>
          </li>
          <li class="mr-4">
            <a @click="navigateTo('about')" :class="`${ isScrolled ? '' : 'text-gray-600' } ${ isAboutSectionInView ? 'text-main' : 'text-gray-800' } cursor-pointer font-medium transition-colors duration-300 hover:text-main uppercase`">About Us</a>
          </li>
          <li class="mr-4">
            <a @click="navigateTo('event')" :class="`${ isScrolled ? '' : 'text-gray-600' } ${ isEventSectionInView ? 'text-main' : 'text-gray-800' } cursor-pointer font-medium hover:text-main uppercase`">Event</a>
          </li>
        </ul>
        <a href="/tiket" class="hidden md:flex items-center justify-between gap-2 bg-white text-main border border-main py-2 px-4 rounded-lg font-[500] hover:bg-main hover:text-white duration-200" @mouseover="isHovered = true" @mouseleave="isHovered = false"><IcPay :color="isHovered ? '#286895' : 'white'" className="w-[24px]"/> Beli Tiket</a>
      </div>
    </div>
  </nav>
</template>

<script>
import IcPay from '@/assets/icons/icon-pay';

export default {
  components:{
    IcPay,
  },
  data() {
    return {
      isMenuOpen: false,
      activeTab: '',
      isScrolled: false,
      isHomeSectionInView: false,
      isAboutSectionInView: false,
      isEventSectionInView: false,
      isCommitteeSectionInView: false,
      isHovered: false, 
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll); 
    
    const options = {
      rootMargin: '-50px 0px -50px 0px',
      threshold: 0.5
    };
  
    const observer = new IntersectionObserver(this.handleIntersection, options);
    const homeSection = document.getElementById('home');
    const aboutSection = document.getElementById('about');
    const eventSection = document.getElementById('event');
    const coordinatorSection = document.getElementById('coordinator');

    observer.observe(homeSection);
    observer.observe(aboutSection);
    observer.observe(eventSection);
    observer.observe(coordinatorSection);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll); 
  },
  methods: {
    handleIntersection(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          switch(entry.target.id) {
            case 'home':
              this.isHomeSectionInView = true;
              break;
            case 'about':
              this.isAboutSectionInView = true;
              break;
            case 'event':
              this.isEventSectionInView = true;
              break;
            case 'coordinator':
              this.isContactSectionInView = true;
              break;
            default:
              break;
          }
        } else {
          switch(entry.target.id) {
            case 'home':
              this.isHomeSectionInView = false;
              break;
            case 'about':
              this.isAboutSectionInView = false;
              break;
            case 'event':
              this.isEventSectionInView = false;
              break;
            case 'coordinator':
              this.isCoordinatorSectionInView = false;
              break;
            default:
              break;
          }
        }
      });
    },
    handleScroll() {
      this.isScrolled = window.scrollY > 100;
    },
    navigateTo(tab) {
      this.activeTab = tab;
      const section = document.getElementById(tab);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  }
};
</script>

<style scoped>
.slide-enter-active, .slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter, .slide-leave-to {
  transform: translateX(-100%);
}
</style>
