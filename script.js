const ruLang = [
    './assets/klubok_en.png',
    './assets/hero_ru.png',
    './assets/desktop/rbornf.png',
    './assets/desktop/baptismf.png',
    './assets/desktop/schoolf_ru.png',
    './assets/desktop/universityf.png',
    './assets/desktop/weddingf.png',
    './assets/desktop/daughters_ru.png',
    './assets/desktop/workf_ru.png',
    './assets/desktop/grandsonf.png',
    './assets/desktop/retirementf_ru.png',
    './assets/desktop/goldenweddingf_ru.png',
    './assets/desktop/twentynineteen.png',
    './assets/navbook/milestones_ru.webp',
    './assets/navbook/stories_ru.webp',
    './assets/navbook/gallery_ru.webp',
    './assets/navbook/my_granny_ru.webp',
    './assets/navbook/remember_ru.webp',
    './assets/navbook/map_ru.webp',
    './assets/navbook/nanas_words_ru.webp',
  ]
  const enLang = [
    './assets/klubok_ru.png',
    './assets/hero_ru.png',
    './assets/desktop/rbornf.png',
    './assets/desktop/baptismf.png',
    './assets/desktop/schoolf_ru.png',
    './assets/desktop/universityf.png',
    './assets/desktop/weddingf.png',
    './assets/desktop/daughters_ru.png',
    './assets/desktop/workf_ru.png',
    './assets/desktop/grandsonf.png',
    './assets/desktop/retirementf_ru.png',
    './assets/desktop/goldenweddingf_ru.png',
    './assets/desktop/twentynineteen.png',
    './assets/navbook/milestones_ru.webp',
    './assets/navbook/stories_ru.webp',
    './assets/navbook/gallery_ru.webp',
    './assets/navbook/my_granny_ru.webp',
    './assets/navbook/remember_ru.webp',
    './assets/navbook/map_ru.webp',
    './assets/navbook/nanas_words_ru.webp',
  ]
  
  
  const ruLangMob = [
    './assets/klubok_en.png',
    './assets/mobile/calendarm_ru.png',
    './assets/mobile/m_birth_ru.webp',
    './assets/mobile/m_baptism_ru.webp',
    './assets/mobile/m_school_ru.webp',
    './assets/mobile/m_college_ru.webp',
    './assets/mobile/m_wedding_ru.webp',
    './assets/mobile/m_daughters_ru.webp',
    './assets/mobile/m_research_ru.webp',
    './assets/mobile/m_grandson_ru.webp',
    './assets/mobile/m_retirement_ru.webp',
    './assets/mobile/m_gwedding_ru.webp',
    './assets/mobile/m_2019_ru.webp',
    './assets/navbook/milestones_ru.webp',
    './assets/navbook/stories_ru.webp',
    './assets/navbook/gallery_ru.webp',
    './assets/navbook/my_granny_ru.webp',
    './assets/navbook/remember_ru.webp',
    './assets/navbook/map_ru.webp',
    './assets/navbook/nanas_words_ru.webp',
  ]
  const enLangMob = [
    './assets/klubok_ru.png',
    './assets/mobile/calendarm_en.png',
    './assets/mobile/m_birth_en.webp',
    './assets/mobile/m_baptism_en.webp',
    './assets/mobile/m_school_en.webp',
    './assets/mobile/m_college_en.webp',
    './assets/mobile/m_wedding_en.webp',
    './assets/mobile/m_daughters_en.webp',
    './assets/mobile/m_research_en.webp',
    './assets/mobile/m_grandson_en.webp',
    './assets/mobile/m_retirement_en.webp',
    './assets/mobile/m_gwedding_en.webp',
    './assets/mobile/m_2019_en.webp',
    './assets/navbook/milestones_en.webp',
    './assets/navbook/stories_en.webp',
    './assets/navbook/gallery_en.webp',
    './assets/navbook/my_granny_en.webp',
    './assets/navbook/remember_en.webp',
    './assets/navbook/map_en.webp',
    './assets/navbook/nanas_words_en.webp',
  ]
  
  const ruLangTab = [
    './assets/klubok_en.png',
    './assets/tablet/hero_ru.png',
    './assets/tablet/birth.png',
    './assets/tablet/baptism.png',
    './assets/tablet/school.png',
    './assets/tablet/university.png',
    './assets/tablet/wedding.png',
    './assets/tablet/daughters_ru.png',
    './assets/tablet/work_ru.png',
    './assets/tablet/grandson.png',
    './assets/tablet/retirement_ru.png',
    './assets/tablet/goldenwedding_ru.png',
    './assets/tablet/twentynineteen.png',
    './assets/navbook/milestones_ru.webp',
    './assets/navbook/stories_ru.webp',
    './assets/navbook/gallery_ru.webp',
    './assets/navbook/my_granny_ru.webp',
    './assets/navbook/remember_ru.webp',
    './assets/navbook/map_ru.webp',
    './assets/navbook/nanas_words_ru.webp',
  ]
  const enLangTab = [
    './assets/klubok_ru.png',
    './assets/tablet/hero_en.png',
    './assets/tablet/birth.png',
    './assets/tablet/baptism.png',
    './assets/tablet/school.png',
    './assets/tablet/university.png',
    './assets/tablet/wedding.png',
    './assets/tablet/daughters_en.png',
    './assets/tablet/work_en.png',
    './assets/tablet/grandson.png',
    './assets/tablet/retirement_en.png',
    './assets/tablet/goldenwedding_en.png',
    './assets/tablet/twentynineteen.png',
    './assets/navbook/milestones_ru.webp',
    './assets/navbook/stories_ru.webp',
    './assets/navbook/gallery_ru.webp',
    './assets/navbook/my_granny_ru.webp',
    './assets/navbook/remember_ru.webp',
    './assets/navbook/map_ru.webp',
    './assets/navbook/nanas_words_ru.webp',
  ]
  
  function changeLanguage(language) {
    const imageElements = document.querySelectorAll('.changeable-img')
  
    const isMobile = window.innerWidth < 800
    const isTablet = window.innerWidth >= 800 && window.innerWidth < 1366
  
    const currentImages =
      language === 'russian'
        ? isTablet
          ? ruLangTab
          : isMobile
          ? ruLangMob
          : ruLang
        : isTablet
        ? enLangTab
        : isMobile
        ? enLangMob
        : enLang
  
    imageElements.forEach((image, index) => {
      image.src = currentImages[index]
    })
  }
  
  document.getElementById('language-selector').dataset.language = 'russian'
  
  changeLanguage('russian')
  
  const switchLanguageButton = document.getElementById('language-selector')
  
  switchLanguageButton.addEventListener('click', () => {
    const currentLanguage =
      switchLanguageButton.dataset.language === 'russian' ? 'english' : 'russian'
    changeLanguage(currentLanguage)
  
    switchLanguageButton.dataset.language = currentLanguage
  })
  
  window.addEventListener('resize', () => {
    const currentLanguage = switchLanguageButton.dataset.language
    changeLanguage(currentLanguage)
  })
  