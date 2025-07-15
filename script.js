// »Ì«‰«  «·„‰ Ã« 
//  „  ÕœÌÀ Â–Â «·„’›Ê›… · ‘„· √”„«¡ Ê√Ê’«› Ê„Ì“«  Ê„Ê«’›«  »«··€ Ì‰ «·⁄—»Ì… Ê«·≈‰Ã·Ì“Ì….
const productsData = [
    {
        id: 'square-ducts',
        category: 'air-ducts',
        name_ar: '„Ã«—Ì ÂÊ«¡ „—»⁄…',
        name_en: 'Square Air Ducts',
        description_ar: ' ’„Ì„ „ Ì‰ Ê⁄«·Ì «·ﬂ›«¡…° „À«·Ì ·· ÿ»Ìﬁ«  «· Ã«—Ì… Ê«·’‰«⁄Ì… «· Ì   ÿ·»  œ›ﬁ ÂÊ«¡ ﬂ»Ì—.  ı’‰⁄ „‰ √ÃÊœ √‰Ê«⁄ √·Ê«Õ «·’·» «·„Ã·›‰ √Ê «·” «‰·” ” Ì·° Ê Ê›— „ﬁ«Ê„… ⁄«·Ì… ·· ¬ﬂ· Ê⁄„— «› —«÷Ì ÿÊÌ·.   Ê«›ﬁ „⁄ √⁄·Ï „⁄«ÌÌ— «·ÃÊœ… Ê«·”·«„….',
        description_en: 'Durable and high-efficiency design, ideal for commercial and industrial applications requiring large airflow. Made from the finest galvanized steel or stainless steel sheets, providing high corrosion resistance and a long lifespan. Complies with the highest quality and safety standards.',
        image: 'https://via.placeholder.com/800x600/1E2B38/E67E22?text=Ducting+Square+Detail',
        features_ar: [
            '„’‰Ê⁄… „‰ «·’·» «·„Ã·›‰ ⁄«·Ì «·ÃÊœ… √Ê «·” «‰·” ” Ì·.',
            ' ’„Ì„ „Õﬂ„ Ìﬁ·· „‰  ”—» «·ÂÊ«¡.',
            '”Â·… «· —ﬂÌ» Ê«·’Ì«‰….',
            '„ Ê›—… »√»⁄«œ Ê„ﬁ«”«  „Œ’’… · ‰«”» «Õ Ì«Ã«  «·„‘—Ê⁄.',
            '„ﬁ«Ê„… ·· ¬ﬂ· Ê«·’œ√.'
        ],
        features_en: [
            'Made from high-quality galvanized steel or stainless steel.',
            'Sealed design reduces air leakage.',
            'Easy to install and maintain.',
            'Available in custom dimensions and sizes to suit project needs.',
            'Corrosion and rust resistant.'
        ],
        specs_ar: {
            '«·„«œ…': '«·’·» «·„Ã·›‰ / «·” «‰·” ” Ì·',
            '«·”„«ﬂ…': 'Õ”» «·„Ê«’›«  «·›‰Ì… «·„ÿ·Ê»…',
            '«·√»⁄«œ': '„Œ’’… („—»⁄…/„” ÿÌ·…)',
            '«· ÿ»Ìﬁ« ': '«·„»«‰Ì «· Ã«—Ì… Ê«·’‰«⁄Ì…° «·„” ‘›Ì« ° «·„œ«—”.'
        },
        specs_en: {
            'Material': 'Galvanized Steel / Stainless Steel',
            'Thickness': 'As per technical specifications',
            'Dimensions': 'Custom (Square/Rectangular)',
            'Applications': 'Commercial and industrial buildings, hospitals, schools.'
        },
        downloadLink_ar: 'ESNAD air outlets submittal.pdf', // —«»ÿ „·› «·‹ PDF »«·⁄—»Ì
        downloadLink_en: 'ESNAD air outlets submittal.pdf'  // —«»ÿ „·› «·‹ PDF »«·≈‰Ã·Ì“Ì (Ì„ﬂ‰ √‰ ÌﬂÊ‰ ‰›” «·„·› ≈–« ﬂ«‰ À‰«∆Ì «··€…)
    },
    {
        id: 'round-ducts',
        category: 'air-ducts',
        name_ar: '„Ã«—Ì ÂÊ«¡ œ«∆—Ì…',
        name_en: 'Round Air Ducts',
        description_ar: ' ı” Œœ„ „Ã«—Ì «·ÂÊ«¡ «·œ«∆—Ì… ›Ì «·√‰Ÿ„… «· Ì   ÿ·»  œ›ﬁ ÂÊ«¡ ”·” Ê„ﬁ«Ê„… „‰Œ›÷…° „„« ÌÊ›— ﬂ›«¡… ÿ«ﬁ… ⁄«·Ì….  ’„Ì„Â« «·√‰Ìﬁ ÌÃ⁄·Â« „‰«”»… ·· —ﬂÌ» «·Ÿ«Â— ›Ì »⁄÷ «·„‘«—Ì⁄. „ Ê›—… »√ﬁÿ«— Ê„Ê«’›«  „Œ ·›….',
        description_en: 'Round air ducts are used in systems requiring smooth airflow and low resistance, providing high energy efficiency. Their sleek design makes them suitable for exposed installations in some projects. Available in various diameters and specifications.',
        image: 'https://via.placeholder.com/800x600/1E2B38/E67E22?text=Ducting+Round+Detail',
        features_ar: [
            ' ’„Ì„ «‰”Ì«»Ì · ﬁ·Ì· ›ﬁœ«‰ «·÷€ÿ.',
            '”Â·… «· ‰ŸÌ› Ê«·’Ì«‰….',
            '„‰«”»… ·· —ﬂÌ»«  «·„—∆Ì… Ê€Ì— «·„—∆Ì….',
            ' Ê›— √⁄·Ï „⁄«ÌÌ— «·‰Ÿ«›… Ê«·ÃÊœ….',
            '⁄“· Õ—«—Ì Ê’Ê Ì ›⁄«·.'
        ],
        features_en: [
            'Streamlined design to reduce pressure loss.',
            'Easy to clean and maintain.',
            'Suitable for visible and concealed installations.',
            'Provides the highest standards of cleanliness and quality.',
            'Effective thermal and acoustic insulation.'
        ],
        specs_ar: {
            '«·„«œ…': '«·’·» «·„Ã·›‰ / «·√·Ê„‰ÌÊ„',
            '«·√ﬁÿ«—': '„‰ 100 „„ ≈·Ï 1200 „„',
            '«· ÿ»Ìﬁ« ': '«·„ÿ«⁄„° «·„ﬂ« »° «·ÊÕœ«  «·”ﬂ‰Ì… «·ﬂ»Ì—….'
        },
        specs_en: {
            'Material': 'Galvanized Steel / Aluminum',
            'Diameters': 'From 100mm to 1200mm',
            'Applications': 'Restaurants, offices, large residential units.'
        },
        downloadLink_ar: 'ESNAD air outlets submittal.pdf',
        downloadLink_en: 'ESNAD air outlets submittal.pdf'
    },
    {
        id: 'flexible-ducts',
        category: 'air-ducts',
        name_ar: '„Ã«—Ì ÂÊ«¡ „—‰…',
        name_en: 'Flexible Air Ducts',
        description_ar: '„Ã«—Ì «·ÂÊ«¡ «·„—‰… „À«·Ì… ··Ê’·«  «·‰Â«∆Ì… »Ì‰ „Ã«—Ì «·ÂÊ«¡ «·—∆Ì”Ì… Ê„Œ«—Ã «·ÂÊ«¡° Ê Ê›— ”ÂÊ·… ›Ì «· —ﬂÌ» Ê«· ÊÃÌÂ ÕÊ· «·⁄Ê«∆ﬁ. „ Ê›—… »√‰Ê«⁄ „⁄“Ê·… Ê€Ì— „⁄“Ê·… ·÷„«‰ ﬂ›«¡… «·‰Ÿ«„.',
        description_en: 'Flexible air ducts are ideal for final connections between main ducts and air outlets, offering easy installation and routing around obstacles. Available in insulated and non-insulated types to ensure system efficiency.',
        image: 'https://via.placeholder.com/800x600/1E2B38/E67E22?text=Ducting+Flexible+Detail',
        features_ar: [
            '„—Ê‰… ⁄«·Ì… Ê”ÂÊ·… ›Ì «· ‘ﬂÌ·.',
            '„ Ê›—… »⁄“· Õ—«—Ì Ê’Ê Ì „„ «“.',
            '„ﬁ«Ê„… ··‰„Ê «·»ﬂ Ì—Ì Ê«·›ÿ—Ì« .',
            '„À«·Ì… ··„”«Õ«  «·÷Ìﬁ… √Ê «·√„«ﬂ‰ –«  «· ŒÿÌÿ «·„⁄ﬁœ.',
            ' —ﬂÌ» ”—Ì⁄ Ê”Â·.'
        ],
        features_en: [
            'High flexibility and easy shaping.',
            'Available with excellent thermal and acoustic insulation.',
            'Resistant to bacterial and fungal growth.',
            'Ideal for confined spaces or complex layouts.',
            'Quick and easy installation.'
        ],
        specs_ar: {
            '«·„«œ…': '«·√·Ê„‰ÌÊ„ «·„œ⁄„ »”·ﬂ ›Ê·«–Ì / «·»Ê·Ì” —',
            '«·√ﬁÿ«—': '„‰ 4 »Ê’… ≈·Ï 20 »Ê’…',
            '«· ÿ»Ìﬁ« ': 'Ê’·«  «·„Œ«—Ã «·ÂÊ«∆Ì…° √‰Ÿ„… «· ﬂÌÌ› «·„‰“·Ì Ê«· Ã«—Ì «·Œ›Ì›.'
        },
        specs_en: {
            'Material': 'Aluminum foil reinforced with steel wire / Polyester',
            'Diameters': 'From 4 inches to 20 inches',
            'Applications': 'Air outlet connections, residential and light commercial HVAC systems.'
        },
        downloadLink_ar: 'ESNAD air outlets submittal.pdf',
        downloadLink_en: 'ESNAD air outlets submittal.pdf'
    },
    {
        id: 'linear-slot-diffusers',
        category: 'air-outlets',
        name_ar: '„Ê“⁄«  ÂÊ«¡ ŒÿÌ… (Linear Slot Diffusers)',
        name_en: 'Linear Slot Diffusers',
        description_ar: ' ıﬁœ„ „Ê“⁄« ŒÿÌ« √‰Ìﬁ« Ê⁄’—Ì«° Ì„ “Ã »”·«”… „⁄ √Ì  ’„Ì„ œ«Œ·Ì. ÌÊ›—  Ê“Ì⁄« „ÊÕœ« ··ÂÊ«¡ „⁄ «·Õ›«Ÿ ⁄·Ï Ã„«·Ì… «·„ﬂ«‰. „À«·Ì ··„ﬂ« »° «·›‰«œﬁ° Ê«·„”«Õ«  «· Ã«—Ì… «·—«ﬁÌ….',
        description_en: 'Offers a sleek and modern linear diffuser, blending seamlessly with any interior design. Provides uniform air distribution while maintaining aesthetic appeal. Ideal for offices, hotels, and upscale commercial spaces.',
        image: 'https://via.placeholder.com/800x600/1E2B38/E67E22?text=Linear+Slot+Diffusers',
        features_ar: [
            ' ’„Ì„ „Œ›Ì √Ê Ÿ«Â— Ì„ “Ã „⁄ «·”ﬁ›.',
            ' œ›ﬁ ÂÊ«¡ ﬁ«»· ·· ⁄œÌ·.',
            '„ Ê›— »√ÿÊ«· „ ⁄œœ… · ‰«”» „ ÿ·»«  «· ’„Ì„.',
            '„’‰Ê⁄… „‰ «·√·Ê„‰ÌÊ„ ⁄«·Ì «·ÃÊœ….',
            '„ﬁ«Ê„… ·· ¬ﬂ· Ê«·’œ√.'
        ],
        features_en: [
            'Concealed or exposed design that blends with the ceiling.',
            'Adjustable airflow.',
            'Available in multiple lengths to suit design requirements.',
            'Made of high-quality aluminum.',
            'Corrosion and rust resistant.'
        ],
        specs_ar: {
            '«·„«œ…': '«·√·Ê„‰ÌÊ„ «·„»ÀÊﬁ',
            '«·› Õ« ': '1-8 › Õ« ',
            '«· ‘ÿÌ»': 'œÂ«‰ ≈·ﬂ —Ê” « ÌﬂÌ (√·Ê«‰ Õ”» «·ÿ·»)'
        },
        specs_en: {
            'Material': 'Extruded Aluminum',
            'Slots': '1-8 slots',
            'Finish': 'Electrostatic paint (custom colors)'
        },
        downloadLink_ar: 'ESNAD air outlets submittal.pdf',
        downloadLink_en: 'ESNAD air outlets submittal.pdf'
    },
    {
        id: 'grilles',
        category: 'air-outlets',
        name_ar: 'Ã—Ì·« ',
        name_en: 'Grilles',
        description_ar: 'Ã—Ì·«  «· ÂÊÌ… „’„„… · Ê›Ì—  œ›ﬁ ÂÊ«¡ ›⁄«· „⁄ „ŸÂ— Ã–«». „ Ê›—… »√ÕÃ«„ Ê ’«„Ì„ „Œ ·›… · ‰«”» Ã„Ì⁄ «· ÿ»Ìﬁ« ° „‰ «·”ﬂ‰Ì… ≈·Ï «·’‰«⁄Ì….  ÷„‰  Ê“Ì⁄« „À«·Ì« ··ÂÊ«¡ Ê ﬁ·Ì· «·÷Ê÷«¡.',
        description_en: 'Ventilation grilles are designed to provide efficient airflow with an attractive appearance. Available in various sizes and designs to suit all applications, from residential to industrial. Ensures optimal air distribution and noise reduction.',
        image: 'https://via.placeholder.com/800x600/1E2B38/E67E22?text=Grilles',
        features_ar: [
            '„ Ê›—… » ’«„Ì„ „ ⁄œœ… (⁄«œÌ…° „“œÊÃ… «·«‰Õ—«›° »Ê«»« ).',
            ' ’‰Ì⁄ „‰ «·√·Ê„‰ÌÊ„ √Ê «·’·».',
            '”ÂÊ·… ›Ì «· —ﬂÌ» Ê«·’Ì«‰….',
            '„ﬁ«Ê„… ··⁄Ê«„· «·ÃÊÌ… Ê«· ¬ﬂ·.',
            'ÿ·«¡ »Ê·Ì” — „ﬁ«Ê„ ··Œœ‘.'
        ],
        features_en: [
            'Available in multiple designs (single deflection, double deflection, egg crate).',
            'Manufactured from aluminum or steel.',
            'Easy to install and maintain.',
            'Weather and corrosion resistant.',
            'Scratch-resistant polyester coating.'
        ],
        specs_ar: {
            '«·„«œ…': '«·√·Ê„‰ÌÊ„ / «·’·»',
            '«·√ÕÃ«„': '√ÕÃ«„ ﬁÌ«”Ì… Ê„Œ’’…',
            '«· ÿ»Ìﬁ« ': '„Œ«—Ã ÂÊ«¡ «· ﬂÌÌ› Ê«· ÂÊÌ…° Ã—Ì·«  «·”Õ» Ê«·—«Ã⁄.'
        },
        specs_en: {
            'Material': 'Aluminum / Steel',
            'Sizes': 'Standard and custom sizes',
            'Applications': 'HVAC air outlets, supply and return grilles.'
        },
        downloadLink_ar: 'ESNAD air outlets submittal.pdf',
        downloadLink_en: 'ESNAD air outlets submittal.pdf'
    },
    {
        id: 'dampers-volume-control',
        category: 'dampers',
        name_ar: 'œ„»—«  «· Õﬂ„ ›Ì ÕÃ„ «·ÂÊ«¡ (VCD)',
        name_en: 'Volume Control Dampers (VCD)',
        description_ar: ' ı” Œœ„ œ„»—«  «· Õﬂ„ ›Ì ÕÃ„ «·ÂÊ«¡ ·÷»ÿ Ê Ê“Ì⁄  œ›ﬁ «·ÂÊ«¡ œ«Œ· ‰Ÿ«„ «· ÂÊÌ… Ê«· ﬂÌÌ› »œﬁ….  ÷„‰ «· Õﬂ„ «·√„À· ›Ì œ—Ã… «·Õ—«—… ÊÃÊœ… «·ÂÊ«¡° Ê  Ê›— » ’„Ì„«  ÌœÊÌ… √Ê ¬·Ì….',
        description_en: 'Volume control dampers are used to precisely adjust and distribute airflow within HVAC systems. They ensure optimal temperature and air quality control, and are available in manual or automated designs.',
        image: 'https://via.placeholder.com/800x600/1E2B38/E67E22?text=VCD',
        features_ar: [
            ' Õﬂ„ œﬁÌﬁ ›Ì  œ›ﬁ «·ÂÊ«¡.',
            '„’‰Ê⁄… „‰ «·√·Ê„‰ÌÊ„ √Ê «·’·» «·„Ã·›‰.',
            '„ Ê›—… »‘›—«  „ Ê«“Ì… √Ê „ ⁄«ﬂ”….',
            '”Â·… «· —ﬂÌ» Ê«·÷»ÿ.',
            '„ﬁ«Ê„… ⁄«·Ì… ··÷€ÿ Ê«· ¬ﬂ·.'
        ],
        features_en: [
            'Precise control over airflow.',
            'Made from aluminum or galvanized steel.',
            'Available with parallel or opposed blades.',
            'Easy to install and adjust.',
            'High resistance to pressure and corrosion.'
        ],
        specs_ar: {
            '«·„«œ…': '«·√·Ê„‰ÌÊ„ / «·’·» «·„Ã·›‰',
            '«· ‘€Ì·': 'ÌœÊÌ / ﬂÂ—»«∆Ì',
            '«·√»⁄«œ': '√ÕÃ«„ ﬁÌ«”Ì… Ê„Œ’’…'
        },
        specs_en: {
            'Material': 'Aluminum / Galvanized Steel',
            'Operation': 'Manual / Electric',
            'Dimensions': 'Standard and custom sizes'
        },
        downloadLink_ar: 'ESNAD air outlets submittal.pdf',
        downloadLink_en: 'ESNAD air outlets submittal.pdf'
    },
    {
        id: 'fire-dampers',
        category: 'dampers',
        name_ar: 'œ„»—«  «·Õ—Ìﬁ (Fire Dampers)',
        name_en: 'Fire Dampers',
        description_ar: 'œ„»—«  «·Õ—Ìﬁ ÂÌ „ﬂÊ‰«  √”«”Ì… ·√‰Ÿ„… «·”·«„… „‰ «·Õ—Ìﬁ° Ê ı” Œœ„ ·≈€·«ﬁ „Ã«—Ì «·ÂÊ«¡  ·ﬁ«∆Ì« ⁄‰œ «ﬂ ‘«› Õ—Ìﬁ ·„‰⁄ «‰ ‘«— «·œŒ«‰ Ê«·‰«— »Ì‰ „‰«ÿﬁ «·„»‰Ï «·„Œ ·›….   Ê«›ﬁ „⁄ „⁄«ÌÌ— «·”·«„… «·œÊ·Ì….',
        description_en: 'Fire dampers are essential components of fire safety systems, used to automatically close air ducts upon fire detection to prevent the spread of smoke and fire between different building areas. Complies with international safety standards.',
        image: 'https://via.placeholder.com/800x600/1E2B38/E67E22?text=Fire+Dampers',
        features_ar: [
            '≈€·«ﬁ  ·ﬁ«∆Ì ⁄‰œ «— ›«⁄ œ—Ã… «·Õ—«—….',
            '„’‰Ê⁄… „‰ „Ê«œ „ﬁ«Ê„… ··Õ—Ìﬁ.',
            '„ Ê›—… » ’‰Ì›«  „ﬁ«Ê„… ··Õ—Ìﬁ „Œ ·›… (”«⁄« ).',
            '”ÂÊ·… ›Ì «·›Õ’ Ê«·’Ì«‰….',
            '„ Ê«›ﬁ… „⁄ ﬂÊœ «·»‰«¡ Ê„⁄«ÌÌ— «·œ›«⁄ «·„œ‰Ì.'
        ],
        features_en: [
            'Automatic closure upon temperature increase.',
            'Made from fire-resistant materials.',
            'Available in various fire resistance ratings (hours).',
            'Easy to inspect and maintain.',
            'Compliant with building codes and civil defense standards.'
        ],
        specs_ar: {
            '«·„«œ…': '«·’·» «·„Ã·›‰ «·„ﬁ«Ê„ ··Õ—Ìﬁ',
            '«· ‘€Ì·': '’„«„ Õ—«—Ì (Fusible Link)',
            '«· ’‰Ì›': '1.5 ”«⁄… / 3 ”«⁄« '
        },
        specs_en: {
            'Material': 'Fire-rated Galvanized Steel',
            'Operation': 'Fusible Link',
            'Rating': '1.5 hours / 3 hours'
        },
        downloadLink_ar: 'ESNAD air outlets submittal.pdf',
        downloadLink_en: 'ESNAD air outlets submittal.pdf'
    }
    // Ì„ﬂ‰ﬂ ≈÷«›… «·„“Ìœ „‰ «·„‰ Ã«  Â‰« »‰›” «· ‰”Ìﬁ À‰«∆Ì «··€…
];

