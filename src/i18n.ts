import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    fallbackLng: 'ru',
    debug: true,
    resources: {
        ru: {
          translation: {
            YourRuneDay:'ТВОЯ РУНА ДНЯ',
            Open:'ОТКРОЙ',
            WhatHave:'ЧТО ЕСТЬ',
            WhatDo:'ЧТО ДЕЛАТЬ',
            WhatBeImFuture:'ЧТО БУДЕТ',


            Algizup:{
                name:"Algiz",
                desc:"Покровительство. Тростник. Лось. ",
                text:"Существенным является контроль эмоций. Во времена перемен, поворотов в жизненном курсе и ускоренного самоизменения важно не поддаваться эмоциям — и приятным, и неприятным. Для этого знака характерны новые возможности и вызовы. Но им сопутствуют злоупотребления и неблагоприятные воздействия. Эта руна служит зеркалом для Воина Духа — того, кто вовлечен в битву с самим собой. Защищенность воина похожа на предупреждающий шорох осоки или на изогнутые рога лося - и то, и другое помогает поддерживать вокруг свободное пространство. Помните, что своевременное действие и правильное поведение - единственное, что дает настоящую защиту. ",
                },
            Algizdown:{
                name:"Algiz",
                desc:"Покровительство. Тростник. Лось. ",
                text:"В перевернутом положении: Будьте внимательны к своему здоровью, тщательно следите за связями, которые складываются у вас в это время, и не увеличивайте бремя, лежащее на других. Если вы считаете удобным вступить в связь с людьми, которые «используют» вас, помните об этом и возьмите на себя ответственность за свою позицию - тогда вы можете только выиграть. ",
                },
            Ansuzup:{
                name:"Ansuz",
                desc:"Знаки. Руна Посланника. Бог Локи. ",
                text:"Ключевая нота здесь - получение, посланий, подарков, знаков. Даже своевременное предупреждение можно рассматривать как дар. Старайтесь быть очень внимательны и чутки во время встреч, визитов, случайных столкновений, особенно с теми, кто обладает большей мудростью, чем вы. Знаку соответствует новое чувство семейного единства. ",
                },
            Ansuzdown:{
                name:"Ansuz",
                desc:"Знаки. Руна Посланника. Бог Локи. ",
                text:"В перевернутом положении: Вы можете быть озабочены тем, что кажется прерванной связью, недостатком ясности или понимания - либо в вашем прошлом, либо в нынешней ситуации. Вы можете чувствовать, как что-то мешает принять предлагаемое. Чувство тщетности, зря потраченного усилия, бесплодного путешествия может вызвать в вас уныние. Но то, что происходит, своевременно в вашей ситуации. Если колодец засорен, время очистить его. ",
                },
            Berkanaup:{
                name:"Berkana",
                desc:"Рост. Перерождение. Береза. ",
                text:"Этот знак обозначает плодородие, которое способствует росту и символически, и реально. Рост может относиться к повседневным или к семейным делам, к взаимоотношениям со своим «Я». Это «выводящая» руна, в том смысле, что она ведет к расцвету и созреванию. Здесь требуется глубокое проникновение в вещи, осознанное и осторожное. Все темные углы должны быть очищены: это должно быть проделано тщательно, причем иногда необходима квалифицированная помощь. ",
                },
            Berkanadown:{
                name:"Berkana",
                desc:"Рост. Перерождение. Береза. ",
                text:"В перевернутом положении: события или, что более вероятно, черты характера препятствуют росту новой жизни. Вы можете чувствовать уныние из-за неспособности предпринять правильное действие. Но здесь требуется не уныние, а усердие и тщательность. Изучите то, что произошло, свою роль в этом, свои потребности и потребности других. Не ставите ли вы свои желания перед нуждами других? Проникайте вглубь, пока вы не сможете определить все препятствия росту в сложившейся ситуации. ",
                },
            Dagaz:{
                name:"Dagaz",
                desc:"Прорыв. Трансформация. День. ",
                text:"Появление этой руны отмечает главный сдвиг или прорыв в процессе самоизменения, полное преобразование состояния - поворот на 180 градусов. В каждой жизни бывает хоть один момент, который - если он угадан и пойман - навсегда изменяет ее течение. Поэтому действуйте с полной верой, даже если момент потребует от вас прыгнуть с пустыми руками в пустоту. Если этот знак сопровождается Чистой руной, масштаб трансформации может быть таким, что это будет предвещать смерть, успешное завершение вашего пути. Иногда эта руна предвещает большой период достижений и процветания. Тьма позади вас; начался день. ",
                },
            Ehwazup:{
                name:"Ehwaz",
                desc:"Движение. Прогресс. Конь. ",
                text:"Это знак прохождения, перехода и движения, новых мест обитания или новой жизни. Он также обозначает движение в смысле исправления или улучшения любой ситуации. Для этой руны характерно постепенное развитие и устойчивый прогресс, медленный рост через бесконечные сдвиги и перемены. Это может относиться и к делам, и к развитию идей. Взаимоотношения тоже должны подвергаться изменениям, чтобы существовать и развиваться. ",
                },
            Ehwazdown:{
                name:"Ehwaz",
                desc:"Движение. Прогресс. Конь. ",
                text:"В перевернутом положении: движение натыкается на препятствие. Будьте уверены, то, что вы делаете (или не делаете), своевременно. Дело не в упущенных случаях: мы просто должны понять, что нам открыты не все возможности. ",
                },
            Eihwaz:{
                name:"Eihwaz",
                desc:"Защита. Отвращающие силы. Тис. ",
                text:"Подвергаясь испытаниям, мы находим в себе силы преодолеть препятствия и предотвратить поражение. Одновременно мы развиваем в себе отвращение к поведению, которое создает тяжелые ситуации. Кажется, на вашем пути появилось препятствие - но задержка может оказаться благоприятной. Не следует слишком рваться вперед. Это не то время или ситуация, когда вы можете ощутить свое влияние. Совет этого знака - терпение. Здесь требуются предвидение и настойчивость. Предотвращайте предвидимые трудности с помощью правильных действий. Мы не столько те, кто делает, сколько те, кто решает. Когда наше решение чисто, действие не требует усилий, потому что его поддерживает и усиливает Вселенная. ",
                },
            Fehuup:{
                name:"Fehu",
                desc:"Владение. Поддержка. Скот. ",
                text:"Это руна исполнения: удовлетворенного честолюбия, полученной награды, счастливой любви. Этот знак призывает к глубокому изучению сути приобретения и выигрыша в вашей жизни. Внимательно вглядитесь - заключается ли то, что необходимо для вашего благосостояния, в богатстве и собственности или во владении самим собой и усилении воли. Другое значение этой руны связано с сохранением уже достигнутого. Наслаждайтесь своей удачей и не забывайте делиться ею. ",
                },
            Fehudown:{
                name:"Fehu",
                desc:"Владение. Поддержка. Скот. ",
                text:"В перевернутом положении: в вашей жизни может произойти значительное расстройство, потеря собственности — от незначительной до очень серьезной. Может быть, вам придется беспомощно сидеть и наблюдать, как то, что вы приобрели, начнет исчезать. Даже если есть повод для радости, не скатывайтесь к бессмысленному веселью, Перевернутая, эта руна указывает, что сомнительные ситуации обильны и приходят во многих формах и обличьях. Имея дело с теневой стороной этого знака, вы получаете возможность распознать, в чем заключается ваше подлинное питание. ",
                },
            Gebo:{
                name:"Gebo",
                desc:"Партнерство. Дар. ",
                text:"Появление этого знака показывает, что единство, объединение или участие - в какой-либо форме - совсем рядом. Но действительное партнерство может существовать только между отделенными друг от друга и целостными индивидами, которые не теряют своей обособленности даже в единстве и единении. Пусть между вами пляшет небесный ветер. У этого знака нет перевернутой позиции, потому что он обозначает дар свободы, от которого зависят все остальные дары. ",
                },
            Hagalaz:{
                name:"Hagalaz",
                desc:"Разрушение. Стихийные силы. Град. ",
                text:"Изменение, новшество, свобода и освобождение - качества этого знака. Его появление указывает на настоятельную внутреннюю необходимость освободиться от ограничивающего отождествления с материальной реальностью и ощутить мир проторазума. Это руна стихийного разрушения, событий полностью вне вашего контроля. Ожидайте разрушения ваших планов, потому что это могущественная пробуждающая сила, хотя формы ее воздействия могут быть различными. Лучше всего действие этого знака описывают слова «полный разрыв». ",
                },
            Inguz:{
                name:"Inguz",
                desc:"Плодородие. Новые начинания. Инг, Герой-Бог. ",
                text:"Завершение начинаний - вот что подразумевает этот знак. Появление этой руны означает, что у вас уже достаточно сил, чтобы достичь завершения, разрешения, вслед за чем придет новое начинание. Завершение здесь важнее всего. Если вам нужно закончить какое-то дело, сделайте это вашей главной задачей. Появление этого знака символизирует выход из состояния куколки. Одновременно с избавлением от старого вы освободитесь от напряжения и неуверенности. ",
                },
            Isa:{
                name:"Isa",
                desc:"Остановка. Утрата. Лед. ",
                text:"В вашей духовной жизни - зима. Вы можете обнаружить, что запутались в ситуации, смысла которой даже не в состоянии увидеть. Вы можете оказаться бессильны сделать что-нибудь, кроме как подчиниться, отступить, даже пожертвовать каким-нибудь долго вынашиваемым желанием. Будьте терпеливы, потому что этот период скрытого развития, предшествующий возрождению. Достижения и успехи сейчас маловероятны. В это время не надейтесь и не полагайтесь на помощь или дружескую поддержку. В своей изоляции сохраняйте осторожность и не пытайтесь упрямо проявить свою волю. ",
                },
            Jera:{
                name:"Jera",
                desc:"Жатва. Время урожая. Один год. ",
                text:"Руна благоприятных исходов. Она относится к любой деятельности или предприятию, с которым вы связаны. Появление этой руны придаст вам сил поддерживать хорошее расположение духа. Помните, однако, что быстрых результатов ожидать нельзя. Всегда требуется промежуток времени, отсюда ключевые слова «один год», символизирующие полный цикл времени перед жатвой, урожаем или избавлением. Вы подготовили почву и посадили семя. Теперь вы должны заботливо ухаживать за ним. ",
                },
            Kanoup:{
                name:"Kano",
                desc:"Раскрытие. Огонь. Факел. ",
                text:"Это руна раскрытия, обновленной ясности, рассеяния тьмы, покрывавшей какую-то часть вашей жизни. Во взаимоотношениях не может быть взаимного раскрытия. Вы можете послужить спусковым крючком, хронометром, осознав, что свет понимания опять доступен вам обоим. Поймите, что хоть, с одной стороны, вы ограничены и зависимы, с другой стороны, вы существуете в качестве точного центра, откуда, сливаясь, излучаются гармонизирующие и благоприятствующие силы Вселенной. Вы являетесь этим центром. Попросту говоря, если раньше вы действовали в темноте, сейчас вокруг достаточно света, чтобы увидеть, что пациент на операционном столе - вы сами. ",
                },
            Kanodown:{
                name:"Kano",
                desc:"Раскрытие. Огонь. Факел. ",
                text:"В перевернутом положении: Ждите омрачения в какой-нибудь ситуации или отношениях. Может быть, гибнет дружба, партнерство, брак или какая-то часть вашей личности, уже утратившая силу и полезность. Этот знак требует, чтобы вы с радостью отбросили прошлое и были готовы какое-то время жить с пустотой внутри: он требует развития внутреннего постоянства - способности не поддаваться инерции старых путей во время ожидания новых, которые через положенный срок приведут к свету. ",
                },
            Laguzup:{
                name:"Laguz",
                desc:"Поток. Вода. То, что ведет. ",
                text:"Эта руна соответствует нашей потребности без понимания и оценок погрузиться в жизнь. Она отвечает нашему стремлению к комфорту и удовлетворению эмоциональных потребностей. Успех достижим через контакт с тем, что вы знаете интуитивно, через «настройку» по своим собственным ритмам. Руна «я», находящаяся в верхнем положении к «Я», обозначает то, что алхимики называли «conjunctio», священный брак. ",
                },
            Laguzdown:{
                name:"Laguz",
                desc:"Поток. Вода. То, что ведет. ",
                text:"В перевернутом положении: предупреждение об опасности перенапряжения, чрезмерного усилия; предостережение против попыток превысить свои возможности или выйти за границы имеющихся у вас сил. ",
                },
            Mannazup:{
                name:"Mannaz",
                desc:"Эго. Я. Начальная точка - это Я. ",
                text:"Начальная точка - это Я. Только ясность, желание измениться будут эффективны. Следует оставаться скромным - это совет оракула. Независимо от того, каковы ваши заслуги, будьте уступчивым, сосредоточенным и умеренным. Старайтесь вести обычную жизнь необычным способом. Будьте удовлетворены, делая свое дело ради него самого. Никаких излишеств. ",
                },
            Mannazdown:{
                name:"Mannaz",
                desc:"Эго. Я. Начальная точка - это Я. ",
                text:"В перевернутом положении: если вы чувствуете преграду, эта руна советует вам быть честным с самим собой. Не думайте об окружающих, а спокойно загляните внутрь себя в поисках врагов своего развития. Вы увидите, что внешний «враг» - не более чем отражение того, что вы до этого момента не могли или не хотели осознать как идущее изнутри. Вызов здесь - сломать инерцию прошлых привычек. ",
                },
            Nauthizup:{
                name:"Nauthiz",
                desc:"Нужда. Принуждение. Страдания. ",
                text:"Нормальная или перевернутая, это сложная руна. Необходимость иметь дело с жестоким принуждением - ее урок. Роль этого знака - обозначение наших «теневых» зон, мест, где рост заторможен, что приводит к слабостям, которые мы негативно проецируем на других. Эта руна говорит - работайте с тенью, исследуйте, что внутри вас притягивает в вашу жизнь несчастье. Необходимость сдержанности здесь вне вопроса. Появление этой руны дает вам понять, что впереди остановки - поводы еще раз взвесить ваши планы. Пусть трудности этого момента помогут вам выправить взаимоотношения с вашим «Я». Помните, что прогрессу предшествует очищение. И еще раз обдумайте использование неудач. ",
                },
            Nauthizdown:{
                name:"Nauthiz",
                desc:"Нужда. Принуждение. Страдания. ",
                text:"В перевернутом положении: когда мы перестаем принимать что-то внутри нас за свое, то, что мы перестали признавать, производит опустошение. Здесь требуется очищение. Предприняв его, вы закалите характер и укрепите волю. Начните с самого трудного и двигайтесь к тому, что не сложно. Помните, что первоначально «страдать» означало - «подвергаться». Так и вы подвергаетесь действию темной части своего пути. Контролировать злобу, сдерживать импульсы, поддерживать в себе твердую веру - вот то, что сейчас требуется. ",
                },
            Othilup:{
                name:"Othil",
                desc:"Разделение. Отступление. Наследство. ",
                text:"Это время расходящихся путей. Старая кожа должна быть сброшена, изжившие себя отношения прекращены. Требуемым действием здесь является подчинение и, вполне вероятно, отступление, сопровождаемое знанием, как и когда отступить, и твердостью воли, чтобы осуществить это. С этой руной связана собственность - это знак приобретений и выигрышей. Однако выигрыш, «наследство» может исходить от чего-то, с чем вы должны расстаться. ",
                },
            Othildown:{
                name:"Othil",
                desc:"Разделение. Отступление. Наследство. ",
                text:"В перевернутом положении: сейчас не время для того, чтобы быть связанными старыми условностями и авторитетами. Спросите себя, что «ощущается» правильным для вас, и действуйте в соответствии со Светом, озаряющим теперь вашу жизнь. В это время нужна не жесткость, а текучесть. Когда появляется этот знак, помните: мы действуем без делания, и все оказывается сделанным. ",
                },
            Perthup:{
                name:"Perth",
                desc:"Посвящение. То, что скрыто. ",
                text:"Эта руна относится к Небу, к Непознаваемому, и связана с птицей Фениксом - мистической птицей, сжигающей себя и возрождающейся из пепла. Пути этого знака таинственны и скрыты. Достигаемое не проявляется с легкостью или готовностью. Это руна поиска. Она символизирует напряженно переживаемый аспект посвящения и связана с самым глубоким уровнем бытия, с фундаментом вашей судьбы. Для некоторых Perth означает опыт психической смерти. Если необходимо, отпустите все, без всяких исключений. Не что иное, как обновление Духа является ставкой. ",
                },
            Perthdown:{
                name:"Perth",
                desc:"Посвящение. То, что скрыто. ",
                text:"В перевернутом положении: совет не ожидать слишком много или - не ожидать обычным способом, потому, что старое подошло к концу: вы просто не можете делать все по-старому и не страдать. Перевернутый знак советует не думать слишком много о конечном результате и не привязываться к воспоминаниям о прошлых достижениях; поступая иначе, вы крадете у себя настоящее, единственное время, когда возможно самоизменение. ",
                },
            Raidoup:{
                name:"Raido",
                desc:"Путешествие. Общение. Союз. Воссоединение. ",
                text:"Это руна связи, гармонизации чего-то, имеющего две стороны, два элемента; руна окончательного воссоединения, которое достигается в конце путешествия, когда верхнее и нижнее становятся одним. Когда вы чисты, вы можете нейтрализовать собственное нежелание позволить верному действию пройти сквозь вас. Как всегда, путешествие направлено к самоисцелению, самоизменению и союзу. Доверяйте своему собственному процессу - вот сущность этого знака. ",
                },
            Raidodown:{
                name:"Raido",
                desc:"Путешествие. Общение. Союз. Воссоединение. ",
                text:"В перевернутом положении: будьте особенно внимательны к личным отношениям. В это время разрывы более вероятны, чем примирения. С вашей стороны потребуется усилие. Сохраняйте юмор - чтобы ни случилось, вам самому решать, как ответить. ",
                },
            Sowelu:{
                name:"Sowelu",
                desc:"Целостность. Жизненная сила. Энергия Солнца. ",
                text:"Этот знак символизирует требуемую нашей природой целостность. Он воплощает стремление к самореализации и указывает путь, которого вам следует держаться, но по каким-то скрытым причинам, а потому, что этого требует стержень вашей личности. Поиск целостности -это задача Воина Духа. Но вы, в силу своей природы, уже являетесь тем, чем стараетесь стать. Вы должны осознать свою сущность - свой персональный миф - и придать ему форму, творчески выразить его. Обладая большим могуществом, этот знак делает жизненную силу доступной для вас и обозначает время перезарядки и восстановления вплоть до клеточного уровня. Но вы можете отступить, оказавшись перед лицом давящей ситуации, особенно если события или люди требуют, чтобы вы «потратили» свою энергию. Своевременное отступление - одно из искусств Воина Духа. В то же самое время для некоторых эта руна содержит совет раскрыться, пропустить свет в ту область жизни, которая была тайной, отгороженной. ",
                },
            Teiwazup:{
                name:"Teiwaz",
                desc:"Воин. Тив, Бог Неба. ",
                text:"Это руна Воина Духа. Его битва всегда с собственным «Я». Обретение воли через действие, отсутствие привязанности к результату, постоянное осознание того, что все, что можно сделать — это позволить Воле Неба протекать сквозь себя и не стоять на собственном пути — вот черты Воина Духа. Когда появляется этот знак, речь идет о формировании характера. Если появление руны связаны с романтической привязанностью, значит, взаимоотношения, о которых идет речь, своевременны и провиденциальны. Если речь идет о вашей преданности делу, идее, пути или способу поведения, Руна Воина советует настойчивость, хотя иногда требуемый вид настойчивости - это терпение. В древности воины рисовали этот знак на своих щитах перед битвой. Сейчас, когда действуют, более очищенные энергии, этот же символ укрепляет вашу решимость в борьбе «Я» с «я». ",
                },
            Teiwazdown:{
                name:"Teiwaz",
                desc:"Воин. Тив, Бог Неба. ",
                text:"В перевернутом положении: опасность состоит в том, что энергия утекает или высасывается через необдуманное или несвоевременное действие. Если связь недолга, не печальтесь и знайте, что ее срок истек. Здесь подняты вопросы веры и доверия, а вместе с ними - правильности вашего способа существования в мире. Перевернутая, эта руна требует изучения ваших мотивов. Заняты ли вы покорением самого себя или стремитесь подчинить другого? Заботят ли вас результаты, или вы сосредоточены на задачи ради нее самой? Вы найдете ответы внутри себя, а не в советах извне. А когда вы советуетесь с Рунами, вы советуетесь, вы советуетесь со своим «Я». ",
                },
            Thurisazup:{
                name:"Thurisaz",
                desc:"Врата. Место Недеяния. Бог Тор. ",
                text:"Это руна недеяния. Поэтому нельзя приближаться к воротам и проходить сквозь них без размышления. Представьте себе, что вы стоите перед воротами на вершине горы. Вся ваша жизнь осталась сзади и внизу. Перед тем, как идти вперед, остановитесь и вспомните прошлое: обучение и радости, победы и печали - все, что привело вас сюда. Окиньте все это взглядом, благословите и отпустите. Освобождаясь от прошлого, вы восстанавливаете свою энергию. Теперь шагните за ворота. ",
                },
            Thurisazdown:{
                name:"Thurisaz",
                desc:"Врата. Место Недеяния. Бог Тор. ",
                text:"В перевернутом положении: Этот знак требует от вас размышления. Поспешные решения в это время могут вызвать сожаление, потому что вы, скорей всего, будете действовать по слабости, обманывая себя относительно своих мотивов и создавая новые проблемы, гораздо неприятнее тех, что вы пытаетесь решить. ",
                },
            Uruzup:{
                name:"Uruz",
                desc:"Сила, мощь. Мужественность. Женственность. Дикий бык. ",
                text:"Это знак завершения и новых начинаний. Он показывает, что ваша жизнь выросла за пределы своей формы, которая должна умереть, чтобы энергия жизни могла воплотиться в новом рождении, новой форме. То, что сейчас происходит, может побуждать вас претерпеть смерть внутри собственной личности. Помните, что новая форма, новая жизнь всегда лучше, чем старая. Приготовьтесь к новой форме, внешне выглядящей как потеря. Ищите среди пепла - и откроете там новую перспективу и новое рождение. ",
                },
            Uruzdown:{
                name:"Uruz",
                desc:"Сила, мощь. Мужественность. Женственность. Дикий бык. ",
                text:"В перевернутом положении: Может показаться, что против вас используется ваша собственная сила. Для некоторых этот знак послужит сигналом тревоги, а незначительные разочарования и неудачи послужат намеками. Для других - более невежественных и бесчувственных - он будет связан с серьезным потрясением. Перевернутая, эта руна требует серьезного анализа вашего отношения к себе. Но не отходите с пути в темноту. Оказавшись на глубоководье, научитесь нырять. ",
                },
            Wunjoup:{
                name:"Wunjo",
                desc:"Радость. Свет. ",
                text:"Эта руна - плодоносная ветвь. Период мучений закончился, и вы в каком-то смысле «пришли в себя». Произошел необходимый сдвиг, и теперь вы можете свободно пожинать его плоды - относятся ли они к материальным выигрышам, к вашей эмоциональной жизни или к чувству вашего собственного благоденствия. Это алхимическая стадия, когда знание трансформируется в понимание. Радость сопровождает новую энергию, до этого блокированную. Появилась новая ясность, которая может потребовать от вас отказа от существующих планов, амбиций, целей. ",
                },
            Wunjodown:{
                name:"Wunjo",
                desc:"Радость. Свет. ",
                text:"В перевернутом положении: процесс рождения долог и труден. Кризис, тяжелый этап - пусть даже короткий - близок. Нужны обдумывания и размышления, потому что свет и тьма еще переплетены, и сомнения, колебания могут омрачить радость, если не понять, что сейчас их время. Увиденное в правильном свете, все является испытанием. Сосредоточась на настоящем, искренно относясь к другим и доверяя тому, что с вами происходит, вы не можете потерпеть неудачу. ",
                },
            Wyrd:{
                name:"Wyrd",
                desc:"Неведомое. Божественное. Бог Один. ",
                text:"Пустота - это конец, пустота — это начало. Здесь Непознаваемое сообщает вам, что оно пришло в движение в вашей жизни. В этой незаполненном содержится мощный потенциал. Пустая и одновременно полная содержания, она охватывает полноту бытия, все, что должно осуществиться. Благоприятствование происходящему и готовность к нему — требования этой Руны. Ведь как можно осуществить контроль над тем, что еще не оформилось? Эта Руна часто требует акта мужества, подобного прыжку в пустоту с пустыми руками. Ее появление — прямое испытание вашей веры. С одной стороны, Чистая Руна представляет кармические силы — полную сумму того, что вами совершено, и границы того, чем вы являетесь и станете. С другой стороны, эта Руна учит, что даже долги старой кармы смещаются и изменяются одновременно с тем, как изменяетесь и развиваетесь вы. Ничто не предопределено: нет ничего такого, чего нельзя было бы избежать. ",
                },
 
          },
        },
        en: {
            translation: { 
                YourRuneDay:'YOUR DAY RUNE',
                Open:'OPEN',
                WhatHave:'WHAT IS IT',
                WhatDo:'WHAT TO DO',
                WhatBeImFuture:'WHAT’LL HAPPEN',

                Algizup:{
                    name:"Algiz",
                    desc:"Patronage. Cane. Elk. ",
                    text:"Control of emotions is essential. In times of change, turns in life's course and accelerated self-change, it is important not to give in to emotions - both pleasant and unpleasant. This rune is characterized by new opportunities and challenges. But they come with abuse and adverse effects. This sign serves as a mirror for the Warrior of the Spirit - one who is engaged in a battle with himself. The security of a warrior is similar to the warning rustle of sedge or the curved antlers of an elk - both help maintain free space around. Remember that timely action and correct behavior are the only things that provide real protection. ",
                    },
                Algizdown:{
                    name:"Algiz",
                    desc:"Patronage. Cane. Elk. ",
                    text:"Reversed: Be attentive to your health, carefully monitor the connections you make at this time, and do not add to the burden placed on others. If you feel comfortable getting involved with people who are 'using' you, remember this and take responsibility for your position - then you can only benefit. ",
                    },
                Ansuzup:{
                    name:"Ansuz",
                    desc:"Signs. Messenger Rune. God Loki. ",
                    text:"The key note here is receiving messages, gifts, signs. Even timely warning can be considered a gift. Try to be very attentive and sensitive during meetings, visits, random encounters, especially with those who have more wisdom than you. The sign corresponds to a new sense of family unity. ",
                    },
                Ansuzdown:{
                    name:"Ansuz",
                    desc:"Signs. Messenger Rune. God Loki. ",
                    text:"Reversed: You may be preoccupied with what seems to be a broken connection, a lack of clarity or understanding - either in your past or in your current situation. You may feel like something is preventing you from accepting what is offered. Feelings of futility, wasted effort, a fruitless journey can make you feel despondent. But what happens is timely in your situation. If your well is clogged, it's time to clean it. ",
                    },
                Berkanaup:{
                    name:"Berkana",
                    desc:"Height. Rebirth. Birch. ",
                    text:"This sign denotes fertility, which promotes growth both symbolically and in reality. Growth can relate to daily or family activities, to relationships with one's self. This is a “bringing” rune, in the sense that it leads to blossoming and maturation. This requires deep penetration into things, consciously and carefully. All dark corners must be cleaned: this must be done carefully, and sometimes skilled assistance is necessary. ",
                    },
                Berkanadown:{
                    name:"Berkana",
                    desc:"Height. Rebirth. Birch. ",
                    text:"Reversed: Events or, more likely, character traits hinder the growth of new life. You may feel discouraged due to your inability to take the right action. But what is required here is not despondency, but diligence and thoroughness. Examine what happened, your role in it, your needs and the needs of others. Are you putting your wants before the needs of others? Go deep until you can identify all the obstacles to growth in the situation. ",
                    },
                Dagaz:{
                    name:"Dagaz",
                    desc:"Breakthrough. Transformation. Day. ",
                    text:"The appearance of this rune marks a major shift or breakthrough in the process of self-change, a complete transformation of state - a turn of 180 degrees. In every life there is at least one moment that - if it is guessed and caught - forever changes its course. So act with full faith, even if the moment requires you to jump empty-handed into the void. If this sign is accompanied by a Pure Rune, the scale of the transformation may be such that it will foretell death, the successful completion of your path. Sometimes this rune foretells a great period of achievement and prosperity. Darkness is behind you; the day has begun. ",
                    },
                Ehwazup:{
                    name:"Ehwaz",
                    desc:"Movement. Progress. Horse. ",
                    text:"This is a sign of passage, transition and movement, new habitats or new life. It also denotes movement in the sense of correcting or improving any situation. This rune is characterized by gradual development and steady progress, slow growth through endless shifts and changes. This can apply to both business and the development of ideas. Relationships must also undergo changes in order to exist and develop. ",
                    },
                Ehwazdown:{
                    name:"Ehwaz",
                    desc:"Movement. Progress. Horse. ",
                    text:"Reversed: movement encounters an obstacle. Be sure that what you do (or don't do) is timely. It's not a matter of missed opportunities: we just have to understand that not all opportunities are open to us. ",
                    },
                Eihwaz:{
                    name:"Eihwaz",
                    desc:"Protection. Abhorrent forces. Yew. ",
                    text:"By being tested, we find the strength to overcome obstacles and prevent failure. At the same time, we develop an aversion to behavior that creates difficult situations. There seems to be an obstacle in your way - but the delay may turn out to be favorable. Don't rush forward too much. This is not the time or situation where you can feel your influence. This sign's advice is patience. This requires foresight and persistence. Prevent foreseeable difficulties with the right actions. We are not so much those who do, but rather those who decide. When our decision is pure, action requires no effort because it is supported and strengthened by the Universe. ",
                    },
                Fehuup:{
                    name:"Fehu",
                    desc:"Possession. Support. Cattle. ",
                    text:"This is the rune of fulfillment: satisfied ambition, reward received, happy love. This sign calls for deep exploration of the essence of acquisition and winning in your life. Take a close look at whether what is necessary for your well-being lies in wealth and property or in self-mastery and strengthening of will. Another meaning of this rune is associated with preserving what has already been achieved. Enjoy your luck and don't forget to share it. ",
                    },
                Fehudown:{
                    name:"Fehu",
                    desc:"Possession. Support. Cattle. ",
                    text:"Reversed: There may be significant disruption in your life, loss of property - from minor to very serious. You may have to sit helplessly and watch as what you have gained begins to disappear. Even if there is cause for joy, do not slip into meaningless fun. Reversed, this rune indicates that doubtful situations are abundant and come in many forms and guises. By dealing with the shadow side of this sign, you have the opportunity to recognize where your true nourishment lies. ",
                    },
                Gebo:{
                    name:"Gebo",
                    desc:"Partnership. Gift. ",
                    text:"The appearance of this sign shows that unity, unification or participation - in some form - is just around the corner. But real partnership can only exist between separate and integral individuals who do not lose their separateness even in unity and unity. Let the heavenly wind dance between you. This sign does not have an inverted position because it denotes the gift of freedom on which all other gifts depend. ",
                    },
                Hagalaz:{
                    name:"Hagalaz",
                    desc:"Destruction. Elemental forces. Hail. ",
                    text:"Change, innovation, freedom and liberation are the qualities of this sign. Its appearance indicates an urgent inner need to free oneself from limiting identification with material reality and experience the world of the proto-mind. This is the rune of elemental destruction, events completely beyond your control. Expect your plans to be disrupted because this is a powerful awakening force, although the forms of its influence may vary. The action of this sign is best described by the words “complete break”. ",
                    },
                Inguz:{
                    name:"Inguz",
                    desc:"Fertility. New beginnings. Ing, Hero-God. ",
                    text:"Completion of endeavors is what this sign implies. The appearance of this rune means that you already have enough strength to achieve completion, resolution, after which a new beginning will come. Completion is most important here. If you need to finish something, make it your main task. The appearance of this sign symbolizes the exit from the chrysalis state. At the same time as you get rid of the old, you will be freed from tension and uncertainty. ",
                    },
                Isa:{
                    name:"Isa",
                    desc:"Stop. Loss. Ice. ",
                    text:"It is winter in your spiritual life. You may find yourself confused in a situation that you cannot even see the meaning of. You may find yourself powerless to do anything other than submit, retreat, even sacrifice some long-cherished desire. Be patient because this is a period of hidden development leading up to rebirth. Achievements and successes are now unlikely. During this time, do not hope or rely on help or friendly support. In your isolation, remain cautious and do not stubbornly try to exert your will. ",
                    },
                Jera:{
                    name:"Jera",
                    desc:"Harvest. Harvest time. One year. ",
                    text:"Rune of favorable outcomes. It applies to any activity or enterprise with which you are associated. The appearance of this rune will give you the strength to maintain a good mood. Remember, however, that quick results cannot be expected. A period of time is always required, hence the key words 'one year', symbolizing the full cycle of time before harvest, harvest or deliverance. You have prepared the soil and planted the seed. Now you must take good care of him. ",
                    },
                Kanoup:{
                    name:"Kano",
                    desc:"Disclosure. Fire. Torch. ",
                    text:"This is the rune of opening, renewed clarity, dispelling the darkness that has covered some part of your life. There can be no mutual disclosure in a relationship. You can serve as a trigger, a chronometer, by realizing that the light of understanding is again available to both of you. Understand that although, on the one hand, you are limited and dependent, on the other hand, you exist as an exact center from where, merging, the harmonizing and favorable forces of the Universe radiate. You are that center. Simply put, if you were operating in the dark before, there is now enough light around to see that the patient on the operating table is you. ",
                    },
                Kanodown:{
                    name:"Kano",
                    desc:"Disclosure. Fire. Torch. ",
                    text:"Reversed: Expect darkness in some situation or relationship. Perhaps a friendship, a partnership, a marriage, or some part of your personality that has already lost its strength and usefulness is dying. This sign requires that you joyfully cast aside the past and be prepared to live for a while with emptiness inside: it requires the development of inner constancy - the ability not to succumb to the inertia of old paths while waiting for new ones that, in due course, will lead to the light. ",
                    },
                Laguzup:{
                    name:"Laguz",
                    desc:"Flow. Water. That which leads. ",
                    text:"This rune corresponds to our need to plunge into life without understanding or judgment. It meets our desire for comfort and satisfaction of emotional needs. Success is achieved through contact with what you know intuitively, through “tuning” to your own rhythms. The rune 'I', which is in the upper position to the 'I', denotes what the alchemists called 'conjunctio', the sacred marriage. ",
                    },
                Laguzdown:{
                    name:"Laguz",
                    desc:"Flow. Water. That which leads. ",
                    text:"Reversed position: warning about the danger of overvoltage, excessive force; a warning against trying to exceed your capabilities or go beyond the limits of your available strength. ",
                    },
                Mannazup:{
                    name:"Mannaz",
                    desc:"Ego. Me. The starting point is ME. ",
                    text:"The starting point is ME. Only clarity and the desire to change will be effective. One should remain humble - this is the advice of the oracle. No matter what your merits, be flexible, focused and moderate. Try to lead an ordinary life in an unusual way. Be satisfied by doing your job for its own sake. No frills. ",
                    },
                Mannazdown:{
                    name:"Mannaz",
                    desc:"Ego. Me. The starting point is ME. ",
                    text:"Reversed: If you feel blocked, this rune advises you to be honest with yourself. Don’t think about those around you, but calmly look inside yourself in search of the enemies of your development. You will see that the external “enemy” is nothing more than a reflection of what until that moment you could not or did not want to recognize as coming from within. The challenge here is to break the inertia of past habits. ",
                    },
                Nauthizup:{
                    name:"Nauthiz",
                    desc:"Need. Compulsion. Suffering. ",
                    text:"Normal or reversed, this is a difficult rune. Having to deal with brutal coercion is her lesson. The role of this sign is to designate our “shadow” zones, places where growth is inhibited, which leads to weaknesses that we negatively project onto others. This rune says - work with the shadow, explore what is inside you that attracts unhappiness into your life. The need for restraint is beyond question here. The appearance of this rune makes you understand that there are stops ahead - reasons to once again weigh your plans. Let the difficulties of this moment help you straighten your relationship with your “I”. Remember that purification precedes progress. And reconsider using failures. ",
                    },
                Nauthizdown:{
                    name:"Nauthiz",
                    desc:"Need. Compulsion. Suffering. ",
                    text:"Reversed: when we stop accepting something inside us as ours, what we stopped recognizing produces devastation. This requires cleansing. By undertaking it, you will strengthen your character and strengthen your will. Start with what is most difficult and move towards what is not difficult. Remember that 'suffer' originally meant 'to be subjected to.' So you are exposed to the dark part of your path. Controlling anger, restraining impulses, maintaining strong faith in yourself - this is what is required now. ",
                    },
                Othilup:{
                    name:"Othil",
                    desc:"Separation. Retreat. Inheritance. ",
                    text:"This is a time of diverging paths. Old skin must be shed, outdated relationships must be terminated. The required action here is submission and quite possibly retreat, accompanied by the knowledge of how and when to retreat and the strength of will to do so. Property is associated with this rune - it is a sign of acquisitions and winnings. However, the gain, the “inheritance,” may come from something that you have to part with. ",
                    },
                Othildown:{
                    name:"Othil",
                    desc:"Separation. Retreat. Inheritance. ",
                    text:"Reversed: This is not the time to be bound by old conventions and authorities. Ask yourself what “feels” right for you and act in accordance with the Light that now illuminates your life. At this time, what is needed is not rigidity, but fluidity. When this sign appears, remember: we act without doing, and everything ends up being done. ",
                    },
                Perthup:{
                    name:"Perth",
                    desc:"Dedication. What's hidden. ",
                    text:"This rune relates to the Sky, to the Unknowable, and is associated with the Phoenix bird - a mystical bird that burns itself and is reborn from the ashes. The paths of this sign are mysterious and hidden. What is achieved does not manifest itself easily or readily. This is the rune of search. It symbolizes the intensely experienced aspect of initiation and is associated with the deepest level of being, with the foundation of your destiny. For some, Perth means the experience of psychic death. If necessary, let go of everything, without any exceptions. Nothing less than the renewal of the Spirit is the stake. ",
                    },
                Perthdown:{
                    name:"Perth",
                    desc:"Dedication. What's hidden. ",
                    text:"Reversed: advice not to expect too much or not to expect in the usual way, because the old has come to an end: you simply cannot do everything in the old way and not suffer. The reversed sign advises not to think too much about the end result and not to become attached to memories of past achievements; By doing otherwise, you are robbing yourself of the present, the only time when self-change is possible. ",
                    },
                Raidoup:{
                    name:"Raido",
                    desc:"Journey. Communication. Union. Reunion. ",
                    text:"This is the rune of connection, harmonization of something that has two sides, two elements; the rune of the final reunion, which is achieved at the end of the journey, when the upper and lower become one. When you are pure, you can neutralize your own reluctance to allow right action to flow through you. As always, the journey is one of self-healing, self-change and union. Trusting your own process is the essence of this sign. ",
                    },
                Raidodown:{
                    name:"Raido",
                    desc:"Journey. Communication. Union. Reunion. ",
                    text:"Reversed: Be especially attentive to personal relationships. At this time, breakups are more likely than reconciliations. It will take effort on your part. Keep your humor - no matter what happens, it's up to you to decide how to respond. ",
                    },
                Sowelu:{
                    name:"Sowelu",
                    desc:"Integrity. Life force. Energy of sun. ",
                    text:"This sign symbolizes the integrity required by our nature. It embodies the desire for self-realization and indicates the path that you should follow, but for some hidden reasons, but because the core of your personality requires it. The search for integrity is the task of the Warrior of the Spirit. But you, by nature, are already what you are trying to become. You must realize your essence - your personal myth - and give it form, express it creatively. With great power, this sign makes life force available to you and marks a time of recharging and restoration down to the cellular level. But you may retreat when faced with a pressing situation, especially if events or people require you to “expend” your energy. Timely retreat is one of the arts of the Warrior of the Spirit. At the same time, for some, this rune contains advice to open up, to let light into that area of ​​life that was a secret, fenced off. ",
                    },
                Teiwazup:{
                    name:"Teiwaz",
                    desc:"Warrior. Tiv, God of Heaven. ",
                    text:"This is the rune of the Warrior of the Spirit. His battle is always with his own self. Finding will through action, lack of attachment to the result, the constant awareness that all that can be done is to allow the Will of Heaven to flow through oneself and not stand in one's own path - these are the characteristics of the Warrior of the Spirit. When this sign appears, it is about character formation. If the appearance of the rune is associated with romantic affection, it means that the relationship in question is timely and providential. When it comes to your dedication to a cause, an idea, a path or a way of behaving, the Warrior Rune advises perseverance, although sometimes the kind of perseverance required is patience. In ancient times, warriors painted this sign on their shields before battle. Now that more purified energies are operating, this same symbol strengthens your resolve in the struggle between “ME” and “me”. ",
                    },
                Teiwazdown:{
                    name:"Teiwaz",
                    desc:"Warrior. Tiv, God of Heaven. ",
                    text:"Reversed: The danger is that energy is leaking or being sucked out through thoughtless or untimely action. If the relationship is short-lived, do not be sad and know that its term has expired. Questions of faith and trust are raised here, and with them the correctness of your way of existing in the world. Reversed, this rune requires an examination of your motives. Are you busy conquering yourself or are you trying to conquer someone else? Do you care about results, or are you focused on the task for its own sake? You will find the answers within yourself, not in outside advice. And when you consult with the Runes, you consult, you consult with your “ME”. ",
                    },
                Thurisazup:{
                    name:"Thurisaz",
                    desc:"Gate. Place of Inaction. God Thor. ",
                    text:"This is the rune of inaction. Therefore, one should not approach the gate or pass through it without thinking. Imagine that you are standing in front of a gate on the top of a mountain. Your whole life is left behind and below. Before you move forward, stop and remember the past: the learning and joys, victories and sorrows - everything that brought you here. Take it all in, bless it, and let it go. By freeing yourself from the past, you restore your energy. Now step through the gate. ",
                    },
                Thurisazdown:{
                    name:"Thurisaz",
                    desc:"Gate. Place of Inaction. God Thor. ",
                    text:"Reversed: This sign requires you to think. Making hasty decisions at this time may lead to regret because you are likely to act out of weakness, deceiving yourself about your motives and creating new problems that are much more unpleasant than the ones you are trying to solve. ",
                    },
                Uruzup:{
                    name:"Uruz",
                    desc:"Strength, power. Masculinity. Femininity. Wild bull. ",
                    text:"This is a sign of completion and new beginnings. It shows that your life has grown beyond its form, which must die so that the energy of life can be embodied in a new birth, a new form. What is happening now may be causing you to experience death within yourself. Remember that a new form, a new life is always better than the old one. Get ready for a new form that looks like a loss. Search among the ashes and you will discover there a new perspective and a new birth. ",
                    },
                Uruzdown:{
                    name:"Uruz",
                    desc:"Strength, power. Masculinity. Femininity. Wild bull. ",
                    text:"Reversed: It may feel like your own strength is being used against you. For some, this sign will serve as an alarm, and minor disappointments and failures will serve as hints. For others - the more ignorant and insensitive - it will be associated with a serious shock. Reversed, this rune requires a serious analysis of your attitude towards yourself. But don't go out of your way into the darkness. Once in deep water, learn to dive. ",
                    },
                Wunjoup:{
                    name:"Wunjo",
                    desc:"Joy. Light. ",
                    text:"This rune is a fruitful branch. The period of torment is over, and you have, in a sense, “come to your senses.” The necessary shift has occurred, and you are now free to reap its benefits - whether they relate to material gains, your emotional life, or your sense of well-being. This is the alchemical stage where knowledge is transformed into understanding. Joy accompanies new energy, previously blocked. There is a new clarity that may require you to abandon existing plans, ambitions, goals. ",
                    },
                Wunjodown:{
                    name:"Wunjo",
                    desc:"Joy. Light. ",
                    text:"In an inverted position: the birth process is long and difficult. A crisis, a difficult stage - even if short - is close. Thought and reflection are needed, because light and darkness are still intertwined, and doubts and hesitations can darken joy if you do not understand that now is their time. Seen in the right light, everything is a test. By focusing on the present, being authentic to others, and trusting what happens to you, you cannot fail. ",
                    },
                Wyrd:{
                    name:"Wyrd",
                    desc:"The unknown. Divine. God is one. ",
                    text:"Emptiness is the end, emptiness is the beginning. Here the Unknowable tells you that it has come into motion in your life. This unfilled contains powerful potential. Empty and at the same time full of content, it embraces the fullness of being, everything that must come true. Favor for what is happening and readiness for it are the requirements of this Rune. After all, how can you exercise control over something that has not yet taken shape? This Rune often requires an act of courage, like leaping into the void empty-handed. Its appearance is a direct test of your faith. On the one hand, the Pure Rune represents karmic forces - the total sum of what you have done and the limits of what you are and will become. On the other hand, this Rune teaches that even the debts of old karma shift and change at the same time as you change and develop. Nothing is predetermined: there is nothing that cannot be avoided. ",
                    },    
            },
          },
            de: {
            translation: { 
                YourRuneDay:'DEINE RUNE DES TAGES',
                Open:'ÖFFNEN',
                WhatHave:'WAS GIBT ES',
                WhatDo:'WAS ZU TUN IST',
                WhatBeImFuture:'WAS WIRD',
            
            
                Algizup:{
                    name:"Algiz",
                    desc:"Schirmherrschaft. Stock. Elch. ",
                    text:"Die Kontrolle der Emotionen ist unerlässlich. In Zeiten des Wandels, der Wendungen im Lebensverlauf und der beschleunigten Selbstveränderung ist es wichtig, Emotionen – sowohl angenehmen als auch unangenehmen – nicht nachzugeben. Dieses Zeichen zeichnet sich durch neue Chancen und Herausforderungen aus. Aber sie bringen Missbrauch und Nebenwirkungen mit sich. Diese Rune dient als Spiegel für den Krieger des Geistes – jemanden, der in einen Kampf mit sich selbst verwickelt ist. Die Sicherheit eines Kriegers ähnelt dem warnenden Rascheln einer Segge oder dem gebogenen Geweih eines Elchs – beide tragen dazu bei, den Freiraum um ihn herum aufrechtzuerhalten. Denken Sie daran, dass nur rechtzeitiges Handeln und richtiges Verhalten wirklichen Schutz bieten. ",
                    },
                Algizdown:{
                    name:"Algiz",
                    desc:"Schirmherrschaft. Stock. Elch. ",
                    text:"Umgekehrt: Achten Sie auf Ihre Gesundheit, überwachen Sie sorgfältig die Verbindungen, die Sie zu diesem Zeitpunkt herstellen, und erhöhen Sie nicht die Belastung anderer. Wenn Sie sich wohl dabei fühlen, sich auf Menschen einzulassen, die Sie „ausnutzen“, denken Sie daran und übernehmen Sie Verantwortung für Ihre Position – dann können Sie nur davon profitieren. ",
                    },
                Ansuzup:{
                    name:"Ansuz",
                    desc:"Zeichen. Rune des Boten. Gott Loki. ",
                    text:"Der Schlüsselgedanke hierbei ist der Empfang von Nachrichten, Geschenken und Schildern. Selbst eine rechtzeitige Warnung kann als Geschenk betrachtet werden. Versuchen Sie, bei Treffen, Besuchen und zufälligen Begegnungen sehr aufmerksam und einfühlsam zu sein, insbesondere mit denen, die mehr Weisheit haben als Sie. Das Zeichen entspricht einem neuen Gefühl der familiären Einheit. ",
                    },
                Ansuzdown:{
                    name:"Ansuz",
                    desc:"Zeichen. Rune des Boten. Gott Loki. ",
                    text:"Umgekehrt: Möglicherweise beschäftigen Sie sich mit einer scheinbar unterbrochenen Verbindung, einem Mangel an Klarheit oder Verständnis – entweder in Ihrer Vergangenheit oder in Ihrer aktuellen Situation. Möglicherweise haben Sie das Gefühl, dass Sie etwas davon abhält, das Angebot anzunehmen. Das Gefühl der Sinnlosigkeit, der vergeblichen Anstrengung oder einer fruchtlosen Reise kann dazu führen, dass Sie sich mutlos fühlen. Aber was passiert, ist in Ihrer Situation zeitgemäß. Wenn Ihr Brunnen verstopft ist, ist es an der Zeit, ihn zu reinigen. ",
                    },
                Berkanaup:{
                    name:"Berkana",
                    desc:"Höhe. Wiedergeburt. Birke. ",
                    text:"Dieses Zeichen steht für Fruchtbarkeit, die sowohl symbolisch als auch in der Realität das Wachstum fördert. Wachstum kann sich auf alltägliche oder familiäre Aktivitäten beziehen, auf Beziehungen zu sich selbst. Dies ist eine „bringende“ Rune in dem Sinne, dass sie zum Erblühen und Reifen führt. Dazu ist ein tiefes, bewusstes und sorgfältiges Eindringen in die Dinge erforderlich. Alle dunklen Ecken müssen gereinigt werden: Dies muss sorgfältig erfolgen und manchmal ist fachmännische Hilfe erforderlich. ",
                    },
                Berkanadown:{
                    name:"Berkana",
                    desc:"Höhe. Wiedergeburt. Birke. ",
                    text:"Umgekehrt: Ereignisse oder, was wahrscheinlicher ist, Charaktereigenschaften behindern das Entstehen neuen Lebens. Möglicherweise fühlen Sie sich entmutigt, weil Sie nicht in der Lage sind, die richtigen Maßnahmen zu ergreifen. Aber hier ist nicht Mutlosigkeit gefragt, sondern Fleiß und Gründlichkeit. Untersuchen Sie, was passiert ist, Ihre Rolle dabei, Ihre Bedürfnisse und die Bedürfnisse anderer. Stellen Sie Ihre Wünsche über die Bedürfnisse anderer? Gehen Sie in die Tiefe, bis Sie alle Wachstumshindernisse in Ihrer Situation identifizieren können. ",
                    },
                Dagaz:{
                    name:"Dagaz",
                    desc:"Durchbruch. Transformation. Tag. ",
                    text:"Das Erscheinen dieser Rune markiert eine große Veränderung oder einen Durchbruch im Prozess der Selbstveränderung, eine vollständige Transformation des Zustands – eine Wende um 180 Grad. In jedem Leben gibt es mindestens einen Moment, der – wenn er erraten und erfasst wird – seinen Lauf für immer verändert. Handeln Sie also mit vollem Vertrauen, auch wenn der Moment erfordert, dass Sie mit leeren Händen ins Leere springen. Wenn dieses Zeichen von einer reinen Rune begleitet wird, kann das Ausmaß der Transformation so groß sein, dass sie den Tod, den erfolgreichen Abschluss Ihres Weges, vorhersagt. Manchmal kündigt diese Rune eine große Zeit des Erfolgs und des Wohlstands an. Die Dunkelheit liegt hinter dir; der Tag hat begonnen. ",
                    },
                Ehwazup:{
                    name:"Ehwaz",
                    desc:"Bewegung. Fortschritt. Pferd. ",
                    text:"Dies ist ein Zeichen für Durchgang, Übergang und Bewegung, neue Lebensräume oder neues Leben. Es bezeichnet auch Bewegung im Sinne der Korrektur oder Verbesserung einer Situation. Diese Rune zeichnet sich durch allmähliche Entwicklung und stetigen Fortschritt, langsames Wachstum durch endlose Verschiebungen und Veränderungen aus. Dies kann sowohl für das Geschäft als auch für die Entwicklung von Ideen gelten. Auch Beziehungen müssen sich verändern, um zu existieren und sich zu entwickeln. ",
                    },
                Ehwazdown:{
                    name:"Ehwaz",
                    desc:"Bewegung. Fortschritt. Pferd. ",
                    text:"Umgekehrt: Bewegung stößt auf ein Hindernis. Stellen Sie sicher, dass das, was Sie tun (oder nicht tun), rechtzeitig erfolgt. Es geht nicht um verpasste Chancen: Wir müssen nur verstehen, dass uns nicht alle Chancen offen stehen. ",
                    },
                Eihwaz:{
                    name:"Eihwaz",
                    desc:"Schutz. Abscheuliche Kräfte. Eibe. ",
                    text:"Indem wir geprüft werden, finden wir die Kraft, Hindernisse zu überwinden und Misserfolge zu verhindern. Gleichzeitig entwickeln wir eine Abneigung gegen Verhaltensweisen, die zu schwierigen Situationen führen. Es scheint, dass Ihnen ein Hindernis im Weg steht – doch die Verzögerung kann sich als günstig erweisen. Beeilen Sie sich nicht zu sehr. Dies ist nicht die Zeit oder Situation, in der Sie Ihren Einfluss spüren können. Der Rat dieses Zeichens ist Geduld. Dafür braucht es Weitsicht und Beharrlichkeit. Verhindern Sie vorhersehbare Schwierigkeiten mit den richtigen Maßnahmen. Wir sind nicht so sehr diejenigen, die es tun, sondern vielmehr diejenigen, die entscheiden. Wenn unsere Entscheidung rein ist, erfordert das Handeln keine Anstrengung, weil es vom Universum unterstützt und gestärkt wird. ",
                    },
                Fehuup:{
                    name:"Fehu",
                    desc:"Besitz. Unterstützung. Vieh. ",
                    text:"Dies ist die Rune der Erfüllung: zufriedener Ehrgeiz, erhaltene Belohnung, glückliche Liebe. Dieses Zeichen ruft dazu auf, die Essenz des Erwerbens und Gewinnens in Ihrem Leben gründlich zu erforschen. Schauen Sie genau hin, ob das, was für Ihr Wohlergehen notwendig ist, in Reichtum und Eigentum liegt oder in Selbstbeherrschung und Willensstärkung. Eine weitere Bedeutung dieser Rune ist mit der Bewahrung des bereits Erreichten verbunden. Genießen Sie Ihr Glück und vergessen Sie nicht, es zu teilen. ",
                    },
                Fehudown:{
                    name:"Fehu",
                    desc:"Besitz. Unterstützung. Vieh. ",
                    text:"Umgekehrt: Es kann zu erheblichen Störungen in Ihrem Leben oder zum Verlust von Eigentum kommen – von geringfügig bis sehr schwerwiegend. Möglicherweise müssen Sie hilflos dasitzen und zusehen, wie das, was Sie gewonnen haben, zu verschwinden beginnt. Auch wenn es Grund zur Freude gibt, verfallen Sie nicht in bedeutungslosen Spaß. Umgekehrt zeigt diese Rune an, dass zweifelhafte Situationen reichlich vorhanden sind und in vielen Formen und Erscheinungsformen auftreten. Indem Sie sich mit der Schattenseite dieses Zeichens auseinandersetzen, haben Sie die Möglichkeit zu erkennen, wo Ihre wahre Nahrung liegt. ",
                    },
                Gebo:{
                    name:"Gebo",
                    desc:"Partnerschaft. Geschenk. ",
                    text:"Das Erscheinen dieses Zeichens zeigt, dass Einheit, Vereinigung oder Teilhabe – in irgendeiner Form – vor der Tür stehen. Aber echte Partnerschaft kann nur zwischen getrennten und integralen Individuen bestehen, die ihre Getrenntheit auch in Einheit und Einheit nicht verlieren. Lass den himmlischen Wind zwischen dir tanzen. Dieses Zeichen hat keine umgekehrte Position, da es die Gabe der Freiheit bezeichnet, von der alle anderen Gaben abhängen. ",
                    },
                Hagalaz:{
                    name:"Hagalaz",
                    desc:"Zerstörung. Elementarkräfte. Hagel. ",
                    text:"Veränderung, Innovation, Freiheit und Befreiung sind die Eigenschaften dieses Zeichens. Sein Erscheinen weist auf ein dringendes inneres Bedürfnis hin, sich von der einschränkenden Identifikation mit der materiellen Realität zu befreien und die Welt des Proto-Geistes zu erleben. Dies ist die Rune der elementaren Zerstörung, Ereignisse, die völlig außerhalb Ihrer Kontrolle liegen. Erwarten Sie, dass Ihre Pläne durchkreuzt werden, denn es handelt sich um eine mächtige erwachende Kraft, auch wenn die Formen ihres Einflusses unterschiedlich sein können. Die Wirkung dieses Zeichens lässt sich am besten mit den Worten „völliger Bruch“ beschreiben. ",
                    },
                Inguz:{
                    name:"Inguz",
                    desc:"Fruchtbarkeit. Neue Anfänge. Ing, Heldengott. ",
                    text:"Der Abschluss der Bemühungen ist das, was dieses Zeichen bedeutet. Das Erscheinen dieser Rune bedeutet, dass Sie bereits genug Kraft haben, um die Vollendung und Lösung zu erreichen, woraufhin ein Neuanfang kommen wird. Die Fertigstellung steht hier im Vordergrund. Wenn Sie etwas erledigen müssen, machen Sie es zu Ihrer Hauptaufgabe. Das Erscheinen dieses Zeichens symbolisiert den Austritt aus dem Puppenzustand. Gleichzeitig mit dem Loslassen des Alten werden Sie von Anspannung und Unsicherheit befreit. ",
                    },
                Isa:{
                    name:"Isa",
                    desc:"Stoppen. Verlust. Eis. ",
                    text:"Es ist Winter in Ihrem spirituellen Leben. Möglicherweise geraten Sie in eine Situation, deren Bedeutung Sie nicht einmal erkennen können. Möglicherweise sind Sie machtlos, etwas anderes zu tun, als sich zu unterwerfen, sich zurückzuziehen oder sogar einen lang gehegten Wunsch zu opfern. Seien Sie geduldig, denn dies ist eine Zeit der verborgenen Entwicklung, die zur Wiedergeburt führt. Erfolge und Erfolge sind nun unwahrscheinlich. Verlassen Sie sich in dieser Zeit weder auf Hilfe noch auf freundliche Unterstützung. Bleiben Sie in Ihrer Isolation vorsichtig und versuchen Sie nicht, Ihren Willen stur durchzusetzen. ",
                    },
                Jera:{
                    name:"Jera",
                    desc:"Ernte. Erntezeit. Ein Jahr. ",
                    text:"Rune günstiger Ergebnisse. Sie gilt für alle Aktivitäten und Unternehmen, mit denen Sie in Verbindung stehen. Das Erscheinen dieser Rune gibt Ihnen die Kraft, gute Laune zu bewahren. Bedenken Sie jedoch, dass schnelle Ergebnisse nicht zu erwarten sind. Es ist immer eine Zeitspanne erforderlich, daher das Schlüsselwort „ein Jahr“, das den gesamten Zeitzyklus vor Ernte, Ernte oder Befreiung symbolisiert. Sie haben den Boden vorbereitet und die Saat gepflanzt. Jetzt musst du gut auf ihn aufpassen. ",
                    },
                Kanoup:{
                    name:"Kano",
                    desc:"Offenlegung. Feuer. Fackel. ",
                    text:"Dies ist die Rune der Öffnung, der neuen Klarheit, die die Dunkelheit vertreibt, die einen Teil Ihres Lebens bedeckt hat. In einer Beziehung kann es keine gegenseitige Offenlegung geben. Sie können als Auslöser, als Chronometer dienen, indem Sie erkennen, dass das Licht des Verstehens für Sie beide wieder verfügbar ist. Verstehen Sie, dass Sie, obwohl Sie einerseits begrenzt und abhängig sind, andererseits als exaktes Zentrum existieren, von dem aus die harmonisierenden und wohltuenden Kräfte des Universums verschmelzen. Du bist dieses Zentrum. Vereinfacht ausgedrückt: Wenn Sie zuvor im Dunkeln operiert haben, ist jetzt genügend Licht vorhanden, um zu erkennen, dass Sie der Patient auf dem Operationstisch sind. ",
                    },
                Kanodown:{
                    name:"Kano",
                    desc:"Offenlegung. Feuer. Fackel. ",
                    text:"Umgekehrt: Erwarten Sie Dunkelheit in einer bestimmten Situation oder Beziehung. Vielleicht stirbt eine Freundschaft, eine Partnerschaft, eine Ehe oder ein Teil Ihrer Persönlichkeit, der bereits seine Stärke und Nützlichkeit verloren hat. Dieses Zeichen erfordert, dass Sie die Vergangenheit freudig beiseite werfen und bereit sind, eine Weile mit der Leere im Inneren zu leben: Es erfordert die Entwicklung innerer Beständigkeit – die Fähigkeit, nicht der Trägheit alter Wege zu erliegen, während Sie auf neue Wege warten, die zu gegebener Zeit eintreten Natürlich wird es zum Licht führen. ",
                    },
                Laguzup:{
                    name:"Laguz",
                    desc:"Fließen. Wasser. Das, was führt. ",
                    text:"Diese Rune entspricht unserem Bedürfnis, ohne Verständnis oder Urteil in das Leben einzutauchen. Es erfüllt unseren Wunsch nach Komfort und Befriedigung emotionaler Bedürfnisse. Erfolg entsteht durch den Kontakt mit dem, was Sie intuitiv wissen, durch „Einstimmen“ auf Ihre eigenen Rhythmen. Die Rune „I“, die über dem „I“ steht, bezeichnet das, was die Alchemisten „conjunctio“, die heilige Ehe, nannten. ",
                    },
                Laguzdown:{
                    name:"Laguz",
                    desc:"Fließen. Wasser. Das, was führt. ",
                    text:"Umgekehrt: Warnung vor der Gefahr von Überspannung, übermäßiger Krafteinwirkung; eine Warnung davor, zu versuchen, Ihre Fähigkeiten zu überschreiten oder die Grenzen Ihrer verfügbaren Kraft zu überschreiten. ",
                    },
                Mannazup:{
                    name:"Mannaz",
                    desc:"Ego. Ich. ",
                    text:"Der Ausgangspunkt ist Ich. Nur Klarheit und der Wille zur Veränderung werden wirksam sein. Man sollte demütig bleiben – das ist der Rat des Orakels. Seien Sie unabhängig von Ihren Vorzügen flexibel, konzentriert und moderat. Versuchen Sie, auf ungewöhnliche Weise ein gewöhnliches Leben zu führen. Seien Sie zufrieden, indem Sie Ihre Arbeit um ihrer selbst willen erledigen. Kein Schnickschnack. ",
                    },
                Mannazdown:{
                    name:"Mannaz",
                    desc:"Ego. Ich. Der Ausgangspunkt ist Ich. ",
                    text:"Umgekehrt: Wenn Sie sich blockiert fühlen, rät Ihnen diese Rune, ehrlich zu sich selbst zu sein. Denken Sie nicht an die Menschen um Sie herum, sondern schauen Sie ruhig in sich hinein und suchen Sie nach den Feinden Ihrer Entwicklung. Sie werden sehen, dass der äußere „Feind“ nichts anderes als ein Spiegelbild dessen ist, was Sie bis zu diesem Moment nicht als von innen kommend erkennen konnten oder wollten. Die Herausforderung besteht darin, die Trägheit vergangener Gewohnheiten zu durchbrechen. ",
                    },
                Nauthizup:{
                    name:"Nauthiz",
                    desc:"Brauchen. Zwang. Leiden. ",
                    text:"Normal oder umgekehrt, das ist eine schwierige Rune. Der Umgang mit brutaler Nötigung ist ihre Lektion. Die Rolle dieses Zeichens besteht darin, unsere „Schattenzonen“ zu kennzeichnen, Orte, an denen das Wachstum gehemmt ist, was zu Schwächen führt, die wir negativ auf andere projizieren. Diese Rune sagt: Arbeite mit dem Schatten und erforsche, was in dir ist, was Unglück in dein Leben zieht. Die Notwendigkeit der Zurückhaltung steht hier außer Frage. Das Erscheinen dieser Rune macht Ihnen klar, dass Stopps vor Ihnen liegen – Gründe, Ihre Pläne noch einmal abzuwägen. Lassen Sie die Schwierigkeiten dieses Augenblicks Ihnen helfen, Ihre Beziehung zu Ihrem „Ich“ zu verbessern. Denken Sie daran, dass die Reinigung dem Fortschritt vorausgeht. Und überdenken Sie die Verwendung von Fehlern noch einmal. ",
                    },
                Nauthizdown:{
                    name:"Nauthiz",
                    desc:"Brauchen. Zwang. Leiden. ",
                    text:"Umgekehrt: Wenn wir aufhören, etwas in uns als unser Eigentum zu akzeptieren, führt das, was wir nicht mehr erkennen, zu Verwüstung. Dies erfordert eine Reinigung. Indem Sie es unternehmen, stärken Sie Ihren Charakter und stärken Ihren Willen. Beginnen Sie mit dem Schwierigsten und gehen Sie zu dem über, was nicht schwierig ist. Denken Sie daran, dass „leiden“ ursprünglich „unterworfen sein“ bedeutete. Sie sind also dem dunklen Teil Ihres Weges ausgesetzt. Wut kontrollieren, Impulse zügeln, starkes Vertrauen in sich selbst bewahren – das ist jetzt gefragt. ",
                    },
                Othilup:{
                    name:"Othil",
                    desc:"Trennung. Rückzug. Nachlass. ",
                    text:"Dies ist eine Zeit unterschiedlicher Wege. Alte Haut muss abgeworfen, überholte Beziehungen beendet werden. Die hier erforderliche Handlung ist Unterwerfung und möglicherweise Rückzug, begleitet von dem Wissen, wie und wann man sich zurückziehen sollte, und der Willensstärke, dies zu tun. Mit dieser Rune wird Eigentum in Verbindung gebracht – sie ist ein Zeichen für Erwerb und Gewinn. Der Gewinn, das „Erbe“, kann jedoch aus etwas stammen, von dem Sie sich trennen müssen. ",
                    },
                Othildown:{
                    name:"Othil",
                    desc:"Trennung. Rückzug. Nachlass. ",
                    text:"Umgekehrt: Dies ist nicht die Zeit, sich an alte Konventionen und Autoritäten zu binden. Fragen Sie sich, was sich für Sie „richtig“ anfühlt, und handeln Sie im Einklang mit dem Licht, das jetzt Ihr Leben erleuchtet. Was derzeit benötigt wird, ist nicht Starrheit, sondern Flexibilität. Wenn dieses Zeichen erscheint, denken Sie daran: Wir handeln, ohne etwas zu tun, und am Ende wird alles getan. ",
                    },
                Perthup:{
                    name:"Perth",
                    desc:"Hingabe. Was ist verborgen. ",
                    text:"Diese Rune bezieht sich auf den Himmel, auf das Unerkennbare und wird mit dem Phönixvogel in Verbindung gebracht – einem mystischen Vogel, der sich selbst verbrennt und aus der Asche wiedergeboren wird. Die Wege dieses Zeichens sind geheimnisvoll und verborgen. Was erreicht wird, manifestiert sich nicht leicht oder ohne weiteres. Das ist die Rune der Suche. Es symbolisiert den intensiv erlebten Aspekt der Einweihung und wird mit der tiefsten Ebene des Seins, mit der Grundlage Ihres Schicksals, in Verbindung gebracht. Für manche bedeutet Perth die Erfahrung des psychischen Todes. Wenn nötig, lassen Sie alles los, ohne Ausnahmen. Es geht um nichts Geringeres als die Erneuerung des Geistes. ",
                    },
                Perthdown:{
                    name:"Perth",
                    desc:"Hingabe. Was ist verborgen. ",
                    text:"Umgekehrt: Rat, nicht zu viel zu erwarten oder nicht auf die gewohnte Weise zu erwarten, denn das Alte hat ein Ende: Man kann einfach nicht alles auf die alte Art und Weise machen und nicht leiden. Das umgekehrte Vorzeichen rät dazu, nicht zu viel über das Endergebnis nachzudenken und sich nicht an Erinnerungen an vergangene Erfolge zu klammern; Wenn Sie etwas anderes tun, berauben Sie sich selbst der Gegenwart, der einzigen Zeit, in der Selbstveränderung möglich ist. ",
                    },
                Raidoup:{
                    name:"Raido",
                    desc:"Reise. Kommunikation. Union. Wiedervereinigung. ",
                    text:"Dies ist die Rune der Verbindung, der Harmonisierung von etwas, das zwei Seiten, zwei Elemente hat; die Rune der endgültigen Wiedervereinigung, die am Ende der Reise erreicht wird, wenn das Obere und das Untere eins werden. Wenn Sie rein sind, können Sie Ihren eigenen Widerwillen neutralisieren und zulassen, dass richtiges Handeln durch Sie fließt. Wie immer ist die Reise eine Reise der Selbstheilung, Selbstveränderung und Vereinigung. Vertrauen in Ihren eigenen Prozess ist die Essenz dieses Zeichens. ",
                    },
                Raidodown:{
                    name:"Raido",
                    desc:"Reise. Kommunikation. Union. Wiedervereinigung. ",
                    text:"Umgekehrt: Achten Sie besonders auf persönliche Beziehungen. Derzeit sind Trennungen wahrscheinlicher als Versöhnungen. Es wird von Ihrer Seite Anstrengung erfordern. Behalten Sie Ihren Humor – egal was passiert, Sie entscheiden, wie Sie reagieren. ",
                    },
                Sowelu:{
                    name:"Sowelu",
                    desc:"Integrität. Lebenskraft. Energie der Sonne. ",
                    text:"Dieses Zeichen symbolisiert die von unserer Natur geforderte Integrität. Es verkörpert den Wunsch nach Selbstverwirklichung und zeigt den Weg an, dem Sie folgen sollten, aber aus einigen verborgenen Gründen, sondern weil der Kern Ihrer Persönlichkeit dies erfordert. Die Suche nach Integrität ist die Aufgabe des Kriegers des Geistes. Aber Sie sind von Natur aus bereits das, was Sie werden möchten. Sie müssen Ihr Wesen – Ihren persönlichen Mythos – erkennen und ihm eine Form geben, ihn kreativ zum Ausdruck bringen. Mit großer Kraft stellt Ihnen dieses Zeichen Lebenskraft zur Verfügung und markiert eine Zeit der Aufladung und Wiederherstellung bis hin zur Zellebene. Aber Sie können sich zurückziehen, wenn Sie mit einer drängenden Situation konfrontiert werden, insbesondere wenn Ereignisse oder Menschen erfordern, dass Sie Ihre Energie „verbrauchen“. Der rechtzeitige Rückzug ist eine der Künste des Kriegers des Geistes. Gleichzeitig enthält diese Rune für manche den Rat, sich zu öffnen und Licht in den Bereich des Lebens zu lassen, der geheim und abgeschirmt war. ",
                    },
                Teiwazup:{
                    name:"Teiwaz",
                    desc:"Krieger. Tiv, Gott des Himmels. ",
                    text:"Dies ist die Rune des Kriegers des Geistes. Sein Kampf ist immer mit sich selbst. Den Willen durch Taten zu finden, fehlende Bindung an das Ergebnis, das ständige Bewusstsein, dass alles, was man tun kann, darin besteht, den Willen des Himmels durch sich selbst fließen zu lassen und sich nicht selbst im Weg zu stehen – das sind die Eigenschaften des Kriegers des Geistes. Wenn dieses Zeichen erscheint, geht es um die Charakterbildung. Wenn das Erscheinen der Rune mit romantischer Zuneigung verbunden ist, bedeutet dies, dass die betreffende Beziehung zeitgemäß und von der Vorsehung bestimmt ist. Wenn es um Ihr Engagement für eine Sache, eine Idee, einen Weg oder eine Verhaltensweise geht, rät die Kriegerrune zu Durchhaltevermögen, auch wenn manchmal Geduld erforderlich ist. In der Antike malten Krieger dieses Zeichen vor dem Kampf auf ihre Schilde. Da jetzt mehr gereinigte Energien wirken, stärkt dasselbe Symbol Ihre Entschlossenheit im Kampf zwischen „ICH“ und „ich“. ",
                    },
                Teiwazdown:{
                    name:"Teiwaz",
                    desc:"Krieger. Tiv, Gott des Himmels. ",
                    text:"Umgekehrt: Die Gefahr besteht darin, dass durch gedankenloses oder unzeitgemäßes Handeln Energie austritt oder abgesaugt wird. Wenn die Beziehung nur von kurzer Dauer ist, seien Sie nicht traurig und wissen Sie, dass ihre Laufzeit abgelaufen ist. Hier werden Glaubens- und Vertrauensfragen aufgeworfen und damit auch die Richtigkeit Ihrer Existenzweise in der Welt. Umgekehrt erfordert diese Rune eine Prüfung Ihrer Motive. Bist du damit beschäftigt, dich selbst zu erobern, oder versuchst du, jemand anderen zu erobern? Sind Ihnen Ergebnisse wichtig oder konzentrieren Sie sich auf die Aufgabe um ihrer selbst willen? Die Antworten finden Sie in sich selbst, nicht in Ratschlägen von außen. Und wenn Sie sich mit den Runen beraten, beraten Sie sich, Sie beraten sich mit Ihrem „Ich“. ",
                    },
                Thurisazup:{
                    name:"Thurisaz",
                    desc:"Tor. Ort der Untätigkeit. Gott Thor. ",
                    text:"Dies ist die Rune der Untätigkeit. Deshalb sollte man sich dem Tor nicht ohne nachzudenken nähern oder hindurchgehen. Stellen Sie sich vor, Sie stehen vor einem Tor auf einem Berggipfel. Dein ganzes Leben bleibt zurück und unten. Bevor Sie weitermachen, halten Sie inne und erinnern Sie sich an die Vergangenheit: das Lernen und die Freuden, Siege und Sorgen – alles, was Sie hierher geführt hat. Nimm alles auf, segne es und lass es los. Indem Sie sich von der Vergangenheit befreien, stellen Sie Ihre Energie wieder her. Treten Sie nun durch das Tor. ",
                    },
                Thurisazdown:{
                    name:"Thurisaz",
                    desc:"Tor. Ort der Untätigkeit. Gott Thor. ",
                    text:"Umgekehrt: Dieses Zeichen fordert Sie zum Nachdenken auf. Wenn Sie zu diesem Zeitpunkt übereilte Entscheidungen treffen, kann dies zu Bedauern führen, da Sie wahrscheinlich aus Schwäche handeln, sich selbst über Ihre Motive betrügen und neue Probleme schaffen, die weitaus schlimmer sind als die, die Sie zu lösen versuchen. ",
                    },
                Uruzup:{
                    name:"Uruz",
                    desc:"Stärke, Kraft. Männlichkeit. Weiblichkeit. Wilder Bulle. ",
                    text:"Dies ist ein Zeichen der Vollendung und des Neuanfangs. Es zeigt, dass Ihr Leben über seine Form hinausgewachsen ist, die sterben muss, damit die Energie des Lebens in einer neuen Geburt, einer neuen Form verkörpert werden kann. Was jetzt passiert, könnte dazu führen, dass Sie den Tod in sich selbst erleben. Denken Sie daran, dass eine neue Form, ein neues Leben immer besser ist als das alte. Machen Sie sich bereit für eine neue Form, die wie ein Verlust aussieht. Suchen Sie in der Asche – und dort werden Sie eine neue Perspektive und eine neue Geburt entdecken. ",
                    },
                Uruzdown:{
                    name:"Uruz",
                    desc:"Stärke, Kraft. Männlichkeit. Weiblichkeit. Wilder Bulle. ",
                    text:"Umgekehrt: Es könnte sich anfühlen, als würde deine eigene Stärke gegen dich eingesetzt. Für einige wird dieses Zeichen als Alarm dienen und kleinere Enttäuschungen und Misserfolge als Hinweise dienen. Für andere – die Unwissenderen und Unsensibleren – wird es mit einem schweren Schock verbunden sein. Umgekehrt erfordert diese Rune eine ernsthafte Analyse Ihrer Einstellung zu sich selbst. Aber begeben Sie sich nicht in die Dunkelheit. Sobald Sie im tiefen Wasser sind, lernen Sie das Tauchen. ",
                    },
                Wunjoup:{
                    name:"Wunjo",
                    desc:"Freude. Licht. ",
                    text:"Diese Rune ist ein fruchtbarer Zweig. Die Zeit der Qual ist vorbei und Sie sind gewissermaßen „zur Besinnung gekommen“. Der notwendige Wandel hat stattgefunden, und Sie können jetzt von den Vorteilen profitieren, die sich nun auf materielle Gewinne, Ihr Gefühlsleben oder Ihr Wohlbefinden beziehen. Dies ist die alchemistische Stufe, in der Wissen in Verständnis umgewandelt wird. Freude begleitet neue Energie, die zuvor blockiert war. Es entsteht eine neue Klarheit, die Sie möglicherweise dazu zwingt, bestehende Pläne, Ambitionen und Ziele aufzugeben. ",
                    },
                Wunjodown:{
                    name:"Wunjo",
                    desc:"Freude. Licht. ",
                    text:"Umgekehrt: Der Geburtsvorgang ist langwierig und schwierig. Eine Krise, eine schwierige Phase – auch wenn sie nur kurz ist – steht vor der Tür. Nachdenken und Nachdenken sind erforderlich, denn Licht und Dunkelheit sind immer noch miteinander verbunden und Zweifel und Zögern können die Freude verdunkeln, wenn Sie nicht verstehen, dass jetzt ihre Zeit gekommen ist. Im richtigen Licht betrachtet ist alles eine Prüfung. Wenn Sie sich auf die Gegenwart konzentrieren, anderen gegenüber authentisch sind und darauf vertrauen, was Ihnen passiert, können Sie nicht scheitern. ",
                    },
                Wyrd:{
                    name:"Wyrd",
                    desc:"Das Unbekannte. Göttlich. Gott Odin. ",
                    text:"Leere ist das Ende, Leere ist der Anfang. Hier sagt Ihnen das Unerkennbare, dass es in Ihrem Leben in Bewegung gekommen ist. Dieses Ungefüllte birgt ein starkes Potenzial. Leer und zugleich voller Inhalt umfasst es die Fülle des Seins, alles, was wahr werden muss. Gunst für das Geschehen und Bereitschaft dafür sind die Anforderungen dieser Rune. Denn wie kann man Kontrolle über etwas ausüben, das noch nicht Gestalt angenommen hat? Diese Rune erfordert oft einen Akt des Mutes, als würde man mit leeren Händen ins Leere springen. Sein Erscheinen ist eine direkte Prüfung Ihres Glaubens. Einerseits repräsentiert die Reine Rune karmische Kräfte – die Gesamtsumme dessen, was Sie getan haben, und die Grenzen dessen, was Sie sind und werden. Andererseits lehrt diese Rune, dass sich sogar die Schulden des alten Karmas verschieben und verändern, während Sie sich verändern und weiterentwickeln. Nichts ist vorherbestimmt, es gibt nichts, was nicht vermieden werden kann. ",
                    },
            }},

            fr: {
                translation: { 
                    YourRuneDay:'VOTRE RUNE DU JOUR',
                    Open:'OUVRIR',
                    WhatHave:"QU'EST-CE QUE C'EST",
                    WhatDo:"CE QU'IL FAUT FAIRE",
                    WhatBeImFuture:"QUE SE PASSE-T-IL",
                
            
                    Algizup:{
                        name:"Algiz",
                        desc:"Patronage. Canne. Wapiti. ",
                        text:"La maîtrise des émotions est essentielle. En période de changement, de tournants dans le cours de la vie et de changement personnel accéléré, il est important de ne pas céder aux émotions, qu'elles soient agréables ou désagréables. Cette rune se caractérise par de nouvelles opportunités et défis. Mais ils s’accompagnent d’abus et d’effets indésirables. Ce signe sert de miroir au Guerrier de l’Esprit, celui qui est engagé dans une bataille avec lui-même. La sécurité d'un guerrier est semblable au bruissement d'avertissement d'un carex ou aux bois courbés d'un élan - tous deux aident à maintenir un espace libre autour. N'oubliez pas qu'une action opportune et un comportement correct sont les seules choses qui offrent une véritable protection. ",
                        },
                    Algizdown:{
                        name:"Algiz",
                        desc:"Patronage. Canne. Wapiti. ",
                        text:"Inversé: soyez attentif à votre santé, surveillez attentivement les liens que vous établissez en ce moment et n'alourdissez pas le fardeau imposé aux autres. Si vous vous sentez à l'aise de vous impliquer avec des personnes qui vous « utilisent », souvenez-vous-en et assumez la responsabilité de votre position - alors vous ne pourrez qu'en bénéficier. ",
                        },
                    Ansuzup:{
                        name:"Ansuz",
                        desc:"Panneaux. Rune Messager. Dieu Loki. ",
                        text:"La note clé ici est de recevoir des messages, des cadeaux, des signes. Même un avertissement opportun peut être considéré comme un cadeau. Essayez d'être très attentif et sensible lors des rencontres, des visites, des rencontres fortuites, notamment avec ceux qui ont plus de sagesse que vous. Le signe correspond à un nouveau sentiment d'unité familiale. ",
                        },
                    Ansuzdown:{
                        name:"Ansuz",
                        desc:"Panneaux. Rune Messager. Dieu Loki. ",
                        text:"Inversé: Vous pourriez être préoccupé par ce qui semble être une connexion rompue, un manque de clarté ou de compréhension – que ce soit dans votre passé ou dans votre situation actuelle. Vous pourriez avoir l’impression que quelque chose vous empêche d’accepter ce qui vous est proposé. Des sentiments de futilité, des efforts inutiles, un voyage infructueux peuvent vous décourager. Mais ce qui arrive arrive à point nommé dans votre situation. Si votre puits est bouché, il est temps de le nettoyer. ",
                        },
                    Berkanaup:{
                        name:"Berkana",
                        desc:"Hauteur. Renaissance. Bouleau. ",
                        text:"Ce signe dénote la fertilité, qui favorise la croissance tant symboliquement que concrètement. La croissance peut concerner les activités quotidiennes ou familiales, les relations avec soi-même. Il s’agit d’une rune « porteuse », dans le sens où elle conduit à l’épanouissement et à la maturation. Cela nécessite une pénétration profonde dans les choses, consciemment et soigneusement. Tous les coins sombres doivent être nettoyés : cela doit être fait avec soin, et parfois l'aide d'un spécialiste est nécessaire. ",
                        },
                    Berkanadown:{
                        name:"Berkana",
                        desc:"Hauteur. Renaissance. Bouleau. ",
                        text:"Inversé: des événements ou, plus probablement, des traits de caractère entravent la croissance d’une nouvelle vie. Vous pourriez vous sentir découragé en raison de votre incapacité à prendre les bonnes mesures. Mais ce qu’il faut ici, ce n’est pas le découragement, mais la diligence et la minutie. Examinez ce qui s'est passé, votre rôle dans tout cela, vos besoins et ceux des autres. Faites-vous passer vos désirs avant les besoins des autres ? Allez en profondeur jusqu'à ce que vous puissiez identifier tous les obstacles à la croissance dans la situation. ",
                        },
                    Dagaz:{
                        name:"Dagaz",
                        desc:"Percée. Transformation. Jour. ",
                        text:"L'apparition de cette rune marque un changement ou une percée majeure dans le processus de changement de soi, une transformation complète de l'état - un virage à 180 degrés. Dans chaque vie, il y a au moins un moment qui, s'il est deviné et saisi, change à jamais son cours. Agissez donc en toute foi, même si le moment vous oblige à sauter les mains vides dans le vide. Si ce signe est accompagné d'une Rune Pure, l'ampleur de la transformation peut être telle qu'elle présagera la mort, la réussite de votre chemin. Parfois, cette rune présage une grande période de réussite et de prospérité. L'obscurité est derrière vous ; la journée a commencé. ",
                        },
                    Ehwazup:{
                        name:"Ehwaz",
                        desc:"Mouvement. Progrès. Cheval. ",
                        text:"C'est un signe de passage, de transition et de mouvement, de nouveaux habitats ou de nouvelle vie. Cela dénote également un mouvement dans le sens de corriger ou d’améliorer n’importe quelle situation. Cette rune se caractérise par un développement progressif et des progrès constants, une croissance lente à travers des changements et des changements sans fin. Cela peut s’appliquer à la fois aux affaires et au développement d’idées. Les relations doivent également subir des changements pour exister et se développer. ",
                        },
                    Ehwazdown:{
                        name:"Ehwaz",
                        desc:"Mouvement. Progrès. Cheval. ",
                        text:"Inversé: le mouvement rencontre un obstacle. Assurez-vous que ce que vous faites (ou ne faites pas) arrive au moment opportun. Il ne s'agit pas d'opportunités manquées : nous devons simplement comprendre que toutes les opportunités ne nous sont pas ouvertes. ",
                        },
                    Eihwaz:{
                        name:"Eihwaz",
                        desc:"Protection. Des forces odieuses. If. ",
                        text:"En étant testés, nous trouvons la force de surmonter les obstacles et d’éviter l’échec. En même temps, nous développons une aversion pour les comportements qui créent des situations difficiles. Il semble y avoir un obstacle sur votre chemin, mais le retard peut s'avérer favorable. Ne vous précipitez pas trop. Ce n’est pas le moment ou la situation où vous pouvez ressentir votre influence. Le conseil de ce signe est la patience. Cela demande de la prévoyance et de la persévérance. Prévenez les difficultés prévisibles avec les bonnes actions. Nous ne sommes pas tant ceux qui font, mais plutôt ceux qui décident. Lorsque notre décision est pure, l'action ne demande aucun effort car elle est soutenue et renforcée par l'Univers. ",
                        },
                    Fehuup:{
                        name:"Fehu",
                        desc:"Possession. Soutien. Bétail. ",
                        text:"C'est la rune de l'épanouissement : ambition satisfaite, récompense reçue, amour heureux. Ce signe appelle à une exploration approfondie de l’essence de l’acquisition et de la victoire dans votre vie. Examinez attentivement si ce qui est nécessaire à votre bien-être réside dans la richesse et la propriété ou dans la maîtrise de soi et le renforcement de la volonté. Une autre signification de cette rune est associée à la préservation de ce qui a déjà été réalisé. Profitez de votre chance et n'oubliez pas de la partager. ",
                        },
                    Fehudown:{
                        name:"Fehu",
                        desc:"Possession. Soutien. Bétail. ",
                        text:"Inversé: Il peut y avoir des perturbations importantes dans votre vie, des pertes de biens - de mineures à très graves. Vous devrez peut-être rester assis, impuissant, et regarder ce que vous avez gagné commencer à disparaître. Même s’il y a des raisons de se réjouir, ne vous laissez pas emporter par des divertissements dénués de sens. Inversée, cette rune indique que les situations douteuses sont abondantes et se présentent sous de nombreuses formes et apparences. En traitant du côté obscur de ce signe, vous avez la possibilité de reconnaître où se trouve votre véritable nourriture. ",
                        },
                    Gebo:{
                        name:"Gebo",
                        desc:"Partenariat. Cadeau. ",
                        text:"L’apparition de ce signe montre que l’unité, l’unification ou la participation – sous une forme ou une autre – est à nos portes. Mais un véritable partenariat ne peut exister qu'entre des individus séparés et intégraux qui ne perdent pas leur séparation, même dans l'unité et l'unité. Laissez le vent céleste danser entre vous. Ce signe n'a pas de position inversée car il désigne le don de liberté dont dépendent tous les autres dons. ",
                        },
                    Hagalaz:{
                        name:"Hagalaz",
                        desc:"Destruction. Forces élémentaires. Grêle. ",
                        text:"Le changement, l'innovation, la liberté et la libération sont les qualités de ce signe. Son apparition indique un besoin intérieur urgent de se libérer de l’identification limitante à la réalité matérielle et de faire l’expérience du monde du proto-mental. C'est la rune de destruction élémentaire, des événements totalement indépendants de votre volonté. Attendez-vous à ce que vos plans soient perturbés car il s’agit d’une puissante force d’éveil, même si les formes de son influence peuvent varier. L’action de ce signe est mieux décrite par les mots «rupture complète». ",
                        },
                    Inguz:{
                        name:"Inguz",
                        desc:"La fertilité. Nouveaux commencements. Ing, Héros-Dieu. ",
                        text:"L’achèvement des efforts est ce qu’implique ce signe. L'apparition de cette rune signifie que vous avez déjà assez de force pour atteindre l'achèvement, la résolution, après quoi un nouveau départ viendra. L'achèvement est le plus important ici. Si vous devez terminer quelque chose, faites-en votre tâche principale. L’apparition de ce signe symbolise la sortie de l’état de chrysalide. En même temps que vous vous débarrasserez de l'ancien, vous serez libéré des tensions et des incertitudes. ",
                        },
                    Isa:{
                        name:"Isa",
                        desc:"Arrêt. Perte. Glace. ",
                        text:"C'est l'hiver dans votre vie spirituelle. Vous pourriez vous retrouver confus dans une situation dont vous ne pouvez même pas voir le sens. Vous pourriez vous retrouver impuissant à faire autre chose que vous soumettre, battre en retraite, voire sacrifier un désir de longue date. Soyez patient car c’est une période de développement caché menant à la renaissance. Les réalisations et les succès sont désormais peu probables. Pendant cette période, n’espérez pas et ne comptez pas sur de l’aide ou un soutien amical. Dans votre isolement, restez prudent et n'essayez pas obstinément d'exercer votre volonté. ",
                        },
                    Jera:{
                        name:"Jera",
                        desc:"Récolte. Moment de la récolte. Un ans. ",
                        text:"Rune des résultats favorables. Elle s’applique à toute activité ou entreprise à laquelle vous êtes associé. L'apparition de cette rune vous donnera la force de maintenir une bonne humeur. N’oubliez cependant pas qu’on ne peut pas s’attendre à des résultats rapides. Une période de temps est toujours requise, d'où les mots clés « un an », symbolisant le cycle complet du temps avant la récolte, la récolte ou la délivrance. Vous avez préparé le sol et planté la graine. Maintenant tu dois bien prendre soin de lui. ",
                        },
                    Kanoup:{
                        name:"Kano",
                        desc:"Divulgation. Feu. Torche. ",
                        text:"C'est la rune de l'ouverture, d'une clarté renouvelée, dissipant les ténèbres qui ont recouvert une partie de votre vie. Il ne peut y avoir de divulgation mutuelle dans une relation. Vous pouvez servir de déclencheur, de chronomètre, en réalisant que la lumière de la compréhension est à nouveau disponible pour vous deux. Comprenez que même si, d’une part, vous êtes limités et dépendants, d’autre part, vous existez comme un centre exact d’où, en fusionnant, rayonnent les forces harmonisantes et favorables de l’Univers. Vous êtes ce centre. En termes simples, si vous opériez auparavant dans l'obscurité, il y a maintenant suffisamment de lumière pour voir que le patient sur la table d'opération, c'est vous.. ",
                        },
                    Kanodown:{
                        name:"Kano",
                        desc:"Divulgation. Feu. Torche. ",
                        text:"Inversé: Attendez-vous à l’obscurité dans certaines situations ou relations. Peut-être qu’une amitié, un partenariat, un mariage ou une partie de votre personnalité qui a déjà perdu sa force et son utilité est en train de mourir. Ce signe exige que vous mettiez joyeusement de côté le passé et que vous soyez prêt à vivre un certain temps avec le vide intérieur : il nécessite le développement de la constance intérieure - la capacité de ne pas succomber à l'inertie des anciens chemins en attendant de nouveaux qui, en temps voulu. bien sûr, mènera à la lumière. ",
                        },
                    Laguzup:{
                        name:"Laguz",
                        desc:"Couler. Eau. Ce qui mène. ",
                        text:"Cette rune correspond à notre besoin de nous plonger dans la vie sans compréhension ni jugement. Il répond à notre désir de confort et de satisfaction de nos besoins émotionnels. Le succès s’obtient au contact de ce que vous connaissez intuitivement, en vous « accordant » à vos propres rythmes. La rune 'je', qui se trouve en position supérieure par rapport au 'Je', désigne ce que les alchimistes appelaient 'conjonctio', le mariage sacré. ",
                        },
                    Laguzdown:{
                        name:"Laguz",
                        desc:"Couler. Eau. Ce qui mène. ",
                        text:"Inversé: avertissement du danger de surtension, de force excessive ; un avertissement contre toute tentative de dépasser vos capacités ou d’aller au-delà des limites de votre force disponible. ",
                        },
                    Mannazup:{
                        name:"Mannaz",
                        desc:"Ego. Moi. ",
                        text:"Le point de départ, c’est MOI. Seules la clarté et l’envie de changement seront efficaces. Il faut rester humble - tel est le conseil de l'oracle. Quels que soient vos mérites, soyez flexible, concentré et modéré. Essayez de mener une vie ordinaire d'une manière inhabituelle. Soyez satisfait de faire votre travail pour le plaisir. Sans fioritures. ",
                        },
                    Mannazdown:{
                        name:"Mannaz",
                        desc:"Ego. Moi. Le point de départ, c’est MOI. ",
                        text:"Inversé: Si vous vous sentez bloqué, cette rune vous conseille d'être honnête avec vous-même. Ne pensez pas à votre entourage, mais regardez sereinement en vous à la recherche des ennemis de votre évolution. Vous verrez que « l’ennemi » extérieur n’est rien d’autre que le reflet de ce que jusqu’à ce moment vous ne pouviez ou ne vouliez pas reconnaître comme venant de l’intérieur. Le défi ici est de briser l’inertie des habitudes passées. ",
                        },
                    Nauthizup:{
                        name:"Nauthiz",
                        desc:"Besoin. Compulsion. Souffrance. ",
                        text:"Normale ou inversée, c'est une rune difficile. Faire face à une coercition brutale est sa leçon. Le rôle de ce signe est de désigner nos zones « d’ombre », des lieux où la croissance est inhibée, ce qui entraîne des faiblesses que nous projetons négativement sur les autres. Cette rune dit : travaillez avec l'ombre, explorez ce qu'il y a en vous qui attire le malheur dans votre vie. La nécessité de faire preuve de retenue ne fait ici aucun doute. L'apparition de cette rune vous fait comprendre qu'il y a des arrêts à venir - des raisons de peser à nouveau vos projets. Laissez les difficultés de ce moment vous aider à redresser votre relation avec votre « je ». N'oubliez pas que la purification précède le progrès. Et reconsidérer l'utilisation des échecs. ",
                        },
                    Nauthizdown:{
                        name:"Nauthiz",
                        desc:"Besoin. Compulsion. Souffrance. ",
                        text:"Inversé: lorsque nous cessons d’accepter quelque chose en nous comme étant nôtre, ce que nous avons cessé de reconnaître produit la dévastation. Cela nécessite un nettoyage. En l’entreprenant, vous renforcerez votre caractère et renforcerez votre volonté. Commencez par ce qui est le plus difficile et avancez vers ce qui ne l’est pas. Rappelez-vous que « souffrir » signifiait à l'origine « être soumis ». Vous êtes donc exposé à la partie sombre de votre chemin. Contrôler la colère, retenir ses impulsions, maintenir une forte confiance en soi - c'est ce qui est nécessaire maintenant. ",
                        },
                    Othilup:{
                        name:"Othil",
                        desc:"Séparation. Retraite. Héritage. ",
                        text:"C’est une époque de chemins divergents. La vieille peau doit être enlevée, les relations dépassées doivent prendre fin. L’action requise ici est la soumission et très probablement la retraite, accompagnée de la connaissance de comment et quand battre en retraite et de la force de la volonté pour le faire. La propriété est associée à cette rune - c'est un signe d'acquisitions et de gains. Cependant, le gain, « l’héritage », peut provenir de quelque chose dont vous devez vous séparer. ",
                        },
                    Othildown:{
                        name:"Othil",
                        desc:"Séparation. Retraite. Héritage. ",
                        text:"Inversé: ce n’est pas le moment de se laisser lier par d’anciennes conventions et autorités. Demandez-vous ce qui vous convient et agissez en accord avec la Lumière qui illumine désormais votre vie. A l’heure actuelle, ce qu’il faut, ce n’est pas de la rigidité, mais de la fluidité. Lorsque ce signe apparaît, rappelez-vous : on agit sans faire, et tout finit par se faire. ",
                        },
                    Perthup:{
                        name:"Perth",
                        desc:"Dévouement. Ce qui est caché. ",
                        text:"Cette rune se rapporte au Ciel, à l'Inconnaissable, et est associée à l'oiseau Phénix, un oiseau mystique qui se brûle et renaît de ses cendres. Les chemins de ce signe sont mystérieux et cachés. Ce qui est réalisé ne se manifeste pas facilement ni facilement. C'est la rune de recherche. Il symbolise l’aspect intensément vécu de l’initiation et est associé au niveau le plus profond de l’être, au fondement de votre destinée. Pour certains, Perth signifie l’expérience de la mort psychique. Si nécessaire, lâchez tout, sans aucune exception. Rien de moins que le renouveau de l’Esprit n’est l’enjeu. ",
                        },
                    Perthdown:{
                        name:"Perth",
                        desc:"Dévouement. Ce qui est caché. ",
                        text:"Inversé: conseil de ne pas trop attendre ou de ne pas attendre de la manière habituelle, car l'ancien a pris fin : on ne peut tout simplement pas tout faire à l'ancienne et ne pas souffrir. Le signe inversé conseille de ne pas trop penser au résultat final et de ne pas s'attacher aux souvenirs des réalisations passées ; En faisant autrement, vous vous privez du présent, le seul moment où le changement de soi est possible. ",
                        },
                    Raidoup:{
                        name:"Raido",
                        desc:"Voyage. Communication. Syndicat. Réunion. ",
                        text:"C'est la rune de la connexion, de l'harmonisation de quelque chose qui a deux faces, deux éléments ; la rune des retrouvailles finales, qui s'obtiennent à la fin du voyage, lorsque le supérieur et l'inférieur ne font plus qu'un. Lorsque vous êtes pur, vous pouvez neutraliser votre propre réticence à permettre à l’action juste de se dérouler à travers vous. Comme toujours, le voyage est un chemin d’auto-guérison, de changement de soi et d’union. Faire confiance à votre propre processus est l'essence de ce signe. ",
                        },
                    Raidodown:{
                        name:"Raido",
                        desc:"Voyage. Communication. Syndicat. Réunion. ",
                        text:"Inversé: Soyez particulièrement attentif aux relations personnelles. À l’heure actuelle, les ruptures sont plus probables que les réconciliations. Cela demandera des efforts de votre part. Gardez votre humour : quoi qu'il arrive, c'est à vous de décider comment réagir. ",
                        },
                    Sowelu:{
                        name:"Sowelu",
                        desc:"Intégrité. Force de vie. Énergie du soleil. ",
                        text:"Ce signe symbolise l'intégrité requise par notre nature. Il incarne le désir de réalisation de soi et indique le chemin que vous devez suivre, mais pour des raisons cachées, mais parce que le cœur de votre personnalité l’exige. La recherche de l’intégrité est la tâche du Guerrier de l’Esprit. Mais vous, par nature, êtes déjà ce que vous essayez de devenir. Vous devez réaliser votre essence – votre mythe personnel – et lui donner forme, l’exprimer de manière créative. Doté d'une grande puissance, ce signe met à votre disposition la force vitale et marque un temps de recharge et de restauration jusqu'au niveau cellulaire. Mais vous pouvez reculer face à une situation urgente, surtout si des événements ou des personnes vous obligent à « dépenser » votre énergie. La retraite opportune est l’un des arts du Guerrier de l’Esprit. En même temps, pour certains, cette rune contient des conseils pour s'ouvrir, laisser entrer la lumière dans ce domaine de la vie qui était secret, clôturé. ",
                        },
                    Teiwazup:{
                        name:"Teiwaz",
                        desc:"Guerrier. Tiv, Dieu du Ciel. ",
                        text:"C'est la rune du Guerrier de l'Esprit. Son combat est toujours contre lui-même. Trouver la volonté par l'action, le manque d'attachement au résultat, la conscience constante que tout ce qui peut être fait est de permettre à la Volonté du Ciel de couler à travers soi et de ne pas se mettre sur son propre chemin - telles sont les caractéristiques du Guerrier de l'Esprit. . Lorsque ce signe apparaît, il s’agit de formation du caractère. Si l’apparition de la rune est associée à une affection romantique, cela signifie que la relation en question est opportune et providentielle. Lorsqu'il s'agit de votre dévouement à une cause, une idée, un chemin ou une manière de vous comporter, la Rune du Guerrier conseille la persévérance, même si parfois le type de persévérance requis est la patience. Dans les temps anciens, les guerriers peignaient ce signe sur leurs boucliers avant la bataille. Maintenant que des énergies plus purifiées fonctionnent, ce même symbole renforce votre détermination dans la lutte entre «MOI» et «moi». ",
                        },
                    Teiwazdown:{
                        name:"Teiwaz",
                        desc:"Guerrier. Tiv, Dieu du Ciel. ",
                        text:"Inversé: le danger est que l'énergie s'échappe ou soit aspirée par une action irréfléchie ou intempestive. Si la relation est de courte durée, ne soyez pas triste et sachez que sa durée est expirée. Des questions de foi et de confiance sont ici soulevées, et avec elles la justesse de votre manière d'exister dans le monde. Inversée, cette rune nécessite un examen de vos motivations. Êtes-vous en train de vous conquérir ou essayez-vous de conquérir quelqu’un d’autre ? Vous souciez-vous des résultats ou êtes-vous concentré sur la tâche pour elle-même ? Vous trouverez les réponses en vous-même et non dans des conseils extérieurs. Et quand vous consultez les Runes, vous consultez, vous consultez votre «MOI». ",
                        },
                    Thurisazup:{
                        name:"Thurisaz",
                        desc:"Grille. Lieu d'inaction. Dieu Thor. ",
                        text:"C'est la rune de l'inaction. Par conséquent, il ne faut pas s’approcher de la porte ou la franchir sans réfléchir. Imaginez que vous vous tenez devant une porte au sommet d’une montagne. Votre vie entière est laissée derrière et en dessous. Avant d'avancer, arrêtez-vous et rappelez-vous le passé : l'apprentissage et les joies, les victoires et les chagrins – tout ce qui vous a amené ici. Prenez tout cela, bénissez-le et laissez tomber. En vous libérant du passé, vous retrouvez votre énergie. Maintenant, franchissez la porte. ",
                        },
                    Thurisazdown:{
                        name:"Thurisaz",
                        desc:"Grille. Lieu d'inaction. Dieu Thor. ",
                        text:"Inversé: Ce signe vous oblige à réfléchir. Prendre des décisions hâtives à ce moment-là peut conduire à des regrets, car vous risquez d'agir par faiblesse, de vous tromper sur vos motivations et de créer de nouveaux problèmes bien plus désagréables que ceux que vous essayez de résoudre. ",
                        },
                    Uruzup:{
                        name:"Uruz",
                        desc:"Force, puissance. Masculinité. La féminité. Taureau sauvage. ",
                        text:"C’est un signe d’achèvement et de nouveau départ. Cela montre que votre vie a grandi au-delà de sa forme, qui doit mourir pour que l'énergie de la vie puisse s'incarner dans une nouvelle naissance, une nouvelle forme. Ce qui se passe actuellement peut vous faire expérimenter la mort en vous-même. N'oubliez pas qu'une nouvelle forme, une nouvelle vie est toujours meilleure que l'ancienne. Préparez-vous à une nouvelle forme qui ressemble à une perte. Cherchez parmi les cendres et vous y découvrirez une nouvelle perspective et une nouvelle naissance. ",
                        },
                    Uruzdown:{
                        name:"Uruz",
                        desc:"Force, puissance. Masculinité. La féminité. Taureau sauvage. ",
                        text:"Inversé: vous pouvez avoir l’impression que votre propre force est utilisée contre vous. Pour certains, ce signe servira d'alarme, et des déceptions et échecs mineurs serviront d'indices. Pour d’autres – les plus ignorants et insensibles – cela sera associé à un choc grave. Inversée, cette rune nécessite une analyse sérieuse de votre attitude envers vous-même. Mais ne vous éloignez pas de l’obscurité. Une fois en eau profonde, apprenez à plonger. ",
                        },
                    Wunjoup:{
                        name:"Wunjo",
                        desc:"Joie. Lumière. ",
                        text:"Cette rune est une branche fructueuse. La période de tourment est terminée et vous avez, en un sens, « repris vos esprits ». Le changement nécessaire s’est produit et vous êtes désormais libre d’en récolter les bénéfices, qu’ils concernent les gains matériels, votre vie émotionnelle ou votre sentiment de bien-être. C'est l'étape alchimique où la connaissance se transforme en compréhension. La joie accompagne une nouvelle énergie, auparavant bloquée. Il existe une nouvelle clarté qui peut vous obliger à abandonner les plans, ambitions et objectifs existants. ",
                        },
                    Wunjodown:{
                        name:"Wunjo",
                        desc:"Joie. Lumière ",
                        text:"Inversé: le processus d'accouchement est long et difficile. Une crise, une étape difficile – même courte – est proche. La pensée et la réflexion sont nécessaires, car la lumière et les ténèbres sont toujours liées, et les doutes et les hésitations peuvent assombrir la joie si vous ne comprenez pas que c'est maintenant leur heure. Vu sous le bon jour, tout est un test. En vous concentrant sur le présent, en étant authentique envers les autres et en faisant confiance à ce qui vous arrive, vous ne pouvez pas échouer. ",
                        },
                    Wyrd:{
                        name:"Wyrd",
                        desc:"L'inconnu. Divin. Dieu est unique. ",
                        text:"Le vide est la fin, le vide est le début. Ici, l'Inconnaissable vous dit qu'il est entré en mouvement dans votre vie. Ce vide recèle un puissant potentiel. Vide et en même temps plein de contenu, il embrasse la plénitude de l'être, tout ce qui doit se réaliser. La faveur pour ce qui se passe et la préparation à cela sont les exigences de cette Rune. Après tout, comment exercer un contrôle sur quelque chose qui n’a pas encore pris forme? Cette Rune demande souvent un acte de courage, comme sauter dans le vide les mains vides. Son apparition est un test direct de votre foi. D'une part, la Rune Pure représente les forces karmiques - la somme totale de ce que vous avez fait et les limites de ce que vous êtes et deviendrez. D’un autre côté, cette Rune enseigne que même les dettes du vieux karma changent et changent en même temps que vous changez et vous développez. Rien n’est prédéterminé : il n’y a rien qui ne puisse être évité. ",
                        },    
            }},

      },
    });

    export default i18n;