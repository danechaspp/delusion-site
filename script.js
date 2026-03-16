// ── i18n translations ────────────────────────────────────
var LANGS = {
en:{
  nav_why:'Why Us',nav_store:'Store',signin_btn_nav:'Sign In',
  modal_title:'Sign In',modal_sub:'Access your account',
  placeholder_user:'Username',placeholder_pass:'Password',
  signin_btn:'Sign In →',modal_footer:'No account? <a href="#">Register free</a>',
  hero_badge:'⚡ v4.2.1 — Updated today',
  hero_h1:'DOMINATE<br/><span class="glow-text">THE GAME</span>',
  hero_p:'The most powerful undetected Minecraft client.<br/>Bypass every anticheat. Win every fight.',
  hero_dl:'Download Free',hero_plans:'View Plans ↗',
  stat_online:'ONLINE NOW',stat_bypass:'% BYPASS RATE',stat_modules:'MODULES',stat_users:'TOTAL USERS',
  why_label:'WHY CHOOSE US',why_title:'Built for <span class="glow-text">Winners</span>',
  card1_h:'Full Bypass',card1_p:'NCP, AAC, Vulcan, Grim, Spartan — all bypassed. Updates within hours of any patch.',
  card2_h:'Smart Aimbot',card2_p:'Human-like aim with FOV control and randomization. Looks legit, plays deadly.',
  card3_h:'Auto Updates',card3_p:'Silent background updates. Always on the latest version.',
  how_label:'HOW IT WORKS',how_title:'Three steps to <span class="glow-text">domination</span>',
  step1_h:'Register',step1_p:'Create your free account in seconds. No credit card required.',
  step2_h:'Download',step2_p:'Get the launcher. One-click install, works on all versions.',
  step3_h:'Dominate',step3_p:'Launch, configure your modules, and start winning every fight.',
  reviews_label:'COMMUNITY',reviews_title:'What players <span class="glow-text">say</span>',
  rev1:'"Best client I\'ve ever used. Bypasses Hypixel like nothing."',
  rev2:'"Updates drop within hours of patches. Never been banned once."',
  rev3:'"The aimbot is insane. Looks completely legit on recordings."',
  footer_sub:'The most powerful Minecraft client. Use responsibly.',
  footer_discord:'Discord',footer_terms:'Terms',footer_privacy:'Privacy',footer_support:'Support',
  footer_copy:'© 2026 Delusion. Not affiliated with Mojang.',
  store_label:'STORE',store_title:'Choose Your <span class="glow-text">Plan</span>',
  tab_1m:'1 Month',tab_3m:'3 Months',tab_6m:'6 Months',tab_12m:'1 Year',
  member:'DELUSION MEMBER',support:'Support',uid_label:'ACCOUNT #',dl_title:'Download Launcher',
  upg_text:'You\'re on <strong>FREE</strong> plan. Unlock everything with Pro.',upgrade:'Upgrade ↗',
  account:'ACCOUNT',username:'Username',account_num:'Account #',registered:'Registered',
  days_active:'Days Active',last_login:'Last Login',status:'Status',
  subscription:'SUBSCRIPTION',plan:'Plan',purchase_date:'Purchase Date',
  expires:'Expires',days_left:'Days Left',duration:'Duration',exp_warn:'⚠ Expires in less than 5 days',
  hwid_title:'HWID',hwid_label:'Hardware ID',hwid_resets:'Resets Used',hwid_last:'Last Reset',hwid_reset:'Reset HWID',
  stats:'STATS',sessions:'Sessions',version:'Client Version',engine:'Bypass Engine',platform:'Platform',
  logout:'Log Out'
},
ru:{
  nav_why:'О нас',nav_store:'Магазин',signin_btn_nav:'Войти',
  modal_title:'Войти',modal_sub:'Доступ к аккаунту',
  placeholder_user:'Имя пользователя',placeholder_pass:'Пароль',
  signin_btn:'Войти →',modal_footer:'Нет аккаунта? <a href="#">Регистрация</a>',
  hero_badge:'⚡ v4.2.1 — Обновлено сегодня',
  hero_h1:'ДОМИНИРУЙ<br/><span class="glow-text">В ИГРЕ</span>',
  hero_p:'Самый мощный необнаруживаемый клиент Minecraft.<br/>Обходи любой античит. Побеждай в каждой битве.',
  hero_dl:'Скачать бесплатно',hero_plans:'Посмотреть планы ↗',
  stat_online:'ОНЛАЙН',stat_bypass:'% ОБХОД',stat_modules:'МОДУЛИ',stat_users:'ПОЛЬЗОВАТЕЛЕЙ',
  why_label:'ПОЧЕМУ МЫ',why_title:'Создано для <span class="glow-text">победителей</span>',
  card1_h:'Полный обход',card1_p:'NCP, AAC, Vulcan, Grim, Spartan — всё обходится. Обновляемся в течение часов.',
  card2_h:'Умный аимбот',card2_p:'Человекоподобный прицел с контролем FOV. Выглядит легально, играет смертоносно.',
  card3_h:'Авто-обновления',card3_p:'Тихие фоновые обновления. Всегда последняя версия.',
  how_label:'КАК ЭТО РАБОТАЕТ',how_title:'Три шага до <span class="glow-text">доминирования</span>',
  step1_h:'Регистрация',step1_p:'Создай бесплатный аккаунт за секунды. Карта не нужна.',
  step2_h:'Скачать',step2_p:'Получи лаунчер. Установка в один клик.',
  step3_h:'Доминируй',step3_p:'Запусти, настрой модули и начни побеждать.',
  reviews_label:'СООБЩЕСТВО',reviews_title:'Что говорят <span class="glow-text">игроки</span>',
  rev1:'"Лучший клиент из всех. Обходит Hypixel как ничто."',
  rev2:'"Обновления выходят в течение часов. Ни разу не забанили."',
  rev3:'"Аимбот невероятный. На записях выглядит полностью легально."',
  footer_sub:'Самый мощный клиент Minecraft. Используй ответственно.',
  footer_discord:'Discord',footer_terms:'Условия',footer_privacy:'Конфиденциальность',footer_support:'Поддержка',
  footer_copy:'© 2026 Delusion. Не связан с Mojang.',
  store_label:'МАГАЗИН',store_title:'Выбери свой <span class="glow-text">план</span>',
  tab_1m:'1 месяц',tab_3m:'3 месяца',tab_6m:'6 месяцев',tab_12m:'1 год',
  member:'УЧАСТНИК DELUSION',support:'Поддержка',uid_label:'АККАУНТ #',dl_title:'Скачать лаунчер',
  upg_text:'Вы на плане <strong>FREE</strong>. Откройте всё с Pro.',upgrade:'Улучшить ↗',
  account:'АККАУНТ',username:'Имя',account_num:'Номер аккаунта',registered:'Дата регистрации',
  days_active:'Дней активен',last_login:'Последний вход',status:'Статус',
  subscription:'ПОДПИСКА',plan:'План',purchase_date:'Дата покупки',
  expires:'Истекает',days_left:'Дней осталось',duration:'Длительность',exp_warn:'⚠ Подписка истекает менее чем через 5 дней',
  hwid_title:'HWID',hwid_label:'ID оборудования',hwid_resets:'Сбросов использовано',hwid_last:'Последний сброс',hwid_reset:'Сбросить HWID',
  stats:'СТАТИСТИКА',sessions:'Сессий',version:'Версия клиента',engine:'Движок обхода',platform:'Платформа',
  logout:'Выйти'
},
de:{
  nav_why:'Über uns',nav_store:'Shop',signin_btn_nav:'Anmelden',
  modal_title:'Anmelden',modal_sub:'Zugang zu deinem Konto',
  placeholder_user:'Benutzername',placeholder_pass:'Passwort',
  signin_btn:'Anmelden →',modal_footer:'Kein Konto? <a href="#">Registrieren</a>',
  hero_badge:'⚡ v4.2.1 — Heute aktualisiert',
  hero_h1:'DOMINIERE<br/><span class="glow-text">DAS SPIEL</span>',
  hero_p:'Der mächtigste unentdeckte Minecraft-Client.<br/>Umgehe jeden Anticheat. Gewinne jeden Kampf.',
  hero_dl:'Kostenlos herunterladen',hero_plans:'Pläne ansehen ↗',
  stat_online:'ONLINE JETZT',stat_bypass:'% BYPASS',stat_modules:'MODULE',stat_users:'NUTZER GESAMT',
  why_label:'WARUM WIR',why_title:'Gebaut für <span class="glow-text">Gewinner</span>',
  card1_h:'Voller Bypass',card1_p:'NCP, AAC, Vulcan, Grim, Spartan — alles umgangen. Updates innerhalb von Stunden.',
  card2_h:'Smarter Aimbot',card2_p:'Menschenähnliches Zielen mit FOV-Kontrolle. Sieht legitim aus, spielt tödlich.',
  card3_h:'Auto-Updates',card3_p:'Stille Hintergrund-Updates. Immer die neueste Version.',
  how_label:'WIE ES FUNKTIONIERT',how_title:'Drei Schritte zur <span class="glow-text">Dominanz</span>',
  step1_h:'Registrieren',step1_p:'Erstelle dein kostenloses Konto in Sekunden.',
  step2_h:'Herunterladen',step2_p:'Hol den Launcher. Ein-Klick-Installation.',
  step3_h:'Dominieren',step3_p:'Starte, konfiguriere deine Module und gewinne.',
  reviews_label:'COMMUNITY',reviews_title:'Was Spieler <span class="glow-text">sagen</span>',
  rev1:'"Bester Client den ich je benutzt habe."',
  rev2:'"Updates kommen in Stunden. Noch nie gebannt."',
  rev3:'"Der Aimbot ist wahnsinnig. Sieht völlig legitim aus."',
  footer_sub:'Der mächtigste Minecraft-Client. Verantwortungsvoll nutzen.',
  footer_discord:'Discord',footer_terms:'AGB',footer_privacy:'Datenschutz',footer_support:'Support',
  footer_copy:'© 2026 Delusion. Nicht mit Mojang verbunden.',
  store_label:'SHOP',store_title:'Wähle deinen <span class="glow-text">Plan</span>',
  tab_1m:'1 Monat',tab_3m:'3 Monate',tab_6m:'6 Monate',tab_12m:'1 Jahr',
  member:'DELUSION MITGLIED',support:'Support',uid_label:'KONTO #',dl_title:'Launcher herunterladen',
  upg_text:'Du nutzt den <strong>FREE</strong> Plan.',upgrade:'Upgraden ↗',
  account:'KONTO',username:'Benutzername',account_num:'Konto #',registered:'Registriert',
  days_active:'Aktive Tage',last_login:'Letzter Login',status:'Status',
  subscription:'ABO',plan:'Plan',purchase_date:'Kaufdatum',
  expires:'Läuft ab',days_left:'Tage übrig',duration:'Laufzeit',exp_warn:'⚠ Läuft in weniger als 5 Tagen ab',
  hwid_title:'HWID',hwid_label:'Hardware-ID',hwid_resets:'Resets genutzt',hwid_last:'Letzter Reset',hwid_reset:'HWID zurücksetzen',
  stats:'STATISTIK',sessions:'Sitzungen',version:'Client-Version',engine:'Bypass-Engine',platform:'Plattform',
  logout:'Abmelden'
},
es:{
  nav_why:'Por qué nosotros',nav_store:'Tienda',signin_btn_nav:'Iniciar sesión',
  modal_title:'Iniciar sesión',modal_sub:'Accede a tu cuenta',
  placeholder_user:'Usuario',placeholder_pass:'Contraseña',
  signin_btn:'Iniciar sesión →',modal_footer:'¿Sin cuenta? <a href="#">Regístrate gratis</a>',
  hero_badge:'⚡ v4.2.1 — Actualizado hoy',
  hero_h1:'DOMINA<br/><span class="glow-text">EL JUEGO</span>',
  hero_p:'El cliente Minecraft indetectable más poderoso.<br/>Evade cualquier anticheat. Gana cada pelea.',
  hero_dl:'Descargar gratis',hero_plans:'Ver planes ↗',
  stat_online:'EN LÍNEA',stat_bypass:'% BYPASS',stat_modules:'MÓDULOS',stat_users:'USUARIOS TOTALES',
  why_label:'POR QUÉ NOSOTROS',why_title:'Hecho para <span class="glow-text">ganadores</span>',
  card1_h:'Bypass completo',card1_p:'NCP, AAC, Vulcan, Grim, Spartan — todo evadido. Actualizaciones en horas.',
  card2_h:'Aimbot inteligente',card2_p:'Puntería humana con control FOV. Parece legítimo, juega mortalmente.',
  card3_h:'Actualizaciones auto',card3_p:'Actualizaciones silenciosas en segundo plano. Siempre la última versión.',
  how_label:'CÓMO FUNCIONA',how_title:'Tres pasos hacia la <span class="glow-text">dominación</span>',
  step1_h:'Registrarse',step1_p:'Crea tu cuenta gratuita en segundos.',
  step2_h:'Descargar',step2_p:'Obtén el launcher. Instalación con un clic.',
  step3_h:'Dominar',step3_p:'Lanza, configura tus módulos y empieza a ganar.',
  reviews_label:'COMUNIDAD',reviews_title:'Lo que dicen los <span class="glow-text">jugadores</span>',
  rev1:'"El mejor cliente que he usado. Evade Hypixel sin problemas."',
  rev2:'"Las actualizaciones llegan en horas. Nunca me han baneado."',
  rev3:'"El aimbot es increíble. Parece completamente legítimo."',
  footer_sub:'El cliente Minecraft más poderoso. Úsalo responsablemente.',
  footer_discord:'Discord',footer_terms:'Términos',footer_privacy:'Privacidad',footer_support:'Soporte',
  footer_copy:'© 2026 Delusion. No afiliado con Mojang.',
  store_label:'TIENDA',store_title:'Elige tu <span class="glow-text">plan</span>',
  tab_1m:'1 mes',tab_3m:'3 meses',tab_6m:'6 meses',tab_12m:'1 año',
  member:'MIEMBRO DELUSION',support:'Soporte',uid_label:'CUENTA #',dl_title:'Descargar launcher',
  upg_text:'Estás en el plan <strong>FREE</strong>.',upgrade:'Mejorar ↗',
  account:'CUENTA',username:'Usuario',account_num:'Cuenta #',registered:'Registrado',
  days_active:'Días activo',last_login:'Último acceso',status:'Estado',
  subscription:'SUSCRIPCIÓN',plan:'Plan',purchase_date:'Fecha de compra',
  expires:'Expira',days_left:'Días restantes',duration:'Duración',exp_warn:'⚠ Expira en menos de 5 días',
  hwid_title:'HWID',hwid_label:'ID de hardware',hwid_resets:'Resets usados',hwid_last:'Último reset',hwid_reset:'Resetear HWID',
  stats:'ESTADÍSTICAS',sessions:'Sesiones',version:'Versión cliente',engine:'Motor bypass',platform:'Plataforma',
  logout:'Cerrar sesión'
},
fr:{
  nav_why:'Pourquoi nous',nav_store:'Boutique',signin_btn_nav:'Connexion',
  modal_title:'Connexion',modal_sub:'Accédez à votre compte',
  placeholder_user:'Nom d\'utilisateur',placeholder_pass:'Mot de passe',
  signin_btn:'Connexion →',modal_footer:'Pas de compte? <a href="#">S\'inscrire</a>',
  hero_badge:'⚡ v4.2.1 — Mis à jour aujourd\'hui',
  hero_h1:'DOMINEZ<br/><span class="glow-text">LE JEU</span>',
  hero_p:'Le client Minecraft indétectable le plus puissant.<br/>Contournez tout anticheat. Gagnez chaque combat.',
  hero_dl:'Télécharger gratuitement',hero_plans:'Voir les plans ↗',
  stat_online:'EN LIGNE',stat_bypass:'% BYPASS',stat_modules:'MODULES',stat_users:'UTILISATEURS',
  why_label:'POURQUOI NOUS',why_title:'Fait pour les <span class="glow-text">gagnants</span>',
  card1_h:'Bypass complet',card1_p:'NCP, AAC, Vulcan, Grim, Spartan — tout contourné. Mises à jour en quelques heures.',
  card2_h:'Aimbot intelligent',card2_p:'Visée humaine avec contrôle FOV. Semble légitime, joue mortellement.',
  card3_h:'Mises à jour auto',card3_p:'Mises à jour silencieuses. Toujours à la dernière version.',
  how_label:'COMMENT ÇA MARCHE',how_title:'Trois étapes vers la <span class="glow-text">domination</span>',
  step1_h:'S\'inscrire',step1_p:'Créez votre compte gratuit en quelques secondes.',
  step2_h:'Télécharger',step2_p:'Obtenez le launcher. Installation en un clic.',
  step3_h:'Dominer',step3_p:'Lancez, configurez vos modules et commencez à gagner.',
  reviews_label:'COMMUNAUTÉ',reviews_title:'Ce que disent les <span class="glow-text">joueurs</span>',
  rev1:'"Meilleur client que j\'ai jamais utilisé."',
  rev2:'"Les mises à jour arrivent en heures. Jamais banni."',
  rev3:'"L\'aimbot est incroyable. Semble totalement légitime."',
  footer_sub:'Le client Minecraft le plus puissant. Utilisez de manière responsable.',
  footer_discord:'Discord',footer_terms:'CGU',footer_privacy:'Confidentialité',footer_support:'Support',
  footer_copy:'© 2026 Delusion. Non affilié à Mojang.',
  store_label:'BOUTIQUE',store_title:'Choisissez votre <span class="glow-text">plan</span>',
  tab_1m:'1 mois',tab_3m:'3 mois',tab_6m:'6 mois',tab_12m:'1 an',
  member:'MEMBRE DELUSION',support:'Support',uid_label:'COMPTE #',dl_title:'Télécharger le launcher',
  upg_text:'Vous êtes sur le plan <strong>FREE</strong>.',upgrade:'Améliorer ↗',
  account:'COMPTE',username:'Nom d\'utilisateur',account_num:'Compte #',registered:'Inscrit le',
  days_active:'Jours actifs',last_login:'Dernière connexion',status:'Statut',
  subscription:'ABONNEMENT',plan:'Plan',purchase_date:'Date d\'achat',
  expires:'Expire le',days_left:'Jours restants',duration:'Durée',exp_warn:'⚠ Expire dans moins de 5 jours',
  hwid_title:'HWID',hwid_label:'ID matériel',hwid_resets:'Réinitialisations',hwid_last:'Dernière réinit.',hwid_reset:'Réinitialiser HWID',
  stats:'STATS',sessions:'Sessions',version:'Version client',engine:'Moteur bypass',platform:'Plateforme',
  logout:'Déconnexion'
},
zh:{
  nav_why:'关于我们',nav_store:'商店',signin_btn_nav:'登录',
  modal_title:'登录',modal_sub:'访问您的账户',
  placeholder_user:'用户名',placeholder_pass:'密码',
  signin_btn:'登录 →',modal_footer:'没有账户？<a href="#">免费注册</a>',
  hero_badge:'⚡ v4.2.1 — 今日更新',
  hero_h1:'主宰<br/><span class="glow-text">游戏</span>',
  hero_p:'最强大的不可检测Minecraft客户端。<br/>绕过所有反作弊。赢得每场战斗。',
  hero_dl:'免费下载',hero_plans:'查看计划 ↗',
  stat_online:'在线人数',stat_bypass:'% 绕过率',stat_modules:'模块',stat_users:'总用户数',
  why_label:'为什么选择我们',why_title:'为<span class="glow-text">赢家</span>而生',
  card1_h:'完全绕过',card1_p:'NCP, AAC, Vulcan, Grim, Spartan — 全部绕过。补丁后数小时内更新。',
  card2_h:'智能瞄准',card2_p:'类人瞄准，FOV控制和随机化。看起来合法，玩起来致命。',
  card3_h:'自动更新',card3_p:'静默后台更新。始终保持最新版本。',
  how_label:'工作原理',how_title:'三步实现<span class="glow-text">主宰</span>',
  step1_h:'注册',step1_p:'几秒钟内创建免费账户。无需信用卡。',
  step2_h:'下载',step2_p:'获取启动器。一键安装，支持所有版本。',
  step3_h:'主宰',step3_p:'启动，配置模块，开始赢得每场战斗。',
  reviews_label:'社区',reviews_title:'玩家<span class="glow-text">评价</span>',
  rev1:'"我用过的最好的客户端。绕过Hypixel毫不费力。"',
  rev2:'"补丁后数小时内更新。从未被封禁。"',
  rev3:'"瞄准器太厉害了。录像上看起来完全合法。"',
  footer_sub:'最强大的Minecraft客户端。请负责任地使用。',
  footer_discord:'Discord',footer_terms:'条款',footer_privacy:'隐私',footer_support:'支持',
  footer_copy:'© 2026 Delusion. 与Mojang无关。',
  store_label:'商店',store_title:'选择您的<span class="glow-text">计划</span>',
  tab_1m:'1个月',tab_3m:'3个月',tab_6m:'6个月',tab_12m:'1年',
  member:'DELUSION 成员',support:'支持',uid_label:'账号 #',dl_title:'下载启动器',
  upg_text:'您正在使用 <strong>FREE</strong> 计划。',upgrade:'升级 ↗',
  account:'账号',username:'用户名',account_num:'账号编号',registered:'注册时间',
  days_active:'活跃天数',last_login:'最后登录',status:'状态',
  subscription:'订阅',plan:'计划',purchase_date:'购买日期',
  expires:'到期时间',days_left:'剩余天数',duration:'时长',exp_warn:'⚠ 订阅将在5天内到期',
  hwid_title:'HWID',hwid_label:'硬件ID',hwid_resets:'已用重置次数',hwid_last:'上次重置',hwid_reset:'重置HWID',
  stats:'统计',sessions:'会话数',version:'客户端版本',engine:'绕过引擎',platform:'平台',
  logout:'退出'
},
tr:{
  nav_why:'Neden biz',nav_store:'Mağaza',signin_btn_nav:'Giriş yap',
  modal_title:'Giriş yap',modal_sub:'Hesabına eriş',
  placeholder_user:'Kullanıcı adı',placeholder_pass:'Şifre',
  signin_btn:'Giriş yap →',modal_footer:'Hesabın yok mu? <a href="#">Ücretsiz kayıt ol</a>',
  hero_badge:'⚡ v4.2.1 — Bugün güncellendi',
  hero_h1:'OYUNA<br/><span class="glow-text">HAKİM OL</span>',
  hero_p:'En güçlü tespit edilemeyen Minecraft istemcisi.<br/>Her anticheat\'i atla. Her dövüşü kazan.',
  hero_dl:'Ücretsiz indir',hero_plans:'Planları gör ↗',
  stat_online:'ŞU AN ONLINE',stat_bypass:'% BYPASS',stat_modules:'MODÜLLER',stat_users:'TOPLAM KULLANICI',
  why_label:'NEDEN BİZ',why_title:'<span class="glow-text">Kazananlar</span> için yapıldı',
  card1_h:'Tam Bypass',card1_p:'NCP, AAC, Vulcan, Grim, Spartan — hepsi atlandı. Saatler içinde güncelleme.',
  card2_h:'Akıllı Aimbot',card2_p:'FOV kontrolü ile insan benzeri nişan alma. Meşru görünür, ölümcül oynar.',
  card3_h:'Otomatik Güncelleme',card3_p:'Sessiz arka plan güncellemeleri. Her zaman son sürüm.',
  how_label:'NASIL ÇALIŞIR',how_title:'<span class="glow-text">Hakimiyet</span> için üç adım',
  step1_h:'Kayıt ol',step1_p:'Saniyeler içinde ücretsiz hesap oluştur.',
  step2_h:'İndir',step2_p:'Launcher\'ı al. Tek tıkla kurulum.',
  step3_h:'Hakim ol',step3_p:'Başlat, modüllerini yapılandır ve kazanmaya başla.',
  reviews_label:'TOPLULUK',reviews_title:'Oyuncular ne <span class="glow-text">diyor</span>',
  rev1:'"Kullandığım en iyi istemci. Hypixel\'i kolayca atlıyor."',
  rev2:'"Güncellemeler saatler içinde geliyor. Hiç ban yemedim."',
  rev3:'"Aimbot inanılmaz. Kayıtlarda tamamen meşru görünüyor."',
  footer_sub:'En güçlü Minecraft istemcisi. Sorumlu kullanın.',
  footer_discord:'Discord',footer_terms:'Şartlar',footer_privacy:'Gizlilik',footer_support:'Destek',
  footer_copy:'© 2026 Delusion. Mojang ile bağlantısı yoktur.',
  store_label:'MAĞAZA',store_title:'<span class="glow-text">Planını</span> seç',
  tab_1m:'1 ay',tab_3m:'3 ay',tab_6m:'6 ay',tab_12m:'1 yıl',
  member:'DELUSION ÜYESİ',support:'Destek',uid_label:'HESAP #',dl_title:'Launcher İndir',
  upg_text:'<strong>FREE</strong> planındasınız.',upgrade:'Yükselt ↗',
  account:'HESAP',username:'Kullanıcı adı',account_num:'Hesap #',registered:'Kayıt tarihi',
  days_active:'Aktif gün',last_login:'Son giriş',status:'Durum',
  subscription:'ABONELİK',plan:'Plan',purchase_date:'Satın alma tarihi',
  expires:'Bitiş tarihi',days_left:'Kalan gün',duration:'Süre',exp_warn:'⚠ 5 günden az kaldı',
  hwid_title:'HWID',hwid_label:'Donanım ID',hwid_resets:'Kullanılan sıfırlama',hwid_last:'Son sıfırlama',hwid_reset:'HWID Sıfırla',
  stats:'İSTATİSTİK',sessions:'Oturum',version:'İstemci sürümü',engine:'Bypass motoru',platform:'Platform',
  logout:'Çıkış'
},
pt:{
  nav_why:'Por que nós',nav_store:'Loja',signin_btn_nav:'Entrar',
  modal_title:'Entrar',modal_sub:'Acesse sua conta',
  placeholder_user:'Usuário',placeholder_pass:'Senha',
  signin_btn:'Entrar →',modal_footer:'Sem conta? <a href="#">Registre-se grátis</a>',
  hero_badge:'⚡ v4.2.1 — Atualizado hoje',
  hero_h1:'DOMINE<br/><span class="glow-text">O JOGO</span>',
  hero_p:'O cliente Minecraft indetectável mais poderoso.<br/>Burle qualquer anticheat. Vença cada luta.',
  hero_dl:'Baixar grátis',hero_plans:'Ver planos ↗',
  stat_online:'ONLINE AGORA',stat_bypass:'% BYPASS',stat_modules:'MÓDULOS',stat_users:'USUÁRIOS TOTAIS',
  why_label:'POR QUE NÓS',why_title:'Feito para <span class="glow-text">vencedores</span>',
  card1_h:'Bypass completo',card1_p:'NCP, AAC, Vulcan, Grim, Spartan — tudo burlado. Atualizações em horas.',
  card2_h:'Aimbot inteligente',card2_p:'Mira humana com controle de FOV. Parece legítimo, joga mortalmente.',
  card3_h:'Atualizações auto',card3_p:'Atualizações silenciosas em segundo plano. Sempre na última versão.',
  how_label:'COMO FUNCIONA',how_title:'Três passos para a <span class="glow-text">dominação</span>',
  step1_h:'Registrar',step1_p:'Crie sua conta gratuita em segundos.',
  step2_h:'Baixar',step2_p:'Obtenha o launcher. Instalação com um clique.',
  step3_h:'Dominar',step3_p:'Inicie, configure seus módulos e comece a vencer.',
  reviews_label:'COMUNIDADE',reviews_title:'O que os <span class="glow-text">jogadores</span> dizem',
  rev1:'"Melhor cliente que já usei. Burla o Hypixel facilmente."',
  rev2:'"Atualizações chegam em horas. Nunca fui banido."',
  rev3:'"O aimbot é incrível. Parece completamente legítimo."',
  footer_sub:'O cliente Minecraft mais poderoso. Use com responsabilidade.',
  footer_discord:'Discord',footer_terms:'Termos',footer_privacy:'Privacidade',footer_support:'Suporte',
  footer_copy:'© 2026 Delusion. Não afiliado à Mojang.',
  store_label:'LOJA',store_title:'Escolha seu <span class="glow-text">plano</span>',
  tab_1m:'1 mês',tab_3m:'3 meses',tab_6m:'6 meses',tab_12m:'1 ano',
  member:'MEMBRO DELUSION',support:'Suporte',uid_label:'CONTA #',dl_title:'Baixar Launcher',
  upg_text:'Você está no plano <strong>FREE</strong>.',upgrade:'Melhorar ↗',
  account:'CONTA',username:'Usuário',account_num:'Conta #',registered:'Registrado em',
  days_active:'Dias ativo',last_login:'Último login',status:'Status',
  subscription:'ASSINATURA',plan:'Plano',purchase_date:'Data de compra',
  expires:'Expira em',days_left:'Dias restantes',duration:'Duração',exp_warn:'⚠ Expira em menos de 5 dias',
  hwid_title:'HWID',hwid_label:'ID de hardware',hwid_resets:'Resets usados',hwid_last:'Último reset',hwid_reset:'Resetar HWID',
  stats:'ESTATÍSTICAS',sessions:'Sessões',version:'Versão do cliente',engine:'Motor bypass',platform:'Plataforma',
  logout:'Sair'
},
pl:{
  nav_why:'Dlaczego my',nav_store:'Sklep',signin_btn_nav:'Zaloguj się',
  modal_title:'Zaloguj się',modal_sub:'Dostęp do konta',
  placeholder_user:'Nazwa użytkownika',placeholder_pass:'Hasło',
  signin_btn:'Zaloguj się →',modal_footer:'Nie masz konta? <a href="#">Zarejestruj się</a>',
  hero_badge:'⚡ v4.2.1 — Zaktualizowano dziś',
  hero_h1:'ZDOMINUJ<br/><span class="glow-text">GRĘ</span>',
  hero_p:'Najpotężniejszy niewykrywalny klient Minecraft.<br/>Omiń każdy antycheat. Wygraj każdą walkę.',
  hero_dl:'Pobierz za darmo',hero_plans:'Zobacz plany ↗',
  stat_online:'ONLINE TERAZ',stat_bypass:'% BYPASS',stat_modules:'MODUŁY',stat_users:'ŁĄCZNI UŻYTKOWNICY',
  why_label:'DLACZEGO MY',why_title:'Stworzony dla <span class="glow-text">zwycięzców</span>',
  card1_h:'Pełny bypass',card1_p:'NCP, AAC, Vulcan, Grim, Spartan — wszystko ominięte. Aktualizacje w godzinach.',
  card2_h:'Inteligentny aimbot',card2_p:'Ludzkie celowanie z kontrolą FOV. Wygląda legalnie, gra śmiertelnie.',
  card3_h:'Auto-aktualizacje',card3_p:'Ciche aktualizacje w tle. Zawsze najnowsza wersja.',
  how_label:'JAK TO DZIAŁA',how_title:'Trzy kroki do <span class="glow-text">dominacji</span>',
  step1_h:'Zarejestruj się',step1_p:'Utwórz darmowe konto w sekundy.',
  step2_h:'Pobierz',step2_p:'Pobierz launcher. Instalacja jednym kliknięciem.',
  step3_h:'Dominuj',step3_p:'Uruchom, skonfiguruj moduły i zacznij wygrywać.',
  reviews_label:'SPOŁECZNOŚĆ',reviews_title:'Co mówią <span class="glow-text">gracze</span>',
  rev1:'"Najlepszy klient jakiego używałem. Omija Hypixel bez problemu."',
  rev2:'"Aktualizacje wychodzą w godzinach. Nigdy nie zostałem zbanowany."',
  rev3:'"Aimbot jest niesamowity. Na nagraniach wygląda całkowicie legalnie."',
  footer_sub:'Najpotężniejszy klient Minecraft. Używaj odpowiedzialnie.',
  footer_discord:'Discord',footer_terms:'Regulamin',footer_privacy:'Prywatność',footer_support:'Wsparcie',
  footer_copy:'© 2026 Delusion. Nie powiązany z Mojang.',
  store_label:'SKLEP',store_title:'Wybierz swój <span class="glow-text">plan</span>',
  tab_1m:'1 miesiąc',tab_3m:'3 miesiące',tab_6m:'6 miesięcy',tab_12m:'1 rok',
  member:'CZŁONEK DELUSION',support:'Wsparcie',uid_label:'KONTO #',dl_title:'Pobierz launcher',
  upg_text:'Jesteś na planie <strong>FREE</strong>.',upgrade:'Ulepsz ↗',
  account:'KONTO',username:'Nazwa użytkownika',account_num:'Konto #',registered:'Zarejestrowano',
  days_active:'Dni aktywności',last_login:'Ostatnie logowanie',status:'Status',
  subscription:'SUBSKRYPCJA',plan:'Plan',purchase_date:'Data zakupu',
  expires:'Wygasa',days_left:'Pozostałe dni',duration:'Czas trwania',exp_warn:'⚠ Wygasa za mniej niż 5 dni',
  hwid_title:'HWID',hwid_label:'ID sprzętu',hwid_resets:'Użyte resety',hwid_last:'Ostatni reset',hwid_reset:'Resetuj HWID',
  stats:'STATYSTYKI',sessions:'Sesje',version:'Wersja klienta',engine:'Silnik bypass',platform:'Platforma',
  logout:'Wyloguj'
},
uk:{
  nav_why:'Про нас',nav_store:'Магазин',signin_btn_nav:'Увійти',
  modal_title:'Увійти',modal_sub:'Доступ до акаунту',
  placeholder_user:'Ім\'я користувача',placeholder_pass:'Пароль',
  signin_btn:'Увійти →',modal_footer:'Немає акаунту? <a href="#">Реєстрація</a>',
  hero_badge:'⚡ v4.2.1 — Оновлено сьогодні',
  hero_h1:'ДОМІНУЙ<br/><span class="glow-text">В ГРІ</span>',
  hero_p:'Найпотужніший непомітний клієнт Minecraft.<br/>Обходь будь-який античіт. Перемагай у кожній битві.',
  hero_dl:'Завантажити безкоштовно',hero_plans:'Переглянути плани ↗',
  stat_online:'ОНЛАЙН',stat_bypass:'% ОБХІД',stat_modules:'МОДУЛІ',stat_users:'КОРИСТУВАЧІВ',
  why_label:'ЧОМУ МИ',why_title:'Створено для <span class="glow-text">переможців</span>',
  card1_h:'Повний обхід',card1_p:'NCP, AAC, Vulcan, Grim, Spartan — все обходиться. Оновлення протягом годин.',
  card2_h:'Розумний аімбот',card2_p:'Людиноподібне прицілювання з контролем FOV. Виглядає легально, грає смертоносно.',
  card3_h:'Авто-оновлення',card3_p:'Тихі фонові оновлення. Завжди остання версія.',
  how_label:'ЯК ЦЕ ПРАЦЮЄ',how_title:'Три кроки до <span class="glow-text">домінування</span>',
  step1_h:'Реєстрація',step1_p:'Створи безкоштовний акаунт за секунди.',
  step2_h:'Завантажити',step2_p:'Отримай лаунчер. Встановлення в один клік.',
  step3_h:'Домінуй',step3_p:'Запусти, налаштуй модулі та починай перемагати.',
  reviews_label:'СПІЛЬНОТА',reviews_title:'Що кажуть <span class="glow-text">гравці</span>',
  rev1:'"Найкращий клієнт з усіх. Обходить Hypixel як ніщо."',
  rev2:'"Оновлення виходять протягом годин. Жодного разу не забанили."',
  rev3:'"Аімбот неймовірний. На записах виглядає повністю легально."',
  footer_sub:'Найпотужніший клієнт Minecraft. Використовуй відповідально.',
  footer_discord:'Discord',footer_terms:'Умови',footer_privacy:'Конфіденційність',footer_support:'Підтримка',
  footer_copy:'© 2026 Delusion. Не пов\'язаний з Mojang.',
  store_label:'МАГАЗИН',store_title:'Обери свій <span class="glow-text">план</span>',
  tab_1m:'1 місяць',tab_3m:'3 місяці',tab_6m:'6 місяців',tab_12m:'1 рік',
  member:'УЧАСНИК DELUSION',support:'Підтримка',uid_label:'АКАУНТ #',dl_title:'Завантажити лаунчер',
  upg_text:'Ви на плані <strong>FREE</strong>.',upgrade:'Покращити ↗',
  account:'АКАУНТ',username:'Ім\'я',account_num:'Номер акаунту',registered:'Дата реєстрації',
  days_active:'Днів активний',last_login:'Останній вхід',status:'Статус',
  subscription:'ПІДПИСКА',plan:'План',purchase_date:'Дата покупки',
  expires:'Закінчується',days_left:'Днів залишилось',duration:'Тривалість',exp_warn:'⚠ Підписка закінчується менш ніж через 5 днів',
  hwid_title:'HWID',hwid_label:'ID обладнання',hwid_resets:'Скидань використано',hwid_last:'Останнє скидання',hwid_reset:'Скинути HWID',
  stats:'СТАТИСТИКА',sessions:'Сесій',version:'Версія клієнта',engine:'Двигун обходу',platform:'Платформа',
  logout:'Вийти'
}
};

