<template>
        <link href="https://fonts.googleapis.com/css?family=Roboto:400,700" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700&display=swap&subset=latin-ext"
        rel="stylesheet">
  <body data-spy="scroll" data-target=".fixed-top">
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
        <div class="container">
            <!-- Text Logo - Use this if you don't have a graphic logo -->
            <!-- <a class="navbar-brand logo-text page-scroll" href="index.html">Sync</a> -->

            <!-- Image Logo -->
            <a class="navbar-brand logo-image" href="index.html"><img src="@/assets/img/Logo.png"
                    alt="alternative"></a>

            <!-- Mobile Menu Toggle Button -->
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault"
                aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-awesome fas fa-bars"></span>
                <span class="navbar-toggler-awesome fas fa-times"></span>
            </button>
            <!-- end of mobile menu toggle button -->

            <div class="collapse navbar-collapse" id="navbarsExampleDefault">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link page-scroll" href="index.html">Inicio<span
                                class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link page-scroll" href="artesanias.html">Artesanias</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link page-scroll" href="psicologos.html">Psicologos</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link page-scroll " href="nosotros.html">Nosotros</a>
                    </li>





                    <!-- end of dropdown menu -->
                </ul>
                <span class="nav-item">
                    <a class="btn-actions nav-link page-scroll " href="#/registroAprendiz">Registro</a>
                </span>
                <span class="nav-item">
                    <a class="btn-actions2  nav-link page-scroll" href="#/inicioSesion">Inicio Sesion</a>
                </span>
            </div>
        </div> <!-- end of container -->
        <!-- registro -->


    </nav> <!-- end of navbar -->
    <br><br>
    <br>

    <!-- end of navigation -->
    <!-- Header -->
    <section class="body demo-6 ">
        <svg class="hidden">
            <defs>
                <symbol id="icon-arrow" viewBox="0 0 24 24">
                    <title>arrow</title>
                    <polygon points="6.3,12.8 20.9,12.8 20.9,11.2 6.3,11.2 10.2,7.2 9,6 3.1,12 9,18 10.2,16.8 " />
                </symbol>
                <symbol id="icon-drop" viewBox="0 0 24 24">
                    <title>drop</title>
                    <path
                        d="M12,21c-3.6,0-6.6-3-6.6-6.6C5.4,11,10.8,4,11.4,3.2C11.6,3.1,11.8,3,12,3s0.4,0.1,0.6,0.3c0.6,0.8,6.1,7.8,6.1,11.2C18.6,18.1,15.6,21,12,21zM12,4.8c-1.8,2.4-5.2,7.4-5.2,9.6c0,2.9,2.3,5.2,5.2,5.2s5.2-2.3,5.2-5.2C17.2,12.2,13.8,7.3,12,4.8z" />
                    <path
                        d="M12,18.2c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7c1.3,0,2.4-1.1,2.4-2.4c0-0.4,0.3-0.7,0.7-0.7c0.4,0,0.7,0.3,0.7,0.7C15.8,16.5,14.1,18.2,12,18.2z" />
                </symbol>
            </defs>
        </svg>
        <main>
            <header class="codrops-header">
                <div class="codrops-links">
                    <a class="codrops-icon codrops-icon--prev"
                        href="http://tympanus.net/Development/FancyLetterAnimation/" title="Previous Demo">
                        <svg class="icon icon--arrow">
                            <use xlink:href="#icon-arrow"></use>
                        </svg>
                    </a>
                    <a class="codrops-icon codrops-icon--drop" href="http://tympanus.net/codrops/?p=28039"
                        title="Back to the article">
                        <svg class="icon icon--drop">
                            <use xlink:href="#icon-drop"></use>
                        </svg>
                    </a>
                </div>
                
            </header>
            <!-- Initial markup -->
            <div class="segmenter" style="background-image: url(img2/1.png)"></div>
            <h2 class="trigger-headline trigger-headline--hidden">
                <span>C</span><span>U</span><span>L</span><span>T</span><span>U</span><span>P</span><span>A</span><span>Z</span>
            </h2>
            <div class="bottom-nav">
                <button class="btn btn--trigger">Descubre</button>
                <nav class="codrops-demos">
                    <span>Bienvenido a</span>
                </nav>
            </div>
        </main>
    </section>


    <!-- Small Features -->

    <main class="moveralaiz">
        <div class="grid adicionalprin">
            <div class="grid__item grid__item--bg theme-3  adicionalprin">
                <div class="grid__item-img" data-displacement="img/displacement/4.png" data-intensity="0.2"
                    data-speedin="1.6" data-speedout="1.6">
                    <img src='@/assets/img/Img23.jpg' alt="Image">
                    <img src='@/assets/img/Img24.jpg' alt="Image">
                    <canvas width="858" height="858" style="width: 429px;height: 429px; position: absolute;
                                                right: 1px; border-radius:400%;"></canvas>
                </div>
                <div class="grid__item-content">
                    <span class="grid__item-meta">SENA</span>
                    <br>

                    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="80" style="color:rgb(255, 255, 255); "
                        fill="currentColor" class="bi bi-lightbulb" viewBox="0 0 16 16">
                        <path
                            d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1z" />
                    </svg>

                    <h3 class="grid__item-subtitle">
                        <span>Día Mundial de la Salud Mental</span>
                        <a class="grid__item-link" href="#">Cada 10 de octubre</a>
                    </h3>
                </div>
            </div>
            <div id="description" class="basic-1 d-flex">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="image-container">

                                <br><br>
                                <br><br>
                            </div> <!-- end of image-container -->
                        </div> <!-- end of col -->
                        <div class="columnadeimg">
                            <div class="text-container">
                                <div class="posicionp">
                                    <h2>Comienza a cuidar tu salud mental</h2>
                                    <div class="media-body primertxt">En el momento que pienses que necesites ir <br> a
                                        acompañamiento psicologico, no lo dudes hazlo y evoluciona.</div>
                                    <a href="../Formulario3_1/registro.html"><button class="btn22">Da el primer pazo</button></a>


                                </div>
                            </div>
                        </div> <!-- end of text-container -->
                    </div> <!-- end of col -->
                </div> <!-- end of row -->
            </div> <!-- end of container -->
        </div>
    </main>



    <!-- Description 1 -->


    <!-- end of description 1 -->

    <div class="cards-1">
        <br>
        <div class="container">
            <h2> CULTUPAZ </h2>
            <br><br>

            <div class="row">
                <div class="col-lg-12">

                    <!-- Card -->
                    <div class="card">
                        <div class="card-image green">
                            <img src='@/assets/svg/svg1.svg' alt="My Happy SVG" style="width:150px; height: 150px;" />
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Psicologos comprometidos</h5>
                        </div>
                    </div>
                    <!-- end of card -->

                    <!-- Card -->
                    <div class="card">
                        <div class="card-image green">
                            <img src='@/assets/svg/svg2.svg' alt="My Happy SVG" style="width:150px; height: 150px;" />
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Seguro y privado</h5>
                        </div>
                    </div>
                    <!-- end of card -->

                    <!-- Card -->
                    <div class="card">
                        <div class="card-image red">
                            <img src='@/assets/svg/svg3.svg' alt="My Happy SVG" style="width:150px; height: 150px;" />
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Disponibilidad 24/7</h5>
                        </div>
                    </div>
                    <!-- end of card -->

                    <!-- Card -->
                    <div class="card">
                        <div class="card-image yellow">
                            <img src='@/assets/svg/svg4.svg' alt="My Happy SVG" style="width:150px; height: 150px;" />
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Interacción social</h5>
                        </div>
                    </div>
                    <!-- end of card -->

                    <!-- Card -->
                    <div class="card">
                        <div class="card-image blue">
                            <img src='@/assets/svg/svg5.svg' alt="My Happy SVG" style="width:150px; height: 150px;" />
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Diversion</h5>
                        </div>
                    </div>
                    <!-- end of card -->

                </div> <!-- end of col -->
            </div> <!-- end of row -->
        </div> <!-- end of container -->
        <br>
    </div> <!-- end of cards-1 -->
    <!-- end of small features -->




    <!-- end of description 1 details lightbox -->



    <!-- Description 2 -->
    <div class="tabs">
        <h2 class="text-center"> NUESTROS SERVICIOS </h2>
        <br>
        <div class="container">
            <div class="row añadiresp">
                <div class="col-lg-6">
                    <div class="tabs-container">


                        <!-- Tabs Links -->
                        <ul class="nav nav-tabs" id="cedoTabs" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" id="nav-tab-1" data-toggle="tab" href="#tab-1" role="tab"
                                    aria-controls="tab-1" aria-selected="true"><i
                                        class="far fa-image"></i>Emprendimiento</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="nav-tab-2" data-toggle="tab" href="#tab-2" role="tab"
                                    aria-controls="tab-2" aria-selected="false"><i class="fas fa-chalkboard"></i>Muro
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="nav-tab-3" data-toggle="tab" href="#tab-3" role="tab"
                                    aria-controls="tab-3" aria-selected="false"><i class="far fa-user"></i>Sesiones
                                    PSI</a>
                            </li>
                        </ul>
                        <!-- end of tabs links -->

                        <!-- Tabs Content -->
                        <div class="tab-content" id="cedoTabsContent">
                            <!-- Tab -->
                            <div class="tab-pane fade show active" id="tab-1" role="tabpanel" aria-labelledby="tab-1">
                                <p><strong>Comparte todo tipo de artesanias</strong> registrandolas en nuestra
                                    plataforma
                                    para ofrecerlas al publico, de esa manera fomentamos la creatividad e iniciativa de
                                    muchos de los aprendices.</p>
                                <h6>Ventajas</h6>
                                <ul class="list-unstyled li-space-lg">
                                    <li class="media">
                                        <i class="far fa-check-square"></i>
                                        <div class="media-body">La satisfacción personal está relacionada con nuestra
                                            puesta en valor como individuos a través del planteamiento y superación de
                                            diversos retos, de aplicar de forma productiva e imaginativa nuestras
                                            habilidades y de obtener resultados fruto de nuestro esfuerzo, nuestra
                                            dedicación y nuestra pasión.
                                        </div>
                                    </li>
                                    <li class="media">
                                        <i class="far fa-check-square"></i>
                                        <div class="media-body">Como emprendedores, somos nosotros los que marcamos el
                                            ritmo, las horas de trabajo e imponemos las normas que regirán nuestra
                                            actividad.</div>
                                    </li>
                                    <li class="media">
                                        <i class="far fa-check-square"></i>
                                        <div class="media-body">Si te dedicas a aquello que realmente te gusta y además
                                            con ello realmente estás ayudando a otras personas, tu emprendimiento
                                            alcanzará un punto adicional de satisfacción y plenitud, dando mucho sentido
                                            a tu vida.</div>
                                    </li>
                                </ul>
                            </div> <!-- end of tab-pane -->
                            <!-- end of tab -->

                            <!-- Tab -->
                            <div class="tab-pane fade" id="tab-2" role="tabpanel" aria-labelledby="tab-2">
                                <p><strong>Consiste en un muro virtual</strong> donde te permite
                                    crear tantos posts como quieras, individualmente de manera anonima, que pueden ser
                                    en
                                    formato texto, imagen, hipervínculos, vídeos,… Las posibilidades creativas aumentan
                                    cuando nos registramos, ya que podemos dar acceso a quien queramos.</p>
                                <br>
                                <p> <strong> <img src="svg/svg6.svg" alt="My Happy SVG" style="width:250px; height: 250px; border-radius: 2rem; box-shadow:
                                    inset 0 -3em 5em #00324D,
                                          0.1em 0.1em 1em #ffffff; margin-left: 20%;" /></strong></p>
                            </div> <!-- end of tab-pane -->
                            <!-- end of tab -->

                            <!-- Tab -->
                            <div class="tab-pane fade" id="tab-3" role="tabpanel" aria-labelledby="tab-3">
                                <p>La idea principal de este proyecto consiste en lograr que
                                    <strong>una persona
                                        pueda tener un acompañamiento psicologico </strong>mediante una reservacion y/o
                                    a la vez interactuando por todo el
                                    mundo de la psicologia reconociendo asi mucho mas su importancia.
                                </p>
                                <ul class="list-unstyled li-space-lg">
                                    <li class="media">
                                        <i class="far fa-check-square"></i>
                                        <div class="media-body">Agenda una sesion de manera perzonalida.</div>
                                    </li>
                                    <li class="media">
                                        <i class="far fa-check-square"></i>
                                        <div class="media-body">Psicologos 100% verificados.</div>
                                    </li>
                                    <li class="media">
                                        <i class="far fa-check-square"></i>
                                        <div class="media-body">Descubre diferentes perspectivas.</div>
                                    </li>
                                    <li class="media">
                                        <i class="far fa-check-square"></i>
                                        <div class="media-body">Animate y potencia tus habilidades.</div>
                                    </li>
                                </ul>
                            </div> <!-- end of tab-pane -->
                            <!-- end of tab -->
                        </div> <!-- end of tab-content -->
                        <!-- end of nav tabs content -->

                    </div> <!-- end of tabs-container -->
                </div> <!-- end of col -->
                <div class="col-lg-6 ">
                    <div class="image-container">
                        <br>
                        <img class="img-fluid2" src="img2/emprendimiento.png" alt="alternative"
                            style="transform: rotate(-8deg);">
                        <br>
                        <img class="img-fluid3" src="img2/muro.png" alt="alternative"
                            style="margin-left: 70%; transform: rotate(3deg);">
                        <br>
                        <img class="img-fluid4" src="img2/psi.png" alt="alternative"
                            style="margin-left: 3%; transform: rotate(-3deg);">
                    </div> <!-- end of image-container -->
                </div> <!-- end of col -->
            </div> <!-- end of row -->
        </div> <!-- end of container -->
    </div> <!-- end of tabs -->
    <!-- end of description 2 -->


    <!-- Features -->
    <div id="features" class="basic-2">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h2>MUNDO MOVIL</h2>
                    <br><br>
                </div> <!-- end of div -->
            </div> <!-- end of div -->
            <div class="row">
                <div class="col-lg-4">
                    <ul class="list-unstyled li-space-lg first">
                        <li class="media">
                            <span class="fa-stack">
                                <i class="fas fa-circle fa-stack-2x"></i>
                                <i class="fas fa-mobile fa-stack-1x"></i>
                            </span>
                            <div class="media-body">
                                <h4>Interfaz simple e intuitiva</h4>
                                <p>Navega por nuestra aplicacion de una manera facil y sencilla, basada en unas pautas
                                    predeterminadas de diseño.<br><br><br></p>
                            </div>
                        </li>
                        <li class="media">
                            <span class="fa-stack">
                                <i class="fas fa-circle fa-stack-2x green"></i>
                                <i class="fas fa-lightbulb fa-stack-1x"></i>
                            </span>
                            <div class="media-body">
                                <h4>Visibilidad en IOS y Android</h4>
                                <p>La App de CULTUPAZ proporciona una compatibilidad en los diferentes sistemas
                                    operativos.<br><br><br></p>
                            </div>
                        </li>
                        <li class="media">
                            <span class="fa-stack">
                                <i class="fas fa-circle fa-stack-2x red"></i>
                                <i class="fas fa-wrench fa-stack-1x"></i>
                            </span>
                            <div class="media-body">
                                <h4>Seguridad</h4>
                                <p> La confidencialidad de los datos está protegida en el nivel legal pero también
                                    existen otros aspectos que atienden a la importancia de la seguridad como puede ser
                                    el acceso a información sensible de cada usuario.</p>
                            </div>
                        </li>
                    </ul>
                </div> <!-- end of col -->
                <div class="col-lg-4">
                    <img class="img-fluid" src="images/app.png" alt="alternative">
                </div> <!-- end of col -->
                <div class="col-lg-4">
                    <ul class="list-unstyled li-space-lg">
                        <li class="media">
                            <span class="fa-stack">
                                <i class="fas fa-circle fa-stack-2x yellow"></i>
                                <i class="fas fa-cloud fa-stack-1x"></i>
                            </span>
                            <div class="media-body">
                                <h4>Offline de la APP</h4>
                                <p>Seria lógico pensar que la APP dependa del uso y consumo de datos, es decir de su conexión a Internet.<br><br><br></p>
                            </div>
                        </li>
                        <li class="media">
                            <span class="fa-stack">
                                <i class="fas fa-circle fa-stack-2x blue"></i>
                                <i class="fas fa-rocket fa-stack-1x"></i>
                            </span>
                            <div class="media-body">
                                <h4>Opciones de material</h4>
                                <p>Como un enfoque directo se  plantea integrar una suscripción para un servicio de vista de documentacion.
                                    <br><br><br>
                                </p>
                            </div>
                        </li>
                        <li class="media">
                            <span class="fa-stack">
                                <i class="fas fa-circle fa-stack-2x"></i>
                                <i class="fas fa-download fa-stack-1x"></i>
                            </span>
                            <div class="media-body">
                                <h4>Actualizaciones</h4>
                                <p>La App Cuenta con un equipo preparado para dar un mantenimiento y nuevas funcionalidades que hagan crecer la APP constantemente.</p>
                            </div>
                        </li>
                    </ul>
                </div> <!-- end of col -->
            </div> <!-- end of row -->
        </div> <!-- end of container -->
    </div> <!-- end of basic-2 -->
    <!-- end of features -->


    <!-- Screenshots -->
    <!-- <div id="screens" class="slider">
        <div class="container">
            <h2 class="juegos">Historias creadas por aprendices</h2>
            <br><br>
            <div class="row">
                <div class="col-lg-12"> -->

                    <!-- Image Slider -->
                    <!-- <div class="slider-container">
                        <div class="swiper-container image-slider">
                            <div class="swiper-wrapper"> -->

                                <!-- Slide -->
                                <!-- <div class="swiper-slide">

                                    <a href="images/Imagen1.png" class="popup-link" data-effect="fadeIn">
                                        <img class="img-fluid" src="images/Imagen1.png" alt="alternative">
                                    </a>
                                </div> -->
                                <!-- end of slide -->

                                <!-- Slide -->
                                <!-- <div class="swiper-slide">
                                    <a href="images/Imagen2.png" class="popup-link" data-effect="fadeIn">
                                        <img class="img-fluid" src="images/Imagen2.png" alt="alternative">
                                    </a>
                                </div> -->
                                <!-- end of slide -->

                                <!-- Slide -->
                                <!-- <div class="swiper-slide">
                                    <a href="images/Imagen3.png" class="popup-link" data-effect="fadeIn">
                                        <img class="img-fluid" src="images/Imagen3.png" alt="alternative">
                                    </a>
                                </div> -->
                                <!-- end of slide -->

                                <!-- Slide -->
                                <!-- <div class="swiper-slide">
                                    <a href="images/Imagen4.png" class="popup-link" data-effect="fadeIn">
                                        <img class="img-fluid" src="images/Imagen4.png" alt="alternative">
                                    </a>
                                </div> -->
                                <!-- end of slide -->

                                <!-- Slide -->
                                <!-- <div class="swiper-slide">
                                    <a href="images/Imagen5.png" class="popup-link" data-effect="fadeIn">
                                        <img class="img-fluid" src="images/Imagen5.png" alt="alternative">
                                    </a>
                                </div> -->
                                <!-- end of slide -->

                                <!-- Slide -->
                                <!-- <div class="swiper-slide">
                                    <a href="images/Imagen6.png" class="popup-link" data-effect="fadeIn">
                                        <img class="img-fluid" src="images/Imagen6.png" alt="alternative">
                                    </a>
                                </div> -->
                                <!-- end of slide -->

                                <!-- Slide -->
                                <!-- <div class="swiper-slide">
                                    <a href="images/Imagen7.png" class="popup-link" data-effect="fadeIn">
                                        <img class="img-fluid" src="images/Imagen7.png" alt="alternative">
                                    </a>
                                </div> -->
                                <!-- end of slide -->

                                <!-- Slide -->
                                <!-- <div class="swiper-slide">
                                    <a href="images/Imagen8.png" class="popup-link" data-effect="fadeIn">
                                        <img class="img-fluid" src="images/Imagen8.png" alt="alternative">
                                    </a>
                                </div> -->
                                <!-- end of slide -->

                                <!-- Slide -->
                                <!-- <div class="swiper-slide">
                                    <a href="images/Imagen9.png" class="popup-link" data-effect="fadeIn">
                                        <img class="img-fluid" src="images/Imagen9.png" alt="alternative">
                                    </a>
                                </div> -->
                                <!-- end of slide -->

                                <!-- Slide -->
                                <!-- <div class="swiper-slide">
                                    <a href="images/Imagen10.png" class="popup-link" data-effect="fadeIn">
                                        <img class="img-fluid" src="images/Imagen10.png" alt="alternative">
                                    </a>
                                </div> -->
                                <!-- end of slide -->

                            <!-- </div> end of swiper-wrapper -->

                            <!-- Add Arrows -->
                            <!-- <div class="swiper-button-next"></div>
                            <div class="swiper-button-prev"></div> -->
                            <!-- end of add arrows -->

                        <!-- </div> end of swiper-container -->
                    <!-- </div> end of slider-container -->
                    <!-- end of image slider -->

                <!-- </div> end of col -->
            <!-- </div> end of row -->
        <!-- </div> end of container -->
    <!-- </div> end of slider -->
    <!-- end of screenshots -->


    <!-- Testimonials -->
    <div class="cards-2">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h2>Testimonios de usuarios</h2>
                </div> <!-- end of col -->
            </div> <!-- end of row -->
            <div class="row">
                <div class="col-lg-12">

                    <!-- Card -->
                    <div class="card">
                        <div class="card-image">
                            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i
                                class="fas fa-star"></i><i class="fas fa-star"></i>
                            <hr class="testimonial-line">
                        </div>
                        <div class="card-body">
                            <div class="testimonial-text">Me encanta usar CULTUPAZ para mis necesidades de desarrollo
                                personal. Cumple con todos mis requisitos y en realidad me ayuda mucho con las
                                habilidades de enfoque..</div>
                            <div class="testimonial-author">Rick Daza - Aprendiz</div>
                        </div>
                    </div>
                    <!-- end of card -->

                    <!-- Card -->
                    <div class="card">
                        <div class="card-image">
                            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i
                                class="fas fa-star"></i><i class="fas fa-star"></i>
                            <hr class="testimonial-line">
                        </div>
                        <div class="card-body">
                            <div class="testimonial-text">Después de probar una gran cantidad de aplicaciones de
                                entrenamiento
                                personal, decidí probar CULTUPAZ y fue una sorpresa maravillosa.</div>
                            <div class="testimonial-author">Lynda Márquez - Desarrollador</div>
                        </div>
                    </div>
                    <!-- end of card -->

                    <!-- Card -->
                    <div class="card">
                        <div class="card-image">
                            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i
                                class="fas fa-star"></i><i class="fas fa-star"></i>
                            <hr class="testimonial-line">
                        </div>
                        <div class="card-body">
                            <div class="testimonial-text">Nunca soñé que podría aprender tan rápido cómo enfocarme
                                en mis metas personales y mejorar mi vida a niveles que nunca creí posibles..</div>
                            <div class="testimonial-author">Jhon Francisco - Comercializador</div>
                        </div>
                    </div>
                    <!-- end of card -->

                </div> <!-- end of col -->
            </div> <!-- end of row -->
        </div> <!-- end of row -->
        <div class="row">
            <div class="col-lg-12">

                <!-- Card -->
                <div class="card">
                    <div class="card-image">
                        <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i
                            class="fas fa-star"></i><i class="fas fa-star"></i>
                        <hr class="testimonial-line">
                    </div>
                    <div class="card-body">
                        <div class="testimonial-text">Obtuve mucho valor al usar Sync en mi vida diaria, por lo que
                            estoy muy agradecido y lo recomendaría a todos.</div>
                        <div class="testimonial-author">Frank Dorado - Instructor</div>
                    </div>
                </div>
                <!-- end of card -->

                <!-- Card -->
                <div class="card">
                    <div class="card-image">
                        <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i
                            class="fas fa-star"></i><i class="fas fa-star"></i>
                        <hr class="testimonial-line">
                    </div>
                    <div class="card-body">
                        <div class="testimonial-text">ISi tiene grandes objetivos pero no puede encontrar
                            una manera de mantenerse enfocado, entonces definitivamente debería probar Sync y ver los
                            resultados.</div>
                        <div class="testimonial-author">Wilms Ortiz - Gerente</div>
                    </div>
                </div>
                <!-- end of card -->

                <!-- Card -->
                <div class="card">
                    <div class="card-image">
                        <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i
                            class="fas fa-star"></i><i class="fas fa-star"></i>
                        <hr class="testimonial-line">
                    </div>
                    <div class="card-body">
                        <div class="testimonial-text">He estado buscando una gran aplicación en la que me ayude como
                            persona.
                            pero ahora estoy muy feliz de haber encontrado CULTUPAZ. Esta ha estado funcionando muy bien
                        </div>
                        <div class="testimonial-author">Jones Smith - Desarrollador</div>
                    </div>
                </div>
                <!-- end of card -->

            </div> <!-- end of col -->
        </div> <!-- end of row -->
    </div> <!-- end of container -->
    <!-- end of testimonials -->


    <!-- Download -->
    <div id="download" class="basic-3">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="image-container">
                        <img class="img-fluid2" src="images/Gold Luxury Initial Circle Logo.png" alt="alternative">
                    </div> <!-- end of image-container -->
                    <p class="p-large">Si sientes que tu estado de ánimo ha bajado y predomina la tristeza en
                        casi todo el tiempo, prueba CULTUPAZ, aqui te ayudaremos a salir de ahi, confia.
                    </p>
                    <a class="btn-solid-lg" href="#your-link"><i class="fab fa-apple"></i>DESCARGAR</a>
                    <a class="btn-solid-lg" href="#your-link"><i class="fab fa-google-play"></i>DESCARGAR</a>
                </div> <!-- end of col -->
            </div> <!-- end of row -->
        </div> <!-- end of container -->
        <div class="deco-white-circle-1">
            <img src="images/decorative-white-circle.svg" alt="alternative">
        </div> <!-- end of deco-white-circle-1 -->
        <div class="deco-white-circle-2">
            <img src="images/decorative-white-circle.svg" alt="alternative">
        </div> <!-- end of deco-white-circle-2 -->
        <div class="deco-blue-circle">
            <img src="images/decorative-blue-circle.svg" alt="alternative">
        </div> <!-- end of deco-blue-circle -->
        <div class="deco-yellow-circle">
            <img src="images/decorative-yellow-circle.svg" alt="alternative">
        </div> <!-- end of deco-yellow-circle -->
        <div class="deco-green-diamond">
            <img src="images/decorative-green-diamond.svg" alt="alternative">
        </div> <!-- end of deco-yellow-circle -->
    </div> <!-- end of basic-3 -->
    <!-- end of download -->




    <!-- Footer -->
    <div class="footer">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="footer-col first">
                        <h5>Acerca de la sincronización</h5>
                        <p class="p-small">CULTUPAZ es una plantilla HTML de página de
                            destino creada con Bootstrap 4 para presentar aplicaciones móviles</p>
                    </div> <!-- end of footer-col -->
                    <div class="footer-col second">
                        <h5>Datos de contacto</h5>
                        <ul class="list-unstyled li-space-lg p-small">
                            <li class="media">
                                <i class="fas fa-map-marker-alt"></i>
                                <div class="media-body">85 Innovation Street, CA, EE. UU.</div>
                            </li>
                            <li class="media">
                                <i class="fas fa-envelope"></i>
                                <div class="media-body"><a href="#your-link">isaacddz14@gmail.com</a></div>
                            </li>
                            <li class="media">
                                <i class="fas fa-phone-alt"></i>
                                <div class="media-body"><a href="#your-link">+57 3117557590</a></div>
                            </li>
                        </ul>
                    </div> <!-- end of footer-col -->
                    <div class="footer-col third">
                        <h5>Enlaces de valor</h5>
                        <ul class="list-unstyled li-space-lg p-small">
                            <li><a href="terms-conditions.html">Términos y condiciones</a></li>
                            <li><a href="privacy-policy.html">Política de privacidad</a></li>
                            <li><a href="article-details.html">Detalles del artículo</a></li>
                        </ul>
                    </div> <!-- end of footer-col -->
                    <div class="footer-col fourth">
                        <h5>Otras aplicaciones</h5>
                        <ul class="list-unstyled li-space-lg p-small">
                            <li><a href="#your-link">-----------</a></li>
                            <li><a href="#your-link">-----------</a></li>
                            <li><a href="#your-link">-----------</a></li>
                        </ul>
                    </div> <!-- end of footer-col -->
                    <div class="footer-col fifth">
                        <span class="fa-stack">
                            <a href="#your-link">
                                <i class="fas fa-circle fa-stack-2x"></i>
                                <i class="fab fa-facebook-f fa-stack-1x"></i>
                            </a>
                        </span>
                        <span class="fa-stack">
                            <a href="#your-link">
                                <i class="fas fa-circle fa-stack-2x"></i>
                                <i class="fab fa-twitter fa-stack-1x"></i>
                            </a>
                        </span>
                        <span class="fa-stack">
                            <a href="#your-link">
                                <i class="fas fa-circle fa-stack-2x"></i>
                                <i class="fab fa-pinterest-p fa-stack-1x"></i>
                            </a>
                        </span>
                        <span class="fa-stack">
                            <a href="#your-link">
                                <i class="fas fa-circle fa-stack-2x"></i>
                                <i class="fab fa-instagram fa-stack-1x"></i>
                            </a>
                        </span>
                    </div> <!-- end of footer-col -->
                </div> <!-- end of col -->
            </div> <!-- end of row -->
        </div> <!-- end of container -->
    </div> <!-- end of footer -->
    <!-- end of footer -->


    <!-- Copyright -->
    <div class="copyright">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <p class="p-small">Copyright © 2020 <a href="https://inovatik.com">Inovatik</a> - Todos los
                        derechos reservados.</p>
                </div> <!-- end of col -->
            </div> <!-- enf of row -->
        </div> <!-- end of container -->
    </div> <!-- end of copyright -->
    <!-- end of copyright -->
    <!-- Imagen animacion -->

</body>

</template>

<script>
import '@/assets/css/css/bootstrap.css'
import '@/assets/css/css/bootstrap2.css'
import '@/assets/css/css/artesanias.css'
import '@/assets/css/css/isaacindex.css'
import '@/assets/css/css/isaacindex2.css'
import '@/assets/css/css/magnific-popup.css'
import '@/assets/css/css/swiper.css'
import '@/assets/css/css/styles.css'
import '@/assets/css/css/fontawesome_all.css'





// Diseños css3'

import '@/assets/css/css/css3/component.css'
import '@/assets/css/css/css3/demo.css'
import '@/assets/css/css/css3/normalize.css'




export default {

}
</script>

<style>
body {
    position: absolute;
    top: -2%;
}

</style>