// œ«·… · €ÌÌ— ⁄‰Ê«‰ «·’›Õ… »‰«¡ ⁄·Ï «·›∆… «·„Œ «—…
function updatePageTitle(category) {
    const defaultTitle_ar = '„‰ Ã« ‰« - ≈”‰«œ';
    const defaultTitle_en = 'Our Products - ESNAD';
    let newTitle_ar = defaultTitle_ar;
    let newTitle_en = defaultTitle_en;

    const currentLang = document.documentElement.lang || 'ar'; // Get current language

    if (category === 'air-ducts') {
        newTitle_ar = '„Ã«—Ì «·ÂÊ«¡ - ≈”‰«œ';
        newTitle_en = 'Air Ducts - ESNAD';
    } else if (category === 'air-outlets') {
        newTitle_ar = '„Œ«—Ã «·ÂÊ«¡ - ≈”‰«œ';
        newTitle_en = 'Air Outlets - ESNAD';
    } else if (category === 'dampers') {
        newTitle_ar = '«·œ„»—«  - ≈”‰«œ';
        newTitle_en = 'Dampers - ESNAD';
    }

    document.title = (currentLang === 'ar') ? newTitle_ar : newTitle_en;
}

// Mobile Menu Toggle (·’›Õ«  „ ⁄œœ…)
const mobileMenu = document.getElementById('mobile-menu');
const mainNavUl = document.querySelector('.main-nav ul');
const dropdownLinks = document.querySelectorAll('.main-nav .dropdown > a'); // «·—Ê«»ÿ «·—∆Ì”Ì… ··ﬁÊ«∆„ «·„‰”œ·…

