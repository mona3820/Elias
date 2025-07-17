// بيانات المنتجات
// يمكنك إضافة المزيد من المنتجات هنا أو تعديل الموجودة.
// تأكد أن 'id' لكل منتج فريد وأن 'downloadLink' يشير لملف PDF حقيقي.
const productsData = [
    {
        id: 'square-ducts',
        category: 'air-ducts',
        name: 'مجاري هواء مربعة (Square Ducts)',
        description: 'تصميم متين وعالي الكفاءة، مثالي للتطبيقات التجارية والصناعية التي تتطلب تدفق هواء كبير. تُصنع من أجود أنواع ألواح الصلب المجلفن أو الستانلس ستيل، وتوفر مقاومة عالية للتآكل وعمر افتراضي طويل. تتوافق مع أعلى معايير الجودة والسلامة.',
        image: 'https://via.placeholder.com/800x600/1E2B38/E67E22?text=Ducting+Square+Detail',
        features: [
            'مصنوعة من الصلب المجلفن عالي الجودة أو الستانلس ستيل.',
            'تصميم محكم يقلل من تسرب الهواء.',
            'سهلة التركيب والصيانة.',
            'متوفرة بأبعاد ومقاسات مخصصة لتناسب احتياجات المشروع.',
            'مقاومة للتآكل والصدأ.'
        ],
        specs: {
            'المادة': 'الصلب المجلفن / الستانلس ستيل',
            'السماكة': 'حسب المواصفات الفنية المطلوبة',
            'الأبعاد': 'مخصصة (مربعة/مستطيلة)',
            'التطبيقات': 'المباني التجارية، المصانع، المستودعات، المستشفيات'
        },
        downloadLink: 'YOUR_DOWNLOAD_LINK_FOR_SQUARE_DUCTS_DATASHEET.pdf'
    },
    {
        id: 'round-ducts',
        category: 'air-ducts',
        name: 'مجاري هواء دائرية (Round Ducts)',
        description: 'تتميز بمرونة عالية وسهولة في التركيب، وتوفر تدفق هواء سلس مع أقل فقدان للضغط. تُستخدم بشكل شائع في الأنظمة التي تتطلب كفاءة تدفق عالية ومظهر جمالي. متوفرة بأقطار مختلفة لتناسب متطلبات التهوية والتكييف المتنوعة.',
        image: 'https://via.placeholder.com/800x600/E67E22/1E2B38?text=Ducting+Round+Detail',
        features: [
            'تدفق هواء سلس يقلل من الضوضاء.',
            'سهلة التركيب وتتطلب مساحة أقل.',
            'كفاءة عالية في نقل الهواء.',
            'متوفرة بأقطار متنوعة.',
            'مثالية للمساحات الضيقة.'
        ],
        specs: {
            'المادة': 'الصلب المجلفن / الستانلس ستيل',
            'القطر': 'متوفر بأحجام قياسية ومخصصة',
            'الاستخدام': 'المكاتب، المطاعم، المباني السكنية، المختبرات'
        },
        downloadLink: 'YOUR_DOWNLOAD_LINK_FOR_ROUND_DUCTS_DATASHEET.pdf'
    },
    {
        id: 'standard-ahu',
        category: 'ahu-units',
        name: 'وحدات مناولة الهواء (AHU) قياسية',
        description: 'وحدات عالية الأداء لتكييف وتنقية الهواء في المساحات الكبيرة، بتصاميم متعددة تلبي الاحتياجات الصناعية والتجارية. توفر تحكمًا دقيقًا في درجة الحرارة والرطوبة وجودة الهواء، مما يضمن بيئة داخلية مريحة وصحية.',
        image: 'https://via.placeholder.com/800x600/2C3E50/E67E22?text=Standard+AHU+Detail',
        features: [
            'كفاءة عالية في استهلاك الطاقة.',
            'نظام فلترة متعدد المراحل لتنقية الهواء.',
            'تحكم دقيق في درجة الحرارة والرطوبة.',
            'تصميم وحدات مرن يناسب مختلف التطبيقات.',
            'مكونات عالية الجودة لضمان طول العمر الافتراضي.'
        ],
        specs: {
            'القدرة': 'تتراوح من 1000 CFM إلى 100,000 CFM',
            'مصدر الطاقة': 'كهربائي',
            'الفلاتر': 'G4, F7, H13 (حسب الطلب)',
            'التحكم': 'نظام BMS متكامل'
        },
        downloadLink: 'YOUR_DOWNLOAD_LINK_FOR_STANDARD_AHU_DATASHEET.pdf'
    },
    {
        id: 'industrial-fans',
        category: 'ventilation-systems',
        name: 'مراوح تهوية صناعية',
        description: 'مراوح قوية ومتينة مصممة لتحقيق تدفق هواء فعال في البيئات الصناعية القاسية. توفر تهوية ممتازة وتساعد في الحفاظ على جودة الهواء وتقليل درجات الحرارة في المصانع والمستودعات والمنشآت الكبيرة.',
        image: 'https://via.placeholder.com/800x600/F0F0F0/1E2B38?text=Industrial+Fans+Detail',
        features: [
            'محركات قوية وموثوقة.',
            'تصميم مقاوم للظروف القاسية.',
            'قدرة عالية على تحريك كميات كبيرة من الهواء.',
            'سهلة التركيب والصيانة.',
            'مستويات ضوضاء منخفضة نسبياً.'
        ],
        specs: {
            'النوع': 'محورية، طاردة مركزية',
            'القدرة': 'حسب الموديل (CFM)',
            'مصدر الطاقة': 'كهربائي (3 فاز)',
            'المادة': 'الصلب الكربوني المطلي، الستانلس ستيل'
        },
        downloadLink: 'YOUR_DOWNLOAD_LINK_FOR_FANS_DATASHEET.pdf'
    },
    {
        id: 'custom-ahu',
        category: 'ahu-units',
        name: 'وحدات مناولة هواء (AHU) مخصصة',
        description: 'نقدم حلول AHU مصممة خصيصًا لتلبية المتطلبات الفريدة لمشروعك، مع الأخذ في الاعتبار المساحة المتاحة، السعة المطلوبة، ومواصفات جودة الهواء. نضمن لك أعلى مستويات الأداء والكفاءة.',
        image: 'https://via.placeholder.com/800x600/1E2B38/E67E22?text=Custom+AHU+Detail',
        features: [
            'تصميم مرن يناسب أي مساحة أو متطلبات.',
            'دمج أحدث التقنيات في التحكم بالطاقة.',
            'خيارات متعددة للفلترة والتعقيم.',
            'دعم فني كامل من التصميم حتى التشغيل.',
            'تحقيق أقصى درجات الراحة والجودة الهوائية.'
        ],
        specs: {
            'المرونة': 'تصميم حسب الطلب',
            'التخصيص': 'حسب مواصفات العميل',
            'التحكم': 'أنظمة ذكية متقدمة',
            'الشهادات': 'متوافق مع المعايير الدولية'
        },
        downloadLink: 'YOUR_DOWNLOAD_LINK_FOR_CUSTOM_AHU_DATASHEET.pdf'
    }
    // أضف المزيد من المنتجات هنا بنفس التنسيق
];

