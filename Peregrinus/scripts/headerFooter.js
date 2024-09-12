function loadHeader() {

    const headerHTML = `
    <link rel="stylesheet" href="../styles/global.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js"></script>
    
    <title>Document</title>
   
    <style>
        #header {
             background-color: var(--cor-header-background-color);
        }
             
        #logo a {
            text-decoration: none;
            color: inherit;
        }
        .search-form {
            display: flex;
            align-items: center; 
            width: 100%;
            max-width: 600px;
            margin: 0 auto; 
            min-width: 15%;
        }
        .input-group {
            display: flex;
            align-items: center; 
            flex-grow: 1; 
        }
        .input-group input {
            flex-grow: 1; 
        }
        .nav-link-loja {
            margin-left: 500px;
            display: flex;
            align-items: center;
            color: var(--cor-header-items-color);
        }
            .nav-link-loja:hover{
            color: var(--cor-hover-header);
        }
        .navbar-nav .nav-link {
            color: var(--cor-header-items-color);
        }
        .navbar-nav .nav-link:hover {
            color: var(--cor-hover-header);
        }
        .close-btn {
            position: absolute;
            top: 10px;
            right: 10px;
            background: none;
            border: none;
            color: var(--cor-hover-header);
            font-size: 24px;
            cursor: pointer;
        }
        .close-btn:hover {
            color: #ccc;
        }
        @media only screen and (max-width: 767px) {
            .container-fluid {
                flex-direction: column; 
                align-items: center; 
            }
            #logo {
                margin-bottom: 15px; 
            }
            .search-form {
                margin: 0; 
            }
            .d-flex {
                width: 100%; 
                justify-content: center; 
            }
            .nav-link-loja {
                display: none;
            }
            .navbar-nav {
                flex-direction: column;
                width: 100%;
                text-align: center;
            }
            .navbar-nav .nav-link {
                margin: 10px 0;
            }
            .navbar-toggler-icon {
            background: none;
            color: var(--cor-header-items-color);
        }
            }
        @media (min-width: 769px) {
    .navbar-nav {
        display: flex;
        flex-direction: row;
    }
    .navbar-nav .nav-link {
        margin: 0 10px; /* Ajusta o espaçamento entre os itens da navbar */
    }
}

           
    </style>
</head>
<body>
    <nav id="header" class="navbar navbar-expand-md navbar">
        <div class="container-fluid d-flex justify-content-center align-items-center">
            <!-- Logo -->
            <div id="logo">
                <a href="../pages/index.html">
                    <img src="../images/logo_azul_final.svg" alt="Logo" height="75">
                </a>
                <!-- Botão do Menu (Hamburger) -->
                <button class="navbar-toggler d-md-none ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon fa fa-bars"></span><!-- Botão de colapso do menu (hamburger menu) -->
                </button>
            </div>

            <!-- Menu Colapsável -->
            <div class="collapse navbar-collapse" id="navbarNav">
                <div class="d-flex flex-lg-row align-items-center w-100">

                    <!-- Formulário de Pesquisa (Aparece em telas médias e maiores) -->
                    <form class="search-form d-none d-md-flex me-auto" action="buscar.py">
                        <div class="d-flex align-items-center justify-content-center input-group">
                            <input type="text" id="pesquisa" class="form-control" placeholder="Buscar">
                            <button class="btn btn-outline-primary" type="submit">
                                <i class="fas fa-search"></i>
                            </button>
                            <a class="nav-link nav-link-loja px-3" href="../pages/Catalogo.html">LOJA</a>
                        </div>
                    </form>

                    <!-- Links de Navegação (Aparecem em telas médias e maiores) -->
                    <div class="navbar-nav ms-auto d-none d-md-flex">
                        <a class="nav-link" href="../pages/login.html"
                            <h3>Acessar</h3></a>
                        <a class="nav-link" href="../pages/compra.html">
                            <i class="fas fa-shopping-cart"></i>
                        </a>
                        <a class="nav-link" href="../pages/menu.html">
                            <i class="fas fa-user"></i>
                        </a>
                    </div>

                    <!-- Menu para Telas Menores (Aparece em telas menores que 768px) -->
                    <div class="navbar-nav ms-auto d-md-none">
                        <form class="search-form d-flex me-auto" action="buscar.py">
                            <div class="d-flex align-items-center justify-content-center input-group">
                                <input type="text" id="pesquisa" class="form-control" placeholder="Buscar">
                                <button class="btn btn-outline-primary" type="submit">
                                    <i class="fas fa-search"></i>
                                </button>
                            </div>
                        </form>
                        <a class="nav-link" href="../pages/login.html"
                            <h3>Acessar</h3></a>
                        <a class="nav-link" href="../pages/meus_pedidos.html">
                            <i class="fas fa-shopping-cart"></i> Meus Pedidos
                        </a>
                        <a class="nav-link" href="../pages/menu.html">
                            <i class="fas fa-user"></i> Meu Perfil
                        </a>
                        <a class="nav-link" href="../pages/Catalogo.html">
                            <i class="fas fa-shopping-bag"></i> Loja
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </nav>







    `;
    document.querySelector('body').insertAdjacentHTML('afterbegin', headerHTML);
}