if (mobileMenu) {
    mobileMenu.addEventListener('click', () => {
        mainNavUl.classList.toggle('active');
        mobileMenu.querySelector('i').classList.toggle('fa-bars');
        mobileMenu.querySelector('i').classList.toggle('fa-times');
        // ≈€·«ﬁ √Ì ﬁ«∆„… „‰”œ·… „› ÊÕ… ⁄‰œ ≈€·«ﬁ «·ﬁ«∆„… «·—∆Ì”Ì…
        if (!mainNavUl.classList.contains('active')) {
            document.querySelectorAll('.main-nav .dropdown').forEach(d => d.classList.remove('active'));
        }
    });
}

// Toggle dropdown on click for mobile
dropdownLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        // ≈–« ﬂ«‰  «·‘«‘… ’€Ì—… (√ﬁ· „‰ √Ê  ”«ÊÌ 992px)
        if (window.innerWidth <= 992) {
            e.preventDefault(); // „‰⁄ ”·Êﬂ «·—«»ÿ «·«› —«÷Ì
            const parentDropdown = link.closest('.dropdown');
            parentDropdown.classList.toggle('active'); //  »œÌ· ›∆… 'active' ⁄·Ï «·⁄‰’— «·√» (.dropdown)
        }
    });
});


// ÊŸÌ›… ·⁄—÷ «·„‰ Ã«  ›Ì «·‘»ﬂ…
function displayProducts(products, containerElement) {
    containerElement.innerHTML = ''; // „”Õ √Ì „Õ ÊÏ ”«»ﬁ

    const currentLang = document.documentElement.lang || 'ar'; // Get current language

    if (products.length === 0) {
        containerElement.innerHTML = `<p class="no-products-message">${currentLang === 'ar' ? '·«  ÊÃœ „‰ Ã«  ·⁄—÷Â« ›Ì Â–Â «·›∆….' : 'No products to display in this category.'}</p>`;
        return;
    }

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card', 'animate__animated', 'animate__fadeInUp');

        const imageUrl = product.image || `https://via.placeholder.com/300x200/1E2B38/E67E22?text=${encodeURIComponent(product[`name_${currentLang}`] || product.name_ar)}`;

        // «” Œœ«„ «·‰’Ê’ »«··€… «·Õ«·Ì…
        const productName = product[`name_${currentLang}`] || product.name_ar;
        const productDescription = product[`description_${currentLang}`] || product.description_ar;
        const downloadText = currentLang === 'ar' ? ' Õ„Ì· «·„Ê«’›«  (PDF)' : 'Download Specs (PDF)';
        const viewDetailsText = currentLang === 'ar' ? '⁄—÷ «· ›«’Ì·' : 'View Details';

        productCard.innerHTML = `
            <img src="${imageUrl}" alt="${productName}">
            <h3>${productName}</h3>
            <p>${productDescription.substring(0, 100)}...</p>
            <div class="card-buttons">
                <a href="${product[`downloadLink_${currentLang}`] || product.downloadLink_ar}" target="_blank" class="button download-button">${downloadText}</a>
                <a href="product-detail.html?id=${product.id}" class="button view-details-button">${viewDetailsText}</a>
            </div>
        `;
        containerElement.appendChild(productCard);
    });
}

