// المحافظات المصرية
const egyptGovernorates = [
    "القاهرة",
    "الجيزة",
    "الإسكندرية",
    "الدقهلية",
    "البحر الأحمر",
    "البحيرة",
    "الفيوم",
    "الغربية",
    "الإسماعيلية",
    "المنوفية",
    "المنيا",
    "القليوبية",
    "الوادي الجديد",
    "السويس",
    "أسوان",
    "أسيوط",
    "بني سويف",
    "بورسعيد",
    "دمياط",
    "جنوب سيناء",
    "كفر الشيخ",
    "مطروح",
    "الأقصر",
    "قنا",
    "شمال سيناء",
    "سوهاج",
];

// المناطق/المراكز حسب المحافظة
const regionsByGovernorate = {
    القاهرة: [
        "وسط القاهرة",
        "المعادي",
        "التجمع الخامس",
        "شبرا",
        "الزمالك",
        "مصر الجديدة",
        "المرج",
        "المقطم",
        "حلوان",
        "البساتين",
    ],
    الجيزة: [
        "الدقي",
        "العجوزة",
        "الهرم",
        "إمبابة",
        "بولاق الدكرور",
        "6 أكتوبر",
        "الشيخ زايد",
        "أوسيم",
        "البدرشين",
        "الصف",
        "أطفيح",
    ],
    الإسكندرية: [
        "المنتزه",
        "وسط الإسكندرية",
        "العجمي",
        "الجمرك",
        "العصافرة",
        "سيدي جابر",
        "سيدي بشر",
        "محرم بك",
    ],
    الدقهلية: [
        "المنصورة",
        "طلخا",
        "ميت غمر",
        "دكرنس",
        "منية النصر",
        "بلقاس",
        "نبروه",
        "الجمالية",
        "شربين",
    ],
    "البحر الأحمر": [
        "الغردقة",
        "رأس غارب",
        "سفاجا",
        "القصير",
        "مرسى علم",
        "الشلاتين",
        "حلايب",
    ],
    البحيرة: [
        "دمنهور",
        "كفر الدوار",
        "إيتاي البارود",
        "أبو حمص",
        "حوش عيسى",
        "النوبارية",
        "رشيد",
        "المحمودية",
    ],
    الفيوم: ["الفيوم", "سنورس", "إبشواي", "إطسا", "طامية", "يوسف الصديق"],
    الغربية: [
        "طنطا",
        "المحلة الكبرى",
        "زفتى",
        "كفر الزيات",
        "بسيون",
        "سمنود",
        "السنطة",
        "قطور",
    ],
    الإسماعيلية: [
        "الإسماعيلية",
        "القنطرة شرق",
        "القنطرة غرب",
        "فايد",
        "أبو صوير",
        "التل الكبير",
    ],
    المنوفية: [
        "شبين الكوم",
        "منوف",
        "أشمون",
        "الباجور",
        "تلا",
        "قويسنا",
        "بركة السبع",
        "السادات",
        "سرس الليان",
    ],
    المنيا: [
        "المنيا",
        "ملوي",
        "أبو قرقاص",
        "مطاي",
        "سمالوط",
        "بني مزار",
        "العدوة",
        "دير مواس",
    ],
    القليوبية: [
        "بنها",
        "طوخ",
        "قليوب",
        "شبرا الخيمة",
        "القناطر الخيرية",
        "كفر شكر",
        "الخصوص",
        "الخانكة",
        "شبين القناطر",
    ],
    "الوادي الجديد": ["الخارجة", "الداخلة", "الفرافرة", "باريس", "بلاط"],
    السويس: ["السويس", "عتاقة", "الجناين", "الأربعين", "فيصل"],
    أسوان: [
        "أسوان",
        "دراو",
        "كوم أمبو",
        "نصر النوبة",
        "إدفو",
        "كلابشة",
        "أبوسمبل",
    ],
    أسيوط: [
        "أسيوط",
        "ديروط",
        "منفلوط",
        "القوصية",
        "أبنوب",
        "أبو تيج",
        "الغنايم",
        "الفتح",
        "ساحل سليم",
        "صدفا",
    ],
    "بني سويف": [
        "بني سويف",
        "ناصر",
        "إهناسيا",
        "ببا",
        "سمسطا",
        "الفشن",
        "الواسطى",
    ],
    بورسعيد: [
        "بورفؤاد",
        "حي الزهور",
        "حي الشرق",
        "حي الضواحي",
        "حي العرب",
        "حي المناخ",
        "جنوب بورسعيد",
    ],
    دمياط: [
        "دمياط",
        "رأس البر",
        "الزرقا",
        "فارسكور",
        "كفر سعد",
        "عزبة البرج",
        "كفر البطيخ",
    ],
    "جنوب سيناء": [
        "شرم الشيخ",
        "نويبع",
        "دهب",
        "الطور",
        "سانت كاترين",
        "طابا",
        "رأس سدر",
        "أبو زنيمة",
    ],
    "كفر الشيخ": [
        "كفر الشيخ",
        "دسوق",
        "بيلا",
        "سيدي سالم",
        "الحامول",
        "بلطيم",
        "قلين",
        "الرياض",
        "فوه",
        "مطوبس",
    ],
    مطروح: [
        "مرسى مطروح",
        "الحمام",
        "العلمين",
        "الضبعة",
        "سيدي براني",
        "النجيلة",
        "سيوة",
        "السلوم",
    ],
    الأقصر: [
        "الأقصر",
        "أرمنت",
        "القرنة",
        "الزينية",
        "البياضية",
        "الطود",
        "إسنا",
    ],
    قنا: [
        "قنا",
        "أبوتشت",
        "دشنا",
        "الوقف",
        "نجع حمادي",
        "فرشوط",
        "قفط",
        "قوص",
        "نقادة",
    ],
    "شمال سيناء": ["العريش", "رفح", "الشيخ زويد", "بئر العبد", "الحسنة", "نخل"],
    سوهاج: [
        "سوهاج",
        "أخميم",
        "المراغة",
        "المنشأة",
        "البلينا",
        "جرجا",
        "جهينة",
        "ساقلتة",
        "طما",
        "طهطا",
    ],
};