// بيانات المشاريع
// هنا يمكنك إضافة أو تعديل بيانات المشاريع الخاصة بك.
// تأكد من أن 'id' لكل مشروع فريد.
const projectsData = [
    {
        id: 'food-factory-riyadh',
        category: 'industrial',
        name: 'جامعة الجلالة',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlFzxnXA-hW2EaMkrRzszdyqvI1Tve0EwiQFxyRafUVChaPizRr8ehJonKMlIQ_emmdcc&usqp=CAU',
        details: {
            sector: 'صناعي',
            completionDate: '2023-08-15',
            location: 'الرياض، المملكة العربية السعودية',
            servicesProvided: 'تصميم وتنفيذ أنظمة HVAC، مجاري الهواء، وحدات AHU مخصصة.',
            challenge: 'تحقيق متطلبات النظافة الصارمة والتحكم الدقيق في المناخ لمرافق تصنيع الأغذية.',
            solution: 'تركيب وحدات مناولة هواء (AHU) مزودة بفلاتر HEPA، وأنظمة تهوية بضغط إيجابي، بالإضافة إلى مجاري هواء معزولة بالكامل.'
        }
    },
    {
        id: 'commercial-tower-jeddah',
        category: 'commercial',
        name: 'MIVIDA',
        description: 'توريد وتركيب أنظمة تكييف الهواء المركزية لمبنى برج تجاري متعدد الطوابق في جدة، لضمان راحة المستأجرين وكفاءة استهلاك الطاقة.',
        image: 'https://castle-ei.com/wp-content/uploads/2024/12/mivida-logo-1024x684-1.jpg',
        details: {
            sector: 'تجاري',
            completionDate: '2024-02-28',
            location: 'جدة، المملكة العربية السعودية',
            servicesProvided: 'توريد وتركيب وحدات التبريد (Chillers)، وحدات معالجة الهواء (AHU)، مجاري الهواء، وأنظمة التحكم.',
            challenge: 'توفير حل تبريد فعال لبرج شاهق مع مراعاة متطلبات التصميم المعماري والجمالية.',
            solution: 'تنفيذ نظام تكييف مركزي متكامل مع أنظمة تحكم ذكية لتوفير استهلاك الطاقة، وتصميم مجاري هواء مدمجة تتناسب مع التصميم الداخلي.'
        }
    },
    {
        id: 'hospital-project-dammam',
        category: 'f',
        name:'R5',
        description: 'تنفيذ أنظمة تهوية وتكييف متخصصة لمستشفى جديد في الدمام، مع الالتزام الصارم بمعايير الجودة والنظافة للمرافق الصحية.',
        image: 'https://i.ibb.co/NzgvDWn/R5.webp',
        details: {
            sector: 'صحي',
            completionDate: '2023-11-01',
            location: 'الدمام، المملكة العربية السعودية',
            servicesProvided: 'تصميم وتنفيذ أنظمة HVAC لغرف العمليات والعناية المركزة والمختبرات، تركيب فلاتر HEPA، غرف ضغط إيجابي وسلبي.',
            challenge: 'ضمان بيئة معقمة وخالية من الملوثات، والتحكم في انتشار العدوى داخل المستشفى.',
            solution: 'تركيب وحدات AHU متخصصة للمستشفيات، وتطبيق نظام صارم لتصريف الهواء وفلترته، مع استخدام مجاري هواء مقاومة للبكتيريا.'
        }
    },
    {
        id: 'shopping-mall-riyadh',
        category: 'commercial',
        name: 'مجمع تسوق (الرياض)',
        description: 'تجهيز مجمع تسوق ضخم في الرياض بأنظمة تهوية وتكييف مركزية، لتوفير بيئة مريحة للمتسوقين والزوار طوال العام.',
        image: 'https://via.placeholder.com/600x400/7F8C8D/BDC3C7?text=Commercial+Project+2',
        details: {
            sector: 'تجاري',
            completionDate: '2024-06-10',
            location: 'الرياض، المملكة العربية السعودية',
            servicesProvided: 'توريد وتركيب وحدات مناولة الهواء كبيرة السعة، أنظمة تهوية مواقف السيارات، أنظمة التحكم الذكي في المناخ.',
            challenge: 'تكييف مساحات واسعة ومتعددة الاستخدامات مع تدفق كبير للزوار، وتحقيق كفاءة عالية في استهلاك الطاقة.',
            solution: 'تركيب أنظمة AHU و FCU مدمجة، واستخدام مجاري هواء مرنة وعالية الأداء، مع نظام BMS متقدم لإدارة الطاقة والراحة.'
        }
    },
    {
        id: 'pharmaceutical-plant-jubail',
        category: 'industrial',
        name: 'فندق الجلالة',
        description: 'مشروع متكامل لتصميم وتنفيذ أنظمة تكييف الهواء النظيف (Clean Room HVAC) لمصنع أدوية في الجبيل، وفقًا للمعايير الدولية GMP.',
        image: 'https://i.ibb.co/C5CLbsdj/tolip-resort-el-galala.jpg',
        details: {
            sector: 'صناعي',
            completionDate: '2025-01-20',
            location: 'الجبيل الصناعية، المملكة العربية السعودية',
            servicesProvided: 'تصميم وبناء غرف نظيفة (Clean Rooms)، أنظمة HVAC مخصصة لغرف الضغط، فلاتر HEPA و ULPA، أنظمة مراقبة الجودة.',
            challenge: 'الالتزام بأقصى درجات النظافة والتعقيم ومتطلبات التشغيل الحرجة في صناعة الأدوية.',
            solution: 'تطبيق أحدث تقنيات الغرف النظيفة، وتوفير وحدات معالجة هواء متخصصة مع أنظمة ترشيح متقدمة لضمان جودة الهواء المطلوبة.'
        }
    },
     {
        id: 'pharmaceutical-plant-jubail',
        category: 'industrial',
        name: 'جامعةمصر',
        description: 'مشروع متكامل لتصميم وتنفيذ أنظمة تكييف الهواء النظيف (Clean Room HVAC) لمصنع أدوية في الجبيل، وفقًا للمعايير الدولية GMP.',
        image: 'https://i.ibb.co/8GpQ969/download.jpg',
        details: {
            sector: 'صناعي',
            completionDate: '2025-01-20',
            location: 'الجبيل الصناعية، المملكة العربية السعودية',
            servicesProvided: 'تصميم وبناء غرف نظيفة (Clean Rooms)، أنظمة HVAC مخصصة لغرف الضغط، فلاتر HEPA و ULPA، أنظمة مراقبة الجودة.',
            challenge: 'الالتزام بأقصى درجات النظافة والتعقيم ومتطلبات التشغيل الحرجة في صناعة الأدوية.',
            solution: 'تطبيق أحدث تقنيات الغرف النظيفة، وتوفير وحدات معالجة هواء متخصصة مع أنظمة ترشيح متقدمة لضمان جودة الهواء المطلوبة.'
        }
    },
    {
        id: 'pharmaceutical-plant-jubail',
        category: 'industrial',
        name: 'مكتبة الاسكندريه',
        description: 'مشروع متكامل لتصميم وتنفيذ أنظمة تكييف الهواء النظيف (Clean Room HVAC) لمصنع أدوية في الجبيل، وفقًا للمعايير الدولية GMP.',
        image: 'https://i.ibb.co/mV7135zS/UREWIEUROW.jpg',
        details: {
            sector: 'صناعي',
            completionDate: '2025-01-20',
            location: 'الجبيل الصناعية، المملكة العربية السعودية',
            servicesProvided: 'تصميم وبناء غرف نظيفة (Clean Rooms)، أنظمة HVAC مخصصة لغرف الضغط، فلاتر HEPA و ULPA، أنظمة مراقبة الجودة.',
            challenge: 'الالتزام بأقصى درجات النظافة والتعقيم ومتطلبات التشغيل الحرجة في صناعة الأدوية.',
            solution: 'تطبيق أحدث تقنيات الغرف النظيفة، وتوفير وحدات معالجة هواء متخصصة مع أنظمة ترشيح متقدمة لضمان جودة الهواء المطلوبة.'
        }
    },
    {
        id: 'pharmaceutical-plant-jubail',
        category: 'industrial',
        name: 'جامعةبدية',
        description: 'مشروع متكامل لتصميم وتنفيذ أنظمة تكييف الهواء النظيف (Clean Room HVAC) لمصنع أدوية في الجبيل، وفقًا للمعايير الدولية GMP.',
        image: 'https://i.ibb.co/BKNmqPj7/1702473044724.webp',
        details: {
            sector: 'صناعي',
            completionDate: '2025-01-20',
            location: 'الجبيل الصناعية، المملكة العربية السعودية',
            servicesProvided: 'تصميم وبناء غرف نظيفة (Clean Rooms)، أنظمة HVAC مخصصة لغرف الضغط، فلاتر HEPA و ULPA، أنظمة مراقبة الجودة.',
            challenge: 'الالتزام بأقصى درجات النظافة والتعقيم ومتطلبات التشغيل الحرجة في صناعة الأدوية.',
            solution: 'تطبيق أحدث تقنيات الغرف النظيفة، وتوفير وحدات معالجة هواء متخصصة مع أنظمة ترشيح متقدمة لضمان جودة الهواء المطلوبة.'
        }
    },
     {
        id: 'pharmaceutical-plant-jubail',
        category: 'industrial',
        name: 'الجامعة المانية',
        description: 'مشروع متكامل لتصميم وتنفيذ أنظمة تكييف الهواء النظيف (Clean Room HVAC) لمصنع أدوية في الجبيل، وفقًا للمعايير الدولية GMP.',
        image: 'https://i.ibb.co/N2b5sCcX/download.jpg',
        details: {
            sector: 'صناعي',
            completionDate: '2025-01-20',
            location: 'الجبيل الصناعية، المملكة العربية السعودية',
            servicesProvided: 'تصميم وبناء غرف نظيفة (Clean Rooms)، أنظمة HVAC مخصصة لغرف الضغط، فلاتر HEPA و ULPA، أنظمة مراقبة الجودة.',
            challenge: 'الالتزام بأقصى درجات النظافة والتعقيم ومتطلبات التشغيل الحرجة في صناعة الأدوية.',
            solution: 'تطبيق أحدث تقنيات الغرف النظيفة، وتوفير وحدات معالجة هواء متخصصة مع أنظمة ترشيح متقدمة لضمان جودة الهواء المطلوبة.'
        }
    },
    {
        id: 'pharmaceutical-plant-jubail',
        category: 'industrial',
        name: 'جامعةالقاهره',
        description: 'مشروع متكامل لتصميم وتنفيذ أنظمة تكييف الهواء النظيف (Clean Room HVAC) لمصنع أدوية في الجبيل، وفقًا للمعايير الدولية GMP.',
        image: 'https://i.ibb.co/ZRGGM8NT/1716460045lcj-CPFRFhs.webp',
        details: {
            sector: 'صناعي',
            completionDate: '2025-01-20',
            location: 'الجبيل الصناعية، المملكة العربية السعودية',
            servicesProvided: 'تصميم وبناء غرف نظيفة (Clean Rooms)، أنظمة HVAC مخصصة لغرف الضغط، فلاتر HEPA و ULPA، أنظمة مراقبة الجودة.',
            challenge: 'الالتزام بأقصى درجات النظافة والتعقيم ومتطلبات التشغيل الحرجة في صناعة الأدوية.',
            solution: 'تطبيق أحدث تقنيات الغرف النظيفة، وتوفير وحدات معالجة هواء متخصصة مع أنظمة ترشيح متقدمة لضمان جودة الهواء المطلوبة.'
        }
    },
      {
        id: 'pharmaceutical-plant-jubail',
        category: 'industrial',
        name: 'فندق الكيان العسكري',
        description: 'مشروع متكامل لتصميم وتنفيذ أنظمة تكييف الهواء النظيف (Clean Room HVAC) لمصنع أدوية في الجبيل، وفقًا للمعايير الدولية GMP.',
        image: 'https://i.ibb.co/7xXd59Vk/images.jpg',
        details: {
            sector: 'صناعي',
            completionDate: '2025-01-20',
            location: 'الجبيل الصناعية، المملكة العربية السعودية',
            servicesProvided: 'تصميم وبناء غرف نظيفة (Clean Rooms)، أنظمة HVAC مخصصة لغرف الضغط، فلاتر HEPA و ULPA، أنظمة مراقبة الجودة.',
            challenge: 'الالتزام بأقصى درجات النظافة والتعقيم ومتطلبات التشغيل الحرجة في صناعة الأدوية.',
            solution: 'تطبيق أحدث تقنيات الغرف النظيفة، وتوفير وحدات معالجة هواء متخصصة مع أنظمة ترشيح متقدمة لضمان جودة الهواء المطلوبة.'
        }
    },
     {
        id: 'pharmaceutical-plant-jubail',
        category: 'industrial',
        name: 'مستشفي بهيه',
        description: 'مشروع متكامل لتصميم وتنفيذ أنظمة تكييف الهواء النظيف (Clean Room HVAC) لمصنع أدوية في الجبيل، وفقًا للمعايير الدولية GMP.',
        image: 'https://i.ibb.co/Y741ZVQL/53801717676414.jpg',
        details: {
            sector: 'صناعي',
            completionDate: '2025-01-20',
            location: 'الجبيل الصناعية، المملكة العربية السعودية',
            servicesProvided: 'تصميم وبناء غرف نظيفة (Clean Rooms)، أنظمة HVAC مخصصة لغرف الضغط، فلاتر HEPA و ULPA، أنظمة مراقبة الجودة.',
            challenge: 'الالتزام بأقصى درجات النظافة والتعقيم ومتطلبات التشغيل الحرجة في صناعة الأدوية.',
            solution: 'تطبيق أحدث تقنيات الغرف النظيفة، وتوفير وحدات معالجة هواء متخصصة مع أنظمة ترشيح متقدمة لضمان جودة الهواء المطلوبة.'
        }
    },
     {
        id: 'pharmaceutical-plant-jubail',
        category: 'industrial',
        name: 'مستشفي بهيه',
        description: 'مشروع متكامل لتصميم وتنفيذ أنظمة تكييف الهواء النظيف (Clean Room HVAC) لمصنع أدوية في الجبيل، وفقًا للمعايير الدولية GMP.',
        image: 'https://i.ibb.co/Y741ZVQL/53801717676414.jpg',
        details: {
            sector: 'صناعي',
            completionDate: '2025-01-20',
            location: 'الجبيل الصناعية، المملكة العربية السعودية',
            servicesProvided: 'تصميم وبناء غرف نظيفة (Clean Rooms)، أنظمة HVAC مخصصة لغرف الضغط، فلاتر HEPA و ULPA، أنظمة مراقبة الجودة.',
            challenge: 'الالتزام بأقصى درجات النظافة والتعقيم ومتطلبات التشغيل الحرجة في صناعة الأدوية.',
            solution: 'تطبيق أحدث تقنيات الغرف النظيفة، وتوفير وحدات معالجة هواء متخصصة مع أنظمة ترشيح متقدمة لضمان جودة الهواء المطلوبة.'
        }
    },
    // أضف المزيد من المشاريع هنا بنفس التنسيق
];