// ── Apply language with fade animation ───────────────────
var _currentLang = localStorage.getItem('mc_lang') || 'en';

function applyLang(lang) {
  var t = LANGS[lang] || LANGS.en;
  _currentLang = lang;
  localStorage.setItem('mc_lang', lang);

  // Fade out body content
  document.body.style.transition = 'opacity .18s ease';
  document.body.style.opacity = '0';

  setTimeout(function() {
    // Translate all data-i18n elements
    document.querySelectorAll('[data-i18n]').forEach(function(el) {
      var key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) el.innerHTML = t[key];
    });
    // Translate placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el) {
      var key = el.getAttribute('data-i18n-placeholder');
      if (t[key] !== undefined) el.placeholder = t[key];
    });
    // Update lang label in all dropdowns
    document.querySelectorAll('#nav-lang-label, #lang-label').forEach(function(el) {
      el.textContent = lang.toUpperCase();
    });
    document.querySelectorAll('.lang-item').forEach(function(li) {
      li.classList.toggle('active', li.dataset.lang === lang);
    });
    // Fade back in
    document.body.style.opacity = '1';
  }, 180);
}

// ── Navbar lang switcher (shared across all pages) ───────
(function() {
  var btn  = document.getElementById('nav-lang-btn');
  var drop = document.getElementById('nav-lang-drop');
  if (!btn || !drop) return;

  // Set initial label
  document.querySelectorAll('#nav-lang-label').forEach(function(el) {
    el.textContent = _currentLang.toUpperCase();
  });
  drop.querySelectorAll('.lang-item').forEach(function(li) {
    li.classList.toggle('active', li.dataset.lang === _currentLang);
  });

  btn.addEventListener('click', function(e) {
    e.stopPropagation();
    drop.classList.toggle('open');
  });
  document.addEventListener('click', function() { drop.classList.remove('open'); });
  drop.querySelectorAll('.lang-item').forEach(function(li) {
    li.addEventListener('click', function() {
      applyLang(li.dataset.lang);
      drop.classList.remove('open');
    });
  });

  // Apply saved lang on load
  if (_currentLang !== 'en') applyLang(_currentLang);
})();