// ÊŸÌ›… · ’›Ì… «·„‰ Ã«  Ê⁄—÷Â«
function filterAndDisplayProducts(selectedCategory) {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) {
        // Â–« Ì⁄‰Ì √‰‰« ·”‰« ›Ì ’›Õ… products.html° —»„« index.html
        // Ê·ﬂ‰ œ«·… displayFeaturedProducts ›Ì index.html ·œÌÂ« „‰ÿﬁÂ« «·Œ«’.
        return;
    }

    const filteredProducts = selectedCategory === 'all'
        ? productsData
        : productsData.filter(product => product.category === selectedCategory);

    displayProducts(filteredProducts, productsGrid);
    updatePageTitle(selectedCategory); //  ÕœÌÀ ⁄‰Ê«‰ «·’›Õ…
}

// ÊŸÌ›… ·⁄—÷  ›«’Ì· «·„‰ Ã »‰«¡ ⁄·Ï «·‹ ID ›Ì ’›Õ… product-detail.html (≈–« ﬂ«‰  „ÊÃÊœ…)
function displayProductDetail(productId) {
    const product = productsData.find(p => p.id === productId);
    const productDetailContainer = document.getElementById('productDetailContainer');

    if (!product || !productDetailContainer) {
        if (productDetailContainer) {
            productDetailContainer.innerHTML = `<p class="error-message">${document.documentElement.lang === 'ar' ? '⁄–—«° ·„ Ì „ «·⁄ÀÊ— ⁄·Ï «·„‰ Ã «·„ÿ·Ê».' : 'Sorry, the requested product was not found.'}</p>`;
        }
        return;
    }

    const currentLang = document.documentElement.lang || 'ar'; // Get current language

    // «” Œœ«„ «·‰’Ê’ »«··€… «·Õ«·Ì… ·„·¡ «· ›«’Ì·
    const productName = product[`name_${currentLang}`] || product.name_ar;
    const productDescription = product[`description_${currentLang}`] || product.description_ar;
    const featuresList = (product[`features_${currentLang}`] || product.features_ar).map(feature => `<li>${feature}</li>`).join('');
    const specsList = Object.entries(product[`specs_${currentLang}`] || product.specs_ar)
        .map(([key, value]) => `<li><strong>${key}:</strong> ${value}</li>`)
        .join('');

    const downloadText = currentLang === 'ar' ? ' Õ„Ì· «·„Ê«’›«  (PDF)' : 'Download Specs (PDF)';
    const featuresTitle = currentLang === 'ar' ? '«·„Ì“«  «·—∆Ì”Ì…' : 'Key Features';
    const specsTitle = currentLang === 'ar' ? '«·„Ê«’›«  «·›‰Ì…' : 'Technical Specifications';

    document.title = productName + (currentLang === 'ar' ? ' - ≈”‰«œ' : ' - ESNAD'); //  ÕœÌÀ ⁄‰Ê«‰ «·„ ’›Õ

    productDetailContainer.innerHTML = `
        <div class="product-detail-card animate__animated animate__fadeIn">
            <img src="${product.image}" alt="${productName}" class="product-detail-image">
            <h1 class="product-detail-title">${productName}</h1>
            <p class="product-detail-description">${productDescription}</p>

            <div class="product-features">
                <h2>${featuresTitle}</h2>
                <ul>${featuresList}</ul>
            </div>

            <div class="product-specs">
                <h2>${specsTitle}</h2>
                <ul>${specsList}</ul>
            </div>

            <a href="${product[`downloadLink_${currentLang}`] || product.downloadLink_ar}" target="_blank" class="button download-button-large">${downloadText}</a>
        </div>
    `;
}