function loadFooter() {
    
    const footerHTML = `

     <style>
       
        footer { /* Footer completinho */
            background-color: var(--cor-footer-background-color);
           
          
            
        }
        .footer-content { /* Footer completão */
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            
        }
        .logo img { /* Logo lado esquerdo */
            padding:5px;
            max-width: 200px;
        }
        .icons i{  /* Icones do cartão */
            margin: 0 10px;
            font-size: 36px; 
            color: var(--cor-footer-items-color);
        }
        .icons p{
            color: var(--cor-footer-items-color);
        }
        .footer-links a { /* Links lado Direito */
            color: #00AFEF;
            text-decoration: none;
            margin: 5px 0;
            display: block;
        }
        /* Links lado Direito mouse por cima */
        .footer-links a:hover {
            text-decoration: underline;
        }
        .copyright {
            font-size: 12px;
            color: var(--cor-footer-items-color);
        }
        /* Resolução menor */
        @media (max-width: 768px) {
            .footer-content {
                flex-direction: column;
                align-items: center;
                
            }
            /* Espaçamento dos Ícones */
            .logo, .icons, .footer-links {
                text-align: center;
                margin: 15%;
            }
            .footer-links {
                margin-top: 10px;
            }
            @media (max-width: 200px) {
                .footer{
                    background-color: darkgrey;
                }
                .footer-content,.icons,.logo,.copyright,.footer-links{
                    display: none;
                }
            }
        }
    </style>
</head>
<body>
    <footer class="">
        <div class="footer-content container d-flex">
            <!-- Lado Esquerdo: Logo e Copyright -->
            <div class="logo"><!-- O logo é o nome da classe -->
                <img src="../images/logo_azul_final.svg" alt="Logo">
                <p class="copyright">&copy; Peregrinus 2024. Todos os direitos reservados.</p>
            </div>

            <!-- Meio: Título e Ícones de Cartões -->
            <div class="icons text-center"> <!-- O icons é o nome da classe -->
                <p>Aceitamos os cartões</p>
                <i class="fab fa-cc-visa"></i>
                <i class="fab fa-cc-mastercard"></i>
                <i class="fab fa-cc-amex"></i>
                <i class="fab fa-cc-elo"></i>
            </div>

            <!-- Lado Direito: Links -->
            <div class="footer-links text-end"><!-- O footer-links é o nome da classe -->
                <a href="#">Trabalhe conosco</a>
                <a href="#">Contato</a>
                <a href="#">FAQ</a>
            </div>
        </div>
    `;
    document.querySelector('body').insertAdjacentHTML('beforeend', footerHTML);
}

loadHeader();
loadFooter();