// أنواع السيارات
const vehicleTypes = [
    "ميكروباص",
    "ميني باص",
    "كوستر",
    "هاي إيس",
    "سوزوكي",
    "ملاكي",
    "أخرى", // ← أضف هذا الاختيار
];

document.addEventListener("DOMContentLoaded", () => {
    const citySelect = document.getElementById("city");
    const regionSelect = document.getElementById("region");
    const carSelect = document.getElementById("car");
    const otherCarInput = document.getElementById("other-car-input");
    const otherRegionInput = document.getElementById("other-region-input");
    const phoneInput = document.getElementById("phone");
    const nameInput = document.getElementById("name"); // ← حقل الاسم

    // تعبئة المحافظات
    egyptGovernorates.forEach((city) => {
        const option = document.createElement("option");
        option.value = city;
        option.textContent = city;
        citySelect.appendChild(option);
    });

    // تعبئة أنواع السيارات
    vehicleTypes.forEach((type) => {
        const option = document.createElement("option");
        option.value = type;
        option.textContent = type;
        carSelect.appendChild(option);
    });

    // ظهور خانة نوع السيارة عند اختيار "أخرى"
    carSelect.addEventListener("change", () => {
        const isOther = carSelect.value === "أخرى";
        otherCarInput.style.display = isOther ? "block" : "none";
        otherCarInput.required = isOther;
        if (!isOther) otherCarInput.value = "";
    });

    // تعبئة المناطق حسب المحافظة + "أخرى"
    citySelect.addEventListener("change", () => {
        const selectedCity = citySelect.value;
        const regions = regionsByGovernorate[selectedCity] || [];

        regionSelect.innerHTML = `<option disabled selected value="">اختيار المنطقة</option>`;

        regions.forEach((region) => {
            const option = document.createElement("option");
            option.value = region;
            option.textContent = region;
            regionSelect.appendChild(option);
        });

        // إضافة خيار "أخرى"
        const otherOption = document.createElement("option");
        otherOption.value = "أخرى";
        otherOption.textContent = "أخرى";
        regionSelect.appendChild(otherOption);
    });

    // عند اختيار "أخرى" في المناطق
    regionSelect.addEventListener("change", () => {
        const isOther = regionSelect.value === "أخرى";
        otherRegionInput.style.display = isOther ? "block" : "none";
        otherRegionInput.required = isOther;
        if (!isOther) otherRegionInput.value = "";
    });

    // حماية رقم الهاتف: قبول أرقام فقط
    phoneInput.addEventListener("input", () => {
        phoneInput.value = phoneInput.value.replace(/\D/g, "");
    });

    // حماية الاسم: منع الأرقام والرموز الغريبة، والسماح بالحروف العربية والإنجليزية والمسافات فقط
    nameInput.addEventListener("input", () => {
        nameInput.value = nameInput.value.replace(
            /[^a-zA-Z\u0600-\u06FF\s]/g,
            ""
        );
    });
});
