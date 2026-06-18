<template>
  <div class="min-h-screen bg-gray-50 dark:bg-[#03050a] text-gray-900 dark:text-white transition-colors duration-1000 overflow-hidden font-sans selection:bg-brand-accent1/30 selection:text-brand-accent1">
    
    <section class="relative min-h-[95vh] flex items-center justify-center py-32 overflow-hidden bg-[#03050a]">
      <div class="absolute inset-0 z-0 pointer-events-none">
        <NuxtImg 
          src="/images/Banner.jpg" 
          class="w-full h-full object-cover opacity-40 mix-blend-overlay mask-image-b" 
          :alt="$t('home.hero.title1')"
          format="webp"
          fetchpriority="high"
          preload
        />
      </div>

      <div class="absolute inset-0 pointer-events-none z-0">
        <div class="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-blue-600/10 rounded-full blur-[150px] mix-blend-screen animate-pulse-slow"></div>
        <div class="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-brand-accent1/10 rounded-full blur-[120px] mix-blend-screen"></div>
        <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-30 mask-image-b"></div>
      </div>

      <div class="container mx-auto px-4 relative z-10 text-center flex flex-col items-center">
        <div class="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/[0.03] border border-white/10 text-cyan-300 text-sm font-bold mb-10 backdrop-blur-2xl shadow-[0_0_30px_rgba(56,189,248,0.1)] group cursor-pointer hover:bg-white/[0.08] transition-colors">
          <span class="relative flex h-2.5 w-2.5">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-accent1"></span>
          </span>
          {{ $t('home.hero.badge') }}
        </div>
        
        <h1 class="text-6xl md:text-8xl lg:text-[5.5rem] font-black text-white mb-8 tracking-tighter leading-tight md:leading-[1.2]">
          {{ $t('home.hero.title1') }} <br />
          <span class="relative inline-block mt-4 px-8 pt-2 pb-6 bg-[#000000]/40 backdrop-blur-xl border border-white/10 rounded-[2.5rem] shadow-inner">
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 drop-shadow-[0_0_40px_rgba(56,189,248,0.3)]">
              {{ $t('home.hero.titleHighlight') }}
            </span>
          </span>
        </h1>
        
        <p class="text-xl md:text-2xl text-gray-300 mb-14 max-w-3xl mx-auto font-light leading-relaxed backdrop-blur-sm bg-white/[0.02] p-4 rounded-3xl border border-white/5" v-html="$t('home.hero.desc')"></p>
        
        <NuxtLink :to="localePath('/courses')" class="relative inline-flex group">
          <div class="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-2xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
          <button class="relative inline-flex items-center justify-center gap-3 px-10 py-5 text-lg font-bold text-white transition-all duration-200 bg-[#0a0a0a] rounded-2xl focus:outline-none border border-white/10">
            {{ $t('home.hero.btn') }}
            <svg class="w-6 h-6 rtl:rotate-180 transform rtl:group-hover:-translate-x-1 ltr:group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </button>
        </NuxtLink>
      </div>
    </section>

    <section class="relative z-20 -mt-20 container mx-auto px-4 md:px-8">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        <NuxtLink v-for="(item, index) in translatedBenefits" :key="index" :to="localePath(item.link)" 
                  class="group relative p-8 bg-white/80 dark:bg-white/[0.02] backdrop-blur-3xl rounded-[2rem] border border-gray-200 dark:border-white/5 text-center hover:-translate-y-3 hover:border-brand-accent1/50 transition-all duration-500 overflow-hidden shadow-xl dark:shadow-none">
          <div class="absolute inset-0 bg-gradient-to-b from-brand-accent1/10 dark:from-brand-accent1/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div class="relative z-10 text-4xl mb-5 transform group-hover:scale-125 group-hover:rotate-6 transition-transform duration-500 drop-shadow-lg dark:drop-shadow-2xl">{{ item.icon }}</div>
          <h2 class="relative z-10 font-bold text-gray-800 dark:text-gray-300 group-hover:text-brand-accent1 dark:group-hover:text-white text-base transition-colors">{{ item.title }}</h2>
        </NuxtLink>
      </div>
    </section>

    <section class="py-32 container mx-auto px-4 md:px-8">
      <div class="bg-gradient-to-r from-blue-100 via-white to-brand-accent1/10 dark:from-blue-900/40 dark:via-blue-800/40 dark:to-brand-accent1/20 backdrop-blur-xl rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between border border-blue-200 dark:border-white/10 shadow-[0_20px_50px_-15px_rgba(37,99,235,0.2)] dark:shadow-[0_20px_80px_-15px_rgba(37,99,235,0.3)] relative overflow-hidden group">
        <div class="absolute -left-10 top-1/2 -translate-y-1/2 text-[250px] opacity-5 dark:opacity-10 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-700 pointer-events-none filter blur-[2px]">🧠</div>
        
        <div class="relative z-10 mb-10 md:mb-0 text-center rtl:md:text-right ltr:md:text-left max-w-2xl">
          <div class="inline-block bg-blue-500/10 dark:bg-white/10 backdrop-blur-md text-blue-600 dark:text-cyan-300 text-xs font-bold px-4 py-1.5 rounded-full mb-6 border border-blue-200 dark:border-white/20 tracking-wider">
            {{ $t('home.talent.badge') }}
          </div>
          <h2 class="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 leading-tight">{{ $t('home.talent.title') }}</h2>
          <p class="text-gray-600 dark:text-blue-200 text-lg font-light leading-relaxed">{{ $t('home.talent.desc') }}</p>
        </div>
        
        <NuxtLink :to="localePath('/talent')" class="relative z-10 bg-brand-accent1 dark:bg-white text-white dark:text-blue-900 px-10 py-5 rounded-2xl font-black shadow-xl hover:shadow-[0_0_30px_rgba(56,189,248,0.5)] dark:hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] hover:scale-105 transition-all duration-500 flex items-center gap-3 whitespace-nowrap text-xl">
          {{ $t('home.talent.btn') }}
          <span class="animate-pulse text-2xl">✨</span>
        </NuxtLink>
      </div>
    </section>

    <section class="py-16 container mx-auto px-4 md:px-8">
      <div class="text-center mb-20">
        <h2 class="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
          {{ $t('home.paths.title1') }} <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-cyan-400 dark:to-blue-500">{{ $t('home.paths.titleHighlight') }}</span>
        </h2>
        <p class="text-gray-500 dark:text-gray-400 font-light text-xl">{{ $t('home.paths.desc') }}</p>
      </div>
      
      <div class="grid md:grid-cols-3 gap-8">
        <NuxtLink v-for="(path, index) in translatedPaths" :key="index" :to="localePath('/roadmap/' + path.slug)" 
                  :class="['bg-white dark:bg-[#080b12] p-8 rounded-[2.5rem] border border-gray-200 dark:border-white/5 transition-all duration-500 hover:-translate-y-2 group relative overflow-hidden shadow-xl dark:shadow-none', path.color.borderHover]">
          
          <div :class="['absolute top-0 rtl:right-0 ltr:left-0 w-40 h-40 rtl:rounded-bl-full ltr:rounded-br-full blur-2xl transition-colors pointer-events-none', path.color.glow]"></div>
          
          <div :class="['relative w-16 h-16 bg-gray-50 dark:bg-white/[0.03] border border-gray-100 dark:border-white/10 rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-all duration-500', path.color.iconBg]">
            {{ path.icon }}
          </div>
          
          <h3 :class="['relative text-2xl font-bold mb-4 text-gray-900 dark:text-white transition-colors', path.color.titleHover]">{{ path.name }}</h3>
          <p class="relative text-gray-600 dark:text-gray-400 mb-10 font-light leading-relaxed">{{ path.desc }}</p>
          
          <div :class="['relative inline-flex items-center gap-2 font-bold text-sm', path.color.linkText]">
            {{ $t('home.paths.btn') }} 
            <svg class="w-5 h-5 rtl:rotate-180 transition-transform rtl:group-hover:-translate-x-2 ltr:group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </div>
        </NuxtLink>
      </div>
    </section>

    <section class="py-32 relative overflow-hidden border-y border-gray-200 dark:border-white/5 bg-gray-100/50 dark:bg-white/[0.01]">
      <div class="absolute rtl:-right-40 ltr:-left-40 top-20 w-96 h-96 bg-brand-accent1/10 dark:bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div class="container mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-16 md:gap-20 items-center relative z-10">
        <div class="order-2 lg:order-1">
          <div class="inline-block bg-white dark:bg-white/[0.05] border border-gray-200 dark:border-white/10 text-brand-accent1 dark:text-cyan-400 font-bold px-4 py-2 rounded-full mb-8 shadow-sm dark:shadow-none">{{ $t('home.demo.badge') }}</div>
          <h2 class="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 md:mb-8 leading-tight">
            {{ $t('home.demo.title1') }} <span class="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-800 dark:from-gray-400 dark:to-gray-100">{{ $t('home.demo.titleHighlight') }}</span> {{ $t('home.demo.title2') }}
          </h2>
          <p class="text-gray-600 dark:text-gray-400 text-base md:text-lg font-light leading-loose mb-8 md:mb-10 text-justify">
            {{ $t('home.demo.desc') }}
          </p>
          <NuxtLink :to="localePath('/roadmap/coding')" class="inline-flex items-center gap-2 text-brand-accent1 dark:text-cyan-400 font-bold text-base md:text-lg hover:text-blue-600 dark:hover:text-white transition-colors group">
            {{ $t('home.demo.link') }} 
            <span class="rtl:group-hover:-translate-x-2 ltr:group-hover:translate-x-2 transition-transform rtl:rotate-0 ltr:rotate-180">←</span>
          </NuxtLink>
        </div>
        
        <div class="order-1 lg:order-2 relative group w-full max-w-[100vw] overflow-hidden" dir="ltr">
          <div class="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-[2rem] blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div class="relative bg-[#09090b] rounded-[1.5rem] md:rounded-[2rem] shadow-2xl border border-white/10 w-full overflow-hidden">
            <div class="bg-white/[0.05] border-b border-white/5 px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
              <div class="flex gap-1.5 md:gap-2">
                <div class="w-3 h-3 md:w-3.5 md:h-3.5 rounded-full bg-[#ff5f56]"></div>
                <div class="w-3 h-3 md:w-3.5 md:h-3.5 rounded-full bg-[#ffbd2e]"></div>
                <div class="w-3 h-3 md:w-3.5 md:h-3.5 rounded-full bg-[#27c93f]"></div>
              </div>
              <span class="text-gray-400 text-[10px] md:text-xs font-mono tracking-widest uppercase truncate ml-2">ai_core.py — Danaverse AI</span>
              <div class="w-10 hidden md:block"></div> 
            </div>
            
            <div class="p-4 md:p-8 font-mono text-xs md:text-base text-gray-300 min-h-[200px] md:min-h-[300px] leading-relaxed overflow-x-auto w-full text-left">
              <pre class="min-w-max"><code class="text-pink-500">def</code> <span class="text-blue-400">build_future</span>():
    skills = [<span class="text-green-400">'Python'</span>, <span class="text-green-400">'AI'</span>, <span class="text-green-400">'Machine Learning'</span>]
    student = Student(skills)
    
    <code class="text-pink-500">if</code> student.is_ready():
        <code class="text-pink-500">return</code> <span class="text-green-400">"Hired as AI Engineer!"</span>
        
<span class="text-gray-500 italic"># Console Output:</span>
<span class="text-yellow-300" v-html="typedCode"></span><span class="animate-pulse bg-cyan-400 text-cyan-400 w-2 h-4 md:h-5 inline-block align-middle ml-1">_</span></pre>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-32 container mx-auto px-4 md:px-8 border-b border-gray-200 dark:border-white/5">
      <div class="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
        <div>
          <div class="inline-block bg-purple-100 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 font-bold px-4 py-2 rounded-full mb-4 border border-purple-200 dark:border-purple-500/20">{{ $t('home.projects.badge') }}</div>
          <h2 class="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-2 tracking-tight">
            {{ $t('home.projects.title1') }} <span class="text-purple-600 dark:text-purple-400">{{ $t('home.projects.titleHighlight') }}</span>
          </h2>
          <p class="text-gray-600 dark:text-gray-400 font-light text-lg mt-4">{{ $t('home.projects.desc') }}</p>
        </div>
        <NuxtLink :to="localePath('/projects')" class="px-8 py-4 border border-gray-300 dark:border-white/10 rounded-2xl font-bold text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-white/5 transition-colors">{{ $t('home.projects.btn') }}</NuxtLink>
      </div>

      <div class="grid md:grid-cols-2 gap-8">
        <div class="group relative rounded-[2rem] overflow-hidden shadow-2xl dark:shadow-none border border-gray-200 dark:border-white/5 bg-white dark:bg-[#0a0c10] cursor-pointer">
          <div class="aspect-[4/3] w-full overflow-hidden bg-gray-100 dark:bg-gray-900 relative">
            <div class="absolute inset-0 bg-brand-accent1/20 dark:bg-transparent mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity"></div>
            <NuxtImg src="/images/Project-1.jpg" :alt="$t('home.projects.p1.title')" format="webp" loading="lazy" class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
          </div>
          <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 md:p-10 z-20">
            <span class="inline-block bg-brand-accent1 text-white text-xs font-bold px-3 py-1.5 rounded-full mb-4 w-max border border-white/20">{{ $t('home.projects.p1.badge') }}</span>
            <h3 class="text-white text-3xl font-black mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{{ $t('home.projects.p1.title') }}</h3>
            <p class="text-gray-300 text-base translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">{{ $t('home.projects.p1.desc') }}</p>
          </div>
        </div>

        <div class="group relative rounded-[2rem] overflow-hidden shadow-2xl dark:shadow-none border border-gray-200 dark:border-white/5 bg-white dark:bg-[#0a0c10] cursor-pointer">
          <div class="aspect-[4/3] w-full overflow-hidden bg-gray-100 dark:bg-gray-900 relative">
            <div class="absolute inset-0 bg-purple-500/20 dark:bg-transparent mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity"></div>
            <NuxtImg src="/images/Project-2.jpg" :alt="$t('home.projects.p2.title')" format="webp" loading="lazy" class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
          </div>
          <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 md:p-10 z-20">
            <span class="inline-block bg-purple-500 text-white text-xs font-bold px-3 py-1.5 rounded-full mb-4 w-max border border-white/20">{{ $t('home.projects.p2.badge') }}</span>
            <h3 class="text-white text-3xl font-black mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{{ $t('home.projects.p2.title') }}</h3>
            <p class="text-gray-300 text-base translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">{{ $t('home.projects.p2.desc') }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-32 container mx-auto px-4 md:px-8 border-b border-gray-200 dark:border-white/5">
      <div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div>
          <div class="inline-block bg-brand-accent1/10 text-brand-accent1 dark:text-cyan-400 font-bold px-4 py-2 rounded-full mb-4 border border-brand-accent1/20">{{ $t('home.instructors.badge') }}</div>
          <h2 class="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight">
            {{ $t('home.instructors.title1') }} <span class="text-brand-accent1 dark:text-cyan-400">{{ $t('home.instructors.titleHighlight') }}</span> {{ $t('home.instructors.title2') }}
          </h2>
        </div>
        <NuxtLink :to="localePath('/instructors')" class="group flex items-center gap-2 font-bold text-gray-600 dark:text-gray-400 hover:text-brand-accent1 dark:hover:text-white transition-colors text-sm md:text-base">
          {{ $t('home.instructors.btn') }}
          <svg class="w-5 h-5 rtl:rotate-180 transform rtl:group-hover:-translate-x-2 ltr:group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </NuxtLink>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div v-for="(instructor, index) in translatedInstructors" :key="index" 
             class="group relative bg-white dark:bg-[#0a0c10] rounded-[2rem] p-6 border border-gray-200 dark:border-white/5 hover:border-brand-accent1/50 dark:hover:border-white/20 transition-all duration-500 hover:-translate-y-2 overflow-hidden shadow-xl dark:shadow-none">
          <div class="absolute inset-0 bg-gradient-to-t from-brand-accent1/10 dark:from-cyan-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
          
          <div class="relative z-10 w-full aspect-square rounded-[1.5rem] overflow-hidden mb-6 bg-gray-100 dark:bg-gray-900">
            <img :src="instructor.image_url" :alt="instructor.name" class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 filter grayscale group-hover:grayscale-0" />
          </div>
          
          <div class="relative z-10">
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-1">{{ instructor.name }}</h3>
            <p class="text-brand-accent1 dark:text-cyan-400 font-light text-sm mb-5">{{ instructor.title }}</p>
            <div class="flex flex-wrap gap-2">
              <span v-for="skill in instructor.skills" :key="skill" class="text-xs font-bold px-3 py-1.5 bg-gray-50 dark:bg-white/5 text-gray-600 dark:text-gray-300 rounded-lg border border-gray-200 dark:border-white/5">
                {{ skill }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-32 container mx-auto px-4 md:px-8 text-center">
      <div class="inline-block bg-purple-100 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/20 text-purple-600 dark:text-purple-400 font-bold px-4 py-2 rounded-full mb-6">{{ $t('home.compare.badge') }}</div>
      <h2 class="text-4xl md:text-5xl font-black mb-6 text-gray-900 dark:text-white">{{ $t('home.compare.title') }}</h2>
      <p class="text-gray-600 dark:text-gray-400 mb-16 max-w-2xl mx-auto text-lg font-light">{{ $t('home.compare.desc') }}</p>
      
      <div class="relative w-full max-w-5xl mx-auto aspect-[16/9] md:aspect-[21/9] rounded-[2.5rem] overflow-hidden shadow-2xl dark:shadow-[0_0_50px_rgba(0,0,0,0.5)] border-4 border-white dark:border-white/10 select-none" dir="ltr" style="-webkit-user-drag: none;">
        <NuxtImg src="/images/Design-Before.jpg" class="absolute inset-0 w-full h-full object-cover pointer-events-none" draggable="false" style="-webkit-user-drag: none;" alt="طراحی خام پروژه" format="webp" loading="lazy" />
        <NuxtImg src="/images/Design-After.jpg" class="absolute inset-0 w-full h-full object-cover pointer-events-none" draggable="false" style="-webkit-user-drag: none;" :style="{ clipPath: `inset(0 ${100 - sliderValue}% 0 0)` }" alt="طراحی نهایی پروژه داناورس" format="webp" loading="lazy" />
        
        <input type="range" min="0" max="100" step="0.1" v-model.number="sliderValue" class="absolute inset-0 w-full h-full cursor-ew-resize z-50 custom-slider opacity-0" style="touch-action: none;" />
        
        <div class="absolute top-0 bottom-0 w-1 bg-brand-accent1 dark:bg-cyan-400 pointer-events-none shadow-[0_0_15px_rgba(56,189,248,0.8)] dark:shadow-[0_0_15px_rgba(34,211,238,1)] z-40" :style="{ left: sliderValue + '%' }">
          <div class="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 md:w-14 md:h-14 bg-white dark:bg-[#0a0c10] rounded-full flex items-center justify-center shadow-2xl text-gray-900 dark:text-white font-black border-4 border-brand-accent1 dark:border-cyan-400">
            <svg class="w-5 h-5 md:w-6 md:h-6 text-brand-accent1 dark:text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M8 9l4-4 4 4m0 6l-4 4-4-4"></path></svg>
          </div>
        </div>
        
        <div class="absolute bottom-4 md:bottom-6 left-4 md:left-6 bg-black/60 backdrop-blur-md text-white px-3 md:px-4 py-1.5 md:py-2 rounded-xl text-xs md:text-sm font-bold z-30 border border-white/10 pointer-events-none">{{ $t('home.compare.after') }}</div>
        <div class="absolute bottom-4 md:bottom-6 right-4 md:right-6 bg-black/60 backdrop-blur-md text-white px-3 md:px-4 py-1.5 md:py-2 rounded-xl text-xs md:text-sm font-bold z-30 border border-white/10 pointer-events-none">{{ $t('home.compare.before') }}</div>
      </div>
    </section>

    <section class="py-32 bg-gray-100/50 dark:bg-white/[0.01] border-y border-gray-200 dark:border-white/5 relative overflow-hidden">
      <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMSkiLz48L3N2Zz4=')] opacity-50 mask-image-b pointer-events-none dark:invert-0 invert"></div>
      <div class="container mx-auto px-4 md:px-8 relative z-10">
        <div class="text-center mb-20">
          <h2 class="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
            {{ $t('home.testimonials.title1') }} <span class="text-brand-accent1">{{ $t('home.testimonials.titleHighlight') }}</span> {{ $t('home.testimonials.title2') }}
          </h2>
          <p class="text-gray-600 dark:text-gray-400 font-light text-xl">{{ $t('home.testimonials.desc') }}</p>
        </div>

        <div class="grid md:grid-cols-3 gap-6">
          <div v-for="(review, index) in translatedTestimonials" :key="index" 
               class="bg-white dark:bg-[#050505] p-10 rounded-[2rem] border border-gray-200 dark:border-white/5 hover:border-brand-accent1/50 dark:hover:border-brand-accent1/30 transition-colors shadow-lg dark:shadow-none relative group">
            <div class="text-6xl text-gray-100 dark:text-white/[0.03] absolute top-4 rtl:right-6 ltr:left-6 font-serif group-hover:text-brand-accent1/10 transition-colors">"</div>
            <div class="flex items-center gap-1 mb-6 text-yellow-400 dark:text-yellow-500">
              <svg v-for="i in 5" :key="i" class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            </div>
            <p class="text-gray-700 dark:text-gray-300 font-light leading-relaxed mb-10 relative z-10 text-justify">«{{ review.text }}»</p>
            <div class="flex items-center gap-4 border-t border-gray-100 dark:border-white/5 pt-6 mt-auto">
              <div class="w-12 h-12 rounded-full bg-gradient-to-tr from-brand-accent1 to-purple-500 flex items-center justify-center font-bold text-white text-lg shadow-md">
                {{ review.name.charAt(0) }}
              </div>
              <div>
                <h4 class="font-bold text-gray-900 dark:text-white">{{ review.name }}</h4>
                <p class="text-xs text-brand-accent1 font-medium">{{ review.course }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-32 container mx-auto px-4 max-w-4xl">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-black mb-4 text-gray-900 dark:text-white">
          {{ $t('home.faq.title1') }} <span class="text-brand-accent1">{{ $t('home.faq.titleHighlight') }}</span>
        </h2>
        <p class="text-gray-600 dark:text-gray-400 font-light">{{ $t('home.faq.desc') }}</p>
      </div>
      
      <div class="space-y-4">
        <div v-for="(faq, index) in translatedFaqs" :key="index" 
             class="bg-white dark:bg-[#0a0c10] rounded-[1.5rem] border border-gray-200 dark:border-white/5 overflow-hidden transition-all duration-300 shadow-sm dark:shadow-none"
             :class="{'border-brand-accent1/50 dark:border-cyan-500/50 bg-blue-50/50 dark:bg-white/[0.02]': activeFaq === index}">
          
          <button @click="toggleFaq(index)" class="w-full rtl:text-right ltr:text-left p-6 md:p-8 flex justify-between items-center focus:outline-none group">
            <h3 class="font-bold text-lg text-gray-800 dark:text-gray-200 group-hover:text-brand-accent1 dark:group-hover:text-white transition-colors" :class="{'text-brand-accent1 dark:text-cyan-400': activeFaq === index}">
              {{ faq.q }}
            </h3>
            <div class="w-10 h-10 rounded-full bg-gray-50 dark:bg-white/5 flex items-center justify-center flex-shrink-0 transition-all duration-300 border border-gray-200 dark:border-white/5"
                 :class="{'rotate-45 bg-brand-accent1 dark:bg-cyan-500 text-white border-transparent shadow-[0_0_15px_rgba(56,189,248,0.4)] dark:shadow-[0_0_15px_rgba(34,211,238,0.4)]': activeFaq === index, 'text-gray-400': activeFaq !== index}">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
            </div>
          </button>
          
          <div v-show="activeFaq === index" class="px-6 md:px-8 pb-8 text-gray-600 dark:text-gray-400 font-light leading-loose border-t border-gray-100 dark:border-white/5 pt-6 rtl:text-right ltr:text-left">
            <p>{{ faq.a }}</p>
          </div>
        </div>
      </div>
    </section>
    
    <section class="py-24 relative z-20 container mx-auto px-4 md:px-8">
      <div class="relative rounded-[2.5rem] md:rounded-[3rem] p-1 overflow-hidden group">
        <div class="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-600 to-purple-600 opacity-30 group-hover:opacity-100 transition-opacity duration-700 animate-spin-slow" style="animation-duration: 8s;"></div>
        
        <div class="relative bg-white/90 dark:bg-[#030303]/90 backdrop-blur-3xl rounded-[2.4rem] md:rounded-[2.9rem] p-10 md:p-20 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10 border border-white/20 dark:border-white/5">
          <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-gradient-to-tr from-brand-accent1/10 to-purple-500/10 blur-[100px] pointer-events-none transition-transform duration-1000 group-hover:scale-110"></div>
          
          <div class="relative z-10 text-center rtl:md:text-right ltr:md:text-left md:max-w-2xl">
            <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-white/5 border border-blue-100 dark:border-white/10 text-blue-600 dark:text-cyan-400 text-xs font-bold mb-6">
              <span class="relative flex h-2 w-2">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-brand-accent1"></span>
              </span>
              {{ $t('home.cta.badge') }}
            </div>
            <h2 class="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-4 tracking-tight leading-tight">
              {{ $t('home.cta.title1') }} <br class="hidden md:block" />
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-500 dark:from-cyan-400 dark:to-blue-500">{{ $t('home.cta.titleHighlight') }}</span> {{ $t('home.cta.title2') }}
            </h2>
            <p class="text-gray-600 dark:text-gray-400 text-lg font-light">{{ $t('home.cta.desc') }}</p>
          </div>
          
          <div class="relative z-10 flex flex-col w-full md:w-auto gap-4">
            <NuxtLink :to="localePath('/courses')" class="relative overflow-hidden group/btn bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-10 py-5 rounded-2xl font-black text-lg text-center transition-all duration-300 hover:scale-105 shadow-2xl dark:shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:shadow-brand-accent1/30">
              <span class="relative z-10 flex items-center justify-center gap-2">
                {{ $t('home.cta.btn') }}
                <svg class="w-5 h-5 rtl:group-hover/btn:-translate-x-2 ltr:group-hover/btn:translate-x-2 transition-transform rtl:rotate-180 ltr:rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </span>
              <div class="absolute inset-0 bg-gradient-to-r from-brand-accent1 to-blue-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <footer class="relative bg-gray-50 dark:bg-[#020202] pt-32 pb-10 overflow-hidden border-t border-gray-200 dark:border-white/5 z-10 mt-10">
      
      <div class="absolute top-10 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none overflow-hidden flex justify-center z-0">
        <span class="text-[15vw] font-black tracking-tighter text-gray-200/50 dark:text-white/[0.02] mix-blend-overlay">DANAVERSE</span>
      </div>

      <div class="container mx-auto px-4 md:px-8 relative z-10">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 mb-20">
          
          <div class="lg:col-span-5 bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/5 rounded-3xl p-8 md:p-10 backdrop-blur-xl hover:border-brand-accent1/30 transition-colors">
            <div class="flex items-center gap-3 mb-6">
              <NuxtImg src="/images/logo-light.png" alt="لوگو آکادمی داناورس" class="w-12 h-12 object-contain drop-shadow-lg" loading="lazy" />
              <span class="text-3xl font-black text-gray-900 dark:text-white tracking-tight">DANA<span class="text-brand-accent1 dark:text-cyan-400">VERSE</span></span>
            </div>
            <p class="text-gray-600 dark:text-gray-400 font-light leading-loose text-justify mb-8 text-sm md:text-base">
              {{ $t('home.footer.desc') }}
            </p>
            <div class="flex items-center gap-3">
              <a href="#" class="group relative w-12 h-12 rounded-2xl bg-gray-100 dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/5 flex items-center justify-center overflow-hidden hover:border-blue-500 transition-colors">
                <div class="absolute inset-0 bg-blue-500/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <svg class="w-5 h-5 text-gray-500 group-hover:text-blue-500 relative z-10 transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
              </a>
              <a href="#" class="group relative w-12 h-12 rounded-2xl bg-gray-100 dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/5 flex items-center justify-center overflow-hidden hover:border-brand-accent1 transition-colors">
                <div class="absolute inset-0 bg-brand-accent1/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <svg class="w-5 h-5 text-gray-500 group-hover:text-brand-accent1 relative z-10 transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path></svg>
              </a>
              <a href="#" class="group relative w-12 h-12 rounded-2xl bg-gray-100 dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/5 flex items-center justify-center overflow-hidden hover:border-blue-400 transition-colors">
                <div class="absolute inset-0 bg-blue-400/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <svg class="w-5 h-5 text-gray-500 group-hover:text-blue-400 relative z-10 transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.882-.666 3.463-1.509 5.772-2.506 6.928-2.985 3.295-1.374 3.979-1.611 4.425-1.618z"></path></svg>
              </a>
            </div>
          </div>

          <div class="lg:col-span-4 flex flex-col justify-between">
            <div class="bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/5 rounded-3xl p-8 backdrop-blur-xl h-full">
              <h4 class="text-sm uppercase tracking-widest text-gray-400 font-bold mb-6">{{ $t('home.footer.pathsTitle') }}</h4>
              <ul class="space-y-4">
                <li><NuxtLink :to="localePath('/courses')" class="group flex items-center text-gray-700 dark:text-gray-300 hover:text-brand-accent1 dark:hover:text-cyan-400 font-medium transition-colors"><span class="text-gray-300 dark:text-gray-600 font-mono rtl:ml-3 ltr:mr-3 group-hover:text-brand-accent1 transition-colors">>></span> {{ $t('nav.courses') }}</NuxtLink></li>
                <li><NuxtLink :to="localePath('/talent')" class="group flex items-center text-gray-700 dark:text-gray-300 hover:text-brand-accent1 dark:hover:text-cyan-400 font-medium transition-colors"><span class="text-gray-300 dark:text-gray-600 font-mono rtl:ml-3 ltr:mr-3 group-hover:text-brand-accent1 transition-colors">>></span> {{ $t('nav.talentTest') }}</NuxtLink></li>
                <li><NuxtLink :to="localePath('/projects')" class="group flex items-center text-gray-700 dark:text-gray-300 hover:text-brand-accent1 dark:hover:text-cyan-400 font-medium transition-colors"><span class="text-gray-300 dark:text-gray-600 font-mono rtl:ml-3 ltr:mr-3 group-hover:text-brand-accent1 transition-colors">>></span> {{ $t('home.projects.btn') }}</NuxtLink></li>
                <li><NuxtLink :to="localePath('/blog')" class="group flex items-center text-gray-700 dark:text-gray-300 hover:text-brand-accent1 dark:hover:text-cyan-400 font-medium transition-colors"><span class="text-gray-300 dark:text-gray-600 font-mono rtl:ml-3 ltr:mr-3 group-hover:text-brand-accent1 transition-colors">>></span> {{ $t('nav.learning') }}</NuxtLink></li>
              </ul>
            </div>
          </div>

          <div class="lg:col-span-3 flex flex-col gap-6">
            <div class="bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/5 rounded-3xl p-6 backdrop-blur-xl hover:border-brand-accent1/30 transition-colors">
              <h4 class="text-sm uppercase tracking-widest text-gray-400 font-bold mb-4">{{ $t('home.footer.contactTitle') }}</h4>
              <div class="space-y-4">
                <a href="mailto:info@danaverse.com" class="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-brand-accent1 transition-colors font-mono text-sm">
                  <div class="w-8 h-8 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center flex-shrink-0"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg></div>
                  info@danaverse.com
                </a>
                <a href="tel:02188888888" class="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-brand-accent1 transition-colors font-mono text-sm dir-ltr">
                  <div class="w-8 h-8 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center flex-shrink-0"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg></div>
                  +98 930 7479759
                </a>
              </div>
            </div>
            
            <div class="flex gap-4 h-full">
              <a referrerpolicy="origin" target="_blank" href="https://trustseal.enamad.ir/?id=742622&Code=bl0pQa5kqVBm6jQbDW6ltEs1IQ62pRpj" rel="noopener noreferrer" class="flex-1 bg-white/50 dark:bg-white/[0.02] border border-gray-200 dark:border-white/5 rounded-3xl flex items-center justify-center p-3 filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 hover:border-brand-accent1/50 transition-all duration-300 cursor-pointer backdrop-blur-md group">
                <img referrerpolicy="origin" src="https://trustseal.enamad.ir/logo.aspx?id=742622&Code=bl0pQa5kqVBm6jQbDW6ltEs1IQ62pRpj" alt="نماد اعتماد الکترونیکی داناورس" class="w-full h-auto max-h-16 object-contain group-hover:scale-105 transition-transform" code="bl0pQa5kqVBm6jQbDW6ltEs1IQ62pRpj" />
              </a>

              <a href="#" target="_blank" rel="noopener noreferrer" class="flex-1 bg-white/50 dark:bg-white/[0.02] border border-gray-200 dark:border-white/5 rounded-3xl flex items-center justify-center p-3 filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 hover:border-brand-accent1/50 transition-all duration-300 cursor-pointer backdrop-blur-md group">
                <NuxtImg src="/images/samandehi.png" alt="نشان ملی ثبت رسانه‌های دیجیتال" class="w-full h-auto max-h-16 object-contain group-hover:scale-105 transition-transform" loading="lazy" />
              </a>
            </div>
          </div>
          
        </div>

        <div class="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-gray-200 dark:border-white/5">
          <p class="text-gray-500 dark:text-gray-500 text-sm font-medium">
            {{ $t('home.footer.copyright') }}
          </p>
          <div class="flex items-center gap-6 text-sm text-gray-500 font-medium">
            <NuxtLink :to="localePath('/privacy')" class="hover:text-brand-accent1 dark:hover:text-cyan-400 transition-colors">{{ $t('home.footer.privacy') }}</NuxtLink>
            <div class="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-700"></div>
            <NuxtLink :to="localePath('/terms')" class="hover:text-brand-accent1 dark:hover:text-cyan-400 transition-colors">{{ $t('home.footer.terms') }}</NuxtLink>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'

// 👈 معرفی ابزارهای زبان
const { t } = useI18n()
const localePath = useLocalePath()

// استفاده از computed برای آرایه‌ها تا وقتی زبان عوض شد، محتوا درجا آپدیت شود!
const translatedBenefits = computed(() => [
  { icon: '🚀', title: t('home.benefits.b1'), link: '/why-us#projects' },
  { icon: '👨‍🏫', title: t('home.benefits.b2'), link: '/why-us#mentoring' },
  { icon: '💼', title: t('home.benefits.b3'), link: '/why-us#career' },
  { icon: '📜', title: t('home.benefits.b4'), link: '/why-us#certificate' }
]);

const translatedPaths = computed(() => [
  { 
    name: t('home.paths.p1.name'), 
    slug: 'teenagers', 
    desc: t('home.paths.p1.desc'), 
    icon: '🎮',
    color: {
      borderHover: 'hover:border-orange-500/50 dark:hover:border-orange-400/50',
      glow: 'bg-orange-500/5 dark:bg-orange-400/10 group-hover:bg-orange-500/20',
      iconBg: 'group-hover:bg-orange-500/20',
      titleHover: 'group-hover:text-orange-600 dark:group-hover:text-orange-400',
      linkText: 'text-orange-600 dark:text-orange-400'
    }
  },
  { 
    name: t('home.paths.p2.name'), 
    slug: 'coding', 
    desc: t('home.paths.p2.desc'), 
    icon: '💻',
    color: {
      borderHover: 'hover:border-cyan-500/50 dark:hover:border-cyan-400/50',
      glow: 'bg-cyan-500/5 dark:bg-cyan-400/10 group-hover:bg-cyan-500/20',
      iconBg: 'group-hover:bg-cyan-500/20',
      titleHover: 'group-hover:text-cyan-600 dark:group-hover:text-cyan-400',
      linkText: 'text-cyan-600 dark:text-cyan-400'
    }
  },
  { 
    name: t('home.paths.p3.name'), 
    slug: 'design', 
    desc: t('home.paths.p3.desc'), 
    icon: '🎨',
    color: {
      borderHover: 'hover:border-pink-500/50 dark:hover:border-pink-400/50',
      glow: 'bg-pink-500/5 dark:bg-pink-400/10 group-hover:bg-pink-500/20',
      iconBg: 'group-hover:bg-pink-500/20',
      titleHover: 'group-hover:text-pink-600 dark:group-hover:text-pink-400',
      linkText: 'text-pink-600 dark:text-pink-400'
    }
  }
]);

// 🎯 نام اساتید داینامیک شد تا با تغییر زبان عوض شوند!
const translatedInstructors = computed(() => [
  { id: 1, name: t('instructorData.i1.name'), dept: 'ai', title: t('instructorData.i1.title'), bio: t('instructorData.i1.bio'), skills: ['Python', 'Machine Learning', 'Deep Learning'], image_url: '/images/instructors/mehdi-khazaei.jpg' },
  { id: 2, name: t('instructorData.i2.name'), dept: 'design', title: t('instructorData.i2.title'), bio: t('instructorData.i2.bio'), skills: ['UI/UX', 'Photoshop', 'Illustrator'], image_url: '/images/instructors/paniz-borna.jpg' },
  { id: 5, name: t('instructorData.i5.name'), dept: 'ai', title: t('instructorData.i5.title'), bio: t('instructorData.i5.bio'), skills: ['Data_Science', 'Big_Data', 'NLP'], image_url: '/images/instructors/sara-mehrabi.jpg' },
]);

// اضافه کردن 3 نظر جدید هنرجویان
const translatedTestimonials = computed(() => [
  { text: t('home.testimonials.t1.text'), name: 'امیرحسین م.', course: t('home.testimonials.t1.course') },
  { text: t('home.testimonials.t2.text'), name: 'نگار س.', course: t('home.testimonials.t2.course') },
  { text: t('home.testimonials.t3.text'), name: 'رضا ک.', course: t('home.testimonials.t3.course') },
  { text: t('home.testimonials.t4.text'), name: 'سارا ب.', course: t('home.testimonials.t4.course') },
  { text: t('home.testimonials.t5.text'), name: 'محمد ر.', course: t('home.testimonials.t5.course') },
  { text: t('home.testimonials.t6.text'), name: 'مریم ا.', course: t('home.testimonials.t6.course') }
]);

// اضافه کردن 3 سوال متداول جدید
const translatedFaqs = computed(() => [
  { q: t('home.faq.q1'), a: t('home.faq.a1') },
  { q: t('home.faq.q2'), a: t('home.faq.a2') },
  { q: t('home.faq.q3'), a: t('home.faq.a3') },
  { q: t('home.faq.q4'), a: t('home.faq.a4') },
  { q: t('home.faq.q5'), a: t('home.faq.a5') },
  { q: t('home.faq.q6'), a: t('home.faq.a6') },
  { q: t('home.faq.q7'), a: t('home.faq.a7') }
]);

const activeFaq = ref(null);
const toggleFaq = (index) => {
  activeFaq.value = activeFaq.value === index ? null : index;
};

const sliderValue = ref(50);
const typedCode = ref('');
const finalOutput = '> Executing logic_core.py...\n> Compiling Neural Network...\n> Success: Student is Ready for Tech Market!';
let i = 0;

onMounted(() => {
  setTimeout(() => {
    const typeInterval = setInterval(() => {
      if (i < finalOutput.length) {
        if(finalOutput.charAt(i) === '\n') {
            typedCode.value += '<br/>';
        } else {
            typedCode.value += finalOutput.charAt(i);
        }
        i++;
      } else {
        clearInterval(typeInterval);
      }
    }, 40);
  }, 1500);
});

// 🎯 سئو داینامیک: با استفاده از یک تابع (Arrow Function) سئو نیز همراه با زبان عوض می‌شود!
useSeoMeta({
  title: () => t('seo.homeTitle'), 
  description: () => t('seo.homeDesc'),
  keywords: 'آموزش هوش مصنوعی, دوره آنلاین پایتون, آکادمی برنامه نویسی, استعدادیابی برنامه نویسی, آموزش ماشین لرنینگ',
  ogTitle: () => t('seo.homeTitle'),
  ogDescription: () => t('seo.homeOgDesc'),
  ogImage: 'https://danaverse.ir/images/Banner.jpg',
  ogUrl: 'https://danaverse.ir',
  twitterCard: 'summary_large_image',
});

// 🎯 اسکیمای گوگل با داده‌های ترجمه‌شده
useHead({
  script: computed(() => [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": translatedFaqs.value.map(faq => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a
          }
        }))
      })
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Danaverse Academy",
        "url": "https://danaverse.ir/",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://danaverse.ir/courses?search={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      })
    }
  ])
});
</script>