// ******************************************************************
// وظائف عامة لجميع الصفحات
// ******************************************************************

document.addEventListener('DOMContentLoaded', () => {
    // تفعيل القائمة المنسدلة (Dropdown)
    const dropdown = document.querySelector('.dropdown');
    if (dropdown) {
        dropdown.addEventListener('click', function(event) {
            // منع إغلاق القائمة عند النقر داخلها
            event.stopPropagation();
            this.classList.toggle('active');
        });
        // إغلاق القائمة عند النقر خارجها
        document.addEventListener('click', function() {
            dropdown.classList.remove('active');
        });
    }

    // فحص المسار الحالي وتفعيل الوظائف الخاصة بالصفحة
    const path = window.location.pathname;

    if (path.includes('index.html') || path === '/') {
        initializeHeroSlider();
        initializeStatisticsCounter();
    } else if (path.includes('products.html')) {
        initializeProductFiltering();
    } else if (path.includes('product-detail.html')) {
        loadProductDetails();
    } else if (path.includes('projects.html')) {
        initializeProjectFiltering(); // وظيفة جديدة للمشاريع
    }
});


// ******************************************************************
// وظائف خاصة بصفحة index.html (الرئيسية)
// ******************************************************************

function initializeHeroSlider() {
    const slides = document.querySelectorAll('.hero-slider .slide');
    const dots = document.querySelectorAll('.slider-nav .dot');
    let currentSlide = 0;
    let slideInterval;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            dots[i].classList.remove('active');
        });
        slides[index].classList.add('active');
        dots[index].classList.add('active');
        currentSlide = index;
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function startSlider() {
        slideInterval = setInterval(nextSlide, 5000); // تغيير كل 5 ثوانٍ
    }

    function stopSlider() {
        clearInterval(slideInterval);
    }

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideIndex = parseInt(e.target.dataset.slide);
            stopSlider(); // أوقف السلايدر عند النقر اليدوي
            showSlide(slideIndex);
            startSlider(); // أعد تشغيل السلايدر بعد النقر
        });
    });

    // بدء السلايدر عند تحميل الصفحة
    if (slides.length > 0) { // تأكد من وجود شرائح قبل البدء
        showSlide(currentSlide);
        startSlider();

        // إيقاف السلايدر عند التحويم واستئنافه عند المغادرة
        const heroSection = document.querySelector('.hero-section');
        if (heroSection) {
            heroSection.addEventListener('mouseenter', stopSlider);
            heroSection.addEventListener('mouseleave', startSlider);
        }
    }
}