// *** Translations Object - ﬂ«∆‰ «· —Ã„«  („‰ﬁÊ· „‰ index.html · ‰ŸÌ„ √›÷·) ***
// ÌÃ» √‰ ÌﬂÊ‰ Â–« «·ﬂ«∆‰ „ «Õ« ⁄«·„Ì«
const translations = {
    ar: {
        homeTitle: "«·—∆Ì”Ì… - ≈”‰«œ",
        productsTitle: "„‰ Ã« ‰« - ≈”‰«œ",
        navHome: "«·—∆Ì”Ì…",
        navProducts: "«·„‰ Ã« ",
        navAllProducts: "ﬂ· «·„‰ Ã« ",
        navAirDucts: "„Ã«—Ì «·ÂÊ«¡",
        navAirOutlets: "„Œ«—Ã «·ÂÊ«¡",
        navDampers: "«·œ„»—« ",
        navProjects: "«·„‘«—Ì⁄",
        navServices: "«·Œœ„« ",
        navAbout: "⁄‰ «·‘—ﬂ…",
        navContact: "« ’· »‰«",
        heroTitle: "Õ·Ê· „» ﬂ—… ›Ì „Ã«· «· ﬂÌÌ› Ê«· ÂÊÌ…",
        heroText: "‰ﬁœ„ √ÕœÀ «· ﬁ‰Ì«  Ê«·Õ·Ê· «·Â‰œ”Ì… · ·»Ì… «Õ Ì«Ã« ﬂ„.",
        heroButton: "«ﬂ ‘› „‘«—Ì⁄‰«",
        featuredProductsTitle: "√ÕœÀ «·„‰ Ã« ",
        viewAllProductsButton: "⁄—÷ Ã„Ì⁄ «·„‰ Ã« ",
        aboutUsTitle: "⁄‰ ‘—ﬂ ‰«",
        aboutUsText: "‰Õ‰ ‘—ﬂ… ≈”‰«œ° —Ê«œ ›Ì  ’„Ì„ Ê ’‰Ì⁄ Ê —ﬂÌ» √‰Ÿ„… «· ﬂÌÌ› Ê«· ÂÊÌ… ⁄«·Ì… «·ÃÊœ…. ‰· “„ » ﬁœÌ„ Õ·Ê· „» ﬂ—… Ê›⁄«·…  ·»Ì «Õ Ì«Ã«  ⁄„·«∆‰« «·„ €Ì—…° „⁄ «· —ﬂÌ“ ⁄·Ï «·ﬂ›«¡… «· ‘€Ì·Ì… Ê«·«” œ«„… «·»Ì∆Ì….",
        readMoreButton: "«ﬁ—√ «·„“Ìœ",
        ourServicesTitle: "Œœ„« ‰«",
        service1Title: " ’„Ì„ √‰Ÿ„… «· ﬂÌÌ›",
        service1Text: "‰ﬁœ„ Œœ„«   ’„Ì„ „ ﬂ«„·… ·√‰Ÿ„… «· ﬂÌÌ› «·„—ﬂ“Ì Ê«·„ﬁ«”„ «·ÂÊ«∆Ì…° ·÷„«‰ √›÷· √œ«¡ Êﬂ›«¡….",
        service2Title: " ’‰Ì⁄ „Ã«—Ì «·ÂÊ«¡",
        service2Text: "„ Œ’’Ê‰ ›Ì  ’‰Ì⁄ „Ã«—Ì «·ÂÊ«¡ »√⁄·Ï „⁄«ÌÌ— «·ÃÊœ… „‰ «·’·» «·„Ã·›‰ Ê«·” «‰·” ” Ì· Ê«·√·Ê„‰ÌÊ„.",
        service3Title: " —ﬂÌ» Ê’Ì«‰…",
        service3Text: "Œœ„«   —ﬂÌ» Ê’Ì«‰… «Õ —«›Ì… ·Ã„Ì⁄ √‰Ÿ„… «· ÂÊÌ… Ê«· ﬂÌÌ› ·÷„«‰ «· ‘€Ì· «·√„À·.",
        discoverServicesButton: "«ﬂ ‘› Œœ„« ‰«",
        contactUsFooter: " Ê«’· „⁄‰«",
        footerAddress: "»«”ÿÊ” «·ﬁ‰«ÿ— «·ŒÌ—Ì…° «·ﬁ·ÌÊ»Ì…° „’—",
        quickLinksFooter: "—Ê«»ÿ ”—Ì⁄…",
        navHomeFooter: "«·—∆Ì”Ì…",
        navServicesFooter: "«·Œœ„« ",
        navProjectsFooter: "„‘«—Ì⁄‰«",
        navAboutFooter: "⁄‰ «·‘—ﬂ…",
        navContactFooter: "« ’· »‰«",
        ourLocationFooter: "„Êﬁ⁄‰« ⁄·Ï «·Œ—Ìÿ…",
        copyrightFooter: "© 2025 ≈”‰«œ. Ã„Ì⁄ «·ÕﬁÊﬁ „Õ›ÊŸ….",
        filterAll: "«·ﬂ·", // For products.html filter
        filterAirDucts: "„Ã«—Ì «·ÂÊ«¡",
        filterAirOutlets: "„Œ«—Ã «·ÂÊ«¡",
        filterDampers: "«·œ„»—« ",
        viewDetailsButton: "⁄—÷ «· ›«’Ì·", // For featured products in index.html
        productDetailTitle: " ›«’Ì· «·„‰ Ã", // For product-detail.html
        downloadSpecs: " Õ„Ì· «·„Ê«’›«  (PDF)", // For product-detail.html
        keyFeatures: "«·„Ì“«  «·—∆Ì”Ì…", // For product-detail.html
        technicalSpecs: "«·„Ê«’›«  «·›‰Ì…", // For product-detail.html
        noProductsMessage: "·«  ÊÃœ „‰ Ã«  ·⁄—÷Â« ›Ì Â–Â «·›∆….",
        productNotFound: "⁄–—«° ·„ Ì „ «·⁄ÀÊ— ⁄·Ï «·„‰ Ã «·„ÿ·Ê»."
    },
    en: {
        homeTitle: "Home - ESNAD",
        productsTitle: "Our Products - ESNAD",
        navHome: "Home",
        navProducts: "Products",
        navAllProducts: "All Products",
        navAirDucts: "Air Ducts",
        navAirOutlets: "Air Outlets",
        navDampers: "Dampers",
        navProjects: "Projects",
        navServices: "Services",
        navAbout: "About Us",
        navContact: "Contact Us",
        heroTitle: "Innovative HVAC Solutions",
        heroText: "We offer the latest technologies and engineering solutions to meet your needs.",
        heroButton: "Discover Our Projects",
        featuredProductsTitle: "Latest Products",
        viewAllProductsButton: "View All Products",
        aboutUsTitle: "About Our Company",
        aboutUsText: "We are ESNAD, leaders in designing, manufacturing, and installing high-quality HVAC systems. We are committed to providing innovative and effective solutions that meet our clients' evolving needs, focusing on operational efficiency and environmental sustainability.",
        readMoreButton: "Read More",
        ourServicesTitle: "Our Services",
        service1Title: "HVAC System Design",
        service1Text: "We offer integrated design services for central air conditioning and air handling units, ensuring optimal performance and efficiency.",
        service2Title: "Ductwork Manufacturing",
        service2Text: "Specialists in manufacturing high-quality ductwork from galvanized steel, stainless steel, and aluminum.",
        service3Title: "Installation & Maintenance",
        service3Text: "Professional installation and maintenance services for all ventilation and air conditioning systems to ensure optimal operation.",
        discoverServicesButton: "Discover Our Services",
        contactUsFooter: "Contact Us",
        footerAddress: "Basos Al-Qanater Al-Khariia, Qalyubia, Egypt",
        quickLinksFooter: "Quick Links",
        navHomeFooter: "Home",
        navServicesFooter: "Services",
        navProjectsFooter: "Projects",
        navAboutFooter: "About Us",
        navContactFooter: "Contact Us",
        ourLocationFooter: "Our Location on Map",
        copyrightFooter: "© 2025 ESNAD. All Rights Reserved.",
        filterAll: "All", // For products.html filter
        filterAirDucts: "Air Ducts",
        filterAirOutlets: "Air Outlets",
        filterDampers: "Dampers",
        viewDetailsButton: "View Details", // For featured products in index.html
        productDetailTitle: "Product Details", // For product-detail.html
        downloadSpecs: "Download Specs (PDF)", // For product-detail.html
        keyFeatures: "Key Features", // For product-detail.html
        technicalSpecs: "Technical Specifications", // For product-detail.html
        noProductsMessage: "No products to display in this category.",
        productNotFound: "Sorry, the requested product was not found."
    }
};

