// ������ ��������
// �� ����� ��� �������� ����� ����� ������ ������ �������� �������� ������� �����������.
const productsData = [
    {
        id: 'square-ducts',
        category: 'air-ducts',
        name_ar: '����� ���� �����',
        name_en: 'Square Air Ducts',
        description_ar: '����� ���� ����� ������ɡ ����� ��������� �������� ��������� ���� ����� ���� ���� ����. ����� �� ���� ����� ����� ����� ������� �� �������� ���� ����� ������ ����� ������ ���� ������� ����. ������ �� ���� ������ ������ ��������.',
        description_en: 'Durable and high-efficiency design, ideal for commercial and industrial applications requiring large airflow. Made from the finest galvanized steel or stainless steel sheets, providing high corrosion resistance and a long lifespan. Complies with the highest quality and safety standards.',
        image: 'https://via.placeholder.com/800x600/1E2B38/E67E22?text=Ducting+Square+Detail',
        features_ar: [
            '������ �� ����� ������� ���� ������ �� �������� ����.',
            '����� ���� ���� �� ���� ������.',
            '���� ������� ��������.',
            '������ ������ ������� ����� ������ �������� �������.',
            '������ ������ ������.'
        ],
        features_en: [
            'Made from high-quality galvanized steel or stainless steel.',
            'Sealed design reduces air leakage.',
            'Easy to install and maintain.',
            'Available in custom dimensions and sizes to suit project needs.',
            'Corrosion and rust resistant.'
        ],
        specs_ar: {
            '������': '����� ������� / �������� ����',
            '�������': '��� ��������� ������ ��������',
            '�������': '����� (�����/�������)',
            '���������': '������� �������� ��������ɡ ���������ʡ �������.'
        },
        specs_en: {
            'Material': 'Galvanized Steel / Stainless Steel',
            'Thickness': 'As per technical specifications',
            'Dimensions': 'Custom (Square/Rectangular)',
            'Applications': 'Commercial and industrial buildings, hospitals, schools.'
        },
        downloadLink_ar: 'ESNAD air outlets submittal.pdf', // ���� ��� ��� PDF �������
        downloadLink_en: 'ESNAD air outlets submittal.pdf'  // ���� ��� ��� PDF ���������� (���� �� ���� ��� ����� ��� ��� ����� �����)
    },
    {
        id: 'round-ducts',
        category: 'air-ducts',
        name_ar: '����� ���� ������',
        name_en: 'Round Air Ducts',
        description_ar: '������� ����� ������ �������� �� ������� ���� ����� ���� ���� ��� ������� �����ɡ ��� ���� ����� ���� �����. ������� ������ ������ ������ ������� ������ �� ��� ��������. ������ ������ �������� ������.',
        description_en: 'Round air ducts are used in systems requiring smooth airflow and low resistance, providing high energy efficiency. Their sleek design makes them suitable for exposed installations in some projects. Available in various diameters and specifications.',
        image: 'https://via.placeholder.com/800x600/1E2B38/E67E22?text=Ducting+Round+Detail',
        features_ar: [
            '����� ������� ������ ����� �����.',
            '���� ������� ��������.',
            '������ ��������� ������� ���� �������.',
            '���� ���� ������ ������� �������.',
            '��� ����� ����� ����.'
        ],
        features_en: [
            'Streamlined design to reduce pressure loss.',
            'Easy to clean and maintain.',
            'Suitable for visible and concealed installations.',
            'Provides the highest standards of cleanliness and quality.',
            'Effective thermal and acoustic insulation.'
        ],
        specs_ar: {
            '������': '����� ������� / ����������',
            '�������': '�� 100 �� ��� 1200 ��',
            '���������': '������� ������ȡ ������� ������� �������.'
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
        name_ar: '����� ���� ����',
        name_en: 'Flexible Air Ducts',
        description_ar: '����� ������ ������ ������ ������� �������� ��� ����� ������ �������� ������ ������� ����� ����� �� ������� �������� ��� �������. ������ ������ ������ ���� ������ ����� ����� ������.',
        description_en: 'Flexible air ducts are ideal for final connections between main ducts and air outlets, offering easy installation and routing around obstacles. Available in insulated and non-insulated types to ensure system efficiency.',
        image: 'https://via.placeholder.com/800x600/1E2B38/E67E22?text=Ducting+Flexible+Detail',
        features_ar: [
            '����� ����� ������ �� �������.',
            '������ ���� ����� ����� �����.',
            '������ ����� �������� ���������.',
            '������ �������� ������ �� ������� ��� ������� ������.',
            '����� ���� ����.'
        ],
        features_en: [
            'High flexibility and easy shaping.',
            'Available with excellent thermal and acoustic insulation.',
            'Resistant to bacterial and fungal growth.',
            'Ideal for confined spaces or complex layouts.',
            'Quick and easy installation.'
        ],
        specs_ar: {
            '������': '���������� ������ ���� ������ / ���������',
            '�������': '�� 4 ���� ��� 20 ����',
            '���������': '����� ������� �������ɡ ����� ������� ������� �������� ������.'
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
        name_ar: '������ ���� ���� (Linear Slot Diffusers)',
        name_en: 'Linear Slot Diffusers',
        description_ar: '����� ������ ����� ������ ������ǡ ����� ������ �� �� ����� �����. ���� ������� ������ ������ �� ������ ��� ������ ������. ����� ������ȡ ������ޡ ��������� �������� �������.',
        description_en: 'Offers a sleek and modern linear diffuser, blending seamlessly with any interior design. Provides uniform air distribution while maintaining aesthetic appeal. Ideal for offices, hotels, and upscale commercial spaces.',
        image: 'https://via.placeholder.com/800x600/1E2B38/E67E22?text=Linear+Slot+Diffusers',
        features_ar: [
            '����� ���� �� ���� ����� �� �����.',
            '���� ���� ���� �������.',
            '����� ������ ������ ������ ������� �������.',
            '������ �� ���������� ���� ������.',
            '������ ������ ������.'
        ],
        features_en: [
            'Concealed or exposed design that blends with the ceiling.',
            'Adjustable airflow.',
            'Available in multiple lengths to suit design requirements.',
            'Made of high-quality aluminum.',
            'Corrosion and rust resistant.'
        ],
        specs_ar: {
            '������': '���������� �������',
            '�������': '1-8 �����',
            '�������': '���� ������������� (����� ��� �����)'
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
        name_ar: '������',
        name_en: 'Grilles',
        description_ar: '������ ������� ����� ������ ���� ���� ���� �� ���� ����. ������ ������ ������� ������ ������ ���� ��������ʡ �� ������� ��� ��������. ���� ������� ������� ������ ������ �������.',
        description_en: 'Ventilation grilles are designed to provide efficient airflow with an attractive appearance. Available in various sizes and designs to suit all applications, from residential to industrial. Ensures optimal air distribution and noise reduction.',
        image: 'https://via.placeholder.com/800x600/1E2B38/E67E22?text=Grilles',
        features_ar: [
            '������ ������� ������ (����ɡ ������ �������ݡ ������).',
            '����� �� ���������� �� �����.',
            '����� �� ������� ��������.',
            '������ ������� ������ �������.',
            '���� ������� ����� �����.'
        ],
        features_en: [
            'Available in multiple designs (single deflection, double deflection, egg crate).',
            'Manufactured from aluminum or steel.',
            'Easy to install and maintain.',
            'Weather and corrosion resistant.',
            'Scratch-resistant polyester coating.'
        ],
        specs_ar: {
            '������': '���������� / �����',
            '�������': '����� ������ ������',
            '���������': '����� ���� ������� �������ɡ ������ ����� �������.'
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
        name_ar: '������ ������ �� ��� ������ (VCD)',
        name_en: 'Volume Control Dampers (VCD)',
        description_ar: '������� ������ ������ �� ��� ������ ���� ������ ���� ������ ���� ���� ������� �������� ����. ���� ������ ������ �� ���� ������� ����� ������� ������ �������� ����� �� ����.',
        description_en: 'Volume control dampers are used to precisely adjust and distribute airflow within HVAC systems. They ensure optimal temperature and air quality control, and are available in manual or automated designs.',
        image: 'https://via.placeholder.com/800x600/1E2B38/E67E22?text=VCD',
        features_ar: [
            '���� ���� �� ���� ������.',
            '������ �� ���������� �� ����� �������.',
            '������ ������ ������� �� �������.',
            '���� ������� ������.',
            '������ ����� ����� �������.'
        ],
        features_en: [
            'Precise control over airflow.',
            'Made from aluminum or galvanized steel.',
            'Available with parallel or opposed blades.',
            'Easy to install and adjust.',
            'High resistance to pressure and corrosion.'
        ],
        specs_ar: {
            '������': '���������� / ����� �������',
            '�������': '���� / �������',
            '�������': '����� ������ ������'
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
        name_ar: '������ ������ (Fire Dampers)',
        name_en: 'Fire Dampers',
        description_ar: '������ ������ �� ������ ������ ������ ������� �� �����ޡ �������� ������ ����� ������ �������� ��� ������ ���� ���� ������ ������ ������ ��� ����� ������ ��������. ������ �� ������ ������� �������.',
        description_en: 'Fire dampers are essential components of fire safety systems, used to automatically close air ducts upon fire detection to prevent the spread of smoke and fire between different building areas. Complies with international safety standards.',
        image: 'https://via.placeholder.com/800x600/1E2B38/E67E22?text=Fire+Dampers',
        features_ar: [
            '����� ������ ��� ������ ���� �������.',
            '������ �� ���� ������ ������.',
            '������ �������� ������ ������ ������ (�����).',
            '����� �� ����� ��������.',
            '������� �� ��� ������ ������� ������ ������.'
        ],
        features_en: [
            'Automatic closure upon temperature increase.',
            'Made from fire-resistant materials.',
            'Available in various fire resistance ratings (hours).',
            'Easy to inspect and maintain.',
            'Compliant with building codes and civil defense standards.'
        ],
        specs_ar: {
            '������': '����� ������� ������� ������',
            '�������': '���� ����� (Fusible Link)',
            '�������': '1.5 ���� / 3 �����'
        },
        specs_en: {
            'Material': 'Fire-rated Galvanized Steel',
            'Operation': 'Fusible Link',
            'Rating': '1.5 hours / 3 hours'
        },
        downloadLink_ar: 'ESNAD air outlets submittal.pdf',
        downloadLink_en: 'ESNAD air outlets submittal.pdf'
    }
    // ����� ����� ������ �� �������� ��� ���� ������� ����� �����
];

// ���� ������ ����� ������ ����� ��� ����� ��������
function updatePageTitle(category) {
    const defaultTitle_ar = '�������� - �����';
    const defaultTitle_en = 'Our Products - ESNAD';
    let newTitle_ar = defaultTitle_ar;
    let newTitle_en = defaultTitle_en;

    const currentLang = document.documentElement.lang || 'ar'; // Get current language

    if (category === 'air-ducts') {
        newTitle_ar = '����� ������ - �����';
        newTitle_en = 'Air Ducts - ESNAD';
    } else if (category === 'air-outlets') {
        newTitle_ar = '����� ������ - �����';
        newTitle_en = 'Air Outlets - ESNAD';
    } else if (category === 'dampers') {
        newTitle_ar = '�������� - �����';
        newTitle_en = 'Dampers - ESNAD';
    }

    document.title = (currentLang === 'ar') ? newTitle_ar : newTitle_en;
}

// Mobile Menu Toggle (������ ������)
const mobileMenu = document.getElementById('mobile-menu');
const mainNavUl = document.querySelector('.main-nav ul');
const dropdownLinks = document.querySelectorAll('.main-nav .dropdown > a'); // ������� �������� ������� ��������

if (mobileMenu) {
    mobileMenu.addEventListener('click', () => {
        mainNavUl.classList.toggle('active');
        mobileMenu.querySelector('i').classList.toggle('fa-bars');
        mobileMenu.querySelector('i').classList.toggle('fa-times');
        // ����� �� ����� ������ ������ ��� ����� ������� ��������
        if (!mainNavUl.classList.contains('active')) {
            document.querySelectorAll('.main-nav .dropdown').forEach(d => d.classList.remove('active'));
        }
    });
}

// Toggle dropdown on click for mobile
dropdownLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        // ��� ���� ������ ����� (��� �� �� ����� 992px)
        if (window.innerWidth <= 992) {
            e.preventDefault(); // ��� ���� ������ ���������
            const parentDropdown = link.closest('.dropdown');
            parentDropdown.classList.toggle('active'); // ����� ��� 'active' ��� ������ ���� (.dropdown)
        }
    });
});


// ����� ���� �������� �� ������
function displayProducts(products, containerElement) {
    containerElement.innerHTML = ''; // ��� �� ����� ����

    const currentLang = document.documentElement.lang || 'ar'; // Get current language

    if (products.length === 0) {
        containerElement.innerHTML = `<p class="no-products-message">${currentLang === 'ar' ? '�� ���� ������ ������ �� ��� �����.' : 'No products to display in this category.'}</p>`;
        return;
    }

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card', 'animate__animated', 'animate__fadeInUp');

        const imageUrl = product.image || `https://via.placeholder.com/300x200/1E2B38/E67E22?text=${encodeURIComponent(product[`name_${currentLang}`] || product.name_ar)}`;

        // ������� ������ ������ �������
        const productName = product[`name_${currentLang}`] || product.name_ar;
        const productDescription = product[`description_${currentLang}`] || product.description_ar;
        const downloadText = currentLang === 'ar' ? '����� ��������� (PDF)' : 'Download Specs (PDF)';
        const viewDetailsText = currentLang === 'ar' ? '��� ��������' : 'View Details';

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

// ����� ������ �������� ������
function filterAndDisplayProducts(selectedCategory) {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) {
        // ��� ���� ���� ���� �� ���� products.html� ���� index.html
        // ���� ���� displayFeaturedProducts �� index.html ����� ������ �����.
        return;
    }

    const filteredProducts = selectedCategory === 'all'
        ? productsData
        : productsData.filter(product => product.category === selectedCategory);

    displayProducts(filteredProducts, productsGrid);
    updatePageTitle(selectedCategory); // ����� ����� ������
}

// ����� ���� ������ ������ ����� ��� ��� ID �� ���� product-detail.html (��� ���� ������)
function displayProductDetail(productId) {
    const product = productsData.find(p => p.id === productId);
    const productDetailContainer = document.getElementById('productDetailContainer');

    if (!product || !productDetailContainer) {
        if (productDetailContainer) {
            productDetailContainer.innerHTML = `<p class="error-message">${document.documentElement.lang === 'ar' ? '����� �� ��� ������ ��� ������ �������.' : 'Sorry, the requested product was not found.'}</p>`;
        }
        return;
    }

    const currentLang = document.documentElement.lang || 'ar'; // Get current language

    // ������� ������ ������ ������� ���� ��������
    const productName = product[`name_${currentLang}`] || product.name_ar;
    const productDescription = product[`description_${currentLang}`] || product.description_ar;
    const featuresList = (product[`features_${currentLang}`] || product.features_ar).map(feature => `<li>${feature}</li>`).join('');
    const specsList = Object.entries(product[`specs_${currentLang}`] || product.specs_ar)
        .map(([key, value]) => `<li><strong>${key}:</strong> ${value}</li>`)
        .join('');

    const downloadText = currentLang === 'ar' ? '����� ��������� (PDF)' : 'Download Specs (PDF)';
    const featuresTitle = currentLang === 'ar' ? '������� ��������' : 'Key Features';
    const specsTitle = currentLang === 'ar' ? '��������� ������' : 'Technical Specifications';

    document.title = productName + (currentLang === 'ar' ? ' - �����' : ' - ESNAD'); // ����� ����� �������

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

// *** Translations Object - ���� �������� (����� �� index.html ������ ����) ***
// ��� �� ���� ��� ������ ������ �������
const translations = {
    ar: {
        homeTitle: "�������� - �����",
        productsTitle: "�������� - �����",
        navHome: "��������",
        navProducts: "��������",
        navAllProducts: "�� ��������",
        navAirDucts: "����� ������",
        navAirOutlets: "����� ������",
        navDampers: "��������",
        navProjects: "��������",
        navServices: "�������",
        navAbout: "�� ������",
        navContact: "���� ���",
        heroTitle: "���� ������ �� ���� ������� ��������",
        heroText: "���� ���� �������� ������� �������� ������ ����������.",
        heroButton: "����� ��������",
        featuredProductsTitle: "���� ��������",
        viewAllProductsButton: "��� ���� ��������",
        aboutUsTitle: "�� ������",
        aboutUsText: "��� ���� ����ϡ ���� �� ����� ������ ������ ����� ������� �������� ����� ������. ����� ������ ���� ������ ������ ���� �������� ������� �������ɡ �� ������� ��� ������� ��������� ���������� �������.",
        readMoreButton: "���� ������",
        ourServicesTitle: "�������",
        service1Title: "����� ����� �������",
        service1Text: "���� ����� ����� ������� ������ ������� ������� �������� �������ɡ ����� ���� ���� ������.",
        service2Title: "����� ����� ������",
        service2Text: "������� �� ����� ����� ������ ����� ������ ������ �� ����� ������� ��������� ���� �����������.",
        service3Title: "����� ������",
        service3Text: "����� ����� ������ �������� ����� ����� ������� �������� ����� ������� ������.",
        discoverServicesButton: "����� �������",
        contactUsFooter: "����� ����",
        footerAddress: "������ ������� ������ɡ ��������ɡ ���",
        quickLinksFooter: "����� �����",
        navHomeFooter: "��������",
        navServicesFooter: "�������",
        navProjectsFooter: "��������",
        navAboutFooter: "�� ������",
        navContactFooter: "���� ���",
        ourLocationFooter: "������ ��� �������",
        copyrightFooter: "� 2025 �����. ���� ������ ������.",
        filterAll: "����", // For products.html filter
        filterAirDucts: "����� ������",
        filterAirOutlets: "����� ������",
        filterDampers: "��������",
        viewDetailsButton: "��� ��������", // For featured products in index.html
        productDetailTitle: "������ ������", // For product-detail.html
        downloadSpecs: "����� ��������� (PDF)", // For product-detail.html
        keyFeatures: "������� ��������", // For product-detail.html
        technicalSpecs: "��������� ������", // For product-detail.html
        noProductsMessage: "�� ���� ������ ������ �� ��� �����.",
        productNotFound: "����� �� ��� ������ ��� ������ �������."
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
        copyrightFooter: "� 2025 ESNAD. All Rights Reserved.",
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
        const viewDetailsText = translations[currentLang]?.viewDetailsButton || '��� ��������';

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
        name_ar: '����� ��� ������� ������',
        name_en: 'Modern Business Tower Project',
        image: 'https://via.placeholder.com/800x600/E67E22/1E2B38?text=Project+1',
        description_ar: '����� ������ ����� ����� ������ ������� ���� ����� ����� ������ޡ ��� ����� ������� �����.',
        description_en: 'Design and installation of integrated HVAC systems for a multi-story commercial tower, including offices and retail spaces.'
    },
    {
        id: 'project2',
        category: 'residential',
        name_ar: '���� ����� ����� �����',
        name_en: 'Luxury Residential Villas Complex',
        image: 'https://via.placeholder.com/800x600/E67E22/1E2B38?text=Project+2',
        description_ar: '����� ���� ����� ������ ������ ����� ���� ����� ����� ���� ��� 50 ���� ����ɡ �� ������� ��� ����� ������ �������.',
        description_en: 'Implementation of central air conditioning solutions and custom ductwork systems for a residential complex of 50 luxury villas, with a focus on energy efficiency and comfort.'
    },
    {
        id: 'project3',
        category: 'industrial',
        name_ar: '����� ���� ������ ��������',
        name_en: 'Food Processing Plant Upgrade',
        image: 'https://via.placeholder.com/800x600/E67E22/1E2B38?text=Project+3',
        description_ar: '����� ���� ������ ������� ������� �� ������ ����� ���� ������ �������ɡ ��� ���� ����� ���� ������ ������� �������.',
        description_en: 'Comprehensive renovation of ventilation and climate control systems for a large food processing plant, ensuring compliance with the highest hygiene and quality standards.'
    },
    {
        id: 'project4',
        category: 'commercial',
        name_ar: '���� ���� �������',
        name_en: 'Al-Jauhara Shopping Mall',
        image: 'https://via.placeholder.com/800x600/E67E22/1E2B38?text=Project+4',
        description_ar: '����� ����� ����� ����� ������ ���� ����� ��� �� ������ ������� �������� ��� ������ѡ ������� ���� �������.',
        description_en: 'Installation of advanced central air conditioning systems for a massive shopping mall, considering different areas such as shops, restaurants, and cinemas.'
    },
    {
        id: 'project5',
        category: 'hospital',
        name_ar: '������ ����� ������',
        name_en: 'New Al-Amal Hospital',
        image: 'https://via.placeholder.com/800x600/E67E22/1E2B38?text=Project+5',
        description_ar: '����� ������ ������ ����� HVAC ���� ����������ʡ ��� �� ��� ��� �������� ������ ������� ������ɡ �� ����� ���� ����� �������.',
        description_en: 'Design, supply, and installation of specialized hospital HVAC systems, including operating rooms and intensive care units, with high-efficiency air filters.'
    }
];

// ����� ���� �������� �� ������ (Projects Page)
function displayProjects(projects) {
    const projectsGrid = document.getElementById('projectsGrid');
    if (!projectsGrid) return; // Exit if not on projects.html

    projectsGrid.innerHTML = ''; // Clear previous content

    const currentLang = document.documentElement.lang || 'ar'; // Get current language

    if (projects.length === 0) {
        projectsGrid.innerHTML = `<p class="no-projects-message">${currentLang === 'ar' ? '�� ���� ������ ������ �� ��� �����.' : 'No projects to display in this category.'}</p>`;
        return;
    }

    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card', 'animate__animated', 'animate__fadeInUp');

        const projectName = project[`name_${currentLang}`] || project.name_ar;
        const projectDescription = project[`description_${currentLang}`] || project.description_ar;
        const viewDetailsText = currentLang === 'ar' ? '��� ��������' : 'View Details'; // Or link to a project-detail.html if implemented

        projectCard.innerHTML = `
            <img src="${project.image}" alt="${projectName}">
            <h3>${projectName}</h3>
            <p>${projectDescription.substring(0, 150)}...</p>
            <a href="#" class="button view-project-button">${viewDetailsText}</a>
        `;
        projectsGrid.appendChild(projectCard);
    });
}

// ����� ������ ����� ���� ��������
function updateProjectPageTitle(category) {
    const defaultTitle_ar = '�������� - �����';
    const defaultTitle_en = 'Our Projects - ESNAD';
    let newTitle_ar = defaultTitle_ar;
    let newTitle_en = defaultTitle_en;

    const currentLang = document.documentElement.lang || 'ar';

    if (category === 'commercial') {
        newTitle_ar = '�������� �������� - �����';
        newTitle_en = 'Commercial Projects - ESNAD';
    } else if (category === 'residential') {
        newTitle_ar = '�������� ������� - �����';
        newTitle_en = 'Residential Projects - ESNAD';
    } else if (category === 'industrial') {
        newTitle_ar = '�������� �������� - �����';
        newTitle_en = 'Industrial Projects - ESNAD';
    } else if (category === 'hospital') {
        newTitle_ar = '������ ���������� - �����';
        newTitle_en = 'Hospital Projects - ESNAD';
    }

    document.title = (currentLang === 'ar') ? newTitle_ar : newTitle_en;
}

// ����� ����� �������� ������
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

// ������ ����� ���� �������� ����� ��� ����� URL
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