function initializeStatisticsCounter() {
    const statsSection = document.querySelector('.statistics-section');
    const statsNumbers = document.querySelectorAll('.stat-item .number');
    let animated = false; // لتشغيل العداد مرة واحدة فقط

    const animateNumbers = () => {
        statsNumbers.forEach(numberElement => {
            const target = parseInt(numberElement.dataset.target);
            let current = 0;
            const increment = target / 100; // يمكن تعديل سرعة العداد هنا

            const updateCounter = () => {
                if (current < target) {
                    current += increment;
                    numberElement.textContent = Math.ceil(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    numberElement.textContent = target;
                }
            };
            updateCounter();
        });
    };

    // مراقبة قسم الإحصائيات لتبدأ الحركة عند ظهوره في الشاشة
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !animated) {
                animateNumbers();
                animated = true;
                observer.disconnect(); // توقف عن المراقبة بعد التشغيل
            }
        });
    }, {
        threshold: 0.5 // عندما يكون 50% من القسم مرئياً
    });

    if (statsSection) {
        observer.observe(statsSection);
    }
}


// ******************************************************************
// وظائف خاصة بصفحة products.html (المنتجات)
// ******************************************************************

function initializeProductFiltering() {
    const filterTabs = document.querySelectorAll('.products-grid-section .filter-tab');
    const productsContainer = document.getElementById('products-container');
    const currentCategoryTitle = document.getElementById('current-category-title');
    const currentCategoryDescription = document.getElementById('current-category-description');

    const categoryTitles = {
        'all': {
            title: 'كل المنتجات',
            description: 'استكشف مجموعتنا المتنوعة من المنتجات عالية الجودة.'
        },
        'air-ducts': {
            title: 'مجاري الهواء',
            description: 'حلول متكاملة لمجاري الهواء بأنواعها المختلفة، مصممة لأقصى كفاءة.'
        },
        'ahu-units': {
            title: 'وحدات مناولة الهواء (AHU)',
            description: 'وحدات AHU متطورة لتكييف وتنقية الهواء في المشاريع الكبيرة.'
        },
        'ventilation-systems': {
            title: 'أنظمة التهوية',
            description: 'أنظمة تهوية فعالة تضمن جودة هواء مثالية في بيئات العمل.'
        }
        // أضف المزيد من عناوين الفئات هنا
    };

    // وظيفة لتحديث عنوان ووصف الصفحة
    function updatePageTitle(category) {
        const info = categoryTitles[category] || categoryTitles['all'];
        if (currentCategoryTitle) currentCategoryTitle.textContent = info.title;
        if (currentCategoryDescription) currentCategoryDescription.textContent = info.description;
    }

    // وظيفة لعرض المنتجات في الشبكة
    function displayProducts(productsToDisplay) {
        if (!productsContainer) return;
        productsContainer.innerHTML = ''; // مسح المحتوى الحالي

        if (productsToDisplay.length === 0) {
            productsContainer.innerHTML = '<p style="text-align: center; font-size: 1.2em; color: var(--light-text-color);">لا توجد منتجات في هذه الفئة حالياً.</p>';
            return;
        }

        productsToDisplay.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');
            productCard.setAttribute('data-category', product.category);
            productCard.setAttribute('data-product-id', product.id);

            productCard.innerHTML = `
                <a href="product-detail.html?id=${product.id}" class="product-link">
                    <img src="${product.image}" alt="${product.name}">
                    <div class="product-info">
                        <h4>${product.name}</h4>
                        <p>${product.description.substring(0, 100)}...</p>
                    </div>
                </a>
                <a href="${product.downloadLink}" class="btn download-btn-small" download><i class="fas fa-download"></i> تحميل التفاصيل</a>
            `;
            productsContainer.appendChild(productCard);

            // إضافة كلاس 'show' بعد فترة قصيرة لتطبيق التأثير البصري
            setTimeout(() => productCard.classList.add('show'), 50);
        });
    }

    // وظيفة تصفية المنتجات
    function filterAndDisplayProducts(selectedCategory) {
        const filteredProducts = selectedCategory === 'all'
            ? productsData
            : productsData.filter(product => product.category === selectedCategory);

        displayProducts(filteredProducts);
        updatePageTitle(selectedCategory);
    }

    // معالجة النقر على أزرار الفلترة
    filterTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            filterTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            const category = tab.dataset.category;
            filterAndDisplayProducts(category);
            // تحديث URL دون إعادة تحميل الصفحة
            history.pushState(null, '', `products.html?category=${category}`);
        });
    });

    // معالجة تحميل الصفحة بناءً على معامل URL
    const urlParams = new URLSearchParams(window.location.search);
    const initialCategory = urlParams.get('category') || 'all';

    // تفعيل الزر المناسب وتصفية المنتجات عند التحميل الأولي
    const activeTab = document.querySelector(`.products-grid-section .filter-tab[data-category="${initialCategory}"]`);
    if (activeTab) {
        activeTab.classList.add('active');
    } else {
        document.querySelector('.products-grid-section .filter-tab[data-category="all"]').classList.add('active');
    }
    filterAndDisplayProducts(initialCategory);
}