let currentLang = localStorage.getItem('currentLang') || 'ar'; // Get lang from localStorage or default to 'ar'

// Function to apply translations
function applyTranslations() {
    document.querySelectorAll('[data-lang-key]').forEach(element => {
        const key = element.getAttribute('data-lang-key');
        if (translations[currentLang] && translations[currentLang][key]) {
            element.textContent = translations[currentLang][key];
        }
    });

    // Update title
    const titleElement = document.querySelector('title');
    if (titleElement) {
        const titleKey = titleElement.getAttribute('data-lang-key');
        if (translations[currentLang] && translations[currentLang][titleKey]) {
            titleElement.textContent = translations[currentLang][titleKey];
        }
    }


    // Update HTML lang and dir attributes
    document.documentElement.lang = currentLang;
    document.documentElement.dir = (currentLang === 'ar') ? 'rtl' : 'ltr';

    // Update text alignment for body (if not already handled by CSS based on dir)
    // Removed specific body text-align as CSS rules handle it based on html[dir]

    // Update active language button
    document.getElementById('lang-ar')?.classList.remove('active');
    document.getElementById('lang-en')?.classList.remove('active');
    document.getElementById(`lang-${currentLang}`)?.classList.add('active');

    // Re-display products or featured products to apply language-specific product names/descriptions
    // This is called conditionally based on the page context
    if (document.getElementById('featuredProductsGrid') && typeof displayFeaturedProducts !== 'undefined') {
        displayFeaturedProducts(productsData, document.getElementById('featuredProductsGrid'));
    }
    if (document.getElementById('productsGrid') && typeof filterAndDisplayProducts !== 'undefined') {
        // Re-apply current category filter to refresh product display with new language
        const urlParams = new URLSearchParams(window.location.search);
        const initialCategory = urlParams.get('category') || 'all';
        filterAndDisplayProducts(initialCategory);
    }
    if (document.getElementById('productDetailContainer')) {
        const urlParams = new URLSearchParams(window.location.search);
        const productId = urlParams.get('id');
        if (productId) {
            displayProductDetail(productId);
        }
    }
}

