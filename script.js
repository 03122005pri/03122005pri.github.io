const animItems = document.querySelectorAll("._anim-items");

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll(params) {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            } 

            if ((pageYOffset >  animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active');
            } else {
                if (!animItem.classList.contains('_anim-no-hide')) {
                    animItem.classList.remove('_active')
                }
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }

    setTimeout(() => { animOnScroll(); }, 300);
}

function ClickFunction() {
    document.getElementById("true").innerHTML = "Міф";
    document.getElementById("p").innerHTML = "Масова вакцинація не тільки не призведе до мутації коронавірусу SARS-CoV-2, а й навпаки допоможе запобігти цьому через колективний імунітет. Якщо щепити значну частину населення, то вірусу не буде, де мутувати, і його нові штами з'являтимуться  з меншою ймовірністю.";
}