// ── Loader ───────────────────────────────────────────────
window.addEventListener('load', function() {
  var loader = document.getElementById('loader');
  if (loader) setTimeout(function() { loader.classList.add('hidden'); }, 1400);
});

// ── DNA Canvas ───────────────────────────────────────────
var canvas = document.getElementById('bg-canvas');
if (canvas) {
  var ctx = canvas.getContext('2d');
  var W, H;
  function resize() { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; }
  resize();
  window.addEventListener('resize', resize);

  var mouse = { x: -9999, y: -9999 };
  window.addEventListener('mousemove', function(e) { mouse.x = e.clientX; mouse.y = e.clientY; });

  function DNAStrand(init) { this.spawn(init); }
  DNAStrand.prototype.spawn = function(init) {
    this.angle = Math.random() * Math.PI * 2;
    this.speed = 0.08 + Math.random() * 0.35;
    var sc = Math.random();
    if (sc < 0.3) {
      this.nodes = 3 + Math.floor(Math.random() * 3);
      this.gap = 6 + Math.random() * 4;
      this.amp = 2 + Math.random() * 3;
      this.alpha = 0.04 + Math.random() * 0.08;
      this.lw = 0.3 + Math.random() * 0.2;
    } else if (sc < 0.7) {
      this.nodes = 5 + Math.floor(Math.random() * 4);
      this.gap = 10 + Math.random() * 7;
      this.amp = 5 + Math.random() * 6;
      this.alpha = 0.06 + Math.random() * 0.1;
      this.lw = 0.5 + Math.random() * 0.3;
    } else {
      this.nodes = 8 + Math.floor(Math.random() * 5);
      this.gap = 14 + Math.random() * 8;
      this.amp = 8 + Math.random() * 10;
      this.alpha = 0.04 + Math.random() * 0.07;
      this.lw = 0.6 + Math.random() * 0.4;
    }
    this.phase = Math.random() * Math.PI * 2;
    this.phaseSpeed = 0.004 + Math.random() * 0.008;
    if (init) { this.cx = Math.random() * W; this.cy = Math.random() * H; }
    else {
      var e = Math.floor(Math.random() * 4);
      if      (e===0){this.cx=Math.random()*W;this.cy=-80;}
      else if (e===1){this.cx=W+80;this.cy=Math.random()*H;}
      else if (e===2){this.cx=Math.random()*W;this.cy=H+80;}
      else           {this.cx=-80;this.cy=Math.random()*H;}
    }
  };
  DNAStrand.prototype.isOff = function() {
    var m=160; return this.cx<-m||this.cx>W+m||this.cy<-m||this.cy>H+m;
  };
  DNAStrand.prototype.update = function() {
    this.cx += Math.cos(this.angle)*this.speed;
    this.cy += Math.sin(this.angle)*this.speed;
    this.phase += this.phaseSpeed;
    var dx=this.cx-mouse.x, dy=this.cy-mouse.y, d=Math.sqrt(dx*dx+dy*dy);
    if(d<90&&d>0){var f=(90-d)/90;this.cx+=(dx/d)*f*1.8;this.cy+=(dy/d)*f*1.8;}
    if(this.isOff()) this.spawn(false);
  };
  DNAStrand.prototype.draw = function() {
    ctx.save();
    ctx.globalAlpha = this.alpha;
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = this.lw;
    var px=-Math.sin(this.angle), py=Math.cos(this.angle);
    var half=(this.nodes*this.gap)/2;
    var lx=[],ly=[],rx=[],ry=[];
    for(var i=0;i<this.nodes;i++){
      var t=i/(this.nodes-1), pos=-half+i*this.gap;
      var bx=this.cx+Math.cos(this.angle)*pos, by=this.cy+Math.sin(this.angle)*pos;
      var off=Math.sin(this.phase+t*Math.PI*2.5)*this.amp;
      lx.push(bx+px*(-off)); ly.push(by+py*(-off));
      rx.push(bx+px*(off));  ry.push(by+py*(off));
    }
    ctx.beginPath(); lx.forEach(function(x,i){i===0?ctx.moveTo(x,ly[i]):ctx.lineTo(x,ly[i]);}); ctx.stroke();
    ctx.beginPath(); rx.forEach(function(x,i){i===0?ctx.moveTo(x,ry[i]):ctx.lineTo(x,ry[i]);}); ctx.stroke();
    for(var j=0;j<this.nodes;j++){
      var tv=Math.abs(Math.sin(this.phase+(j/(this.nodes-1))*Math.PI*2.5));
      if(tv>0.25){
        ctx.globalAlpha=this.alpha*tv*.8;
        ctx.beginPath();ctx.moveTo(lx[j],ly[j]);ctx.lineTo(rx[j],ry[j]);ctx.stroke();
        ctx.globalAlpha=this.alpha*tv;ctx.fillStyle='#fff';
        ctx.beginPath();ctx.arc(lx[j],ly[j],1,0,Math.PI*2);ctx.fill();
        ctx.beginPath();ctx.arc(rx[j],ry[j],1,0,Math.PI*2);ctx.fill();
      }
    }
    ctx.restore();
  };

  var strands = [];
  for(var s=0;s<250;s++) strands.push(new DNAStrand(true));
  function animate(){
    ctx.clearRect(0,0,W,H);
    strands.forEach(function(st){st.update();st.draw();});
    requestAnimationFrame(animate);
  }
  animate();
}