// ******************************************************************
// وظائف خاصة بصفحة product-detail.html (تفاصيل المنتج)
// ******************************************************************

function loadProductDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    if (!productId) {
        console.error('Product ID not found in URL.');
        document.getElementById('product-detail-page-title').textContent = 'خطأ: المنتج غير موجود';
        document.getElementById('product-detail-page-description').textContent = 'يرجى العودة لصفحة المنتجات واختيار منتج صالح.';
        document.querySelector('.product-detail-content').innerHTML = '<p style="text-align: center; font-size: 1.5em; padding: 50px;">عذراً، لم يتم العثور على تفاصيل هذا المنتج.</p>';
        return;
    }

    const product = productsData.find(p => p.id === productId);

    if (product) {
        // تحديث عنوان الصفحة
        document.title = `${product.name} - تفاصيل المنتج - إسناد`;
        if (document.getElementById('product-detail-page-title')) document.getElementById('product-detail-page-title').textContent = product.name;
        if (document.getElementById('product-detail-page-description')) document.getElementById('product-detail-page-description').textContent = `تعرف على مواصفات وخصائص ${product.name}.`;

        // تعبئة تفاصيل المنتج
        if (document.getElementById('product-main-image')) document.getElementById('product-main-image').src = product.image;
        if (document.getElementById('product-main-image')) document.getElementById('product-main-image').alt = product.name;
        if (document.getElementById('product-name')) document.getElementById('product-name').textContent = product.name;
        if (document.getElementById('product-description')) document.getElementById('product-description').textContent = product.description;

        // تعبئة المميزات
        const featuresList = document.getElementById('product-features-list');
        if (featuresList) {
            featuresList.innerHTML = '';
            product.features.forEach(feature => {
                const li = document.createElement('li');
                li.innerHTML = `<i class="fas fa-check-circle"></i> ${feature}`;
                featuresList.appendChild(li);
            });
        }

        // تعبئة المواصفات الفنية
        const specsTableBody = document.querySelector('#product-specs-table tbody');
        if (specsTableBody) {
            specsTableBody.innerHTML = '';
            for (const key in product.specs) {
                const tr = document.createElement('tr');
                tr.innerHTML = `<td><strong>${key}:</strong></td><td>${product.specs[key]}</td>`;
                specsTableBody.appendChild(tr);
            }
        }

        // تحديث رابط التحميل
        const downloadBtn = document.getElementById('product-download-btn');
        if (downloadBtn) {
            downloadBtn.href = product.downloadLink;
        }

        // تحميل المنتجات ذات الصلة (يعرض 3 منتجات عشوائية من نفس الفئة)
        const relatedProductsContainer = document.querySelector('.related-products .products-grid');
        if (relatedProductsContainer) {
            relatedProductsContainer.innerHTML = '';

            const related = productsData.filter(p => p.category === product.category && p.id !== productId)
                                       .sort(() => 0.5 - Math.random())
                                       .slice(0, 3);

            if (related.length > 0) {
                related.forEach(relatedProduct => {
                    const card = document.createElement('div');
                    card.classList.add('product-card');
                    card.setAttribute('data-category', relatedProduct.category);
                    card.setAttribute('data-product-id', relatedProduct.id);
                    card.innerHTML = `
                        <a href="product-detail.html?id=${relatedProduct.id}" class="product-link">
                            <img src="${relatedProduct.image}" alt="${relatedProduct.name}">
                            <div class="product-info">
                                <h4>${relatedProduct.name}</h4>
                                <p>${relatedProduct.description.substring(0, 80)}...</p>
                            </div>
                        </a>
                        <a href="${relatedProduct.downloadLink}" class="btn download-btn-small" download><i class="fas fa-download"></i> تحميل التفاصيل</a>
                    `;
                    relatedProductsContainer.appendChild(card);
                    // Add 'show' class for visual effect
                    setTimeout(() => card.classList.add('show'), 50);
                });
            } else {
                const noRelatedMsg = document.createElement('p');
                noRelatedMsg.textContent = 'لا توجد منتجات ذات صلة في هذه الفئة حالياً.';
                noRelatedMsg.style.textAlign = 'center';
                noRelatedMsg.style.marginTop = '20px';
                noRelatedMsg.style.fontSize = '1.1em';
                relatedProductsContainer.appendChild(noRelatedMsg);
            }
        }

    } else {
        console.error(`Product with ID "${productId}" not found in data.`);
        if (document.getElementById('product-detail-page-title')) document.getElementById('product-detail-page-title').textContent = 'خطأ: المنتج غير موجود';
        if (document.getElementById('product-detail-page-description')) document.getElementById('product-detail-page-description').textContent = 'يرجى العودة لصفحة المنتجات واختيار منتج صالح.';
        if (document.querySelector('.product-detail-content')) document.querySelector('.product-detail-content').innerHTML = '<p style="text-align: center; font-size: 1.5em; padding: 50px;">عذراً، لم يتم العثور على تفاصيل هذا المنتج.</p>';
    }
}


