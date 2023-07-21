import React, { useEffect, useState } from "react";

const DataComponent = ({ onData }) => {
  const purchases = [];

  const privacyData = [
    [
      "1. Общие положения",
      "1.1. Эта публичная оферта (далее - 'Оферта') является официальным предложением (предложением заключить договор) Интернет-магазина 'EcoMarket' (далее - 'Продавец') и адресована физическим и юридическим лицам (далее - 'Покупатель').",
      "1.2. Оформляя заказ на сайте Продавца, Покупатель подтверждает свое согласие с условиями данной Оферты.",
      "1.3. Продавец оставляет за собой право вносить изменения в данные условия без предварительного уведомления Покупателя.",
    ],
    [
      "2. Товары",
      "2.1. Продавец предлагает Покупателю приобрести товары, представленные на сайте.",
      "2.2. Информация о товарах, включая его название, описание, цену и изображение, размещена на сайте Продавца и является публичной офертой.",
      "2.3. Продавец гарантирует качество продаваемых товаров.",
    ],
    [
      "3. Заказ товара и оплата",
      "3.1. Заказ товара на сайте Продавца является офертой к заключению договора купли-продажи.",
      "3.2. Цена на товар указывается на сайте и может быть изменена Продавцом в любое время.",
      "3.3. Оплата товара производится Покупателем в соответствии с ценой, указанной на сайте Продавца, и способами, указанными на сайте.",
      "3.4. В случае отказа Покупателя от оплаты заказанного товара, Продавец оставляет за собой право отказать в исполнении заказа.",
    ],
    [
      "4. Доставка товара",
      "4.1. Доставка товара производится в соответствии с условиями, указанными на сайте Продавца.",
      "4.2. Время и стоимость доставки зависят от выбранного Покупателем способа доставки и указываются на сайте.",
      "4.3. Продавец не несет ответственности за задержки в доставке товара, вызванные действиями третьих лиц, форс-мажорными обстоятельствами и другими непредвиденными событиями.",
    ],
    [
      "5. Возврат товара",
      "5.1. Покупатель имеет право вернуть товар в соответствии с действующим законодательством.",
      "5.2. Возврат товара осуществляется на основании заявления Покупателя и при наличии документов, подтверждающих факт покупки товара.",
    ],
    [
      "6. Защита персональных данных",
      "6.1. При оформлении заказа Покупатель дает согласие на обработку своих персональных данных Продавцом в соответствии с действующим законодательством.",
      "6.2. Продавец обязуется использовать персональные данные Покупателя только для исполнения заказа и не передавать их третьим лицам без предварительного согласия Покупателя.",
    ],
    [
      "7. Ответственность сторон",
      "7.1. Продавец не несет ответственности за убытки Покупателя, вызванные неправильным использованием товара.",
      "7.2. Продавец не несет ответственности за убытки, которые могут возникнуть у Покупателя в результате использования сайта Продавца, если они не вызваны непосредственно действиями Продавца.",
      "7.3. Покупатель несет ответственность за достоверность предоставленной информации при оформлении заказа.",
      "7.4. Стороны несут ответственность за неисполнение или ненадлежащее исполнение обязательств по данной Оферте в соответствии с действующим законодательством.",
    ],
    [
      "8. Разрешение споров",
      "8.1. В случае возникновения споров стороны обязуются принять меры по их разрешению путем переговоров.",
      "8.2. В случае невозможности разрешения споров путем переговоров споры подлежат разрешению в соответствии с действующим законодательством.",
    ],
    [
      "9. Заключительные положения",
      "9.1. Настоящая Оферта является действительной до ее изменения Продавцом.",
      "9.2. Продавец оставляет за собой право изменять условия настоящей Оферты без предварительного уведомления Покупателя.",
      "9.3. Все споры, связанные с настоящей Офертой, регулируются действующим законодательством Российской Федерации.",
    ],
  ];

  useEffect(() => {
    const goodsData = [
      {
        id: 1,
        title: "Паприка",
        description:
          "Свежая паприка высокого качества, которая прекрасно подойдет для добавления аромата и вкуса в ваши блюда. Она богата витамином С и является источником антиоксидантов. Паприка часто используется в приготовлении мясных и овощных блюд, супов, соусов и маринадов.",
        sale: true,
        oldCost: 257,
        newCost: 202,
        category: "Пряности",
        weight: 100,
        imageURL: "https://cdn1.ozone.ru/s3/multimedia-n/6052991663.jpg",
        expiryDays: 60,
        ingredients: ["паприка", "соль", "чеснок", "лук", "перец", "приправы"],
        energyValuePer100g: {
          kcal: 20,
          proteins: 0.9,
          fatContent: 0.4,
          carbContent: 3.9,
        },
      },
      {
        id: 2,
        title: "Корица",
        description:
          "Натуральная корица для приготовления ароматных блюд. Корица обладает сладким и теплым вкусом с нотками древесной пряности. Она отлично сочетается с выпечкой, карамелью, фруктами, кофе и чаем. Кроме того, корица является источником антиоксидантов и имеет положительное влияние на пищеварительную систему.",
        sale: false,
        oldCost: 180,
        newCost: 180,
        category: "Пряности",
        weight: 50,
        imageURL:
          "https://upload.wikimedia.org/wikipedia/commons/d/de/Cinnamomum_verum_spices.jpg",
        expiryDays: 365,
        ingredients: [
          "корица",
          "сахар",
          "мед",
          "яблоки",
          "орехи",
          "ваниль",
          "цитрусовые",
        ],
        energyValuePer100g: {
          kcal: 247,
          proteins: 4,
          fatContent: 1,
          carbContent: 81,
        },
      },
      {
        id: 3,
        title: "Гвоздика",
        description:
          "Ароматная гвоздика для добавления в пироги и соусы. Гвоздика обладает пряным ароматом с легкими цитрусовыми нотками. Она используется в приготовлении кондитерских изделий, маринадов, глинтвейна и пряных соусов. Гвоздика также имеет антибактериальные свойства и способствует улучшению пищеварения.",
        sale: true,
        oldCost: 150,
        newCost: 120,
        category: "Пряности",
        weight: 50,
        imageURL:
          "https://m.receptov.net/uploads/posts/2015-03/1425969011_gvozdika.jpg",
        expiryDays: 730,
        ingredients: [
          "гвоздика",
          "корица",
          "имбирь",
          "анис",
          "кардамон",
          "перец",
          "цитрусовые",
        ],
        energyValuePer100g: {
          kcal: 314,
          proteins: 6.1,
          fatContent: 20,
          carbContent: 61.2,
        },
      },
      {
        id: 4,
        title: "Кардамон",
        description:
          "Приправа кардамон придает особый аромат и вкус блюдам. Кардамон обладает сладким и пряным ароматом с цитрусовыми и хвойными нотками. Он широко используется в приготовлении десертов, кофе, чая, карри, маринадов и соусов. Кардамон также обладает противовоспалительными и противомикробными свойствами.",
        sale: false,
        oldCost: 220,
        newCost: 220,
        category: "Пряности",
        weight: 50,
        imageURL:
          "https://www.kartinki24.ru/uploads/gallery/main/471/kartinki24_ru_spice_10.jpg",
        expiryDays: 365,
        ingredients: [
          "кардамон",
          "корица",
          "имбирь",
          "гвоздика",
          "перец",
          "цитрусовые",
          "гвоздика",
        ],
        energyValuePer100g: {
          kcal: 311,
          proteins: 10.8,
          fatContent: 6.7,
          carbContent: 68.5,
        },
      },
      {
        id: 5,
        title: "Куркума",
        description:
          "Натуральная куркума для приготовления здоровых блюд. Куркума имеет яркий желтый цвет и пряный вкус с легкими горьковатыми нотками. Она широко используется в индийской, тайской и арабской кухне. Куркума является природным антиоксидантом и обладает противовоспалительными свойствами.",
        sale: true,
        oldCost: 180,
        newCost: 150,
        category: "Пряности",
        weight: 100,
        imageURL:
          "https://dailyfit.ru/wp-content/uploads/2017/10/kurkuma-polnoe-rukovodstvo.jpg",
        expiryDays: 365,
        ingredients: [
          "куркума",
          "корица",
          "имбирь",
          "кардамон",
          "перец",
          "цитрусовые",
          "гвоздика",
        ],
        energyValuePer100g: {
          kcal: 312,
          proteins: 9.7,
          fatContent: 3.2,
          carbContent: 67,
        },
      },
      {
        id: 6,
        title: "Зерна Кофе Arabica",
        description:
          "Отборные зерна кофе Arabica для идеального кофе. Зерна кофе Arabica обладают насыщенным ароматом и богатым вкусом. Они подходят для приготовления эспрессо, американо, капуччино и других напитков. Зерна Arabica содержат меньше кофеина, поэтому они более мягкие и нежные во вкусе.",
        sale: true,
        oldCost: 450,
        newCost: 400,
        category: "Кофе",
        weight: 250,
        imageURL: "https://cdn.100sp.ru/cache_pictures/189063833/thumb300",
        expiryDays: 365,
        ingredients: ["зерна кофе Arabica"],
        energyValuePer100g: {
          kcal: 2,
          proteins: 0.2,
          fatContent: 0.2,
          carbContent: 0,
        },
      },
      {
        id: 7,
        title: "Зерна Кофе Robusta",
        description:
          "Качественные зерна кофе Robusta для бодрого начала дня. Зерна кофе Robusta отличаются высоким содержанием кофеина, что придает напитку более насыщенный и крепкий вкус. Они идеально подходят для приготовления эспрессо и кофейных смесей.",
        sale: false,
        oldCost: 320,
        newCost: 320,
        category: "Кофе",
        weight: 250,
        imageURL:
          "https://ambassador-manufaktura.ru/upload/iblock/153/gyqp2kykrr6cnplikro408ck3lfb65u7.png",
        expiryDays: 365,
        ingredients: ["зерна кофе Robusta"],
        energyValuePer100g: {
          kcal: 2,
          proteins: 0.2,
          fatContent: 0.2,
          carbContent: 0,
        },
      },
      {
        id: 8,
        title: "Зеленый Чай",
        description:
          "Свежий зеленый чай с ярким ароматом и нежным вкусом. Зеленый чай обладает множеством полезных свойств благодаря высокому содержанию антиоксидантов. Он помогает повысить иммунитет, улучшить пищеварение и снизить уровень стресса. Зеленый чай также является источником приятного бодрящего эффекта.",
        sale: true,
        oldCost: 150,
        newCost: 120,
        category: "Чай",
        weight: 50,
        imageURL:
          "https://origamitea.ru/wp-content/uploads/matcha_tokusen_new_web.jpg",
        expiryDays: 365,
        ingredients: [
          "зеленый чай",
          "цитрусовые",
          "мед",
          "мята",
          "имбирь",
          "лимон",
          "ягоды",
          "травы",
        ],
        energyValuePer100g: {
          kcal: 0,
          proteins: 0,
          fatContent: 0,
          carbContent: 0,
        },
      },
      {
        id: 9,
        title: "Черный Чай",
        description:
          "Классический черный чай для настоящих ценителей. Черный чай обладает насыщенным вкусом и ароматом, который прекрасно подходит для утреннего чаепития. Он идеально сочетается с молоком, лимоном, медом и другими добавками. Черный чай помогает бодрствовать и наслаждаться чашкой чая в течение дня.",
        sale: false,
        oldCost: 100,
        newCost: 100,
        category: "Чай",
        weight: 100,
        imageURL:
          "https://ae01.alicdn.com/kf/S546ee9dd994040ae8383864343ff5f63x.jpeg",
        expiryDays: 365,
        ingredients: [
          "черный чай",
          "сахар",
          "молоко",
          "лимон",
          "ваниль",
          "цитрусовые",
          "цветы",
          "фрукты",
        ],
        energyValuePer100g: {
          kcal: 0,
          proteins: 0,
          fatContent: 0,
          carbContent: 0,
        },
      },
      {
        id: 10,
        title: "Ройбуш",
        description:
          "Полезный ройбуш без кофеина для расслабляющего чая. Ройбуш является нежным и мягким напитком с нотками сладости и орехового аромата. Он не содержит кофеина, поэтому подходит для употребления вечером. Ройбуш также обладает рядом полезных свойств и помогает расслабиться после напряженного дня.",
        sale: true,
        oldCost: 120,
        newCost: 100,
        category: "Чай",
        weight: 50,
        imageURL:
          "https://lenta.servicecdn.ru/globalassets/1/-/50/48/08/144947.png?preset=fulllossywhite",
        expiryDays: 365,
        ingredients: [
          "ройбуш",
          "ягоды",
          "фрукты",
          "мед",
          "цитрусовые",
          "цветы",
        ],
        energyValuePer100g: {
          kcal: 0,
          proteins: 0,
          fatContent: 0,
          carbContent: 0,
        },
      },

      {
        id: 11,
        title: "Оливковое Масло",
        description:
          "Высококачественное оливковое масло первого отжима. Это масло произведено из отборных оливок методом первого холодного отжима, чтобы сохранить все полезные свойства и натуральный вкус. Оливковое масло обладает нежным ароматом и является идеальным дополнением к различным блюдам. Оно богато мононенасыщенными жирами, которые способствуют здоровью сердца и снижению уровня холестерина. Попробуйте это масло в салатах, соусах и горячих блюдах для придания им богатого вкуса и аромата.",
        sale: false,
        oldCost: 350,
        newCost: 350,
        category: "Масла",
        weight: 500,
        imageURL:
          "https://mvfood.ru/wp-content/uploads/2018/08/%D0%9E%D0%BB%D0%B8%D0%B2%D0%BA%D0%BE%D0%B2%D0%BE%D0%B5-%D0%BC%D0%B0%D1%81%D0%BB%D0%BE-%D0%90%D0%B3%D1%83%D1%80%D0%B5%D0%BB%D0%B8%D0%BE-Attika-Food-500%D0%BC%D0%BB-%D0%93%D1%80%D0%B5%D1%86%D0%B8%D1%8F.jpg",
        expiryDays: 30,
        ingredients: ["оливки", "оливковое масло"],
        energyValuePer100g: {
          kcal: 900,
          proteins: 0,
          fatContent: 100,
          carbContent: 0,
        },
      },
      {
        id: 12,
        title: "Кокосовое Масло",
        description:
          "Натуральное кокосовое масло для разнообразных блюд. Это масло получено из свежих кокосов с помощью специального процесса экстракции, чтобы сохранить все его природные свойства. Кокосовое масло обладает нежным ароматом и легким вкусом кокоса, что делает его идеальным для использования в выпечке, жарке и салатах. Оно богато среднецепочечными жирными кислотами, которые быстро усваиваются организмом и являются источником энергии.",
        sale: true,
        oldCost: 999,
        newCost: 880,
        category: "Масла",
        weight: 500,
        imageURL:
          "https://drthai.ru/wp-content/uploads/2018/04/tropicana-500-1.jpg",
        expiryDays: 30,
        ingredients: ["кокосы", "кокосовое масло"],
        energyValuePer100g: {
          kcal: 862,
          proteins: 0,
          fatContent: 100,
          carbContent: 0,
        },
      },
      {
        id: 13,
        title: "Грецкое Масло",
        description:
          "Полезное грецкое масло для салатов и заправок. Это масло получено из отборных грецких орехов, которые обладают богатым вкусом и ароматом. Грецкое масло содержит множество полезных веществ, включая омега-3 жирные кислоты, антиоксиданты и витамины. Оно идеально подходит для использования в салатах, заправках и приготовлении блюд на гриле. Попробуйте это масло, чтобы придать вашим блюдам неповторимый вкус и пользу для здоровья.",
        sale: false,
        oldCost: 280,
        newCost: 280,
        category: "Масла",
        weight: 250,
        imageURL:
          "https://img.vkusvill.ru/pim/images/site_LargeWebP/869e9645-e826-414b-98d0-7c303ba89759.webp?1683714862.575",
        expiryDays: 30,
        ingredients: ["грецкие орехи", "грецкое масло"],
        energyValuePer100g: {
          kcal: 900,
          proteins: 0,
          fatContent: 100,
          carbContent: 0,
        },
      },
      {
        id: 14,
        title: "Арахисовое Масло",
        description:
          "Нежное арахисовое масло для азиатской кухни. Это масло получено из отборных арахисов, которые придают ему неповторимый аромат и вкус. Арахисовое масло является популярным ингредиентом в азиатской кухне и идеально подходит для приготовления блюд, таких как лапша, соусы и маринады. Оно богато мононенасыщенными жирами, которые полезны для сердечно-сосудистой системы и общего здоровья.",
        sale: true,
        oldCost: 150,
        newCost: 130,
        category: "Масла",
        weight: 250,
        imageURL:
          "https://cdn-irec.r-99.com/sites/default/files/imagecache/300o/product-images/34864/pnb-00001-0.jpg",
        expiryDays: 30,
        ingredients: ["арахис", "арахисовое масло"],
        energyValuePer100g: {
          kcal: 884,
          proteins: 0,
          fatContent: 100,
          carbContent: 0,
        },
      },
      {
        id: 15,
        title: "Мед Липовый",
        description:
          "Ароматный липовый мед с натуральными вкусовыми качествами. Этот мед получен из цветов липы, которые придают ему сладкий и ароматный вкус. Липовый мед является натуральным источником витаминов и минералов, таких как железо и калий. Он идеально подходит для употребления с чаем, йогуртом и выпечкой. Попробуйте этот мед, чтобы насладиться его натуральными свойствами и приятным вкусом.",
        sale: true,
        oldCost: 899,
        newCost: 699,
        category: "Мед",
        weight: 500,
        imageURL:
          "https://medkray.ru/wp-content/uploads/2020/01/lipa-premium-1.jpg",
        expiryDays: 30,
        ingredients: ["нектар липы", "липовый мед"],
        energyValuePer100g: {
          kcal: 319,
          proteins: 0.8,
          fatContent: 0,
          carbContent: 79.6,
        },
      },
      {
        id: 16,
        title: "Мед Гречишный",
        description:
          "Полезный гречишный мед с нежным ароматом и вкусом. Этот мед получен из цветов гречихи, которые придают ему особый аромат и сладость. Гречишный мед является богатым источником антиоксидантов и полезных веществ, которые способствуют укреплению иммунной системы и общему благополучию. Он отлично сочетается с йогуртом, хлебом и кашами. Попробуйте этот мед, чтобы насладиться его уникальными вкусовыми качествами и получить пользу для здоровья.",
        sale: false,
        oldCost: 180,
        newCost: 180,
        category: "Мед",
        weight: 500,
        imageURL:
          "https://allhoney.ru/upload/iblock/ab8/ab8e245fc09556471f398f341b65d612.jpg",
        expiryDays: 30,
        ingredients: ["нектар гречихи", "гречишный мед"],
        energyValuePer100g: {
          kcal: 314,
          proteins: 0.8,
          fatContent: 0,
          carbContent: 78.3,
        },
      },
      {
        id: 17,
        title: "Мед Цветочный",
        description:
          "Цветочный мед с приятным сладким вкусом. Этот мед получен из цветов различных полевых и садовых растений, что придает ему разнообразие вкусовых нюансов. Цветочный мед является натуральным источником энергии и питательных веществ. Он прекрасно сочетается с тостами, йогуртом и чаем. Попробуйте этот мед, чтобы насладиться его сладким вкусом и получить заряд энергии.",
        sale: true,
        oldCost: 1299,
        newCost: 1009,
        category: "Мед",
        weight: 400,
        imageURL: "https://av.ru/images/cms/data/items/247030/card/247030.jpg",
        expiryDays: 30,
        ingredients: ["нектар различных цветов", "цветочный мед"],
        energyValuePer100g: {
          kcal: 309,
          proteins: 0.8,
          fatContent: 0,
          carbContent: 76.9,
        },
      },
      {
        id: 18,
        title: "Мед Акациевый",
        description:
          "Натуральный акациевый мед с деликатным ароматом. Этот мед получен из цветов акации, которые придают ему нежный аромат и сладость. Акациевый мед является источником полезных веществ и имеет мягкий и нежный вкус. Он отлично подходит для использования в выпечке, чаях и горячих напитках. Попробуйте этот мед, чтобы насладиться его приятным ароматом и нежным вкусом.",
        sale: false,
        oldCost: 160,
        newCost: 160,
        category: "Мед",
        weight: 500,
        imageURL:
          "https://calorizator.ru/sites/default/files/imagecache/product_512/product/honey-1.jpg",
        expiryDays: 30,
        ingredients: ["нектар акации", "акациевый мед"],
        energyValuePer100g: {
          kcal: 304,
          proteins: 0.8,
          fatContent: 0,
          carbContent: 76,
        },
      },
      {
        id: 19,
        title: "Грецкие Орехи",
        description:
          "Свежие грецкие орехи, богатые полезными веществами. Эти орехи обладают превосходным вкусом и являются богатым источником омега-3 жирных кислот, антиоксидантов и витаминов. Грецкие орехи полезны для здоровья сердца, мозга и общего благополучия. Используйте их в выпечке, салатах или просто закусывайте в чистом виде. Попробуйте эти орехи, чтобы получить массу пользы и насладиться их неповторимым вкусом.",
        sale: true,
        oldCost: 250,
        newCost: 200,
        category: "Орехи",
        weight: 200,
        imageURL:
          "https://sostavproduktov.ru/sites/default/files/styles/article_main/public/pictures/frukty%2C%20orehi%2C%20yagody/svoystva_greckih_orehov.jpg?itok=OZDThwYQ",
        expiryDays: 30,
        ingredients: ["грецкие орехи"],
        energyValuePer100g: {
          kcal: 654,
          proteins: 14.7,
          fatContent: 65.2,
          carbContent: 13.7,
        },
      },
      {
        id: 20,
        title: "Миндаль",
        description:
          "Ароматный миндаль с хрустящей текстурой. Этот орех является вкусным и питательным продуктом. Миндаль богат белками, витаминами, минералами и полезными жирами, которые способствуют здоровью кожи, волос и сердечно-сосудистой системы. Он отлично подходит для использования в выпечке, мюсли и салатах. Попробуйте миндаль, чтобы насладиться его вкусом и получить пользу для здоровья.",
        sale: false,
        oldCost: 180,
        newCost: 180,
        category: "Орехи",
        weight: 150,
        imageURL:
          "https://orehiko.ru/image/cache/catalog/products/doypack2/MindalJareniy200gg-600x600.jpg",
        expiryDays: 30,
        ingredients: ["миндаль"],
        energyValuePer100g: {
          kcal: 579,
          proteins: 21.2,
          fatContent: 49.9,
          carbContent: 21.7,
        },
      },

      {
        id: 21,
        title: "Фисташки",
        description:
          "Качественные фисташки для удовольствия и здоровья. Фисташки - это вкусные орехи, богатые полезными веществами. Они являются источником белка, жирных кислот, витаминов и минералов. Фисташки известны своими антиоксидантными свойствами и способностью снижать уровень холестерина в крови. Они также полезны для сердечно-сосудистой системы и могут помочь снизить риск развития сердечно-сосудистых заболеваний. Фисташки могут быть использованы в кулинарии для добавления в различные блюда или употребляться самостоятельно в качестве перекуса.",
        sale: true,
        oldCost: 199,
        newCost: 149,
        category: "Орехи",
        weight: 40,
        imageURL:
          "https://static.insales-cdn.com/r/dXzrMUVutHg/rs:fit:440:0:1/q:100/plain/images/products/1/1415/232088967/large_%D1%84%D0%B8%D1%81%D1%82%D0%B0%D1%88%D0%BA%D0%B0-40-%D0%B3.jpg",
        expiryDays: 30,
        ingredients: [
          "фисташки",
          "соль",
          "растительное масло",
          "ароматизаторы",
        ],
        energyValuePer100g: {
          kcal: 562,
          proteins: 20,
          fatContent: 45,
          carbContent: 28,
        },
      },
      {
        id: 22,
        title: "Кешью",
        description:
          "Нежные кешью с пикантным вкусом и маслянистой текстурой. Кешью - это популярные орехи, которые обладают приятным вкусом и множеством полезных свойств. Они богаты жирными кислотами, белком, витаминами и минералами. Кешью содержит антиоксиданты, которые могут помочь защитить организм от вредного воздействия свободных радикалов. Они также способствуют улучшению пищеварения и поддержанию здоровья кожи. Кешью можно употреблять в свежем виде, добавлять в салаты или использовать в приготовлении различных блюд.",
        sale: false,
        oldCost: 190,
        newCost: 190,
        category: "Орехи",
        weight: 150,
        imageURL:
          "https://static.onlinetrade.ru/img/items/b/keshyu_zharenyy_semushka_150_gr._1.jpg",
        expiryDays: 30,
        ingredients: ["кешью", "соль", "растительное масло"],
        energyValuePer100g: {
          kcal: 553,
          proteins: 18.5,
          fatContent: 43.8,
          carbContent: 30.2,
        },
      },
      {
        id: 23,
        title: "Овсяные Хлопья",
        description:
          "Полезные овсяные хлопья для здорового завтрака. Овсяные хлопья - это отличный выбор для начала дня. Они богаты клетчаткой, белком, витаминами и минералами, такими как железо, цинк и магний. Они способствуют поддержанию нормального уровня холестерина, улучшению пищеварения и долгосрочному чувству сытости. Овсяные хлопья могут быть приготовлены в виде каши, добавлены в йогурт или использованы в выпечке.",
        sale: true,
        oldCost: 119,
        newCost: 99,
        category: "Злаки",
        weight: 400,
        imageURL:
          "https://imgproxy.sbermarket.ru/imgproxy/width-auto/czM6Ly9jb250ZW50LWltYWdlcy1wcm9kL3Byb2R1Y3RzLzkwNjkxNC9vcmlnaW5hbC8xLzIwMjItMDgtMjNUMDElM0EyNCUzQTA3LjAyMTAwMCUyQjAwJTNBMDAvOTA2OTE0XzEuanBn.jpg",
        expiryDays: 30,
        ingredients: ["овсяные хлопья", "сахар", "соль"],
        energyValuePer100g: {
          kcal: 367,
          proteins: 12.3,
          fatContent: 6.2,
          carbContent: 61.4,
        },
      },
      {
        id: 24,
        title: "Гречка",
        description:
          "Питательная гречка для разнообразных гарниров. Гречка - это полезный продукт, богатый клетчаткой, белком и минералами, такими как магний, железо и цинк. Она обладает антиоксидантными свойствами и может помочь в поддержании нормального уровня холестерина. Гречка является хорошим источником энергии и может быть использована в качестве гарнира для мясных или овощных блюд.",
        sale: false,
        oldCost: 80,
        newCost: 80,
        category: "Злаки",
        weight: 500,
        imageURL:
          "https://img.vkusvill.ru/pim/images/site_LargeWebP/8f9584f5-875b-4087-b69c-79a49c2db54c.webp?1656532336.8531",
        expiryDays: 30,
        ingredients: ["гречка"],
        energyValuePer100g: {
          kcal: 335,
          proteins: 12.6,
          fatContent: 2.6,
          carbContent: 62.1,
        },
      },
      {
        id: 25,
        title: "Киноа",
        description:
          "Полезная киноа с высоким содержанием белка. Киноа - это зерновой продукт, который является отличным источником белка, клетчатки, железа и других минералов. Она также богата антиоксидантами, которые помогают защитить организм от свободных радикалов. Киноа имеет нежный вкус и текстуру, и может быть использована в качестве гарнира или добавлена в салаты и другие блюда.",
        sale: true,
        oldCost: 150,
        newCost: 120,
        category: "Злаки",
        weight: 350,
        imageURL:
          "https://fasol.tv/upload/iblock/48a/h3ucsj0zxlzzo1ov482poqk53jww663z.jpg",
        expiryDays: 30,
        ingredients: ["киноа", "соль"],
        energyValuePer100g: {
          kcal: 368,
          proteins: 14.1,
          fatContent: 6.1,
          carbContent: 59.6,
        },
      },
      {
        id: 26,
        title: "Рис Басмати",
        description:
          "Ароматный рис Басмати для приготовления вкусных блюд. Рис Басмати - это популярный сорт риса, который характеризуется ароматом и нежной текстурой. Он богат углеводами, витаминами и минералами. Рис Басмати имеет низкий гликемический индекс, что означает, что он не вызывает резкого увеличения уровня сахара в крови. Он отлично подходит для приготовления различных блюд, таких как пилавы, ризотто или салаты.",
        sale: false,
        oldCost: 100,
        newCost: 100,
        category: "Злаки",
        weight: 500,
        imageURL:
          "https://tuttofoods.ru/upload/resize_cache/iblock/e6c/500_500_1/e6c5800519615006a7ba2b2664737c12.jpg",
        expiryDays: 30,
        ingredients: ["рис Басмати", "соль"],
        energyValuePer100g: {
          kcal: 350,
          proteins: 7.2,
          fatContent: 0.7,
          carbContent: 78,
        },
      },
      {
        id: 27,
        title: "Изюм",
        description:
          "Сочный изюм для добавления в выпечку и каши. Изюм - это сушеные виноградные ягоды, которые обладают сладким вкусом и приятной текстурой. Он является источником клетчатки, энергии и антиоксидантов. Изюм часто используется в кулинарии для добавления в выпечку, каши или смешанные сухофрукты. Он также может быть употреблен самостоятельно в качестве перекуса.",
        sale: true,
        oldCost: 90,
        newCost: 70,
        category: "Сухофрукты",
        weight: 200,
        imageURL:
          "https://verifica.files.wordpress.com/2011/10/blog_uvetta-grappa-cucina.jpg",
        expiryDays: 30,
        ingredients: ["изюм"],
        energyValuePer100g: {
          kcal: 299,
          proteins: 3.7,
          fatContent: 0.5,
          carbContent: 69,
        },
      },
      {
        id: 28,
        title: "Курага",
        description:
          "Питательная курага для украшения и обогащения блюд. Курага - это сушеные абрикосы, которые имеют сладкий вкус и мягкую текстуру. Она богата клетчаткой, витаминами и минералами, такими как калий и железо. Курага часто используется в кулинарии для приготовления сладостей, выпечки или добавления в салаты и каши. Она также может быть употреблена самостоятельно в качестве перекуса.",
        sale: false,
        oldCost: 100,
        newCost: 100,
        category: "Сухофрукты",
        weight: 200,
        imageURL:
          "https://img.vkusvill.ru/pim/images/site_LargeWebP/2659f600-0f41-4542-9df6-0145a07410c6.jpg?1649795469.5184",
        expiryDays: 30,
        ingredients: ["курага"],
        energyValuePer100g: {
          kcal: 231,
          proteins: 3.5,
          fatContent: 0.4,
          carbContent: 55,
        },
      },
      {
        id: 29,
        title: "Чернослив",
        description:
          "Ароматный чернослив для десертов и вкусных компотов. Чернослив - это сушеные сливы, которые обладают сладким вкусом и сочной текстурой. Он богат клетчаткой, витаминами и минералами. Чернослив часто используется в выпечке, десертах или для приготовления компотов. Он также может быть употреблен самостоятельно в качестве перекуса.",
        sale: true,
        oldCost: 149,
        newCost: 129,
        category: "Сухофрукты",
        weight: 100,
        imageURL: "https://www.bekafoods.ru/images/chernosliv02.jpg",
        expiryDays: 30,
        ingredients: ["чернослив"],
        energyValuePer100g: {
          kcal: 235,
          proteins: 2.3,
          fatContent: 0.7,
          carbContent: 57,
        },
      },
      {
        id: 30,
        title: "Инжир",
        description:
          "Сладкий инжир для перекуса и приготовления сладостей. Инжир - это фрукт, который имеет сладкий вкус и мягкую текстуру. Он богат клетчаткой, витаминами и минералами, такими как калий и магний. Инжир часто используется в приготовлении сладостей, десертов или употребляется самостоятельно в качестве перекуса.",
        sale: false,
        oldCost: 150,
        newCost: 150,
        category: "Сухофрукты",
        weight: 200,
        imageURL:
          "https://produkt-pitaniya.info/wp-content/uploads/2022/04/inzhir-poleznyj-produkt.jpg",
        expiryDays: 30,
        ingredients: ["инжир"],
        energyValuePer100g: {
          kcal: 74,
          proteins: 0.7,
          fatContent: 0.3,
          carbContent: 19,
        },
      },

      {
        id: 31,
        title: "Кокосовый Сахар",
        description:
          "Естественный кокосовый сахар для здоровых сладостей. Получен из экологически чистых кокосовых пальм, сохраняя все полезные свойства.",
        sale: true,
        oldCost: 169,
        newCost: 139,
        category: "Сахар",
        weight: 60,
        imageURL:
          "https://static.detmir.st/media_out/236/422/3422236/1500/0.jpg?1652264541062",
        expiryDays: 60,
        ingredients: [
          "органический кокосовый сахар",
          "экстракт кокоса",
          "орехи",
          "фрукты",
          "миндальное масло",
          "ваниль",
        ],
        energyValuePer100g: {
          kcal: 120,
          proteins: 2,
          fatContent: 3,
          carbContent: 25,
        },
      },
      {
        id: 32,
        title: "Тростниковый Сахар",
        description:
          "Натуральный тростниковый сахар для приготовления напитков и выпечки. Идеально подходит для сладких десертов и горячих напитков.",
        sale: false,
        oldCost: 90,
        newCost: 90,
        category: "Сахар",
        weight: 500,
        imageURL: "https://www.grantspb.ru/ManyImages/images/104552/104552.jpg",
        expiryDays: 365,
        ingredients: ["тростниковый сахар"],
        energyValuePer100g: {
          kcal: 80,
          proteins: 0,
          fatContent: 0,
          carbContent: 20,
        },
      },
      {
        id: 33,
        title: "Гималайская Соль",
        description:
          "Полезная гималайская соль для использования в кулинарии. Богатая минералами и микроэлементами, добавит вашим блюдам уникальный вкус и пользу для здоровья.",
        sale: false,
        oldCost: 70,
        newCost: 70,
        category: "Соль",
        weight: 250,
        imageURL:
          "https://mvfood.ru/wp-content/uploads/2017/12/%D0%B0%D0%B4%D1%8B%D0%B3%D0%B5%D1%8F.jpg",
        expiryDays: 730,
        ingredients: ["гималайская соль"],
        energyValuePer100g: {
          kcal: 0,
          proteins: 0,
          fatContent: 0,
          carbContent: 0,
        },
      },
      {
        id: 34,
        title: "Морская Соль",
        description:
          "Натуральная морская соль с микроэлементами для приправ. Идеально подходит для маринадов, приготовления мясных и рыбных блюд.",
        sale: true,
        oldCost: 99,
        newCost: 79,
        category: "Соль",
        weight: 500,
        imageURL:
          "https://12bb6ecf-bda5-4c99-816b-12bda79f6bd9.selcdn.net/upload//Photo_Tovar/37780603_1639673116.jpg",
        expiryDays: 365,
        ingredients: ["морская соль"],
        energyValuePer100g: {
          kcal: 0,
          proteins: 0,
          fatContent: 0,
          carbContent: 0,
        },
      },
      {
        id: 35,
        title: "Розовая Соль",
        description:
          "Уникальная розовая соль для оригинальных блюд. Имеет нежный вкус и прекрасно дополняет мясные и овощные блюда.",
        sale: false,
        oldCost: 100,
        newCost: 100,
        category: "Соль",
        weight: 250,
        imageURL:
          "https://cdn.shopify.com/s/files/1/0606/2270/0795/products/31244_800x.jpg?v=1652124885",
        expiryDays: 730,
        ingredients: ["розовая соль"],
        energyValuePer100g: {
          kcal: 0,
          proteins: 0,
          fatContent: 0,
          carbContent: 0,
        },
      },
    ];
    onData(goodsData, privacyData, purchases);
  }, []);

  return null;
};

export default DataComponent;