// ── Modal auth system ────────────────────────────────────
var overlay = document.getElementById('modal-overlay');
if (overlay) {
  var openBtns = [document.getElementById('open-modal'), document.getElementById('open-modal-hero')].filter(Boolean);
  var closeBtn = document.getElementById('modal-close');

  function openModal(screen) {
    overlay.classList.remove('hidden');
    showScreen(screen || 'auth-signin');
  }
  function closeModal() { overlay.classList.add('hidden'); }

  function showScreen(id) {
    document.querySelectorAll('.auth-screen').forEach(function(s) { s.classList.remove('active'); });
    var el = document.getElementById(id);
    if (el) el.classList.add('active');
    // clear errors
    document.querySelectorAll('.field-err').forEach(function(e) { e.textContent = ''; });
    document.querySelectorAll('.input-group input').forEach(function(i) { i.classList.remove('err','ok'); });
  }

  openBtns.forEach(function(b) { b && b.addEventListener('click', function() { openModal(); }); });
  closeBtn && closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', function(e) { if (e.target === overlay) closeModal(); });

  // Screen navigation
  function nav(id, screen) {
    var el = document.getElementById(id);
    if (el) el.addEventListener('click', function(e) { e.preventDefault(); showScreen(screen); });
  }
  nav('go-register',  'auth-register');
  nav('go-reset',     'auth-reset');
  nav('go-signin',    'auth-signin');
  nav('go-signin2',   'auth-signin');
  nav('go-signin3',   'auth-signin');

  // Password eye toggle
  document.querySelectorAll('.pw-eye').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var inp = document.getElementById(btn.dataset.target);
      if (!inp) return;
      inp.type = inp.type === 'password' ? 'text' : 'password';
      btn.style.opacity = inp.type === 'text' ? '1' : '.4';
    });
  });

  // Password strength meter
  var regPass = document.getElementById('reg-pass');
  if (regPass) {
    regPass.addEventListener('input', function() {
      var v = regPass.value;
      var score = 0;
      if (v.length >= 6)  score++;
      if (v.length >= 10) score++;
      if (/[A-Z]/.test(v)) score++;
      if (/[0-9]/.test(v)) score++;
      if (/[^A-Za-z0-9]/.test(v)) score++;
      var bar = document.querySelector('.pw-bar');
      if (!bar) return;
      var pct = (score / 5) * 100;
      var colors = ['#ff4444','#ff8800','#ffcc00','#88dd00','#44ff88'];
      bar.style.width = pct + '%';
      bar.style.background = colors[score - 1] || 'transparent';
    });
  }

  // Helpers
  function setErr(id, msg) {
    var el = document.getElementById(id);
    if (el) el.textContent = msg;
  }
  function markField(inputId, ok) {
    var el = document.getElementById(inputId);
    if (!el) return;
    el.classList.toggle('err', !ok);
    el.classList.toggle('ok', ok);
  }
  function validEmail(e) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e); }
  function validUser(u)  { return /^[a-zA-Z0-9_]{3,16}$/.test(u); }

  // ── SIGN IN ──────────────────────────────────────────
  var formSignin = document.getElementById('form-signin');
  if (formSignin) {
    formSignin.addEventListener('submit', function(e) {
      e.preventDefault();
      var user = document.getElementById('si-user').value.trim();
      var pass = document.getElementById('si-pass').value;
      var ok = true;

      if (!user) { setErr('si-user-err', 'Enter username or email'); markField('si-user', false); ok = false; }
      else { markField('si-user', true); setErr('si-user-err', ''); }

      if (!pass) { setErr('si-pass-err', 'Enter password'); markField('si-pass', false); ok = false; }
      else { markField('si-pass', true); setErr('si-pass-err', ''); }

      if (!ok) return;

      // Check stored accounts
      var accounts = JSON.parse(localStorage.getItem('mc_accounts') || '{}');
      var found = null;
      Object.keys(accounts).forEach(function(u) {
        if (u.toLowerCase() === user.toLowerCase() || accounts[u].email === user.toLowerCase()) {
          found = accounts[u];
        }
      });

      if (!found || found.password !== pass) {
        setErr('si-pass-err', 'Invalid username or password');
        markField('si-pass', false);
        return;
      }

      // Login success
      localStorage.setItem('mc_user', found.username);
      localStorage.setItem('mc_email', found.email);
      if (!localStorage.getItem('mc_joined')) localStorage.setItem('mc_joined', found.joined);
      if (!localStorage.getItem('mc_uid')) localStorage.setItem('mc_uid', found.uid);

      var btn = formSignin.querySelector('.modal-submit');
      btn.textContent = '✓ Welcome, ' + found.username + '!';
      btn.style.background = '#111'; btn.style.color = '#fff';
      setTimeout(function() {
        closeModal();
        btn.textContent = 'Sign In →'; btn.style.background = ''; btn.style.color = '';
        showProfileBtn(found.username);
      }, 900);
    });
  }

  // ── REGISTER ─────────────────────────────────────────
  var formRegister = document.getElementById('form-register');
  if (formRegister) {
    formRegister.addEventListener('submit', function(e) {
      e.preventDefault();
      var user  = document.getElementById('reg-user').value.trim();
      var email = document.getElementById('reg-email').value.trim().toLowerCase();
      var pass  = document.getElementById('reg-pass').value;
      var pass2 = document.getElementById('reg-pass2').value;
      var ok = true;

      // Username
      if (!validUser(user)) {
        setErr('reg-user-err', 'Only letters a–z, digits 0–9, underscore. 3–16 chars.');
        markField('reg-user', false); ok = false;
      } else { markField('reg-user', true); setErr('reg-user-err', ''); }

      // Email
      if (!validEmail(email)) {
        setErr('reg-email-err', 'Enter a valid email address');
        markField('reg-email', false); ok = false;
      } else { markField('reg-email', true); setErr('reg-email-err', ''); }

      // Password
      if (pass.length < 6) {
        setErr('reg-pass-err', 'Password must be at least 6 characters');
        markField('reg-pass', false); ok = false;
      } else { markField('reg-pass', true); setErr('reg-pass-err', ''); }

      // Confirm
      if (pass !== pass2) {
        setErr('reg-pass2-err', 'Passwords do not match');
        markField('reg-pass2', false); ok = false;
      } else if (pass2) { markField('reg-pass2', true); setErr('reg-pass2-err', ''); }

      if (!ok) return;

      // Check duplicate
      var accounts = JSON.parse(localStorage.getItem('mc_accounts') || '{}');
      if (accounts[user.toLowerCase()]) {
        setErr('reg-user-err', 'Username already taken'); markField('reg-user', false); return;
      }
      var emailTaken = Object.values(accounts).some(function(a) { return a.email === email; });
      if (emailTaken) {
        setErr('reg-email-err', 'Email already registered'); markField('reg-email', false); return;
      }

      // Create account
      var counter = parseInt(localStorage.getItem('mc_uid_counter') || '1000') + 1;
      localStorage.setItem('mc_uid_counter', counter);
      var uid = '#' + counter;
      var joined = new Date().toISOString();

      accounts[user.toLowerCase()] = {
        username: user, email: email, password: pass,
        uid: uid, joined: joined
      };
      localStorage.setItem('mc_accounts', JSON.stringify(accounts));

      // Auto login
      localStorage.setItem('mc_user', user);
      localStorage.setItem('mc_email', email);
      localStorage.setItem('mc_joined', joined);
      localStorage.setItem('mc_uid', uid);

      var btn = formRegister.querySelector('.modal-submit');
      btn.textContent = '✓ Account created!';
      btn.style.background = '#111'; btn.style.color = '#fff';
      setTimeout(function() {
        closeModal();
        btn.textContent = 'Create Account →'; btn.style.background = ''; btn.style.color = '';
        formRegister.reset();
        showProfileBtn(user);
      }, 900);
    });
  }

  // ── RESET PASSWORD ───────────────────────────────────
  var formReset = document.getElementById('form-reset');
  if (formReset) {
    formReset.addEventListener('submit', function(e) {
      e.preventDefault();
      var email = document.getElementById('reset-email').value.trim().toLowerCase();
      if (!validEmail(email)) {
        setErr('reset-email-err', 'Enter a valid email address');
        markField('reset-email', false); return;
      }
      // Simulate sending (no real backend)
      var msg = document.getElementById('reset-sent-msg');
      if (msg) msg.textContent = 'If ' + email + ' is registered, you\'ll receive a reset link shortly.';
      showScreen('auth-reset-sent');
    });
  }
}