// Event listeners for language switcher buttons (null check for other pages)
document.getElementById('lang-ar')?.addEventListener('click', () => {
    currentLang = 'ar';
    localStorage.setItem('currentLang', 'ar');
    applyTranslations();
});

document.getElementById('lang-en')?.addEventListener('click', () => {
    currentLang = 'en';
    localStorage.setItem('currentLang', 'en');
    applyTranslations();
});


// Initial page load logic
document.addEventListener('DOMContentLoaded', () => {
    applyTranslations(); // Apply initial translation on load

    // For products.html
    const productsGrid = document.getElementById('productsGrid');
    if (productsGrid) {
        const urlParams = new URLSearchParams(window.location.search);
        const initialCategory = urlParams.get('category') || 'all';

        const filterTabs = document.querySelectorAll('.products-filter-tabs .filter-tab');
        filterTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                filterTabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                const category = tab.dataset.category;
                filterAndDisplayProducts(category);
                history.pushState(null, '', `products.html?category=${category}`); // Update URL without reload
            });
        });

        // Activate the correct filter tab on initial load
        const activeTab = document.querySelector(`.products-filter-tabs .filter-tab[data-category="${initialCategory}"]`);
        if (activeTab) {
            activeTab.classList.add('active');
        } else {
            // Default to 'all' if category not found or no category specified
            document.querySelector('.products-filter-tabs .filter-tab[data-category="all"]')?.classList.add('active');
        }
        filterAndDisplayProducts(initialCategory); // Display products based on initial category
    }

    // For product-detail.html
    const productDetailContainer = document.getElementById('productDetailContainer');
    if (productDetailContainer) {
        const urlParams = new URLSearchParams(window.location.search);
        const productId = urlParams.get('id');
        displayProductDetail(productId);
    }

    // If on index.html, display featured products (already handled by applyTranslations in index.html, but good to ensure)
    if (document.getElementById('featuredProductsGrid')) {
        // This part is handled by the script tag directly in index.html after the translations object,
        // but keeping it here for consistency if moved entirely to script.js
        // displayFeaturedProducts(productsData, document.getElementById('featuredProductsGrid'));
    }
});

// Helper function for index.html (if needed here, otherwise keep in index.html script tag)
// This function needs to be global or passed if used in index.html directly
function displayFeaturedProducts(products, containerElement) {
    containerElement.innerHTML = ''; // Clear any previous content

    const productsToShow = products.slice(0, 3); // Display only the first 3 products
    const currentLang = document.documentElement.lang || 'ar'; // Get current language

    productsToShow.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card', 'animate__animated', 'animate__fadeInUp');

        const imageUrl = product.image || `https://via.placeholder.com/300x200/1E2B38/E67E22?text=${encodeURIComponent(product[`name_${currentLang}`] || product.name_ar)}`;
        const productName = product[`name_${currentLang}`] || product.name_ar;
        const productDescription = product[`description_${currentLang}`] || product.description_ar;
        const viewDetailsText = translations[currentLang]?.viewDetailsButton || '⁄—÷ «· ›«’Ì·';

        productCard.innerHTML = `
            <img src="${imageUrl}" alt="${productName}">
            <h3>${productName}</h3>
            <p>${productDescription.substring(0, 100)}...</p>
            <a href="product-detail.html?id=${product.id}" class="view-details">${viewDetailsText}</a>
        `;
        containerElement.appendChild(productCard);
    });
}


// Placeholder for projectsData (if needed on projects.html)
// For projects.html, similar bilingual structure will be needed.
const projectsData = [
    {
        id: 'project1',
        category: 'commercial',
        name_ar: '„‘—Ê⁄ »—Ã «·√⁄„«· «·ÕœÌÀ',
        name_en: 'Modern Business Tower Project',
        image: 'https://via.placeholder.com/800x600/E67E22/1E2B38?text=Project+1',
        description_ar: ' ’„Ì„ Ê —ﬂÌ» √‰Ÿ„…  ﬂÌÌ› Ê ÂÊÌ… „ ﬂ«„·… ·»—Ã  Ã«—Ì „ ⁄œœ «·ÿÊ«»ﬁ° Ì÷„ „ﬂ« » Ê„”«Õ«   Ã“∆….',
        description_en: 'Design and installation of integrated HVAC systems for a multi-story commercial tower, including offices and retail spaces.'
    },
    {
        id: 'project2',
        category: 'residential',
        name_ar: '„Ã„⁄ ›Ì·«  ”ﬂ‰Ì… ›«Œ—…',
        name_en: 'Luxury Residential Villas Complex',
        image: 'https://via.placeholder.com/800x600/E67E22/1E2B38?text=Project+2',
        description_ar: ' ‰›Ì– Õ·Ê·  ﬂÌÌ› „—ﬂ“Ì… Ê√‰Ÿ„… „Ã«—Ì ÂÊ«¡ „Œ’’… ·„Ã„⁄ ”ﬂ‰Ì Ì÷„ 50 ›Ì·« ›«Œ—…° „⁄ «· —ﬂÌ“ ⁄·Ï ﬂ›«¡… «·ÿ«ﬁ… Ê«·—«Õ….',
        description_en: 'Implementation of central air conditioning solutions and custom ductwork systems for a residential complex of 50 luxury villas, with a focus on energy efficiency and comfort.'
    },
    {
        id: 'project3',
        category: 'industrial',
        name_ar: ' ÕœÌÀ „’‰⁄ ··„Ê«œ «·€–«∆Ì…',
        name_en: 'Food Processing Plant Upgrade',
        image: 'https://via.placeholder.com/800x600/E67E22/1E2B38?text=Project+3',
        description_ar: ' ÃœÌœ ‘«„· ·√‰Ÿ„… «· ÂÊÌ… Ê«· Õﬂ„ ›Ì «·„‰«Œ ·„’‰⁄ ﬂ»Ì— ··„Ê«œ «·€–«∆Ì…° »„« Ì÷„‰  ·»Ì… √⁄·Ï „⁄«ÌÌ— «·‰Ÿ«›… Ê«·ÃÊœ….',
        description_en: 'Comprehensive renovation of ventilation and climate control systems for a large food processing plant, ensuring compliance with the highest hygiene and quality standards.'
    },
    {
        id: 'project4',
        category: 'commercial',
        name_ar: '„—ﬂ“  ”Êﬁ «·ÃÊÂ—…',
        name_en: 'Al-Jauhara Shopping Mall',
        image: 'https://via.placeholder.com/800x600/E67E22/1E2B38?text=Project+4',
        description_ar: ' —ﬂÌ» √‰Ÿ„…  ﬂÌÌ› „—ﬂ“Ì „ ÿÊ—… ·„Ê·  Ã«—Ì ÷Œ„° „⁄ „—«⁄«… «·„‰«ÿﬁ «·„Œ ·›… „À· «·„ «Ã—° «·„ÿ«⁄„° ÊœÊ— «·”Ì‰„«.',
        description_en: 'Installation of advanced central air conditioning systems for a massive shopping mall, considering different areas such as shops, restaurants, and cinemas.'
    },
    {
        id: 'project5',
        category: 'hospital',
        name_ar: '„” ‘›Ï «·√„· «·ÃœÌœ',
        name_en: 'New Al-Amal Hospital',
        image: 'https://via.placeholder.com/800x600/E67E22/1E2B38?text=Project+5',
        description_ar: ' ’„Ì„ Ê Ê—Ìœ Ê —ﬂÌ» √‰Ÿ„… HVAC Œ«’… »«·„” ‘›Ì« ° »„« ›Ì –·ﬂ €—› «·⁄„·Ì«  ÊÊÕœ«  «·⁄‰«Ì… «·„—ﬂ“…° „⁄ ›·« — ÂÊ«¡ ⁄«·Ì… «·ﬂ›«¡….',
        description_en: 'Design, supply, and installation of specialized hospital HVAC systems, including operating rooms and intensive care units, with high-efficiency air filters.'
    }
];

