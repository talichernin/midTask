//לאחר טעינת העמוד
const jsonData = {
    "animals": [
        {
            "id": 1,
            "title": "אפשר לדעת מה חתולים אומרים לנו?",
            "img": "cats.png",
            "content": " האם יש AI שיכול לתרגם לאנגלית ולעברית יללות? ובכלל – אילו טכנולוגיות יש היום \"על המדף\" שמתיימרות לאפשר לחיות המחמד שלנו לדבר איתנו במילים? ",
            "link": "https://animals-now.org/dogs-cats-translation/"
            
        },
        {
            "id": 2,
            "title": "מתחילים את השינוי בצלחת",
            "img": "changingPlate.jpeg", // Corrected extension
            "content": "תוכנית לעידוד תזונה בריאה ובת קיימא של ארגון חיים וסביבה, המשרד להגנת הסביבה ומשרד הבריאות, לכיתות ה' ומעלה וצוותים.",
            "link": "https://shorturl.at/BwcoC"
        },
        {
            "id": 3,
            "title": "משלוחים חיים",
            "img": "deliveries.jpg", // Corrected extension
            "content": "מה קורה לבעלי החיים מהמשלוחים החיים כשהם מגיעים לארץ? תחקירני אנימלס ליוו אלפי עגלים וטלאים מהמשלוחים החיים ותיעדו - הסיוט של בעלי החיים נמשך גם בישראל.",
            "link": "https://animals-now.org/investigations/live-transports-investigation/"
        },
        {
            "id": 4,
            "title": "חיות איתנו- סביבת לימוד מתוקשבת",
            "img": "e-lerning.jpg", // Corrected extension
            "content": "חיות איתנו- תוכנית חיות איתנו המיועדת לילדי היסודי בתוכנית שלכם. סביבת לימוד מקוונת המאפשרת גמישות ותורמת לביסוס היכרות ראשונית עם עולמן הרגשי של החיות, התנהגותן, חיי החברה שלהן ואופני התקשורת",
            "link": "https://liveact.org/animals-with-us/"

        },
        {
            "id": 5,
            "title": "אפשר לדעת מה כלבים אומרים לנו?",
            "img": "dogs.jpg", // Corrected extension
            "content": "האם יש AI שיכול לתרגם לאנגלית ולעברית נביחות? ובכלל – אילו טכנולוגיות יש היום \"על המדף\" שמתיימרות לאפשר לחיות המחמד שלנו לדבר איתנו במילים?",
            "link": "https://animals-now.org/dogs-cats-translation/"
        },
        {
            "id": 6,
            "title": "חיות חזרו למשפחתן",
            "img": "familiy.jpg", // Corrected typo
            "content": " פעילות לתלמידים בנושא \"כל אחד הוא אור קטן\". הפעילות עוסקת בבעלי חיים שאוחדו עם משפחותיהם לאחר זמן רב בשל הלחימה ומותאמת לגילים שונים. ",
            "link": "https://liveact.org/little-light/"

        },
        {
            "id": 7,
            "title": "זכויות בעלי חיים",
            "img": "win.jpg",
            "content": " מערך שיעור במולדת וחברה ליסודי, העוסק בצרכים שלנו ושל בעלי חיים, באמפתיה לחוויות של בעלי החיים והצורך להתחשב בהם. ",
            "link": "https://shorturl.at/YCcVV"
        },
        {
            "id": 8,
            "title": "לחלוק את העולם",
            "img": "sharing.jpg", // Corrected typo
            "content": " מפגשים לכיתות ז'-יב' בעברית וערבית. מפגשים אינטראקטיביים העוסקים בהיכרות עם בעלי החיין, בקשר בין היחס שלנו לבעלי חיים לבין שינוי האקלים, ובפתרונות שיעזרו לייצר עולם טוב יותר עבורם ועבורנו. ",
            "link": "https://sharetheworld.org.il/"
        },
        {
            "id": 9,
            "title": "מחשבות על פני השטח",
            "img": "thoughts.jpg", // Corrected extension
            "content": " האם ידעתם שהקרקע החקלאית בעולם משמשת לגידול מזון לבעלי חיים? איך בחירות התזונה שלנו משפיעות על הסביבה? ",
            "link": "https://liveact.org/thinking-about-land-use/"

        },
        {
            "id": 10,
            "title": "כלובי סוללות",
            "img": "chicken.jpg", // Corrected extension
            "content": "הצלחנו לאשר בכנסת תקנות היסטוריות שאוסרות את כלובי הסוללה, לאחר מאבק אינטנסיבי שנמשך 15 שנים. המשמעות היא הפחתה עצומה בסבלן של מיליוני תרנגולות בתוך שנים ספורות. אבל מה ישתנה בפועל? כמה זמן ייקח עד שזה יקרה? ",
            "link": "https://animals-now.org/winning-battery-cages/"
        }
    ]
};

function createCard(a) {
    const myCard = document.createElement("div");
    myCard.setAttribute("class", "card col-lg-3 p-2"); // Combine classes in one call

    const myImg = document.createElement("img");
    myImg.setAttribute("src", `img/${a.img}`);
    myImg.setAttribute("class", "card-img-top");
    myCard.appendChild(myImg);

    const body = document.createElement("div");
    body.setAttribute("class", "card-body");
    myCard.appendChild(body);

    const title = document.createElement("h2");
    title.setAttribute("class", "card-body");
    title.textContent = a.title;
    body.appendChild(title);

    const content = document.createElement("p");
    content.setAttribute("class", "card-text");
    content.textContent = a.content;
    body.appendChild(content);

   
    const footer = document.createElement("div");
    footer.setAttribute("class", "card-footer");
    myCard.appendChild(footer);
    
    const link = document.createElement("a");
    link.setAttribute("class", "btn btn-primary");
    link.setAttribute("href", a.link);
    link.textContent = "מעבר לאתר";
    footer.appendChild(link);  
   
    

    return myCard;
}

document.addEventListener("DOMContentLoaded", function (event) {
    const itemContainer = document.getElementById("itemContainer");
    const searchForm=document.getElementById("search-form");
    const searchInput=document.getElementById("search-input");

    
    searchForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const filter =searchInput.value;
        itemContainer.innerHTML = "";

        const filterdAnimals =jsonData.animals.filter(animal => {
            return animal.title.toLowerCase().indexOf(filter.toLowerCase()) > -1;
           
        });
        
        filterdAnimals.forEach(a => {
            const myCard = createCard(a);
            itemContainer.appendChild(myCard);
        });
        
     
    })
    
    
    jsonData.animals.forEach(a => {
        const myCard = createCard(a);
        itemContainer.appendChild(myCard);  
         
    });

    function modal(e) {
        
    }
});