// ── Profile button in navbar ─────────────────────────────
function showProfileBtn(username) {
  var signInBtn = document.getElementById('open-modal');
  if (signInBtn) signInBtn.style.display = 'none';
  if (document.getElementById('profile-btn')) return;
  var btn = document.createElement('button');
  btn.id = 'profile-btn';
  btn.innerHTML = '<div class="avatar-ring"><span class="avatar-letter">'+username[0].toUpperCase()+'</span></div><span class="avatar-name">'+username+'</span>';
  btn.addEventListener('click', function() { window.location.href = 'profile.html'; });
  // Insert before lang wrap
  var wrap = document.getElementById('nav-lang-wrap');
  var navbar = document.getElementById('navbar');
  if (wrap && wrap.parentNode) wrap.parentNode.insertBefore(btn, wrap);
  else if (navbar) navbar.appendChild(btn);
}

// ── DOMContentLoaded ─────────────────────────────────────
window.addEventListener('DOMContentLoaded', function() {
  // Restore session
  var saved = localStorage.getItem('mc_user');
  if (saved && document.getElementById('open-modal')) showProfileBtn(saved);

  // Scroll reveal cards
  var obs = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) {
      if (e.isIntersecting) {
        setTimeout(function(){e.target.classList.add('visible');}, parseInt(e.target.dataset.delay)||0);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.card, .price-card, .module-card').forEach(function(el) { obs.observe(el); });

  // Reveal text
  var textObs = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) {
      if (e.isIntersecting) {
        var delay = parseInt(e.target.dataset.delay) || 0;
        setTimeout(function(){e.target.classList.add('in');}, delay);
        textObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal-text').forEach(function(el) { textObs.observe(el); });

  // Animated counters
  var counterObs = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) {
      if (e.isIntersecting) { animateCounter(e.target); counterObs.unobserve(e.target); }
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('.stat-num').forEach(function(c) { counterObs.observe(c); });
});

function animateCounter(el) {
  var target = parseInt(el.dataset.target);
  var start  = performance.now();
  var dur    = 1800;
  function step(now) {
    var p = Math.min((now-start)/dur, 1);
    var ease = 1 - Math.pow(1-p, 3);
    el.textContent = Math.floor(ease*target).toLocaleString();
    if(p<1) requestAnimationFrame(step);
    else el.textContent = target.toLocaleString();
  }
  requestAnimationFrame(step);
}

// ── Navbar lang switcher for profile.html ────────────────
// (profile.html has its own inline lang-toggle / lang-drop IDs)
(function() {
  var btn  = document.getElementById('lang-toggle');
  var drop = document.getElementById('lang-drop');
  if (!btn || !drop) return;

  btn.addEventListener('click', function(e) {
    e.stopPropagation();
    drop.classList.toggle('open');
  });
  document.addEventListener('click', function() { drop.classList.remove('open'); });
  drop.querySelectorAll('.lang-item').forEach(function(li) {
    li.addEventListener('click', function() {
      applyLang(li.dataset.lang);
      drop.classList.remove('open');
    });
  });
})();