// ÊŸÌ›… ·⁄—÷ «·„‘«—Ì⁄ ›Ì «·‘»ﬂ… (Projects Page)
function displayProjects(projects) {
    const projectsGrid = document.getElementById('projectsGrid');
    if (!projectsGrid) return; // Exit if not on projects.html

    projectsGrid.innerHTML = ''; // Clear previous content

    const currentLang = document.documentElement.lang || 'ar'; // Get current language

    if (projects.length === 0) {
        projectsGrid.innerHTML = `<p class="no-projects-message">${currentLang === 'ar' ? '·«  ÊÃœ „‘«—Ì⁄ ·⁄—÷Â« ›Ì Â–Â «·›∆….' : 'No projects to display in this category.'}</p>`;
        return;
    }

    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card', 'animate__animated', 'animate__fadeInUp');

        const projectName = project[`name_${currentLang}`] || project.name_ar;
        const projectDescription = project[`description_${currentLang}`] || project.description_ar;
        const viewDetailsText = currentLang === 'ar' ? '⁄—÷ «· ›«’Ì·' : 'View Details'; // Or link to a project-detail.html if implemented

        projectCard.innerHTML = `
            <img src="${project.image}" alt="${projectName}">
            <h3>${projectName}</h3>
            <p>${projectDescription.substring(0, 150)}...</p>
            <a href="#" class="button view-project-button">${viewDetailsText}</a>
        `;
        projectsGrid.appendChild(projectCard);
    });
}

// ÊŸÌ›… · ÕœÌÀ ⁄‰Ê«‰ ’›Õ… «·„‘«—Ì⁄
function updateProjectPageTitle(category) {
    const defaultTitle_ar = '„‘«—Ì⁄‰« - ≈”‰«œ';
    const defaultTitle_en = 'Our Projects - ESNAD';
    let newTitle_ar = defaultTitle_ar;
    let newTitle_en = defaultTitle_en;

    const currentLang = document.documentElement.lang || 'ar';

    if (category === 'commercial') {
        newTitle_ar = '«·„‘«—Ì⁄ «· Ã«—Ì… - ≈”‰«œ';
        newTitle_en = 'Commercial Projects - ESNAD';
    } else if (category === 'residential') {
        newTitle_ar = '«·„‘«—Ì⁄ «·”ﬂ‰Ì… - ≈”‰«œ';
        newTitle_en = 'Residential Projects - ESNAD';
    } else if (category === 'industrial') {
        newTitle_ar = '«·„‘«—Ì⁄ «·’‰«⁄Ì… - ≈”‰«œ';
        newTitle_en = 'Industrial Projects - ESNAD';
    } else if (category === 'hospital') {
        newTitle_ar = '„‘«—Ì⁄ «·„” ‘›Ì«  - ≈”‰«œ';
        newTitle_en = 'Hospital Projects - ESNAD';
    }

    document.title = (currentLang === 'ar') ? newTitle_ar : newTitle_en;
}

// ÊŸÌ›…  ’›Ì… «·„‘«—Ì⁄ Ê⁄—÷Â«
function filterAndDisplayProjects(selectedCategory) {
    const filterTabs = document.querySelectorAll('.projects-grid-section .filter-tab');
    const projectsGridSection = document.querySelector('.projects-grid-section');

    // Only run if on projects.html
    if (projectsGridSection) {
        const filteredProjects = selectedCategory === 'all'
            ? projectsData
            : projectsData.filter(project => project.category === selectedCategory);

        displayProjects(filteredProjects);
        updateProjectPageTitle(selectedCategory);

        // Update filter tabs active state
        filterTabs.forEach(t => t.classList.remove('active'));
        document.querySelector(`.projects-grid-section .filter-tab[data-category="${selectedCategory}"]`)?.classList.add('active');
    }
}

// „⁄«·Ã…  Õ„Ì· ’›Õ… «·„‘«—Ì⁄ »‰«¡ ⁄·Ï „⁄«„· URL
document.addEventListener('DOMContentLoaded', () => {
    const projectsGridSection = document.querySelector('.projects-grid-section');
    if (projectsGridSection) {
        const urlParams = new URLSearchParams(window.location.search);
        const initialCategory = urlParams.get('category') || 'all';

        const filterTabs = document.querySelectorAll('.projects-grid-section .filter-tab');
        filterTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const category = tab.dataset.category;
                filterAndDisplayProjects(category);
                history.pushState(null, '', `projects.html?category=${category}`);
            });
        });

        // Initial display and tab activation for projects.html
        filterAndDisplayProjects(initialCategory);
    }
});