// ******************************************************************
// وظائف خاصة بصفحة projects.html (المشاريع)
// ******************************************************************

function initializeProjectFiltering() {
    const filterTabs = document.querySelectorAll('.projects-grid-section .filter-tab');
    const projectsContainer = document.getElementById('projects-container');
    const currentProjectCategoryTitle = document.getElementById('current-project-category-title');
    const currentProjectCategoryDescription = document.getElementById('current-project-category-description');

    const categoryTitles = {
        'all': {
            title: 'كل المشاريع',
            description: 'نفتخر بتقديم حلول هندسية مبتكرة ومشاريع ناجحة عبر قطاعات مختلفة.'
        },
        'industrial': {
            title: 'مشاريع صناعية',
            description: 'حلول HVAC متكاملة للمصانع، المستودعات، والمنشآت الصناعية الكبيرة.'
        },
        'commercial': {
            title: 'مشاريع تجارية',
            description: 'أنظمة تكييف وتهوية متطورة للأبراج المكتبية، المراكز التجارية، والفنادق.'
        },
        'healthcare': {
            title: 'مشاريع صحية',
            description: 'تطبيق أحدث المعايير في أنظمة HVAC للمستشفيات، العيادات، والمختبرات.'
        }
        // أضف المزيد من عناوين فئات المشاريع هنا
    };

    // وظيفة لتحديث عنوان ووصف صفحة المشاريع
    function updateProjectPageTitle(category) {
        const info = categoryTitles[category] || categoryTitles['all'];
        if (currentProjectCategoryTitle) currentProjectCategoryTitle.textContent = info.title;
        if (currentProjectCategoryDescription) currentProjectCategoryDescription.textContent = info.description;
    }

    // وظيفة لعرض المشاريع في الشبكة
    function displayProjects(projectsToDisplay) {
        if (!projectsContainer) return;
        projectsContainer.innerHTML = ''; // مسح المحتوى الحالي

        if (projectsToDisplay.length === 0) {
            projectsContainer.innerHTML = '<p style="text-align: center; font-size: 1.2em; color: var(--light-text-color);">لا توجد مشاريع في هذه الفئة حالياً.</p>';
            return;
        }

        projectsToDisplay.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.classList.add('project-card');
            projectCard.setAttribute('data-category', project.category);
            projectCard.setAttribute('data-project-id', project.id);

            projectCard.innerHTML = `
                <img src="${project.image}" alt="${project.name}">
                <div class="project-info">
                    <h4>${project.name}</h4>
                    <p>${project.description}</p>
                    <ul class="project-details-list">
                        <li><i class="fas fa-industry"></i> القطاع: ${project.details.sector}</li>
                        <li><i class="fas fa-calendar-alt"></i> تاريخ الإنجاز: ${project.details.completionDate}</li>
                        <li><i class="fas fa-location-dot"></i> الموقع: ${project.details.location}</li>
                    </ul>
                    </div>
            `;
            projectsContainer.appendChild(projectCard);

            // إضافة كلاس 'show' بعد فترة قصيرة لتطبيق التأثير البصري
            setTimeout(() => projectCard.classList.add('show'), 50);
        });
    }

    // وظيفة تصفية المشاريع وعرضها
    function filterAndDisplayProjects(selectedCategory) {
        const filteredProjects = selectedCategory === 'all'
            ? projectsData
            : projectsData.filter(project => project.category === selectedCategory);

        displayProjects(filteredProjects);
        updateProjectPageTitle(selectedCategory);
    }

    // معالجة النقر على أزرار الفلترة للمشاريع
    filterTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            filterTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            const category = tab.dataset.category;
            filterAndDisplayProjects(category);
            // تحديث URL دون إعادة تحميل الصفحة
            history.pushState(null, '', `projects.html?category=${category}`);
        });
    });

    // معالجة تحميل صفحة المشاريع بناءً على معامل URL
    const urlParams = new URLSearchParams(window.location.search);
    const initialCategory = urlParams.get('category') || 'all';

    // تفعيل الزر المناسب وتصفية المشاريع عند التحميل الأولي
    const activeTab = document.querySelector(`.projects-grid-section .filter-tab[data-category="${initialCategory}"]`);
    if (activeTab) {
        activeTab.classList.add('active');
    } else {
        document.querySelector('.projects-grid-section .filter-tab[data-category="all"]').classList.add('active');
    }
    filterAndDisplayProjects(initialCategory);
}

